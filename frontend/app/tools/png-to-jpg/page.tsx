import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PngToJpgConverter } from "@/components/tools/PngToJpgConverter";

export const metadata: Metadata = {
  title: "PNG to JPG Converter — Convert PNG to JPEG online",
  description: "Convert PNG images to JPG/JPEG. Adjust quality and download. Free, in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("png-to-jpg");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <PngToJpgConverter />
    </ToolLayout>
  );
}
