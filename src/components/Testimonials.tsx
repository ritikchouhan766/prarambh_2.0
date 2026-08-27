// "use client";

// import { useState, useEffect, useCallback, useRef } from "react";
// import { TESTIMONIALS, FORMS } from "@/lib/constants";

// // ─── CONFIG ───────────────────────────────────────────────────────────────────
// const AUTO_ROTATE_MS = 5000; // ms between auto-slides

// // ─── HOOK: responsive cards per page ─────────────────────────────────────────
// function useCardsPerPage() {
//   const [perPage, setPerPage] = useState(3);

//   useEffect(() => {
//     const update = () => {
//       const w = window.innerWidth;
//       if (w < 640)       setPerPage(1);
//       else if (w < 1024) setPerPage(2);
//       else               setPerPage(3);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return perPage;
// }

// // ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────
// function TestiCard({
//   initial, name, role, quote, color,
// }: {
//   initial: string; name: string; role: string; quote: string; color: string;
// }) {
//   return (
//     <div className="flex flex-col bg-white rounded-[16px] border border-[#E2E8F0] shadow-sm p-7 relative h-full min-h-[260px]">
//       {/* Decorative quote */}
//       <div
//         className="absolute top-4 right-5 font-serif text-[52px] leading-none select-none pointer-events-none"
//         style={{ color: "#E8F6F6" }}
//         aria-hidden="true"
//       >
//         &ldquo;
//       </div>

//       {/* Stars */}
//       <div className="text-[#FBBF24] text-[15px] tracking-[3px] mb-4 select-none">
//         ★★★★★
//       </div>

//       {/* Quote text */}
//       <p className="text-[14px] leading-[1.8] italic text-[#4A5568] flex-1 mb-6 pr-2">
//         {quote}
//       </p>

//       {/* Author */}
//       <div className="flex items-center gap-3 mt-auto">
//         <div
//           className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] text-white flex-shrink-0 select-none"
//           style={{ background: color }}
//         >
//           {initial}
//         </div>
//         <div>
//           <strong className="block text-[14px] text-[#2C3E50] font-semibold leading-tight">
//             {name}
//           </strong>
//           <span className="text-[12px] text-[#718096]">{role}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// export default function Testimonials() {
//   const perPage      = useCardsPerPage();
//   const total        = TESTIMONIALS.length;
//   const totalPages   = Math.ceil(total / perPage);

//   const [currentPage, setCurrentPage]   = useState(0);
//   const [direction,   setDirection]     = useState<"next" | "prev">("next");
//   const [isAnimating, setIsAnimating]   = useState(false);
//   const [isPaused,    setIsPaused]      = useState(false);
//   const [progressKey, setProgressKey]   = useState(0); // restarts CSS animation
//   const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   // Clamp page when screen resizes and perPage changes
//   useEffect(() => {
//     setCurrentPage((p) => (totalPages > 0 ? Math.min(p, totalPages - 1) : 0));
//   }, [totalPages]);

//   // ── Navigate to a specific page ─────────────────────────────────────────────
//   const goToPage = useCallback(
//     (target: number, dir: "next" | "prev") => {
//       if (isAnimating || target === currentPage) return;
//       setDirection(dir);
//       setIsAnimating(true);
//       setProgressKey((k) => k + 1);

//       setTimeout(() => {
//         setCurrentPage(target);
//         setIsAnimating(false);
//       }, 400);
//     },
//     [isAnimating, currentPage]
//   );

//   const goNext = useCallback(() => {
//     const next = (currentPage + 1) % totalPages;
//     goToPage(next, "next");
//   }, [currentPage, totalPages, goToPage]);

//   const goPrev = useCallback(() => {
//     const prev = (currentPage - 1 + totalPages) % totalPages;
//     goToPage(prev, "prev");
//   }, [currentPage, totalPages, goToPage]);

//   // ── Auto-rotate ─────────────────────────────────────────────────────────────
//   useEffect(() => {
//     if (isPaused || totalPages <= 1) return;
//     autoTimer.current = setTimeout(goNext, AUTO_ROTATE_MS);
//     return () => {
//       if (autoTimer.current) clearTimeout(autoTimer.current);
//     };
//   }, [currentPage, isPaused, totalPages, goNext]);

//   // ── Visible cards for current page ─────────────────────────────────────────
//   const startIdx     = currentPage * perPage;
//   const visibleSlice = TESTIMONIALS.slice(startIdx, startIdx + perPage);

