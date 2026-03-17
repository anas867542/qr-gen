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
    keywords: ["qr code", "generate qr", "qr generator"],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Generate strong random passwords with customizable length and character sets.",
    category: "generators",
    keywords: ["password", "random password", "strong password"],
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
    keywords: ["json formatter", "json validator", "beautify json"],
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
    keywords: ["word count", "character count", "text statistics"],
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress images (JPEG/PNG/WebP) in the browser. Reduce file size before upload.",
    category: "image",
    keywords: ["compress image", "reduce image size", "image optimizer"],
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
    keywords: ["resize image", "image size", "scale image"],
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
