export type ToolCategory =
  | "generators"
  | "developer"
  | "text"
  | "image"
  | "pdf";

export interface ToolMeta {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
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
    metaTitle: "Free QR Code Generator Online (No Signup, Instant Download)",
    metaDescription:
      "Free QR code generator online—WhatsApp-friendly links, website URLs, no signup. Create a QR code for business or personal use; customize colors, instant PNG download.",
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
    metaTitle: "Strong Random Password Generator Online (Free, Secure)",
    metaDescription:
      "Strong password generator online—random, secure, with symbols. Free tool, no login. Create passwords that meet strict site rules in one click.",
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
    keywords: ["uuid", "guid", "unique id"],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text in paragraphs, sentences, or words.",
    category: "generators",
    keywords: ["lorem ipsum", "placeholder text", "dummy text"],
  },
  {
    slug: "random-number-generator",
    name: "Random Number Generator",
    description: "Generate random numbers within a range. Single or multiple, with optional duplicates.",
    category: "generators",
    keywords: ["random number", "random integer", "number generator"],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter / Validator",
    description: "Format, validate, and beautify JSON. Detect syntax errors.",
    category: "developer",
    metaTitle: "JSON Formatter Online Free — Beautify & Validate JSON",
    metaDescription:
      "JSON formatter online free: beautify, validate, and pretty-print JSON. JSON viewer in your browser—fix syntax errors fast, no signup.",
    h1Title: "JSON Formatter & Beautifier Online",
    introLead:
      "Paste minified or broken JSON and get readable, indented output with clear validation errors. Perfect for APIs, configs, and debugging.",
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
    keywords: ["base64", "encode", "decode"],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    description: "Encode or decode URL-encoded (percent-encoded) strings.",
    category: "developer",
    keywords: ["url encode", "percent encode", "decode url"],
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes from text.",
    category: "developer",
    keywords: ["hash", "md5", "sha256", "checksum"],
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs. No data sent to server.",
    category: "text",
    metaTitle: "Free Word Counter Online (Character & Sentence Count Tool)",
    metaDescription:
      "Free word counter online with character and sentence count—no login. Copy-paste or type; perfect for students, essays, and social limits.",
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
    metaTitle: "Compress Images Online Free — Fast JPEG/PNG/WebP",
    metaDescription:
      "Compress image online free without losing too much quality. Fast image compressor in your browser—smaller files for web, email, and social.",
    h1Title: "Free Image Compressor Online",
    introLead:
      "Shrink JPEG, PNG, or WebP files before you upload. Processing stays on your device—no signup, quick downloads.",
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
    keywords: ["png to jpg", "convert png", "png jpeg"],
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WebP Converter",
    description: "Convert JPG/JPEG images to WebP format. Smaller file size, same quality.",
    category: "image",
    keywords: ["jpg to webp", "convert to webp", "jpeg webp"],
  },
  {
    slug: "image-resizer",
    name: "Image Resizer",
    description: "Resize images by pixels or percentage. Keep aspect ratio or set custom dimensions.",
    category: "image",
    metaTitle: "Image Resizer Online Free — Pixels, %, Instagram-Ready",
    metaDescription:
      "Image resizer online free: change width and height by pixels or percent. Resize images for Instagram, avatars, and web—local processing, no signup.",
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
    keywords: ["crop image", "image crop", "cut image"],
  },
  {
    slug: "image-to-base64",
    name: "Image to Base64 Converter",
    description: "Convert images to Base64 data URL. Copy or use in HTML/CSS.",
    category: "image",
    keywords: ["image base64", "base64 image", "data url image"],
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    description: "Extract text from PDF and download as a Word (.docx) document.",
    category: "pdf",
    keywords: ["pdf to word", "convert pdf to docx", "pdf word"],
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    description: "Convert Word (.docx) documents to PDF. Upload and download in your browser.",
    category: "pdf",
    keywords: ["word to pdf", "docx to pdf", "convert word pdf"],
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    description: "Combine multiple PDF files into one. Reorder pages and download.",
    category: "pdf",
    keywords: ["merge pdf", "combine pdf", "join pdf"],
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    description: "Split a PDF into multiple files by page range or one file per page.",
    category: "pdf",
    keywords: ["split pdf", "extract pages", "pdf splitter"],
  },
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce PDF file size by lowering image resolution. Works in your browser.",
    category: "pdf",
    keywords: ["compress pdf", "reduce pdf size", "pdf compressor"],
  },
  {
    slug: "add-watermark-pdf",
    name: "Add Watermark to PDF",
    description: "Add text or image watermark to every page of your PDF.",
    category: "pdf",
    keywords: ["pdf watermark", "add watermark", "watermark pdf"],
  },
];

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
