import Link from "next/link";
import { SITE_NAME } from "@/lib/siteConfig";

/**
 * Homepage SEO block: positions the site as problem-solving content + tools (not “tools only”).
 */
export function HomepageAuthoritySection() {
  return (
    <section className="home-authority" aria-labelledby="home-authority-title">
      <div className="wrap home-authority-inner">
        <h2 id="home-authority-title" className="home-authority-title">
          Solve everyday tasks—guides first, free tools built in
        </h2>
        <p className="home-authority-lead">
          {SITE_NAME} is a <strong>problem-solving site</strong>: we explain <em>what</em> to do and <em>why</em>, then
          give you a fast browser tool to do it. No signup for core utilities—ideal when you need a{" "}
          <strong>free word counter online</strong>, a <strong>qr code generator for WhatsApp</strong> links,{" "}
          <strong>json formatter online free</strong> debugging, or <strong>PDF and image</strong> fixes before a deadline.
        </p>
        <div className="home-authority-grid">
          <div className="home-authority-card">
            <h3 className="home-authority-card-title">Writing &amp; school</h3>
            <p className="home-authority-card-text">
              Hit essay and application limits with a <strong>word counter for students</strong>—live words, characters,
              sentences, and paragraphs. Read our blog on counting words in an essay, then jump straight into the tool.
            </p>
            <Link href="/tools/word-counter" className="home-authority-link">
              Word counter →
            </Link>
            <Link href="/blog/how-to-count-words-in-an-essay" className="home-authority-link home-authority-link-secondary">
              Essay word-count guide →
            </Link>
          </div>
          <div className="home-authority-card">
            <h3 className="home-authority-card-title">QR codes &amp; small business</h3>
            <p className="home-authority-card-text">
              Create a <strong>free QR code generator online</strong> PNG for menus, flyers, Wi‑Fi, and{" "}
              <strong>WhatsApp</strong> wa.me links. Articles cover best free generators in 2026 and WhatsApp-specific
              setup—then you generate in one click.
            </p>
            <Link href="/tools/qr-code-generator" className="home-authority-link">
              QR code generator →
            </Link>
            <Link href="/blog/best-free-qr-code-generators-2026" className="home-authority-link home-authority-link-secondary">
              Best free QR generators (2026) →
            </Link>
          </div>
          <div className="home-authority-card">
            <h3 className="home-authority-card-title">Developers &amp; files</h3>
            <p className="home-authority-card-text">
              Format and validate JSON, generate strong passwords, merge or compress PDFs, resize or compress images—all
              in your browser. Use the <strong>blog</strong> for longer how-tos; use the <strong>tools</strong> when you
              just need output now.
            </p>
            <Link href="/tools/json-formatter" className="home-authority-link">
              JSON formatter →
            </Link>
            <Link href="/blog" className="home-authority-link home-authority-link-secondary">
              All guides →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
