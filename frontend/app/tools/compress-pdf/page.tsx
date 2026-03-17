import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CompressPdf } from "@/components/tools/CompressPdf";

export const metadata: Metadata = {
  title: "Compress PDF — Reduce PDF file size",
  description: "Reduce PDF file size by lowering image resolution. Works in your browser. Free.",
};

export default function Page() {
  const tool = getToolBySlug("compress-pdf");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <CompressPdf />
    </ToolLayout>
  );
}
