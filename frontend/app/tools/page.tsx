import type { Metadata } from "next";
import { ToolsHub } from "@/components/home/ToolsHub";
import { TOOLS } from "@/lib/tools/config";
import { SITE_NAME, getBaseUrl } from "@/lib/siteConfig";

const n = TOOLS.length;
const base = getBaseUrl();

export const metadata: Metadata = {
  title: `All free online tools (${n}) — ${SITE_NAME}`,
  description: `Browse ${n} free browser-based tools: QR codes, passwords, JSON, Base64, hashes, word counter, image compress & convert, PDF merge & split, and more. No signup. Canonical hub for search and discovery.`,
  keywords: [
    "free online tools",
    "qr code generator",
    "pdf tools",
    "json formatter",
    "image compressor",
    "password generator",
    "browser tools",
  ],
  alternates: { canonical: `${base}/tools` },
  openGraph: {
    title: `All tools — ${SITE_NAME}`,
    description: `${n} free utilities in your browser. Search, filter by category, and open any tool instantly.`,
    url: `${base}/tools`,
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function ToolsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `All tools — ${SITE_NAME}`,
            description: `Directory of ${n} free online tools.`,
            url: `${base}/tools`,
            numberOfItems: n,
            isPartOf: { "@type": "WebSite", name: SITE_NAME, url: base },
          }),
        }}
      />
      <section id="tools" className="main-section">
        <ToolsHub />
      </section>
    </>
  );
}
