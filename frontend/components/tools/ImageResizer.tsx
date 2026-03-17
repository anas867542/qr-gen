"use client";

import { useState, useCallback, useRef } from "react";

type ResizeMode = "percent" | "width" | "custom";

export function ImageResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<ResizeMode>("width");
  const [percent, setPercent] = useState(50);
  const [maxWidth, setMaxWidth] = useState(800);
  const [customW, setCustomW] = useState(800);
  const [customH, setCustomH] = useState(600);
  const [keepAspect, setKeepAspect] = useState(true);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const origSizeRef = useRef<{ w: number; h: number } | null>(null);

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
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      origSizeRef.current = { w, h };

      if (mode === "percent") {
        w = Math.round((w * percent) / 100);
        h = Math.round((h * percent) / 100);
      } else if (mode === "width") {
        if (w > maxWidth) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        }
      } else {
        w = customW;
        h = keepAspect && origSizeRef.current
          ? Math.round((origSizeRef.current.h * customW) / origSizeRef.current.w)
          : customH;
      }

      w = Math.max(1, Math.min(w, 8192));
      h = Math.max(1, Math.min(h, 8192));

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
            setError("Resize failed");
            setLoading(false);
            return;
          }
          setResultUrl(URL.createObjectURL(blob));
          setLoading(false);
        },
        "image/png"
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setError("Failed to load image");
      setLoading(false);
    };
    img.src = objectUrl;
  }, [file, mode, percent, maxWidth, customW, customH, keepAspect]);

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
    origSizeRef.current = null;
  }, []);

  const download = useCallback(() => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = file ? "resized-" + file.name : "resized.png";
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
            <label>Resize by</label>
            <select value={mode} onChange={(e) => setMode(e.target.value as ResizeMode)}>
              <option value="percent">Percentage</option>
              <option value="width">Max width (keep ratio)</option>
              <option value="custom">Custom dimensions</option>
            </select>
          </div>
          {mode === "percent" && (
            <div className="field-block">
              <label>Scale: {percent}%</label>
              <input
                type="range"
                min={1}
                max={100}
                value={percent}
                onChange={(e) => setPercent(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent)" }}
              />
            </div>
          )}
          {mode === "width" && (
            <div className="field-block">
              <label>Max width (px)</label>
              <input
                type="number"
                min={1}
                max={8192}
                value={maxWidth}
                onChange={(e) => setMaxWidth(Number(e.target.value))}
              />
            </div>
          )}
          {mode === "custom" && (
            <>
              <div className="field-block">
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={keepAspect}
                    onChange={(e) => setKeepAspect(e.target.checked)}
                  />
                  Keep aspect ratio (height auto from width)
                </label>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="field-block">
                  <label>Width (px)</label>
                  <input
                    type="number"
                    min={1}
                    max={8192}
                    value={customW}
                    onChange={(e) => setCustomW(Number(e.target.value))}
                  />
                </div>
                <div className="field-block">
                  <label>Height (px)</label>
                  <input
                    type="number"
                    min={1}
                    max={8192}
                    value={customH}
                    onChange={(e) => setCustomH(Number(e.target.value))}
                    disabled={keepAspect}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
      {error && <p className="error">{error}</p>}
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={convert}
          disabled={!file || loading}
        >
          {loading ? "Resizing…" : "Resize image"}
        </button>
      </div>
      {resultUrl && (
        <div className="field-block" style={{ marginTop: "1.5rem" }}>
          <label>Result</label>
          <div style={{ marginTop: "0.5rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resultUrl}
              alt="Resized"
              style={{ maxWidth: "100%", borderRadius: "var(--radius-sm)" }}
            />
          </div>
          <button type="button" className="btn btn-ghost" style={{ marginTop: "0.75rem" }} onClick={download}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}
