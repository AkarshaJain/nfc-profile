import { getSiteUrlSync } from "./site-url";

/**
 * Prefix for files in /public when NEXT_PUBLIC_BASE_PATH is set (GitHub project Pages).
 */
export function publicFilePath(path: string): string {
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}

/** Absolute URL for OG / Twitter / JSON-LD (uses site URL + base path). */
export function absolutePublicUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const site = getSiteUrlSync().replace(/\/$/, "");
  const fp = publicFilePath(path);
  try {
    return new URL(fp, `${site}/`).href;
  } catch {
    return `${site}${fp.startsWith("/") ? fp : `/${fp}`}`;
  }
}
