import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { MergePdf } from "@/components/tools/MergePdf";

export const metadata: Metadata = {
  title: "Merge PDF — Combine PDF files into one",
  description: "Combine multiple PDF files into one. Reorder and download. Free, in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("merge-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <MergePdf />
    </ToolLayout>
  );
}
