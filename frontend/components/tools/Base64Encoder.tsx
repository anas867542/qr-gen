"use client";

import { useState, useCallback } from "react";

export function Base64Encoder() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const run = useCallback(() => {
    setError("");
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input.trim()))));
      }
    } catch (e) {
      setError(mode === "decode" ? "Invalid Base64 string" : "Encoding failed");
      setOutput("");
    }
  }, [input, mode]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Mode</label>
        <select value={mode} onChange={(e) => setMode(e.target.value as "encode" | "decode")}>
          <option value="encode">Encode to Base64</option>
          <option value="decode">Decode from Base64</option>
        </select>
      </div>
      <div className="field-block">
        <label>{mode === "encode" ? "Text to encode" : "Base64 to decode"}</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text..." : "Paste Base64..."}
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
          <textarea
            readOnly
            value={output}
            rows={6}
            style={{ fontFamily: "monospace" }}
          />
        </div>
      )}
    </div>
  );
}
