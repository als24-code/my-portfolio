"use client";

// components/Projects/Projects.jsx
import { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiPlus } from "react-icons/fi";

const FILTERS = ["All", "Web", "Mobile", "Professional", "Personal"];

const PROJECTS = [
  {
    id: "fantom",
    title: "Fantom Hypnotik - Smart-home lighting control",
    description:
      "A full system for hypnotik lights. A cross platform mobile app to control them and admin dashboard for managing app users.",
    image: "/fantom.png",
    tags: ["Next.js", "Nest.js", "MongoDB", "Firebase", "AWS"],
    categories: ["Mobile", "Web", "Professional"],
    href: "https://play.google.com/store/apps/details?id=ca.cgagnier.hypnoyiknativeandroid&hl=en",
  },
  {
    id: "eijent",
    title: "Eijent - AI powered transcription app",
    description:
      "An app to transcribe meetings/calls and then summarize/edit the audio using Eijent hardware connected via bluetooth.",
    image: "/eijent.png",
    tags: ["React Native", "BLE"],
    categories: ["Mobile", "Professional"],
    href: "www.eijent.com",
  },
  {
    id: "ancestro",
    title: "Ancestro - Clean energy solutions",
    description:
      "Clean-energy subscription platform focused on making solar and battery systems accessible without a large upfront purchase.",
    image: "/ancestro.png",
    tags: ["Next.js", "Tailwind", "Vercel"],
    categories: ["Web", "Professional"],
    href: "#",
  },
  {
    id: "mediapilot",
    title: "Mediapilot - Streaming infrastructure service",
    description:
      "Service that helps content creators turn their existing video content into their own monetized over-the-top media platform.",
    image: "/mediapilot-3.png",
    tags: ["React", "Express.js", "FFmpeg", "Redis"],
    categories: ["Web", "Full Stack", "Professional"],
    href: "https://mediapilot.io/",
  },
  {
    id: "coconut-beach",
    title: "Coconut Beach Hotels",
    description:
      "Mock site for online travel booking for a fictional hotel chain.",
    image: "/coconut-beach.png",
    tags: ["Next.js", "Tailwind", "GSAP"],
    categories: ["Web", "Personal"],
    href: "https://coconut-beach-hotels-two.vercel.app/",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));

  return (
    <section className="section section--auto" id="projects">
      <span className="blob blob--bottom-left" aria-hidden="true" />

      <div className="projects container">
        {/* ---------- Heading + filters ---------- */}
        <div className="section-heading">
          <div className="section-heading__content">
            <span className="section-heading__eyebrow">My Projects</span>
            <h2 className="section-heading__title">
              Selected Work
              {/* <br /> I&apos;ve built */}
            </h2>
            <p className="section-heading__text">
              Here are some professional and personal projects I&apos;ve worked
              on, from full-stack applications to landing-pages and mobile apps.
              Each piece of work helped in expanding knowledge and acquiring
              real-world skills.
            </p>
          </div>

          <div
            className="projects__filters"
            role="group"
            aria-label="Filter projects"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`chip chip--filter${
                  activeFilter === filter ? " chip--active" : ""
                }`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* ---------- Grid ---------- */}
        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="card project-card">
              <div className="project-card__media">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 380px"
                  className="project-card__image"
                />
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                <ul
                  className="project-card__tags"
                  aria-label="Technologies used"
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>

                <a href={project.href} className="link project-card__link">
                  View Project
                  <FiArrowRight className="link__icon" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          {/* ---------- More projects ---------- */}
          <article className="card more-card">
            <span
              className="btn btn--tertiary btn--icon btn--icon-xl btn--static btn--tertiary-xcentered"
              aria-hidden="true"
            >
              <FiPlus />
            </span>
            <div className="more-card__body">
              <h3 className="more-card__title">More Projects</h3>
              <p className="more-card__text">
                I&apos;m always working on something new. Stay tuned!
              </p>
              <a
                href="https://github.com/als24-code"
                className="link more-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My GitHub
                <FiArrowRight className="link__icon" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
