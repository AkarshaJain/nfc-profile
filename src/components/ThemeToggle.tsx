"use client";

import { useTheme } from "./providers/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className={`tap-target inline-flex items-center justify-center rounded-full border border-ink-200/80 bg-white/80 px-3 text-sm font-medium text-ink-800 shadow-sm backdrop-blur transition hover:border-ink-300 hover:bg-white dark:border-ink-700 dark:bg-ink-900/80 dark:text-ink-100 dark:hover:border-ink-600 dark:hover:bg-ink-800 ${className}`}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
