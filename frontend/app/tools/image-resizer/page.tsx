import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageResizer } from "@/components/tools/ImageResizer";

export const metadata: Metadata = {
  title: "Image Resizer — Resize images by pixels or percent",
  description: "Resize images by pixels or percentage. Keep aspect ratio or set custom dimensions. Free, in browser.",
};

export default function Page() {
  const tool = getToolBySlug("image-resizer");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageResizer />
    </ToolLayout>
  );
}
