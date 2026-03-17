"use client";

import { useState, useCallback } from "react";

function uuidv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function UuidGenerator() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    const list: string[] = [];
    for (let i = 0; i < count; i++) list.push(uuidv4());
    setUuids(list);
    setCopied(false);
  }, [count]);

  const copy = useCallback(() => {
    if (uuids.length === 0) return;
    navigator.clipboard.writeText(uuids.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [uuids]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Number of UUIDs</label>
        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={(e) => setCount(Math.min(100, Math.max(1, Number(e.target.value) || 1)))}
        />
      </div>
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button type="button" className="btn btn-primary" onClick={generate}>
          Generate UUIDs
        </button>
        {uuids.length > 0 && (
          <button type="button" className="btn btn-ghost" onClick={copy}>
            {copied ? "Copied!" : "Copy all"}
          </button>
        )}
      </div>
      {uuids.length > 0 && (
        <div className="field-block" style={{ marginTop: "1rem" }}>
          <label>Generated UUIDs</label>
          <textarea
            readOnly
            value={uuids.join("\n")}
            rows={Math.min(10, uuids.length)}
            className="mono"
            style={{ fontFamily: "monospace", fontSize: "0.9rem" }}
          />
        </div>
      )}
    </div>
  );
}
