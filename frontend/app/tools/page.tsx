import type { Metadata } from "next";
import { ToolsHub } from "@/components/home/ToolsHub";

export const metadata: Metadata = {
  title: "All Tools — Free online tools",
  description:
    "Browse all free online tools: QR generator, password generator, JSON formatter, Base64, word counter, image tools, PDF tools, and more.",
};

export default function ToolsIndexPage() {
  return <ToolsHub />;
}
