import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForms from "./ContactForms";
import { SITE, HOURS, FORMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book Appointment",
  description:
    "Book an appointment or send an enquiry to Parambh Rehab Center in Jodhpur. Call, WhatsApp, or fill the form.",
};

// ─── QUICK CONTACT CARDS ──────────────────────────────────────────────────────
// icon shown as emoji, value shown inside card
const QUICK_CARDS = [
  {
    icon: "📞",
    label: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    external: false,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: SITE.phone,
    href: `https://wa.me/${SITE.whatsapp}`,
    external: true,
  },
  {
    icon: "✉️",
    label: "Email",
    // Break long email so it wraps cleanly inside the card
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: "🕐",
    label: "Mon–Fri",
    value: "9:00 AM – 6:00 PM",
    href: null,
    external: false,
  },
];

// ─── QUICK CARD COMPONENT ────────────────────────────────────────────────────
function QuickCard({
  card,
}: {
  card: {
    icon: string;
    label: string;
    value: string;
    href: string | null;
    external: boolean;
  };
}) {
  // Font size scales down automatically for long values like email
  const fontSize = card.value.length > 20 ? "11.5px" : "13px";

  const valueStyle: React.CSSProperties = {
    fontSize,
    color: "#0E7C7B",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
    display: "block",
    width: "100%",
    fontWeight: 600,
  };

  return (
    <div
      className="bg-white rounded-[12px] px-4 py-6 text-center border border-[#E2E8F0]
                 shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg
                 flex flex-col items-center overflow-hidden min-w-0"
    >
      {/* Icon */}
      <div className="text-[26px] mb-2 flex-shrink-0">{card.icon}</div>

      {/* Label */}
      <div
        className="font-semibold uppercase mb-1.5 flex-shrink-0"
        style={{ fontSize: "11px", letterSpacing: ".06em", color: "#718096" }}
      >
        {card.label}
      </div>

      {/* Value — single line, ellipsis if still overflows */}
      {card.href ? (
        <a
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          title={card.value}
          style={valueStyle}
          className="hover:underline"
        >
          {card.value}
        </a>
      ) : (
        <span title={card.value} style={{ ...valueStyle, color: "#2C3E50" }}>
          {card.value}
        </span>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <div className="page-hero contact-page-hero">
        <div className="site-container">
          <nav className="flex items-center gap-2 text-[13px] text-muted mb-4 justify-center">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-muted">›</span>
            <span className="text-slate">Contact</span>
          </nav>
          <h1 className="font-serif text-[clamp(26px,4vw,40px)] text-slate mb-3">
            Get In Touch
          </h1>
          <p className="text-muted text-[17px]">
            Book an appointment, send an enquiry, or simply find us on the map.
          </p>
        </div>
      </div>

      <section className="pb-20">
        <div className="site-container">
          {/* ── QUICK CONTACT CARDS ──────────────────────────────── */}
          {/*
              Desktop: custom unequal grid — email card gets 1.9fr (wider) so
              the full address fits on one line without wrapping.
              Mobile:  standard 2-column grid.
          */}

          {/* Mobile grid (2 cols) — hidden on lg */}
          <div className="grid grid-cols-2 gap-4 -mt-10 relative z-10 mb-12 lg:hidden">
            {QUICK_CARDS.map((card) => (
              <QuickCard key={card.label} card={card} />
            ))}
          </div>

          {/* Desktop grid (custom widths) — hidden on mobile */}
          <div
            className="hidden lg:grid gap-4 -mt-10 relative z-10 mb-12"
            style={{ gridTemplateColumns: "1fr 1fr 1.1fr 1fr" }}
          >
            {QUICK_CARDS.map((card) => (
              <QuickCard key={card.label} card={card} />
            ))}
          </div>

          {/* ── MAIN GRID ─────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT: Clinic Info + Map */}
            <div className="flex flex-col gap-6">
              {/* Clinic Info card */}
              <div className="bg-white rounded-[20px] p-9 border border-[#E2E8F0] shadow-sm">
                <h3 className="font-serif text-[22px] text-slate mb-6">
                  Clinic Information
                </h3>

                {[
                  {
                    icon: "📍",
                    label: "Address",
                    content: SITE.address,
                    href: null,
                    ext: false,
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    content: SITE.phone,
                    href: `tel:${SITE.phone}`,
                    ext: false,
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    content: SITE.phone,
                    href: `https://wa.me/${SITE.whatsapp}`,
                    ext: true,
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    content: SITE.email,
                    href: `mailto:${SITE.email}`,
                    ext: false,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3.5 items-start py-4 border-b border-[#E2E8F0] last:border-0"
                  >
                    <div
                      className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center
                                 text-[18px] flex-shrink-0"
                      style={{ background: "#E8F6F6" }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong
                        className="block font-semibold mb-0.5"
                        style={{ fontSize: "14px", color: "#2C3E50" }}
                      >
                        {item.label}
                      </strong>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.ext ? "_blank" : undefined}
                          rel={item.ext ? "noopener noreferrer" : undefined}
                          className="hover:underline transition-colors"
                          style={{
                            fontSize: "15px",
                            color: "#4A5568",
                            wordBreak: "break-all", // ← email fix here too
                            overflowWrap: "anywhere",
                            display: "block",
                          }}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: "15px",
                            color: "#4A5568",
                            wordBreak: "break-word",
                            display: "block",
                          }}
                        >
                          {item.content}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Working hours */}
                <div className="mt-6">
                  <p
                    className="font-semibold mb-3"
                    style={{ fontSize: "14px", color: "#2C3E50" }}
                  >
                    Working Hours
                  </p>
                  <table className="w-full border-collapse">
                    <tbody>
                      {HOURS.map((h) => (
                        <tr
                          key={h.day}
                          className="border-b border-[#E2E8F0] last:border-0"
                        >
                          <td
                            className="py-2.5"
                            style={{ fontSize: "14px", color: "#718096" }}
                          >
                            {h.day}
                          </td>
                          <td
                            className="py-2.5 text-right font-medium"
                            style={{ fontSize: "14px", color: "#2C3E50" }}
                          >
                            {h.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-5">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                               font-semibold text-white text-[14px] transition-all duration-200
                               hover:opacity-90"
                    style={{ background: "#1A5FA8" }}
                  >
                    📞 Call Now
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                               font-semibold text-white text-[14px] transition-all duration-200
                               hover:opacity-90"
                    style={{ background: "#25D366" }}
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Map card — exact clinic location */}
              <div className="bg-white rounded-[20px] p-9 border border-[#E2E8F0] shadow-sm">
                <h3 className="font-serif text-[22px] text-slate mb-2">
                  Find Us Here
                </h3>
                <p
                  className="mb-5"
                  style={{ fontSize: "14px", color: "#718096" }}
                >
                  📍 {SITE.address}
                </p>

                <div
                  className="w-full rounded-[12px] overflow-hidden border border-[#E2E8F0]"
                  style={{ height: "380px" }}
                >
                  <iframe
                    // ── EXACT CLINIC LOCATION ──────────────────────────────
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5!2d73.03385!3d26.2622252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d29eeaefc7f%3A0x25a0f2d88d7d54fd!2sPrarambh%20Child%20Rehabilitation%20center!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prarambh Child Rehabilitation Center Location"
                  />
                </div>

                <div className="mt-4">
                  <a
                    href="https://www.google.com/maps/place/Prarambh+Child+Rehabilitation+center/@26.2622252,73.03385,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg
                               border-2 font-semibold text-[14px] transition-all duration-200
                               hover:opacity-80"
                    style={{ borderColor: "#0E7C7B", color: "#0E7C7B" }}
                  >
                    🗺 Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Forms */}
            <ContactForms
              appointmentFormUrl={FORMS.appointment}
              enquiryFormUrl={FORMS.enquiry}
            />
          </div>
        </div>
      </section>
    </>
  );
}
