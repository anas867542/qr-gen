import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { SplitPdf } from "@/components/tools/SplitPdf";

export const metadata = getToolMetadata("split-pdf");

export default function Page() {
  const tool = getToolBySlug("split-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <SplitPdf />
    </ToolLayout>
  );
}
