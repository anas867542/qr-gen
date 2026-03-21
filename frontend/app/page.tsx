import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhatHowWhoSection } from "@/components/home/WhatHowWhoSection";
import { HomepageAuthoritySection } from "@/components/home/HomepageAuthoritySection";
import { ToolsHub } from "@/components/home/ToolsHub";
import { HomepageGuidesSection } from "@/components/home/HomepageGuidesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { SITE_NAME, getBaseUrl } from "@/lib/siteConfig";

const homeUrl = getBaseUrl();

export const metadata: Metadata = {
  title: `Free Online Tools for Essays, QR Codes, JSON & PDF | ${SITE_NAME}`,
  description:
    "Problem-solving guides + free tools: word counter for students, QR code generator (WhatsApp & links), JSON formatter, password generator, PDF merge/compress, image resize—all in your browser, no signup.",
  keywords: [
    "free word counter online",
    "qr code generator for whatsapp",
    "free qr code generator online",
    "json formatter online free",
    "online tools for students",
    "merge pdf online free",
    "snapptools",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `Free Online Tools & Guides | ${SITE_NAME}`,
    description:
      "Guides + free browser tools: word counter, QR codes, JSON, passwords, PDFs, images. Built for students, creators, and developers.",
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
      <WhatHowWhoSection />
      <HomepageAuthoritySection />
      <section id="tools" className="main-section">
        <ToolsHub />
      </section>
      <HomepageGuidesSection />
      <FaqSection />
    </>
  );
}
