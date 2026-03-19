import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CompressPdf } from "@/components/tools/CompressPdf";

export const metadata = getToolMetadata("compress-pdf");

export default function Page() {
  const tool = getToolBySlug("compress-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <CompressPdf />
    </ToolLayout>
  );
}
