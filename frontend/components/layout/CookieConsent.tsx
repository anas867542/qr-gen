"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="cookie-banner"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 1.25rem",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text)", flex: "1 1 280px" }}>
        We use cookies for analytics and advertising (e.g. Google AdSense) to keep the site free.{" "}
        <Link href="/privacy" style={{ color: "var(--accent)", textDecoration: "underline" }}>
          Privacy policy
        </Link>
      </p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={accept}
          style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
