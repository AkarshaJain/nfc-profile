import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/60 bg-ink-50/85 backdrop-blur-md dark:border-ink-800/60 dark:bg-ink-950/85">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-2 sm:px-6">
        <a
          href="#top"
          className="shrink-0 text-sm font-semibold tracking-tight text-ink-900 dark:text-white"
        >
          Profile
        </a>
        <nav
          className="hidden flex-1 justify-center gap-1 overflow-x-auto md:flex"
          aria-label="Section navigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-xs font-medium text-ink-600 transition hover:bg-ink-200/50 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-ink-800/60 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle className="!px-2.5 text-xs" />
        </div>
      </div>
    </header>
  );
}
