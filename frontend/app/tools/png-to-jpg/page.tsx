import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PngToJpgConverter } from "@/components/tools/PngToJpgConverter";

export const metadata = getToolMetadata("png-to-jpg");

export default function Page() {
  const tool = getToolBySlug("png-to-jpg");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <PngToJpgConverter />
    </ToolLayout>
  );
}
