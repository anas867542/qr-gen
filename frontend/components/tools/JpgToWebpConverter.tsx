"use client";

import { useState, useCallback } from "react";

const DEFAULT_QUALITY = 0.85;

export function JpgToWebpConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(DEFAULT_QUALITY);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convert = useCallback(() => {
    if (!file) {
      setError("Select an image first");
      return;
    }
    setError("");
    setLoading(true);
    setResultUrl(null);
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setError("Canvas not supported");
        setLoading(false);
        return;
      }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError("Conversion failed (WebP may not be supported in this browser)");
            setLoading(false);
            return;
          }
          setResultUrl(URL.createObjectURL(blob));
          setLoading(false);
        },
        "image/webp",
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setError("Failed to load image");
      setLoading(false);
    };
    img.src = objectUrl;
  }, [file, quality]);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }
    setFile(f);
    setError("");
    setResultUrl(null);
  }, []);

  const download = useCallback(() => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = file ? file.name.replace(/\.[^.]+$/, "") + ".webp" : "converted.webp";
    a.click();
  }, [resultUrl, file]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select JPG/PNG (or any image)</label>
        <input type="file" accept="image/*" onChange={handleFile} />
      </div>
      {file && (
        <div className="field-block">
          <label>WebP quality: {Math.round(quality * 100)}%</label>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--accent)" }}
          />
        </div>
      )}
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={convert}
          disabled={!file || loading}
        >
          {loading ? "Converting…" : "Convert to WebP"}
        </button>
      </div>
      {resultUrl && (
        <div className="field-block" style={{ marginTop: "1.5rem" }}>
          <label>Result</label>
          <div style={{ marginTop: "0.5rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resultUrl}
              alt="Converted WebP"
              style={{ maxWidth: "100%", borderRadius: "var(--radius-sm)" }}
            />
          </div>
          <button type="button" className="btn btn-ghost" style={{ marginTop: "0.75rem" }} onClick={download}>
            Download WebP
          </button>
        </div>
      )}
    </div>
  );
}
