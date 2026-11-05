import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { Chapter, Section } from "@/components/site/Parts";
import { ctaType } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy bij dit concept van Schildersbedrijf Assink. Het offerteformulier verstuurt en bewaart niets.",
};

export default function PrivacyPage() {
  return (
    <>
      <Chapter
        kicker="Privacy"
        title="Wat deze pagina wel en niet bewaart"
        lede={`${content.company.name}, ${content.address.street}, ${content.address.postal} ${content.address.city}, is verantwoordelijk voor de tekst hier. Het is een korte uitleg bij dit concept.`}
        color="#e4d3b8"
        fan="-3deg"
      />

      <Section name="formulier" title="Het offerteformulier" color="#e26f1e">
        <div className="measure stack">
          <p>
            Wat u invult, wordt niet opgeslagen en niet verzonden. Het blijft op uw eigen scherm staan, tot u de pagina
            verlaat of hem ververst. Er is geen bestand, geen mailbox en geen lijst met aanvragen achter dit formulier.
          </p>
          <p>
            Wilt u dat wij uw vraag echt ontvangen, gebruik dan de telefoon of het e-mailadres op de{" "}
            <Link href="/contact">contactpagina</Link>. Die komen bij ons aan. Het formulier niet.
          </p>
        </div>
      </Section>

      <Section name="meting" title="Een cookieloos meetscript" color="#2f4a3a" fan="4deg">
        <div className="measure stack">
          <p>
            Deze conceptsite laadt een cookieloos meetscript van Sleads. Het telt welke onderdelen worden bekeken, zodat
            zichtbaar is of het staalboek gelezen wordt. Daarvoor worden geen cookies geplaatst en geen profiel van u
            opgebouwd.
          </p>
          <p>
            Het script staat in de kop van elke pagina, met de naam van dit concept. Er is geen tweede teller, geen
            advertentienetwerk en geen chatvenster dat meekijkt.
          </p>
        </div>
      </Section>

      <Section name="vragen" title="Een vraag over deze tekst" color="#211c17">
        <p className="measure">
          Stuur hem aan{" "}
          <a href={`mailto:${content.email}`} data-cta={ctaType(`mailto:${content.email}`)}>
            {content.email}
          </a>
          . Vermeld erbij dat het over deze website gaat, dan weten Peter en Dave Assink waar de mail thuishoort.
        </p>
      </Section>
    </>
  );
}
