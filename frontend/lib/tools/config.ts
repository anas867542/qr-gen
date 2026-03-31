export type ToolCategory =
  | "generators"
  | "developer"
  | "text"
  | "image"
  | "pdf";

/** Browse hub grouping (aligned with SnappTools-style categories). */
export type ToolHubSection =
  | "developer"
  | "design"
  | "text"
  | "generators"
  | "calculators"
  | "seo"
  | "image"
  | "converters"
  | "pdf_documents"
  | "security";

export const HUB_SECTION_DISPLAY_ORDER: ToolHubSection[] = [
  "developer",
  "design",
  "text",
  "generators",
  "calculators",
  "seo",
  "image",
  "converters",
  "pdf_documents",
  "security",
];

export const TOOL_HUB_SECTION_META: Record<
  ToolHubSection,
  { label: string; lead: string; symbol: string }
> = {
  developer: {
    label: "Developer Tools",
    lead: "JSON, encoding, and developer utilities — fast and private.",
    symbol: "{ }",
  },
  design: {
    label: "Design Tools",
    lead: "Color, gradients, and creative helpers — more tools on the way.",
    symbol: "🎨",
  },
  text: {
    label: "Text Tools",
    lead: "Word counts, text cleanup, and writing helpers.",
    symbol: "📝",
  },
  generators: {
    label: "Generators",
    lead: "QR codes, passwords, UUIDs, placeholders, and random values.",
    symbol: "✨",
  },
  calculators: {
    label: "Calculators",
    lead: "Math and conversion calculators — category expanding.",
    symbol: "🔢",
  },
  seo: {
    label: "SEO & Marketing",
    lead: "Meta tags, previews, and marketing utilities — coming soon.",
    symbol: "📣",
  },
  image: {
    label: "Image Tools",
    lead: "Compress, resize, crop, and optimize images in your browser.",
    symbol: "🖼️",
  },
  converters: {
    label: "Converters",
    lead: "Convert between image and data formats instantly.",
    symbol: "🔄",
  },
  pdf_documents: {
    label: "PDF & Documents",
    lead: "Merge, split, compress, watermark, and convert PDFs locally.",
    symbol: "📑",
  },
  security: {
    label: "Security & Encryption",
    lead: "Hashes, URL-safe encoding, and cryptography helpers.",
    symbol: "🔒",
  },
};

export interface ToolMeta {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  /** Hub section for /#tools and /tools (SnappTools-style browse). */
  hubSection: ToolHubSection;
  /** Emoji shown on tool cards (reference: snappools.org style). */
  iconEmoji: string;
  keywords?: string[];
  /** Overrides `<title>` and primary SEO title (keep under ~60 chars). */
  metaTitle?: string;
  /** Overrides meta description / OG description (keep ~150–160 chars). */
  metaDescription?: string;
  /** Visible page H1 (optional; defaults to `name`). */
  h1Title?: string;
  /** Short intro under H1 (optional; defaults to `description` + category line). */
  introLead?: string;
}

export const TOOL_CATEGORIES: Record<ToolCategory, string> = {
  generators: "Generator Tools",
  developer: "Developer Tools",
  text: "Text Tools",
  image: "Image Tools",
  pdf: "PDF Tools",
};

