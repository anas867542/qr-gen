import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JpgToWebpConverter } from "@/components/tools/JpgToWebpConverter";

export const metadata = getToolMetadata("jpg-to-webp");

export default function Page() {
  const tool = getToolBySlug("jpg-to-webp");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <JpgToWebpConverter />
    </ToolLayout>
  );
}
