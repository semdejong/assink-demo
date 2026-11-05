import type { Metadata } from "next";
import Link from "next/link";
import { PlateSet } from "@/components/site/Plate";
import { CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Wandafwerking",
  description:
    "Wandafwerking door Schildersbedrijf Assink in Markelo: sauzen, spuitwerk, glasweefsel en behang van authentiek tot de laatste trends.",
};

export default function WandPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Wandafwerking</p>
        <h1>Wanden sauzen, spuiten en behangen</h1>
        <p className="lede">
          U kunt bij ons terecht voor verschillende soorten wandafwerking: sauzen, spuitwerk, het plakken van glasweefsel
          en behang van authentiek tot de laatste trends.
        </p>
        <CtaRow />
      </header>

      <Section name="sauzen" title="Sauzen" color="#f0d2b4" fan="-4deg">
        <p className="measure">
          Een gesausde wand is een rustige basis. Wij werken de ondergrond eerst bij en zetten daarna de kleur op.
        </p>
      </Section>

      <Section
        name="spuitwerk"
        title="Spuitwerk"
        color="#e26f1e"
        lede="Spuitwerk geeft een glad, egaal vlak. Vooraf schuren wij stofvrij, zodat de nieuwe laag op een schone wand komt."
      >
        <PlateSet ids={["schuren", "spuiten"]} />
      </Section>

      <Section name="glasweefsel" title="Glasweefsel" color="#2f4a3a" fan="3deg">
        <p className="measure">
          Glasweefsel plakken wij als stevige ondergrond die daarna geschilderd wordt.
        </p>
      </Section>

      <Section
        name="behang"
        title="Behang"
        color="#7a4a2a"
        lede="Behang van authentiek tot de laatste trends. Met een groot motief kan een smalle gang diepte krijgen, alsof de wand een stap naar achteren doet."
      >
        <PlateSet ids={["diepte"]} />
      </Section>

      <Section name="btw" title="Btw op schilderwerk" color="#2f4a3a">
        <p className="measure">
          Het lage btw-tarief van 9 procent geldt voor binnen- en buitenschilderwerk aan een particuliere woning ouder
          dan twee jaar, bestemd voor permanente bewoning. Of dat voor uw wandafwerking van toepassing is, zeggen wij u
          graag. <Link href="/schilderwerk">Lees de afspraak bij schilderwerk</Link>.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
