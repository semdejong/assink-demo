import type { Metadata } from "next";
import Link from "next/link";
import { PlateSet } from "@/components/site/Plate";
import { Chapter, CtaRow, ElementRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Houtrot- en betonreparatie",
  description:
    "Houtrot- en betonreparatie door Schildersbedrijf Assink in Markelo. Reparatie en deelvervanging, met advies over de staat van het hout.",
};

export default function HoutrotPage() {
  return (
    <>
      <Chapter
        kicker="Houtrot"
        title="Houtrot- en betonreparatie"
        lede="Het herkennen, voorkomen en behandelen van houtrot vereist vakwerk. Wij geven advies over de staat van het hout en voeren de reparatie uit."
        color="#7a4a2a"
        ink="#f3ece0"
        fan="4deg"
      >
        <CtaRow />
      </Chapter>

      <Section
        name="oorzaak"
        title="Vier elementen, één voedingsbodem"
        color="#7a4a2a"
        lede="De snelheid waarmee houtrot ontstaat, hangt af van vocht, warmte, zuurstof en een voedingsbodem. De kwaliteit van de ondergrond speelt daarbij ook een belangrijke rol."
      >
        <ElementRow />
        <div className="measure stack">
          <p>
            Slecht onderhoud of onvakkundig schilderwerk is vaak een oorzaak van houtrot. Verf die het hout niet meer
            beschermt, laat vocht toe. Daarna gaat het sneller dan het van buitenaf lijkt.
          </p>
          <p>
            Werd er vroeger bij constatering van houtrot het complete kozijn, de deur of een andere ondergrond vervangen,
            tegenwoordig kan vaak worden volstaan met een reparatie of een deelvervanging.
          </p>
          <p>
            Wanneer te lang wordt gewacht met het nodige en vakkundige onderhoud, kan een hele ondergrond worden
            aangetast. Dan is vervanging niet meer te voorkomen. Wie op tijd belt, houdt de kans op reparatie of
            deelvervanging.
          </p>
        </div>
      </Section>

      <Section
        name="houtrot"
        title="Houtrot, voor en na"
        color="#4e301c"
        fan="-3deg"
        lede="Hetzelfde kozijn en dezelfde rabatdelen, vóór de behandeling en na herstel en schilderwerk."
      >
        <PlateSet ids={["houtrot-voor", "houtrot-na"]} />
        <p className="note">
          De eerste plaat toont het kozijn en de rabatdelen vóór de behandeling. De tweede toont hetzelfde werk na herstel
          en schilderwerk. De platen blijven op het formaat van de opname.
        </p>
      </Section>

      <Section
        name="beton"
        title="Betonreparatie, voor en na"
        color="#211c17"
        fan="4deg"
        lede="Een uitgebroken raamdorpel herstellen wij in delen: de schade, de vulling, en de geschilderde afwerking."
      >
        <PlateSet ids={["beton-1", "beton-2", "beton-3", "beton-4"]} />
        <p className="note">
          De reeks loopt van de open schade, via de mortel, naar de geschilderde dorpel. Beton en hout vragen een
          andere reparatie. Beide werken wij schilderend af.
        </p>
        <p className="note">
          Een verflaag die het hout weer beschermt, hoort bij het herstel. Waar het kan, is dat natuurverf op basis van
          lijnolie. <Link href="/mvo">Lees hoe wij die keuze maken</Link>.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
