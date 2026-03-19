import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JsonFormatter } from "@/components/tools/JsonFormatter";

export const metadata = getToolMetadata("json-formatter");

export default function Page() {
  const tool = getToolBySlug("json-formatter");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <JsonFormatter />
    </ToolLayout>
  );
}
