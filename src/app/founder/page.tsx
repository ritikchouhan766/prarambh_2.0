import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { THERAPISTS } from "@/lib/constants";
import guidedActivity from "@/assets/hero/guided-activity-hero.png";

export const metadata: Metadata = {
  title: "Our Founder",
  description: "Meet the founder of Parambh Rehab Center in Jodhpur.",
};

export default function FounderPage() {
  const founder = THERAPISTS[0];
  return (
    <>
      <header className="page-hero">
        <div className="site-container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <strong>Our founder</strong>
          </nav>
          <p className="eyebrow">The person behind Parambh</p>
          <h1>Care built around possibility.</h1>
          <p>
            Meet the clinician and founder creating a more thoughtful path to
            pediatric rehabilitation in Jodhpur.
          </p>
        </div>
      </header>
      <main className="founder-page">
        <div className="site-container">
          <section className="founder-grid">
            <div className="founder-portrait">
              <Image
                src={guidedActivity}
                alt="A child participating in a guided therapy activity"
                fill
                sizes="(max-width: 800px) 100vw, 42vw"
              />
            </div>
            <div>
              <span className="tag-pill">Our founder</span>
              <h2>{founder.name}</h2>
              <p className="founder-role">{founder.designation}</p>
              {founder.bio.map((paragraph) => (
                <p className="founder-copy" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <Link href="/contact" className="btn-primary">
                Book an assessment
              </Link>
            </div>
          </section>
          <section className="founder-principles">
            <h3>A simple clinical philosophy</h3>
            <div>
              <article>
                <strong>Listen first</strong>
                <p>
                  Every plan begins with careful observation, conversation, and
                  the family&apos;s goals.
                </p>
              </article>
              <article>
                <strong>Make progress visible</strong>
                <p>
                  Clear milestones help children, parents, and clinicians move
                  forward together.
                </p>
              </article>
              <article>
                <strong>Carry it home</strong>
                <p>
                  Practical parent guidance turns therapy into confidence beyond
                  the clinic.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
