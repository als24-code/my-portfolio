"use client";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";


/** Scroll-triggered reveal for a container's marked children. */
export function useReveal(
  ref,
  { selector = "[data-reveal]", stagger = 0.08, y = 28 } = {}
) {
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const targets = gsap.utils.toArray(selector, ref.current);
      if (!targets.length) return;
      gsap.from(targets, {
        y, opacity: 0, duration: 0.8, ease: "power3.out", stagger,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    },
    { scope: ref }
  );
}
