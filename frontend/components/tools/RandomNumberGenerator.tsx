"use client";

import { useState, useCallback } from "react";

export function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [allowDuplicate, setAllowDuplicate] = useState(true);
  const [result, setResult] = useState<number[]>([]);

  const generate = useCallback(() => {
    const lo = Math.min(min, max);
    const hi = Math.max(min, max);
    const out: number[] = [];
    if (allowDuplicate) {
      for (let i = 0; i < count; i++) {
        out.push(lo + Math.floor(Math.random() * (hi - lo + 1)));
      }
    } else {
      const range = hi - lo + 1;
      const take = Math.min(count, range);
      const pool: number[] = [];
      for (let n = lo; n <= hi; n++) pool.push(n);
      for (let i = 0; i < take; i++) {
        const j = i + Math.floor(Math.random() * (pool.length - i));
        [pool[i], pool[j]] = [pool[j], pool[i]];
        out.push(pool[i]);
      }
    }
    setResult(out);
  }, [min, max, count, allowDuplicate]);

  const copy = useCallback(() => {
    if (result.length === 0) return;
    navigator.clipboard.writeText(result.join("\n"));
  }, [result]);

  return (
    <div className="tool-panel">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div className="field-block">
          <label>Min</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
        </div>
        <div className="field-block">
          <label>Max</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="field-block">
        <label>Count</label>
        <input
          type="number"
          min={1}
          max={1000}
          value={count}
          onChange={(e) => setCount(Math.min(1000, Math.max(1, Number(e.target.value) || 1)))}
        />
      </div>
      <div className="field-block">
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
            checked={allowDuplicate}
            onChange={(e) => setAllowDuplicate(e.target.checked)}
          />
          Allow duplicates
        </label>
      </div>
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button type="button" className="btn btn-primary" onClick={generate}>
          Generate numbers
        </button>
        {result.length > 0 && (
          <button type="button" className="btn btn-ghost" onClick={copy}>
            Copy
          </button>
        )}
      </div>
      {result.length > 0 && (
        <div className="field-block" style={{ marginTop: "1rem" }}>
          <label>Result</label>
          <textarea
            readOnly
            value={result.join("\n")}
            rows={Math.min(15, result.length)}
            className="mono"
            style={{ fontFamily: "monospace" }}
          />
        </div>
      )}
    </div>
  );
}
