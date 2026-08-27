import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Parambh Rehab Center team. We are hiring pediatric therapists and therapy interns in Jodhpur.",
};

const openings = [
  {
    type: "Full-time opportunity",
    title: "Pediatric Physiotherapist",
    summary:
      "Help children build strength, movement, confidence, and independence through thoughtful, goal-led therapy.",
    details: [
      "BPT or MPT in Physiotherapy",
      "Experience with pediatric or neurodevelopmental care is preferred",
      "Comfort working with parents and multidisciplinary teams",
      "Warm, patient, and committed to continuous learning",
    ],
  },
  {
    type: "Learning opportunity",
    title: "Therapy Intern",
    summary:
      "Build practical experience in a child-friendly rehabilitation setting with close guidance from our clinical team.",
    details: [
      "Current student or recent graduate in Physiotherapy, Occupational Therapy, Speech Therapy, or Special Education",
      "Strong interest in pediatric rehabilitation",
      "Reliable, observant, and willing to learn",
      "Internship duration and schedule discussed during selection",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero careers-hero">
        <div className="site-container">
          <nav className="flex items-center gap-2 text-[13px] text-muted mb-4">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span className="text-muted">›</span>
            <span className="text-slate">Careers</span>
          </nav>
          <span className="tag-pill">Join our team</span>
          <h1 className="font-serif text-[clamp(32px,5vw,54px)] text-slate mb-4">
            Help children take their next step.
          </h1>
          <p className="max-w-[650px] text-[17px] text-muted">
            We are growing a kind, skilled team at Parambh Rehab Center in
            Jodhpur. Bring your clinical curiosity, patience, and care to work
            that makes a difference every day.
          </p>
        </div>
      </section>

      <main className="careers-page section-pad">
        <div className="site-container">
          <div className="careers-intro">
            <div>
              <p className="eyebrow">Current openings</p>
              <h2 className="font-serif text-[clamp(28px,4vw,42px)] text-slate">
                Grow with Parambh
              </h2>
            </div>
            <p className="text-[15px] text-muted leading-[1.75]">
              Every role here contributes to a child&apos;s progress. We value
              respectful care, clear communication, and a willingness to keep
              learning alongside families.
            </p>
          </div>

          <div className="careers-openings">
            {openings.map((opening) => (
              <article className="career-opening" key={opening.title}>
                <p className="career-type">{opening.type}</p>
                <h3 className="font-serif text-[28px] text-slate mb-3">
                  {opening.title}
                </h3>
                <p className="text-[15px] text-muted leading-[1.7] mb-5">
                  {opening.summary}
                </p>
                <ul>
                  {opening.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className="careers-apply" aria-labelledby="apply-heading">
            <div>
              <p className="eyebrow">How to apply</p>
              <h2
                id="apply-heading"
                className="font-serif text-[30px] text-slate mb-2"
              >
                Start the conversation
              </h2>
              <p className="text-[15px] text-muted leading-[1.7]">
                Send your CV and a short note about the role you are interested
                in. We will get back to you to discuss the next steps.
              </p>
            </div>
            <div className="careers-actions">
              <a
                className="btn-primary"
                href={`mailto:${SITE.email}?subject=Career%20application%20at%20Parambh`}
              >
                Email your CV
              </a>
              <a className="btn-outline" href={`tel:${SITE.phone}`}>
                Call {SITE.phone}
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
