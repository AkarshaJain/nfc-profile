import type { Profile } from "@/lib/profile";
import { publicFilePath } from "@/lib/public-path";
import Image from "next/image";

export function Hero({ profile }: { profile: Profile }) {
  const tel = profile.phone.replace(/\s/g, "");
  const hasPhone = Boolean(profile.phone.trim() && tel);
  const hasEmail = Boolean(profile.email.trim());

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink-200/60 dark:border-ink-800/60"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(61,106,255,0.2),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(61,106,255,0.25),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="relative mb-6 shrink-0 animate-fade-up">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 to-transparent opacity-60 blur-md dark:from-accent/30" />
            <Image
              src={publicFilePath(profile.photoUrl)}
              alt={profile.photoAlt}
              width={120}
              height={120}
              priority
              className="relative rounded-full border-4 border-white object-cover shadow-card dark:border-ink-800 dark:shadow-card-dark"
              unoptimized={profile.photoUrl.startsWith("http")}
            />
          </div>
          <p className="mb-1 animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 [animation-delay:40ms] dark:text-ink-400">
            {profile.location}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink-950 animate-fade-up [animation-delay:80ms] dark:text-white sm:text-5xl">
            {profile.fullName}
          </h1>
          <p className="mt-3 max-w-xl text-lg font-medium text-ink-700 animate-fade-up [animation-delay:120ms] dark:text-ink-200">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 animate-fade-up [animation-delay:160ms] dark:text-ink-300">
            {profile.valueProposition}
          </p>
        </div>

        <div className="mt-8 flex max-w-2xl flex-wrap gap-3">
          {hasPhone && (
            <a
              href={`tel:${tel}`}
              className="tap-target flex min-w-[140px] flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-3 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:border-ink-300 hover:shadow-md active:scale-[0.99] dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:border-ink-600 sm:flex-none"
            >
              Call
            </a>
          )}
          {hasEmail && (
            <a
              href={`mailto:${profile.email.trim()}`}
              className="tap-target flex min-w-[140px] flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-3 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:border-ink-300 hover:shadow-md active:scale-[0.99] dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:border-ink-600 sm:flex-none"
            >
              Email
            </a>
          )}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex min-w-[140px] flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-3 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:border-ink-300 hover:shadow-md active:scale-[0.99] dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:border-ink-600 sm:flex-none"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="tap-target flex min-w-[140px] flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-3 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:border-ink-300 hover:shadow-md active:scale-[0.99] dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:border-ink-600 sm:flex-none"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
