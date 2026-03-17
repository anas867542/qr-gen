import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PasswordGenerator } from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator — Strong random passwords",
  description: "Generate strong random passwords with customizable length and character sets. Copy in one click.",
};

export default function Page() {
  const tool = getToolBySlug("password-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <PasswordGenerator />
    </ToolLayout>
  );
}