//   // Pad last page if incomplete (keeps grid stable)
//   const paddedSlice = [...visibleSlice];
//   while (paddedSlice.length < perPage) {
//     paddedSlice.push(null as unknown as (typeof TESTIMONIALS)[0]);
//   }

//   // ── Slide animation classes ─────────────────────────────────────────────────
//   const slideOut = isAnimating
//     ? direction === "next"
//       ? "opacity-0 -translate-x-10 scale-[0.97]"
//       : "opacity-0 translate-x-10 scale-[0.97]"
//     : "opacity-100 translate-x-0 scale-100";

//   return (
//     <section className="section-pad bg-off overflow-hidden">
//       <div className="site-container">

//         {/* ── HEADER ────────────────────────────────────────── */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
//           <div className="max-w-[580px]">
//             <span
//               className="inline-block text-xs font-semibold tracking-widest uppercase
//                          px-4 py-1 rounded-full mb-4"
//               style={{ background: "#E8F6F6", color: "#0E7C7B" }}
//             >
//               Parent Stories
//             </span>
//             <h2
//               className="font-serif mb-3"
//               style={{ fontSize: "clamp(28px,4vw,38px)", color: "#2C3E50", lineHeight: 1.2 }}
//             >
//               What Families Are Saying
//             </h2>
//             <p style={{ fontSize: "17px", color: "#718096" }}>
//               The most meaningful feedback comes from parents who walked in with uncertainty
//               — and left with hope and progress.
//             </p>
//           </div>

//           {/* Desktop prev / next + counter */}
//           {totalPages > 1 && (
//             <div className="hidden sm:flex items-center gap-3 flex-shrink-0 pb-1">
//               <span className="text-[13px] font-medium tabular-nums" style={{ color: "#718096" }}>
//                 {currentPage + 1} / {totalPages}
//               </span>

//               <button
//                 onClick={() => { setIsPaused(true); goPrev(); }}
//                 disabled={isAnimating}
//                 aria-label="Previous testimonials"
//                 className="w-10 h-10 rounded-full border-2 flex items-center justify-center
//                            text-[18px] font-bold transition-all duration-200
//                            disabled:opacity-40 disabled:cursor-not-allowed
//                            hover:scale-105 active:scale-95"
//                 style={{
//                   borderColor: "#E2E8F0",
//                   background: "#FFFFFF",
//                   color: "#2C3E50",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.borderColor = "#0E7C7B";
//                   (e.currentTarget as HTMLButtonElement).style.color = "#0E7C7B";
//                   (e.currentTarget as HTMLButtonElement).style.background = "#E8F6F6";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.borderColor = "#E2E8F0";
//                   (e.currentTarget as HTMLButtonElement).style.color = "#2C3E50";
//                   (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF";
//                 }}
//               >
//                 ←
//               </button>

//               <button
//                 onClick={() => { setIsPaused(true); goNext(); }}
//                 disabled={isAnimating}
//                 aria-label="Next testimonials"
//                 className="w-10 h-10 rounded-full border-2 flex items-center justify-center
//                            text-[18px] font-bold transition-all duration-200
//                            disabled:opacity-40 disabled:cursor-not-allowed
//                            hover:scale-105 active:scale-95"
//                 style={{
//                   borderColor: "#0E7C7B",
//                   background: "#0E7C7B",
//                   color: "#FFFFFF",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.background = "#14A8A7";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor = "#14A8A7";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.background = "#0E7C7B";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor = "#0E7C7B";
//                 }}
//               >
//                 →
//               </button>
//             </div>
//           )}
//         </div>

//         {/* ── CARDS GRID ─────────────────────────────────────── */}
//         <div
//           className={`grid gap-5 transition-all duration-[400ms] ease-in-out ${slideOut}`}
//           style={{
//             gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
//           }}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {paddedSlice.map((t, i) =>
//             t ? (
//               <TestiCard key={`${currentPage}-${i}`} {...t} />
//             ) : (
//               // Empty placeholder to keep grid stable on last page
//               <div key={`empty-${i}`} className="invisible" aria-hidden="true" />
//             )
//           )}
//         </div>

