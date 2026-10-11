"use client";

import { useEffect, useState } from "react";

function useScrollSpy(sectionIds) {
  const offset = 0.35;
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  const idsKey = sectionIds.join("|");

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const topMargin = -Math.round(offset * 100);
    const bottomMargin = -(100 - Math.round(offset * 100)) + 1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `${topMargin}% 0px ${bottomMargin}% 0px`,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [idsKey, offset]);

  return activeSection;
}

export default useScrollSpy;
