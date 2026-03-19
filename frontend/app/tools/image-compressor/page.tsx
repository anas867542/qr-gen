import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageCompressor } from "@/components/tools/ImageCompressor";

export const metadata = getToolMetadata("image-compressor");

export default function Page() {
  const tool = getToolBySlug("image-compressor");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageCompressor />
    </ToolLayout>
  );
}
