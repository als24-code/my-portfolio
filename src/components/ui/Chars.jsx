/** Splits text into per-character spans for GSAP animation. */
export function Chars({ text, className = "" }) {
  return (
    <span className={`chars ${className}`} aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} className="chars__mask" aria-hidden="true">
          <span className="chars__char">{ch === " " ? "\u00A0" : ch}</span>
        </span>
      ))}
    </span>
  );
}
