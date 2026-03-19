import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner footer-grid">
        <div className="footer-brand">
          <span className="brand-text">
            QR<span className="brand-accent">Gen</span>
          </span>
          <p className="footer-tagline">Free online tools for developers and everyone else. No signup required.</p>
        </div>
        <div className="footer-links">
          <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--muted)" }}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/#tools">All tools</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-links">
          <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--muted)" }}>Legal</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: "1rem", borderTop: "1px solid var(--border)", marginTop: "1rem" }}>
        <p className="footer-copy" style={{ margin: 0 }}>
          © {new Date().getFullYear()} Free Online Tools. All tools run in your browser; we respect your privacy.
        </p>
      </div>
    </footer>
  );
}
