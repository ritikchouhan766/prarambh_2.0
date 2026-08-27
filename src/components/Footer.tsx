import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/branding/logo_footer.png";
import { SITE, NAV_LINKS, HOURS } from "@/lib/constants";

const socialLinks = [
  {
    href: `https://wa.me/${SITE.whatsapp}`,
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.09 1C6.34 1 1.61 5.72 1.61 11.46c0 2.04.54 4.02 1.55 5.76L1.5 22.5l5.45-1.66a10.36 10.36 0 0 0 5.14 1.58h.01c5.75 0 10.4-4.72 10.4-10.46 0-2.78-1.08-5.4-3.05-7.38Zm-8.43 15.95c-1.4 0-2.77-.38-3.97-1.09l-.28-.17-3.24.99.87-3.16-.18-.29A8.46 8.46 0 0 1 3.58 11.5c0-4.68 3.8-8.47 8.53-8.47 2.27 0 4.4.88 6 2.49a8.48 8.48 0 0 1 2.17 6c0 4.68-3.8 8.47-8.53 8.47Zm4.67-6.34c-.26-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.26-.66.82-.8 1-.14.17-.29.19-.55.06-.26-.13-1.1-.41-2.09-1.31-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.29.39-.44.13-.15.18-.26.27-.43.09-.17.05-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.44-.57-.45h-.49c-.17 0-.44.06-.67.32-.23.26-.88.86-.88 2.1s.9 2.43.97 2.6c.07.17 1.65 2.5 4 3.46.56.24.99.38 1.33.49.56.18 1.06.15 1.46.09.45-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.14-1.2-.06-.1-.22-.17-.48-.3Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/prarambh_rehab_jodhpur24/",
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: `mailto:${SITE.email}`,
    label: "Email",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-intro">
            <Link
              href="/"
              prefetch={true}
              className="footer-brand-wrap"
              aria-label="Parambh home"
            >
              <Image
                src={logo}
                alt="Parambh logo"
                width={220}
                height={90}
                className="footer-brand-logo"
                priority
              />
            </Link>
            <p className="footer-subtitle">
              Child Rehabilitation Centre · Jodhpur
            </p>
            <p>
              Compassionate, personalized therapy that helps children build
              skills, confidence, and independence.
            </p>
            <a href={`tel:${SITE.phone}`} className="footer-phone">
              Call us: {SITE.phone}
            </a>
            <div className="social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="social-link"
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch={true}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" prefetch={true}>
                  Book appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Visit & contact</h2>
            <address>
              <span>{SITE.address}</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </address>
          </div>
          <div>
            <h2>Opening hours</h2>
            <div className="footer-hours">
              {HOURS.map((hour) => (
                <div key={hour.day}>
                  <span>{hour.day}</span>
                  <strong>{hour.time}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Parambh Rehab Center.</span>
          <span>Made with care for brighter futures.</span>
        </div>
      </div>
    </footer>
  );
}
