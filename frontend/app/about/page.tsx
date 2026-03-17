import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Free Online Tools",
  description: "About our free online tools. We offer QR generator, password generator, JSON formatter, image and PDF tools—no signup, runs in your browser.",
};

export default function AboutPage() {
  return (
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "720px" }}>
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to home
        </Link>
      </nav>
      <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>About</h1>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
        What we offer and how we work.
      </p>

      <div style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>What we do</h2>
          <p>
            We provide free online tools for developers and everyone else: QR code generator, password
            generator, UUID and Lorem Ipsum generators, JSON formatter, Base64 and URL encoder, word counter,
            hash generator, image tools (compress, resize, crop, convert), and PDF tools (merge, split,
            compress, watermark, convert). All tools are free to use with no signup.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>How it works</h2>
          <p>
            Most tools run entirely in your browser. Your data (text, files) is not uploaded to our
            servers unless a specific tool clearly states otherwise. That keeps your inputs private
            and lets the site stay fast and simple.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Why free</h2>
          <p>
            We believe useful utilities should be easy to access. We may show ads (e.g. Google AdSense)
            to help cover hosting costs. You can use an ad blocker, but we appreciate leaving ads on
            so we can keep improving and adding tools.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Get in touch</h2>
          <p>
            Suggestions, bug reports, or feedback? Use our{" "}
            <Link href="/contact" style={{ color: "var(--accent)" }}>Contact</Link> page. We read
            all messages and use feedback to prioritize new tools and fixes.
          </p>
        </section>
      </div>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/" className="nav-link">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
