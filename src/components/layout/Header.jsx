"use client";
import { useRef, useState } from "react";
import { nav, site } from "@/data/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useKey } from "@/hooks/useKey";
import { useLockBody } from "@/hooks/useLockBody";

export function Header() {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  useLockBody(open);
  useKey("Escape", () => setOpen(false), open);

  useGSAP(
    () => {
      if (!open) return;
      gsap.from(".menu__item", { y: 40, opacity: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" });
    },
    { scope: root, dependencies: [open] }
  );

  return (
    <header ref={root} className="header">
      <div className="header__bar">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>{site.name}</a>
        <p className="header__status"><span className="header__dot" />{site.availability}</p>
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav id="menu" className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open}>
        <ul className="menu__list">
          {nav.map((n) => (
            <li key={n.href} className="menu__item">
              <a href={n.href} className="menu__link" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {n.label}<span className="menu__key">{n.k}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
