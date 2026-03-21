/**
 * Trust / value section from snapptools-content/homepage/homepage-rewrite.md
 * Placed after the tool grid for SEO and clarity.
 */
export function HomepageWhySnapptoolsSection() {
  return (
    <section id="why-snapptools" className="home-why-snapptools" aria-labelledby="why-snapptools-title">
      <div className="wrap home-why-inner">
        <h2 id="why-snapptools-title" className="home-why-title">
          Why use Snapptools?
        </h2>

        <div className="home-why-block">
          <h3 className="home-why-subtitle">Free — no hidden fees, no plans</h3>
          <p className="home-why-text">
            Every tool on this site is completely free. There are no free tiers with locked features, no subscription
            plans, and no &quot;pro&quot; version. Use any tool as much as you want at no cost.
          </p>
        </div>

        <div className="home-why-block">
          <h3 className="home-why-subtitle">Private — your files stay on your device</h3>
          <p className="home-why-text">
            Most tools run entirely in your browser using JavaScript. When you compress an image, format JSON, or
            generate a password, that processing happens on your device — not on our servers. We cannot see your files,
            and we do not store them.
          </p>
        </div>

        <div className="home-why-block">
          <h3 className="home-why-subtitle">No account required</h3>
          <p className="home-why-text">
            There is no signup flow, no email verification, and no profile to manage. Open a tool and start using it —
            that is it.
          </p>
        </div>

        <div className="home-why-block">
          <h3 className="home-why-subtitle">Works on any device</h3>
          <p className="home-why-text">
            All tools are designed to work on desktop, tablet, and mobile. Whether you are on a work laptop or your
            phone, the tools load fast and work without installing anything.
          </p>
        </div>
      </div>
    </section>
  );
}
