"use client";

import { useState, useEffect, useCallback } from "react";
import type { QrContentType } from "@/types";
import { buildPayload } from "@/lib/qrPayload";

const TABS: { type: QrContentType; label: string }[] = [
  { type: "url", label: "URL" },
  { type: "text", label: "Text" },
  { type: "wifi", label: "Wi‑Fi" },
];

export function QrSection() {
  const [contentType, setContentType] = useState<QrContentType>("url");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPass, setWifiPass] = useState("");
  const [wifiSec, setWifiSec] = useState("WPA");
  const [size, setSize] = useState(256);
  const [dark, setDark] = useState("#000000");
  const [light, setLight] = useState("#ffffff");

  const [previewDataUrl, setPreviewDataUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  const getPayload = useCallback(
    () =>
      buildPayload(contentType, {
        url,
        text,
        wifiSsid,
        wifiPass,
        wifiSec,
      }),
    [contentType, url, text, wifiSsid, wifiPass, wifiSec]
  );

  const getOptions = useCallback(
    () => ({
      width: size,
      margin: 2,
      dark,
      light,
      errorCorrectionLevel: "M" as const,
    }),
    [size, dark, light]
  );

  const generate = useCallback(
    async (showErrors: boolean) => {
      setError("");
      const payload = getPayload();
      const opts = getOptions();

      if (!payload) {
        setPreviewDataUrl(null);
        if (showErrors) setError("Enter a URL, text, or Wi‑Fi details first.");
        return;
      }

      try {
        const QRCode = (await import("qrcode")).default;
        const dataUrl = await QRCode.toDataURL(payload, {
          width: opts.width,
          margin: opts.margin,
          color: { dark: opts.dark, light: opts.light },
          errorCorrectionLevel: opts.errorCorrectionLevel,
        });
        setPreviewDataUrl(dataUrl);
      } catch {
        setPreviewDataUrl(null);
        if (showErrors)
          setError("Could not generate QR code. Try shorter text or different colors.");
      }
    },
    [getPayload, getOptions]
  );

  const handleDownload = useCallback(() => {
    if (previewDataUrl) {
      const a = document.createElement("a");
      a.download = "qrcode.png";
      a.href = previewDataUrl;
      a.click();
    }
  }, [previewDataUrl]);

  useEffect(() => {
    const t = setTimeout(() => generate(false), 400);
    return () => clearTimeout(t);
  }, [contentType, url, text, wifiSsid, wifiPass, wifiSec, size, dark, light, generate]);

  return (
    <>
      <div className="panel card-elevated">
        <h2 className="section-heading">Generate your QR code</h2>
        <p className="subtitle">Enter a link or text — preview updates as you type.</p>

        <div className="tabs" role="tablist">
          {TABS.map(({ type, label }) => (
            <button
              key={type}
              type="button"
              className={`tab ${contentType === type ? "active" : ""}`}
              data-type={type}
              role="tab"
              aria-selected={contentType === type}
              onClick={() => setContentType(type)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={`field-block ${contentType !== "url" ? "hidden" : ""}`}>
          <label htmlFor="input-url">Website URL</label>
          <input
            type="url"
            id="input-url"
            placeholder="https://example.com"
            autoComplete="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className={`field-block ${contentType !== "text" ? "hidden" : ""}`}>
          <label htmlFor="input-text">Plain text</label>
          <textarea
            id="input-text"
            rows={3}
            placeholder="Any text you want to encode"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className={`field-block ${contentType !== "wifi" ? "hidden" : ""}`}>
          <div className="wifi-row">
            <div>
              <label htmlFor="wifi-ssid">Network name (SSID)</label>
              <input
                type="text"
                id="wifi-ssid"
                placeholder="MyNetwork"
                autoComplete="off"
                value={wifiSsid}
                onChange={(e) => setWifiSsid(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="wifi-pass">Password</label>
              <input
                type="password"
                id="wifi-pass"
                placeholder="••••••••"
                autoComplete="off"
                value={wifiPass}
                onChange={(e) => setWifiPass(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="wifi-sec" className="mt">
            Security
          </label>
          <select
            id="wifi-sec"
            value={wifiSec}
            onChange={(e) => setWifiSec(e.target.value)}
          >
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">None</option>
          </select>
        </div>

        <div className="options">
          <div className="option-group">
            <label htmlFor="size-range">Size</label>
            <div className="range-wrap">
              <input
                type="range"
                id="size-range"
                min={128}
                max={512}
                value={size}
                step={32}
                onChange={(e) => setSize(Number(e.target.value))}
              />
              <span className="size-label">{size} px</span>
            </div>
          </div>
          <div className="option-group colors">
            <div>
              <label htmlFor="color-dark">Foreground</label>
              <input
                type="color"
                id="color-dark"
                value={dark}
                onChange={(e) => setDark(e.target.value)}
                title="Foreground color"
              />
            </div>
            <div>
              <label htmlFor="color-light">Background</label>
              <input
                type="color"
                id="color-light"
                value={light}
                onChange={(e) => setLight(e.target.value)}
                title="Background color"
              />
            </div>
          </div>
        </div>

        <div className="actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => generate(true)}
          >
            Generate QR code
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            disabled={!previewDataUrl}
            onClick={handleDownload}
          >
            Download PNG
          </button>
        </div>

        {error && <p className="error" role="alert">{error}</p>}
      </div>

      <aside className="preview-card card-elevated">
        <h2 className="preview-title">Preview</h2>
        <div className="preview-box">
          {!previewDataUrl ? (
            <div className="preview-placeholder">
              <span>Your QR code will appear here</span>
            </div>
          ) : (
            <div className="preview-canvas-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewDataUrl}
                alt="Generated QR code"
                className="qr-image"
                width={size}
                height={size}
              />
            </div>
          )}
        </div>
        <p className="hint">Scan with any phone camera to test.</p>
      </aside>
    </>
  );
}
