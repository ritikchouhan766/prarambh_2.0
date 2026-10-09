import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_PAGES, getServiceBySlug } from "@/lib/site-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICE_PAGES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  return {
    title: service?.title ?? "Therapy Service",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();

  return (
    <>
      <header className="page-hero">
        <div className="site-container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <strong>{service.title}</strong>
          </nav>
          <p className="eyebrow">Personalized pediatric care</p>
          <h1>{service.title}</h1>
          <p>{service.headline}</p>
        </div>
      </header>
      <main className="service-detail-page">
        <div className="site-container">
          <section className="service-detail-intro">
            <div className="service-detail-copy">
              <h2>{service.headline}</h2>
              <p>{service.fullDescription}</p>
              <Link href="/contact" className="btn-primary">
                {service.actionLabel}
              </Link>
            </div>
          </section>
          <section className="service-detail-columns">
            <div>
              <h3>Who this can help</h3>
              <ul>
                {service.problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>What we work towards</h3>
              <ul>
                {service.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