//         {/* ── DOTS + MOBILE BUTTONS ──────────────────────────── */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-center gap-4 mt-8">
//             {/* Mobile Prev */}
//             <button
//               onClick={() => { setIsPaused(true); goPrev(); }}
//               disabled={isAnimating}
//               aria-label="Previous"
//               className="sm:hidden w-9 h-9 rounded-full border-2 border-[#E2E8F0] bg-white
//                          flex items-center justify-center text-sm text-[#2C3E50]
//                          hover:border-[#0E7C7B] hover:text-[#0E7C7B]
//                          transition-all duration-200 disabled:opacity-40 select-none"
//             >
//               ←
//             </button>

//             {/* Dot indicators */}
//             <div className="flex items-center gap-2">
//               {Array.from({ length: totalPages }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => { setIsPaused(true); goToPage(i, i > currentPage ? "next" : "prev"); }}
//                   aria-label={`Go to page ${i + 1}`}
//                   className="rounded-full transition-all duration-300"
//                   style={{
//                     width:  i === currentPage ? "24px" : "10px",
//                     height: "10px",
//                     background: i === currentPage ? "#0E7C7B" : "#E2E8F0",
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Mobile Next */}
//             <button
//               onClick={() => { setIsPaused(true); goNext(); }}
//               disabled={isAnimating}
//               aria-label="Next"
//               className="sm:hidden w-9 h-9 rounded-full border-2 border-[#0E7C7B] bg-[#0E7C7B]
//                          flex items-center justify-center text-sm text-white
//                          hover:bg-[#14A8A7] hover:border-[#14A8A7]
//                          transition-all duration-200 disabled:opacity-40 select-none"
//             >
//               →
//             </button>
//           </div>
//         )}

//         {/* ── PROGRESS BAR (auto-rotate indicator) ──────────── */}
//         {totalPages > 1 && !isPaused && (
//           <div
//             className="mt-5 mx-auto rounded-full overflow-hidden"
//             style={{ maxWidth: "200px", height: "3px", background: "#E2E8F0" }}
//           >
//             <div
//               key={`prog-${progressKey}-${currentPage}`}
//               className="h-full rounded-full"
//               style={{
//                 background: "#0E7C7B",
//                 animation: `testiProgress ${AUTO_ROTATE_MS}ms linear forwards`,
//               }}
//             />
//           </div>
//         )}

//         {/* Resume auto label */}
//         {totalPages > 1 && isPaused && (
//           <div className="flex justify-center mt-5">
//             <button
//               onClick={() => setIsPaused(false)}
//               className="text-[12px] text-[#718096] hover:text-[#0E7C7B] transition-colors
//                          flex items-center gap-1.5"
//             >
//               <span>▶</span> Resume auto-rotate
//             </button>
//           </div>
//         )}

//         {/* ── FEEDBACK BANNER ───────────────────────────────── */}
//         <div
//           className="mt-10 rounded-[12px] border border-[#E2E8F0] p-6
//                      flex flex-col sm:flex-row items-start sm:items-center
//                      justify-between gap-5 flex-wrap bg-white"
//         >
//           <div>
//             <h4
//               className="font-serif mb-1"
//               style={{ fontSize: "17px", color: "#2C3E50" }}
//             >
//               Have you visited Prarambham?
//             </h4>
//             <p style={{ fontSize: "14px", color: "#718096" }}>
//               Share your experience to help other parents find the right care for their child.
//             </p>
//           </div>
//           <a
//             href={FORMS.feedback}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="whitespace-nowrap flex-shrink-0 inline-flex items-center gap-2
//                        px-5 py-3 rounded-lg border-2 font-semibold text-[14px]
//                        transition-all duration-200 hover:bg-[#E8F6F6]"
//             style={{ borderColor: "#0E7C7B", color: "#0E7C7B" }}
//           >
//             ✍️ Submit Your Feedback
//           </a>
//         </div>

//       </div>

//       {/* Scoped keyframe — no globals.css edit needed */}
//       <style>{`
//         @keyframes testiProgress {
//           from { width: 0%; }
//           to   { width: 100%; }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TESTIMONIALS, FORMS } from "@/lib/constants";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const CARDS_DESKTOP = 3;
const CARDS_TABLET = 2;
const CARDS_MOBILE = 1;
const AUTO_ROTATE_MS = 5000;

