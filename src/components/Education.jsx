// components/Education/Education.jsx
import { FaGraduationCap } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";

const EDUCATION = [
  {
    id: "masters",
    degree: "Master's in Software Engineering",
    school: "Mohammad Ali Jinnah Univeristy",
    years: "2023 – 2025",
    description:
      "Focused on modern software development, system design and web technologies.",
  },
  {
    id: "bachelors",
    degree: "Bachelor's in Electronics Engineering",
    school: "Mehran University of Engineering and Technology",
    years: "2016 – 2020",
    description:
      "Built a strong foundation in electronics, programming and problem solving.",
  },
];

export default function Education() {
  return (
    <section className="section section--auto" id="education">
      <span className="blob blob--bottom-left" aria-hidden="true" />

      <div className="education container">
        {/* ---------- Heading ---------- */}
        <div className="section-heading">
          <div className="section-heading__content">
            <span className="section-heading__eyebrow">Education</span>
            <h2 className="section-heading__title">My academic journey</h2>
            <p className="section-heading__text">
              The foundations that shaped my skills and interests in technology
              and problem solving.
            </p>
          </div>
        </div>

        {/* ---------- Degrees ---------- */}
        <div className="education__list">
          {EDUCATION.map(({ id, degree, school, years, description }) => (
            <article key={id} className="card card--padded education-card">
              <span
                className="education-card__icon btn btn--tertiary btn--icon btn--icon-lg btn--static"
                aria-hidden="true"
              >
                <FaGraduationCap />
              </span>

              <div>
                <h3 className="education-card__degree">{degree}</h3>
                <p className="education-card__school">{school}</p>
                <time className="education-card__years">{years}</time>
              </div>

              <p className="education-card__description">{description}</p>
            </article>
          ))}

          {/* ---------- Continuous learning ---------- */}
          <aside className="highlight">
            <span
              className="highlight__icon btn btn--tertiary btn--icon btn--icon-lg btn--static"
              aria-hidden="true"
            >
              <FiBookOpen />
            </span>
            <div className="highlight__body">
              <h3 className="highlight__title">Continuous Learning</h3>
              <p className="highlight__text">
                Always exploring new technologies, tools and ideas for skill growth.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}