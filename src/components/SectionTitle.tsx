export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={id} className="mb-8 scroll-mt-28">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {description}
        </p>
      )}
    </div>
  );
}
