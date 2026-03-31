"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  TOOL_HUB_SECTION_META,
  HUB_SECTION_DISPLAY_ORDER,
  getToolsByHubSection,
  getHubSectionsInUse,
  TOOLS,
  type ToolHubSection,
  type ToolMeta,
} from "@/lib/tools/config";
import { ToolCardLeadIcon } from "@/components/home/ToolCardLeadIcon";

function parseHubSectionParam(raw: string | null): ToolHubSection | null {
  if (!raw) return null;
  return (HUB_SECTION_DISPLAY_ORDER as readonly string[]).includes(raw) ? (raw as ToolHubSection) : null;
}

function toolMatchesQuery(tool: ToolMeta, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.toLowerCase().trim();
  if (tool.name.toLowerCase().includes(q)) return true;
  if (tool.description.toLowerCase().includes(q)) return true;
  if (tool.keywords?.some((k) => k.toLowerCase().includes(q))) return true;
  const hub = TOOL_HUB_SECTION_META[tool.hubSection];
  if (hub.label.toLowerCase().includes(q)) return true;
  if (hub.lead.toLowerCase().includes(q)) return true;
  return false;
}

export function ToolsHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSection, setFilterSection] = useState<ToolHubSection | "all">("all");
  const sectionsInUse = useMemo(() => getHubSectionsInUse(), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) setSearchQuery(q);
    const sec = parseHubSectionParam(params.get("section"));
    if (sec) setFilterSection(sec);
  }, []);

  const syncUrl = useCallback((nextQ: string, nextSection: ToolHubSection | "all") => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (nextQ.trim()) url.searchParams.set("q", nextQ.trim());
    else url.searchParams.delete("q");
    if (nextSection !== "all") url.searchParams.set("section", nextSection);
    else url.searchParams.delete("section");
    const path = url.pathname + (url.search || "") + (url.hash || "");
    window.history.replaceState({}, "", path);
  }, []);

  const handleSectionChange = (next: ToolHubSection | "all") => {
    setFilterSection(next);
    syncUrl(searchQuery, next);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    syncUrl(value, filterSection);
  };

  const sectionsToRender = useMemo(() => {
    const order = HUB_SECTION_DISPLAY_ORDER.filter((s) => {
      if (filterSection !== "all" && s !== filterSection) return false;
      return sectionsInUse.includes(s);
    });
    return order
      .map((section) => {
        const tools = getToolsByHubSection(section).filter((t) => toolMatchesQuery(t, searchQuery));
        return { section, tools };
      })
      .filter(({ tools }) => tools.length > 0);
  }, [filterSection, searchQuery, sectionsInUse]);

  const totalMatch = sectionsToRender.reduce((acc, { tools }) => acc + tools.length, 0);
  const categoryCount = sectionsInUse.length;

  return (
    <section className="tools-hub">
      <div className="wrap">
        <p className="tools-hub-eyebrow">Browse by category</p>
        <h2 className="tools-hub-title">Free online tools</h2>
        <p className="tools-hub-stats" role="status">
          <strong>{TOOLS.length}</strong> tools across <strong>{categoryCount}</strong> categories · No signup · Runs in your browser
        </p>
        <p className="tools-hub-lead">
          Pick a category or search. Each tool includes guides and structured data for search engines. For long reads, see our{" "}
          <Link href="/blog">blog</Link>.
        </p>

        <div className="tools-hub-chips" role="tablist" aria-label="Filter by category">
          <button
            type="button"
            role="tab"
            aria-selected={filterSection === "all"}
            className={`tools-hub-chip${filterSection === "all" ? " tools-hub-chip-active" : ""}`}
            onClick={() => handleSectionChange("all")}
          >
            All
            <span className="tools-hub-chip-count">{TOOLS.length}</span>
          </button>
          {sectionsInUse.map((section) => {
            const count = getToolsByHubSection(section).length;
            const meta = TOOL_HUB_SECTION_META[section];
            return (
              <button
                key={section}
                type="button"
                role="tab"
                aria-selected={filterSection === section}
                className={`tools-hub-chip${filterSection === section ? " tools-hub-chip-active" : ""}`}
                onClick={() => handleSectionChange(section)}
              >
                <span className="tools-hub-chip-symbol" aria-hidden>
                  {meta.symbol}
                </span>
                {meta.label.replace(/ Tools$/, "").replace(/ & Documents$/, "")}
                <span className="tools-hub-chip-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="tools-search-wrap">
          <label htmlFor="tools-search" className="tools-search-label">
            Search tools
          </label>
          <input
            id="tools-search"
            type="search"
            placeholder="Try QR, PDF, JSON, compress, resize…"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="tools-search-input"
            aria-describedby="tools-search-hint"
            autoComplete="off"
          />
          <span id="tools-search-hint" className="tools-search-hint">
            {searchQuery || filterSection !== "all"
              ? `${totalMatch} tool(s) match your filters`
              : "Filter by name, keyword, or category label"}
          </span>
        </div>

        <p className="tools-hub-seo">
          We follow technical SEO best practices: unique titles and descriptions per tool, canonical URLs, Open Graph tags, XML sitemap,{" "}
          <code>robots.txt</code>, JSON-LD (SoftwareApplication, Breadcrumbs, FAQ where applicable), and internal links between tools and the blog.
        </p>

        {sectionsToRender.length === 0 ? (
          <p className="tools-search-empty" role="status">
            No tools match your filters. Try clearing search or choosing &quot;All&quot;.
          </p>
        ) : (
          sectionsToRender.map(({ section, tools }) => {
            const meta = TOOL_HUB_SECTION_META[section];
            return (
              <div key={section} className="tools-category">
                <h3 className="tools-category-title">
                  <span className="tools-category-symbol" aria-hidden>
                    {meta.symbol}
                  </span>
                  {meta.label}
                </h3>
                <p className="tools-category-desc">{meta.lead}</p>
                <div className="tools-grid">
                  {tools.map((tool) => (
                    <Link key={tool.slug} href={`/tools/${tool.slug}`} className="tool-card">
                      <ToolCardLeadIcon hubSection={tool.hubSection} iconEmoji={tool.iconEmoji} />
                      <div className="tool-card-name">{tool.name}</div>
                      <p className="tool-card-desc">{tool.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        )}

        <aside className="tools-hub-roadmap" aria-label="Product roadmap">
          <p>
            <strong>More categories.</strong> Sites like{" "}
            <a href="https://www.snapptools.org/" rel="noopener noreferrer">
              SnappTools.org
            </a>{" "}
            list many tools (design, calculators, SEO utilities). We ship new tools incrementally — request priorities via{" "}
            <Link href="/contact">contact</Link>. For Google AdSense, avoid empty “coming soon” URLs; publish real tools with original copy when you add
            them.
          </p>
        </aside>
      </div>
    </section>
  );
}
