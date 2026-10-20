"use client";
import { useRef, useState } from "react";
import { capabilities } from "@/data/site";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { CapabilityPreview } from "@/components/features/CapabilityPreview";

export function Capabilities() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const cap = capabilities[active];
  useReveal(ref);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(".caps__stage", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    },
    { scope: ref, dependencies: [active] }
  );

  return (
    <Section id="capabilities">
      <div ref={ref}>
        <SectionHead title="Capabilities" hint="Hover one" />
        <div className="caps">
          <ul className="caps__list" data-reveal>
            {capabilities.map((c, i) => (
              <li key={c.id}>
                <button
                  className={`caps__item ${i === active ? "caps__item--active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <span className="caps__num">{c.n}</span>
                  <span><span className="caps__title">{c.t}</span><span className="caps__desc">{c.d}</span></span>
                  <span className="caps__arrow">→</span>
                </button>
              </li>
            ))}
          </ul>
          <figure className="caps__panel" data-reveal>
            <p className="caps__file">▢ {cap.file}</p>
            <div className="caps__stage"><CapabilityPreview id={cap.id} /></div>
            <figcaption className="caps__caption"><span>{cap.caption}</span><span>{cap.n} / {String(capabilities.length).padStart(2, "0")}</span></figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
