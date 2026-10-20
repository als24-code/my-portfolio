"use client";
import { useRef } from "react";
import Image from "next/image";
import { about, site } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function About() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <Section id="about">
      <div ref={ref} className="about">
        <figure className="about__figure" data-reveal>
          <Image src={site.portrait} alt={`Portrait of ${site.name}`} width={480} height={600} className="about__img" priority={false} />
          <figcaption className="about__name">{site.name}<span>{site.role}</span></figcaption>
        </figure>
        <div className="about__content">
          <p className="about__eyebrow" data-reveal>About</p>
          <h2 className="about__title" data-reveal>{about.title}</h2>
          <p className="about__body" data-reveal>{about.body}</p>
          <dl className="about__facts" data-reveal>
            {about.facts.map((f) => (<div key={f.k} className="about__fact"><dt>{f.k}</dt><dd>{f.v}</dd></div>))}
          </dl>
          <div data-reveal><ButtonLink href={about.cta.href} variant="ghost">{about.cta.label}</ButtonLink></div>
        </div>
      </div>
    </Section>
  );
}
