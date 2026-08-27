"use client";

import Image from "next/image";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { THERAPISTS, type Therapist } from "@/lib/constants";
import therapistPhoto from "@/assets/therapist/dr_lakshita.jpeg";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const AUTO_ROTATE_MS = 6000;
const ANIM_DURATION = 480; // ms — must match CSS below

// ─── ANIMATION PHASE ─────────────────────────────────────────────────────────
type Phase = "idle" | "exit" | "enter";

// ─── PROFILE CARD ────────────────────────────────────────────────────────────
function ProfileCard({
  therapist,
  preview,
}: {
  therapist: Therapist;
  preview: boolean;
}) {
  return (
    <div
      className="therapist-profile-card rounded-[10px] p-5 text-center h-full"
      style={{ background: "#E8F6F6" }}
    >
      <div
        className="therapist-photo relative w-[250px] h-[250px] rounded-full mx-auto mb-6 overflow-hidden
                   border-[5px] border-white shadow-lg"
      >
        {therapist.name === "Lakshita Chouhan" ? (
          <Image
            src={therapistPhoto}
            alt={`${therapist.name}, ${therapist.designation}`}
            fill
            sizes="250px"
            className="object-cover object-center"
            priority
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-[48px]"
            style={{ background: "linear-gradient(135deg,#0E7C7B,#1A5FA8)" }}
            aria-hidden="true"
          >
            👩‍⚕️
          </div>
        )}
      </div>

      <h3
        className="font-serif leading-tight mb-1"
        style={{ fontSize: "22px", color: "#2C3E50" }}
      >
        {therapist.name}
      </h3>
      <p
        className="font-semibold mb-5"
        style={{ fontSize: "13px", color: "#0E7C7B" }}
      >
        {therapist.designation}
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {therapist.qualifications.map((q) => (
          <span
            key={q}
            className="bg-white border rounded-md px-3 py-1.5 font-semibold"
            style={{
              fontSize: "12px",
              color: "#2C3E50",
              borderColor: "#E2E8F0",
            }}
          >
            {q}
          </span>
        ))}
      </div>

      <div className="bg-white rounded-[10px] py-3.5 px-4 flex justify-around mb-5">
        {therapist.stats.map((s) => (
          <div key={s.key} className="text-center">
            <div
              className="font-serif font-bold"
              style={{ fontSize: "20px", color: "#0E7C7B" }}
            >
              {s.val}
            </div>
            <div
              style={{ fontSize: "11px", color: "#718096", marginTop: "2px" }}
            >
              {s.key}
            </div>
          </div>
        ))}
      </div>

      {preview ? (
        <Link
          href="/therapist"
          className="block w-full text-center px-5 py-3 rounded-lg border-2
                     font-semibold transition-all duration-200 hover:opacity-80"
          style={{ fontSize: "14px", borderColor: "#0E7C7B", color: "#0E7C7B" }}
        >
          View Full Profile →
        </Link>
      ) : (
        <div
          className="p-4 rounded-[12px] text-left"
          style={{ background: "rgba(14,124,123,.08)" }}
        >
          <p
            className="font-bold uppercase mb-2"
            style={{
              fontSize: "12px",
              letterSpacing: ".07em",
              color: "#718096",
            }}
          >
            Contact Directly
          </p>
          <a
            href="tel:+916377216003"
            className="flex items-center gap-2 font-semibold mb-2"
            style={{ fontSize: "14px", color: "#0E7C7B" }}
          >
            📞 +91 6377216003
          </a>
          <a
            href="https://wa.me/916377216003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold"
            style={{ fontSize: "14px", color: "#25D366" }}
          >
            💬 WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

// ─── INFO PANEL ───────────────────────────────────────────────────────────────
function InfoPanel({
  therapist,
  preview,
}: {
  therapist: Therapist;
  preview: boolean;
}) {
  const firstName =
    therapist.name
      .split(" ")
      .find((w) => w !== "Dr." && w !== "Ms." && w !== "Mr.") ??
    therapist.name.split(" ")[0];

  return (
    <div>
      <span
        className="inline-block font-semibold uppercase rounded-full mb-4"
        style={{
          fontSize: "12px",
          letterSpacing: ".08em",
          padding: "4px 16px",
          background: "#E8F6F6",
          color: "#0E7C7B",
        }}
      >
        {preview ? "Meet Our Therapist" : "Professional Profile"}
      </span>

      <h2
        className="font-serif mb-5"
        style={{
          fontSize: "clamp(26px,4vw,36px)",
          color: "#2C3E50",
          lineHeight: 1.2,
        }}
      >
        {therapist.name}
      </h2>

      {therapist.bio.map((para, i) => (
        <p
          key={i}
          className="mb-5"
          style={{ fontSize: "15px", color: "#4A5568", lineHeight: 1.75 }}
        >
          {para}
        </p>
      ))}

      <p
        className="font-semibold mb-3"
        style={{ fontSize: "15px", color: "#2C3E50" }}
      >
        Areas of Specialization:
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {therapist.specializations.map((s) => (
          <span
            key={s}
            className="rounded-md px-3.5 py-1.5 font-medium border"
            style={{
              fontSize: "13px",
              background: "#E8F6F6",
              color: "#0E7C7B",
              borderColor: "rgba(14,124,123,.2)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                     font-semibold text-white transition-all duration-200
                     hover:opacity-90 hover:-translate-y-px"
          style={{ fontSize: "15px", background: "#0E7C7B" }}
        >
          📅 Book with {firstName}
        </Link>
        <a
          href="https://wa.me/916377216003"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                     font-semibold text-white transition-all duration-200
                     hover:opacity-90 hover:-translate-y-px"
          style={{ fontSize: "15px", background: "#25D366" }}
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── ANIMATED SLIDE WRAPPER ───────────────────────────────────────────────────
// Renders outgoing + incoming slides simultaneously in a clipped container,
// so the exit and enter happen at the same time — real slider feel.
function SlideWrapper({
  current,
  prev,
  phase,
  direction,
}: {
  current: number;
  prev: number;
  phase: Phase;
  direction: "next" | "prev";
}) {
  const therapistCurrent = THERAPISTS[current];
  const therapistPrev = THERAPISTS[prev];

  // Outgoing: slide out to the left (next) or right (prev)
  const exitStyle: CSSProperties =
    phase === "exit"
      ? {
          animation: `thExit${direction === "next" ? "Left" : "Right"} ${ANIM_DURATION}ms cubic-bezier(.4,0,.2,1) forwards`,
        }
      : { opacity: 0, pointerEvents: "none", position: "absolute", inset: 0 };

  // Incoming: slide in from the right (next) or left (prev)
  const enterStyle: CSSProperties =
    phase === "enter" || phase === "exit"
      ? {
          animation: `thEnter${direction === "next" ? "Right" : "Left"} ${ANIM_DURATION}ms cubic-bezier(.4,0,.2,1) forwards`,
        }
      : {};

  if (phase === "idle") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[60px] items-start">
        <ProfileCard therapist={therapistCurrent} preview={true} />
        <InfoPanel therapist={therapistCurrent} preview={true} />
      </div>
    );
  }

  return (
    <div
      style={{ position: "relative", overflow: "hidden", minHeight: "520px" }}
    >
      {/* Outgoing slide */}
      <div style={{ ...exitStyle }}>
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[60px] items-start">
          <ProfileCard therapist={therapistPrev} preview={true} />
          <InfoPanel therapist={therapistPrev} preview={true} />
        </div>
      </div>

      {/* Incoming slide */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...enterStyle,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[60px] items-start">
          <ProfileCard therapist={therapistCurrent} preview={true} />
          <InfoPanel therapist={therapistCurrent} preview={true} />
        </div>
      </div>
    </div>
  );
}

// ─── MAIN CAROUSEL ────────────────────────────────────────────────────────────
export default function TherapistSection() {
  const total = THERAPISTS.length;

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (target: number, dir: "next" | "prev") => {
      if (phase !== "idle" || target === current) return;

      setDirection(dir);
      setPrev(current);
      setPhase("exit");
      setProgressKey((k) => k + 1);

      // Halfway through: swap content
      setTimeout(() => {
        setCurrent(target);
        setPhase("enter");
      }, ANIM_DURATION * 0.5);

      // Done: reset to idle
      setTimeout(() => {
        setPhase("idle");
      }, ANIM_DURATION * 1.05);
    },
    [phase, current],
  );

  const goNext = useCallback(
    () => goTo((current + 1) % total, "next"),
    [current, total, goTo],
  );

  const goPrev = useCallback(
    () => goTo((current - 1 + total) % total, "prev"),
    [current, total, goTo],
  );

  // Auto-rotate
  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = setTimeout(goNext, AUTO_ROTATE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused, total, goNext]);

  const isAnimating = phase !== "idle";

  return (
    <section className="section-pad overflow-hidden">
      <div className="site-container">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span
              className="inline-block font-semibold uppercase rounded-full mb-4"
              style={{
                fontSize: "12px",
                letterSpacing: ".08em",
                padding: "4px 16px",
                background: "#E8F6F6",
                color: "#0E7C7B",
              }}
            >
              Our Therapists
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(26px,4vw,36px)",
                color: "#2C3E50",
                lineHeight: 1.2,
              }}
            >
              Meet the Team Behind Every Child&apos;s Progress
            </h2>
          </div>

          {total > 1 && (
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0 pb-1">
              <span
                className="font-medium tabular-nums"
                style={{ fontSize: "13px", color: "#718096" }}
              >
                {current + 1} / {total}
              </span>

              {/* Prev button */}
              <button
                onClick={() => {
                  setIsPaused(true);
                  goPrev();
                }}
                disabled={isAnimating}
                aria-label="Previous therapist"
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center
                           font-bold transition-all duration-200 select-none
                           disabled:opacity-40 disabled:cursor-not-allowed
                           hover:scale-105 active:scale-95"
                style={{
                  fontSize: "18px",
                  borderColor: "#E2E8F0",
                  background: "#fff",
                  color: "#2C3E50",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0E7C7B";
                  e.currentTarget.style.color = "#0E7C7B";
                  e.currentTarget.style.background = "#E8F6F6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.color = "#2C3E50";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                ←
              </button>

              {/* Next button */}
              <button
                onClick={() => {
                  setIsPaused(true);
                  goNext();
                }}
                disabled={isAnimating}
                aria-label="Next therapist"
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center
                           font-bold text-white transition-all duration-200 select-none
                           disabled:opacity-40 disabled:cursor-not-allowed
                           hover:scale-105 active:scale-95"
                style={{
                  fontSize: "18px",
                  borderColor: "#0E7C7B",
                  background: "#0E7C7B",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#14A8A7";
                  e.currentTarget.style.borderColor = "#14A8A7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0E7C7B";
                  e.currentTarget.style.borderColor = "#0E7C7B";
                }}
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* ── Name tabs ────────────────────────────────────── */}
        {total > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {THERAPISTS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => {
                  setIsPaused(true);
                  goTo(i, i > current ? "next" : "prev");
                }}
                disabled={isAnimating}
                className="px-4 py-2 rounded-full font-semibold border transition-all
                           duration-200 disabled:cursor-not-allowed"
                style={{
                  fontSize: "13px",
                  background: i === current ? "#0E7C7B" : "#fff",
                  color: i === current ? "#fff" : "#718096",
                  borderColor: i === current ? "#0E7C7B" : "#E2E8F0",
                  transform: i === current ? "scale(1.04)" : "scale(1)",
                }}
              >
                {t.name.replace("Dr. ", "").replace("Ms. ", "")}
              </button>
            ))}
          </div>
        )}

        {/* ── Animated slide area ───────────────────────────── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <SlideWrapper
            current={current}
            prev={prev}
            phase={phase}
            direction={direction}
          />
        </div>

        {/* ── Dots + mobile controls ────────────────────────── */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Mobile prev */}
            <button
              onClick={() => {
                setIsPaused(true);
                goPrev();
              }}
              disabled={isAnimating}
              aria-label="Previous"
              className="sm:hidden w-9 h-9 rounded-full border-2 flex items-center
                         justify-center text-sm transition-all duration-200
                         disabled:opacity-40 select-none"
              style={{
                borderColor: "#E2E8F0",
                background: "#fff",
                color: "#2C3E50",
              }}
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {THERAPISTS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setIsPaused(true);
                    goTo(i, i > current ? "next" : "prev");
                  }}
                  aria-label={`Go to ${t.name}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "28px" : "10px",
                    height: "10px",
                    background: i === current ? "#0E7C7B" : "#E2E8F0",
                  }}
                />
              ))}
            </div>

            {/* Mobile next */}
            <button
              onClick={() => {
                setIsPaused(true);
                goNext();
              }}
              disabled={isAnimating}
              aria-label="Next"
              className="sm:hidden w-9 h-9 rounded-full border-2 flex items-center
                         justify-center text-sm transition-all duration-200
                         disabled:opacity-40 select-none"
              style={{
                borderColor: "#0E7C7B",
                background: "#0E7C7B",
                color: "#fff",
              }}
            >
              →
            </button>
          </div>
        )}

        {/* ── Progress bar ──────────────────────────────────── */}
        {total > 1 && !isPaused && (
          <div
            className="mt-4 mx-auto rounded-full overflow-hidden"
            style={{ maxWidth: "180px", height: "3px", background: "#E2E8F0" }}
          >
            <div
              key={`prog-${progressKey}-${current}`}
              className="h-full rounded-full"
              style={{
                background: "#0E7C7B",
                animation: `thProgress ${AUTO_ROTATE_MS}ms linear forwards`,
              }}
            />
          </div>
        )}

        {/* Resume when paused */}
        {total > 1 && isPaused && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsPaused(false)}
              className="flex items-center gap-1.5 transition-colors"
              style={{ fontSize: "12px", color: "#718096" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0E7C7B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#718096";
              }}
            >
              <span>▶</span> Resume auto-rotate
            </button>
          </div>
        )}

        {/* ── View full team ─────────────────────────────────── */}
        <div className="mt-10 text-center">
          <Link
            href="/therapist"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2
                       font-semibold transition-all duration-200 hover:bg-teal-pale"
            style={{
              fontSize: "14px",
              borderColor: "#0E7C7B",
              color: "#0E7C7B",
            }}
          >
            View Full Team Profiles →
          </Link>
        </div>
      </div>

      {/* ── Keyframes ─────────────────────────────────────────── */}
      <style>{`
        /* Exit animations */
        @keyframes thExitLeft {
          0%   { opacity: 1; transform: translateX(0)    scale(1); }
          100% { opacity: 0; transform: translateX(-6%)  scale(0.97); }
        }
        @keyframes thExitRight {
          0%   { opacity: 1; transform: translateX(0)    scale(1); }
          100% { opacity: 0; transform: translateX(6%)   scale(0.97); }
        }

        /* Enter animations */
        @keyframes thEnterRight {
          0%   { opacity: 0; transform: translateX(6%)   scale(0.97); }
          100% { opacity: 1; transform: translateX(0)    scale(1); }
        }
        @keyframes thEnterLeft {
          0%   { opacity: 0; transform: translateX(-6%)  scale(0.97); }
          100% { opacity: 1; transform: translateX(0)    scale(1); }
        }

        /* Progress bar */
        @keyframes thProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
