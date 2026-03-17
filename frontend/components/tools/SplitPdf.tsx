"use client";

import { useState, useCallback } from "react";
import { PDFDocument } from "pdf-lib";

type SplitMode = "all" | "range";

export function SplitPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<SplitMode>("all");
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f || f.type !== "application/pdf") {
      setFile(null);
      setPageCount(0);
      return;
    }
    setFile(f);
    setError("");
    try {
      const buf = await f.arrayBuffer();
      const doc = await PDFDocument.load(buf);
      const n = doc.getPageCount();
      setPageCount(n);
      setTo(n);
      setFrom(1);
    } catch {
      setPageCount(0);
      setError("Could not read PDF.");
    }
  }, []);

  const split = useCallback(async () => {
    if (!file) {
      setError("Select a PDF first.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const buf = await file.arrayBuffer();
      const src = await PDFDocument.load(buf);
      const total = src.getPageCount();

      if (mode === "all") {
        for (let i = 0; i < total; i++) {
          const doc = await PDFDocument.create();
          const [page] = await doc.copyPages(src, [i]);
          doc.addPage(page);
          const out = await doc.save();
          const blob = new Blob([out], { type: "application/pdf" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `${file.name.replace(/\.pdf$/i, "")}-page-${i + 1}.pdf`;
          a.click();
          URL.revokeObjectURL(url);
        }
      } else {
        const start = Math.max(1, Math.min(from, total));
        const end = Math.max(start, Math.min(to, total));
        const doc = await PDFDocument.create();
        const indices = Array.from({ length: end - start + 1 }, (_, k) => start - 1 + k);
        const pages = await doc.copyPages(src, indices);
        pages.forEach((p) => doc.addPage(p));
        const out = await doc.save();
        const blob = new Blob([out], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${file.name.replace(/\.pdf$/i, "")}-pages-${start}-${end}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Split failed.");
    } finally {
      setLoading(false);
    }
  }, [file, mode, from, to]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select PDF</label>
        <input type="file" accept=".pdf,application/pdf" onChange={handleFile} />
      </div>
      {file && pageCount > 0 && (
        <>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
            Pages: {pageCount}
          </p>
          <div className="field-block">
            <label>Split</label>
            <select value={mode} onChange={(e) => setMode(e.target.value as SplitMode)}>
              <option value="all">One PDF per page</option>
              <option value="range">Page range (single PDF)</option>
            </select>
          </div>
          {mode === "range" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="field-block">
                <label>From page</label>
                <input
                  type="number"
                  min={1}
                  max={pageCount}
                  value={from}
                  onChange={(e) => setFrom(Number(e.target.value))}
                />
              </div>
              <div className="field-block">
                <label>To page</label>
                <input
                  type="number"
                  min={1}
                  max={pageCount}
                  value={to}
                  onChange={(e) => setTo(Number(e.target.value))}
                />
              </div>
            </div>
          )}
        </>
      )}
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={split}
          disabled={!file || pageCount === 0 || loading}
        >
          {loading ? "Splitting…" : mode === "all" ? "Split & download all" : "Extract & download"}
        </button>
      </div>
    </div>
  );
}
