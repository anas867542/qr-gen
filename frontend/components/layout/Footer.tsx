import Link from "next/link";
import { TOOL_CATEGORIES } from "@/lib/tools/config";
import type { ToolCategory } from "@/lib/tools/config";
import { SITE_NAME } from "@/lib/siteConfig";

const CATEGORY_ORDER: ToolCategory[] = ["generators", "developer", "text", "image", "pdf"];

export function Footer() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@snapptools.net";

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner footer-grid">
        <div className="footer-brand">
          <span className="brand-text">
            {SITE_NAME}
          </span>
          <p className="footer-tagline">Free online tools for developers and everyone else. No signup required.</p>
          <p className="footer-request">
            Can&apos;t find a tool? <Link href="/contact">Contact us</Link> and we&apos;ll consider adding it.
          </p>
        </div>
        <div className="footer-links">
          <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--muted)" }}>Site</span>
          <Link href="/">Home</Link>
          <Link href="/#tools">All tools</Link>
          <Link href="/blog">Blog &amp; guides</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="footer-links">
          <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--muted)" }}>Tool categories</span>
          {CATEGORY_ORDER.map((cat) => (
            <Link key={cat} href={`/#tools`}>
              {TOOL_CATEGORIES[cat]}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--muted)" }}>Trust &amp; legal</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <a href={`mailto:${contactEmail}`} className="footer-email">
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: "1rem", borderTop: "1px solid var(--border)", marginTop: "1rem" }}>
        <p className="footer-copy" style={{ margin: 0 }}>
          © {new Date().getFullYear()} {SITE_NAME}. All tools run in your browser; we respect your privacy.
        </p>
      </div>
    </footer>
  );
}
