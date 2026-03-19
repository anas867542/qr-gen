import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WordToPdf } from "@/components/tools/WordToPdf";

export const metadata = getToolMetadata("word-to-pdf");

export default function Page() {
  const tool = getToolBySlug("word-to-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <WordToPdf />
    </ToolLayout>
  );
}
