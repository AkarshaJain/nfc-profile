import { AboutSection } from "@/components/AboutSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { StickyActions } from "@/components/StickyActions";
import { TopNav } from "@/components/TopNav";
import { profile } from "@/lib/profile";
import { assetIsReachable } from "@/lib/public-files";
import { absolutePublicUrl } from "@/lib/public-path";
import { getSiteUrlSync } from "@/lib/site-url";

export default function HomePage() {
  const siteUrl = getSiteUrlSync();
  const resumeAvailable = assetIsReachable(profile.resumeUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.headline,
    url: siteUrl,
    image: absolutePublicUrl(profile.photoUrl),
    sameAs: [profile.linkedin, profile.github, profile.portfolio].filter(Boolean),
    ...(profile.location
      ? { workLocation: { "@type": "Place", name: profile.location } }
      : {}),
    ...(profile.email.trim() ? { email: profile.email.trim() } : {}),
    ...(profile.phone.trim() ? { telephone: profile.phone.trim() } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-950 focus:shadow-lg dark:focus:bg-ink-900 dark:focus:text-white"
      >
        Skip to main content
      </a>
      <TopNav />
      <main id="main-content" className="pb-28 md:pb-0">
        <Hero profile={profile} />
        <AboutSection profile={profile} />
        <ExperienceSection profile={profile} />
        <SkillsSection profile={profile} />
        <ProjectsSection profile={profile} />
        <EducationSection profile={profile} />
        <CertificationsSection profile={profile} />
        <ContactSection profile={profile} resumeAvailable={resumeAvailable} />
      </main>
      <footer className="border-t border-ink-200/60 py-8 text-center text-xs text-ink-500 dark:border-ink-800/60 dark:text-ink-400">
        <p>
          NFC / QR digital profile · No app required ·{" "}
          <span className="whitespace-nowrap">{profile.fullName}</span>
        </p>
      </footer>
      <StickyActions profile={profile} />
    </>
  );
}
