"use client";

import { useRef, useState } from "react";
import useCommonAnimation from "@/hooks/useCommonAnimation";
import { CONTACT_DETAILS, FORM_FIELDS, SOCIALS_CONTACT } from "@/data";
import { FiArrowRight } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState("");

  const sectionRef = useRef(null);
  useCommonAnimation(sectionRef, 0.8);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    console.log(data);

    setStatus("Thanks! Your message has been sent.");
    event.currentTarget.reset();
  }

  return (
    <section className="section section--auto" id="contact" ref={sectionRef}>
      <span className="blob blob--bottom-right" aria-hidden="true" />
      <div className="dot-grid dot-grid--bottom-right" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="dot-grid__dot" />
        ))}
      </div>

      <div className="contact container">
        {/* ---------- Heading ---------- */}
        <div className="section-heading prereveal-upward">
          <div className="section-heading__content">
            <span className="section-heading__eyebrow">Get in touch</span>
            <h2 className="section-heading__title">Let&apos;s work together</h2>
            <p className="section-heading__text">
              I&apos;m always open to new opportunities, collaborations or just
              a friendly chat. Feel free to reach out!
            </p>
          </div>
        </div>

        <div className="contact__grid prereveal-downward">
          {/* ---------- Form ---------- */}
          <form className="card card--padded form" onSubmit={handleSubmit}>
            {FORM_FIELDS.map(({ id, label, type, placeholder, Icon }) => (
              <div key={id} className="form__field">
                <span
                  className="form__icon btn btn--tertiary btn--icon-sm"
                  aria-hidden="true"
                >
                  <Icon />
                </span>

                <div className="form__control">
                  <label htmlFor={id} className="form__label">
                    {label}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={id}
                      name={id}
                      className="form__textarea"
                      placeholder={placeholder}
                      required
                    />
                  ) : (
                    <input
                      id={id}
                      name={id}
                      type={type}
                      className="form__input"
                      placeholder={placeholder}
                      required
                    />
                  )}
                </div>
              </div>
            ))}

            <button type="submit" className="btn btn--primary btn--block">
              Send Message
              <FiArrowRight className="btn__icon" aria-hidden="true" />
            </button>

            {status && (
              <p className="form__status" role="status">
                {status}
              </p>
            )}
          </form>

          {/* ---------- Contact info ---------- */}
          <aside className="contact-info" aria-label="Contact details">
            {CONTACT_DETAILS.map(({ label, value, Icon }) => (
              <div key={label} className="contact-info__item">
                <span
                  className="btn btn--tertiary btn--icon btn--static"
                  aria-hidden="true"
                >
                  <Icon />
                </span>
                <div>
                  <span className="contact-info__label">{label}</span>
                  <span className="contact-info__value">{value}</span>
                </div>
              </div>
            ))}

            <hr className="contact-info__divider" />

            <p className="contact-info__follow">Follow Me</p>
            <ul className="socials">
              {SOCIALS_CONTACT.map(({ label, href, Icon }) => (
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
          </aside>
        </div>
      </div>
    </section>
  );
}
