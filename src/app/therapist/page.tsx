import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { THERAPISTS, getTherapistImage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Therapists",
  description:
    "Meet Lakshita Chouhan and our team of certified pediatric therapists at Parambh Rehab Center, Jodhpur.",
};

export default function TherapistPage() {
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
            <span className="text-slate">Therapist</span>
          </nav>
          <h1 className="font-serif text-[clamp(26px,4vw,40px)] text-slate mb-3">
            Meet Our Therapists
          </h1>
          <p className="text-muted text-[17px] max-w-[600px]">
            Qualified, experienced, and deeply committed to every child&apos;s
            growth.
          </p>
        </div>
      </div>

      <section className="section-pad">
        <div className="site-container flex flex-col gap-20">
          {THERAPISTS.map((therapist, idx) => (
            <div
              key={therapist.name}
              className={`grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[60px] items-start ${
                idx > 0 ? "pt-16 border-t border-border" : ""
              }`}
            >
              {/* Profile Card */}
              <div className="bg-teal-pale rounded-[20px] p-10 text-center lg:sticky lg:top-[90px]">
                <div className="mx-auto mb-5 h-[250px] w-[250px] overflow-hidden rounded-full border-[5px] border-white shadow-lg">
                  <Image
                    src={getTherapistImage(therapist)}
                    alt={therapist.name}
                    width={120}
                    height={120}
                    className="h-full w-full object-cover object-center"
                    priority={idx === 0}
                  />
                </div>

                <h3 className="font-serif text-[24px] text-slate mb-1">
                  {therapist.name}
                </h3>
                <p className="text-[14px] text-teal font-semibold mb-5">
                  {therapist.designation}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-5">
                  {therapist.qualifications.map((q) => (
                    <span
                      key={q}
                      className="bg-white border border-border rounded-md px-3 py-1.5 text-[12px] font-semibold text-slate"
                    >
                      {q}
                    </span>
                  ))}
                </div>

                <div className="bg-white rounded-[10px] py-3.5 px-4 flex justify-around mb-5">
                  {therapist.stats.map((s) => (
                    <div key={s.key} className="text-center">
                      <div className="font-serif text-[20px] font-bold text-teal">
                        {s.val}
                      </div>
                      <div className="text-[11px] text-muted mt-0.5">
                        {s.key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Panel */}
              <div>
                <span className="tag-pill">Professional Profile</span>
                <h2 className="font-serif text-[clamp(26px,4vw,36px)] text-slate mb-5">
                  {therapist.name}
                </h2>

                {therapist.bio.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-body leading-[1.75] mb-5"
                  >
                    {para}
                  </p>
                ))}

                {/* Timeline */}
                <p className="text-[15px] font-semibold text-slate mb-4 mt-2">
                  Qualifications & Journey:
                </p>
                <div className="flex flex-col mb-7">
                  {therapist.timeline.map((item, i) => (
                    <div key={i} className="flex gap-4 relative pb-6 last:pb-0">
                      {i < therapist.timeline.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border" />
                      )}
                      <div className="w-8 h-8 rounded-full bg-teal-pale border-2 border-teal flex items-center justify-center flex-shrink-0 text-[14px] z-10">
                        {item.emoji}
                      </div>
                      <div className="pt-1 flex-1">
                        <h5 className="font-sans font-semibold text-[15px] text-slate mb-0.5">
                          {item.title}
                        </h5>
                        <p className="text-[13px] text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] font-semibold text-slate mb-3">
                  Areas of Specialization:
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {therapist.specializations.map((s) => (
                    <span
                      key={s}
                      className="bg-teal-pale text-teal border border-teal/20 rounded-md px-3.5 py-1.5 text-[13px] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/therapist/${therapist.slug}`}
                    className="btn-primary"
                  >
                    View Profile
                  </Link>
                  <Link href="/contact" className="btn-wa">
                    📅 Book with {therapist.name.split(" ")[0]}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