// Replace this with your actual Google Maps review link
// To get it: Google Maps → search your business → "Write a review" → copy that URL
const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?sca_esv=02a5ba911fc3640b&sxsrf=ANbL-n4CH8bO7AsZIDYVu65w2f65FSjUfQ:1778049916911&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdHbgkLdaLRDZaZ_i5xIZOrdZrPpBqwPnJXPbU5WKhCsLdhOvXADkykyl1B4uxrbUYgXDbTbXA-xI0wi9BN_ON3WFT11ekZtTxJ81EdxbZ0HWJ7lPB7rYSPsTv8pt8jWwIgB8_U%3D&q=Prarambh+Child+Rehabilitation+center+Reviews&sa=X&ved=2ahUKEwje18KNiKSUAxVdGLkGHfW7Kh4Q0bkNegQIMRAF&biw=1536&bih=703&dpr=1.25#lrd=0x39418d29eeaefc7f:0x25a0f2d88d7d54fd,3,,,,";

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────
function useCardsPerPage() {
  const [perPage, setPerPage] = useState(CARDS_DESKTOP);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(CARDS_MOBILE);
      else if (w < 1024) setPerPage(CARDS_TABLET);
      else setPerPage(CARDS_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perPage;
}

// ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────
function TestiCard({
  initial,
  name,
  role,
  quote,
  color,
}: {
  initial: string;
  name: string;
  role: string;
  quote: string;
  color: string;
}) {
  return (
    <div
      className="flex flex-col bg-white rounded-[16px] border p-7 relative h-full"
      style={{
        borderColor: "#E2E8F0",
        minHeight: "260px",
        boxShadow: "0 1px 4px rgba(0,0,0,.05)",
      }}
    >
      {/* Decorative quote */}
      <div
        className="absolute top-4 right-5 font-serif select-none pointer-events-none"
        style={{ fontSize: "52px", lineHeight: 1, color: "#E8F6F6" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div
        className="mb-4 select-none"
        style={{ color: "#FBBF24", fontSize: "15px", letterSpacing: "3px" }}
      >
        ★★★★★
      </div>

      {/* Quote */}
      <p
        className="italic flex-1 mb-6 pr-2"
        style={{ fontSize: "14px", color: "#4A5568", lineHeight: 1.8 }}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 select-none"
          style={{ background: color, fontSize: "15px" }}
        >
          {initial}
        </div>
        <div>
          <strong
            className="block font-semibold leading-tight"
            style={{ fontSize: "14px", color: "#2C3E50" }}
          >
            {name}
          </strong>
          <span style={{ fontSize: "12px", color: "#718096" }}>{role}</span>
        </div>
      </div>
    </div>
  );
}

// ─── FEEDBACK MODAL ───────────────────────────────────────────────────────────
function FeedbackModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [role, setRole] = useState("Parent");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In future: POST to your backend/DB here
    setSubmitted(true);
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,.5)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-[20px] w-full relative"
        style={{ maxWidth: "520px", boxShadow: "0 24px 60px rgba(0,0,0,.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:bg-gray-100"
          style={{ fontSize: "18px", color: "#718096" }}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="text-3xl mb-3">✍️</div>
                <h3
                  className="font-serif mb-1"
                  style={{ fontSize: "22px", color: "#2C3E50" }}
                >
                  Share Your Experience
                </h3>
                <p style={{ fontSize: "14px", color: "#718096" }}>
                  Your feedback helps other parents find the right care for
                  their child.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-semibold uppercase tracking-wide"
                    style={{ fontSize: "12px", color: "#2C3E50" }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rekha Sharma"
                    required
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-150"
                    style={{
                      border: "1.5px solid #E2E8F0",
                      fontSize: "15px",
                      color: "#2C3E50",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0E7C7B";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(14,124,123,.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-semibold uppercase tracking-wide"
                    style={{ fontSize: "12px", color: "#2C3E50" }}
                  >
                    I am a
                  </label>
                  <div className="flex gap-2">
                    {["Parent", "Patient", "Caregiver"].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className="flex-1 py-2.5 rounded-lg border-2 font-semibold transition-all duration-150"
                        style={{
                          fontSize: "13px",
                          borderColor: role === r ? "#0E7C7B" : "#E2E8F0",
                          background: role === r ? "#E8F6F6" : "#fff",
                          color: role === r ? "#0E7C7B" : "#718096",
                        }}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-semibold uppercase tracking-wide"
                    style={{ fontSize: "12px", color: "#2C3E50" }}
                  >
                    Your Review *
                  </label>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Tell other parents about your experience at Parambh..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-150 resize-none"
                    style={{
                      border: "1.5px solid #E2E8F0",
                      fontSize: "15px",
                      color: "#2C3E50",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0E7C7B";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(14,124,123,.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                  style={{ fontSize: "15px", background: "#0E7C7B" }}
                >
                  Submit Feedback
                </button>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#718096",
                    textAlign: "center",
                  }}
                >
                  Your feedback may be featured on our website to help other
                  families.
                </p>
              </form>
            </>
          ) : (
            /* ── SUCCESS STATE ─────────────────────────────── */
            <div className="text-center py-4">
              {/* Checkmark animation */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl"
                style={{
                  background: "#E8F6F6",
                  animation: "popIn .4s cubic-bezier(.4,0,.2,1)",
                }}
              >
                ✅
              </div>

              <h3
                className="font-serif mb-2"
                style={{ fontSize: "22px", color: "#2C3E50" }}
              >
                Thank You, {name.split(" ")[0]}!
              </h3>
              <p
                className="mb-8"
                style={{ fontSize: "15px", color: "#718096", lineHeight: 1.7 }}
              >
                Your feedback has been recorded. It helps other parents in
                Jodhpur find the right care for their child. 💛
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex-1 h-px"
                  style={{ background: "#E2E8F0" }}
                />
                <span style={{ fontSize: "13px", color: "#718096" }}>
                  One more step
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "#E2E8F0" }}
                />
              </div>

              {/* Google Review CTA — the key feature */}
              <div
                className="rounded-[14px] p-5 mb-4"
                style={{ background: "#FFF8F0", border: "1.5px solid #FCD34D" }}
              >
                <div className="text-2xl mb-2">⭐</div>
                <p
                  className="font-semibold mb-1"
                  style={{ fontSize: "15px", color: "#92400E" }}
                >
                  Would you also leave us a Google Review?
                </p>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "13px",
                    color: "#78350F",
                    lineHeight: 1.6,
                  }}
                >
                  It only takes 30 seconds and helps more families discover
                  Parambh on Google Maps.
                </p>
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                  style={{ fontSize: "15px", background: "#EA4335" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Leave a Google Review
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-lg border-2 font-semibold transition-all duration-200 hover:bg-gray-50"
                style={{
                  fontSize: "14px",
                  borderColor: "#E2E8F0",
                  color: "#718096",
                }}
              >
                Maybe Later
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.1); }
          100% { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── MAIN TESTIMONIALS SECTION ────────────────────────────────────────────────
export default function Testimonials() {
  const perPage = useCardsPerPage();
  const total = TESTIMONIALS.length;
  const totalPages = Math.ceil(total / perPage);

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clamp on resize
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const goTo = useCallback(
    (target: number, dir: "next" | "prev") => {
      if (animating || target === page) return;
      setDirection(dir);
      setAnimating(true);
      setProgressKey((k) => k + 1);
      setTimeout(() => {
        setPage(target);
        setAnimating(false);
      }, 320);
    },
    [animating, page],
  );

  const goNext = useCallback(
    () => goTo((page + 1) % totalPages, "next"),
    [page, totalPages, goTo],
  );
  const goPrev = useCallback(
    () => goTo((page - 1 + totalPages) % totalPages, "prev"),
    [page, totalPages, goTo],
  );

  // Auto-rotate — pause when modal is open
  useEffect(() => {
    if (isPaused || showModal || totalPages <= 1) return;
    timerRef.current = setTimeout(goNext, AUTO_ROTATE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [page, isPaused, showModal, totalPages, goNext]);

  const start = page * perPage;
  const visibleCards = TESTIMONIALS.slice(start, start + perPage);
  const paddedCards = [...visibleCards];
  while (paddedCards.length < perPage)
    paddedCards.push(null as unknown as (typeof TESTIMONIALS)[0]);

  const slideClass = animating
    ? direction === "next"
      ? "opacity-0 -translate-x-6 scale-[0.98]"
      : "opacity-0 translate-x-6 scale-[0.98]"
    : "opacity-100 translate-x-0 scale-100";

  return (
    <>
      <section className="section-pad bg-off overflow-hidden">
        <div className="site-container">
          {/* ── HEADER ─────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div style={{ maxWidth: "580px" }}>
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
                Parent Stories
              </span>
              <h2
                className="font-serif mb-3"
                style={{
                  fontSize: "clamp(28px,4vw,38px)",
                  color: "#2C3E50",
                  lineHeight: 1.2,
                }}
              >
                What Families Are Saying
              </h2>
              <p style={{ fontSize: "17px", color: "#718096" }}>
                Real experiences from parents and patients of Parambh, Jodhpur.
              </p>
            </div>

            {/* Desktop controls */}
            {totalPages > 1 && (
              <div className="hidden sm:flex items-center gap-3 flex-shrink-0 pb-1">
                <span
                  className="font-medium tabular-nums"
                  style={{ fontSize: "13px", color: "#718096" }}
                >
                  {page + 1} / {totalPages}
                </span>
                <button
                  onClick={() => {
                    setIsPaused(true);
                    goPrev();
                  }}
                  disabled={animating}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold
                             transition-all duration-200 disabled:opacity-40 hover:scale-105 active:scale-95 select-none"
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
                <button
                  onClick={() => {
                    setIsPaused(true);
                    goNext();
                  }}
                  disabled={animating}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-white
                             transition-all duration-200 disabled:opacity-40 hover:scale-105 active:scale-95 select-none"
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

          {/* ── CARDS ──────────────────────────────────────── */}
          <div
            className={`grid gap-5 transition-all duration-[320ms] ease-in-out ${slideClass}`}
            style={{
              gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))`,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {paddedCards.map((t, i) =>
              t ? (
                <TestiCard key={`${page}-${i}`} {...t} />
              ) : (
                <div
                  key={`empty-${i}`}
                  className="invisible"
                  aria-hidden="true"
                />
              ),
            )}
          </div>

          {/* ── DOTS + MOBILE CONTROLS ──────────────────────── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  setIsPaused(true);
                  goPrev();
                }}
                disabled={animating}
                aria-label="Previous"
                className="sm:hidden w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm transition-all duration-200 disabled:opacity-40 select-none"
                style={{
                  borderColor: "#E2E8F0",
                  background: "#fff",
                  color: "#2C3E50",
                }}
              >
                ←
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsPaused(true);
                      goTo(i, i > page ? "next" : "prev");
                    }}
                    aria-label={`Page ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === page ? "24px" : "10px",
                      height: "10px",
                      background: i === page ? "#0E7C7B" : "#E2E8F0",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  setIsPaused(true);
                  goNext();
                }}
                disabled={animating}
                aria-label="Next"
                className="sm:hidden w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm transition-all duration-200 disabled:opacity-40 select-none"
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

          {/* ── PROGRESS BAR ───────────────────────────────── */}
          {totalPages > 1 && !isPaused && (
            <div
              className="mt-5 mx-auto rounded-full overflow-hidden"
              style={{
                maxWidth: "200px",
                height: "3px",
                background: "#E2E8F0",
              }}
            >
              <div
                key={`prog-${progressKey}-${page}`}
                className="h-full rounded-full"
                style={{
                  background: "#0E7C7B",
                  animation: `testiProg ${AUTO_ROTATE_MS}ms linear forwards`,
                }}
              />
            </div>
          )}

          {/* ── BOTTOM BANNER — Feedback + Google Review ───── */}
          <div
            className="mt-10 rounded-[16px] border p-6"
            style={{ background: "#fff", borderColor: "#E2E8F0" }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 flex-wrap">
              <div>
                <h4
                  className="font-serif mb-1"
                  style={{ fontSize: "17px", color: "#2C3E50" }}
                >
                  Have you visited Parambh?
                </h4>
                <p style={{ fontSize: "14px", color: "#718096" }}>
                  Share your experience — it helps other families in Jodhpur
                  find the right care.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {/* Our feedback form */}
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2
                             font-semibold transition-all duration-200 hover:bg-teal-50 hover:-translate-y-px"
                  style={{
                    fontSize: "14px",
                    borderColor: "#0E7C7B",
                    color: "#0E7C7B",
                  }}
                >
                  ✍️ Submit Feedback
                </button>

                {/* Direct Google Review button */}
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg
                             font-semibold text-white transition-all duration-200
                             hover:opacity-90 hover:-translate-y-px"
                  style={{ fontSize: "14px", background: "#EA4335" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Review on Google
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes testiProg {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </section>

      {/* ── MODAL ────────────────────────────────────────────── */}
      {showModal && <FeedbackModal onClose={() => setShowModal(false)} />}
    </>
  );
}
