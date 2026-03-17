"use client";

import { useState, useCallback } from "react";

export function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = useCallback(() => {
    setError("");
    const raw = input.trim();
    if (!raw) {
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  }, [input]);

  const minify = useCallback(() => {
    setError("");
    const raw = input.trim();
    if (!raw) {
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      setOutput(JSON.stringify(parsed));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  }, [input]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>JSON input</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"key": "value"}'
          rows={10}
          className="mono"
          style={{ fontFamily: "monospace", fontSize: "0.9rem" }}
        />
      </div>
      {error && <p className="error" style={{ marginBottom: "1rem" }}>{error}</p>}
      <div className="actions">
        <button type="button" className="btn btn-primary" onClick={format}>
          Format / Beautify
        </button>
        <button type="button" className="btn btn-ghost" onClick={minify}>
          Minify
        </button>
      </div>
      {output && (
        <div className="field-block" style={{ marginTop: "1rem" }}>
          <label>Output</label>
          <textarea
            readOnly
            value={output}
            rows={12}
            className="mono"
            style={{ fontFamily: "monospace", fontSize: "0.9rem" }}
          />
        </div>
      )}
    </div>
  );
}
