"use client";

import { useState, useCallback } from "react";

export function UrlEncoder() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const run = useCallback(() => {
    setError("");
    if (!input) {
      setOutput("");
      return;
    }
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (e) {
      setError("Invalid URL-encoded string");
      setOutput("");
    }
  }, [input, mode]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Mode</label>
        <select value={mode} onChange={(e) => setMode(e.target.value as "encode" | "decode")}>
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
      </div>
      <div className="field-block">
        <label>{mode === "encode" ? "Text to encode" : "URL-encoded string"}</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text..." : "Paste encoded string..."}
          rows={6}
          style={{ fontFamily: "monospace" }}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="button" className="btn btn-primary" onClick={run}>
        {mode === "encode" ? "Encode" : "Decode"}
      </button>
      {output && (
        <div className="field-block" style={{ marginTop: "1rem" }}>
          <label>Result</label>
          <textarea readOnly value={output} rows={6} style={{ fontFamily: "monospace" }} />
        </div>
      )}
    </div>
  );
}
