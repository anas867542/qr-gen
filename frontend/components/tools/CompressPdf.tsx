"use client";

import { useState, useCallback } from "react";
import { jsPDF } from "jspdf";

export function CompressPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState(0.75);
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

  const compress = useCallback(async () => {
    if (!file) {
      setError("Select a PDF first.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const pdfjs = await import("pdfjs-dist");
      if (typeof window !== "undefined") {
        (pdfjs as unknown as { GlobalWorkerOptions: { workerSrc: string } }).GlobalWorkerOptions.workerSrc =
          "https://unpkg.com/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs";
      }
      const data = new Uint8Array(await file.arrayBuffer());
      const pdf = await pdfjs.getDocument({ data }).promise;
      const numPages = pdf.numPages;

      const pdfOut = new jsPDF("p", "pt", "a4");
      const pageW = pdfOut.internal.pageSize.getWidth();
      const pageH = pdfOut.internal.pageSize.getHeight();

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not supported");
        await page.render({ canvasContext: ctx, viewport }).promise;

        const imgW = pageW;
        const imgH = (viewport.height / viewport.width) * pageW;
        if (i > 1) pdfOut.addPage();
        pdfOut.addImage(
          canvas.toDataURL("image/jpeg", 0.85),
          "JPEG",
          0,
          0,
          imgW,
          Math.min(imgH, pageH)
        );
      }

      pdfOut.save(file.name.replace(/\.pdf$/i, "") + "-compressed.pdf");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Compression failed.");
    } finally {
      setLoading(false);
    }
  }, [file, scale]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select PDF</label>
        <input type="file" accept=".pdf,application/pdf" onChange={handleFile} />
      </div>
      {file && (
        <div className="field-block">
          <label>Quality (lower = smaller file): {Math.round(scale * 100)}%</label>
          <input
            type="range"
            min={0.5}
            max={1}
            step={0.05}
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--accent)" }}
          />
        </div>
      )}
      <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
        Renders each page at lower resolution and rebuilds the PDF. Best for image-heavy PDFs.
      </p>
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={compress}
          disabled={!file || loading}
        >
          {loading ? "Compressing…" : "Compress & download"}
        </button>
      </div>
    </div>
  );
}
