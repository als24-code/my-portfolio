"use client";
import { useRef } from "react";
import { site } from "@/data/site";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { useApp } from "@/components/providers/AppProvider";
import { Chars } from "@/components/ui/Chars";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectDesk } from "@/components/features/ProjectDesk";

export function Hero() {
  const root = useRef(null);
  const { introOpen } = useApp();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      if (introOpen) {
        gsap.set(".chars__char", { yPercent: 110 });
        gsap.set(".hero__fade", { opacity: 0, y: 20 });
        return;
      }
      const tl = gsap.timeline({ delay: 0.15 });
      tl.to(".chars__char", { yPercent: 0, duration: 1, stagger: 0.035, ease: "power4.out" })
        .to(".hero__fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.6");
    },
    { scope: root, dependencies: [introOpen] }
  );

  return (
    <section id="top" ref={root} className="hero">
      <div className="container">
        <h1 className="hero__name"><Chars text={site.name} /></h1>
        <p className="hero__role hero__fade">{site.role} · {site.location}</p>
        <div className="hero__body hero__fade">
          <p className="hero__lead">{site.headline}</p>
          <p className="hero__text">{site.intro}</p>
          <ButtonLink href="#work" variant="link">See selected work ↓</ButtonLink>
        </div>
        {/* <div className="hero__fade"><ProjectDesk /></div> */}
      </div>
    </section>
  );
}
