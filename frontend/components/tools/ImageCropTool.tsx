"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export function ImageCropTool() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, w: 200, h: 200 });
  const [cropSize, setCropSize] = useState({ w: 200, h: 200 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setResultUrl(null);
    setCrop((prev) => ({ ...prev, x: 0, y: 0, w: cropSize.w, h: cropSize.h }));
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }
    setFile(f);
    setError("");
  }, []);

  const cropImage = useCallback(() => {
    if (!imageUrl || !imgRef.current) return;
    const img = imgRef.current;
    const { naturalWidth, naturalHeight } = img;
    const scaleX = naturalWidth / img.offsetWidth;
    const scaleY = naturalHeight / img.offsetHeight;
    const x = Math.round(crop.x * scaleX);
    const y = Math.round(crop.y * scaleY);
    const w = Math.round(crop.w * scaleX);
    const h = Math.round(crop.h * scaleY);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
    setResultUrl(canvas.toDataURL("image/png"));
  }, [imageUrl, crop]);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      setDragging(true);
      setStart({ x: e.clientX - crop.x, y: e.clientY - crop.y });
    },
    [crop]
  );
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging || !imgRef.current) return;
      const maxX = Math.max(0, imgRef.current.offsetWidth - crop.w);
      const maxY = Math.max(0, imgRef.current.offsetHeight - crop.h);
      setCrop((prev) => ({
        ...prev,
        x: Math.min(maxX, Math.max(0, e.clientX - start.x)),
        y: Math.min(maxY, Math.max(0, e.clientY - start.y)),
      }));
    },
    [dragging, start, crop.w, crop.h]
  );
  const onMouseUp = useCallback(() => setDragging(false), []);

  const download = useCallback(() => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = file ? "cropped-" + file.name.replace(/\.[^.]+$/, "") + ".png" : "cropped.png";
    a.click();
  }, [resultUrl, file]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Select image</label>
        <input type="file" accept="image/*" onChange={handleFile} />
      </div>
      {error && <p className="error">{error}</p>}
      {imageUrl && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div className="field-block">
              <label>Crop width (px)</label>
              <input
                type="number"
                min={10}
                max={2000}
                value={cropSize.w}
                onChange={(e) => {
                  const w = Math.max(10, Number(e.target.value) || 200);
                  setCropSize((s) => ({ ...s, w }));
                  setCrop((c) => ({ ...c, w }));
                }}
              />
            </div>
            <div className="field-block">
              <label>Crop height (px)</label>
              <input
                type="number"
                min={10}
                max={2000}
                value={cropSize.h}
                onChange={(e) => {
                  const h = Math.max(10, Number(e.target.value) || 200);
                  setCropSize((s) => ({ ...s, h }));
                  setCrop((c) => ({ ...c, h }));
                }}
              />
            </div>
          </div>
          <div className="field-block">
            <label>Drag the crop area, then click Crop</label>
            <div
              ref={containerRef}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              style={{
                position: "relative",
                display: "inline-block",
                maxWidth: "100%",
                cursor: dragging ? "grabbing" : "grab",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={imageUrl}
                alt="Crop source"
                draggable={false}
                style={{ display: "block", maxWidth: "100%", maxHeight: "400px" }}
              />
              <div
                onMouseDown={onMouseDown}
                style={{
                  position: "absolute",
                  left: crop.x,
                  top: crop.y,
                  width: crop.w,
                  height: crop.h,
                  border: "2px solid var(--accent)",
                  boxSizing: "border-box",
                  pointerEvents: "auto",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button type="button" className="btn btn-primary" onClick={cropImage}>
              Crop image
            </button>
          </div>
        </>
      )}
      {resultUrl && (
        <div className="field-block" style={{ marginTop: "1.5rem" }}>
          <label>Cropped result</label>
          <div style={{ marginTop: "0.5rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resultUrl}
              alt="Cropped"
              style={{ maxWidth: "100%", borderRadius: "var(--radius-sm)" }}
            />
          </div>
          <button type="button" className="btn btn-ghost" style={{ marginTop: "0.75rem" }} onClick={download}>
            Download cropped image
          </button>
        </div>
      )}
    </div>
  );
}
