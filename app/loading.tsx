/**
 * A full-screen spinner is worse than nothing on a statically generated site:
 * it flashes over content that is already in the HTML. This is a quiet,
 * layout-stable placeholder that only appears during genuine navigation waits.
 */
export default function Loading() {
  return (
    <div
      className="flex min-h-dvh items-center justify-center bg-canvas"
      role="status"
    >
      <span className="flex items-center gap-3 text-ink-subtle">
        <span
          className="h-5 w-5 rounded-full border-2 border-brand-200 border-t-brand-600 motion-safe:animate-spin dark:border-brand-800 dark:border-t-brand-400"
          aria-hidden="true"
        />
        <span className="font-display text-sm font-bold">Loading…</span>
      </span>
    </div>
  );
}
