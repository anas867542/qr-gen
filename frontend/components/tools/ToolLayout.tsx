import Link from "next/link";
import { getRelatedTools, TOOL_CATEGORIES, type ToolMeta } from "@/lib/tools/config";
import { getToolGuide } from "@/lib/toolGuides";
import { getArticleBySlug } from "@/lib/blogArticles";
import { TOOL_TO_BLOG_SLUGS } from "@/lib/toolBlogLinks";

interface ToolLayoutProps {
  tool: ToolMeta;
  children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  const related = getRelatedTools(tool);
  const categoryLabel = TOOL_CATEGORIES[tool.category];
  const guide = getToolGuide(tool.slug);
  const h1 = tool.h1Title ?? tool.name;
  const primaryIntro = tool.introLead ?? tool.description;

  const faqJsonLd =
    guide?.faqs && guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <div className="tool-page">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <nav className="tool-breadcrumb wrap" aria-label="Breadcrumb">
        <Link href="/" className="tool-breadcrumb-link">
          Home
        </Link>
        <span className="tool-breadcrumb-sep">/</span>
        <Link href="/#tools" className="tool-breadcrumb-link">
          All tools
        </Link>
        <span className="tool-breadcrumb-sep">/</span>
        <span className="tool-breadcrumb-current">{tool.name}</span>
      </nav>
      <div className="wrap">
        <header className="tool-header">
          <h1 className="tool-title">{h1}</h1>
          <p className="tool-description">{primaryIntro}</p>
          <p className="tool-semantic-lead">
            {categoryLabel}: free online {tool.name.toLowerCase()} in your browser. No signup required—your data stays on your device.
          </p>
        </header>
        <div className="tool-content">{children}</div>

        {/* SEO: H2 sections, features, FAQ (target 500–1000 words on priority tools) */}
        {guide && (
          <article className="tool-guide" aria-label="Guide">
            {guide.sections.map((section, i) => (
              <section key={i} className="tool-guide-section">
                <h2 className="tool-guide-heading">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="tool-guide-para">
                    {p}
                  </p>
                ))}
              </section>
            ))}
            {guide.features && guide.features.length > 0 && (
              <section className="tool-guide-section" aria-labelledby={`features-${tool.slug}`}>
                <h2 id={`features-${tool.slug}`} className="tool-guide-heading">
                  Features
                </h2>
                <ul className="tool-guide-feature-list">
                  {guide.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
            {guide.faqs && guide.faqs.length > 0 && (
              <section className="tool-guide-section tool-guide-faq" aria-labelledby={`faq-${tool.slug}`}>
                <h2 id={`faq-${tool.slug}`} className="tool-guide-heading">
                  Frequently asked questions
                </h2>
                {guide.faqs.map((f, i) => (
                  <div key={i} className="tool-faq-item">
                    <h3 className="tool-faq-question">{f.question}</h3>
                    <p className="tool-faq-answer">{f.answer}</p>
                  </div>
                ))}
              </section>
            )}
            {(TOOL_TO_BLOG_SLUGS[tool.slug]?.length ?? 0) > 0 && (
              <section className="tool-guide-related-blog">
                <h2 className="tool-guide-heading">Related guides</h2>
                <ul className="tool-guide-blog-list">
                  {TOOL_TO_BLOG_SLUGS[tool.slug]
                    .map((slug) => getArticleBySlug(slug))
                    .filter((a): a is NonNullable<typeof a> => a != null)
                    .map((article) => (
                      <li key={article.slug}>
                        <Link href={`/blog/${article.slug}`} className="related-tools-link">
                          {article.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </section>
            )}
            <p className="tool-guide-more">
              <Link href="/blog" className="tool-breadcrumb-link">
                More guides and articles →
              </Link>
            </p>
          </article>
        )}

        {/* Clustering SEO: internal links to related tools (same topic cluster) */}
        {related.length > 0 && (
          <aside className="related-tools" aria-label="Related tools">
            <h2 className="related-tools-title">Related {categoryLabel}</h2>
            <ul className="related-tools-list">
              {related.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tools/${t.slug}`} className="related-tools-link">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="related-tools-more">
              <Link href="/#tools" className="tool-breadcrumb-link">
                View all tools →
              </Link>
            </p>
          </aside>
        )}
      </div>
    </div>
  );
}
