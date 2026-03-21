# Open Graph & Social Meta Tags

Add these inside `<head>` on every page. The og:image should be a real image on your domain.
Create a single 1200×630px branded image (e.g. /og-image.png) and reuse it sitewide,
or create per-page versions for the most important tools.

---

## Base template (add to every page's <head>)

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://snapptools.net/" />
<meta property="og:title" content="Snapptools – Free QR Code Generator & Online Tools" />
<meta property="og:description" content="Free online tools — QR codes, passwords, JSON formatter, PDF merger, image compressor, and more. No signup, runs in your browser." />
<meta property="og:image" content="https://snapptools.net/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Snapptools" />

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://snapptools.net/" />
<meta name="twitter:title" content="Snapptools – Free QR Code Generator & Online Tools" />
<meta name="twitter:description" content="Free online tools — QR codes, passwords, JSON formatter, PDF merger, image compressor, and more. No signup, runs in your browser." />
<meta name="twitter:image" content="https://snapptools.net/og-image.png" />

<!-- Canonical URL (change per page) -->
<link rel="canonical" href="https://snapptools.net/" />
```

---

## Per-page og:url and og:title overrides

For each tool page, override these two tags with the page-specific values.
The og:image and og:description can remain the same sitewide.

| Page | og:url | og:title |
|------|--------|----------|
| Homepage | https://snapptools.net/ | Snapptools – Free QR Code Generator & Online Tools |
| QR Generator | https://snapptools.net/tools/qr-code-generator | Free QR Code Generator – No Signup | Snapptools |
| Password Generator | https://snapptools.net/tools/password-generator | Free Password Generator | Snapptools |
| JSON Formatter | https://snapptools.net/tools/json-formatter | Free JSON Formatter & Validator | Snapptools |
| Word Counter | https://snapptools.net/tools/word-counter | Free Word Counter | Snapptools |
| Merge PDF | https://snapptools.net/tools/merge-pdf | Free PDF Merger – Combine PDFs Online | Snapptools |
| Image Compressor | https://snapptools.net/tools/image-compressor | Free Image Compressor | Snapptools |
| Blog | https://snapptools.net/blog | Guides & Articles | Snapptools |

---

## OG Image specs

Create /public/og-image.png at 1200×630px containing:
- Snapptools logo / wordmark
- Tagline: "Free online tools. No signup."
- A grid showing 6–8 tool icons (QR, PDF, image, etc.)
- Dark or branded background

Tools to create it: Canva (free), Figma, or any image editor.
