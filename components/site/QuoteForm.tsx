"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export function QuoteForm({ withAnchor = true }: { withAnchor?: boolean }) {
  const [done, setDone] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const anchor = withAnchor ? "offerte" : undefined;

  useEffect(() => {
    if (done) statusRef.current?.focus();
  }, [done]);

  if (done) {
    return (
      <div id={anchor} className="confirm stack" role="status" tabIndex={-1} ref={statusRef}>
        <h3>Dank u wel</h3>
        <p>
          Wij hebben uw gegevens niet verzonden: dit formulier is een voorbeeld op deze pagina. Voor een offerte belt u{" "}
          <a href={content.phones[0].href} data-cta={ctaType(content.phones[0].href)}>
            {content.phones[0].label}
          </a>{" "}
          of mailt u{" "}
          <a href={`mailto:${content.email}`} data-cta={ctaType(`mailto:${content.email}`)}>
            {content.email}
          </a>
          . Dan nemen wij uw aanvraag in behandeling.
        </p>
      </div>
    );
  }

  return (
    <form
      id={anchor}
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      <div className="form-grid two">
        <label className="field">
          <span>Naam</span>
          <input name="naam" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Telefoon</span>
          <input name="telefoon" type="tel" autoComplete="tel" required />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>Plaats</span>
          <input name="plaats" type="text" autoComplete="address-level2" required />
        </label>
        <label className="field">
          <span>Binnen of buiten</span>
          <select name="ligging" defaultValue="" required>
            <option value="" disabled>
              Maak een keuze
            </option>
            {content.form.ligging.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Soort werk</span>
          <select name="soort" defaultValue="" required>
            <option value="" disabled>
              Maak een keuze
            </option>
            {content.form.soort.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="field field-wide">
          <span>Manier van werken</span>
          <select name="manier" defaultValue="" required>
            <option value="" disabled>
              Maak een keuze
            </option>
            {content.form.manier.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="field field-wide">
          <span>Toelichting</span>
          <textarea name="toelichting" rows={5} />
        </label>
      </div>
      <div className="cta-row">
        <button type="submit" className="btn btn-primary" data-cta="offerte">
          Offerte aanvragen
        </button>
      </div>
    </form>
  );
}
