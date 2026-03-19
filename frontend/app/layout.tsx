import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AdSlot } from "@/components/layout/AdSlot";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${SITE_NAME} – ${SITE_TAGLINE}`,
  description:
    "Snapptools offers free QR code generators, password generator, PDF tools, image tools and more. Create QR codes instantly online. No signup.",
  keywords: [
    "free qr code generator",
    "snapptools",
    "online tools",
    "password generator",
    "json formatter",
    "base64 encoder",
    "pdf tools",
    "image compressor",
  ],
  openGraph: {
    title: `${SITE_NAME} – ${SITE_TAGLINE}`,
    description: "Free QR code generator, password generator, PDF and image tools. Create QR codes instantly online.",
    type: "website",
  },
  themeColor: "#0f0f12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
              url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://snapptools.net",
              description:
                "Snapptools: free QR code generator, password generator, JSON formatter, image and PDF tools. No signup.",
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
