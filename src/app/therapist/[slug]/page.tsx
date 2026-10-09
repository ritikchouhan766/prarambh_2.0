import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  THERAPISTS,
  getTherapistImage,
  getTherapistBySlug,
} from "@/lib/constants";

export function generateStaticParams() {
  return THERAPISTS.map((therapist) => ({ slug: therapist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const therapist = getTherapistBySlug((await params).slug);

  return {
    title: therapist
      ? `${therapist.name} | Parambh Rehab Center`
      : "Therapist Profile",
    description: therapist
      ? `${therapist.name}, ${therapist.designation} at Parambh Rehab Center.`
      : "Therapist profile at Parambh Rehab Center.",
  };
}

export default async function TherapistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const therapist = getTherapistBySlug((await params).slug);

  if (!therapist) {
    notFound();
  }

  return (
    <>
      <header className="page-hero">
        <div className="site-container">
          <nav className="flex items-center gap-2 text-[13px] text-muted mb-4">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-muted">›</span>
            <Link
              href="/therapist"
              className="hover:text-teal transition-colors"
            >
              Therapists
            </Link>
            <span className="text-muted">›</span>
            <span className="text-slate">{therapist.name}</span>
          </nav>
          <h1 className="font-serif text-[clamp(26px,4vw,40px)] text-slate mb-3">
            {therapist.name}
          </h1>
          <p className="text-muted text-[17px] max-w-[600px]">
            {therapist.designation}
          </p>
        </div>
      </header>

      <main className="section-pad">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[60px] items-start">
            <div className="bg-teal-pale rounded-[20px] p-10 text-center lg:sticky lg:top-[90px]">
              <div className="therapist-detail-photo mx-auto mb-5 h-[250px] w-[250px] overflow-hidden rounded-full border-[5px] border-white shadow-lg">
                <Image
                  src={getTherapistImage(therapist)}
                  alt={therapist.name}
                  width={therapist.name === "Lakshita Chouhan" ? 327 : 434}
                  height={therapist.name === "Lakshita Chouhan" ? 321 : 452}
                  quality={90}
                  unoptimized
                  className="h-full w-full object-cover object-center"
                  priority
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
                    <div className="text-[11px] text-muted mt-0.5">{s.key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="tag-pill">Professional Profile</span>
              <h2 className="font-serif text-[clamp(26px,4vw,36px)] text-slate mb-5">
                {therapist.name}
              </h2>

              {therapist.bio.map((para, index) => (
                <p
                  key={index}
                  className="text-[15px] text-body leading-[1.75] mb-5"
                >
                  {para}
                </p>
              ))}

              <p className="text-[15px] font-semibold text-slate mb-4 mt-2">
                Qualifications & Journey:
              </p>

              <div className="flex flex-col mb-7">
                {therapist.timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 relative pb-6 last:pb-0"
                  >
                    {index < therapist.timeline.length - 1 && (
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
                <Link href="/contact" className="btn-primary">
                  📅 Book with {therapist.name.split(" ")[0]}
                </Link>
                <a
                  href="https://wa.me/917023878048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
