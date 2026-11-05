import type { Metadata } from "next";
import { content } from "@/content";
import { AddressFacts, Section } from "@/components/site/Parts";
import { QuoteForm } from "@/components/site/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met Schildersbedrijf Assink, Fokkerstraat 55, 7475 CB Markelo. Bel 0547-363457 of 06-51069034, of mail info@schildersbedrijfassink.nl.",
};

export default function ContactPage() {
  return (
    <>
      <header className="intro" data-section="intro">
        <p className="kicker">Contact</p>
        <h1>Neem contact op</h1>
        <p className="lede">
          U bereikt Peter en Dave Assink telefonisch of per e-mail. Het formulier hieronder is een voorbeeld en verstuurt
          uw aanvraag niet.
        </p>
      </header>

      <Section name="gegevens" title="Adres en nummers" color="#e26f1e">
        <AddressFacts />
        <p className="measure" style={{ marginTop: "1.4rem" }}>
          Met vriendelijke groet,
          <br />
          {content.company.signOff}
        </p>
      </Section>

      <Section
        id="offerte"
        name="offerte"
        title="Offerte aanvragen"
        color="#7a4a2a"
        fan="3deg"
        lede="Schrijf op wat u wilt laten doen. Wij bewaren de invoer niet. Voor een echte offerte belt of mailt u ons."
      >
        <QuoteForm withAnchor={false} />
      </Section>
    </>
  );
}
