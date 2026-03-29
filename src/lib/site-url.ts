/**
 * Canonical site URL for builds (OG, JSON-LD, local dev).
 * Set NEXT_PUBLIC_SITE_URL in CI (e.g. https://akarshajain.github.io/your-repo).
 * QR + vCard “open this page” URLs are taken from the browser at runtime so they
 * always match the deployment you’re viewing.
 */
export function getSiteUrlSync(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return env || "http://localhost:3000";
}
