import type { Metadata } from "next";
import Link from "next/link";
import { Chapter, CtaRow, GlassList, NenNote, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Glas en beglazing",
  description:
    "Glas door Schildersbedrijf Assink: gefigureerd glas, veiligheidsglas, HR++, glas in lood, spiegels en glazen deuren. Veilig volgens de laatste NEN-normen.",
};

export default function GlasPage() {
  return (
    <>
      <Chapter
        kicker="Glas"
        title="Alle soorten glas"
        lede="Heeft u glasschade of ruitbreuk, dan doen wij ons best dit zo snel mogelijk te verhelpen. Is de ruit of het isolatieglas niet voorradig, dan zorgen wij voor een noodoplossing, zodat de opening dicht zit tot de juiste ruit er is."
        color="#2f4a3a"
        ink="#f3ece0"
        fan="-4deg"
      >
        <CtaRow />
      </Chapter>

      <Section
        name="soorten"
        title="Een kleine greep"
        color="#2f4a3a"
        lede="U kunt bij ons terecht voor onder meer deze glassoorten. Het is geen gesloten lijst. Staat uw wens er niet bij, bel ons gerust en vertel wat er in de sponning zit."
      >
        <GlassList detailed />
      </Section>

      <Section
        name="schade"
        title="Als de ruit er al uit ligt"
        color="#1f3329"
        fan="3deg"
        lede="Glasschade komt zelden gelegen. Wij kijken eerst of het juiste glas op voorraad is. Zo niet, dan dichten wij de opening tijdelijk, en plaatsen wij de definitieve ruit zodra die er is."
      >
        <div className="measure stack">
          <p>
            De noodoplossing houdt wind en regen tegen tot het glas dat u wilt — enkel, figuur of isolerend — gezet kan
            worden.
          </p>
          <p>
            Bij een monumentaal patroon, zoals glas in lood, overleggen wij of het oude glas terugkomt, eventueel
            verpakt in isolerende beglazing.
          </p>
        </div>
      </Section>

      <Section name="comfort" title="Warmte binnen, zon naar keuze" color="#e26f1e" fan="-3deg">
        <div className="measure stack">
          <p>
            HR++ en andere isolerende beglazing plaatsen wij wanneer u de woning beter wilt isoleren. De coating en de
            spouw doen het werk; het aanzicht van het kozijn blijft van u.
          </p>
          <p>
            Zonwerende beglazing kiest u waar een pui op de zon staat en het vertrek te snel opwarmt. Dat is een andere
            vraag dan isolatie, en wij benoemen het verschil voordat wij bestellen.
          </p>
        </div>
      </Section>

      <Section name="nen" title="Veiligheid en doorval" color="#7a4a2a">
        <NenNote />
        <div className="measure stack">
          <p>
            Veiligheidsglas hoort waar iemand door de ruit kan vallen: laag bij de grond, in een deur, in een
            douchewand. De laatste NEN-normen zijn daarvoor de maat. Wij houden daar rekening mee bij het glas dat wij
            voorstellen.
          </p>
          <p>
            Een glazen deur of douchewand is dus niet alleen een mooie plaat. Hij moet het dagelijks gebruik kunnen
            hebben, en bij breuk geen onnodig risico geven.
          </p>
        </div>
        <p className="note">
          Schilderwerk aan de kozijnen eromheen doet u desgewenst in dezelfde afspraak.{" "}
          <Link href="/schilderwerk">Lees over schilderwerk binnen en buiten</Link>.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
