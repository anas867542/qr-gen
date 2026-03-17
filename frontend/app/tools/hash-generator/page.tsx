import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { HashGenerator } from "@/components/tools/HashGenerator";

export const metadata: Metadata = {
  title: "Hash Generator — MD5, SHA-256, SHA-512",
  description: "Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes from text.",
};

export default function Page() {
  const tool = getToolBySlug("hash-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <HashGenerator />
    </ToolLayout>
  );
}
