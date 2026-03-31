import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ResumeTemplates } from "@/components/tools/ResumeTemplates";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata = getToolMetadata("resume-templates");

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to build and download a free resume with ${SITE_NAME}`,
  description:
    "Choose a CV format preset, pick a template, add your experience and optional photo, then download Word or HTML.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      name: "Choose format",
      text: "Use the strip at the top of the builder for section labels: International, Europass-style, US, UK, DE/AT/CH, or ATS simple.",
    },
    {
      "@type": "HowToStep",
      name: "Pick a template",
      text: "Select one of fifteen visual layouts. Upload an optional profile photo (JPG, PNG, or WebP).",
    },
    {
      "@type": "HowToStep",
      name: "Complete your CV",
      text: "Fill profile, experience, education, languages, skills, and certifications. Add or remove roles and schools as needed.",
    },
    {
      "@type": "HowToStep",
      name: "Export",
      text: "Download .docx to edit in Microsoft Word or Google Docs, or .html for a portable file you can tweak or print to PDF.",
    },
  ],
};

export default function Page() {
  const tool = getToolBySlug("resume-templates");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <ResumeTemplates />
    </ToolLayout>
  );
}
