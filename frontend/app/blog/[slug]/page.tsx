import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/blogArticles";
import { getBaseUrl, SITE_NAME } from "@/lib/siteConfig";

type Props = { params: Promise<{ slug: string }> };

const DEFAULT_RELATED_TOOLS: { slug: string; label: string }[] = [
  { slug: "word-counter", label: "Free word counter online →" },
  { slug: "qr-code-generator", label: "Free QR code generator →" },
  { slug: "json-formatter", label: "JSON formatter & validator →" },
];

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  const base = getBaseUrl();
  const kw = [
    ...article.description.split(/\s+/).slice(0, 8),
    "free online tools",
    SITE_NAME.toLowerCase(),
    ...(article.relatedTools?.map((t) => t.slug.replace(/-/g, " ")) ?? []),
  ];
  return {
    title: `${article.title} | Blog`,
    description: article.description,
    keywords: kw,
    alternates: { canonical: `${base}/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      ...(article.dateModified ? { modifiedTime: article.dateModified } : {}),
      url: `${base}/blog/${slug}`,
      siteName: SITE_NAME,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const base = getBaseUrl();
  const articleUrl = `${base}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    datePublished: article.date,
    dateModified: article.dateModified ?? article.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <article className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "720px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/blog" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to blog
        </Link>
      </nav>
      <header style={{ marginBottom: "2rem" }}>
        <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>
          {article.title}
        </h1>
        <time
          dateTime={article.date}
          style={{ fontSize: "0.9rem", color: "var(--muted)" }}
        >
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
        {article.sections.map((section, i) => (
          <section key={i} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} style={{ marginBottom: "1rem" }}>
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <aside
        style={{
          marginTop: "2.5rem",
          padding: "1.25rem 1.5rem",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
          background: "var(--surface)",
        }}
        aria-label="Related free tools"
      >
        <h2 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Use our free tools</h2>
        <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8 }}>
          {(article.relatedTools?.length ? article.relatedTools : DEFAULT_RELATED_TOOLS).map((t) => (
            <li key={t.slug}>
              <Link href={`/tools/${t.slug}`} style={{ color: "var(--accent)", fontWeight: 600 }}>
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
