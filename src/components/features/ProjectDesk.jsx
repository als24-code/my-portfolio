"use client";
import { useRef } from "react";
import { projects } from "@/data/site";
import { Draggable, gsap } from "@/lib/gsap";
import { useApp } from "@/components/providers/AppProvider";
import { DraggableGroup } from "@/components/ui/DraggableGroup";
import { Placeholder } from "@/components/ui/Placeholder";
import { Button } from "@/components/ui/Button";

const SCATTER = [[0.02, 0.1, -6], [0.27, 0.42, 4], [0.52, 0.06, -3], [0.74, 0.38, 7]];
const VARIANTS = ["a", "b", "c", "d"];

export function ProjectDesk() {
  const { openCase } = useApp();
  const wrap = useRef(null);

  const tidy = () => {
    const box = wrap.current?.querySelector(".desk__surface");
    const cards = gsap.utils.toArray(".desk__card", box);
    const w = cards[0].offsetWidth;
    const h = cards[0].offsetHeight;
    const gap = (box.clientWidth - w * cards.length) / (cards.length + 1);
    cards.forEach((el, i) => {
      gsap.to(el, {
        x: gap + i * (w + gap), y: (box.clientHeight - h) / 2, rotation: 0,
        duration: 0.7, ease: "power3.inOut", delay: i * 0.05,
        onComplete: () => { Draggable.get(el)?.update(); },
      });
    });
  };

  return (
    <div ref={wrap} className="desk">
      <div className="desk__bar">
        <p className="desk__hint">Project desk · drag the cards, click one to open</p>
        <Button variant="ghost" onClick={tidy}>Tidy up</Button>
      </div>
      <DraggableGroup
        className="desk__surface"
        selector=".desk__card"
        onItemClick={(el) => openCase(projects[Number(el.dataset.index)])}
        layout={(el, i, box) => {
          const [fx, fy, r] = SCATTER[i % SCATTER.length];
          const w = el.offsetWidth, h = el.offsetHeight;
          return {
            x: Math.min(fx * box.width, box.width - w),
            y: Math.min(fy * box.height, box.height - h),
            rotation: r,
          };
        }}
      >
        {projects.map((p, i) => (
          <article key={p.id} className="desk__card" data-index={i}>
            <Placeholder label={p.label} variant={VARIANTS[i % 4]} className="desk__img" />
            <p className="desk__title">{p.title}<span className="desk__num">{p.num}</span></p>
          </article>
        ))}
      </DraggableGroup>
    </div>
  );
}
