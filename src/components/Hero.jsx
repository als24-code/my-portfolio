import Image from "next/image";
import { FiArrowRight, FiArrowDownRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { reveal, upwardsReveal, useAnimation } from "@/lib/animations";
import { SOCIALS } from "@/data";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    useAnimation(section, upwardsReveal);
    useAnimation(section, reveal);
  }, []);

  return (
    <section className={`section`} id="about" ref={sectionRef}>
      {/* ---------- Background Shapes ---------- */}
      <span className="blob blob--top-right" aria-hidden="true" />
      <span className="blob blob--bottom-left" aria-hidden="true" />

      {/* ---------- Hero ---------- */}
      <div className="hero container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__greeting prereveal-upward">Hi, I&apos;m</p>
            <h1 className="hero__name prereveal-upward">Alina Soomro</h1>
            <h2 className="hero__role prereveal-upward">Software Engineer</h2>
            <p className="hero__description prereveal-upward">
              With 2.5+ years of experience, I develope intuitive web and mobile
              applications that are fast, reliable, and thoughtfully engineered
              to solve real-world problems.
            </p>

            <div className="hero__actions prereveal-upward">
              <a href="#projects" className="btn btn--primary">
                View My Projects
                <FiArrowRight className="btn__icon" aria-hidden="true" />
              </a>
              <a href="/#contact" className="btn btn--secondary">
                Let&apos;s Connect
                <FiArrowDownRight className="btn__icon" aria-hidden="true" />
              </a>
            </div>

            <ul className="hero__socials prereveal-upward">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="btn btn--tertiary btn--icon"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__media reveal">
            <svg
              width="0"
              height="0"
              aria-hidden="true"
              focusable="false"
              style={{ position: "absolute" }}
            >
              <defs>
                <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0.4247 0.0099
                 C 0.5130 0, 0.7307 0.1479, 0.8231 0.2325
                 C 0.9150 0.3168, 1 0.4037, 0.9780 0.5171
                 C 0.9556 0.6305, 0.7803 0.8350, 0.6900 0.9127
                 C 0.5997 0.9901, 0.5403 1, 0.4361 0.9825
                 C 0.3316 0.9651, 0.1286 0.8889, 0.0643 0.8084
                 C 0 0.7276, 0.0118 0.5850, 0.0496 0.4993
                 C 0.0875 0.4135, 0.2295 0.3748, 0.2917 0.2932
                 C 0.3544 0.2117, 0.3361 0.0201, 0.4247 0.0099 Z"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="hero__media-shape" aria-hidden="true" />
            <div className="hero__image-wrap">
              <Image
                src="/hero-image-3.png"
                alt="Laptop on a desk next to a small plant"
                fill
                priority
                sizes="(max-width: 900px) 510px, 660px"
                className="hero__image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Tech stack ---------- */}
      {/* <ul className="tech-stack container" aria-label="Technologies I use">
        {TECH_STACK.map(({ label, Icon }, i) => (
          <li key={`${label}-${i}`}>
            <span
              className="tech-stack__item btn btn--tertiary btn--icon btn--icon-lg btn--static"
              title={label}
            >
              <Icon aria-hidden="true" />
              <span className="visually-hidden">{label}</span>
            </span>
          </li>
        ))}
      </ul> */}
    </section>
  );
}
