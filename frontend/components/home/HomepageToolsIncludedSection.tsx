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
        <p className="home-tools-included-lead">
          Snapptools groups utilities the same way as leading tool hubs: generators, developer &amp; security helpers, text,
          images, format converters, and PDFs.
        </p>
        <ul className="home-tools-included-list">
          <li>
            <strong>Generators</strong> — QR codes, passwords, UUIDs, Lorem Ipsum, and random numbers
          </li>
          <li>
            <strong>Developer</strong> — JSON formatter/validator, Base64 encode/decode
          </li>
          <li>
            <strong>Security &amp; encoding</strong> — URL encode/decode, MD5/SHA hashes
          </li>
          <li>
            <strong>Text</strong> — Word and character counter with sentences and paragraphs
          </li>
          <li>
            <strong>Image</strong> — Compress, resize, crop, image→Base64
          </li>
          <li>
            <strong>Converters</strong> — PNG→JPG, JPG→WebP
          </li>
          <li>
            <strong>PDF &amp; documents</strong> — Merge, split, compress, watermark, PDF↔Word
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
