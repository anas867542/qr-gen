import type { Metadata } from "next";
import { RedirectClient } from "@/components/RedirectClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for this website. How we use cookies, data, and third-party services.",
};

export default function PrivacyPolicyRedirectPage() {
  return <RedirectClient to="/privacy" />;
}
