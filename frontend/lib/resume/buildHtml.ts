import type { ResumeData, ResumeTemplateId } from "./types";
import type { FormatLabels } from "./formats";
import { parseBullets, parseSkills } from "./types";
import { RESUME_HTML_BASE, TEMPLATE_CSS } from "./resumeHtmlStyles";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safePhotoSrc(url: string | null): string | null {
  if (!url || !url.startsWith("data:image/")) return null;
  return url;
}

function contactParts(data: ResumeData): string[] {
  const parts = [data.email, data.phone, data.location, data.linkedin, data.website].filter(Boolean).map(esc);
  return parts;
}

function sectionsHtml(data: ResumeData, labels: FormatLabels): string {
  const skills = parseSkills(data.skills);
  const langLines = data.languages
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  const certLines = data.certifications
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const expHtml = data.experience
    .filter((e) => e.title || e.company)
    .map((e) => {
      const meta = [e.location, e.dates].filter(Boolean).map(esc).join(" · ");
      const bullets = parseBullets(e.bullets)
        .map((b) => `<li>${esc(b)}</li>`)
        .join("");
      return `<div class="exp">
  <div class="exp-head"><span class="exp-title">${esc(e.title || "Role")}</span>${e.company ? ` — <span class="exp-co">${esc(e.company)}</span>` : ""}</div>
  ${meta ? `<div class="exp-meta">${meta}</div>` : ""}
  ${bullets ? `<ul class="bullets">${bullets}</ul>` : ""}
</div>`;
    })
    .join("");

  const eduHtml = data.education
    .filter((e) => e.degree || e.school)
    .map(
      (e) =>
        `<div class="edu"><strong>${esc(e.degree || "")}</strong>${e.school ? ` — ${esc(e.school)}` : ""}${e.year ? ` <span class="year">${esc(e.year)}</span>` : ""}</div>`
    )
    .join("");

  let html = "";
  if (data.summary.trim()) {
    html += `<h2>${esc(labels.summary)}</h2><p class="summary">${esc(data.summary.trim())}</p>`;
  }
  if (expHtml) html += `<h2>${esc(labels.experience)}</h2>${expHtml}`;
  if (eduHtml) html += `<h2>${esc(labels.education)}</h2>${eduHtml}`;
  if (langLines.length) {
    html += `<h2>${esc(labels.languages)}</h2><div class="langblk">${langLines.map((l) => `<div>${esc(l)}</div>`).join("")}</div>`;
  }
  if (skills.length) {
    html += `<h2>${esc(labels.skills)}</h2><p class="skillsblk">${skills.map(esc).join(" · ")}</p>`;
  }
  if (certLines.length) {
    html += `<h2>${esc(labels.certifications)}</h2><div class="certblk">${certLines.map((c) => `<div>${esc(c)}</div>`).join("")}</div>`;
  }
  return html;
}

function standardHeader(data: ResumeData, photo: string | null, labels: FormatLabels): string {
  const img = photo ? `<img class="photo" src="${photo}" alt="" width="100" height="100"/>` : "";
  const contacts = contactParts(data)
    .map((c) => `<div class="contactline">${c}</div>`)
    .join("");
  const job =
    labels.jobTarget && data.jobTarget.trim()
      ? `<div class="jobtarget"><strong>${esc(labels.jobTarget)}</strong> — ${esc(data.jobTarget.trim())}</div>`
      : "";
  return `<div class="header">${img ? img : ""}<div class="head-main">
<h1>${esc(data.fullName || "Your Name")}</h1>
${data.headline ? `<p class="headline">${esc(data.headline)}</p>` : ""}
${contacts}
</div></div>${job}`;
}

function sidebarLayout(data: ResumeData, photo: string | null, labels: FormatLabels, sections: string): string {
  const img = photo ? `<img class="photo" src="${photo}" alt="" />` : "";
  const contacts = contactParts(data)
    .map((c) => `<div class="contactline">${c}</div>`)
    .join("");
  const job =
    labels.jobTarget && data.jobTarget.trim()
      ? `<div class="jobtarget"><strong>${esc(labels.jobTarget)}</strong> — ${esc(data.jobTarget.trim())}</div>`
      : "";
  return `<aside class="side">${img}<h1>${esc(data.fullName || "Your Name")}</h1>
${data.headline ? `<p class="headline">${esc(data.headline)}</p>` : ""}
${contacts}</aside><main class="main">${job}${sections}</main>`;
}

