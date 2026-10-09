// components/Experience/Experience.jsx

const EXPERIENCES = [
  {
    id: "strugbits",
    date: "Jun 2025 – Present",
    role: "Software Engineer",
    company: "Strugbits",
    points: [
      "Developed and maintained web and mobile applications using React, Next.js and React Native.",
      "Collaborated with backend team to integrated REST APIs and with UI/UX team to implement interfaces.",
      "Fixed bugs and improved responsiveness (visual and latent)",
    ],
  },
  {
    id: "fission",
    date: "Nov 2023 – Apr 2025",
    role: "Full Stack Developer",
    company: "Fission Tech",
    points: [
      "Worked on various full-stack applications and their feature implementation using the MERN stack.",
      "Created and tested UIs and backend services",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section section--auto" id="experience">
      <span className="blob blob--bottom-left" aria-hidden="true" />

      <div className="experience container">
        {/* ---------- Heading ---------- */}
        <div className="section-heading">
          <div className="section-heading__content">
            <span className="section-heading__eyebrow">Work Experience</span>
            <h2 className="section-heading__title">Where I&apos;ve worked</h2>
            <p className="section-heading__text">
              My professional journey so far, where I gained hands-on
              experience and developed problem-solving skills.
            </p>
          </div>
        </div>

        {/* ---------- Timeline ---------- */}
        <ol className="timeline">
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
                    <li key={point} className="bullet-list__item">{point}</li>
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