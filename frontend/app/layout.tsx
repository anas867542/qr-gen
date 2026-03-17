import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { AdSlot } from "@/components/layout/AdSlot";

export const metadata: Metadata = {
  title: "Free Online Tools — QR Generator, Password, JSON, Base64 & more",
  description:
    "Free online tools: QR code generator, password generator, UUID, JSON formatter, Base64 encoder, word counter, image compressor, and more. No signup.",
  openGraph: {
    title: "Free Online Tools — Generators & Developer Utilities",
    description: "QR codes, passwords, JSON, Base64, word count, and more. All in your browser.",
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
              name: "Free Online Tools",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com").replace(/\/$/, ""),
              description:
                "Free online tools: QR generator, password generator, JSON formatter, image and PDF tools. No signup.",
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
