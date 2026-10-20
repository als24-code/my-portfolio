import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";


const cls = (v, extra = "") => `btn btn--${v} ${extra}`.trim();

export function Button({ variant = "solid", className, children, ...rest }) {
  return <button className={cls(variant, className)} {...rest}>{children}</button>;
}

export function ButtonLink({ variant = "solid", className, children, ...rest }) {
  const external = typeof rest.href === "string" && /^https?:/.test(rest.href);
  return (
    <a className={cls(variant, className)} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
