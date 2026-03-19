import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/blogArticles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.title} | Blog`,
    description: article.description,
    keywords: ["qr code", "qr generator", "free qr", article.title.split(" ").slice(0, 4).join(" ")],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "720px" }}>
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

      <p style={{ marginTop: "2rem" }}>
        <Link href="/tools/qr-code-generator" style={{ color: "var(--accent)", fontWeight: 600 }}>
          Create your own free QR code →
        </Link>
      </p>
    </article>
  );
}
