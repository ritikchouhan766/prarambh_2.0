"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { HERO_IMAGES } from "@/lib/site-content";

type Slide = { image: StaticImageData; alt: string; position: string };

const slides: Slide[] = [
  {
    image: HERO_IMAGES[0],
    alt: "A child proudly holding colourful handprint artwork",
    position: "center 68%",
  },
  {
    image: HERO_IMAGES[1],
    alt: "A therapist guiding a child through a creative learning activity",
    position: "center 68%",
  },
  {
    image: HERO_IMAGES[2],
    alt: "A physiotherapist high-fiving a child during a therapy session",
    position: "center 72%",
  },
  {
    image: HERO_IMAGES[3],
    alt: "A child creating colourful artwork during therapy",
    position: "center 48%",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="hero-shell" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-availability">
            <span aria-hidden="true">&#9679;</span> Now accepting new patients —
            Jodhpur
          </p>
          <p className="eyebrow">Parambh Rehab Center</p>
          <h1 id="hero-heading">
            Helping children grow stronger, move better, and live independently.
          </h1>
          <p className="hero-intro">
            Early therapy and expert care for your child&apos;s development — in
            a warm, child-friendly environment where every small step matters.
          </p>
          <div className="hero-actions" aria-label="Appointment options">
            <Link href="/contact" className="btn-primary">
              <span aria-hidden="true">&#128197;</span> Book appointment
            </Link>
            <a href={`tel:${SITE.phone}`} className="btn-call">
              <span aria-hidden="true">&#9742;</span> Call now
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              <span aria-hidden="true">&#9679;</span> WhatsApp
            </a>
          </div>
          <div className="hero-reassurance" aria-label="Care highlights">
            <span>Qualified pediatric care</span>
            <span>Personalized plans</span>
            <span>Family-first support</span>
          </div>
        </div>

        <div
          className="hero-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Therapy activities"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="hero-carousel-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                className="hero-slide"
                key={slide.alt}
                aria-hidden={activeSlide !== slides.indexOf(slide)}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slides.indexOf(slide) === 0}
                  quality={90}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: slide.position }}
                />
              </div>
            ))}
          </div>
          <div className="hero-carousel-controls">
            {slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={index === activeSlide ? "active" : ""}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.alt}`}
                aria-current={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
