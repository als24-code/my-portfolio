import { EXPERIENCES } from "@/data";
import useCommonAnimation from "@/hooks/useCommonAnimation";
import {  useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  useCommonAnimation(sectionRef, 0.8);

  return (
    <section className="section section--auto" id="experience" ref={sectionRef}>
      <span className="blob blob--bottom-left" aria-hidden="true" />

      <div className="experience container">
        {/* ---------- Heading ---------- */}
        <div className="section-heading prereveal-upward">
          <div className="section-heading__content">
            <span className="section-heading__eyebrow">Work Experience</span>
            <h2 className="section-heading__title">Where I&apos;ve worked</h2>
            <p className="section-heading__text">
              My professional journey so far, where I gained hands-on experience
              and developed problem-solving skills.
            </p>
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <ol className="timeline prereveal-downward">
          {EXPERIENCES.map(({ id, date, role, company, points }) => (
            <li key={id} className="timeline__item">
              <div className="timeline__meta">
                <span className="timeline__marker" aria-hidden="true" />
                <time className="timeline__date">{date}</time>
              </div>

              <article className="card card--padded timeline__card">
                <h3 className="timeline__role">{role}</h3>
                <p className="timeline__company">{company}</p>
                <ul className="bullet-list">
                  {points.map((point) => (
                    <li key={point} className="bullet-list__item">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
