import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageCompressor } from "@/components/tools/ImageCompressor";

export const metadata: Metadata = {
  title: "Image Compressor — Reduce image size",
  description: "Compress images (JPEG/PNG/WebP) in the browser. Reduce file size before upload.",
};

export default function Page() {
  const tool = getToolBySlug("image-compressor");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageCompressor />
    </ToolLayout>
  );
}
