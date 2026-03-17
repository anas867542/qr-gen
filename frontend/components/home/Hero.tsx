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
          counter, image compressor, and more. One click, no account.
        </p>
        <div className="hero-cta">
          <a href="#tools" className="btn btn-primary">
            Browse all tools
          </a>
          <a href="#faq" className="btn btn-ghost">
            FAQ
          </a>
        </div>
      </div>
    </section>
  );
}
