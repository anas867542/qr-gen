import Link from "next/link";

/** From snapptools-content homepage — internal links after tool grid */
export function HomepagePopularToolsSection() {
  return (
    <section id="popular-tools" className="home-popular-tools" aria-labelledby="popular-tools-title">
      <div className="wrap">
        <h2 id="popular-tools-title" className="home-popular-title">
          Most popular tools
        </h2>
        <ul className="home-popular-list">
          <li>
            <Link href="/tools/qr-code-generator">Free QR Code Generator</Link> — Create QR codes for links, Wi‑Fi, and
            text
          </li>
          <li>
            <Link href="/tools/word-counter">Word Counter</Link> — Count words, characters, sentences, and paragraphs
          </li>
          <li>
            <Link href="/tools/merge-pdf">Merge PDF</Link> — Combine multiple PDFs into one file
          </li>
          <li>
            <Link href="/tools/image-compressor">Image Compressor</Link> — Reduce image file size before uploading
          </li>
          <li>
            <Link href="/tools/json-formatter">JSON Formatter</Link> — Format and validate JSON instantly
          </li>
          <li>
            <Link href="/tools/password-generator">Password Generator</Link> — Generate strong random passwords
          </li>
        </ul>
      </div>
    </section>
  );
}
