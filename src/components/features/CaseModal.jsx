"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useApp } from "@/components/providers/AppProvider";
import { useKey } from "@/hooks/useKey";
import { useLockBody } from "@/hooks/useLockBody";
import { Placeholder } from "@/components/ui/Placeholder";
import { CASE_STUDIES } from "@/data/site";

// const META = [["Client", "[Client or product]"], ["Role", "[Your role]"], ["Timeline", "[Dates]"], ["Platform", "[Web · iOS · Android]"]];
// const BLOCKS = [
//   ["The problem", "[What was broken or missing, for whom.]"],
//   ["What I did", "[Research, key decisions, trade-offs.]"],
//   ["What changed", "[Only real, verifiable results.]"],
// ];

export function CaseModal() {
  const { activeCase } = useApp();
  return activeCase ? <CaseModalInner project={activeCase} /> : null;
}

function CaseModalInner({ project }) {
  const { closeCase } = useApp();
  const root = useRef(null);
  useLockBody(true);

  const caseStudy = CASE_STUDIES[project.id];

  const META = caseStudy?.meta ?? [
    ["Client", project.title],
    ["Role", project.role ?? "Software Engineer"],
    ["Timeline", project.year ?? "—"],
    ["Platform", project.kind ?? "Web"],
  ];

  const BLOCKS = caseStudy?.blocks ?? [
    ["The problem", project.desc ?? "Project details coming soon."],
    ["What I did", "Project details coming soon."],
    ["What changed", "Project outcomes to be added."],
  ];

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(".modal__backdrop", { opacity: 0, duration: 0.3 });
      gsap.from(".modal__panel", {
        yPercent: 8,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  const close = contextSafe(() => {
    gsap.to(root.current, {
      opacity: 0,
      duration: 0.25,
      onComplete: closeCase,
    });
  });
  useKey("Escape", close);

  return (
    <div
      ref={root}
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal__backdrop" onClick={close} />
      <div className="modal__panel">
        <div className="modal__top">
          <p className="modal__eyebrow">
            Case {project.num} / 04 · {project.kind}
          </p>
          <a href="#work" className="modal__link" onClick={close}>
            Project Link ↗
          </a>
          <button className="modal__close" onClick={close}>
            Close · Esc
          </button>
        </div>
        <h2 className="modal__title">{project.title}</h2>

        <dl className="modal__meta">
          {META.map(([k, v]) => (
            <div key={k} className="modal__meta-item">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <Placeholder label={project.label} className="modal__cover" />

        <div className="modal__blocks">
          {BLOCKS.map(([title, description]) => (
            <section key={title} className="modal__block">
              <h3>{title}</h3>
              <p>{description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
