import type { Metadata } from "next";
import { plateById } from "@/content";
import { Fan } from "@/components/site/Fan";
import { Plate, PlateSet } from "@/components/site/Plate";
import { Chapter, CtaRow, Section } from "@/components/site/Parts";
import { chipStyle } from "@/lib/chip";

export const metadata: Metadata = {
  title: "Decoratief schilderwerk",
  description:
    "Decoratief schilderwerk door Schildersbedrijf Assink: bladgoud, houtimitatie, handgeschilderde keukens en het restylen van een oude tafel.",
};

export default function DecoratiefPage() {
  return (
    <>
      <Chapter
        kicker="Hand"
        title="Decoratief schilderwerk"
        lede="Naast het onderhoudswerk schilderen wij wat een vaste hand vraagt: bladgoud, houtimitatie, handgeschilderde keukens en meubels die opnieuw worden afgewerkt."
        color="#4e301c"
        ink="#f3ece0"
        fan="5deg"
      >
        <CtaRow />
      </Chapter>

      <section className="section gold-block" data-section="bladgoud" id="bladgoud">
        <Fan>
          <span className="chip" style={chipStyle({ fan: "-6deg", color: "#b88a2e", ink: "#211c17" })}>
            <span className="chip-label">Bladgoud</span>
          </span>
        </Fan>
        <h2>Bladgoud aanbrengen</h2>
        <p className="lede">
          Bladgoud leggen wij op lijstwerk en ornament. De ondergrond moet strak zijn, anders gaat het blad plooien. De
          plaat toont het blad op een gesneden ornament, naast een smalle vergulde lat.
        </p>
        <Plate plate={plateById("bladgoud")} />
      </section>

      <Section
        name="houtimitatie"
        title="Houtimitatie"
        color="#7a4a2a"
        lede="Op een binnendeur schilderen wij de nerf en de tekening van hout. De deur hieronder draagt een eiken imitatie, glanzend afgewerkt."
      >
        <div className="measure stack">
          <p>
            Houtimitatie is schilderwerk dat naar hout moet kijken. De nerf loopt door, de glans volgt het vlak, en de
            deur blijft een deur: scharnieren, kruk en kozijn blijven op hun plaats.
          </p>
        </div>
        <PlateSet ids={["houtimitatie"]} />
      </Section>

      <Section
        name="keukens"
        title="Handgeschilderde keukens"
        color="#4e301c"
        fan="3deg"
        lede="Keukens schilderen wij met de hand. De grijze keuken is uitgevoerd in samenwerking met Keukenhof van Holten. Daarnaast een keuken in het zwart."
      >
        <div className="measure stack">
          <p>De fronten worden front voor front met de hand geschilderd, in de kleur die de platen laten zien.</p>
        </div>
        <PlateSet ids={["keuken-grijs", "keuken-zwart"]} />
      </Section>

      <Section
        name="tafel"
        title="Een oude tafel restylen"
        color="#e26f1e"
        fan="-2deg"
        lede="Een bestaand blad schuren wij bij en werken wij opnieuw af, zodat de tekening van het hout weer leesbaar wordt."
      >
        <div className="measure stack">
          <p>
            De ene plaat staat dicht op de nerf, de andere op het schuren van het blad. Eerst het oude oppervlak
            openmaken, daarna de nieuwe afwerking. De tafel blijft de tafel die u heeft.
          </p>
        </div>
        <PlateSet ids={["tafel-detail", "tafel-schuren"]} />
      </Section>

      <Section
        name="gebouwen"
        title="Bijzondere gebouwen"
        color="#2f4a3a"
        lede="Hetzelfde vakmanschap zetten wij in op gebouwen die om zorg vragen: Museum Eungs Schöppe en de hervormde kerk, aan het naambord, de gevel, de ramen en de dakgoten."
      >
        <div className="measure stack">
          <p>
            Bij Museum Eungs Schöppe staan het naambord en de gevel in het staalboek. Bij de hervormde kerk zijn het de
            ramen en de dakgoten. Letters, metselwerk en hout vragen elk een eigen hand, en die hand is dezelfde.
          </p>
        </div>
        <PlateSet ids={["museum-bord", "museum-gevel", "kerk"]} />
        <CtaRow />
      </Section>
    </>
  );
}
