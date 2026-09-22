"use client";

import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const format = (n: number) => Math.round(n).toLocaleString("en-US");

/** Serif numeral that counts up when it enters the viewport. */
export default function CountUp({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(prefersReducedMotion() ? format(value) : "0");

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => setDisplay(format(obj.n)),
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
