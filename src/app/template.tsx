"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Per-navigation page transition. `template.tsx` re-mounts on every route
 * change, so we replay a soft enter animation and jump scroll to top.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-enter");
    // force reflow so the animation restarts on each navigation
    void el.offsetWidth;
    el.classList.add("page-enter");
  }, [pathname]);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
