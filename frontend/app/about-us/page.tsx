import type { Metadata } from "next";
import { RedirectClient } from "@/components/RedirectClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "About our free online tools. We offer QR generator, password generator, and more.",
};

export default function AboutUsRedirectPage() {
  return <RedirectClient to="/about" />;
}
