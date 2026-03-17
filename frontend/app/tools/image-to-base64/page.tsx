import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ImageToBase64 } from "@/components/tools/ImageToBase64";

export const metadata: Metadata = {
  title: "Image to Base64 Converter — Convert image to Base64 data URL",
  description: "Convert images to Base64 data URL. Copy or use in HTML/CSS. Free, in your browser.",
};

export default function Page() {
  const tool = getToolBySlug("image-to-base64");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <ImageToBase64 />
    </ToolLayout>
  );
}
