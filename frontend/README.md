# Free Online Tools — Next.js Frontend

Multi-tool website: QR generator, password generator, UUID, JSON formatter, Base64, word counter, image compressor, and more. Each tool has its own URL for SEO.

## Structure

```
frontend/
├── app/
│   ├── layout.tsx           # Root layout, Header, Footer
│   ├── page.tsx             # Home = Hero + Tools hub (grid of tools)
│   ├── globals.css
│   ├── icon.svg
│   └── tools/
│       ├── qr-code-generator/page.tsx
│       ├── password-generator/page.tsx
│       ├── uuid-generator/page.tsx
│       ├── lorem-ipsum-generator/page.tsx
│       ├── random-number-generator/page.tsx
│       ├── json-formatter/page.tsx
│       ├── base64-encoder/page.tsx
│       ├── word-counter/page.tsx
│       ├── url-encoder/page.tsx
│       ├── hash-generator/page.tsx
│       └── image-compressor/page.tsx
├── components/
│   ├── layout/              # Header, Footer
│   ├── home/                # Hero, ToolsHub, QrSection (for QR tool page)
│   └── tools/               # ToolLayout, and one component per tool
├── lib/
│   ├── tools/
│   │   └── config.ts        # TOOLS list, categories, getToolBySlug
│   ├── api.ts               # Backend API (QR)
│   └── qrPayload.ts
├── types/
└── package.json
```

## Run

```bash
npm install
cp .env.example .env.local   # optional: NEXT_PUBLIC_API_URL for QR backend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Home lists all tools; each tool lives at `/tools/<slug>`.

## Adding a new tool

1. **Register the tool** in `lib/tools/config.ts`:
   - Add an entry to the `TOOLS` array: `slug`, `name`, `description`, `category`, optional `keywords`.

2. **Create the tool component** in `components/tools/<Name>.tsx`:
   - Use `"use client"` if it has state or events.
   - Use existing classes: `tool-panel`, `field-block`, `btn`, `btn-primary`, `btn-ghost`, `error`.

3. **Create the tool page** at `app/tools/<slug>/page.tsx`:
   - `getToolBySlug("slug")`, `ToolLayout`, and your component.
   - Export `metadata` for title and description (SEO).

4. The tool will appear on the home hub automatically (from `TOOLS` in config).

## Environment

- `NEXT_PUBLIC_API_URL` — Backend API base for the QR code generator. Other tools run entirely in the browser.

## Build & deploy

```bash
npm run build
npm run start
```

---

## Launch the site (Vercel / Netlify + custom domain)

### Deploy to Vercel

1. Push your code to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import your repo.
3. Set **Root Directory** to `frontend` if the repo root is the monorepo (qr code/).
4. **Environment variables** (optional):
   - `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com` (for sitemap; set after adding domain).
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and `NEXT_PUBLIC_ADSENSE_SLOT_ID` after AdSense approval.
5. Deploy. Vercel gives you a URL like `your-project.vercel.app`.

### Add your own domain

- **Vercel:** Project → **Settings** → **Domains** → add your domain and follow the DNS instructions.
- **Netlify:** Site → **Domain management** → add custom domain and configure DNS (A/CNAME as shown).
- After the domain is live, set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in the project environment and redeploy so the sitemap uses the correct base URL.

### Deploy to Netlify

1. Build command: `cd frontend && npm run build` (or `npm run build` if root is frontend).
2. Publish directory: `frontend/.next` for Next.js — but Netlify expects a different output. For Next.js on Netlify use **Netlify’s Next.js runtime**: root directory = `frontend`, build command = `npm run build`, no need to set publish directory (Netlify detects Next.js).
3. Add the same env vars as above.

---

## Privacy, cookies & AdSense

- **Privacy Policy** is at `/privacy`. Update the text in `app/privacy/page.tsx` with your site name and contact; link is in the footer.
- **Cookie banner** appears until the user clicks **Accept**; choice is stored in `localStorage` and the banner is hidden. Required for AdSense and similar ad networks.
- **AdSense:** After approval at [google.com/adsense](https://www.google.com/adsense), add to `.env.local` (or Vercel/Netlify env):
  - `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx`
  - `NEXT_PUBLIC_ADSENSE_SLOT_ID=xxxxxxxxxx` (create an ad unit in AdSense to get a slot ID).
  Redeploy. Ads render in the layout (above footer). If these are unset, no ad script runs and a placeholder can show.

---

## SEO (sitemap & robots)

- **Sitemap:** `/sitemap.xml` is generated from `app/sitemap.ts` and includes `/`, `/tools`, `/privacy`, and every `/tools/<slug>`.
- **Robots:** `/robots.txt` is generated from `app/robots.ts` and allows all crawlers; it references the sitemap.
- Set `NEXT_PUBLIC_SITE_URL` (or rely on `VERCEL_URL`) so the sitemap uses your real domain. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console after launch.
