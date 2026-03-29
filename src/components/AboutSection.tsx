import type { Profile } from "@/lib/profile";
import { SectionTitle } from "./SectionTitle";

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          id="about"
          eyebrow="About"
          title="Built for impact in production — and in the classroom"
          description="A concise view of how I work, what I’ve shipped, and what I’m building next."
        />
        <div className="rounded-2xl border border-ink-200/80 bg-white/70 p-6 shadow-card dark:border-ink-800/80 dark:bg-ink-900/50 dark:shadow-card-dark sm:p-8">
          <p className="text-lg font-medium leading-relaxed text-ink-900 dark:text-ink-50">
            {profile.bioLead}
          </p>
          <ul className="mt-6 space-y-3 border-t border-ink-200/60 pt-6 dark:border-ink-700/60">
            {profile.resumeHighlights.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-ink-200"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4 border-t border-ink-200/60 pt-8 text-sm leading-relaxed text-ink-600 dark:border-ink-700/60 dark:text-ink-300">
            {profile.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
