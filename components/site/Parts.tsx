import Link from "next/link";
import type { ReactNode } from "react";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { Mark } from "./Fan";

const glassSwatches = ["#2f4a3a", "#1f3329", "#7a4a2a", "#4e301c", "#e26f1e", "#f0d2b4", "#3e5c4a", "#5c3820", "#211c17"];

export function Section({
  id,
  name,
  title,
  color = content.colors.primary,
  fan,
  lede,
  children,
  className,
}: {
  id?: string;
  name: string;
  title?: string;
  color?: string;
  fan?: string;
  lede?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} data-section={name} className={className ? `section ${className}` : "section"}>
      {title ? (
        <h2 className="marked">
          <Mark color={color} fan={fan} />
          {title}
        </h2>
      ) : null}
      {lede ? <p className="lede">{lede}</p> : null}
      {children}
    </section>
  );
}

export function PhoneList() {
  return (
    <div className="phone-list">
      {content.phones.map((phone) => (
        <a key={phone.href} className="phone-link" href={phone.href} data-cta={ctaType(phone.href)}>
          <span>{phone.kind}</span>
          {phone.label}
        </a>
      ))}
    </div>
  );
}

export function CtaRow({ href = content.offerteHref }: { href?: string }) {
  return (
    <div className="cta-row">
      <Link href={href} data-cta={ctaType(href)} className="btn btn-primary">
        Offerte aanvragen
      </Link>
      <a className="btn btn-ghost" href={content.phones[0].href} data-cta={ctaType(content.phones[0].href)}>
        Bel {content.phones[0].label}
      </a>
    </div>
  );
}

export function WaysBlock({ lede }: { lede?: string }) {
  return (
    <Section id="werkwijze" name="werkwijze" title="Drie manieren van werken" color="#e26f1e" lede={lede}>
      <div className="ways">
        {content.ways.map((way) => (
          <article key={way.title} style={{ ["--rule-color" as string]: way.color }}>
            <h3>{way.title}</h3>
            <p>{way.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function BtwBlock() {
  return (
    <Section id="btw" name="btw" title={content.btw.title} color="#2f4a3a" fan="3deg">
      <div className="btw">
        <div className="btw-bar" aria-hidden />
        <div className="stack">
          <p className="btw-label">9%</p>
          <p>{content.btw.text}</p>
        </div>
      </div>
    </Section>
  );
}

export function GlassList() {
  return (
    <ul className="catalogue">
      {content.glass.map((item, index) => (
        <li key={item} style={{ ["--swatch" as string]: glassSwatches[index % glassSwatches.length] }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function NenNote() {
  return (
    <p className="nen">
      Wij houden rekening met de veiligheid volgens de laatste NEN-normen, om het risico op doorval te voorkomen.
    </p>
  );
}

export function AddressFacts() {
  return (
    <dl className="facts">
      <div>
        <dt>Adres</dt>
        <dd>
          {content.company.name}
          <br />
          {content.address.street}
          <br />
          {content.address.postal} {content.address.city}
          <br />
          <a href={content.mapsUrl} target="_blank" rel="noopener noreferrer">
            Bekijk het adres op de kaart
          </a>
        </dd>
      </div>
      <div>
        <dt>Telefoon</dt>
        <dd>
          {content.phones.map((phone) => (
            <div key={phone.href}>
              <a href={phone.href} data-cta={ctaType(phone.href)}>
                {phone.kind} {phone.label}
              </a>
            </div>
          ))}
        </dd>
      </div>
      <div>
        <dt>E-mail</dt>
        <dd>
          <a href={`mailto:${content.email}`} data-cta={ctaType(`mailto:${content.email}`)}>
            {content.email}
          </a>
        </dd>
      </div>
      <div>
        <dt>KvK</dt>
        <dd>{content.kvk}</dd>
      </div>
    </dl>
  );
}
