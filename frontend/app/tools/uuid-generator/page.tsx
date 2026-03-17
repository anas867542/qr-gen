import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UuidGenerator } from "@/components/tools/UuidGenerator";

export const metadata: Metadata = {
  title: "UUID Generator — Generate UUIDs v4",
  description: "Generate UUIDs (v4) for unique identifiers. Copy or bulk generate.",
};

export default function Page() {
  const tool = getToolBySlug("uuid-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <UuidGenerator />
    </ToolLayout>
  );
}
