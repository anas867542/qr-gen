import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { MergePdf } from "@/components/tools/MergePdf";

export const metadata = getToolMetadata("merge-pdf");

export default function Page() {
  const tool = getToolBySlug("merge-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <MergePdf />
    </ToolLayout>
  );
}
