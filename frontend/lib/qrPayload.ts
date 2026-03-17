import type { QrContentType } from "@/types";

function escapeWifi(s: string): string {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

/**
 * Builds the payload string for QR encoding from the given type and field values.
 */
export function buildPayload(
  type: QrContentType,
  fields: {
    url: string;
    text: string;
    wifiSsid: string;
    wifiPass: string;
    wifiSec: string;
  }
): string {
  if (type === "url") {
    let url = fields.url.trim();
    if (!url) return "";
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    return url;
  }

  if (type === "text") {
    return fields.text.trim();
  }

  if (type === "wifi") {
    const ssid = fields.wifiSsid.trim();
    if (!ssid) return "";
    const pass = fields.wifiPass;
    const sec = fields.wifiSec;
    const p = sec === "nopass" ? "" : pass;
    return `WIFI:T:${sec};S:${escapeWifi(ssid)};P:${escapeWifi(p)};;`;
  }

  return "";
}
