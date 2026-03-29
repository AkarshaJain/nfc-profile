/** Current page URL without hash/query — use only from client components. */
export function getCurrentPageUrl(): string {
  if (typeof window === "undefined") return "";
  return window.location.href.split(/[?#]/)[0];
}
