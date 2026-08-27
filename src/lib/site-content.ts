import type { StaticImageData } from "next/image";
import creativeActivity from "@/assets/hero/creative-activity-hero.png";
import guidedActivity from "@/assets/hero/guided-activity-hero.png";
import physiotherapySession from "@/assets/hero/physiotherapy-session.png";
import { SERVICES, type ServiceDetail } from "@/lib/constants";

export type ServiceWithSlug = ServiceDetail & { slug: string; images: StaticImageData[] };

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const serviceImages = [creativeActivity, guidedActivity, physiotherapySession];
const serviceSlugs = [
  "pediatric-physiotherapy",
  "speech-therapy",
  "occupational-therapy",
  "behaviour-therapy",
  "special-education",
  "psychological-counselling",
];

export const SERVICE_PAGES: ServiceWithSlug[] = SERVICES.map((service, index) => ({
  ...service,
  slug: serviceSlugs[index] ?? slugify(service.title),
  images: serviceImages.map((image, imageIndex) => serviceImages[(index + imageIndex) % serviceImages.length]),
}));

export const HERO_IMAGES = [
  creativeActivity,
  guidedActivity,
  physiotherapySession,
  creativeActivity,
];

export const FACILITY_IMAGES = [
  { image: guidedActivity, label: "Play-based therapy" },
  { image: physiotherapySession, label: "Movement and gait training" },
  { image: creativeActivity, label: "Creative learning activities" },
  { image: guidedActivity, label: "A welcoming therapy space" },
  { image: physiotherapySession, label: "One-on-one support" },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
