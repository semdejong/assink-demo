"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { Fan, chipStyle } from "./Fan";

const sheetLinks = [
  ...content.nav,
  { href: "/mvo", label: "MVO", fan: "0deg", color: "#2f4a3a", ink: "#f3ece0" },
  { href: "/privacy", label: "Privacy", fan: "0deg", color: "#e4d3b8", ink: "#211c17" },
];

export function NavChrome() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const offerteHref = path === "/" || path === "/schilderwerk" || path === "/contact" ? "#offerte" : content.offerteHref;
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const sheetId = useId();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !sheetRef.current) return;
      const items = sheetRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [open]);

  return (
    <div className="contents">
      <header className="site-header" data-section="header">
        <div className="site-header-bar">
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={content.company.logo} alt="Schildersbedrijf Assink" width={763} height={170} />
          </Link>
          <div className="header-phones">
            {content.phones.map((phone) => (
              <a key={phone.href} href={phone.href} data-cta={ctaType(phone.href)}>
                {phone.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-ghost menu-btn"
            aria-expanded={open}
            aria-controls={sheetId}
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
          <Link href={offerteHref} data-cta={ctaType(offerteHref)} className="btn btn-primary">
            <span className="btn-long">Offerte aanvragen</span>
            <span className="btn-short">Offerte</span>
          </Link>
        </div>
        {open ? (
          <div className="sheet" onClick={() => setOpen(false)}>
            <div
              ref={sheetRef}
              id={sheetId}
              className="sheet-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              data-section="menu"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sheet-head">
                <h2 id={titleId}>Inhoud</h2>
                <button ref={closeRef} type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
                  Sluiten
                </button>
              </div>
              <nav aria-label="Alle pagina's">
                <Link href="/">Begin</Link>
                {sheetLinks.map((item) => (
                  <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>
                    <span className="sheet-swatch" style={{ background: item.color }} aria-hidden />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
        <div className="mobile-bar" data-section="snelkeuze">
          <a className="btn btn-ghost" href={content.phones[0].href} data-cta={ctaType(content.phones[0].href)}>
            Bel {content.phones[0].label}
          </a>
          <Link href={offerteHref} data-cta={ctaType(offerteHref)} className="btn btn-primary">
            Offerte
          </Link>
        </div>
      </header>
      <nav className="site-index" aria-label="Onderdelen" data-section="navigatie">
        <p className="index-kicker">Inhoud</p>
        <Fan className="index-fan">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="chip"
              style={chipStyle(item)}
              aria-current={path === item.href ? "page" : undefined}
            >
              <span className="chip-label">{item.label}</span>
            </Link>
          ))}
        </Fan>
      </nav>
    </div>
  );
}
