import { getToolBySlug, getToolMetadata } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PasswordGenerator } from "@/components/tools/PasswordGenerator";

export const metadata = getToolMetadata("password-generator");

export default function Page() {
  const tool = getToolBySlug("password-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <PasswordGenerator />
    </ToolLayout>
  );
}
