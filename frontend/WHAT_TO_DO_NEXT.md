# What to do next – Deploy, Google, AdSense, Traffic

Follow these steps in order so your site is live, indexed, and ready to earn from AdSense.

---

## 1. Deploy with correct environment variables

**Where you deploy (Vercel, Netlify, etc.):**

1. Set these **environment variables** for **production**:

   | Variable | Value | Why |
   |----------|--------|-----|
   | `NEXT_PUBLIC_SITE_URL` | `https://snapptools.net` | Sitemap, canonicals, Open Graph URLs |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | Your email (default: `snapptools138@gmail.com`) | Shown on Contact page and footer |

2. Redeploy after saving the variables.

3. Confirm the site loads at **https://snapptools.net** and that:
   - Footer shows your contact email
   - Links in the footer go to the right pages

**Reference:** Copy from `.env.example` in this repo. Do **not** commit real `.env` with secrets; use your host’s “Environment variables” or “Env” panel.

---

## 2. Favicon

Your site already has a favicon: **`app/icon.svg`** (QR-style icon). Next.js serves it automatically as the browser tab icon.

- No extra step needed unless you want a custom PNG (e.g. `app/icon.png`).  
- If you add `app/icon.png`, Next.js will use it where PNG is preferred.

---

## 3. Submit sitemap in Google Search Console

1. Go to **[Google Search Console](https://search.google.com/search-console)** and sign in.
2. **Add a property:**
   - Click **“Add property”**
   - Choose **“URL prefix”**
   - Enter: `https://snapptools.net`
3. **Verify ownership** using one of the options (HTML file upload, DNS record, or HTML meta tag – follow the instructions shown).
4. After verification, open **“Sitemaps”** in the left menu.
5. Under **“Add a new sitemap”**, enter:  
   `sitemap.xml`  
   (or the full URL: `https://snapptools.net/sitemap.xml`)
6. Click **“Submit”**.

Google will start crawling. It can take a few days to a couple of weeks for most pages to be indexed. You can check **“URL inspection”** or **“Pages”** later to see indexed URLs.

---

## 4. Wait 1–2 weeks (recommended)

- Let the site be live and crawlable.
- Share the link (e.g. social, profile) so there’s a bit of traffic and backlinks.
- In Search Console, check that the sitemap is processed and that some pages are indexed.

This makes the site look more “real” when you apply for AdSense.

---

## 5. Apply for AdSense

1. Go to **[Google AdSense](https://www.google.com/adsense)** and sign in with your Google account.
2. Click **“Get started”** (or “Sign up”).
3. Enter your site URL: **`https://snapptools.net`**.
4. Choose how you want to get the code (e.g. “I’ll add the code myself” if you’ll add it in the app later).
5. Complete the rest of the form (country, payment details, etc.).
6. When asked for sample pages, use strong, content-rich URLs, for example:
   - `https://snapptools.net`
   - `https://snapptools.net/tools/qr-code-generator`
   - `https://snapptools.net/blog`
   - `https://snapptools.net/blog/what-is-qr-code`
7. Submit the application.

Review usually takes from a few days to a few weeks. You’ll get an email when there’s a decision.

**If approved:**  
- You’ll get an AdSense code (e.g. `ca-pub-...`).  
- Add it to your app (e.g. via `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and your ad component).  
- Place ads where they don’t hurt UX (e.g. below content, in sidebar).

**If rejected:**  
- Read the reason in the email and in the AdSense dashboard.  
- Fix the issues (e.g. more/better content, clearer Privacy/Terms, better navigation).  
- Wait a bit, then **reapply** when the site is improved.

---

## 6. Grow traffic (so AdSense can earn)

AdSense earnings depend on **traffic**. To grow it:

| Action | How |
|--------|-----|
| **More blog posts** | Add 1–2 posts per week (e.g. “How to…”, “Best tools for…”). Target keywords people search for. |
| **SEO** | Keep good titles and descriptions (you already have these). Add internal links from new posts to tools and older posts. |
| **Share** | Post new tools or articles on Twitter/X, LinkedIn, Reddit (where allowed), or relevant forums. |
| **Backlinks** | Get listed on “free tools” roundups, your GitHub profile, or your personal site. |
| **Social / newsletter** | Optional: add a simple “Share” or “Subscribe” so repeat visitors and shares grow over time. |

The more quality traffic you get, the more impressions and clicks you’ll have, and the more you can earn from AdSense.

---

## Quick checklist

- [ ] Deploy with `NEXT_PUBLIC_SITE_URL=https://snapptools.net` and `NEXT_PUBLIC_CONTACT_EMAIL=snapptools138@gmail.com` (or your email)
- [ ] Verify site works at https://snapptools.net
- [ ] Add and verify property in Google Search Console
- [ ] Submit sitemap: `sitemap.xml`
- [ ] Wait 1–2 weeks and check indexing
- [ ] Apply for AdSense with your best URLs
- [ ] If approved, add AdSense code and place ads
- [ ] Keep adding content and sharing to grow traffic

For a technical checklist (content, trust pages, SEO), see **`ADSENSE_CHECKLIST.md`**.
