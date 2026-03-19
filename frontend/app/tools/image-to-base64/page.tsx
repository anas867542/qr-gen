import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageToBase64 } from "@/components/tools/ImageToBase64";

export const metadata = getToolMetadata("image-to-base64");

export default function Page() {
  const tool = getToolBySlug("image-to-base64");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageToBase64 />
    </ToolLayout>
  );
}
