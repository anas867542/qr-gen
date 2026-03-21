# Snapptools SEO Package — Implementation Guide for Cursor

Complete SEO upgrade package. Follow in order for maximum impact.

---

## Files in this package

```
snapptools-seo/
├── meta/
│   ├── meta-descriptions.md     ← <title> and <meta description> for every page
│   └── open-graph-tags.md       ← og: and twitter: tags, canonical URLs
├── schema/
│   └── json-ld-schema.md        ← JSON-LD structured data for every page
├── technical/
│   ├── sitemap.xml              ← Complete sitemap — place at /public/sitemap.xml
│   ├── robots.txt               ← Place at /public/robots.txt
│   └── backlink-strategy.md     ← Non-code steps to build authority
└── blog-content/
    └── blog-content-plan.md     ← 12 article ideas with keywords and outlines
```

---

## Step 1 — Deploy sitemap and robots.txt (5 mins)

Copy these files to your public root so they're accessible at:
- https://snapptools.net/sitemap.xml
- https://snapptools.net/robots.txt

If you're using Next.js / Astro / SvelteKit, place them in `/public/`.
If you're using Astro with file-based routing, you may prefer to generate the sitemap programmatically.

---

## Step 2 — Add meta tags to every page (30–60 mins)

Open `meta/meta-descriptions.md`. For each page:

1. Copy the `<title>` tag and replace your existing one
2. Add the `<meta name="description" ...>` tag inside `<head>`

### If you use a shared layout file (recommended):
Add the meta description as a prop/slot so each page can pass its own value.

Example (Astro):
```astro
---
// Layout.astro
const { title, description } = Astro.props;
---
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
</head>
```

Then in each page:
```astro
<Layout title="Free QR Code Generator | Snapptools" description="Create free QR codes for URLs, Wi-Fi, and text...">
```

---

## Step 3 — Add Open Graph tags (15 mins)

Open `meta/open-graph-tags.md`. Add the base OG block to your layout file.

**Important:** Create a 1200×630px branded image and place it at `/public/og-image.png`.
Update the `og:image` URL once this image exists.

Each page needs its own `og:url`, `og:title`, and `<link rel="canonical">`.
Pass these as props from each page, same as the meta description.

---

## Step 4 — Add JSON-LD schema (30–60 mins)

Open `schema/json-ld-schema.md`. For each page:

1. Copy the relevant `<script type="application/ld+json">` block
2. Paste it inside the `<head>` of that page

These are invisible to users and do not affect page layout or performance.

### For blog articles — use the template:
Replace `ARTICLE TITLE HERE`, `YYYY-MM-DD`, and `ARTICLE-SLUG` with real values.

### For tool pages with FAQ sections:
Also add the FAQPage schema block (at the bottom of the schema file).

---

## Step 5 — Add canonical URLs

Add this to every page's `<head>`, replacing the URL for each page:
```html
<link rel="canonical" href="https://snapptools.net/PAGE-URL" />
```

Canonical URLs prevent duplicate content issues and consolidate ranking signals.

---

## Step 6 — Verify in Google Search Console

After deploying:
1. Go to https://search.google.com/search-console
2. Add and verify your property
3. Submit: https://snapptools.net/sitemap.xml
4. Use "URL Inspection" to request indexing of your most important pages:
   - Homepage
   - QR Code Generator
   - Merge PDF
   - Password Generator
   - Word Counter
   - JSON Formatter

---

## Step 7 — Update blog article dates

For articles that have been reviewed/updated, change the `<lastmod>` date in `sitemap.xml`
and update the visible "last updated" date on the article page itself.

Priority articles to update dates on (these are already good quality):
- /blog/free-qr-code-generator-guide → update to 2026-03-20
- /blog/pdf-tools-guide-merge-split-compress → update to 2026-03-20
- /blog/password-generator-complete-guide → update to 2026-03-20
- /blog/image-compression-guide → update to 2026-03-20

---

## Step 8 — Non-code tasks (see backlink-strategy.md)

These don't require code but are critical for rankings:
1. Submit to Google Search Console (if not done)
2. Launch on Product Hunt
3. Submit to AlternativeTo
4. Post on Hacker News "Show HN"
5. Submit to tool directories

---

## Quick validation checklist

After implementation, check each page has:
- [ ] Unique `<title>` tag (50–60 chars)
- [ ] Unique `<meta name="description">` (150–160 chars)
- [ ] `<link rel="canonical">` pointing to its own URL
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter card tags
- [ ] JSON-LD schema block in `<head>`
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt
- [ ] Site submitted to Google Search Console

---

## Expected timeline for results

- Technical fixes (Steps 1–6): visible in Search Console within 1–2 weeks
- Rankings improvements: 4–12 weeks (Google re-crawls and re-ranks)
- Backlink impact: 2–6 months (authority builds slowly)
- Blog content: 3–6 months per article to rank

SEO is cumulative — each fix adds to the previous one. The most important thing is to implement everything and keep publishing content consistently.
