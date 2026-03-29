import type { Profile } from "@/lib/profile";
import { SectionTitle } from "./SectionTitle";

export function ExperienceSection({ profile }: { profile: Profile }) {
  return (
    <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          id="experience"
          eyebrow="Experience"
          title="Roles where scale, latency, and ownership mattered"
        />
        <ol className="relative space-y-8 border-l border-ink-200 pl-8 dark:border-ink-700">
          {profile.experience.map((job) => (
            <li key={job.id} className="relative">
              <span
                className="absolute -left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-accent dark:border-ink-950"
                aria-hidden
              />
              <article className="rounded-2xl border border-ink-200/80 bg-white/80 p-5 transition hover:border-ink-300/80 hover:shadow-md dark:border-ink-800/80 dark:bg-ink-900/40 dark:hover:border-ink-600/80">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-ink-950 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-ink-600 dark:text-ink-300">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                    {job.start} — {job.end}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm leading-relaxed text-ink-700 dark:text-ink-200 [text-wrap:pretty]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
