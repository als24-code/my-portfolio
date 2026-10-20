/** Small illustrated "Figma file" preview per capability. */
export function CapabilityPreview({ id }) {
  switch (id) {
    case "ux":
      return (
        <div className="preview preview--flow">
          {["Sign up", "Verify", "Set up", "Done"].map((s, i, a) => (
            <div key={s} className="preview__step">
              <span className="preview__chip">{s}</span>
              {i < a.length - 1 && <span className="preview__arrow">→</span>}
              {i === a.length - 1 && <span className="preview__tick">✓</span>}
            </div>
          ))}
        </div>
      );
    case "system":
      return (
        <div className="preview preview--system">
          <p className="preview__tag">◆ Main component</p>
          <span className="preview__button">Button</span>
          <p className="preview__tag">◇ Instances · 9</p>
          <div className="preview__grid">{Array.from({ length: 9 }, (_, i) => <span key={i} className="preview__button preview__button--sm">Button</span>)}</div>
        </div>
      );
    case "ai":
      return (
        <div className="preview preview--ai">
          <p className="preview__tag">Generating 9 directions…</p>
          <div className="preview__grid">{Array.from({ length: 9 }, (_, i) => <span key={i} className={`preview__tile ${i === 4 ? "preview__tile--picked" : ""}`} />)}</div>
          <p className="preview__tag">Picked · refined by hand</p>
        </div>
      );
    case "ui":
      return (
        <div className="preview preview--ui">
          <span className="preview__chip">Frame</span><span className="preview__chip">8pt</span><span className="preview__chip">Aa</span>
          <div className="preview__grid preview__grid--8">{Array.from({ length: 32 }, (_, i) => <span key={i} className="preview__cell" />)}</div>
        </div>
      );
    case "proto":
      return (
        <div className="preview preview--flow">
          <span className="preview__chip">Screen</span><span className="preview__arrow">→</span>
          <span className="preview__chip">Tap</span><span className="preview__arrow">→</span>
          <span className="preview__chip">Result</span>
        </div>
      );
    default:
      return (
        <div className="preview preview--flow">
          <span className="preview__chip">Many options</span><span className="preview__arrow">→</span>
          <span className="preview__chip preview__chip--hot">The one that matters</span>
        </div>
      );
  }
}
