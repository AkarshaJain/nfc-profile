import type { Profile } from "@/lib/profile";
import type { ReactNode } from "react";
import { SectionTitle } from "./SectionTitle";

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 mt-10 text-sm font-semibold uppercase tracking-wider text-ink-600 first:mt-0 dark:text-ink-300">
      {children}
    </h3>
  );
}

export function CertificationsSection({ profile }: { profile: Profile }) {
  const certs = profile.certifications;
  const training = profile.trainingCourses;
  const hasAny = certs.length > 0 || training.length > 0;

  if (!hasAny) {
    return (
      <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionTitle
            id="certifications"
            eyebrow="Credentials"
            title="Credentials & training"
            description="Licenses, certifications, and courses from LinkedIn and other providers."
          />
          <div className="rounded-2xl border border-dashed border-ink-300/80 bg-ink-50/50 p-8 text-center dark:border-ink-600/80 dark:bg-ink-900/30">
            <p className="text-sm text-ink-600 dark:text-ink-300">
              Add entries in{" "}
              <code className="rounded bg-ink-200/60 px-1.5 py-0.5 font-mono text-xs dark:bg-ink-800">
                profile.ts
              </code>{" "}
              (<span className="font-mono text-xs">certifications</span> /{" "}
              <span className="font-mono text-xs">trainingCourses</span>), or view the full list on{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-ink-200/60 py-14 dark:border-ink-800/60 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          id="certifications"
          eyebrow="Credentials"
          title="Credentials & training"
          description="Licenses, certifications, and courses aligned with my LinkedIn profile."
        />

        {certs.length > 0 && (
          <>
            <Subheading>Licenses & certifications</Subheading>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li
                  key={c.id}
                  className="flex flex-col gap-2 rounded-xl border border-ink-200/80 bg-white/70 px-4 py-4 dark:border-ink-800/80 dark:bg-ink-900/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="font-medium text-ink-900 dark:text-white">{c.name}</span>
                    {(c.issuer || c.year) && (
                      <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                        {[c.issuer, c.year].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {c.credentialUrl && (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-accent underline-offset-2 hover:underline"
                      >
                        View credential →
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {training.length > 0 && (
          <>
            <Subheading>Courses & training</Subheading>
            <ul className="space-y-3">
              {training.map((t) => (
                <li
                  key={t.id}
                  className="flex flex-col gap-1 rounded-xl border border-ink-200/80 bg-white/70 px-4 py-3 dark:border-ink-800/80 dark:bg-ink-900/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-ink-900 dark:text-white">{t.name}</span>
                  <span className="text-xs text-ink-500 dark:text-ink-400">
                    {[t.provider, t.year].filter(Boolean).join(" · ")}
                  </span>
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent underline-offset-2 hover:underline sm:ml-auto"
                    >
                      Open →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
