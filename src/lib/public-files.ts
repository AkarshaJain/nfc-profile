import fs from "fs";
import path from "path";

/**
 * Returns true if `publicPath` is an absolute http(s) URL, or a root-relative path
 * that exists under /public on disk (dev/build server).
 */
export function assetIsReachable(publicPath: string): boolean {
  const h = publicPath.trim();
  if (!h) return false;
  if (/^https?:\/\//i.test(h)) return true;
  if (!h.startsWith("/")) return false;
  const rel = h.slice(1);
  if (!rel || rel.includes("..")) return false;
  const full = path.join(process.cwd(), "public", rel);
  try {
    return fs.existsSync(full) && fs.statSync(full).isFile();
  } catch {
    return false;
  }
}
