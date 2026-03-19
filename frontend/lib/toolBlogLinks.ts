/**
 * Maps tool slugs to related blog article slugs for internal linking (tools ↔ blog).
 */
export const TOOL_TO_BLOG_SLUGS: Record<string, string[]> = {
  "qr-code-generator": [
    "what-is-qr-code",
    "free-qr-code-generator-guide",
    "qr-code-for-business",
    "best-uses-qr-codes",
  ],
  "password-generator": ["password-generator-complete-guide"],
  "json-formatter": ["json-formatter-guide"],
  "merge-pdf": ["pdf-tools-guide-merge-split-compress"],
  "split-pdf": ["pdf-tools-guide-merge-split-compress"],
  "compress-pdf": ["pdf-tools-guide-merge-split-compress"],
  "pdf-to-word": ["pdf-tools-guide-merge-split-compress"],
  "word-to-pdf": ["pdf-tools-guide-merge-split-compress"],
  "image-compressor": ["image-compression-guide"],
  "image-resizer": ["image-compression-guide"],
  "png-to-jpg": ["image-compression-guide"],
  "jpg-to-webp": ["image-compression-guide"],
  "base64-encoder": ["base64-encoder-guide"],
};
