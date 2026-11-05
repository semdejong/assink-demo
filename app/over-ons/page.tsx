import type { Metadata } from "next";
import Link from "next/link";
import { content, plateById } from "@/content";
import { Plate } from "@/components/site/Plate";
import { CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Schildersbedrijf Assink in Markelo wordt gevoerd door Peter en Dave Assink. Erkend leerbedrijf. Motto: vakmanschap en kwaliteit.",
};

export default function OverOnsPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Over ons</p>
        <h1>Peter en Dave Assink</h1>
        <p className="lede">
          Schildersbedrijf Assink is een klein professioneel schildersbedrijf in Markelo. Peter en Dave Assink voeren het
          bedrijf. Wij werken voor particuliere en zakelijke opdrachtgevers. Ons motto is vakmanschap en kwaliteit.
        </p>
      </header>
      <div className="hero-stage" style={{ marginTop: "2rem" }}>
        <Plate plate={plateById("scaffold")} priority />
      </div>

      <Section name="leerbedrijf" title="Erkend leerbedrijf" color="#2f4a3a" fan="-3deg">
        <div className="leer-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="leer-mark"
            src={content.leerbedrijf.src}
            alt={content.leerbedrijf.alt}
            width={content.leerbedrijf.width}
            height={content.leerbedrijf.height}
          />
          <div className="measure stack">
            <p>
              Wij zijn een erkend leerbedrijf. Nieuwe schilders leren het vak bij ons in de praktijk: voorbereiden,
              schilderen, glas zetten en herstellen, op de steiger en in huis.
            </p>
            <p>Zo blijft het vakmanschap niet bij ons alleen.</p>
          </div>
        </div>
      </Section>

      <Section name="werk" title="Wat u bij ons kunt laten doen" color="#e26f1e">
        <ul className="catalogue">
          <li style={{ ["--swatch" as string]: "#e26f1e" }}>
            <Link href="/schilderwerk">Binnen- en buitenschilderwerk</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#f0d2b4" }}>
            <Link href="/wandafwerking">Wandafwerking</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#2f4a3a" }}>
            <Link href="/glas">Glas</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#7a4a2a" }}>
            <Link href="/houtrot-en-betonreparatie">Houtrot- en betonreparatie</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#4e301c" }}>
            <Link href="/decoratief-schilderwerk">Decoratief schilderwerk</Link>
          </li>
        </ul>
      </Section>

      <Section
        name="werkgebied"
        title="Waar wij werken"
        color="#e4d3b8"
        fan="4deg"
        lede="Wij werken vanuit Fokkerstraat 55 in Markelo, in Markelo en de Hof van Twente."
      >
        <p className="measure" style={{ marginTop: "1.25rem" }}>
          Met vriendelijke groet,
          <br />
          {content.company.signOff}
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
