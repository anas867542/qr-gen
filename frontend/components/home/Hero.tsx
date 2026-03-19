export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <p className="hero-badge">Free · No signup · All in your browser</p>
        <h1 className="hero-title">
          Free online <span className="gradient-text">tools</span>
        </h1>
        <p className="hero-lead">
          QR generator, password generator, JSON formatter, Base64 encoder, word
          counter, image compressor, PDF merge and split, and more. One click, no account.
        </p>
        <p className="hero-intro">
          We provide free, privacy-friendly tools that run entirely in your browser. No uploads to our servers for most tools—your data stays on your device. Use our guides and articles to learn how to get the most out of each tool, then browse the full list below.
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
