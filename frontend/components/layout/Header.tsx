import Link from "next/link";
import { SITE_NAME } from "@/lib/siteConfig";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          <img className="brand-logo" src="/icon.svg" width={32} height={32} alt="" aria-hidden />
          <span className="brand-text">{SITE_NAME}</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/tools" className="nav-link">
            All tools
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/faq" className="nav-link">
            FAQ
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/tools/qr-code-generator" className="nav-link">
            QR Generator
          </Link>
        </nav>
      </div>
    </header>
  );
}
