import type { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "Speech delay, autism, ADHD, walking difficulties, weak muscles, developmental delay — understand the signs and how therapy helps your child.",
};

export default function ConditionsPage() {
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
            <span className="text-slate">Conditions We Treat</span>
          </nav>
          <h1 className="font-serif text-[clamp(26px,4vw,40px)] text-slate mb-3">
            Is Your Child Showing These Signs?
          </h1>
          <p className="text-muted text-[17px] max-w-[600px]">
            Recognizing the signs early is the first step. Here&apos;s what to
            look for — and how therapy can help your child thrive.
          </p>
        </div>
      </div>

      <section className="section-pad">
        <div className="site-container">
          <p className="text-[16px] text-body leading-[1.75] max-w-[700px] mb-12">
            Every child develops differently. But certain signs can indicate
            that your child might benefit from early intervention therapy. The
            earlier therapy begins, the better the outcomes — don&apos;t wait
            for the &ldquo;right age&rdquo; to seek help.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CONDITIONS.map((cond) => (
              <div
                key={cond.title}
                className="bg-white rounded-[20px] p-8 border border-border shadow-sm transition-all duration-200 hover:shadow-lg hover:border-teal"
              >
                <div className="text-[40px] mb-3.5">{cond.icon}</div>
                <h3 className="font-serif text-[20px] text-slate mb-2">
                  {cond.title}
                </h3>
                <p className="text-[15px] text-body leading-[1.7] mb-5">
                  {cond.overview}
                </p>

                {/* Warning signs */}
                <div className="bg-[#FFF8F0] border border-[#FCD34D] rounded-lg p-3.5 mb-4">
                  <p className="text-[13px] font-semibold text-[#92400E] mb-2">
                    ⚠ When to be concerned:
                  </p>
                  <ul className="flex flex-col gap-1 list-none">
                    {cond.warnings.map((w) => (
                      <li
                        key={w}
                        className="flex items-center gap-1.5 text-[13px] text-[#78350F]"
                      >
                        <span className="text-[11px]">⚠</span> {w}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Therapy helps */}
                <div className="bg-sage-pale border-l-4 border-sage rounded-lg p-3.5">
                  <p className="text-[13px] font-semibold text-sage mb-2">
                    ✓ How therapy helps:
                  </p>
                  <ul className="flex flex-col gap-1 list-none">
                    {cond.therapyHelps.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-1.5 text-[13px] text-slate"
                      >
                        <span className="text-sage font-bold text-[11px]">
                          ✓
                        </span>{" "}
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-12 rounded-[20px] p-10 text-center border border-teal/15"
            style={{ background: "linear-gradient(135deg, #E8F6F6, #EBF3FC)" }}
          >
            <h3 className="font-serif text-[24px] text-slate mb-3">
              Not Sure What Your Child Needs?
            </h3>
            <p className="text-muted text-[16px] mb-7 max-w-[500px] mx-auto">
              A comprehensive initial assessment takes 45–60 minutes and gives
              you a clear picture of your child&apos;s needs and the right
              therapy path forward.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                📅 Book an Assessment
              </Link>
              <a
                href="https://wa.me/916377216003"
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
