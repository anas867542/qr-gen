"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectClient({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [to, router]);
  return (
    <div className="wrap" style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <p style={{ color: "var(--muted)" }}>Redirecting…</p>
    </div>
  );
}
