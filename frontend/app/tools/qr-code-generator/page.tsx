import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { QrSection } from "@/components/home/QrSection";

export const metadata: Metadata = {
  title: "QR Code Generator — Free QR codes online",
  description:
    "Create QR codes for URLs, text, and Wi‑Fi. Customize colors and size, download PNG. No signup.",
};

export default function QrCodeGeneratorPage() {
  const tool = getToolBySlug("qr-code-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <div className="main-grid" style={{ gridTemplateColumns: "1fr 360px" }}>
        <QrSection />
      </div>
    </ToolLayout>
  );
}
