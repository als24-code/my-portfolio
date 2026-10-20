"use client";
import { useRef } from "react";
import { links, site } from "@/data/site";
import { useCopy } from "@/hooks/useCopy";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const ref = useRef(null);
  const { copied, copy } = useCopy(site.email);
  useReveal(ref);
  return (
    <Section id="contact">
      <div ref={ref} className="contact">
        <p className="contact__status" data-reveal><span className="header__dot" />{site.availability}</p>
        <h2 className="contact__title" data-reveal>Let's figure out what we can solve.</h2>
        <p className="contact__lead" data-reveal>If you&rsquo;ve read this far, we should probably talk.</p>
        <p className="contact__text" data-reveal>A brief, a rough idea or a role description is enough to start.</p>
        <div className="contact__actions" data-reveal>
          <a className="contact__email" href={`mailto:${site.email}`}>{site.email}↗</a>
          <Button variant="ghost" onClick={copy}>{copied ? "Copied ✓" : "Copy email"}</Button>
        </div>
        <ul className="contact__links" data-reveal>
          {links.slice(0, 2).map((l) => (<li key={l.label}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>))}
        </ul>
      </div>
    </Section>
  );
}
