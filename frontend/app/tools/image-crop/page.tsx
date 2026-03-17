import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageCropTool } from "@/components/tools/ImageCropTool";

export const metadata: Metadata = {
  title: "Image Crop Tool — Crop images online",
  description: "Crop images to a selected area. Drag to position, then download the cropped result. Free, in browser.",
};

export default function Page() {
  const tool = getToolBySlug("image-crop");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageCropTool />
    </ToolLayout>
  );
}
