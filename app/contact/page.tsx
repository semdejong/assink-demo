import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { AddressFacts, Chapter, Section } from "@/components/site/Parts";
import { QuoteForm } from "@/components/site/QuoteForm";
import { ctaType } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met Schildersbedrijf Assink, Fokkerstraat 55, 7475 CB Markelo. Bel 0547-363457 of 06-51069034, of mail info@schildersbedrijfassink.nl.",
};

export default function ContactPage() {
  return (
    <>
      <Chapter
        kicker="Contact"
        title="Neem contact op"
        lede="U bereikt Peter en Dave Assink telefonisch of per e-mail. Twee nummers, één adres in Markelo, en een formulier dat op deze pagina alleen een voorbeeld is: het verstuurt uw aanvraag niet."
        color="#211c17"
        ink="#f3ece0"
      />

      <Section name="bereiken" title="Drie manieren om ons te vinden" color="#e26f1e" fan="-4deg">
        <div className="ways">
          <article style={{ ["--rule-color" as string]: "#e26f1e" }}>
            <h3>De vaste lijn</h3>
            <p>
              <a href={content.phones[0].href} data-cta={ctaType(content.phones[0].href)}>
                {content.phones[0].label}
              </a>
              . Handig als u aan tafel zit met een kozijn in het zicht en even wilt overleggen.
            </p>
          </article>
          <article style={{ ["--rule-color" as string]: "#2f4a3a" }}>
            <h3>De mobiel</h3>
            <p>
              <a href={content.phones[1].href} data-cta={ctaType(content.phones[1].href)}>
                {content.phones[1].label}
              </a>
              . Voor als u buiten staat, bij de goot of de dakkapel, en het werk wilt aanwijzen.
            </p>
          </article>
          <article style={{ ["--rule-color" as string]: "#7a4a2a" }}>
            <h3>De post</h3>
            <p>
              <a href={`mailto:${content.email}`} data-cta={ctaType(`mailto:${content.email}`)}>
                {content.email}
              </a>
              . Een mail mag kort zijn: plaats, binnen of buiten, en wat u kwijt wilt.
            </p>
          </article>
        </div>
      </Section>

      <Section name="gegevens" title="Adres en inschrijving" color="#7a4a2a">
        <p className="lede">
          Het bedrijf zit aan de Fokkerstraat 55 in Markelo. De kaart opent een zoekopdracht, geen ingebedde plattegrond.
        </p>
        <AddressFacts />
        <p className="measure sign">
          Met vriendelijke groet,
          <br />
          {content.company.signOff}
        </p>
      </Section>

      <Section
        id="offerte"
        name="offerte"
        title="Het formulier, als geheugensteun"
        color="#e26f1e"
        fan="3deg"
        lede="Schrijf op wat u wilt laten doen: naam, telefoon, e-mail, plaats, binnen of buiten, het soort werk en de manier van werken. Een toelichting mag erbij. Wij bewaren de invoer niet."
      >
        <div className="measure stack">
          <p>
            Voor een echte offerte belt of mailt u. Het formulier laat zien welke vragen wij stellen, zodat u ze alvast
            kunt ordenen. Hoe snel wij kunnen komen, spreken wij telefonisch af. Dat hangt van het werk af, en dat
            beloven wij hier niet van tevoren.
          </p>
          <p>
            Twijfelt u tussen uurtarief, een offerte of samen schilderen, lees dan eerst{" "}
            <Link href="/schilderwerk">de drie manieren van werken</Link>.
          </p>
        </div>
        <QuoteForm withAnchor={false} />
      </Section>
    </>
  );
}
