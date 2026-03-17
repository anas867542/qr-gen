import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools/config";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_URL ||
  "https://yoursite.com";

function baseUrl() {
  if (BASE.startsWith("http")) return BASE.replace(/\/$/, "");
  return `https://${BASE}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const root = baseUrl();
  const now = new Date().toISOString().split("T")[0];

  const routes: MetadataRoute.Sitemap = [
    { url: root, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${root}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${root}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${root}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${root}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${root}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${root}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${root}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...toolPages];
}