function photoHeroLayout(data: ResumeData, photo: string | null, labels: FormatLabels, sections: string): string {
  const ph = photo || "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect fill="#475569" width="400" height="200"/></svg>');
  const contacts = contactParts(data).join(" · ");
  const job =
    labels.jobTarget && data.jobTarget.trim()
      ? `<div class="jobtarget"><strong>${esc(labels.jobTarget)}</strong> — ${esc(data.jobTarget.trim())}</div>`
      : "";
  return `<div class="herophoto"><img class="photo" src="${ph}" alt=""/><div class="overlay"></div>
<div class="herotext"><h1>${esc(data.fullName || "Your Name")}</h1>${data.headline ? `<p class="headline">${esc(data.headline)}</p>` : ""}</div></div>
<div class="contactbelow">${esc(contacts)}</div>${job}<div class="inner">${sections}</div>`;
}

function magazineLayout(data: ResumeData, photo: string | null, labels: FormatLabels, sections: string): string {
  const img = photo ? `<img class="photo" src="${photo}" alt=""/>` : `<div class="photo" style="width:120px;height:140px;background:#333"></div>`;
  const contacts = contactParts(data).join(" · ");
  const job =
    labels.jobTarget && data.jobTarget.trim()
      ? `<div class="jobtarget"><strong>${esc(labels.jobTarget)}</strong> — ${esc(data.jobTarget.trim())}</div>`
      : "";
  return `<div class="magtop"><div><h1>${esc(data.fullName || "Your Name")}</h1>
${data.headline ? `<p class="headline">${esc(data.headline)}</p>` : ""}
<p class="contactline">${esc(contacts)}</p></div>${img}</div>${job}<div class="inner">${sections}</div>`;
}

function wrapTopInner(
  data: ResumeData,
  photo: string | null,
  labels: FormatLabels,
  sections: string,
  wrapClass: string
): string {
  const head = standardHeader(data, photo, labels);
  return `<div class="${wrapClass}">${head}</div><div class="inner">${sections}</div>`;
}

export function buildResumeBodyInner(data: ResumeData, template: ResumeTemplateId, labels: FormatLabels): string {
  const photo = safePhotoSrc(data.photoDataUrl);
  const sections = sectionsHtml(data, labels);

  switch (template) {
    case "sidebar-charcoal":
      return sidebarLayout(data, photo, labels, sections);
    case "photo-hero":
      return photoHeroLayout(data, photo, labels, sections);
    case "split-magazine":
      return magazineLayout(data, photo, labels, sections);
    case "coral-bright":
      return wrapTopInner(data, photo, labels, sections, "topbar");
    case "slate-tech":
      return wrapTopInner(data, photo, labels, sections, "banner");
    case "gradient-aurora":
      return wrapTopInner(data, photo, labels, sections, "hero");
    default:
      return `${standardHeader(data, photo, labels)}${sections}`;
  }
}

export function buildResumeHtml(data: ResumeData, template: ResumeTemplateId, labels: FormatLabels): string {
  const bodyClass = `tpl-${template}`;
  const css = RESUME_HTML_BASE + TEMPLATE_CSS[template];
  const inner = buildResumeBodyInner(data, template, labels);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${esc(data.fullName || "Resume")} — CV</title>
<style>${css}</style>
</head>
<body class="${bodyClass}">
${inner}
</body>
</html>`;
}

/** Map template CSS that targets `body.tpl-*` to a nested preview container (avoids iframe + scroll jank). */
export function scopeResumeCssForPreview(fullCss: string): string {
  return fullCss.replace(/body\.tpl-/g, ".resume-preview-root .preview-body.tpl-");
}

/** For in-page preview: scoped style + inner HTML (same as full HTML body content). */
export function getResumePreviewParts(data: ResumeData, template: ResumeTemplateId, labels: FormatLabels): {
  css: string;
  bodyClass: string;
  innerHtml: string;
} {
  return {
    css: scopeResumeCssForPreview(RESUME_HTML_BASE + TEMPLATE_CSS[template]),
    bodyClass: `tpl-${template}`,
    innerHtml: buildResumeBodyInner(data, template, labels),
  };
}
