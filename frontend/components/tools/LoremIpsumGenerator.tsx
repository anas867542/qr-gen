"use client";

import { useState, useCallback } from "react";

const LOREM_WORDS =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(
    " "
  );

function randomWord(): string {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function sentence(min: number, max: number): string {
  const n = min + Math.floor(Math.random() * (max - min + 1));
  const words: string[] = [];
  for (let i = 0; i < n; i++) words.push(randomWord());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function paragraph(sentences: number): string {
  const s: string[] = [];
  for (let i = 0; i < sentences; i++) s.push(sentence(5, 15));
  return s.join(" ");
}

export function LoremIpsumGenerator() {
  const [mode, setMode] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");

  const generate = useCallback(() => {
    if (mode === "words") {
      const words: string[] = [];
      for (let i = 0; i < count; i++) words.push(randomWord());
      setOutput(words.join(" "));
    } else if (mode === "sentences") {
      const s: string[] = [];
      for (let i = 0; i < count; i++) s.push(sentence(5, 15));
      setOutput(s.join(" "));
    } else {
      const p: string[] = [];
      for (let i = 0; i < count; i++) p.push(paragraph(3 + Math.floor(Math.random() * 4)));
      setOutput(p.join("\n\n"));
    }
  }, [mode, count]);

  const copy = useCallback(() => {
    if (!output) return;
    navigator.clipboard.writeText(output);
  }, [output]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Generate</label>
        <select value={mode} onChange={(e) => setMode(e.target.value as typeof mode)}>
          <option value="paragraphs">Paragraphs</option>
          <option value="sentences">Sentences</option>
          <option value="words">Words</option>
        </select>
      </div>
      <div className="field-block">
        <label>Count</label>
        <input
          type="number"
          min={1}
          max={mode === "paragraphs" ? 20 : 50}
          value={count}
          onChange={(e) =>
            setCount(
              Math.min(mode === "paragraphs" ? 20 : 50, Math.max(1, Number(e.target.value) || 1))
            )
          }
        />
      </div>
      <div className="actions" style={{ marginTop: "1rem" }}>
        <button type="button" className="btn btn-primary" onClick={generate}>
          Generate
        </button>
        {output && (
          <button type="button" className="btn btn-ghost" onClick={copy}>
            Copy
          </button>
        )}
      </div>
      {output && (
        <div className="field-block" style={{ marginTop: "1rem" }}>
          <label>Output</label>
          <textarea
            readOnly
            value={output}
            rows={12}
            style={{ fontFamily: "inherit", whiteSpace: "pre-wrap" }}
          />
        </div>
      )}
    </div>
  );
}
