"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  TOOL_CATEGORIES,
  getToolsByCategory,
  type ToolCategory,
  type ToolMeta,
} from "@/lib/tools/config";
import { ToolCategoryIcon } from "@/components/home/ToolCategoryIcon";

const CATEGORY_ORDER: ToolCategory[] = [
  "generators",
  "developer",
  "text",
  "image",
  "pdf",
];

const CATEGORY_DESCRIPTIONS: Record<ToolCategory, string> = {
  generators: "Generate QR codes, passwords, UUIDs, Lorem Ipsum, and random numbers—no signup.",
  developer: "Format JSON, encode Base64 and URLs, generate hashes. Handy for developers and APIs.",
  text: "Count words and characters, check text stats. Useful for essays, posts, and forms.",
  image: "Compress, resize, crop, and convert images (PNG, JPG, WebP). Reduce file size or change dimensions.",
  pdf: "Merge, split, compress, add watermarks, and convert PDFs to or from Word. All in your browser.",
};

function toolMatchesQuery(tool: ToolMeta, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  if (tool.name.toLowerCase().includes(q)) return true;
  if (tool.description.toLowerCase().includes(q)) return true;
  if (tool.keywords?.some((k) => k.toLowerCase().includes(q))) return true;
  if (TOOL_CATEGORIES[tool.category].toLowerCase().includes(q)) return true;
  return false;
}

export function ToolsHub() {
  const [searchQuery, setSearchQuery] = useState("");

  const categoriesWithTools = useMemo(() => {
    return CATEGORY_ORDER.map((category) => {
      const tools = getToolsByCategory(category).filter((tool) =>
        toolMatchesQuery(tool, searchQuery)
      );
      return { category, tools };
    }).filter(({ tools }) => tools.length > 0);
  }, [searchQuery]);

  return (
    <section className="tools-hub">
      <div className="wrap">
        <h2 className="tools-hub-title">Free online tools</h2>
        <p className="tools-hub-lead">
          Small, fast tools for developers and everyone else. No signup, no data
          sent to servers. Use in your browser and get results instantly.
        </p>

        <div className="tools-search-wrap">
          <label htmlFor="tools-search" className="tools-search-label">
            Search tools
          </label>
          <input
            id="tools-search"
            type="search"
            placeholder="Search by name, keyword… e.g. QR, PDF, password, image"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tools-search-input"
            aria-describedby="tools-search-hint"
          />
          <span id="tools-search-hint" className="tools-search-hint">
            {searchQuery
              ? `${categoriesWithTools.reduce((acc, { tools }) => acc + tools.length, 0)} tool(s) match`
              : "Type to filter tools by name or keyword"}
          </span>
        </div>

        <p className="tools-hub-seo">
          Each tool includes a short guide: what it does, how to use it, and example use cases. For longer guides and articles (QR codes, passwords, PDFs, images), see our <Link href="/blog">blog and guides</Link>.
        </p>

        {categoriesWithTools.length === 0 ? (
          <p className="tools-search-empty" role="status">
            No tools match &quot;{searchQuery}&quot;. Try a different search or clear the box.
          </p>
        ) : (
          categoriesWithTools.map(({ category, tools }) => (
            <div key={category} className="tools-category">
              <h3 className="tools-category-title">
                {TOOL_CATEGORIES[category]}
              </h3>
              <p className="tools-category-desc">
                {CATEGORY_DESCRIPTIONS[category]}
              </p>
              <div className="tools-grid">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="tool-card"
                  >
                    <ToolCategoryIcon category={tool.category} />
                    <div className="tool-card-name">{tool.name}</div>
                    <p className="tool-card-desc">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
