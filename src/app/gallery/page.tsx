"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FACILITY_IMAGES } from "@/lib/site-content";

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selected = currentIndex === null ? null : FACILITY_IMAGES[currentIndex];

  const openImage = (image: string, label: string, index: number) => {
    if (!image.trim()) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsClosing(false);
    setCurrentIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setCurrentIndex(null);
      setIsClosing(false);
    }, 180);
  }, []);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) =>
      index === null
        ? null
        : (index - 1 + FACILITY_IMAGES.length) % FACILITY_IMAGES.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((index) =>
      index === null ? null : (index + 1) % FACILITY_IMAGES.length,
    );
  }, []);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, closeLightbox, showNext, showPrevious]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <>
      <div className="page-hero gallery-page-hero">
        <div className="site-container text-center">
          <nav className="flex items-center justify-center gap-2 text-[13px] text-muted mb-4">
            <Link href="/" prefetch={true} className="hover:text-teal">
              Home
            </Link>
            <span>›</span>
            <span className="text-slate">Gallery</span>
          </nav>
          <h1 className="font-serif text-[clamp(30px,4vw,42px)] text-slate mb-3">
            Our Space, Our Smiles
          </h1>
          <p className="mx-auto max-w-2xl text-[16px] text-muted">
            A welcoming environment that helps children feel safe, inspired and
            ready to grow.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-[#f9fbfb]">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACILITY_IMAGES.map(({ image, label }, index) => (
              <button
                key={label + index}
                type="button"
                onClick={() => openImage(image, label, index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[#dbe9ee] bg-white text-left shadow-[0_18px_38px_rgba(24,53,68,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(24,53,68,0.09)]"
                aria-label={`Open ${label} gallery image`}
              >
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102b3d]/75 via-transparent to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-4 text-base font-semibold text-white">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected ? (
        <div
          className={`gallery-lightbox ${isClosing ? "gallery-lightbox-closing" : ""}`}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={selected.label}
        >
          <div
            className="gallery-lightbox-content"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeLightbox();
            }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const startX = touchStartX.current;
              const endX = event.changedTouches[0]?.clientX;
              touchStartX.current = null;
              if (startX === null || endX === undefined) return;
              const difference = endX - startX;
              if (Math.abs(difference) > 50) {
                if (difference > 0) showPrevious();
                else showNext();
              }
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-0 top-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-3xl text-white transition hover:bg-black/70"
              aria-label="Close gallery image"
            >
              ×
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/75 sm:left-3 sm:h-14 sm:w-14"
              aria-label="Previous gallery image"
              title="Previous image"
            >
              ❮
            </button>

            <div className="gallery-lightbox-image">
              <Image
                src={selected.image}
                alt={selected.label}
                fill
                sizes="100vw"
                unoptimized
                priority
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/75 sm:right-3 sm:h-14 sm:w-14"
              aria-label="Next gallery image"
              title="Next image"
            >
              ❯
            </button>

            <p className="gallery-lightbox-caption">
              {selected.label}{" "}
              <span className="text-white/65">
                ({currentIndex! + 1} / {FACILITY_IMAGES.length})
              </span>
            </p>

            <div className="gallery-lightbox-thumbnails">
              {FACILITY_IMAGES.map(({ image, label }, index) => (
                <button
                  key={`${label}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition sm:h-14 sm:w-20 ${index === currentIndex ? "border-white opacity-100" : "border-white/35 opacity-60 hover:opacity-100"}`}
                  aria-label={`Show ${label}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="80px"
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
