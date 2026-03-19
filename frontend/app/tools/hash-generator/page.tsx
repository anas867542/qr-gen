import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { HashGenerator } from "@/components/tools/HashGenerator";

export const metadata = getToolMetadata("hash-generator");

export default function Page() {
  const tool = getToolBySlug("hash-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <HashGenerator />
    </ToolLayout>
  );
}
