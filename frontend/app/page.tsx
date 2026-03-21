import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HomepageToolsIncludedSection } from "@/components/home/HomepageToolsIncludedSection";
import { ToolsHub } from "@/components/home/ToolsHub";
import { HomepagePopularToolsSection } from "@/components/home/HomepagePopularToolsSection";
import { HomepageWhySnapptoolsSection } from "@/components/home/HomepageWhySnapptoolsSection";
import { HomepageGuidesSection } from "@/components/home/HomepageGuidesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { SITE_NAME, getBaseUrl } from "@/lib/siteConfig";

const homeUrl = getBaseUrl();

export const metadata: Metadata = {
  title: `${SITE_NAME} – Free Online Tools: QR Code, PDF, Image & Developer Utilities`,
  description:
    "Free browser-based tools for everyone — generate QR codes, merge PDFs, compress images, format JSON, create strong passwords, and more. No signup, no uploads. Instant results.",
  keywords: [
    "free online tools",
    "qr code generator",
    "merge pdf free",
    "json formatter",
    "image compressor",
    "word counter",
    "snapptools",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} – Free Online Tools: QR Code, PDF, Image & Developer Utilities`,
    description:
      "Free browser-based tools — QR codes, passwords, JSON formatter, PDF merger, image compressor, and more. No signup, runs in your browser.",
    url: homeUrl,
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HomepageToolsIncludedSection />
      <section id="tools" className="main-section">
        <ToolsHub />
      </section>
      <HomepagePopularToolsSection />
      <HomepageWhySnapptoolsSection />
      <HomepageGuidesSection />
      <FaqSection />
    </>
  );
}
