"use client";

import Script from "next/script";

const CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

/**
 * Renders a Google AdSense ad unit. Set NEXT_PUBLIC_ADSENSE_CLIENT_ID (e.g. ca-pub-xxxxxxxx)
 * and optionally NEXT_PUBLIC_ADSENSE_SLOT_ID in .env to enable. If unset, nothing is shown.
 */
export function AdSlot() {
  if (!CLIENT_ID) return null;

  return (
    <>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT_ID}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      {SLOT_ID ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center", minHeight: "90px" }}
          data-ad-client={CLIENT_ID}
          data-ad-slot={SLOT_ID}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div
          className="ad-placeholder"
          style={{
            minHeight: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--surface2)",
            borderRadius: "var(--radius-sm)",
            border: "1px dashed var(--border)",
            color: "var(--muted)",
            fontSize: "0.8rem",
          }}
          aria-hidden
        >
          Ad slot (set NEXT_PUBLIC_ADSENSE_SLOT_ID)
        </div>
      )}
    </>
  );
}
