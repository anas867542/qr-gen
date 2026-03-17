import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UrlEncoder } from "@/components/tools/UrlEncoder";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder",
  description: "Encode or decode URL-encoded (percent-encoded) strings.",
};

export default function Page() {
  const tool = getToolBySlug("url-encoder");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <UrlEncoder />
    </ToolLayout>
  );
}
