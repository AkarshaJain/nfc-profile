import type { Profile } from "@/lib/profile";
import { SectionTitle } from "./SectionTitle";

export function SkillsSection({ profile }: { profile: Profile }) {
  return (
    <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          id="skills"
          eyebrow="Skills"
          title="Tools and stacks I use in anger"
          description="Grouped for recruiters scanning for keyword alignment — happy to go deeper on any row."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-ink-200/80 bg-white/70 p-5 dark:border-ink-800/80 dark:bg-ink-900/40"
            >
              <h3 className="text-sm font-semibold text-ink-950 dark:text-white">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-ink-200/80 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-800 dark:border-ink-700 dark:bg-ink-800/50 dark:text-ink-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
