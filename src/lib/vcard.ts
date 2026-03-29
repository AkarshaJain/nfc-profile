import type { Profile } from "./profile";

function esc(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0] ?? "", last: "" };
  const last = parts.pop() ?? "";
  return { first: parts.join(" "), last };
}

export function buildVCard(p: Profile, profilePageUrl: string): string {
  const { first, last } = splitName(p.fullName);
  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${esc(p.fullName)}`,
    `N:${esc(last)};${esc(first)};;;`,
  ];
  if (p.headline) lines.push(`TITLE:${esc(p.headline)}`);
  const tel = p.phone.replace(/\s/g, "");
  if (tel) lines.push(`TEL;TYPE=CELL:${esc(tel)}`);
  if (p.email.trim()) lines.push(`EMAIL;TYPE=INTERNET:${esc(p.email.trim())}`);
  lines.push(`URL:${esc(profilePageUrl)}`);
  if (p.linkedin) lines.push(`URL;type=LinkedIn:${esc(p.linkedin)}`);
  if (p.github) lines.push(`URL;type=GitHub:${esc(p.github)}`);
  if (p.portfolio) lines.push(`URL;type=Portfolio:${esc(p.portfolio)}`);
  const resolve = (href: string): string | null => {
    const h = href.trim();
    if (!h) return null;
    if (h.startsWith("http")) return h;
    try {
      return new URL(h, profilePageUrl).href;
    } catch {
      return h;
    }
  };
  const resume = resolve(p.resumeUrl);
  if (resume) lines.push(`URL:${esc(resume)}`);
  const noteBits = [
    p.bioLead,
    ...p.bioParagraphs,
    p.location ? `Location: ${p.location}.` : "",
  ].filter(Boolean);
  if (noteBits.length) lines.push(`NOTE:${esc(noteBits.join(" "))}`);
  lines.push("END:VCARD");
  return lines.join("\r\n");
}

export function downloadVCard(p: Profile, profilePageUrl: string) {
  const blob = new Blob([buildVCard(p, profilePageUrl)], {
    type: "text/vcard;charset=utf-8",
  });
  const a = document.createElement("a");
  const safe = p.fullName.replace(/\s+/g, "_");
  a.href = URL.createObjectURL(blob);
  a.download = `${safe}.vcf`;
  a.click();
  URL.revokeObjectURL(a.href);
}
