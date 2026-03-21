import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AdSlot } from "@/components/layout/AdSlot";
import { SITE_NAME, SITE_TAGLINE, getBaseUrl } from "@/lib/siteConfig";

const siteUrl = getBaseUrl();
const iconUrl = `${siteUrl}/icon.svg`;

export const viewport: Viewport = {
  themeColor: "#0f0f12",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE_NAME} – ${SITE_TAGLINE}`,
  description:
    "Snapptools offers free QR code generators, password generator, PDF tools, image tools and more. Create QR codes instantly online. No signup.",
  keywords: [
    "free qr code generator",
    "free word counter online",
    "json formatter online free",
    "snapptools",
    "online tools",
    "password generator",
    "json formatter",
    "base64 encoder",
    "pdf tools",
    "image compressor",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: `${SITE_NAME} – ${SITE_TAGLINE}`,
    description: "Free QR code generator, password generator, PDF and image tools. Create QR codes instantly online.",
    type: "website",
    url: siteUrl,
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
        <link rel="alternate icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: siteUrl,
              logo: iconUrl,
              description:
                "Snapptools: free QR code generator, password generator, JSON formatter, image and PDF tools. No signup.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: siteUrl,
              description:
                "Free online tools for everyone — QR code generator, password generator, JSON formatter, PDF tools, image tools, and more. No signup, runs in your browser.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/#tools?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                url: siteUrl,
                logo: {
                  "@type": "ImageObject",
                  url: iconUrl,
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <div className="bg-grid" aria-hidden="true" />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Header />
          <main id="main">{children}</main>
          <aside aria-label="Advertisement" style={{ margin: "0 auto", width: "100%", maxWidth: "1100px", padding: "0 1.25rem 1rem" }}>
            <AdSlot />
          </aside>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
