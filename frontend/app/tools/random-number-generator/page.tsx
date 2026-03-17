import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools/config";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RandomNumberGenerator } from "@/components/tools/RandomNumberGenerator";

export const metadata: Metadata = {
  title: "Random Number Generator",
  description: "Generate random numbers within a range. Single or multiple, with optional duplicates.",
};

export default function Page() {
  const tool = getToolBySlug("random-number-generator");
  if (!tool) return null;
  return (
    <ToolLayout tool={tool}>
      <RandomNumberGenerator />
    </ToolLayout>
  );
}
