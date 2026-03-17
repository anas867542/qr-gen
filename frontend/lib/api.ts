import type { GenerateQrBody, DataUrlResponse } from "@/types";

/**
 * Fetches a QR code data URL from the backend.
 */
export async function fetchQrDataUrl(
  apiBase: string,
  body: GenerateQrBody
): Promise<DataUrlResponse> {
  const res = await fetch(`${apiBase}/qr/data-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error((data as { message?: string }).message || res.statusText);
  }

  const data = (await res.json()) as DataUrlResponse;
  if (!data?.dataUrl) throw new Error("Invalid response");
  return data;
}

/**
 * Checks if the backend health endpoint is reachable.
 */
export async function checkApiHealth(apiBase: string): Promise<boolean> {
  try {
    const res = await fetch(`${apiBase}/qr/health`, { method: "GET" });
    return res.ok;
  } catch {
    return false;
  }
}
