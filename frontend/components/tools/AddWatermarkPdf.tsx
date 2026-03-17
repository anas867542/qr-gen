"use client";

import { useState, useCallback } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export function AddWatermarkPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("DRAFT");
  const [opacity, setOpacity] = useState(0.3);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f || f.type !== "application/pdf") {
      setFile(null);
      return;
    }
    setFile(f);
    setError("");
  }, []);

  const run = useCallback(async () => {
    if (!file) {
      setError("Select a PDF first.");
      return;
    }
    if (!text.trim()) {
      setError("Enter watermark text.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const buf = await file.arrayBuffer();
      const doc = await PDFDocument.load(buf);
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      const pages = doc.getPages();

      for (const page of pages) {
        const { width, height } = page.getSize();
        const fontSize = Math.min(width, height) / 8;
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const x = (width - textWidth) / 2;
        const y = height / 2 - fontSize / 2;
        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.5, 0.5, 0.5),
          opacity,
        });
      }

      const out = await doc.save();
      const blob = new Blob([out as BlobPart], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(/\.pdf$/i, "") + "-watermark.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to add watermark.");
    } finally {
      setLoading(false);
    }
  }, [file, text, opacity]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select PDF</label>
        <input type="file" accept=".pdf,application/pdf" onChange={handleFile} />
      </div>
      {file && (
        <>
          <div className="field-block">
            <label>Watermark text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g. DRAFT, CONFIDENTIAL"
            />
          </div>
          <div className="field-block">
            <label>Opacity: {Math.round(opacity * 100)}%</label>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.1}
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
          </div>
        </>
      )}
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={run}
          disabled={!file || loading}
        >
          {loading ? "Adding…" : "Add watermark & download"}
        </button>
      </div>
    </div>
  );
}
