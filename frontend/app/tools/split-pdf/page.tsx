import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { SplitPdf } from "@/components/tools/SplitPdf";

export const metadata: Metadata = {
  title: "Split PDF — Split PDF by pages",
  description: "Split a PDF into multiple files by page range or one file per page. Free, in browser.",
};

export default function Page() {
  const tool = getToolBySlug("split-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <SplitPdf />
    </ToolLayout>
  );
}
