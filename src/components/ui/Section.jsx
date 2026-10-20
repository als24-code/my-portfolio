export function Section({ id, modifier, children }) {
  return (
    <section id={id} className={`section ${modifier ? `section--${modifier}` : ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}
