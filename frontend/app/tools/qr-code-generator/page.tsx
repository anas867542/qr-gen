import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { QrSection } from "@/components/home/QrSection";

export const metadata = getToolMetadata("qr-code-generator");

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
