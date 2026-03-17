"use client";

import { useState, useCallback } from "react";
import { PDFDocument } from "pdf-lib";

export function MergePdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFiles = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files || []);
    const pdfs = list.filter((f) => f.type === "application/pdf");
    if (pdfs.length !== list.length) setError("Some files were not PDFs and were skipped.");
    else setError("");
    setFiles((prev) => [...prev, ...pdfs]);
  }, []);

  const remove = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setError("");
  }, []);

  const move = useCallback((index: number, dir: number) => {
    const next = index + dir;
    if (next < 0 || next >= files.length) return;
    setFiles((prev) => {
      const a = [...prev];
      [a[index], a[next]] = [a[next], a[index]];
      return a;
    });
  }, [files.length]);

  const merge = useCallback(async () => {
    if (files.length === 0) {
      setError("Add at least one PDF.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const merged = await PDFDocument.create();
      for (const file of files) {
        const buf = await file.arrayBuffer();
        const src = await PDFDocument.load(buf);
        const pages = await merged.copyPages(src, src.getPageIndices());
        pages.forEach((p) => merged.addPage(p));
      }
      const out = await merged.save();
      const blob = new Blob([out], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Merge failed.");
    } finally {
      setLoading(false);
    }
  }, [files]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select PDF files (order = merge order)</label>
        <input type="file" accept=".pdf,application/pdf" multiple onChange={handleFiles} />
      </div>
      {files.length > 0 && (
        <div className="field-block">
          <label>Order (use arrows to reorder)</label>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {files.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                  padding: "0.5rem",
                  background: "var(--bg-elevated)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  aria-label="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => move(i, 1)}
                  disabled={i === files.length - 1}
                  aria-label="Move down"
                >
                  ↓
                </button>
                <span style={{ flex: 1, fontSize: "0.9rem" }}>{f.name}</span>
                <button type="button" className="btn btn-ghost" onClick={() => remove(i)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={merge}
          disabled={files.length === 0 || loading}
        >
          {loading ? "Merging…" : "Merge & download"}
        </button>
      </div>
    </div>
  );
}
