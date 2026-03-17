"use client";

import { useState, useCallback } from "react";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  PageBreak,
} from "docx";

export function PdfToWord() {
  const [file, setFile] = useState<File | null>(null);
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

  const convert = useCallback(async () => {
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
      const children: Paragraph[] = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items
          .map((item) => ("str" in item ? item.str : undefined))
          .filter(Boolean) as string[];
        const text = strings.join(" ").trim();
        if (text) {
          children.push(
            new Paragraph({
              children: [new TextRun(text)],
            })
          );
        }
        if (i < numPages) children.push(new Paragraph({ children: [new PageBreak()] }));
      }

      const doc = new Document({
        sections: [{ children: children.length ? children : [new Paragraph({ children: [new TextRun("(No text extracted)")] })] }],
      });
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(/\.pdf$/i, "") + ".docx";
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed.");
    } finally {
      setLoading(false);
    }
  }, [file]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select PDF</label>
        <input type="file" accept=".pdf,application/pdf" onChange={handleFile} />
      </div>
      <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
        Extracts text from each page and creates a Word document. Layout and images are not preserved.
      </p>
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={convert}
          disabled={!file || loading}
        >
          {loading ? "Converting…" : "Convert to Word"}
        </button>
      </div>
    </div>
  );
}
