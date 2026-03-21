/**
 * Shared blog article shape (SEO posts + tool CTAs).
 */
export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** ISO date for JSON-LD dateModified when content is updated */
  dateModified?: string;
  sections: { heading: string; paragraphs: string[] }[];
  /** Internal links at end of post → tool pages (authority + SEO). */
  relatedTools?: { slug: string; label: string }[];
}
