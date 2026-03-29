import type { Profile } from "@/lib/profile";
import { SectionTitle } from "./SectionTitle";

export function ProjectsSection({ profile }: { profile: Profile }) {
  return (
    <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          id="projects"
          eyebrow="Projects"
          title="Selected work — products, ML, and systems"
        />
        <div className="space-y-4">
          {profile.projects.map((proj) => (
            <article
              key={proj.id}
              className="group rounded-2xl border border-ink-200/80 bg-white/80 p-5 transition hover:border-accent/40 hover:shadow-card dark:border-ink-800/80 dark:bg-ink-900/40 dark:hover:shadow-card-dark sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-accent dark:hover:text-accent"
                    >
                      {proj.name}
                      <span className="ml-1 inline-block text-accent opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  ) : (
                    proj.name
                  )}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300 [text-wrap:pretty]">
                {proj.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent dark:text-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
