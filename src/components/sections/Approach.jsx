"use client";
import { useRef } from "react";
import { approach } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";

export function Approach() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <Section id="approach">
      <div ref={ref}>
        <SectionHead title="Approach" sub="How I work, in the order I do it." />
        <ol className="approach__list">
          {approach.map((s) => (
            <li key={s.n} className="approach__item" data-reveal>
              <span className="approach__num">{s.n}</span>
              <div><h3 className="approach__title">{s.t}</h3><p className="approach__desc">{s.d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
