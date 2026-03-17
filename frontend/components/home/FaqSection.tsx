"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Are these tools really free?",
    a: "Yes. All tools are free to use with no signup. We may show ads to keep the site running.",
  },
  {
    q: "Is my data sent to your servers?",
    a: "Most tools run entirely in your browser. Your inputs (text, files) are not uploaded to our servers unless a tool clearly says otherwise (e.g. an optional API).",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can use every tool without registering or logging in.",
  },
  {
    q: "Can I use these tools on mobile?",
    a: "Yes. The site works on phones and tablets. Some tools (e.g. file uploads) work best on desktop.",
  },
  {
    q: "How do you make money?",
    a: "We may show ads (e.g. Google AdSense) and sometimes link to products we recommend (affiliate links). Using the tools remains free.",
  },
  {
    q: "How do I report a bug or suggest a tool?",
    a: "Use the contact option listed in the footer or on our main page. We read all feedback.",
  },
];

type FaqSectionProps = { showTitle?: boolean };

export function FaqSection({ showTitle = true }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="faq-section"
      aria-labelledby={showTitle ? "faq-heading" : undefined}
      {...(!showTitle && { "aria-label": "Frequently asked questions" })}
    >
      <div className="wrap">
        {showTitle && (
          <>
            <h2 id="faq-heading" className="faq-title">
              Frequently asked questions
            </h2>
            <p className="faq-lead">
              Quick answers about how the site works and what to expect.
            </p>
          </>
        )}
        <dl className="faq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`}
            >
              <dt className="faq-question">
                <button
                  type="button"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="faq-question-btn"
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden>+</span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                aria-labelledby={`faq-question-${i}`}
                className="faq-answer"
                role="region"
              >
                <p>{faq.a}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
