export function SectionHead({ title, hint, sub }) {
  return (
    <header className="section-head" data-reveal>
      <div>
        <h2 className="section-head__title">{title}</h2>
        {sub && <p className="section-head__sub">{sub}</p>}
      </div>
      {hint && <p className="section-head__hint">{hint}</p>}
    </header>
  );
}
