import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TherapistSection from "@/components/Therapist";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FacilityGallery from "@/components/FacilityGallery";
import { WHY_US, ASSESSMENT_STEPS, FAQ_ITEMS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parambh Rehab Center | Jodhpur",
  description:
    "Expert physiotherapy, speech therapy, occupational therapy for children in Jodhpur. Certified pediatric therapist. Book your child's assessment today.",
};

// ── ABOUT SECTION ──────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section-pad about-section">
      <div className="site-container">
        <div className="about-grid">
          {/* Visual panel */}
          <div className="about-panel">
            <div className="about-quote">
              &ldquo;Every child has unique potential. Our role is to remove the
              barriers so they can reach it.&rdquo;
            </div>
            <div className="about-approach">
              <p className="text-[12px] text-muted font-semibold uppercase tracking-[0.06em] mb-2.5">
                Our Approach
              </p>
              {[
                { color: "bg-teal", text: "Assessment & Goal Setting" },
                { color: "bg-blue", text: "Individualized Therapy Plan" },
                { color: "bg-sage", text: "Family Training & Support" },
                { color: "bg-teal", text: "Progress Monitoring" },
              ].map((step) => (
                <div key={step.text} className="about-step">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${step.color}`}
                  />
                  {step.text}
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="tag-pill">Who we are</span>
            <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-4">
              A Place Where Every Child&apos;s Journey Begins
            </h2>
            <p className="about-lead">
              Parambh is a dedicated private clinic in Jodhpur offering
              specialized physiotherapy and multi-disciplinary rehabilitation
              for children with developmental, neurological, and physical
              challenges.
            </p>

            <div className="about-features">
              {[
                {
                  title: "Physiotherapy-led care",
                  desc: "Evidence-based techniques targeting movement, strength, and functional independence.",
                },
                {
                  title: "Multi-disciplinary therapies",
                  desc: "Speech, occupational, behavioral therapy and special education — all coordinated under one roof.",
                },
                {
                  title: "Parent-centered approach",
                  desc: "Parents are partners. Home program guidance ensures progress continues between sessions.",
                },
              ].map((feat) => (
                <div key={feat.title} className="flex items-start gap-3.5">
                  <div className="about-check">✓</div>
                  <p className="text-[15px]">
                    <strong className="block font-semibold text-slate">
                      {feat.title}
                    </strong>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarePromise() {
  const promises = [
    [
      "✦",
      "Personalized care",
      "A plan built around your child's strengths, goals, and daily routines.",
    ],
    [
      "♡",
      "Playful therapy",
      "Meaningful progress through encouraging, child-led learning and movement.",
    ],
    [
      "+",
      "Family partnership",
      "Clear guidance so progress continues beyond the clinic and at home.",
    ],
    [
      "●",
      "Brighter futures",
      "Skills that help children grow in confidence, communication, and independence.",
    ],
  ];
  return (
    <section className="care-promise" aria-labelledby="care-heading">
      <div className="site-container">
        <div className="care-promise-intro">
          <p className="eyebrow">Our promise to families</p>
          <h2 id="care-heading">Expert care. Brighter futures.</h2>
          <p>
            We offer warm, personalized therapy programs designed to help each
            child progress with clarity, comfort, and confidence.
          </p>
        </div>
        <div className="promise-grid">
          {promises.map(([icon, title, copy]) => (
            <article key={title} className="promise-card">
              <span aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssessmentProcess() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="max-w-[700px] mb-10">
          <span className="tag-pill">How we work</span>
          <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-3">
            A clear path from concern to care
          </h2>
          <p className="text-[17px] text-muted">
            We begin with understanding your child and end with a practical plan
            that gives your family clarity and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {ASSESSMENT_STEPS.map((step, index) => (
            <article key={step.title} className="service-card">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-pale text-sm font-bold text-teal">
                0{index + 1}
              </div>
              <h3 className="font-sans font-semibold text-[17px] text-slate mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/assessment" className="btn-primary">
            Learn the assessment process
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustSignals() {
  return (
    <section className="section-pad bg-[#f4fbfb]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <span className="tag-pill">Why families trust us</span>
            <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-4">
              Clear care, clear communication, and a reassuring first step.
            </h2>
            <p className="text-[17px] text-muted mb-6">
              We believe families need more than a therapy list. They need an
              easy, honest, supportive way to understand what the next step is.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Jodhpur-based care", value: "Local support" },
                { title: "Phone & WhatsApp", value: SITE.phone },
                { title: "Warm environment", value: "Child-first approach" },
                { title: "Guided assessment", value: "Step-by-step journey" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[16px] border border-[#dfeceb] bg-white p-4 shadow-sm"
                >
                  <div className="font-sans text-[12px] uppercase tracking-[0.08em] text-teal mb-2">
                    {item.title}
                  </div>
                  <div className="font-sans font-semibold text-[16px] text-slate">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] border border-[#ddebf0] bg-white p-6 shadow-[0_18px_38px_rgba(15,42,54,0.06)]">
            <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-teal mb-3">
              Visit and connect
            </div>
            <div className="space-y-4 text-[15px] text-muted">
              <div>
                <strong className="block font-semibold text-slate mb-1">
                  Address
                </strong>
                <span>{SITE.address}</span>
              </div>
              <div>
                <strong className="block font-semibold text-slate mb-1">
                  Call
                </strong>
                <a
                  href={`tel:${SITE.phone}`}
                  className="hover:text-teal underline-offset-4 hover:underline"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <strong className="block font-semibold text-slate mb-1">
                  WhatsApp
                </strong>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal underline-offset-4 hover:underline"
                >
                  Chat with our team
                </a>
              </div>
              <div>
                <strong className="block font-semibold text-slate mb-1">
                  Directions
                </strong>
                <a
                  href={SITE.mapShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal underline-offset-4 hover:underline"
                >
                  Open the map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section className="section-pad bg-[#f8fbfb]">
      <div className="site-container">
        <div className="max-w-[700px] mb-10">
          <span className="tag-pill">Parent questions</span>
          <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-3">
            Common questions parents ask before they reach out
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="rounded-[18px] border border-[#e5edf1] bg-white p-5 shadow-sm"
            >
              <h3 className="font-sans font-semibold text-[16px] text-slate mb-2">
                {item.question}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="btn-outline">
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── WHY US ─────────────────────────────────────────────────────────────────────
function WhyUs() {
  return (
    <section className="section-pad bg-teal-pale">
      <div className="site-container">
        <div className="max-w-[600px]">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4 bg-white text-teal">
            Why Families Choose Us
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-3">
            Care That Goes Beyond the Session
          </h2>
          <p className="text-[17px] text-muted">
            Choosing the right centre for your child is one of the most
            important decisions you&apos;ll make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {WHY_US.map((item) => (
            <div key={item.num} className="why-card">
              <div className="font-serif text-[36px] text-teal-light mb-3 leading-none">
                {item.num}
              </div>
              <h4 className="font-sans font-semibold text-[16px] text-slate mb-2">
                {item.title}
              </h4>
              <p className="text-[14px] text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── HOME PAGE ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <CarePromise />
      <About />
      <AssessmentProcess />
      <TrustSignals />
      <FacilityGallery />
      <Services preview={true} />
      <WhyUs />
      <TherapistSection />
      <Testimonials />
      <HomeFaq />
      <CTA />
    </>
  );
}
