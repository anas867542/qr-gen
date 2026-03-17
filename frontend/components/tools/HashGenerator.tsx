"use client";

import { useState, useCallback } from "react";

async function sha256(text: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sha1(text: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-1", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sha384(text: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-384", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sha512(text: string): Promise<string> {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-512", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function md5(text: string): Promise<string> {
  const CryptoJS = await import("crypto-js");
  return CryptoJS.MD5(text).toString();
}

type Algo = "md5" | "sha1" | "sha256" | "sha384" | "sha512";

const ALGOS: { id: Algo; label: string }[] = [
  { id: "md5", label: "MD5" },
  { id: "sha1", label: "SHA-1" },
  { id: "sha256", label: "SHA-256" },
  { id: "sha384", label: "SHA-384" },
  { id: "sha512", label: "SHA-512" },
];

export function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<Algo, string>>({
    md5: "",
    sha1: "",
    sha256: "",
    sha384: "",
    sha512: "",
  });
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async () => {
    if (!input) {
      setHashes({ md5: "", sha1: "", sha256: "", sha384: "", sha512: "" });
      return;
    }
    setLoading(true);
    try {
      const [hMd5, hSha1, hSha256, hSha384, hSha512] = await Promise.all([
        md5(input),
        sha1(input),
        sha256(input),
        sha384(input),
        sha512(input),
      ]);
      setHashes({
        md5: hMd5,
        sha1: hSha1,
        sha256: hSha256,
        sha384: hSha384,
        sha512: hSha512,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [input]);

  const copy = useCallback((hash: string) => {
    if (hash) navigator.clipboard.writeText(hash);
  }, []);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Input text</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
          rows={6}
          style={{ fontFamily: "monospace" }}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={generate}
        disabled={loading}
      >
        {loading ? "Computing…" : "Generate hashes"}
      </button>
      <div style={{ marginTop: "1.5rem" }}>
        {ALGOS.map(({ id, label }) => (
          <div
            key={id}
            className="field-block"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <label style={{ minWidth: "80px", fontSize: "0.9rem" }}>{label}</label>
            <input
              readOnly
              value={hashes[id]}
              className="mono"
              style={{
                flex: 1,
                minWidth: "200px",
                fontFamily: "monospace",
                fontSize: "0.85rem",
              }}
            />
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => copy(hashes[id])}
              disabled={!hashes[id]}
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
