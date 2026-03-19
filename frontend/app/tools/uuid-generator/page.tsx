import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UuidGenerator } from "@/components/tools/UuidGenerator";

export const metadata = getToolMetadata("uuid-generator");

export default function Page() {
  const tool = getToolBySlug("uuid-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <UuidGenerator />
    </ToolLayout>
  );
}
