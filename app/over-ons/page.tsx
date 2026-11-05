import type { Metadata } from "next";
import Link from "next/link";
import { content, plateById } from "@/content";
import { Plate } from "@/components/site/Plate";
import { Chapter, CtaRow, Section } from "@/components/site/Parts";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Schildersbedrijf Assink in Markelo wordt gevoerd door Peter en Dave Assink. Erkend leerbedrijf. Motto: vakmanschap en kwaliteit.",
};

export default function OverOnsPage() {
  return (
    <>
      <Chapter
        kicker="Over ons"
        title="Peter en Dave Assink"
        lede="Schildersbedrijf Assink is een klein professioneel schildersbedrijf in Markelo. Peter en Dave Assink voeren het bedrijf. Wij werken voor particuliere en zakelijke opdrachtgevers, en ons motto is vakmanschap en kwaliteit."
        color="#211c17"
        ink="#f3ece0"
        fan="5deg"
      />
      <div className="hero-stage" style={{ marginTop: "2rem" }}>
        <Plate plate={plateById("scaffold")} priority />
      </div>

      <Section name="brief" title="Een kort woord vooraf" color="#e26f1e">
        <div className="measure letter stack">
          <p>
            Wie een schilder belt, wil weten bij wie het werk terechtkomt. Bij ons is dat geen loket. U spreekt het
            bedrijf dat Peter en Dave Assink voeren, vanuit de Fokkerstraat in Markelo.
          </p>
          <p>
            Wij schilderen binnen en buiten, werken wanden af, zetten glas en herstellen houtrot en beton. Decoratief
            werk — bladgoud, houtimitatie, een keuken die met de hand geschilderd wordt — hoort daarbij, niet ernaast.
          </p>
          <p>
            U kunt kiezen voor uurtarief, voor een offerte vooraf, of om samen het huis te schilderen. In dat laatste
            geval doen wij de moeilijk bereikbare delen en leveren wij de verf. U doet de rest.
          </p>
          <p className="sign">
            Met vriendelijke groet,
            <br />
            {content.company.signOff}
          </p>
        </div>
      </Section>

      <Section name="leerbedrijf" title="Erkend leerbedrijf" color="#2f4a3a" fan="-4deg">
        <div className="leer-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="leer-mark"
            src={content.leerbedrijf.src}
            alt={content.leerbedrijf.alt}
            width={content.leerbedrijf.width}
            height={content.leerbedrijf.height}
          />
          <div className="measure stack">
            <p>
              Wij zijn een erkend leerbedrijf. Het schildersvak wordt bij ons in de praktijk geleerd: voorbereiden,
              schilderen, glas zetten en herstellen, op de steiger en in huis.
            </p>
            <p>
              De klus is de les. Wie meeloopt, ziet hoe een kozijn wordt beoordeeld, hoe een wand stofvrij wordt, en hoe
              bladgoud pas gaat liggen als de ondergrond strak is.
            </p>
            <p>Zo blijft het vakmanschap niet bij ons alleen. Het motto geldt ook voor wie het vak nog aan het leren is.</p>
          </div>
        </div>
      </Section>

      <Section name="werk" title="Wat u bij ons kunt laten doen" color="#e26f1e" fan="2deg">
        <p className="lede">Vijf ingangen, één adres. Elk hoofdstuk in dit staalboek hoort bij een deel van het werk.</p>
        <ul className="catalogue">
          <li style={{ ["--swatch" as string]: "#e26f1e" }}>
            <Link href="/schilderwerk">Binnen- en buitenschilderwerk, op drie manieren</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#f0d2b4" }}>
            <Link href="/wandafwerking">Wandafwerking, van saus tot behang met diepte</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#2f4a3a" }}>
            <Link href="/glas">Glas, van enkel glas tot HR++ en glas in lood</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#7a4a2a" }}>
            <Link href="/houtrot-en-betonreparatie">Houtrot- en betonreparatie, voor het te laat is</Link>
          </li>
          <li style={{ ["--swatch" as string]: "#4e301c" }}>
            <Link href="/decoratief-schilderwerk">Decoratief schilderwerk, inclusief bladgoud</Link>
          </li>
        </ul>
      </Section>

      <Section
        name="werkgebied"
        title="Vanuit Markelo"
        color="#e4d3b8"
        fan="4deg"
        lede="Wij werken vanuit Fokkerstraat 55, in Markelo en de Hof van Twente. Verder dan die twee namen rekken wij ons werkgebied hier niet op."
      >
        <p className="measure">
          Particulier en zakelijk zijn beide welkom. Voor een particuliere woning ouder dan twee jaar kan het
          schilderwerk onder het lage btw-tarief van 9 procent vallen. Voor een bedrijfspand geldt dat tarief niet
          vanzelf. Dat zeggen wij erbij.
        </p>
        <CtaRow />
      </Section>
    </>
  );
}
