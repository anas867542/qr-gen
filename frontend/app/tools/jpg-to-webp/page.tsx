import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JpgToWebpConverter } from "@/components/tools/JpgToWebpConverter";

export const metadata: Metadata = {
  title: "JPG to WebP Converter — Convert to WebP online",
  description: "Convert JPG/JPEG images to WebP format. Smaller file size, same quality. Free, in browser.",
};

export default function Page() {
  const tool = getToolBySlug("jpg-to-webp");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <JpgToWebpConverter />
    </ToolLayout>
  );
}
