/**
 * Site branding and defaults for snapptools.net
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://snapptools.net)
 */
export const SITE_NAME = "Snapptools";
export const SITE_TAGLINE = "Free QR Code Generator & Online Tools";
export const DEFAULT_BASE_URL = "https://snapptools.net";

export function getBaseUrl(): string {
  const url =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
    (typeof process !== "undefined" && process.env.VERCEL_URL) ||
    DEFAULT_BASE_URL;
  if (typeof url === "string" && url.startsWith("http")) return url.replace(/\/$/, "");
  return `https://${url}`;
}
