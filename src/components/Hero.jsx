// components/Hero/Hero.jsx

import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { FiArrowRight, FiDownload, FiArrowDown } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alina-mehdi-59308413", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/als24-code/", Icon: FaGithub },
  { label: "Email", href: "mailto:soomroalina24@gmail.com", Icon: MdOutlineEmail },
];

const TECH_STACK = [
  { label: "React", Icon: FaReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "React Native", Icon: FaReact },
  { label: "HTML5", Icon: FaHtml5 },
  { label: "CSS3", Icon: FaCss3Alt },
  { label: "Git", Icon: FaGitAlt },
];

export default function Hero() {
  return (
    <section className="section" id="home">
      {/* ---------- Background Shapes ---------- */}
      <span className="blob blob--top-right" aria-hidden="true" />
      <span className="blob blob--bottom-left" aria-hidden="true" />

      {/* ---------- Header ---------- */}
      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="header__logo">
            {"<AS/>"}
          </Link>

          <nav className="nav" aria-label="Primary">
            <ul className="nav__list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="nav__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/Alina_Soomro_CV.pdf"
            download
            className="btn btn--primary btn--sm"
          >
            Download CV
            <FiDownload className="btn__icon" aria-hidden="true" />
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <div className="hero container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__greeting">Hi, I&apos;m</p>
            <h1 className="hero__name">Alina Soomro</h1>
            <h2 className="hero__role">Software Engineer</h2>
            <p className="hero__description">
              With 2.5+ years of experience, I develop intuitive web and mobile
              applications that are fast, reliable, and thoughtfully engineered
              to solve real-world problems. I&apos;m passionate about creating
              seamless experiences and always eager to learn and grow.
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                View My Projects
                <FiArrowRight className="btn__icon" aria-hidden="true" />
              </a>
              <a
                href="/Alina_Soomro_CV.pdf"
                download
                className="btn btn--secondary"
              >
                Download CV
                <FiDownload className="btn__icon" aria-hidden="true" />
              </a>
            </div>

            <ul className="hero__socials">
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

          <div className="hero__media">
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
            {/* dots unchanged */}
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
