import Link from "next/link";
import { BLOG_ARTICLES } from "@/lib/blogArticles";

const FEATURED_COUNT = 8;

export function HomepageGuidesSection() {
  const featured = BLOG_ARTICLES.slice(0, FEATURED_COUNT);

  return (
    <section className="home-guides" aria-label="Guides and articles">
      <div className="wrap">
        <h2 className="home-guides-title">Guides &amp; Articles</h2>
        <p className="home-guides-lead">
          Learn how to use our tools and get the most out of them. We cover QR codes, passwords, PDFs, images, and more—with step-by-step guides and tips for developers and everyone else.
        </p>
        <ul className="home-guides-list">
          {featured.map((article) => (
            <li key={article.slug} className="home-guides-item">
              <Link href={`/blog/${article.slug}`} className="home-guides-link">
                {article.title}
              </Link>
              <p className="home-guides-desc">{article.description}</p>
            </li>
          ))}
        </ul>
        <p className="home-guides-more">
          <Link href="/blog" className="btn btn-ghost">
            View all guides and articles →
          </Link>
        </p>
      </div>
    </section>
  );
}
