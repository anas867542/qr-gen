import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WordCounter } from "@/components/tools/WordCounter";

export const metadata: Metadata = {
  title: "Word Counter — Count words & characters",
  description: "Count words, characters, sentences, and paragraphs. No data sent to server.",
};

export default function Page() {
  const tool = getToolBySlug("word-counter");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <WordCounter />
    </ToolLayout>
  );
}
