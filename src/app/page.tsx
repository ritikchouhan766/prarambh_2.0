import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TherapistSection from "@/components/Therapist";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FacilityGallery from "@/components/FacilityGallery";
import { WHY_US } from "@/lib/constants";

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
      "A plan built around your child's strengths and goals.",
    ],
    [
      "♡",
      "Playful therapy",
      "Meaningful progress through encouraging, child-led sessions.",
    ],
    [
      "+",
      "Family partnership",
      "Clear guidance so progress continues at home.",
    ],
    [
      "●",
      "Brighter futures",
      "Skills that help children join in with confidence.",
    ],
  ];
  return (
    <section className="care-promise" aria-labelledby="care-heading">
      <div className="site-container">
        <div className="care-promise-intro">
          <p className="eyebrow">Our promise to families</p>
          <h2 id="care-heading">Expert care. Brighter futures.</h2>
          <p>
            We offer personalized therapy programs to help children achieve
            their full potential and lead a more independent life.
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
      <FacilityGallery />
      <Services preview={true} />
      <WhyUs />
      <TherapistSection />
      <Testimonials />
      <CTA />
    </>
  );
}
