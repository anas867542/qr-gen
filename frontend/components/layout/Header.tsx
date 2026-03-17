import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            ◇
          </span>
          <span className="brand-text">
            QR<span className="brand-accent">Gen</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/#tools" className="nav-link">
            All tools
          </Link>
          <Link href="/faq" className="nav-link">
            FAQ
          </Link>
          <Link href="/tools/qr-code-generator" className="nav-link">
            QR Generator
          </Link>
        </nav>
      </div>
    </header>
  );
}
