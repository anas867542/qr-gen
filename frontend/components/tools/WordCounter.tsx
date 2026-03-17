"use client";

import { useState, useMemo } from "react";

function countWords(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}

function countSentences(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  const matches = t.match(/[.!?]+/g);
  return matches ? matches.length : 0;
}

function countParagraphs(text: string): number {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\n\s*\n/).filter((p) => p.trim()).length;
}

export function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    return {
      words: countWords(text),
      characters: chars,
      charactersNoSpaces: charsNoSpaces,
      sentences: countSentences(text),
      paragraphs: countParagraphs(text),
    };
  }, [text]);

  return (
    <div className="tool-panel">
      <div className="field-block">
        <label>Paste your text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here..."
          rows={12}
          style={{ fontFamily: "inherit" }}
        />
      </div>
      <div
        className="tool-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
          padding: "1rem",
          background: "var(--bg-elevated)",
          borderRadius: "var(--radius-sm)",
        }}
      >
        <div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stats.words}</div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Words</div>
        </div>
        <div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stats.characters}</div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Characters</div>
        </div>
        <div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stats.charactersNoSpaces}</div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>No spaces</div>
        </div>
        <div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stats.sentences}</div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Sentences</div>
        </div>
        <div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{stats.paragraphs}</div>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Paragraphs</div>
        </div>
      </div>
    </div>
  );
}
