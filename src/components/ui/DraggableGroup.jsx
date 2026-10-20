"use client";
import { ReactNode, useRef } from "react";
import { Draggable, gsap, useGSAP } from "@/lib/gsap";

/** Bounded container whose matching children can be dragged. */
export function DraggableGroup({ selector, className, children, onItemClick, layout }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const box = ref?.current;
      const items = gsap.utils.toArray(selector, box);
      if (layout) {
        const rect = box.getBoundingClientRect();
        items.forEach((el, i) => gsap.set(el, layout(el, i, rect)));
      }
      Draggable.create(items, {
        bounds: box,
        type: "x,y",
        onPress() { gsap.to(this.target, { scale: 1.04, zIndex: 50, duration: 0.2 }); },
        onRelease() { gsap.to(this.target, { scale: 1, duration: 0.25 }); },
        onClick() { onItemClick?.(this.target); },
      });
    },
    { scope: ref }
  );

  return <div ref={ref} className={className}>{children}</div>;
}
