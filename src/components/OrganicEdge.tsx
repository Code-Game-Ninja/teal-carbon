import { clsx } from "clsx";

/**
 * Organic torn/watercolor edge that stitches two world-bands together.
 * Renders a wavy filled shape in `color` (the colour of the band the edge
 * "belongs" to) overlapping the boundary. Place inside a `relative` section.
 */
export default function OrganicEdge({
  position = "bottom",
  color = "var(--color-cream)",
  className,
  height = 90,
}: {
  position?: "top" | "bottom";
  color?: string;
  className?: string;
  height?: number;
}) {
  // two organic path variants keep repeated edges from looking identical
  const path =
    position === "bottom"
      ? "M0,40 C160,90 320,10 520,44 C760,84 980,8 1200,40 C1360,64 1500,30 1440,0 L1440,120 L0,120 Z"
      : "M0,80 C180,30 360,110 560,72 C820,22 1020,104 1240,70 C1360,52 1460,86 1440,120 L1440,0 L0,0 Z";

  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-x-0 z-10 w-full",
        position === "bottom" ? "bottom-0 translate-y-[1px]" : "top-0 -translate-y-[1px]",
        className
      )}
      style={{ height }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}
