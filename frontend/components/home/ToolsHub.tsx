import Link from "next/link";
import {
  TOOL_CATEGORIES,
  getToolsByCategory,
  type ToolCategory,
} from "@/lib/tools/config";

const CATEGORY_ORDER: ToolCategory[] = [
  "generators",
  "developer",
  "text",
  "image",
  "pdf",
];

export function ToolsHub() {
  return (
    <section className="tools-hub">
      <div className="wrap">
        <h2 className="tools-hub-title">Free online tools</h2>
        <p className="tools-hub-lead">
          Small, fast tools for developers and everyone else. No signup, no data
          sent to servers. Use in your browser and get results instantly.
        </p>

        {CATEGORY_ORDER.map((category) => {
          const tools = getToolsByCategory(category);
          if (tools.length === 0) return null;
          return (
            <div key={category} className="tools-category">
              <h3 className="tools-category-title">
                {TOOL_CATEGORIES[category]}
              </h3>
              <div className="tools-grid">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="tool-card"
                  >
                    <div className="tool-card-name">{tool.name}</div>
                    <p className="tool-card-desc">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
