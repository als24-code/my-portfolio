"use client";
import { useCallback, useRef } from "react";
import { intro } from "@/data/site";
import { Draggable, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { useApp } from "@/components/providers/AppProvider";
import { useKey } from "@/hooks/useKey";
import { useLockBody } from "@/hooks/useLockBody";
import { Button } from "@/components/ui/Button";

const SCATTER = [
  [-6, -25, -14],
  [-25, -65, 10],
  [40, -50, -8],
  [75, 10, 12],
  [-65, 35, 6],
  [10, 55, -20],
  [35, 35, 14],
];

export function Intro() {
  const { introOpen } = useApp();
  return introOpen ? <IntroOverlay /> : null;
}

function IntroOverlay() {
  const { closeIntro } = useApp();
  const root = useRef(null);
  const busy = useRef(false);
  useLockBody(true);

  const { contextSafe } = useGSAP(
    () => {
      const pieces = gsap.utils.toArray(".intro__piece");
      pieces.forEach((el, i) => {
        const [x, y, r] = SCATTER[i % SCATTER.length];
        gsap.set(el, { xPercent: 0, x: x * 4, y: y * 4, rotation: r });
      });
      Draggable.create(pieces, {
        type: "x,y",
        onPress() {
          gsap.to(this.target, { scale: 1.1, duration: 0.2 });
        },
        onRelease() {
          gsap.to(this.target, { scale: 1, duration: 0.25 });
        },
      });
      if (!prefersReducedMotion()) {
        gsap.from(".intro__title", {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(pieces, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "back.out(1.8)",
          delay: 0.3,
        });
      }
    },
    { scope: root },
  );

  const finish = contextSafe((tidy) => {
    if (busy.current) return;
    busy.current = true;
    const tl = gsap.timeline({ onComplete: closeIntro });
    if (tidy) {
      tl.to(".intro__piece", {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: 0.05,
      }).to(".intro__title", { opacity: 0.4, duration: 0.3 }, "<0.3");
    }
    tl.to(
      root.current,
      { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
      tidy ? "+=0.35" : 0,
    );
  });

  const onEnter = useCallback(() => finish(true), [finish]);
  useKey("Enter", onEnter);

  return (
    <div ref={root} className="intro" role="dialog" aria-label="Intro">
      <h1 className="intro__title">{intro.title}</h1>
      <div className="intro__row">
        {intro.pieces.map((p) => (
          <div key={p} className="intro__piece">
            {p}
          </div>
        ))}
      </div>
      <div className="intro__actions">
        <Button onClick={() => finish(true)}>Tidy it up ↵</Button>
        <p className="intro__hint">or drag the pieces</p>
      </div>
      <button className="intro__skip" onClick={() => finish(false)}>
        Skip intro →
      </button>
    </div>
  );
}
