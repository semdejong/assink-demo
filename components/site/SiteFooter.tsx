import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export function SiteFooter() {
  return (
    <footer className="site-footer" data-section="footer">
      <div className="footer-grid">
        <div className="stack">
          <p className="footer-name">{content.company.name}</p>
          <p>{content.company.tagline}</p>
          <p>{content.company.signOff}</p>
          <address>
            {content.address.street}
            <br />
            {content.address.postal} {content.address.city}
            <br />
            {content.company.region}, {content.company.province}
          </address>
        </div>
        <div className="footer-links">
          {content.phones.map((phone) => (
            <a key={phone.href} href={phone.href} data-cta={ctaType(phone.href)}>
              {phone.kind} {phone.label}
            </a>
          ))}
          <a href={`mailto:${content.email}`} data-cta={ctaType(`mailto:${content.email}`)}>
            {content.email}
          </a>
          <p>KvK {content.kvk}</p>
        </div>
        <nav className="footer-links" aria-label="Inhoud">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/mvo">MVO</a>
        </nav>
        <div className="footer-links">
          {content.socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
          <a href="/privacy">Privacy</a>
          <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
            Concept door Sleads
          </a>
        </div>
      </div>
    </footer>
  );
}
