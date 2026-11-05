import Link from "next/link";
import { content, plateById } from "@/content";
import { Fan } from "@/components/site/Fan";
import { Plate, PlateSet } from "@/components/site/Plate";
import { AddressFacts, BtwBlock, CtaRow, GlassList, NenNote, PhoneList, Section, WaysBlock } from "@/components/site/Parts";
import { QuoteForm } from "@/components/site/QuoteForm";
import { chipStyle } from "@/lib/chip";

const preview = ["kerk", "museum-bord", "hoogte-dak", "riet-1", "tafel-detail", "diepte"] as const;

export default function Home() {
  const scaffold = plateById("scaffold");
  return (
    <>
      <header className="hero-grid" data-section="hero">
        <div>
          <p className="kicker">Markelo, Hof van Twente</p>
          <h1>Vakmanschap en kwaliteit uit Markelo</h1>
          <p className="lede">
            Wij zijn een klein professioneel schildersbedrijf in Markelo, voor particuliere en zakelijke opdrachtgevers.
            Tevens zijn wij een erkend leerbedrijf. U kunt bij ons terecht voor binnen- en buitenschilderwerk,
            wandafwerking, glas en het herstel van houtrot en beton.
          </p>
          <PhoneList />
          <CtaRow href="#offerte" />
        </div>
        <div className="hero-stage">
          <Plate plate={scaffold} priority frame={420} />
          <figure className="logo-plate">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.logoPlate.src}
              alt={content.logoPlate.alt}
              width={content.logoPlate.width}
              height={content.logoPlate.height}
            />
            <figcaption>
              <span className="cap-title">{content.logoPlate.title}</span>
              <span className="cap-material">{content.logoPlate.material}</span>
            </figcaption>
          </figure>
        </div>
      </header>

      <Section
        name="disciplines"
        title="De stalen"
        color="#e26f1e"
        lede="Eén adres voor het schilderwerk, de wanden, het glas en het herstel. Elke staal opent zijn pagina."
      >
        <Fan className="disc-fan">
          {content.disciplines.map((item) => (
            <Link key={item.href} href={item.href} className="disc" style={chipStyle(item)}>
              <span className="chip">
                <span className="chip-label">{item.label}</span>
              </span>
              <span className="disc-text">{item.text}</span>
            </Link>
          ))}
        </Fan>
      </Section>

      <WaysBlock lede="U bepaalt hoe wij het werk verdelen. Drie afspraken, helder vooraf." />
      <BtwBlock />

      <Section
        id="staalboek"
        name="staalboek"
        title="Uit het staalboek"
        color="#7a4a2a"
        fan="3deg"
        lede="Zes platen uit uitgevoerd werk. De opnamen blijven op hun eigen formaat, zoals in een staalboek."
      >
        <PlateSet ids={preview} />
        <div className="cta-row">
          <Link href="/werk" className="btn btn-ghost">
            Heel het staalboek
          </Link>
        </div>
      </Section>

      <Section
        id="ambacht"
        name="ambacht"
        title="Fijn ambacht"
        color="#4e301c"
        fan="-3deg"
        lede="Naast het onderhoudsschilderwerk voeren wij werk uit dat om een vaste hand vraagt: bladgoud, houtimitatie en handgeschilderde keukens."
      >
        <div className="gold-block" data-section="bladgoud">
          <Fan>
            <span className="chip" style={chipStyle({ fan: "-6deg", color: "#b88a2e", ink: "#211c17" })}>
              <span className="chip-label">Bladgoud</span>
            </span>
          </Fan>
          <div className="measure stack">
            <h3>Bladgoud aanbrengen</h3>
            <p>
              Bladgoud brengen wij aan op lijstwerk en ornament. Het is werk voor een rustige hand: de ondergrond moet
              strak zijn, het blad moet liggen zonder naden die gaan storen.
            </p>
          </div>
          <Plate plate={plateById("bladgoud")} />
        </div>
        <div className="section" data-section="houtimitatie" style={{ borderTop: "1px solid rgba(33,28,23,0.16)" }}>
          <h3>Houtimitatie</h3>
          <p className="lede">
            Op een binnendeur schilderen wij nerf en tekening, zodat het vlak de uitstraling van hout krijgt.
          </p>
          <PlateSet ids={["houtimitatie"]} />
        </div>
        <div className="section" data-section="keukens">
          <h3>Handgeschilderde keukens</h3>
          <p className="lede">
            Keukens schilderen wij met de hand, in de kleur die bij het interieur past. De grijze keuken is uitgevoerd in
            samenwerking met Keukenhof van Holten.
          </p>
          <PlateSet ids={["keuken-grijs", "keuken-zwart"]} />
          <div className="cta-row">
            <Link href="/decoratief-schilderwerk" className="btn btn-ghost">
              Decoratief schilderwerk
            </Link>
          </div>
        </div>
      </Section>

      <Section
        id="houtrot"
        name="houtrot"
        title="Houtrot en betonreparatie"
        color="#7a4a2a"
        lede="De snelheid waarmee houtrot ontstaat, hangt af van vier elementen: vocht, warmte, zuurstof en een voedingsbodem. De kwaliteit van de ondergrond speelt daarbij mee. Slecht onderhoud of onvakkundig schilderwerk is vaak de oorzaak."
      >
        <div className="measure stack">
          <p>
            Vroeger werd bij houtrot het hele kozijn of de hele deur vervangen. Tegenwoordig volstaat vaak een reparatie
            of een deelvervanging. Wie te lang wacht, kan aan vervanging van de hele ondergrond niet meer ontkomen. Wij
            adviseren over de staat van het hout en voeren het herstel uit.
          </p>
          <p>Ook beton, zoals een beschadigde raamdorpel, repareren wij en werken wij schilderend af.</p>
        </div>
        <PlateSet ids={["houtrot-voor", "houtrot-na", "beton-1", "beton-3"]} />
        <div className="cta-row">
          <Link href="/houtrot-en-betonreparatie" className="btn btn-ghost">
            Meer over herstel
          </Link>
        </div>
      </Section>

      <Section
        id="glas"
        name="glas"
        title="Glas"
        color="#2f4a3a"
        fan="4deg"
        lede="U kunt bij ons terecht voor allerlei glas. Dit is een greep uit wat wij plaatsen. Heeft u glasschade of ruitbreuk, dan doen wij ons best dit zo snel mogelijk te verhelpen."
      >
        <GlassList />
        <NenNote />
        <div className="cta-row">
          <Link href="/glas" className="btn btn-ghost">
            Alle glassoorten
          </Link>
        </div>
      </Section>

      <Section
        id="over-ons"
        name="leerbedrijf"
        title="Peter en Dave Assink"
        color="#211c17"
        lede="Schildersbedrijf Assink wordt gevoerd door Peter en Dave Assink. Wij zijn een erkend leerbedrijf: nieuwe schilders leren het vak bij ons in de praktijk, op de steiger en in huis."
      >
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
            <p>Ons motto is vakmanschap en kwaliteit.</p>
            <p>
              Peter en Dave Assink voeren het bedrijf vanuit de Fokkerstraat. Het leerbedrijf zit in het werk zelf:
              voorbereiden, schilderen, glas en herstel, op de steiger en in huis.
            </p>
            <div className="cta-row">
              <Link href="/over-ons" className="btn btn-ghost">
                Over ons
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="mvo"
        name="mvo"
        title="Zorgvuldig met verf en afval"
        color="#2f4a3a"
        fan="-2deg"
        lede="Wij kiezen onze producten met zorg, houden het afval klein en scheiden wat overblijft. Waar het kan, werken wij met natuurverf op basis van lijnolie. Rembrandt mengde zijn verven al met lijnolie."
      >
        <PlateSet ids={["lijnzaad"]} />
        <div className="cta-row">
          <Link href="/mvo" className="btn btn-ghost">
            Maatschappelijk verantwoord
          </Link>
        </div>
      </Section>

      <Section
        id="werkgebied"
        name="werkgebied"
        title="Werkgebied"
        color="#e4d3b8"
        fan="5deg"
        lede="Wij werken in Markelo en de Hof van Twente, voor particuliere en zakelijke opdrachtgevers."
      >
        <div className="measure stack">
          <p>
            Het adres is Fokkerstraat 55, 7475 CB Markelo, in Overijssel. Verder dan Markelo en de Hof van Twente
            noemen wij ons werkgebied niet.
          </p>
          <p>
            Particulier en zakelijk zijn beide welkom. Voor het lage btw-tarief van 9 procent geldt een eigen afspraak:
            een particuliere woning ouder dan twee jaar, en alleen het binnen- en buitenschilderwerk.
          </p>
        </div>
      </Section>

      <Section
        id="contact"
        name="contact"
        title="Contact"
        color="#e26f1e"
        lede="U bereikt ons aan de Fokkerstraat in Markelo. Bel, mail of gebruik het formulier. Het formulier is een voorbeeld en verstuurt uw aanvraag niet."
      >
        <AddressFacts />
        <div data-section="offerte">
          <h3 style={{ marginTop: "2rem" }}>Offerte aanvragen</h3>
          <p className="note">
            Vul in wat u wilt laten doen. Wij bewaren niets van dit formulier. Bellen of mailen komt wel bij ons aan.
          </p>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
