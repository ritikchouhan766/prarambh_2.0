"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FACILITY_IMAGES } from "@/lib/site-content";

export default function GalleryPage() {
  const [selected, setSelected] = useState<{
    src: string;
    label: string;
    index: number;
  } | null>(null);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

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
                onClick={() => setSelected({ src: image.src, label, index })}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1e2b]/75 p-3 backdrop-blur-sm sm:p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.label}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/20 bg-white shadow-[0_30px_80px_rgba(8,19,28,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-20 w-full overflow-hidden border-b border-slate-200 bg-slate-100 sm:h-28">
              <Image
                src={selected.src}
                alt=""
                fill
                sizes="100vw"
                className="scale-105 object-cover opacity-60 blur-[2px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-slate-900/10 to-white/60" />
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-slate shadow-md transition hover:bg-white"
              aria-label="Close gallery image"
            >
              ×
            </button>

            <div className="relative bg-white px-3 pb-4 pt-2 sm:px-5 sm:pb-5">
              <div className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-[18px] bg-[#f4f9fb] ring-1 ring-slate-200">
                <div className="relative aspect-[16/10] max-h-[70vh] min-h-[260px]">
                  <Image
                    src={selected.src}
                    alt={selected.label}
                    fill
                    sizes="100vw"
                    className="object-contain p-2 sm:p-3"
                  />
                </div>
              </div>
              <div className="px-1 pt-4 text-center text-base font-semibold text-slate sm:text-lg">
                {selected.label}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
