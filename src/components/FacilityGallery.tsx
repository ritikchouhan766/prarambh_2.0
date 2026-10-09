import Image from "next/image";
import Link from "next/link";
import { FACILITY_IMAGES } from "@/lib/site-content";

export default function FacilityGallery() {
  return (
    <section className="facility-section" aria-labelledby="facility-heading">
      <div className="site-container">
        <div className="facility-heading">
          <span className="facility-kicker">• Take a look inside</span>
          <h2 id="facility-heading">Our Facility</h2>
          <p>
            A bright, safe and playful space, purpose-built for paediatric
            therapy.
          </p>
        </div>
        <div className="facility-grid">
          {FACILITY_IMAGES.slice(0, 5).map(({ image, label }, index) => (
            <figure
              className={`facility-tile facility-tile-${index + 1}`}
              key={label}
            >
              <Image
                src={image}
                alt={label}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="facility-gallery-action">
          <Link
            href="/gallery"
            className="btn-outline inline-flex items-center gap-2"
          >
            View full gallery <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
