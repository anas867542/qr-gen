/**
 * Site branding and defaults for snapptools.net
 * Set NEXT_PUBLIC_SITE_URL and NEXT_PUBLIC_CONTACT_EMAIL in production.
 */
export const SITE_NAME = "Snapptools";
export const SITE_TAGLINE = "Free QR Code Generator & Online Tools";
export const DEFAULT_BASE_URL = "https://snapptools.net";
export const DEFAULT_CONTACT_EMAIL = "snapptools138@gmail.com";

export function getContactEmail(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_CONTACT_EMAIL) {
    return process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  }
  return DEFAULT_CONTACT_EMAIL;
}

export function getBaseUrl(): string {
  const url =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
    (typeof process !== "undefined" && process.env.VERCEL_URL) ||
    DEFAULT_BASE_URL;
  if (typeof url === "string" && url.startsWith("http")) return url.replace(/\/$/, "");
  return `https://${url}`;
}
