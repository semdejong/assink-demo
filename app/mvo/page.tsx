import type { Metadata } from "next";
import { plateById } from "@/content";
import { Plate } from "@/components/site/Plate";
import { CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Maatschappelijk verantwoord ondernemen",
  description:
    "Schildersbedrijf Assink kiest producten met zorg, scheidt afval en werkt waar mogelijk met natuurverf op basis van lijnolie.",
};

export default function MvoPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Mvo</p>
        <h1>Maatschappelijk verantwoord ondernemen</h1>
        <p className="lede">
          Maatschappelijk en verantwoord ondernemen is voor Schildersbedrijf Assink vanzelfsprekend. Aandacht voor het
          milieu hoort bij het werk.
        </p>
      </header>
      <div className="hero-stage" style={{ marginTop: "2rem" }}>
        <Plate plate={plateById("lijnzaad")} priority />
      </div>

      <Section name="zorg" title="Producten, afval en veiligheid" color="#2f4a3a">
        <div className="measure stack">
          <p>
            In de schildersbranche wordt met verf en chemische middelen gewerkt. Dat vraagt om zorgvuldig handelen, met
            het oog op de persoonlijke veiligheid van onze mensen en van u als klant. Daarnaast vinden wij het belangrijk
            om zorg te dragen voor het milieu.
          </p>
          <p>
            Wij kiezen zorgvuldig onze producten, produceren zo min mogelijk afval en scheiden het overblijvende afval.
            Wij zijn altijd op zoek naar moderne, milieuvriendelijke technieken.
          </p>
        </div>
      </Section>

      <Section
        name="lijnolie"
        title="Natuurverf op basis van lijnolie"
        color="#7a4a2a"
        fan="-4deg"
        lede="Waar het kan, maken wij gebruik van natuurverf op basis van lijnolie. Een leuk detail: Rembrandt mengde zijn verven al met lijnolie."
      >
        <p className="measure">Kortom: maatschappelijk verantwoord ondernemen zit verweven in onze bedrijfsvoering.</p>
        <CtaRow />
      </Section>
    </>
  );
}
