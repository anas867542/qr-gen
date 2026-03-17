"use client";

import { useState, useCallback } from "react";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUM = "0123456789";
const SYMB = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function shuffle(str: string): string {
  const a = str.split("");
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.join("");
}

export function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useNum, setUseNum] = useState(true);
  const [useSymbol, setUseSymbol] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let charset = LOWER;
    if (useUpper) charset += UPPER;
    if (useNum) charset += NUM;
    if (useSymbol) charset += SYMB;
    if (charset.length === 0) charset = LOWER;
    let result = "";
    const arr = charset.split("");
    for (let i = 0; i < length; i++) {
      result += arr[Math.floor(Math.random() * arr.length)];
    }
    setPassword(shuffle(result));
    setCopied(false);
  }, [length, useUpper, useNum, useSymbol]);

  const copy = useCallback(() => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Length: {length}</label>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="range-wrap"
          style={{ width: "100%", accentColor: "var(--accent)" }}
        />
      </div>
      <div className="field-block" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
          Uppercase
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input type="checkbox" checked={useNum} onChange={(e) => setUseNum(e.target.checked)} />
          Numbers
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input type="checkbox" checked={useSymbol} onChange={(e) => setUseSymbol(e.target.checked)} />
          Symbols
        </label>
      </div>
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button type="button" className="btn btn-primary" onClick={generate}>
          Generate password
        </button>
        {password && (
          <button type="button" className="btn btn-ghost" onClick={copy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>
      {password && (
        <div className="field-block" style={{ marginTop: "1rem" }}>
          <label>Generated password</label>
          <input
            type="text"
            readOnly
            value={password}
            className="mono"
            style={{ fontFamily: "monospace", fontSize: "1rem" }}
          />
        </div>
      )}
    </div>
  );
}
