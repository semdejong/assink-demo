import type { Metadata } from "next";
import Link from "next/link";
import { PlateSet } from "@/components/site/Plate";
import { Chapter, CtaRow, LayerRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Wandafwerking",
  description:
    "Wandafwerking door Schildersbedrijf Assink in Markelo: sauzen, spuitwerk, glasweefsel en behang van authentiek tot de laatste trends.",
};

export default function WandPage() {
  return (
    <>
      <Chapter
        kicker="Wanden"
        title="Wanden sauzen, spuiten en behangen"
        lede="U kunt bij ons terecht voor verschillende soorten wandafwerking: sauzen, spuitwerk, het plakken van glasweefsel en behang van authentiek tot de laatste trends. De wand krijgt eerst een eerlijke ondergrond, daarna de laag die u heeft gekozen."
        color="#f0d2b4"
        fan="-5deg"
      >
        <CtaRow />
      </Chapter>

      <Section
        name="lagen"
        title="Vijf manieren om een wand af te maken"
        color="#e26f1e"
        lede="Niet elke wand vraagt hetzelfde. Soms is sauzen genoeg. Soms hoort er een doek onder, of een behang dat de kamer van richting verandert."
      >
        <LayerRow />
      </Section>

      <Section
        name="spuitwerk"
        title="Stofvrij schuren, daarna spuiten"
        color="#7a4a2a"
        fan="3deg"
        lede="Spuitwerk verraadt elke oneffenheid. Daarom schuren wij eerst stofvrij, met afzuiging, en zetten wij de verf pas als de wand schoon is."
      >
        <PlateSet ids={["schuren", "spuiten"]} />
        <p className="note">
          De platen tonen het werk zelf: een schuurmachine met afzuiging, en een lichte wand die vanaf de trap gespoten
          wordt.
        </p>
      </Section>

      <Section
        name="behang"
        title="Met behang diepte creëren"
        color="#4e301c"
        lede="Een smalle gang heeft weinig muur en veel deuren. Een groot motief kan die muur laten wijken, alsof er een vertrek achter zit."
      >
        <div className="measure stack">
          <p>
            Op de plaat hangt het Melkmeisje van Vermeer op behangformaat. De deuren links en rechts blijven gewoon
            deuren. Het schilderij doet de rest: de gang krijgt diepte zonder dat er een wand wordt verzet.
          </p>
          <p>
            Behang kiezen wij met u, van een authentiek patroon tot een actuele baan. Wij plakken het strak, inclusief
            de naden die in een hal op ooghoogte blijven kijken.
          </p>
        </div>
        <PlateSet ids={["diepte"]} />
      </Section>

      <Section name="btw" title="Wat het lage tarief hier wel en niet dekt" color="#2f4a3a" fan="-2deg">
        <div className="measure stack">
          <p>
            Het lage btw-tarief van 9 procent geldt voor binnen- en buitenschilderwerk aan een particuliere woning ouder
            dan twee jaar, bestemd voor permanente bewoning. Sauzen en spuiten vallen daar vaak onder. Behang is een
            andere afwerking.
          </p>
          <p>
            Wij zeggen u vooraf of het lage tarief voor uw opdracht van toepassing is.{" "}
            <Link href="/schilderwerk">De afspraak staat bij schilderwerk</Link>.
          </p>
        </div>
        <CtaRow />
      </Section>
    </>
  );
}
