"use client";

import type { Profile } from "@/lib/profile";
import { getCurrentPageUrl } from "@/lib/client-page-url";
import { getSiteUrlSync } from "@/lib/site-url";
import { downloadVCard } from "@/lib/vcard";

type Props = {
  profile: Profile;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function SaveContactButton({
  profile,
  className = "",
  variant = "primary",
}: Props) {
  const base =
    "tap-target inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles = {
    primary:
      "bg-ink-950 text-white shadow-md hover:bg-ink-800 active:scale-[0.99] dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100",
    secondary:
      "border border-ink-200 bg-white text-ink-900 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-50 dark:hover:bg-ink-800",
    ghost:
      "border border-transparent text-ink-800 hover:bg-ink-100/80 dark:text-ink-100 dark:hover:bg-ink-800/80",
  };

  return (
    <button
      type="button"
      className={`${base} ${styles[variant]} ${className}`}
      onClick={() =>
        downloadVCard(profile, getCurrentPageUrl() || getSiteUrlSync())
      }
    >
      <span aria-hidden>↓</span>
      Save contact
    </button>
  );
}
