import type { ResumeFormatId } from "./formats";

export type ResumeTemplateId =
  | "mercury"
  | "teal-pulse"
  | "executive-navy"
  | "swiss-minimal"
  | "sidebar-charcoal"
  | "coral-bright"
  | "slate-tech"
  | "academic-ivory"
  | "europass-inspired"
  | "london-metro"
  | "gradient-aurora"
  | "timeline-accent"
  | "split-magazine"
  | "photo-hero"
  | "mono-engineer";

export const RESUME_TEMPLATE_LIST: {
  id: ResumeTemplateId;
  label: string;
  swatch: string;
}[] = [
  { id: "mercury", label: "Mercury", swatch: "linear-gradient(135deg,#7c3aed,#a78bfa)" },
  { id: "teal-pulse", label: "Teal pulse", swatch: "linear-gradient(135deg,#0d9488,#5eead4)" },
  { id: "executive-navy", label: "Executive", swatch: "linear-gradient(135deg,#1e3a5f,#c4a35a)" },
  { id: "swiss-minimal", label: "Swiss", swatch: "linear-gradient(135deg,#111,#525252)" },
  { id: "sidebar-charcoal", label: "Sidebar", swatch: "linear-gradient(90deg,#1f2937 40%,#e5e7eb)" },
  { id: "coral-bright", label: "Coral", swatch: "linear-gradient(135deg,#f97316,#fb7185)" },
  { id: "slate-tech", label: "Tech slate", swatch: "linear-gradient(135deg,#0f172a,#38bdf8)" },
  { id: "academic-ivory", label: "Academic", swatch: "linear-gradient(135deg,#faf8f3,#b45309)" },
  { id: "europass-inspired", label: "EU blue", swatch: "linear-gradient(135deg,#003399,#2563eb)" },
  { id: "london-metro", label: "Metro", swatch: "linear-gradient(135deg,#b91c1c,#111)" },
  { id: "gradient-aurora", label: "Aurora", swatch: "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)" },
  { id: "timeline-accent", label: "Timeline", swatch: "linear-gradient(180deg,#4f46e5,#e0e7ff)" },
  { id: "split-magazine", label: "Magazine", swatch: "linear-gradient(135deg,#18181b,#f43f5e)" },
  { id: "photo-hero", label: "Photo hero", swatch: "linear-gradient(135deg,#334155,#94a3b8)" },
  { id: "mono-engineer", label: "Engineer", swatch: "linear-gradient(135deg,#27272a,#71717a)" },
];

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  year: string;
}

export interface ResumeData {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  /** Europass-style optional line */
  jobTarget: string;
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string;
  languages: string;
  certifications: string;
  /** Base64 data URL or null */
  photoDataUrl: string | null;
  formatProfile: ResumeFormatId;
}

let idCounter = 0;
function uid() {
  idCounter += 1;
  return `r-${Date.now()}-${idCounter}`;
}

export const DEFAULT_RESUME_DATA: ResumeData = {
  fullName: "Alex Morgan",
  headline: "Product Designer & Frontend Developer",
  email: "alex.morgan@email.com",
  phone: "(555) 123-4567",
  location: "San Francisco, CA",
  linkedin: "linkedin.com/in/alexmorgan",
  website: "alexmorgan.design",
  jobTarget: "",
  summary:
    "Designer-developer with 5+ years building accessible web products. Passionate about design systems, performance, and clear user journeys.",
  experience: [
    {
      id: "exp-demo-1",
      title: "Senior Product Designer",
      company: "Northwind Labs",
      location: "Remote",
      dates: "2022 — Present",
      bullets:
        "Led end-to-end design for a B2B analytics dashboard used by 10k+ teams.\nShipped a component library that cut design–dev handoff time by 40%.",
    },
    {
      id: "exp-demo-2",
      title: "UX Designer",
      company: "Bright Apps Inc.",
      location: "Oakland, CA",
      dates: "2019 — 2022",
      bullets:
        "Redesigned onboarding; improved activation by 18%.\nConducted usability tests and iterated on mobile-first flows.",
    },
  ],
  education: [{ id: "edu-demo-1", degree: "B.S. Human–Computer Interaction", school: "State University", year: "2019" }],
  skills: "Figma · Design systems · HTML/CSS · React · Accessibility · User research",
  languages: "English — Native\nSpanish — Professional working proficiency",
  certifications: "Google UX Design Certificate (2023)",
  photoDataUrl: null,
  formatProfile: "international",
};

export function emptyExperience(): ExperienceItem {
  return {
    id: uid(),
    title: "",
    company: "",
    location: "",
    dates: "",
    bullets: "",
  };
}

export function emptyEducation(): EducationItem {
  return { id: uid(), degree: "", school: "", year: "" };
}

export function parseBullets(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((l) => l.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);
}

export function parseSkills(text: string): string[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (lines.length > 1) return lines;
  return text
    .split(/[,·|]/)
    .map((s) => s.trim())
    .filter(Boolean);
}
