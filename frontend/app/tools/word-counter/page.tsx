import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WordCounter } from "@/components/tools/WordCounter";

export const metadata = getToolMetadata("word-counter");

export default function Page() {
  const tool = getToolBySlug("word-counter");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <WordCounter />
    </ToolLayout>
  );
}
