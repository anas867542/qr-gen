import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/home/FaqSection";
import { SITE_NAME } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `FAQ — Frequently Asked Questions | ${SITE_NAME}`,
  description: `Frequently asked questions about ${SITE_NAME} free online tools: privacy, data, accounts, and how we operate.`,
  keywords: ["faq", "free tools", "qr generator", "online tools help", "snapptools"],
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
        name: "Are Snapptools tools really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All tools on Snapptools are completely free to use with no signup required. We may show ads to keep the site running.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data sent to your servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most tools run entirely in your browser. Your inputs — text, files, images — are not uploaded to our servers. A small number of tools may use an optional API, which is clearly stated on those pages.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to create an account to use Snapptools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Every tool on Snapptools is available without registering or logging in.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use these tools on my phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Snapptools works on phones and tablets. Most tools work well on mobile, though some tools involving file uploads work best on desktop.",
        },
      },
      {
        "@type": "Question",
        name: "How does Snapptools make money?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Snapptools may show ads (such as Google AdSense) and may include affiliate links to products we recommend. Using the tools remains free.",
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
