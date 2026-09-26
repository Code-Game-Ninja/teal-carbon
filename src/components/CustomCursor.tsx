"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Dot cursor that expands to a labelled pill over elements marked
 * data-cursor="LABEL". Hidden until the first pointer move (so it never
 * parks as a blob in the top-left corner) and hidden when the pointer
 * leaves the window. Disabled on touch / reduced-motion.
 */
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse || prefersReducedMotion()) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled || !dot.current) return;

    const el = dot.current;
    gsap.set(el, { x: -100, y: -100 });
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    let first = true;

    const move = (e: PointerEvent) => {
      if (first) {
        // snap into place on first move — no glide from the corner
        gsap.set(el, { x: e.clientX, y: e.clientY });
        first = false;
        setVisible(true);
      } else {
        xTo(e.clientX);
        yTo(e.clientY);
      }
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    window.addEventListener("blur", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      window.removeEventListener("blur", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-cream text-[10px] font-semibold uppercase tracking-[0.18em] text-ocean-deep transition-[width,height] duration-300 ease-out"
        style={{ width: label ? 84 : 12, height: label ? 84 : 12 }}
      >
        {label}
      </div>
    </div>
  );
}
