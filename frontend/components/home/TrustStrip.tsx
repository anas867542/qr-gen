const ITEMS = [
  { label: "Free", desc: "No payment" },
  { label: "No signup", desc: "Use instantly" },
  { label: "Private", desc: "Runs in browser" },
  { label: "Secure", desc: "HTTPS & privacy" },
];

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why use us">
      <div className="wrap trust-strip-inner">
        {ITEMS.map((item) => (
          <div key={item.label} className="trust-item">
            <span className="trust-label">{item.label}</span>
            <span className="trust-desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
