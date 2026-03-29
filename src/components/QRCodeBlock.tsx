"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { getCurrentPageUrl } from "@/lib/client-page-url";

type Props = {
  label?: string;
};

/**
 * Encodes the URL of the page as opened in the browser so QR updates per deployment
 * without rebuilding with a new env var.
 */
export function QRCodeBlock({ label = "Scan to open this profile" }: Props) {
  const [pageUrl, setPageUrl] = useState("");
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setPageUrl(getCurrentPageUrl());
  }, []);

  useEffect(() => {
    if (!pageUrl) return;
    let cancelled = false;
    setErr(null);
    setDataUrl(null);
    QRCode.toDataURL(pageUrl, {
      width: 200,
      margin: 2,
      color: { dark: "#0f172a", light: "#ffffff" },
    })
      .then((d) => {
        if (!cancelled) setDataUrl(d);
      })
      .catch(() => {
        if (!cancelled) setErr("Could not generate QR code.");
      });
    return () => {
      cancelled = true;
    };
  }, [pageUrl]);

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-ink-200/80 bg-white/60 p-6 text-center dark:border-ink-700/80 dark:bg-ink-900/40">
      <p className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
        {label}
      </p>
      {err && <p className="text-sm text-red-600 dark:text-red-400">{err}</p>}
      {!err && !dataUrl && (
        <div
          className="h-[200px] w-[200px] animate-pulse rounded-xl bg-ink-200/60 dark:bg-ink-700/60"
          aria-hidden
        />
      )}
      {dataUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={dataUrl}
          width={200}
          height={200}
          alt={pageUrl ? `QR code linking to ${pageUrl}` : "QR code"}
          className="rounded-xl border border-ink-100 bg-white p-2 shadow-inner dark:border-ink-700"
        />
      )}
      {pageUrl && (
        <p className="max-w-[240px] break-all font-mono text-[10px] leading-relaxed text-ink-400 dark:text-ink-500">
          {pageUrl}
        </p>
      )}
    </div>
  );
}
