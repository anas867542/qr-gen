# AdSense readiness checklist – Snapptools

Use this list to confirm your site is ready before applying for Google AdSense.

---

## 1. Content on all tools

| Status | What’s done |
|--------|-------------|
| ✅ | Every tool page has **300–500+ words** of content below the tool (What it is, How to use, Benefits, Use cases) in `ToolLayout` from `lib/toolGuides.ts`. |
| ✅ | Each tool page has a **“Related guides”** section linking to relevant blog posts. |

**Where:** Each `/tools/<slug>` page uses `ToolLayout`, which renders the guide sections from `lib/toolGuides.ts`.

---

## 2. Blog / articles (10–15 posts)

| Status | What’s done |
|--------|-------------|
| ✅ | **17+ articles** in `/blog` (e.g. What is a QR Code?, How QR Codes Work, Best Uses, QR for Business, WhatsApp, QR vs Barcode, Password Generator Guide, JSON Formatter Guide, PDF Tools Guide, Image Compression, Base64 Guide, etc.). |
| ✅ | Each post is **400–1000+ words**. |
| ✅ | Blog index at **/blog**; each article at **/blog/<slug>**. |
| ✅ | Blog linked in **header**, **footer**, and **homepage** (Guides & articles section). |

**Where:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `lib/blogArticles.ts`.

---

## 3. Trust / policy pages (required by AdSense)

| Status | Page | URL |
|--------|------|-----|
| ✅ | Privacy Policy | `/privacy` and `/privacy-policy` (redirect) |
| ✅ | Terms & Conditions | `/terms` |
| ✅ | About Us | `/about` and `/about-us` (redirect) |
| ✅ | Contact | `/contact` |

All four are linked in the **footer** under “Trust & legal”. Footer also shows contact email.

**Where:** `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/privacy-policy/page.tsx`, `app/about-us/page.tsx`.

---

## 4. Homepage SEO

| Status | What’s done |
|--------|-------------|
| ✅ | **Welcome paragraph** above the fold: “Welcome to Snapptools – your free online platform to…” |
| ✅ | **Meta title:** “Snapptools – Free QR Code Generator & Online Tools” (from `lib/siteConfig.ts`). |
| ✅ | **Meta description:** “Snapptools offers free QR code generators, password generator, PDF tools, image tools and more. Create QR codes instantly online.” |
| ✅ | **What / How / Who** section, tool categories with descriptions, search bar, and links to blog. |

**Where:** `app/layout.tsx` (metadata), `components/home/Hero.tsx` (welcome), `lib/siteConfig.ts`.

---

## 5. Internal linking

| Status | What’s done |
|--------|-------------|
| ✅ | **Tool pages → blog:** “Related guides” and “More guides and articles” on each tool page. |
| ✅ | **Blog → tools:** Each article can link to the QR generator or related tools; blog index links to tool pages. |
| ✅ | **Footer:** Site (Home, All tools, Blog, FAQ), Tool categories, Trust & legal (Privacy, About Us, Contact, Terms), and contact email. |
| ✅ | **Header:** Home, All tools, Blog, FAQ, About, Contact, QR Generator. |

---

## 6. Technical SEO

| Status | What’s done |
|--------|-------------|
| ✅ | **Sitemap:** `/sitemap.xml` includes homepage, /tools, /blog, all tool URLs, all blog URLs, and trust pages. |
| ✅ | **robots.txt:** Allows crawlers and points to `sitemap.xml`. |
| ✅ | **Per-tool meta:** Each tool has unique title, description, keywords, Open Graph, Twitter card, and canonical URL (via `getToolMetadata()` in `lib/tools/config.ts`). |
| ✅ | **Structured data:** Organization JSON-LD in root layout (name: Snapptools). |

**Where:** `app/sitemap.ts`, `app/robots.ts`, `lib/tools/config.ts` (`getToolMetadata`).

---

## 7. Optional but recommended

| Task | Status / note |
|------|----------------|
| Favicon | Add `app/icon.png` (or `favicon.ico` in `app/`) so the browser tab shows your icon. |
| Google Search Console | After deploy, add the property for `https://snapptools.net` and submit `https://snapptools.net/sitemap.xml`. |

---

## Quick checklist (copy for AdSense)

| Task | Done? |
|------|--------|
| Content on all tools | ✅ |
| 10–15 blog posts | ✅ (17+) |
| Privacy Policy | ✅ |
| Terms & Conditions | ✅ |
| About Us | ✅ |
| Contact page | ✅ |
| Meta titles & descriptions | ✅ |
| Sitemap / Google Search Console | ✅ Sitemap ready; submit in GSC after deploy |
| Internal linking | ✅ |

---

## Before you apply

See **`WHAT_TO_DO_NEXT.md`** for full step-by-step instructions. Summary:

1. Set **NEXT_PUBLIC_SITE_URL=https://snapptools.net** and **NEXT_PUBLIC_CONTACT_EMAIL** in production (see `.env.example`).
2. Favicon is already set: **`app/icon.svg`** (Next.js serves it automatically).
3. Submit **sitemap.xml** in Google Search Console (add property → verify → Sitemaps → enter `sitemap.xml`).
4. Wait 1–2 weeks, then apply for AdSense using your best pages (home, main tools, blog).
