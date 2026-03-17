import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PdfToWord } from "@/components/tools/PdfToWord";

export const metadata: Metadata = {
  title: "PDF to Word — Convert PDF to DOCX online",
  description: "Extract text from PDF and download as a Word (.docx) document. Free, in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("pdf-to-word");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <PdfToWord />
    </ToolLayout>
  );
}
