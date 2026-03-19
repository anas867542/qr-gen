import { SITE_NAME } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <p className="hero-badge">Free · No signup · All in your browser</p>
        <h1 className="hero-title">
          Free online <span className="gradient-text">tools</span>
        </h1>
        <p className="hero-welcome">
          Welcome to {SITE_NAME} – your free online platform to generate QR codes, create strong passwords, format JSON, merge or split PDFs, resize images, and much more. All tools are 100% free, easy to use, and work instantly in your browser. Explore the tools below to get started.
        </p>
        <p className="hero-lead">
          QR code generator, password generator, JSON formatter, Base64 encoder, word
          counter, image compressor, PDF merge and split, and more. One click, no account.
        </p>
        <p className="hero-intro">
          Free online tools for developers and everyone else: create QR codes, format JSON, convert images and PDFs, generate passwords and UUIDs—all in your browser. No signup, no data sent to our servers. We also publish guides and articles so you can learn what each tool does, how to use it, and when it’s useful.
        </p>
        <p className="hero-seo">
          Use our <strong>QR code generator</strong> for links and Wi‑Fi, our <strong>developer utilities</strong> for Base64 and URL encoding, and our <strong>PDF and image tools</strong> for merge, split, compress, and convert. Browse the tool list below or read the blog for step-by-step guides.
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
