import type { Metadata } from "next";
import { platesByTag } from "@/content";
import { Plate } from "@/components/site/Plate";
import { Chapter, CtaRow, Section } from "@/components/site/Parts";

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
      <Chapter
        kicker="Platen"
        title="Uitgevoerd werk"
        lede="Elke plaat is een opname uit ons werk, met de naam en het materiaal eronder. De foto’s blijven op hun eigen formaat, zoals een staal in een waaier zijn eigen maat houdt."
        color="#4e301c"
        ink="#f3ece0"
        fan="-4deg"
      >
        <CtaRow />
      </Chapter>

      <Section
        name="leeswijzer"
        title="Hoe u dit staalboek leest"
        color="#e4d3b8"
        fan="3deg"
        lede="Eerst de opname, dan de naam, dan het materiaal. Zo staat het onder elke plaat."
      >
        <div className="ways">
          <article style={{ ["--rule-color" as string]: "#e26f1e" }}>
            <h3>De maat</h3>
            <p>Een smalle opname blijft smal. Wij rekken geen foto op tot de rand van het scherm.</p>
          </article>
          <article style={{ ["--rule-color" as string]: "#2f4a3a" }}>
            <h3>De naam</h3>
            <p>Onder de plaat staat wat u ziet: een kerk, een keuken, een dorpel, een blad met nerf.</p>
          </article>
          <article style={{ ["--rule-color" as string]: "#7a4a2a" }}>
            <h3>Het materiaal</h3>
            <p>Daarnaast staat waarmee het gemaakt is: schilderwerk, bladgoud, behang, mortel, lijnolie.</p>
          </article>
        </div>
      </Section>
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
