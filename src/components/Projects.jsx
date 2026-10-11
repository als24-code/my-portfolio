"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { FILTERS, PROJECTS } from "@/data";
import useCommonAnimation from "@/hooks/useCommonAnimation";

export default function Projects() {
  const sectionRef = useRef(null);
  useCommonAnimation(sectionRef, 0.8);

  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeFilter));


  return (
    <section className="section section--auto" id="projects" ref={sectionRef}>
      <span className="blob blob--bottom-left" aria-hidden="true" />

      <div className="projects container">
        {/* ---------- Heading + filters ---------- */}
        <div className="section-heading prereveal-upward">
          <div className="section-heading__content">
            <span className="section-heading__eyebrow">My Projects</span>
            <h2 className="section-heading__title">Selected Work</h2>
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
        <div className="projects__grid prereveal-downward">
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

                <a
                  href={project.href}
                  target="__blank"
                  className="link project-card__link"
                >
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
