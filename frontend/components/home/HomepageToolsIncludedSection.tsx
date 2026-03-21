import Link from "next/link";

/**
 * Replaces repetitive three-column copy (snapptools-content homepage rewrite).
 */
export function HomepageToolsIncludedSection() {
  return (
    <section id="about-tools" className="home-tools-included" aria-labelledby="about-tools-title">
      <div className="wrap home-tools-included-inner">
        <h2 id="about-tools-title" className="home-tools-included-title">
          What tools are included?
        </h2>
        <p className="home-tools-included-lead">Snapptools covers five categories of everyday tasks:</p>
        <ul className="home-tools-included-list">
          <li>
            <strong>Generator tools</strong> — QR codes, passwords, UUIDs, Lorem Ipsum, and random numbers
          </li>
          <li>
            <strong>Developer tools</strong> — JSON formatter, Base64 encoder/decoder, URL encoder, and hash generator
            (MD5, SHA-256, etc.)
          </li>
          <li>
            <strong>Text tools</strong> — Word and character counter with sentence and paragraph tracking
          </li>
          <li>
            <strong>Image tools</strong> — Compress, resize, crop, convert (PNG↔JPG, JPG→WebP), and encode to Base64
          </li>
          <li>
            <strong>PDF tools</strong> — Merge, split, compress, add watermarks, and convert between PDF and Word
          </li>
        </ul>
        <p className="home-tools-included-outro">
          Each tool page includes a short guide explaining what it does, how to use it, and example use cases. For longer
          tutorials, see the{" "}
          <Link href="/blog" className="home-tools-included-link">
            guides and articles
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
