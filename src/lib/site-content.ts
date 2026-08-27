import type { StaticImageData } from "next/image";
import creativeActivity from "@/assets/services/creative-activity.png";
import guidedActivity from "@/assets/services/guided-activity.png";
import physiotherapySession from "@/assets/services/physiotherapy-session.png";
import gallery01 from "@/assets/gallery/g_img1.png";
import gallery02 from "@/assets/gallery/g_img2.png";
import gallery03 from "@/assets/gallery/g_img3.png";
import gallery04 from "@/assets/gallery/g_img4.png";
import gallery05 from "@/assets/gallery/g_img5.png";
import gallery06 from "@/assets/gallery/g_img6.png";
import gallery07 from "@/assets/gallery/g_img7.png";
import gallery08 from "@/assets/gallery/g_img8.png";
import gallery09 from "@/assets/gallery/g_img9.png";
import gallery10 from "@/assets/gallery/g_img10.png";
import gallery11 from "@/assets/gallery/g_img11.png";
import gallery12 from "@/assets/gallery/g_img12.png";
import gallery13 from "@/assets/gallery/g_img13.png";
import gallery14 from "@/assets/gallery/g_img14.png";
import gallery15 from "@/assets/gallery/g_img15.png";
import gallery16 from "@/assets/gallery/g_img16.png";
import gallery17 from "@/assets/gallery/g_img17.png";
import gallery18 from "@/assets/gallery/g_img18.png";
import gallery19 from "@/assets/gallery/g_img19.png";
import gallery20 from "@/assets/gallery/g_img20.png";
import gallery21 from "@/assets/gallery/g_img21.png";
import gallery22 from "@/assets/gallery/g_img22.png";
import gallery23 from "@/assets/gallery/g_img23.png";
import gallery24 from "@/assets/gallery/g_img24.png";
import gallery25 from "@/assets/gallery/g_img25.png";
import gallery26 from "@/assets/gallery/g_img26.png";
import gallery27 from "@/assets/gallery/g_img27.png";
import gallery28 from "@/assets/gallery/g_img28.png";
import gallery29 from "@/assets/gallery/g_img29.png";
import gallery30 from "@/assets/gallery/g_img30.png";
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
  gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07,
  gallery08, gallery09, gallery10, gallery11, gallery12, gallery13, gallery14,
  gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21,
  gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28,
  gallery29, gallery30,
].map((image, index) => ({
  image,
  label: `Prarambh therapy space ${index + 1}`,
}));

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
