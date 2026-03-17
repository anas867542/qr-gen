declare module "crypto-js" {
  export function MD5(message: string): { toString(): string };
  export function SHA1(message: string): { toString(): string };
  export function SHA256(message: string): { toString(): string };
  export function SHA384(message: string): { toString(): string };
  export function SHA512(message: string): { toString(): string };
}
