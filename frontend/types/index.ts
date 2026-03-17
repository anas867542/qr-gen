export type QrContentType = "url" | "text" | "wifi";

export interface QrOptions {
  width: number;
  margin: number;
  dark: string;
  light: string;
  errorCorrectionLevel: "L" | "M" | "Q" | "H";
}

export interface GenerateQrBody {
  text: string;
  width?: number;
  margin?: number;
  dark?: string;
  light?: string;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
}

export interface DataUrlResponse {
  dataUrl: string;
  mimeType: string;
}