export const TOOLS: ToolMeta[] = [
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create QR codes for URLs, text, and Wi‑Fi. Customize colors and size, download PNG.",
    category: "generators",
    hubSection: "generators",
    iconEmoji: "📱",
    metaTitle: "Free QR Code Generator – Create QR Codes Online | Snapptools",
    metaDescription:
      "Create free QR codes for URLs, Wi-Fi, and text. Customize colors and size, then download as PNG. No signup required — works instantly in your browser.",
    h1Title: "Free QR Code Generator Online",
    introLead:
      "Create a QR code for a website link, plain text, or Wi‑Fi in seconds. No account, instant preview, and PNG download—ideal for business cards, menus, and campaigns.",
    keywords: [
      "free qr code generator online",
      "qr code generator for whatsapp",
      "create qr code without signup",
      "qr code generator for link free",
      "instant qr code generator",
      "qr code generator for business",
      "generate qr code for website link",
      "qr code",
      "generate qr",
    ],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Generate strong random passwords with customizable length and character sets.",
    category: "generators",
    hubSection: "generators",
    iconEmoji: "🔐",
    metaTitle: "Free Password Generator – Strong Random Passwords | Snapptools",
    metaDescription:
      "Generate strong, random passwords with custom length and character sets. Free, instant, and private — your passwords are never sent to our servers.",
    h1Title: "Strong Password Generator Online",
    introLead:
      "Generate random passwords with letters, numbers, and symbols. Runs in your browser—nothing is stored or sent to our servers.",
    keywords: [
      "strong password generator online",
      "random password generator free",
      "secure password generator tool",
      "generate password with symbols online",
      "password generator",
      "random password",
    ],
  },
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate UUIDs (v4) for unique identifiers. Copy or bulk generate.",
    category: "generators",
    hubSection: "generators",
    iconEmoji: "🆔",
    keywords: ["uuid", "guid", "unique id"],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text in paragraphs, sentences, or words.",
    category: "generators",
    hubSection: "generators",
    iconEmoji: "📄",
    metaTitle: "Lorem Ipsum Generator – Free Placeholder Text | Snapptools",
    metaDescription:
      "Generate Lorem Ipsum placeholder text by paragraphs, sentences, or words. Free and instant — perfect for designers and developers.",
    keywords: ["lorem ipsum", "placeholder text", "dummy text"],
  },
  {
    slug: "random-number-generator",
    name: "Random Number Generator",
    description: "Generate random numbers within a range. Single or multiple, with optional duplicates.",
    category: "generators",
    hubSection: "generators",
    iconEmoji: "🎲",
    metaTitle: "Random Number Generator – Free Online Tool | Snapptools",
    metaDescription:
      "Generate random numbers within any range. Single or multiple numbers, with or without duplicates. Free, instant, no signup needed.",
    keywords: ["random number", "random integer", "number generator"],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter / Validator",
    description: "Format, validate, and beautify JSON. Detect syntax errors.",
    category: "developer",
    hubSection: "developer",
    iconEmoji: "📋",
    metaTitle: "JSON Formatter & Validator – Beautify & Validate JSON Online | Snapptools",
    metaDescription:
      "Format, validate, and beautify JSON instantly online. Detect syntax errors, pretty-print nested objects, and clean up minified JSON — free, no signup, runs in your browser.",
    h1Title: "Free JSON Formatter, Validator & Beautifier Online",
    introLead:
      "Paste minified or broken JSON and get a clean, indented result in one click. Our free JSON formatter validates syntax, highlights errors by line, and pretty-prints nested objects — all in your browser with no data uploaded.",
    keywords: [
      "json formatter online free",
      "json beautifier and validator",
      "format json online tool",
      "json viewer free",
      "json pretty print online",
      "json formatter",
      "json validator",
      "beautify json",
    ],
  },
  {
    slug: "base64-encoder",
    name: "Base64 Encoder / Decoder",
    description: "Encode text to Base64 and decode Base64 to text. Works entirely in your browser.",
    category: "developer",
    hubSection: "developer",
    iconEmoji: "🔣",
    metaTitle: "Base64 Encoder & Decoder – Free Online Tool | Snapptools",
    metaDescription:
      "Encode text to Base64 or decode Base64 strings back to plain text instantly. Free, private, and runs entirely in your browser. No signup required.",
    h1Title: "Free Base64 Encoder & Decoder Online",
    introLead:
      "Encode any text string to Base64, or paste a Base64 string to decode it back to plain text — instantly, in your browser, with nothing uploaded to our servers.",
    keywords: ["base64", "encode", "decode"],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    description: "Encode or decode URL-encoded (percent-encoded) strings.",
    category: "developer",
    hubSection: "security",
    iconEmoji: "🌐",
    metaTitle: "URL Encoder & Decoder – Percent-Encode Strings Online Free | Snapptools",
    metaDescription:
      "Encode special characters in URLs to percent-encoded format, or decode percent-encoded strings back to readable text. Free, instant, runs in your browser.",
    h1Title: "Free URL Encoder & Decoder Online",
    introLead:
      "Convert any string to URL-safe percent-encoded format, or decode a percent-encoded URL back to readable text. Instant results, no signup, runs in your browser.",
    keywords: ["url encode", "percent encode", "decode url"],
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes from text.",
    category: "developer",
    hubSection: "security",
    iconEmoji: "🔑",
    metaTitle: "Hash Generator – MD5, SHA-1, SHA-256, SHA-512 Online | Snapptools",
    metaDescription:
      "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text. Free online hash generator — instant results, no data sent to servers.",
    keywords: ["hash", "md5", "sha256", "checksum"],
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs. No data sent to server.",
    category: "text",
    hubSection: "text",
    iconEmoji: "📝",
    metaTitle: "Free Word Counter – Count Words, Characters & More Online | Snapptools",
    metaDescription:
      "Count words, characters, sentences, and paragraphs in seconds. Free online word counter — paste your text and get instant results. No data sent to our servers.",
    h1Title: "Free Word Counter Online Tool",
    introLead:
      "Count words, characters (with and without spaces), sentences, and paragraphs instantly. Ideal for essay limits, meta descriptions, and captions—all in your browser.",
    keywords: [
      "free word counter online",
      "word counter for students",
      "word count tool without login",
      "online word counter with character count",
      "word counter for essay writing",
      "fast word counter tool",
      "word counter for paragraphs",
      "word counter copy paste online",
      "word count",
      "character count",
    ],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress images (JPEG/PNG/WebP) in the browser. Reduce file size before upload.",
    category: "image",
    hubSection: "image",
    iconEmoji: "🗜️",
    metaTitle: "Free Image Compressor – Compress JPG, PNG & WebP Online | Snapptools",
    metaDescription:
      "Compress JPG, PNG, and WebP images online for free. Reduce file size before uploading to websites, email, or social media — instant results, no signup, runs in your browser.",
    h1Title: "Free Image Compressor — Reduce Image Size Online",
    introLead:
      "Compress JPEG, PNG, and WebP images directly in your browser. Drag in your image, adjust the quality slider, and download a smaller file in seconds — no upload to our servers, no signup required.",
    keywords: [
      "compress image without losing quality",
      "image compressor fast online",
      "compress image",
      "reduce image size",
      "image optimizer",
      "free image compression",
    ],
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG Converter",
    description: "Convert PNG images to JPG/JPEG. Adjust quality and download.",
    category: "image",
    hubSection: "converters",
    iconEmoji: "🔄",
    metaTitle: "PNG to JPG Converter – Free Online Image Converter | Snapptools",
    metaDescription:
      "Convert PNG images to JPG/JPEG online for free. Adjust quality and download instantly. No upload to servers — runs entirely in your browser.",
    keywords: ["png to jpg", "convert png", "png jpeg"],
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WebP Converter",
    description: "Convert JPG/JPEG images to WebP format. Smaller file size, same quality.",
    category: "image",
    hubSection: "converters",
    iconEmoji: "🔄",
    metaTitle: "JPG to WebP Converter – Free Online | Snapptools",
    metaDescription:
      "Convert JPG images to WebP format for smaller file sizes without losing quality. Free, instant, and private — no signup required.",
    keywords: ["jpg to webp", "convert to webp", "jpeg webp"],
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    description: "Resize images by pixels or percentage. Keep aspect ratio or set custom dimensions.",
    category: "image",
    hubSection: "image",
    iconEmoji: "📏",
    metaTitle: "Free Image Resizer – Resize Images Online by Pixels or % | Snapptools",
    metaDescription:
      "Resize images by pixels or percentage online for free. Keep aspect ratio or set custom dimensions. Fast, private, and no signup required.",
    h1Title: "Free Image Resizer Online",
    introLead:
      "Resize photos and graphics by exact pixels or percentage, with optional aspect ratio lock—ready for social posts, listings, and websites.",
    keywords: [
      "image resizer online free",
      "resize image for instagram",
      "resize image",
      "image size",
      "scale image",
      "photo resizer",
    ],
  },
  {
    slug: "image-crop",
    name: "Image Crop Tool",
    description: "Crop images to a selected area. Download the cropped result.",
    category: "image",
    hubSection: "image",
    iconEmoji: "✂️",
    metaTitle: "Free Online Image Crop Tool – Crop Images Instantly | Snapptools",
    metaDescription:
      "Crop images to any area online. Select your crop area and download the result instantly — free, private, no signup, runs in your browser.",
    keywords: ["crop image", "image crop", "cut image"],
  },
  {
    slug: "image-to-base64",
    name: "Image to Base64 Converter",
    description: "Convert images to Base64 data URL. Copy or use in HTML/CSS.",
    category: "image",
    hubSection: "image",
    iconEmoji: "📤",
    metaTitle: "Image to Base64 Converter – Free Online Tool | Snapptools",
    metaDescription:
      "Convert images to Base64 data URLs for use in HTML and CSS. Free, instant, and private — your image never leaves your browser.",
    keywords: ["image base64", "base64 image", "data url image"],
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    description: "Extract text from PDF and download as a Word (.docx) document.",
    category: "pdf",
    hubSection: "pdf_documents",
    iconEmoji: "📑",
    metaTitle: "PDF to Word Converter – Free Online, No Signup | Snapptools",
    metaDescription:
      "Convert PDF files to Word (.docx) documents online for free. Extract text and download instantly. No signup, no file uploads to servers.",
    keywords: ["pdf to word", "convert pdf to docx", "pdf word"],
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word (.docx) documents to PDF. Upload and download in your browser.",
    category: "pdf",
    hubSection: "pdf_documents",
    iconEmoji: "📄",
    metaTitle: "Word to PDF Converter – Free Online | Snapptools",
    metaDescription:
      "Convert Word (.docx) documents to PDF online for free. Upload your file and download the converted PDF instantly. No signup required.",
    keywords: ["word to pdf", "docx to pdf", "convert word pdf"],
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    description: "Combine multiple PDF files into one. Reorder pages and download.",
    category: "pdf",
    hubSection: "pdf_documents",
    iconEmoji: "📋",
    metaTitle: "Merge PDF Files Free Online – Combine PDFs Instantly | Snapptools",
    metaDescription:
      "Combine multiple PDF files into one online for free. Upload your PDFs, arrange the order, and download your merged file instantly. No signup, no file size limit, runs in your browser.",
    h1Title: "Free PDF Merger — Combine PDF Files Online",
    introLead:
      "Upload two or more PDF files, drag to arrange the order you want, and download a single merged PDF in seconds. No account needed, no file size limit, and your documents never leave your browser.",
    keywords: ["merge pdf", "combine pdf", "join pdf"],
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    description: "Split a PDF into multiple files by page range or one file per page.",
    category: "pdf",
    hubSection: "pdf_documents",
    iconEmoji: "✂️",
    metaTitle: "Split PDF Free Online – Separate PDF Pages | Snapptools",
    metaDescription:
      "Split a PDF into multiple files by page range or one page per file. Free, instant, and private — no signup, no data sent to servers.",
    keywords: ["split pdf", "extract pages", "pdf splitter"],
  },
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce PDF file size by lowering image resolution. Works in your browser.",
    category: "pdf",
    hubSection: "pdf_documents",
    iconEmoji: "🗜️",
    metaTitle: "Compress PDF Free Online – Reduce PDF File Size | Snapptools",
    metaDescription:
      "Reduce PDF file size by lowering image resolution. Free online PDF compressor — works in your browser, no signup or upload to servers needed.",
    keywords: ["compress pdf", "reduce pdf size", "pdf compressor"],
  },
  {
    slug: "add-watermark-pdf",
    name: "Add Watermark to PDF",
    description: "Add text or image watermark to every page of your PDF.",
    category: "pdf",
    hubSection: "pdf_documents",
    iconEmoji: "💧",
    metaTitle: "Add Watermark to PDF Free Online | Snapptools",
    metaDescription:
      "Add a text or image watermark to every page of your PDF for free. No signup required — works instantly in your browser.",
    keywords: ["pdf watermark", "add watermark", "watermark pdf"],
  },
  {
    slug: "resume-templates",
    name: "Resume & CV Builder",
    description:
      "15 modern resume templates with photo, languages, and certificates. Europass-style and country presets. Download editable Word (.docx) or HTML — private, in your browser.",
    category: "text",
    hubSection: "text",
    iconEmoji: "📄",
    metaTitle: "Free CV & Resume Builder — 15 Templates, Photo, Europass-Style | Snapptools",
    metaDescription:
      "Create a professional CV online: 15 layouts, profile photo, languages, certifications, US/UK/EU/ATS presets. Download editable .docx or .html. No upload — runs in your browser.",
    h1Title: "Free Resume & CV Builder — 15 Templates, Photo & Downloads",
    introLead:
      "Pick a format preset (International, Europass-style, US, UK, DE/AT/CH, ATS), choose from 15 visual templates, add an optional photo, languages, and certificates — then download a real .docx or .html file you can keep editing.",
    keywords: [
      "free resume builder",
      "cv template free download",
      "resume template with photo",
      "europass cv template",
      "europass style cv",
      "editable resume template word",
      "cv maker online free",
      "ats friendly resume template",
      "uk cv template",
      "us resume template",
      "lebenslauf vorlage",
      "curriculum vitae template",
      "resume docx download",
      "html resume template",
    ],
  },
];

