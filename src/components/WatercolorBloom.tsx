import { clsx } from "clsx";

/**
 * Soft atmospheric wash sitting BEHIND content (never a container).
 * Low-alpha radial blob used to add depth to PAPER/DEEP bands.
 */
export default function WatercolorBloom({
  color = "var(--color-mist)",
  className,
  size = 640,
}: {
  color?: string;
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className={clsx("pointer-events-none absolute -z-0 rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
        opacity: 0.35,
      }}
    />
  );
}
