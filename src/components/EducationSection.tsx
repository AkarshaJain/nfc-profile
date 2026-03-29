import type { Profile } from "@/lib/profile";
import { SectionTitle } from "./SectionTitle";

export function EducationSection({ profile }: { profile: Profile }) {
  return (
    <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle id="education" eyebrow="Education" title="Academic foundation" />
        <div className="space-y-4">
          {profile.education.map((ed) => (
            <article
              key={ed.id}
              className="rounded-2xl border border-ink-200/80 bg-white/70 p-5 dark:border-ink-800/80 dark:bg-ink-900/40 sm:p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold text-ink-950 dark:text-white">
                  {ed.degree}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  {ed.start} — {ed.end}
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-ink-700 dark:text-ink-200">{ed.school}</p>
              <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{ed.location}</p>
              {ed.detail && (
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {ed.detail}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
