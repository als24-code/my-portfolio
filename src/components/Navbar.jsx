"use client";

import useCurrentSection from "@/hooks/useCurrentSection";
import useScroll from "@/hooks/useScroll";
import { sectionReveal } from "@/lib/animations";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FiArrowDownRight } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Education", href: "#education", sectionId: "education" },
  // { label: "Contact", href: "#contact", sectionId: 'contact' },
];

export default function Navbar() {

  const sectionRef = useRef(null);

  const scrollY = useScroll();
  const activeSection = useCurrentSection([
    ...NAV_LINKS.map((e) => e.sectionId),
    "contact",
  ]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = sectionReveal(section);
    return () => ctx.revert();
  }, []);

  return (
    <header className={`header ${scrollY > 72 && "header-cloudbg"}`} ref={sectionRef}>
      <div className="container header__inner prereveal">
        <Link href="/" className="header__logo">
          {"<AS/>"}
        </Link>
        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {NAV_LINKS.map(({ label, href, sectionId }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`nav__link ${activeSection === sectionId && "nav__link--active"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/#contact" className="btn btn--primary btn--sm">
          Let&apos;s Connect
          <FiArrowDownRight className="btn__icon" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
