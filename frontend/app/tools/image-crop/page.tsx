import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageCropTool } from "@/components/tools/ImageCropTool";

export const metadata = getToolMetadata("image-crop");

export default function Page() {
  const tool = getToolBySlug("image-crop");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageCropTool />
    </ToolLayout>
  );
}
