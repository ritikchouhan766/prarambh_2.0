import type { Metadata } from "next";
import Link from "next/link";
import { ASSESSMENT_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Assessment Process",
  description:
    "Learn how the assessment process works at Parambh Rehab Center and how we help families plan the right therapy journey for their child.",
};

export default function AssessmentPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <nav className="flex items-center justify-center gap-2 text-[13px] text-muted mb-4">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-slate">Assessment</span>
          </nav>
          <h1 className="font-serif text-[clamp(30px,4vw,42px)] text-slate mb-3">
            A clear path from concern to care
          </h1>
          <p className="mx-auto max-w-2xl text-[16px] text-muted">
            We help parents understand their child&apos;s needs and create a
            practical, supportive therapy plan built around real goals.
          </p>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ASSESSMENT_STEPS.map((step, index) => (
              <article key={step.title} className="service-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-pale text-sm font-bold text-teal">
                  0{index + 1}
                </div>
                <h2 className="font-sans font-semibold text-[18px] text-slate mb-3">
                  {step.title}
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[22px] border border-[#e5edf1] bg-[#f8fbfb] p-8 text-center">
            <h2 className="font-serif text-[30px] text-slate mb-3">
              Ready to take the first step?
            </h2>
            <p className="mx-auto max-w-2xl text-[16px] text-muted mb-6">
              Speak with our team to understand what your child may need and how
              we can support the next stage of care.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book assessment
              </Link>
              <a
                href="https://wa.me/917023878048"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
