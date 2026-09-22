import { clsx } from "clsx";

/** Mono "01 / 05" chapter index — sits top-left of a chapter. */
export default function ChapterMarker({
  index,
  total,
  tone = "dark",
  className,
}: {
  index: string;
  total: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "font-mono text-xs tracking-[0.04em]",
        tone === "dark" ? "text-on-dark-muted" : "text-ink-muted",
        className
      )}
    >
      {index} <span className="opacity-50">/ {total}</span>
    </span>
  );
}
