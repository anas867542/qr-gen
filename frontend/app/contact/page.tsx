import type { Metadata } from "next";
import Link from "next/link";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@yoursite.com";

export const metadata: Metadata = {
  title: "Contact — Free Online Tools",
  description: "Contact us for feedback, bug reports, or suggestions about our free online tools.",
};

export default function ContactPage() {
  return (
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "720px" }}>
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to home
        </Link>
      </nav>
      <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>Contact</h1>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
        We read all messages. Use the email below for feedback, bugs, or suggestions.
      </p>

      <div style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ color: "var(--accent)", textDecoration: "none" }
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p style={{ marginTop: "1rem" }}>
          For privacy or terms-related questions, see our{" "}
          <Link href="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</Link> and{" "}
          <Link href="/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link>.
        </p>
      </div>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/" className="nav-link">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
