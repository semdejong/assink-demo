import type { Metadata } from "next";
import { platesByTag } from "@/content";
import { Plate } from "@/components/site/Plate";
import { CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Staalboek",
  description:
    "Staalboek van Schildersbedrijf Assink: schilderwerk, decoratief werk, wandafwerking, houtrot- en betonreparatie.",
};

const groups = [
  {
    name: "schilderwerk",
    title: "Schilderwerk",
    color: "#e26f1e",
    fan: "-4deg",
    lede: "Buiten, op hoogte, aan de kerk en aan rietgedekte huizen.",
    tag: "schilderwerk",
  },
  {
    name: "decoratief",
    title: "Decoratief",
    color: "#7a4a2a",
    fan: "3deg",
    lede: "Bladgoud, houtimitatie, handgeschilderde keukens en een gerestylede tafel.",
    tag: "decoratief",
  },
  {
    name: "wand",
    title: "Wandafwerking",
    color: "#f0d2b4",
    fan: "-2deg",
    lede: "Stofvrij schuren, wanden spuiten, en behang dat diepte geeft.",
    tag: "wand",
  },
  {
    name: "houtrot",
    title: "Houtrot",
    color: "#4e301c",
    fan: "4deg",
    lede: "Voor en na de behandeling.",
    tag: "houtrot",
  },
  {
    name: "beton",
    title: "Betonreparatie",
    color: "#211c17",
    fan: "-5deg",
    lede: "Van de schade tot de geschilderde dorpel.",
    tag: "beton",
  },
  {
    name: "mvo",
    title: "Lijnolie",
    color: "#2f4a3a",
    fan: "2deg",
    lede: "Natuurverf op basis van lijnolie.",
    tag: "mvo",
  },
] as const;

export default function WerkPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Staalboek</p>
        <h1>Uitgevoerd werk</h1>
        <p className="lede">
          Elke plaat is een opname uit ons werk, met de naam en het materiaal eronder. De foto’s blijven op hun eigen
          formaat.
        </p>
        <CtaRow />
      </header>
      {groups.map((group) => (
        <Section key={group.name} name={group.name} title={group.title} color={group.color} fan={group.fan} lede={group.lede}>
          <div className="plates">
            {platesByTag(group.tag).map((plate) => (
              <Plate key={plate.id} plate={plate} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
