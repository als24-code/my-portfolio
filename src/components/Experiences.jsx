// components/Experience/Experience.jsx

const EXPERIENCES = [
  {
    id: "strugbits",
    date: "Jun 2025 – Present",
    role: "Software Engineer",
    company: "Strugbits",
    location: "Karachi, Pakistan",
    points: [
      // "Developed and maintained web and mobile applications using React, Next.js and React Native.",
      // "Collaborated with backend team to integrated REST APIs and with UI/UX team to implement interfaces.",
      // "Fixed bugs and improved responsiveness (visual and latent)",
      "Developed and maintained responsive web and mobile applications using React, Next.js, and React Native, translating frontend product requirements.",
      "Translated UI/UX designs from Figma and Adobe XD into responsive, visually consistent interfaces using Tailwind CSS across desktop and mobile devices.",
      "Integrated REST APIs and backend services into frontend applications to support dynamic content, and application functionality.",
      "Implemented animations, interactive components to enhance UX.",
      "Integrated Wix CMS and SDK to support dynamic content management and automated customer workflows.",
      "Collaborated with UI/UX designers to improve interface usability & accessibility by identifying interaction issues and recommending design adjustments.",
    ],
  },
  {
    id: "fission",
    date: "Nov 2023 – Apr 2025",
    role: "Full Stack Developer",
    company: "Fission Tech",
    points: [
      "Collaborated within a four-person development team to deliver maintainable frontend, backend, and database solutions.",
      "Developed and maintained complex web and mobile applications using React.js, React Native and Node.js (Express.js and NestJS).",
      "Implemented client-side state management using Redux to manage application data and API workflows.",
      "Translated Figma designs and technical specifications into functional, responsive interfaces across desktop, mobile layouts.",
      "Worked with NoSQL databases and backend services to support application data storage and end-to-end functionality.",
      "Participated in feature development, testing, debugging, and performance improvements to ensure application reliability and quality.",
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
              My professional journey so far, where I gained hands-on experience
              and developed problem-solving skills.
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
