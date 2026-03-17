export function Features() {
  return (
    <section id="features" className="features-section">
      <div className="wrap">
        <h2 className="features-title">Why use this generator</h2>
        <div className="features-grid">
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              🔗
            </div>
            <h3>URLs & text</h3>
            <p>
              Encode website links, plain text, or Wi‑Fi credentials in one place.
            </p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              🎨
            </div>
            <h3>Customize</h3>
            <p>Pick size and colors so your QR fits your brand or page.</p>
          </article>
          <article className="feature">
            <div className="feature-icon" aria-hidden="true">
              📥
            </div>
            <h3>Download PNG</h3>
            <p>Save a high-quality PNG and use it on print or web.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
