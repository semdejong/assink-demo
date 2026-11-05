import type { Metadata } from "next";
import { CtaRow, GlassList, NenNote, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Glas en beglazing",
  description:
    "Glas door Schildersbedrijf Assink: gefigureerd glas, veiligheidsglas, HR++, glas in lood, spiegels en glazen deuren. Veilig volgens de laatste NEN-normen.",
};

export default function GlasPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Glas</p>
        <h1>Alle soorten glas</h1>
        <p className="lede">
          Heeft u glasschade of ruitbreuk, dan doen wij ons best dit zo snel mogelijk te verhelpen. Is de ruit of het
          isolatieglas niet voorradig, dan zorgen wij voor een noodoplossing.
        </p>
        <CtaRow />
      </header>

      <Section
        name="soorten"
        title="Waar u ons voor belt"
        color="#2f4a3a"
        lede="U kunt bij ons terecht voor onder meer deze glassoorten. Staat uw wens er niet bij, bel ons gerust."
      >
        <GlassList />
      </Section>

      <Section name="isolatie" title="Isolerende beglazing" color="#1f3329" fan="4deg">
        <p className="measure">
          HR++ en andere isolerende beglazing plaatsen wij wanneer u de woning beter wilt isoleren. Glas in lood kan ook
          verpakt worden in isolerende beglazing, zodat het oude patroon blijft en de ruit toch isoleert.
        </p>
      </Section>

      <Section name="nen" title="Veiligheid en doorval" color="#7a4a2a">
        <NenNote />
        <p className="note">
          Veiligheidsglas kiezen wij waar de norm dat vraagt, bijvoorbeeld laag bij de grond of in een deur. Zo beperken
          wij het risico dat iemand door de ruit valt.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
