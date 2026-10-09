import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Read common questions parents ask before booking therapy or an assessment with Parambh Rehab Center.",
};

export default function FAQPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <nav className="flex items-center justify-center gap-2 text-[13px] text-muted mb-4">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-slate">FAQ</span>
          </nav>
          <h1 className="font-serif text-[clamp(30px,4vw,42px)] text-slate mb-3">
            Frequently asked questions
          </h1>
          <p className="mx-auto max-w-2xl text-[16px] text-muted">
            Helpful information for families who are considering support for
            their child.
          </p>
        </div>
      </div>

      <section className="section-pad bg-[#f9fbfb]">
        <div className="site-container max-w-4xl">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="rounded-[18px] border border-[#e5edf1] bg-white p-6 shadow-sm"
              >
                <h2 className="font-sans font-semibold text-[18px] text-slate mb-2">
                  {item.question}
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
