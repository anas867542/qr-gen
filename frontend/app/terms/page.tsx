import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${SITE_NAME}`,
  description: `Terms of use for ${SITE_NAME} free online tools. Acceptable use, disclaimers, and your rights.`,
};

export default function TermsPage() {
  return (
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "720px" }}>
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to home
        </Link>
      </nav>
      <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>Terms of Service</h1>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>1. Acceptance</h2>
          <p>
            By using this website and its tools, you agree to these Terms of Service and our Privacy Policy.
            If you do not agree, please do not use the site.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>2. Description of service</h2>
          <p>
            We provide free online utilities (e.g. QR code generator, password generator, JSON formatter,
            image and PDF tools). Most tools run in your browser; we do not store or process your input
            on our servers unless a specific tool states otherwise.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>3. Acceptable use</h2>
          <p>
            You may use the tools for lawful purposes only. You must not use the site to distribute
            malware, spam, or illegal content, or to violate any applicable laws or third-party rights.
            We may suspend or block access if we believe you have violated these terms.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>4. Disclaimer of warranties</h2>
          <p>
            The site and tools are provided &quot;as is&quot; and &quot;as available&quot; without warranties
            of any kind, express or implied. We do not guarantee that the tools will be error-free, secure,
            or uninterrupted. Use the output of any tool at your own risk.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any indirect, incidental,
            special, or consequential damages arising from your use of the site or any tool output.
            Our total liability shall not exceed the amount you paid to use the service (if any).
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>6. Intellectual property</h2>
          <p>
            The website design, branding, and code are ours or our licensors. The content you input
            and the output you generate (e.g. QR codes, converted files) belong to you. You grant us
            no rights over your content except as needed to operate the service.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>7. Changes</h2>
          <p>
            We may update these terms from time to time. The &quot;Last updated&quot; date will reflect
            the latest version. Continued use after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>8. Contact</h2>
          <p>
            For questions about these terms, please use our{" "}
            <Link href="/contact" style={{ color: "var(--accent)" }}>Contact</Link> page.
          </p>
        </section>
      </div>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/" className="nav-link">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
