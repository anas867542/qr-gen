import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { AddWatermarkPdf } from "@/components/tools/AddWatermarkPdf";

export const metadata = getToolMetadata("add-watermark-pdf");

export default function Page() {
  const tool = getToolBySlug("add-watermark-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <AddWatermarkPdf />
    </ToolLayout>
  );
}
