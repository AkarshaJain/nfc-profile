"use client";

import type { Profile } from "@/lib/profile";

export function StickyActions({ profile }: { profile: Profile }) {
  const tel = profile.phone.replace(/\s/g, "");
  const hasPhone = Boolean(profile.phone.trim() && tel);
  const hasEmail = Boolean(profile.email.trim());

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-200/80 bg-ink-50/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg dark:border-ink-800/80 dark:bg-ink-950/95 md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-stretch gap-2 overflow-x-auto pb-0.5 [-webkit-overflow-scrolling:touch]">
        {hasPhone && (
          <a
            href={`tel:${tel}`}
            className="tap-target flex shrink-0 flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-2 text-sm font-semibold text-ink-900 shadow-sm dark:border-ink-700 dark:bg-ink-900 dark:text-white"
          >
            Call
          </a>
        )}
        {hasEmail && (
          <a
            href={`mailto:${profile.email.trim()}`}
            className="tap-target flex shrink-0 flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-2 text-sm font-semibold text-ink-900 shadow-sm dark:border-ink-700 dark:bg-ink-900 dark:text-white"
          >
            Email
          </a>
        )}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-target flex shrink-0 flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-2 text-sm font-semibold text-ink-900 shadow-sm dark:border-ink-700 dark:bg-ink-900 dark:text-white"
        >
          LinkedIn
        </a>
        <a
          href="#contact"
          className="tap-target flex shrink-0 flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-2 text-sm font-semibold text-ink-900 shadow-sm dark:border-ink-700 dark:bg-ink-900 dark:text-white"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
