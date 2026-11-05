import type { Metadata } from "next";
import Link from "next/link";
import { plateById } from "@/content";
import { Plate } from "@/components/site/Plate";
import { Chapter, CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Maatschappelijk verantwoord ondernemen",
  description:
    "Schildersbedrijf Assink kiest producten met zorg, scheidt afval en werkt waar mogelijk met natuurverf op basis van lijnolie.",
};

export default function MvoPage() {
  return (
    <>
      <Chapter
        kicker="Lijnolie"
        title="Maatschappelijk verantwoord ondernemen"
        lede="Maatschappelijk en verantwoord ondernemen is voor Schildersbedrijf Assink vanzelfsprekend. Aandacht voor het milieu is geen aparte folder. Het zit in de verf die wij openmaken en in het afval dat wij meenemen."
        color="#2f4a3a"
        ink="#f3ece0"
        fan="4deg"
      />
      <div className="hero-stage" style={{ marginTop: "2rem" }}>
        <Plate plate={plateById("lijnzaad")} priority />
      </div>

      <Section name="zorg" title="Verf is geen onschuldig materiaal" color="#2f4a3a">
        <div className="measure stack">
          <p>
            In de schildersbranche wordt met verf en chemische middelen gewerkt. Dat vraagt om zorgvuldig handelen, met
            het oog op de persoonlijke veiligheid van onze mensen en van u als klant. Een blik hoort dicht, een doek
            hoort niet in de goot, en resten horen niet bij het gewone huisvuil.
          </p>
          <p>
            Daarnaast vinden wij het belangrijk om zorg te dragen voor het milieu. Wij kiezen onze producten met die
            twee dingen tegelijk in het hoofd: dat het werk goed blijft, en dat de middelen niet zwaarder zijn dan nodig.
          </p>
        </div>
      </Section>

      <Section
        name="afval"
        title="Weinig afval, en wat overblijft gescheiden"
        color="#7a4a2a"
        fan="-3deg"
        lede="Wij produceren zo min mogelijk afval en scheiden wat overblijft. Minder blikken openmaken dan het werk vraagt, is de eerste stap. De tweede is dat lege verpakkingen en resten niet op één hoop belanden."
      >
        <p className="measure">
          Wij zijn altijd op zoek naar moderne, milieuvriendelijke technieken. Niet als leuze, maar als iets dat wij in
          de bus kunnen meenemen naar de volgende klus. Wat wij inmiddels gebruiken waar het kan, is natuurverf op basis
          van lijnolie.
        </p>
      </Section>

      <Section
        name="lijnolie"
        title="Rembrandt mengde zijn verven al met lijnolie"
        color="#e26f1e"
        lede="Lijnolie is geen nieuwigheid. Het is een oud bindmiddel dat hout laat ademen en een verflaag geeft die met het hout mee kan werken, in plaats van er als een plastic vel op te liggen."
      >
        <div className="measure stack">
          <p>
            Waar de ondergrond erom vraagt, werken wij ermee. Waar een andere verf eerlijker is — binnen op een gestuukte
            wand, of op een plek die snel slijt — kiezen wij die. De zorg zit in de keuze, niet in één merk voor alles.
          </p>
          <p>
            Kortom: maatschappelijk verantwoord ondernemen zit verweven in onze bedrijfsvoering. Het motto blijft
            vakmanschap en kwaliteit. Die twee bijten elkaar niet.
          </p>
        </div>
        <p className="note">
          Hout dat nat wordt, heeft eerst herstel nodig en daarna een verflaag die het beschermt.{" "}
          <Link href="/houtrot-en-betonreparatie">Lees over houtrot</Link>.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
