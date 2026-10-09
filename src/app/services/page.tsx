import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Therapy Services",
  description:
    "Pediatric physiotherapy, speech therapy, occupational therapy, behaviour therapy, special education and psychological counselling for children in Jodhpur.",
};

const BG_MAP: Record<string, string> = {
  "bg-teal-pale": "#E8F6F6",
  "bg-blue-pale": "#EBF3FC",
  "bg-sage-pale": "#EDF5F0",
  "bg-yellow-50": "#FEFCE8",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="site-container">
          <nav className="flex items-center gap-2 text-[13px] text-muted mb-4">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-muted">›</span>
            <span className="text-slate">Services</span>
          </nav>
          <h1 className="font-serif text-[clamp(26px,4vw,40px)] text-slate mb-3">
            Our Therapy Services
          </h1>
          <p className="text-muted text-[17px] max-w-[600px]">
            Every service at Parambh is designed with one goal: giving your
            child the best possible chance at an independent, fulfilling life.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <section className="section-pad">
        <div className="site-container">
          <div className="flex flex-col gap-12">
            {SERVICES.map((svc, i) => {
              const isEven = i % 2 === 1;
              const bgHex = BG_MAP[svc.bgColor] ?? "#E8F6F6";

              return (
                <div
                  key={svc.title}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start p-10 bg-white rounded-[20px] border border-border shadow-sm"
                  style={
                    isEven ? { gridTemplateColumns: "2fr 1fr" } : undefined
                  }
                >
                  {/* Visual */}
                  <div
                    className={`rounded-card p-9 text-center ${isEven ? "lg:order-last" : ""}`}
                    style={{ background: bgHex }}
                  >
                    {svc.isPrimary && (
                      <span className="inline-block bg-teal text-white text-[12px] font-bold uppercase tracking-[0.06em] px-4 py-1.5 rounded-full mb-2">
                        Primary Service
                      </span>
                    )}
                    <p className="text-[13px] text-muted mt-2">
                      {svc.isPrimary
                        ? "Our core specialization — led by a certified MPT physiotherapist"
                        : "Helping your child thrive in every area of life"}
                    </p>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-[26px] text-slate mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-[17px] font-semibold text-teal mb-3">
                      {svc.headline}
                    </p>
                    <p className="text-[16px] text-body leading-[1.75] mb-5">
                      {svc.fullDescription}
                    </p>

                    <p className="text-[14px] font-semibold text-slate mb-3">
                      Who benefits from this:
                    </p>
                    <div className="flex flex-col gap-2 mb-5">
                      {svc.problems.map((p) => (
                        <div
                          key={p}
                          className="flex items-center gap-2.5 text-[14px] text-body bg-off py-2.5 px-3.5 rounded-lg"
                        >
                          <span>⚠</span> {p}
                        </div>
                      ))}
                    </div>

                    <div className="bg-teal-pale rounded-card p-4 border-l-4 border-teal">
                      <p className="text-[14px] font-semibold text-teal mb-2">
                        Expected outcomes:
                      </p>
                      <ul className="flex flex-col gap-1.5 list-none">
                        {svc.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-center gap-2 text-[14px] text-slate"
                          >
                            <span className="text-teal text-[10px]">✦</span> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-12 text-center p-10 rounded-[20px] border border-teal/15"
            style={{ background: "linear-gradient(135deg, #E8F6F6, #EBF3FC)" }}
          >
            <h3 className="font-serif text-[24px] text-slate mb-3">
              Not sure which service your child needs?
            </h3>
            <p className="text-muted text-[16px] mb-7 max-w-[500px] mx-auto">
              Book a comprehensive initial assessment. We&apos;ll evaluate your
              child and recommend the right therapy combination.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                📅 Book Assessment
              </Link>
              <a
                href="https://wa.me/917023878048"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
