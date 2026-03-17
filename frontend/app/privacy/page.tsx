import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for this website. How we use cookies, data, and third-party services including advertising.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "720px" }}>
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to home
        </Link>
      </nav>
      <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>1. Overview</h2>
          <p>
            This website provides free online tools (e.g. QR generator, password generator, JSON formatter).
            We respect your privacy. This policy explains what data we collect, how we use it, and your choices.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>2. Data we collect</h2>
          <p>
            <strong>Tool usage:</strong> Most tools run entirely in your browser. We do not send your inputs
            (e.g. text, files) to our servers unless a specific tool clearly states otherwise (e.g. an optional
            API). We do not store the content you paste, upload, or generate.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            <strong>Automatically collected:</strong> When you visit, we may collect information such as your
            IP address, browser type, device type, and pages visited. This is common for any website and may
            be used for analytics and security.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>3. Cookies and similar technologies</h2>
          <p>
            We use cookies and local storage to:
          </p>
          <ul style={{ marginLeft: "1.25rem", marginTop: "0.5rem" }}>
            <li>Remember your cookie consent preference</li>
            <li>Support advertising (e.g. Google AdSense) if we show ads</li>
            <li>Help us understand how the site is used (e.g. analytics)</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>
            You can accept or decline non-essential cookies via the cookie banner. Essential cookies are
            required for the site to function.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>4. Advertising</h2>
          <p>
            We may display ads (e.g. via Google AdSense). Third-party advertisers may use cookies and similar
            technologies to show relevant ads and measure performance. Their use of data is governed by their
            own privacy policies (e.g.{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              Google Privacy Policy
            </a>
            ). You can control ad personalization via your browser or Google&apos;s ad settings.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>5. Third-party services</h2>
          <p>
            We may use third-party services for hosting, analytics, and ads. These providers have their own
            privacy policies. We do not sell your personal data to third parties.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>6. Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, or delete your data, or
            to object to certain processing. You can also disable cookies in your browser and opt out of
            personalized ads via your ad settings.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>7. Changes</h2>
          <p>
            We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top
            will reflect the latest version. Continued use of the site after changes means you accept the
            updated policy.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>8. Contact</h2>
          <p>
            If you have questions about this privacy policy or your data, please see our{" "}
            <Link href="/contact" style={{ color: "var(--accent)" }}>Contact</Link> page.
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
