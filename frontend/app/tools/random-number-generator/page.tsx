import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RandomNumberGenerator } from "@/components/tools/RandomNumberGenerator";

export const metadata = getToolMetadata("random-number-generator");

export default function Page() {
  const tool = getToolBySlug("random-number-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <RandomNumberGenerator />
    </ToolLayout>
  );
}
