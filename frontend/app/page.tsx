import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ToolsHub } from "@/components/home/ToolsHub";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <section id="tools" className="main-section">
        <ToolsHub />
      </section>
      <FaqSection />
    </>
  );
}
