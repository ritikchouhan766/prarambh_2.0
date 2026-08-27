"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/branding/logo.png";
import { NAV_LINKS } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/site-content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className="site-header">
      <nav className="site-container nav-row" aria-label="Primary navigation">
        <Link
          href="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Parambh Rehab Center home"
        >
          <Image
            src={logo}
            alt="Parambh Rehab Center logo"
            width={150}
            height={22}
            className="brand-logo"
            priority
          />
        </Link>
        <div className="desktop-nav">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div className="nav-dropdown" key={link.href}>
                <Link
                  href={link.href}
                  prefetch={true}
                  className={active(link.href) ? "active" : ""}
                >
                  Services
                </Link>
                <div className="nav-dropdown-menu">
                  {SERVICE_PAGES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      prefetch={true}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={active(link.href) ? "active" : ""}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <Link href="/contact" prefetch={true} className="nav-appointment">
          <span aria-hidden="true">&#128197;</span> Book appointment
        </Link>
        <button
          type="button"
          className="menu-trigger"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) =>
          link.label === "Services" ? (
            <div className="mobile-services" key={link.href}>
              <Link
                href={link.href}
                prefetch={true}
                onClick={() => setMenuOpen(false)}
                className={active(link.href) ? "active" : ""}
              >
                All services
              </Link>
              {SERVICE_PAGES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  prefetch={true}
                  onClick={() => setMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              onClick={() => setMenuOpen(false)}
              className={active(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ),
        )}
        <Link
          href="/contact"
          prefetch={true}
          onClick={() => setMenuOpen(false)}
          className="btn-primary"
        >
          Book appointment
        </Link>
      </div>
    </header>
  );
}
