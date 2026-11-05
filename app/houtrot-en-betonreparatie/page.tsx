import type { Metadata } from "next";
import { PlateSet } from "@/components/site/Plate";
import { CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Houtrot- en betonreparatie",
  description:
    "Houtrot- en betonreparatie door Schildersbedrijf Assink in Markelo. Reparatie en deelvervanging, met advies over de staat van het hout.",
};

export default function HoutrotPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Houtrot en beton</p>
        <h1>Houtrot- en betonreparatie</h1>
        <p className="lede">
          Het herkennen, voorkomen en behandelen van houtrot vereist vakwerk. Wij geven advies over de staat van het
          hout en voeren de reparatie uit.
        </p>
        <CtaRow />
      </header>

      <Section
        name="oorzaak"
        title="Hoe houtrot ontstaat"
        color="#7a4a2a"
        lede="De snelheid waarmee houtrot ontstaat, hangt af van vier elementen: vocht, warmte, zuurstof en een voedingsbodem. De kwaliteit van de ondergrond speelt daarbij ook een belangrijke rol."
      >
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
            aangetast. Dan is vervanging niet meer te voorkomen.
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
      </Section>

      <Section
        name="beton"
        title="Betonreparatie, voor en na"
        color="#211c17"
        fan="4deg"
        lede="Een uitgebroken raamdorpel herstellen wij in delen: de schade, de vulling, en de geschilderde afwerking."
      >
        <PlateSet ids={["beton-1", "beton-2", "beton-3", "beton-4"]} />
        <CtaRow />
      </Section>
    </>
  );
}
