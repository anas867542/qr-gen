import Link from "next/link";

/**
 * "What / How / Who" section inspired by onlinetools.com — clear value and process for users and SEO.
 */
export function WhatHowWhoSection() {
  return (
    <section className="what-how-who" aria-label="About our platform">
      <div className="wrap what-how-who-inner">
        <div className="what-how-who-block">
          <h2 className="what-how-who-title">What are these tools?</h2>
          <p className="what-how-who-text">
            A free set of online utilities for getting things done quickly: QR code generator, password and UUID generators, JSON formatter, Base64 and URL encoder, word counter, image tools (compress, resize, crop, convert), and PDF tools (merge, split, compress, watermark, convert). No software to install—everything runs in your browser.
          </p>
          <Link href="/#tools" className="what-how-who-link">
            See all tools →
          </Link>
        </div>
        <div className="what-how-who-block">
          <h2 className="what-how-who-title">How do they work?</h2>
          <p className="what-how-who-text">
            Open a tool, add your input (text, file, or options), and get the result instantly. All processing happens in your browser—we don’t upload your data to our servers for most tools. That keeps things fast and private. Each tool page includes a short guide: what it does, how to use it, and example use cases.
          </p>
          <Link href="/blog" className="what-how-who-link">
            Read guides &amp; articles →
          </Link>
        </div>
        <div className="what-how-who-block">
          <h2 className="what-how-who-title">Who is it for?</h2>
          <p className="what-how-who-text">
            Developers, students, small businesses, and anyone who needs a quick QR code, a strong password, formatted JSON, a merged PDF, or a resized image. No account required. Use the tools for personal or professional work—they’re free and built to be simple and reliable.
          </p>
          <Link href="/about" className="what-how-who-link">
            About us →
          </Link>
        </div>
      </div>
    </section>
  );
}
