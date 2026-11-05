import type { Metadata } from "next";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy bij dit concept van Schildersbedrijf Assink. Het offerteformulier verstuurt en bewaart niets.",
};

export default function PrivacyPage() {
  return (
    <article className="measure stack" data-section="privacy">
      <p className="kicker">Privacy</p>
      <h1>Privacy</h1>
      <p>
        {content.company.name}, {content.address.street}, {content.address.postal} {content.address.city}, is
        verantwoordelijk voor de tekst op deze pagina.
      </p>
      <p>
        Wat u in het offerteformulier invult, wordt niet opgeslagen en niet verzonden. Het blijft alleen op uw eigen
        scherm staan, tot u de pagina verlaat. Voor contact gebruikt u de telefoon of het e-mailadres.
      </p>
      <p>
        Deze conceptsite laadt een cookieloos meetscript van Sleads, zodat zichtbaar is welke onderdelen worden bekeken.
        Daarvoor worden geen cookies geplaatst en geen profielen van u opgebouwd.
      </p>
      <p>
        Vragen stuurt u aan{" "}
        <a href={`mailto:${content.email}`} data-cta={ctaType(`mailto:${content.email}`)}>
          {content.email}
        </a>
        .
      </p>
    </article>
  );
}
