import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { Base64Encoder } from "@/components/tools/Base64Encoder";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder",
  description: "Encode text to Base64 and decode Base64 to text. Works entirely in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("base64-encoder");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <Base64Encoder />
    </ToolLayout>
  );
}
