"use client";

import { useState, useCallback } from "react";

export function ImageToBase64() {
  const [file, setFile] = useState<File | null>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }
    setError("");
    setDataUrl(null);
    setFile(f);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      setDataUrl(typeof result === "string" ? result : null);
    };
    reader.onerror = () => setError("Failed to read file");
    reader.readAsDataURL(f);
  }, []);

  const copy = useCallback(() => {
    if (!dataUrl) return;
    navigator.clipboard.writeText(dataUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [dataUrl]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select image</label>
        <input type="file" accept="image/*" onChange={handleFile} />
      </div>
      {error && <p className="error">{error}</p>}
      {file && dataUrl && (
        <>
          <div className="field-block" style={{ marginTop: "1rem" }}>
            <label>Preview</label>
            <div style={{ marginTop: "0.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dataUrl}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "var(--radius-sm)" }}
              />
            </div>
          </div>
          <div className="field-block" style={{ marginTop: "1rem" }}>
            <label>Base64 data URL (use in img src or CSS)</label>
            <textarea
              readOnly
              value={dataUrl}
              rows={6}
              className="mono"
              style={{ fontSize: "0.8rem", wordBreak: "break-all" }}
            />
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "0.5rem" }}
              onClick={copy}
            >
              {copied ? "Copied!" : "Copy Base64"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
