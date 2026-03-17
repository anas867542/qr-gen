import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "FAQ — Frequently asked questions",
  description:
    "Frequently asked questions about our free online tools: privacy, data, accounts, and how we operate.",
};

const EXTRA_FAQS = [
  {
    q: "What file formats are supported?",
    a: "It depends on the tool. Image tools accept JPEG, PNG, WebP. PDF tools accept PDF and (where stated) Word documents. Each tool page describes what it accepts.",
  },
  {
    q: "Why do you show ads?",
    a: "Ads help us pay for hosting and keep all tools free. You can use an ad blocker, but we appreciate leaving them on so we can keep improving the site.",
  },
  {
    q: "Is there an API?",
    a: "Some tools (e.g. QR code) have an optional backend API. Most tools are client-only. We may offer a public API in the future.",
  },
  {
    q: "Can I use these tools commercially?",
    a: "Yes. The tools are free for personal and commercial use. Generated output (e.g. QR codes, converted files) is yours. Check our terms if we add them.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are these tools really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All tools are free to use with no signup. We may show ads to keep the site running.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data sent to your servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most tools run entirely in your browser. Your inputs (text, files) are not uploaded to our servers unless a tool clearly says otherwise.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to create an account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can use every tool without registering or logging in.",
        },
      },
    ],
  };

  return (
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to home
        </Link>
      </nav>
      <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>
        Frequently asked questions
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem", maxWidth: "36rem" }}>
        Everything you need to know about our free online tools, privacy, and how we run the site.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FaqSection showTitle={false} />

      <section style={{ marginTop: "3rem", maxWidth: "640px" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>More questions</h2>
        <dl style={{ margin: 0 }}>
          {EXTRA_FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                padding: "1rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <dt style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{faq.q}</dt>
              <dd style={{ margin: 0, color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/" className="nav-link">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
