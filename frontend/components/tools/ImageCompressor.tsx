"use client";

import { useState, useCallback, useRef } from "react";

const MAX_DIM = 4096;
const DEFAULT_QUALITY = 0.8;

export function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(DEFAULT_QUALITY);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const compress = useCallback(() => {
    if (!file) {
      setError("Select an image first");
      return;
    }
    setError("");
    setLoading(true);
    setResultUrl(null);
    setResultSize(null);

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      if (w > maxWidth || h > maxWidth) {
        if (w > h) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        } else {
          w = Math.round((w * maxWidth) / h);
          h = maxWidth;
        }
      }
      w = Math.min(w, MAX_DIM);
      h = Math.min(h, MAX_DIM);

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setError("Canvas not supported");
        setLoading(false);
        return;
      }
      ctx.drawImage(img, 0, 0, w, h);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            setError("Compression failed");
            setLoading(false);
            return;
          }
          const url = URL.createObjectURL(blob);
          setResultUrl(url);
          setResultSize(blob.size);
          setLoading(false);
        },
        "image/jpeg",
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setError("Failed to load image");
      setLoading(false);
    };
    img.src = objectUrl;
  }, [file, quality, maxWidth]);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file (JPEG, PNG, WebP)");
      return;
    }
    setFile(f);
    setError("");
    setResultUrl(null);
    setResultSize(null);
  }, []);

  const download = useCallback(() => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = file ? `compressed-${file.name.replace(/\.[^.]+$/, "")}.jpg` : "compressed.jpg";
    a.click();
  }, [resultUrl, file]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select image</label>
        <input type="file" accept="image/*" onChange={handleFile} />
      </div>
      {file && (
        <>
          <div className="field-block">
            <label>Max width (px): {maxWidth}</label>
            <input
              type="range"
              min={320}
              max={4096}
              step={160}
              value={maxWidth}
              onChange={(e) => setMaxWidth(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
          </div>
          <div className="field-block">
            <label>JPEG quality: {Math.round(quality * 100)}%</label>
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
        </>
      )}
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={compress}
          disabled={!file || loading}
        >
          {loading ? "Compressing…" : "Compress image"}
        </button>
      </div>
      {resultUrl && resultSize !== null && (
        <div className="field-block" style={{ marginTop: "1.5rem" }}>
          <label>Result ({(resultSize / 1024).toFixed(1)} KB)</label>
          <div style={{ marginTop: "0.5rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resultUrl}
              alt="Compressed"
              style={{ maxWidth: "100%", borderRadius: "var(--radius-sm)" }}
            />
          </div>
          <button
            type="button"
            className="btn btn-ghost"
            style={{ marginTop: "0.75rem" }}
            onClick={download}
          >
            Download compressed image
          </button>
        </div>
      )}
    </div>
  );
}
