"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** stagger direct children instead of animating the wrapper */
  stagger?: boolean;
  y?: number;
  delay?: number;
};

/**
 * Fade + translate-up reveal on scroll. With `stagger`, animates
 * direct children in sequence. Reduced-motion => instant visible.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  stagger = false,
  y = 40,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as React.ElementType;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const targets = stagger ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { willChange: "transform, filter, opacity" });
      gsap.from(targets, {
        opacity: 0,
        y,
        scale: 0.985,
        filter: "blur(8px)",
        duration: 1.15,
        delay,
        ease: "expo.out",
        stagger: stagger ? 0.11 : 0,
        clearProps: "filter,willChange,scale",
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={clsx(className)}>
      {children}
    </Tag>
  );
}
