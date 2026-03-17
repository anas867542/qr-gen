import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { LoremIpsumGenerator } from "@/components/tools/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Placeholder text",
  description: "Generate Lorem Ipsum placeholder text in paragraphs, sentences, or words.",
};

export default function Page() {
  const tool = getToolBySlug("lorem-ipsum-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <LoremIpsumGenerator />
    </ToolLayout>
  );
}
