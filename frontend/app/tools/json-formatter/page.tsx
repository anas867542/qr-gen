import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JsonFormatter } from "@/components/tools/JsonFormatter";

export const metadata: Metadata = {
  title: "JSON Formatter / Validator — Beautify & minify JSON",
  description: "Format, validate, and beautify JSON. Detect syntax errors. Works in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("json-formatter");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <JsonFormatter />
    </ToolLayout>
  );
}
