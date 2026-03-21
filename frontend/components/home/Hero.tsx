import Link from "next/link";
import { SITE_NAME } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <p className="hero-badge">Free · No signup · All in your browser</p>
        <h1 className="hero-title">
          Free online <span className="gradient-text">tools</span>
        </h1>
        {/* Single intro (snapptools-content — replaces 3 repetitive blocks) */}
        <p className="hero-welcome hero-intro-single">
          {SITE_NAME} is a free collection of browser-based utilities for developers, students, and everyday users.
          Generate QR codes, format JSON, merge PDFs, compress images, create passwords, and more — all without signing
          up or uploading your files to a server.
        </p>
        <p className="hero-internal-links" aria-label="Popular tools">
          Popular:{" "}
          <Link href="/tools/word-counter" className="hero-inline-link">
            Word counter
          </Link>
          {" · "}
          <Link href="/tools/qr-code-generator" className="hero-inline-link">
            QR code generator
          </Link>
          {" · "}
          <Link href="/tools/json-formatter" className="hero-inline-link">
            JSON formatter
          </Link>
          {" · "}
          <Link href="/tools/password-generator" className="hero-inline-link">
            Password generator
          </Link>
          {" · "}
          <Link href="/tools/merge-pdf" className="hero-inline-link">
            Merge PDF
          </Link>
          {" · "}
          <Link href="/tools/image-compressor" className="hero-inline-link">
            Image compressor
          </Link>
        </p>
        <div className="hero-cta">
          <a href="#tools" className="btn btn-primary">
            Browse all tools
          </a>
          <a href="/blog" className="btn btn-ghost">
            Guides &amp; blog
          </a>
          <a href="#faq" className="btn btn-ghost">
            FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
