import Link from "next/link";
import { getRelatedTools, TOOL_CATEGORIES, type ToolMeta } from "@/lib/tools/config";
import { getToolGuide } from "@/lib/toolGuides";

interface ToolLayoutProps {
  tool: ToolMeta;
  children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  const related = getRelatedTools(tool);
  const categoryLabel = TOOL_CATEGORIES[tool.category];
  const guide = getToolGuide(tool.slug);

  return (
    <div className="tool-page">
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
          <h1 className="tool-title">{tool.name}</h1>
          <p className="tool-description">{tool.description}</p>
          {/* Semantic SEO: short topic context so the page covers the theme better */}
          <p className="tool-semantic-lead">
            {categoryLabel}: use this free online {tool.name.toLowerCase()} in your browser. No signup, no data sent to our servers—instant results.
          </p>
        </header>
        <div className="tool-content">{children}</div>

        {/* SEO content: what it does, how to use, benefits, use cases (300–500+ words per tool) */}
        {guide && (
          <section className="tool-guide" aria-label="Guide">
            <h2 className="tool-guide-title">About this tool</h2>
            {guide.sections.map((section, i) => (
              <div key={i} className="tool-guide-section">
                <h3 className="tool-guide-heading">{section.heading}</h3>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="tool-guide-para">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <p className="tool-guide-more">
              <Link href="/blog" className="tool-breadcrumb-link">
                More guides and articles →
              </Link>
            </p>
          </section>
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
