import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhatHowWhoSection } from "@/components/home/WhatHowWhoSection";
import { ToolsHub } from "@/components/home/ToolsHub";
import { HomepageGuidesSection } from "@/components/home/HomepageGuidesSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatHowWhoSection />
      <section id="tools" className="main-section">
        <ToolsHub />
      </section>
      <HomepageGuidesSection />
      <FaqSection />
    </>
  );
}
