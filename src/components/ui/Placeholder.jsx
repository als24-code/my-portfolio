export function Placeholder({
  label,
  variant = "a",
  className = "",
  img = "",
}) {
  return (
    <div
      className={`placeholder placeholder--${variant} ${className}`}
      role="img"
      aria-label={label}
    >
      <img src={img} />
    </div>
  );
}
