import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { AddWatermarkPdf } from "@/components/tools/AddWatermarkPdf";

export const metadata: Metadata = {
  title: "Add Watermark to PDF — Text watermark on every page",
  description: "Add text or image watermark to every page of your PDF. Free, in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("add-watermark-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <AddWatermarkPdf />
    </ToolLayout>
  );
}
