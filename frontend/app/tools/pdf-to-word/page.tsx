import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PdfToWord } from "@/components/tools/PdfToWord";

export const metadata = getToolMetadata("pdf-to-word");

export default function Page() {
  const tool = getToolBySlug("pdf-to-word");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <PdfToWord />
    </ToolLayout>
  );
}
