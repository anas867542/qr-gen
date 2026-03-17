import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { WordToPdf } from "@/components/tools/WordToPdf";

export const metadata: Metadata = {
  title: "Word to PDF — Convert DOCX to PDF online",
  description: "Convert Word (.docx) documents to PDF. Upload and download in your browser. Free.",
};

export default function Page() {
  const tool = getToolBySlug("word-to-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <WordToPdf />
    </ToolLayout>
  );
}
