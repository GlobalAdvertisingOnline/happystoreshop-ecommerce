"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

export function useCountUp(
  target: string,
  duration: number = 2000
): { ref: RefObject<HTMLElement | null>; display: string } {
  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const numMatch = target.match(/[\d,]+/);
          if (!numMatch) {
            setDisplay(target);
            observer.unobserve(el);
            return;
          }

          const numStr = numMatch[0];
          const numVal = parseInt(numStr.replace(/,/g, ""), 10);
          const prefix = target.slice(0, target.indexOf(numStr));
          const suffix = target.slice(target.indexOf(numStr) + numStr.length);

          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numVal);
            setDisplay(prefix + current.toLocaleString() + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display };
}
