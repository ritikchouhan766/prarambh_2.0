import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/site-content";

interface ServicesProps {
  preview?: boolean; // true = 6-card grid on home, false = full detail on services page
}

export default function Services({ preview = true }: ServicesProps) {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="max-w-[600px]">
          <span className="tag-pill-blue">Our Services</span>
          <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-3">
            Comprehensive Therapy Under One Roof
          </h2>
          <p className="text-[17px] text-muted">
            Each therapy is tailored to your child&apos;s unique needs, with
            clear goals and measurable progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SERVICES.map((svc, index) => (
            <Link
              href={`/services/${SERVICE_PAGES[index].slug}`}
              key={svc.title}
              className="service-card group"
            >
              {svc.isPrimary && (
                <span className="absolute top-4 right-4 bg-teal text-white text-[10px] font-bold tracking-[0.06em] uppercase px-2.5 py-0.5 rounded-full">
                  Primary
                </span>
              )}
              <div className="text-[28px] mb-3.5">{svc.icon}</div>
              <h3 className="font-sans font-semibold text-[17px] text-slate mb-2">
                {svc.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-3.5">
                {svc.description}
              </p>
              <div className="text-[12px] text-teal font-semibold flex items-center gap-1">
                ✦ {svc.outcome}
              </div>
            </Link>
          ))}
        </div>

        {preview && (
          <div className="mt-9 text-center">
            <Link href="/services" className="btn-outline">
              See Full Service Details →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
