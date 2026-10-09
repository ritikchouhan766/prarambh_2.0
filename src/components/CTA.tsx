import Image from "next/image";
import { SITE } from "@/lib/constants";
import { FORMS } from "@/lib/constants";
import ContactForms from "@/app/contact/ContactForms";
import therapyBg from "@/assets/services/creative-activity.png";

export default function CTA() {
  return (
    <section className="cta-light py-20 text-center relative overflow-hidden cta-section-with-bg">
      <div className="cta-background" aria-hidden="true">
        <Image
          src={therapyBg}
          alt=""
          fill
          sizes="100vw"
          className="cta-bg-image"
        />
        <div className="cta-bg-overlay" />
      </div>

      {/* Radial overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(14,124,123,.08) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(26,95,168,.07) 0%, transparent 60%)",
        }}
      />

      <div className="site-container relative z-10">
        <span className="inline-block text-[12px] font-semibold uppercase tracking-widest px-4 py-1 rounded-full bg-white text-teal border border-teal/20 mb-4">
          Take the First Step
        </span>
        <h2 className="font-serif text-slate text-[clamp(26px,4vw,42px)] mb-3">
          Book Your Child&apos;s Assessment Today
        </h2>
        <p className="text-muted text-[18px] mb-10">
          Early assessment · Personalized plan · Expert guidance ·
          Child-friendly space
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center mb-8">
          <a href={`tel:${SITE.phone}`} className="btn-call">
            📞 {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="mx-auto max-w-[760px] text-left">
          <ContactForms
            appointmentFormUrl={FORMS.appointment}
            enquiryFormUrl={FORMS.enquiry}
            showEnquiry={false}
          />
        </div>
      </div>
    </section>
  );
}
