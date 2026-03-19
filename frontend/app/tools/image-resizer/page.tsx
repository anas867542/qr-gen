import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageResizer } from "@/components/tools/ImageResizer";

export const metadata = getToolMetadata("image-resizer");

export default function Page() {
  const tool = getToolBySlug("image-resizer");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageResizer />
    </ToolLayout>
  );
}
