import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  ShadingType,
  ImageRun,
} from "docx";
import type { ResumeData, ResumeTemplateId } from "./types";
import type { FormatLabels } from "./formats";
import { parseBullets, parseSkills } from "./types";

const DOCX_ACCENT: Record<ResumeTemplateId, string> = {
  mercury: "6D28D9",
  "teal-pulse": "0F766E",
  "executive-navy": "1E3A5F",
  "swiss-minimal": "000000",
  "sidebar-charcoal": "1F2937",
  "coral-bright": "EA580C",
  "slate-tech": "38BDF8",
  "academic-ivory": "92400E",
  "europass-inspired": "003399",
  "london-metro": "B91C1C",
  "gradient-aurora": "6366F1",
  "timeline-accent": "4F46E5",
  "split-magazine": "F43F5E",
  "photo-hero": "475569",
  "mono-engineer": "27272A",
};

const DOCX_SECTION_FILL: Partial<Record<ResumeTemplateId, string>> = {
  mercury: "EDE9FE",
  "teal-pulse": "CCFBF1",
  "executive-navy": "E8EEF5",
  "europass-inspired": "E6ECF7",
  "gradient-aurora": "EDE9FE",
  "timeline-accent": "EEF2FF",
};

function safePhotoForDocx(url: string | null): string | null {
  if (!url || !url.startsWith("data:image/")) return null;
  return url;
}

const CENTERED_NAME: ResumeTemplateId[] = ["executive-navy", "academic-ivory"];

function sectionTitle(text: string, template: ResumeTemplateId): Paragraph {
  const fill = DOCX_ACCENT[template];
  const bg = DOCX_SECTION_FILL[template];
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 200, after: 100 },
    shading:
      bg === undefined
        ? undefined
        : {
            type: ShadingType.CLEAR,
            color: "auto",
            fill: bg,
          },
    border:
      template === "mercury" || template === "timeline-accent"
        ? {
            left: {
              color: fill,
              size: 24,
              style: BorderStyle.SINGLE,
            },
          }
        : template === "europass-inspired"
          ? {
              left: {
                color: "003399",
                size: 30,
                style: BorderStyle.SINGLE,
              },
            }
          : undefined,
    children: [new TextRun({ text, bold: true, color: fill })],
  });
}

export async function buildResumeDocx(data: ResumeData, template: ResumeTemplateId, labels: FormatLabels): Promise<Blob> {
  const children: Paragraph[] = [];
  const nameColor = DOCX_ACCENT[template];
  const photo = safePhotoForDocx(data.photoDataUrl);
  const centered = CENTERED_NAME.includes(template);

  if (photo) {
    try {
      children.push(
        new Paragraph({
          alignment: centered ? AlignmentType.CENTER : undefined,
          spacing: { after: 120 },
          children: [
            new ImageRun({
              data: photo,
              transformation: { width: 110, height: 110 },
            }),
          ],
        })
      );
    } catch {
      /* skip bad image */
    }
  }

  const contactLine = [data.email, data.phone, data.location, data.linkedin, data.website].filter(Boolean).join(" · ");

  if (centered) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: data.fullName || "Your Name", bold: true, size: 56, color: nameColor })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: data.headline, italics: true, size: 24 })],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 160 },
        children: [new TextRun({ text: contactLine, size: 20 })],
      })
    );
  } else {
    children.push(
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: data.fullName || "Your Name", bold: true, size: 56, color: nameColor })],
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: data.headline, italics: true, size: 24 })],
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun({ text: contactLine, size: 20 })],
      })
    );
  }

  if (labels.jobTarget && data.jobTarget.trim()) {
    children.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: `${labels.jobTarget}: `, bold: true }),
          new TextRun(data.jobTarget.trim()),
        ],
      })
    );
  }

  if (data.summary.trim()) {
    children.push(sectionTitle(labels.summary, template));
    children.push(
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun(data.summary.trim())],
      })
    );
  }

  if (data.experience.some((e) => e.title || e.company)) {
    children.push(sectionTitle(labels.experience, template));
    for (const exp of data.experience) {
      if (!exp.title && !exp.company) continue;
      children.push(
        new Paragraph({
          spacing: { before: 120, after: 40 },
          children: [
            new TextRun({ text: exp.title || "Role", bold: true, size: 24 }),
            new TextRun({ text: exp.company ? ` — ${exp.company}` : "", bold: true, size: 24 }),
          ],
        })
      );
      const meta = [exp.location, exp.dates].filter(Boolean).join(" · ");
      if (meta) {
        children.push(
          new Paragraph({
            spacing: { after: 80 },
            children: [new TextRun({ text: meta, italics: true, size: 20, color: "666666" })],
          })
        );
      }
      for (const line of parseBullets(exp.bullets)) {
        children.push(
          new Paragraph({
            spacing: { after: 40 },
            children: [new TextRun(`• ${line}`)],
          })
        );
      }
    }
  }

  if (data.education.some((e) => e.degree || e.school)) {
    children.push(sectionTitle(labels.education, template));
    for (const ed of data.education) {
      if (!ed.degree && !ed.school) continue;
      children.push(
        new Paragraph({
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({ text: ed.degree || "Degree", bold: true }),
            new TextRun({ text: ed.school ? ` — ${ed.school}` : "" }),
            new TextRun({ text: ed.year ? ` · ${ed.year}` : "", italics: true }),
          ],
        })
      );
    }
  }

  const langLines = data.languages
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (langLines.length) {
    children.push(sectionTitle(labels.languages, template));
    for (const line of langLines) {
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun(line)],
        })
      );
    }
  }

  const skills = parseSkills(data.skills);
  if (skills.length) {
    children.push(sectionTitle(labels.skills, template));
    children.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun(skills.join(" · "))],
      })
    );
  }

  const certLines = data.certifications
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (certLines.length) {
    children.push(sectionTitle(labels.certifications, template));
    for (const line of certLines) {
      children.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun(line)],
        })
      );
    }
  }

  if (children.length === 0) {
    children.push(new Paragraph({ children: [new TextRun("Add your details in the form and download again.")] }));
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });

  return Packer.toBlob(doc);
}
