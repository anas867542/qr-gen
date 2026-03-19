import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools/config";
import { getAllSlugs } from "@/lib/blogArticles";

import { getBaseUrl } from "@/lib/siteConfig";

function baseUrl() {
  return getBaseUrl();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const root = baseUrl();
  const now = new Date().toISOString().split("T")[0];

  const routes: MetadataRoute.Sitemap = [
    { url: root, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${root}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${root}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${root}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${root}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${root}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${root}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${root}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${root}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${root}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${root}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${root}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...toolPages, ...blogPages];
}
