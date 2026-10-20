"use client";
import { links, nav, site } from "@/data/site";
import { useApp } from "@/components/providers/AppProvider";

export function Footer() {
  const { replayIntro } = useApp();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <FooterCol title="Index">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="footer__link">{n.label} <span className="footer__key">{n.k}</span></a>
            ))}
          </FooterCol>
          <FooterCol title="Elsewhere">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="footer__link" target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{l.label} ↗</a>
            ))}
          </FooterCol>
          <FooterCol title="Colophon">
            <p className="footer__text">Architected with intention.</p>
            <p className="footer__text">Typography: {site.tools}</p>
            <p className="footer__text">Independent Software Engineer</p>
            <p className="footer__text">Berlin · Worldwide</p>
            <button className="footer__link footer__replay" onClick={replayIntro}>Replay intro ↺</button>
          </FooterCol>
        </div>
        <div className="footer__base">
          <p>© {site.year} {site.name}. All rights reserved.</p>
          <a href="#top" className="footer__link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div className="footer__col">
      <h3 className="footer__title">{title}</h3>
      {children}
    </div>
  );
}
