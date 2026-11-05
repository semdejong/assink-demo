import type { Metadata } from "next";
import Link from "next/link";
import { content, plateById } from "@/content";
import { Plate, PlateSet } from "@/components/site/Plate";
import { BtwBlock, Chapter, CtaRow, Section, WaysBlock } from "@/components/site/Parts";
import { QuoteForm } from "@/components/site/QuoteForm";

export const metadata: Metadata = {
  title: "Schilderwerk binnen en buiten",
  description:
    "Binnen- en buitenschilderwerk in Markelo door Schildersbedrijf Assink. Op uurtarief, met een offerte, of samen schilderen. Laag btw-tarief van 9 procent waar dat geldt.",
};

export default function SchilderwerkPage() {
  return (
    <>
      <Chapter
        kicker="Lak"
        title="Schilderwerk binnen en buiten"
        lede="Een huis schilderen vergt tijd en vakmanschap. Wij schilderen binnen en buiten, voor particuliere en zakelijke opdrachtgevers in Markelo en de Hof van Twente. Ons motto is vakmanschap en kwaliteit."
        color="#e26f1e"
        fan="-5deg"
      >
        <CtaRow href="#offerte" />
      </Chapter>
      <div className="hero-stage" style={{ marginTop: "2rem" }}>
        <Plate plate={plateById("scaffold")} priority />
      </div>

      <Section name="binnen" title="Binnen" color="#f0d2b4" fan="-5deg">
        <div className="measure stack">
          <p>
            Binnenschilderwerk aan wanden, plafonds, deuren, kozijnen en ander timmerwerk. Wij stemmen de volgorde met u
            af, zodat u weet wanneer welke ruimte aan de beurt is.
          </p>
          <p>
            Voor de afwerking van wanden — sauzen, spuitwerk, glasweefsel en behang — kunt u ook bij ons terecht.{" "}
            <Link href="/wandafwerking">Lees meer over wandafwerking</Link>.
          </p>
        </div>
      </Section>

      <Section
        name="buiten"
        title="Buiten"
        color="#e26f1e"
        lede="Buitenschilderwerk aan geveltimmerwerk, ramen, deuren en dakranden. De delen die lastig te bereiken zijn, nemen wij desgewenst voor onze rekening."
      >
        <div className="measure stack">
          <p>
            In overleg schilderen wij de dakkapel en de deklijsten en maken wij de goten schoon. Dat kan als onderdeel
            van het hele huis, en ook wanneer u de rest zelf schildert.
          </p>
          <p>Werken op hoogte doen wij met een steiger of een hoogwerker, afhankelijk van het gebouw.</p>
          <p>
            Ramen en goten van de hervormde kerk, en het schilderwerk aan rietgedekte huizen, horen bij hetzelfde
            buitenschilderwerk. Het gebouw verandert. De zorg voor de ondergrond blijft.
          </p>
        </div>
        <PlateSet ids={["hoogte-dak", "hoogte-tuin", "kerk"]} />
      </Section>

      <WaysBlock lede="Voor het schilderwerk kiest u één van deze drie afspraken. U kunt het ook in het formulier aangeven." />
      <BtwBlock />

      <Section
        name="wandafwerking"
        title="Wandafwerking"
        color="#f0d2b4"
        fan="4deg"
        lede="Sauzen, spuitwerk, glasweefsel plakken en behang van authentiek tot de laatste trends. Met behang kan een wand diepte krijgen."
      >
        <div className="cta-row">
          <Link href="/wandafwerking" className="btn btn-ghost">
            Wandafwerking bekijken
          </Link>
        </div>
      </Section>

      <Section
        name="materialen"
        title="Verf en lijnolie"
        color="#2f4a3a"
        lede="Wij kiezen de verf bij de ondergrond. Waar het kan, werken wij met natuurverf op basis van lijnolie. Rembrandt mengde zijn verven al met lijnolie; het blijft een prettige basis voor hout dat moet kunnen ademen."
      >
        <p className="note">
          Hoe wij omgaan met productkeuze en afval leest u bij <Link href="/mvo">maatschappelijk verantwoord ondernemen</Link>.
        </p>
      </Section>

      <Section
        name="staalboek"
        title="Schilderwerk uit het staalboek"
        color="#7a4a2a"
        lede="Ramen en goten, rietgedekte huizen, en werk op de steiger."
      >
        <PlateSet ids={["riet-1", "riet-woning", "schuur", "museum-gevel"]} />
        <div className="cta-row">
          <Link href="/werk" className="btn btn-ghost">
            Heel het staalboek
          </Link>
        </div>
      </Section>

      <Section
        name="voorbereiding"
        title="Wat een telefoontje al duidelijk maakt"
        color="#211c17"
        fan="-3deg"
        lede="U hoeft geen bestek te schrijven. Drie antwoorden zijn genoeg om te zien of u een uurtarief, een offerte of een gedeelde klus wilt."
      >
        <div className="ways">
          <article style={{ ["--rule-color" as string]: "#e26f1e" }}>
            <h3>Binnen, buiten, of beide</h3>
            <p>{content.form.ligging.join(", ")}. Noem de ruimtes of de gevel, dan weten wij waar wij moeten kijken.</p>
          </article>
          <article style={{ ["--rule-color" as string]: "#2f4a3a" }}>
            <h3>Het soort werk</h3>
            <p>
              {content.form.soort.join(", ")}. Twijfelt u tussen schilderwerk en herstel, dan kijken wij eerst naar het
              hout of het beton.
            </p>
          </article>
          <article style={{ ["--rule-color" as string]: "#7a4a2a" }}>
            <h3>De afspraak</h3>
            <p>{content.form.manier.join(", ")}. U noemt de voorkeur aan de telefoon, of u zet hem in het formulier.</p>
          </article>
        </div>
      </Section>

      <Section name="faq" title="Vragen" color="#211c17" fan="2deg">
        <dl className="faq">
          {content.faq.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="offerte"
        name="offerte"
        title="Offerte aanvragen"
        color="#e26f1e"
        lede="Vertel ons wat u wilt laten schilderen. Dit formulier is een voorbeeld en verstuurt uw aanvraag niet. Bellen of mailen komt wel bij ons aan."
      >
        <QuoteForm withAnchor={false} />
      </Section>
    </>
  );
}
