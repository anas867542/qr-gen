import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { UrlEncoder } from "@/components/tools/UrlEncoder";

export const metadata = getToolMetadata("url-encoder");

export default function Page() {
  const tool = getToolBySlug("url-encoder");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <UrlEncoder />
    </ToolLayout>
  );
}
