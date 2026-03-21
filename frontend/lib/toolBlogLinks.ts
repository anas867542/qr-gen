/**
 * Maps tool slugs to related blog article slugs for internal linking (tools ↔ blog).
 */
export const TOOL_TO_BLOG_SLUGS: Record<string, string[]> = {
  "qr-code-generator": [
    "what-is-qr-code",
    "free-qr-code-generator-guide",
    "qr-code-for-business",
    "best-uses-qr-codes",
    "best-free-qr-code-generators-2026",
    "qr-code-whatsapp-link-how-to",
    "top-free-online-tools-for-students-2026",
  ],
  "password-generator": ["password-generator-complete-guide", "strong-password-checklist-2026"],
  "json-formatter": ["json-formatter-guide", "json-pretty-print-beginners"],
  "merge-pdf": [
    "how-to-merge-pdf-free",
    "pdf-tools-guide-merge-split-compress",
    "merge-pdf-online-free-guide",
    "free-pdf-tools-small-business",
  ],
  "split-pdf": ["pdf-tools-guide-merge-split-compress", "free-pdf-tools-small-business"],
  "compress-pdf": ["pdf-tools-guide-merge-split-compress", "free-pdf-tools-small-business"],
  "pdf-to-word": ["pdf-tools-guide-merge-split-compress"],
  "word-to-pdf": ["pdf-tools-guide-merge-split-compress"],
  "image-compressor": [
    "png-vs-jpg-vs-webp",
    "image-compression-guide",
    "compress-images-faster-website-loading",
  ],
  "image-resizer": ["how-to-resize-image-online", "image-compression-guide", "resize-images-social-media-free"],
  "png-to-jpg": ["image-compression-guide"],
  "jpg-to-webp": ["jpg-to-webp-converter-guide", "image-compression-guide"],
  "base64-encoder": ["base64-encoder-guide"],
  "word-counter": [
    "best-free-word-counter-tools-2026",
    "how-to-count-words-in-an-essay",
    "seo-character-count-meta-descriptions",
    "top-free-online-tools-for-students-2026",
  ],
};
