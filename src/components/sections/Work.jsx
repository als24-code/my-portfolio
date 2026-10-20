"use client";
import { useRef } from "react";
import { projects } from "@/data/site";
import { useApp } from "@/components/providers/AppProvider";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Placeholder } from "@/components/ui/Placeholder";

const VARIANTS = ["a", "b", "c", "d"];

export function Work() {
  const ref = useRef(null);
  const { openCase } = useApp();
  useReveal(ref);

  return (
    <Section id="work">
      <div ref={ref}>
        <SectionHead
          title={`Selected work (${String(projects.length).padStart(2, "0")})`}
          hint="Click to open"
        />
        <div className="work__grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className="work__card"
              data-reveal
              onClick={() => openCase(p)}
            >
              <Placeholder
                img={p.img}
                label={`${p.label} · placeholder`}
                variant={VARIANTS[i % 4]}
                className="work__img"
              />
              <div className="work__info">
                <h3 className="work__title">
                  <span className="work__num">{p.num}</span> {p.title}
                </h3>
                <p className="work__desc">{p.desc}</p>
                <p className="work__meta">
                  <span>{p.kind}</span>
                  <span>{p.role}</span>
                  <span>{p.year}</span>
                  <span className="work__cta">{p.cta} ↗</span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
