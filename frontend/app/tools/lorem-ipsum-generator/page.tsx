import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { LoremIpsumGenerator } from "@/components/tools/LoremIpsumGenerator";

export const metadata = getToolMetadata("lorem-ipsum-generator");

export default function Page() {
  const tool = getToolBySlug("lorem-ipsum-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <LoremIpsumGenerator />
    </ToolLayout>
  );
}
