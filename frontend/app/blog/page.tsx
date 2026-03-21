import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES } from "@/lib/blogArticles";
import { SITE_NAME, getBaseUrl } from "@/lib/siteConfig";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: `Guides & Articles – QR Codes, PDFs, Images & More | ${SITE_NAME}`,
  description:
    "Step-by-step guides and articles about QR codes, PDF tools, image compression, password security, and more. Free tutorials for developers and everyday users.",
  keywords: ["qr code blog", "qr code guide", "qr code tips", "free qr code", "qr code articles"],
  openGraph: {
    title: `Guides & Articles – QR Codes, PDFs, Images & More | ${SITE_NAME}`,
    description: "Step-by-step guides and articles about QR codes, PDF tools, image compression, password security, and more.",
    type: "website",
    url: `${baseUrl}/blog`,
  },
  alternates: { canonical: `${baseUrl}/blog` },
};

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${baseUrl}/blog`,
    description: "Step-by-step guides and articles about QR codes, PDF tools, image compression, password security, and more.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: baseUrl,
    },
  };

  return (
    <div className="wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem", maxWidth: "800px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <nav style={{ marginBottom: "1.5rem" }}>
        <Link href="/" className="nav-link" style={{ display: "inline-block" }}>
          ← Back to home
        </Link>
      </nav>
      <h1 className="tool-title" style={{ marginBottom: "0.5rem" }}>
        Blog & Guides
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
        Articles about QR codes, how to use them, and tips for business and personal use.
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {BLOG_ARTICLES.map((article) => (
          <li
            key={article.slug}
            style={{
              marginBottom: "1.5rem",
              paddingBottom: "1.5rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <Link
              href={`/blog/${article.slug}`}
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              {article.title}
            </Link>
            <p style={{ margin: "0.35rem 0 0", fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.5 }}>
              {article.description}
            </p>
            <time
              dateTime={article.date}
              style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.25rem", display: "block" }}
            >
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </li>
        ))}
      </ul>
    </div>
  );
}