export function getToolsByHubSection(section: ToolHubSection): ToolMeta[] {
  return TOOLS.filter((t) => t.hubSection === section);
}

/** Hub sections that currently have at least one tool (for chips / footer). */
export function getHubSectionsInUse(): ToolHubSection[] {
  return HUB_SECTION_DISPLAY_ORDER.filter((s) => TOOLS.some((t) => t.hubSection === s));
}

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return TOOLS.filter((t) => t.category === category);
}

/** Get related tools (same category, excluding current). For clustering SEO / internal linking. */
export function getRelatedTools(tool: ToolMeta, limit = 4): ToolMeta[] {
  return TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, limit);
}

import { SITE_NAME, getBaseUrl } from "@/lib/siteConfig";

function getToolBaseUrl(): string {
  try {
    return getBaseUrl();
  } catch {
    return "https://snapptools.net";
  }
}

/** SEO metadata for a tool page. Use in each tool page: export const metadata = getToolMetadata("slug"); */
export function getToolMetadata(slug: string): import("next").Metadata {
  const tool = getToolBySlug(slug);
  if (!tool) {
    return { title: "Tool not found" };
  }
  const base = getToolBaseUrl();
  const url = `${base.replace(/\/$/, "")}/tools/${tool.slug}`;
  const title = tool.metaTitle ?? `${tool.name} — ${SITE_NAME}`;
  const rawDesc = tool.metaDescription ?? tool.description;
  const description = rawDesc.length > 160 ? rawDesc.slice(0, 157) + "…" : rawDesc;
  const keywords = tool.keywords ?? [tool.name.toLowerCase(), "free online tool"];
  const ogTitle = tool.metaTitle ?? tool.name;
  const ogDescription = tool.metaDescription ?? tool.description;
  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
    alternates: { canonical: url },
  };
}
