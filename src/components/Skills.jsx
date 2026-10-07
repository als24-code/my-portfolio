// components/About/About.jsx
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaRegLightbulb } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { FiCode, FiUsers, FiBarChart } from "react-icons/fi";

const FEATURES = [
  {
    id: "clean-code",
    title: "Clean Code",
    text: "Maintainable, scalable, efficient",
    Icon: FiCode,
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    text: "Find simple better solutions",
    Icon: FaRegLightbulb,
  },
  {
    id: "team-player",
    title: "Team Player",
    text: "Communicate and collaborate",
    Icon: FiUsers,
  },
  {
    id: "always-learning",
    title: "Always Learning",
    text: "Stay curious, keep improving",
    Icon: FiBarChart,
  },
];

const TECH_STACK = [
  { label: "React", Icon: FaReact, tone: "react" },
  { label: "Next.js", Icon: SiNextdotjs, tone: "solid" },
  { label: "React Native", Icon: FaReact, tone: "react" },
  { label: "HTML5", Icon: FaHtml5, tone: "primary" },
  { label: "CSS3", Icon: FaCss3Alt, tone: "primary" },
  { label: "Git", Icon: FaGitAlt, tone: "primary" },
  { label: "Node.js", Icon: FaNodeJs, tone: "node" },
  { label: "Express", Icon: SiExpress, tone: "dark" },
  { label: "MongoDB", Icon: SiMongodb, tone: "mongo" },
  { label: "Firebase", Icon: SiFirebase, tone: "firebase" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, tone: "tailwind" },
];

export default function About() {
  return (
    <section className="section section--auto" id="about">
      <span className="blob blob--bottom-right" aria-hidden="true" />

      <div className="about container">
        {/* ---------- Intro + quote ---------- */}
        <div className="about__intro">
          <div className="section-heading">
            <div className="section-heading__content">
              <span className="section-heading__eyebrow">About Me</span>
              <h2 className="section-heading__title">
                Turning ideas into <br /> real-world solutions
              </h2>
              <p className="section-heading__text">
                I&apos;m a JavaScript software engineer with a passion for building
                modern, scalable and user-friendly web and mobile applications. I
                enjoy working with clean code, modern tools and collaborating with
                like-minded people to create meaningful products.
              </p>
            </div>
          </div>

          <figure className="quote-card">
            <blockquote className="quote-card__text">
              &ldquo;Good software is not just about code, it&apos;s about people
              and the problems we solve for them.&rdquo;
            </blockquote>
            <hr className="quote-card__line" />
          </figure>
        </div>

        {/* ---------- Feature cards ---------- */}
        <ul className="about__features">
          {FEATURES.map(({ id, title, text, Icon }) => (
            <li key={id} className="card card--padded feature-card">
              <span
                className="feature-card__icon btn btn--tertiary btn--icon-sm btn--static"
                aria-hidden="true"
              >
                <Icon />
              </span>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__text">{text}</p>
            </li>
          ))}
        </ul>

        {/* ---------- Tech stack ---------- */}
        <h3 className="about__subtitle">Tech Stack</h3>
        <ul className="tech-grid">
          {TECH_STACK.map(({ label, Icon, tone }, i) => (
            <li key={`${label}-${i}`}>
              <span
                className={`tech-grid__item tech-grid__item--${tone} btn btn--tertiary btn--icon btn--static`}
                title={label}
              >
                <Icon aria-hidden="true" />
                <span className="visually-hidden">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}