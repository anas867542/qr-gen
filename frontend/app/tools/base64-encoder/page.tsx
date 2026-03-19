import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { Base64Encoder } from "@/components/tools/Base64Encoder";

export const metadata = getToolMetadata("base64-encoder");

export default function Page() {
  const tool = getToolBySlug("base64-encoder");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <Base64Encoder />
    </ToolLayout>
  );
}
