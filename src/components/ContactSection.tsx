import type { Profile } from "@/lib/profile";
import Link from "next/link";
import { QRCodeBlock } from "./QRCodeBlock";
import { SaveContactButton } from "./SaveContactButton";
import { SectionTitle } from "./SectionTitle";

export function ContactSection({
  profile,
  resumeAvailable = false,
}: {
  profile: Profile;
  resumeAvailable?: boolean;
}) {
  const tel = profile.phone.replace(/\s/g, "");
  const hasPhone = Boolean(profile.phone.trim() && tel);
  const hasEmail = Boolean(profile.email.trim());
  const booking = profile.bookingUrl?.trim();
  const showResume = resumeAvailable;
  const resumeConfigured = Boolean(profile.resumeUrl?.trim());
  const showResumeMissingHint = resumeConfigured && !resumeAvailable;
  const extras = profile.socialLinks.filter((s) => s.href?.trim());

  return (
    <section id="contact" className="py-14 scroll-mt-28 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s connect"
          description="Tap NFC or scan the QR code to return here anytime. Fastest responses via LinkedIn; call or email when listed."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-start">
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {hasPhone && (
                <a
                  href={`tel:${tel}`}
                  className="tap-target inline-flex flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold shadow-sm dark:border-ink-700 dark:bg-ink-900 sm:flex-none sm:min-w-[140px]"
                >
                  Call
                </a>
              )}
              {hasEmail && (
                <a
                  href={`mailto:${profile.email.trim()}`}
                  className="tap-target inline-flex flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold shadow-sm dark:border-ink-700 dark:bg-ink-900 sm:flex-none sm:min-w-[140px]"
                >
                  Email
                </a>
              )}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target inline-flex flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold shadow-sm dark:border-ink-700 dark:bg-ink-900 sm:flex-none sm:min-w-[140px]"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target inline-flex flex-1 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold shadow-sm dark:border-ink-700 dark:bg-ink-900 sm:flex-none sm:min-w-[140px]"
              >
                GitHub
              </a>
            </div>
            {booking && (
              <a
                href={booking}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target inline-flex w-full items-center justify-center rounded-xl bg-ink-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 sm:w-auto"
              >
                Schedule time
              </a>
            )}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
              <SaveContactButton profile={profile} className="max-w-md sm:min-w-[200px]" />
              {showResume && (
                <Link
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target inline-flex max-w-md items-center justify-center rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-900 shadow-sm transition hover:border-ink-300 dark:border-ink-700 dark:bg-ink-900 dark:text-white sm:min-w-[160px]"
                >
                  Resume
                </Link>
              )}
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {profile.portfolio?.trim() ? (
                <a
                  href={profile.portfolio.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Portfolio site →
                </a>
              ) : null}
            </div>
            {showResumeMissingHint && (
              <p
                className="rounded-xl border border-dashed border-ink-300/80 bg-ink-50/80 px-4 py-3 text-xs leading-relaxed text-ink-600 dark:border-ink-600 dark:bg-ink-900/40 dark:text-ink-300"
                role="status"
              >
                The Resume link stays hidden until the PDF exists in the{" "}
                <code className="rounded bg-ink-200/70 px-1 py-0.5 font-mono text-[11px] dark:bg-ink-800">
                  public
                </code>{" "}
                folder (e.g.{" "}
                <span className="font-mono text-[11px]">
                  {profile.resumeUrl?.replace(/^\//, "") ?? "resume.pdf"}
                </span>
                ). Your vCard still includes the configured URLs for deployment.
              </p>
            )}
            {extras.length > 0 && (
              <ul className="flex flex-wrap gap-3 pt-2">
                {extras.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-ink-700 underline-offset-4 hover:underline dark:text-ink-200"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <QRCodeBlock />
        </div>
      </div>
    </section>
  );
}
