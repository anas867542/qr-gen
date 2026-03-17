"use client";

import { useState, useCallback, useRef } from "react";
import mammoth from "mammoth";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export function WordToPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      return;
    }
    const ok =
      f.name.endsWith(".docx") ||
      f.name.endsWith(".doc") ||
      f.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (!ok) {
      setError("Please select a Word (.docx) file.");
      setFile(null);
      return;
    }
    setFile(f);
    setError("");
  }, []);

  const convert = useCallback(async () => {
    if (!file || !contentRef.current) {
      setError("Select a Word file first.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      contentRef.current.innerHTML = result.value;
      contentRef.current.style.width = "210mm";
      contentRef.current.style.padding = "20mm";
      contentRef.current.style.background = "white";
      contentRef.current.style.color = "black";
      contentRef.current.style.fontFamily = "Georgia, serif";
      contentRef.current.style.fontSize = "12pt";
      contentRef.current.style.lineHeight = "1.5";

      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const contentW = pageW - 2 * margin;
      let contentH = (canvas.height * contentW) / canvas.width;
      let heightLeft = contentH;
      let position = margin;

      pdf.addImage(imgData, "JPEG", margin, position, contentW, contentH);
      heightLeft -= pageH;

      while (heightLeft > 0) {
        position = heightLeft - contentH + margin;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", margin, position, contentW, contentH);
        heightLeft -= pageH;
      }

      pdf.save(file.name.replace(/\.(docx?|doc)$/i, "") + ".pdf");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Conversion failed.");
    } finally {
      setLoading(false);
    }
  }, [file]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select Word document (.docx)</label>
        <input
          type="file"
          accept=".docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFile}
        />
      </div>
      <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
        Converts your Word file to PDF by rendering the content in the browser. Complex formatting may vary.
      </p>
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: "210mm",
          minHeight: "297mm",
        }}
      />
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={convert}
          disabled={!file || loading}
        >
          {loading ? "Converting…" : "Convert to PDF"}
        </button>
      </div>
    </div>
  );
}
