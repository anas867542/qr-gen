/** CV structure presets — selected from the top bar (not buried in body copy). */
export type ResumeFormatId = "international" | "europass" | "us" | "uk" | "german" | "ats";

export const RESUME_FORMAT_OPTIONS: {
  id: ResumeFormatId;
  shortLabel: string;
  /** For aria-label / title only */
  hint: string;
}[] = [
  { id: "international", shortLabel: "International", hint: "Neutral headings, widely accepted" },
  { id: "europass", shortLabel: "Europass-style", hint: "EU-style section order and labels (not an official Europass file)" },
  { id: "us", shortLabel: "US résumé", hint: "Concise, impact-focused headings" },
  { id: "uk", shortLabel: "UK CV", hint: "British-style wording for sections" },
  { id: "german", shortLabel: "DE / AT / CH", hint: "German-speaking market — tabular-friendly labels" },
  { id: "ats", shortLabel: "ATS simple", hint: "Plain structure for applicant tracking systems" },
];

export interface FormatLabels {
  summary: string;
  experience: string;
  education: string;
  skills: string;
  languages: string;
  certifications: string;
  jobTarget?: string;
}

export function getFormatLabels(format: ResumeFormatId): FormatLabels {
  switch (format) {
    case "europass":
      return {
        summary: "Profile",
        experience: "Work experience",
        education: "Education and training",
        skills: "Digital & technical skills",
        languages: "Languages",
        certifications: "Certificates",
        jobTarget: "Job applied for (optional)",
      };
    case "us":
      return {
        summary: "Professional summary",
        experience: "Professional experience",
        education: "Education",
        skills: "Core skills",
        languages: "Languages",
        certifications: "Certifications",
      };
    case "uk":
      return {
        summary: "Personal statement",
        experience: "Employment history",
        education: "Education",
        skills: "Key skills",
        languages: "Languages",
        certifications: "Qualifications & certificates",
      };
    case "german":
      return {
        summary: "Profil / Kurzüberblick",
        experience: "Berufserfahrung",
        education: "Ausbildung",
        skills: "Fähigkeiten & Tools",
        languages: "Sprachen",
        certifications: "Zertifikate",
      };
    case "ats":
      return {
        summary: "Summary",
        experience: "Work experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        certifications: "Certifications",
      };
    default:
      return {
        summary: "Profile",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        certifications: "Certifications",
      };
  }
}
