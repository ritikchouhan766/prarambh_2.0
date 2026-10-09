import creativeActivity from "@/assets/services/creative-activity.png";
import guidedActivity from "@/assets/services/guided-activity.png";
import physiotherapySession from "@/assets/services/physiotherapy-session.png";
import { SERVICES, type ServiceDetail } from "@/lib/constants";

export type ServiceWithSlug = ServiceDetail & { slug: string };

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
}));

// Active hero carousel assets are sourced from src/assets/services.
// The src/assets/hero folder is intentionally not used in the app right now.
export const HERO_IMAGES = [
  creativeActivity,
  guidedActivity,
  physiotherapySession,
  creativeActivity,
];

export const GALLERY_IMAGE_FILES = [
  { file: "g_img1.png", label: "Prarambh therapy space 1" },
  { file: "g_img2.png", label: "Prarambh therapy space 2" },
  { file: "g_img3.png", label: "Prarambh therapy space 3" },
  { file: "g_img4.jpg", label: "Prarambh therapy space 4" },
  { file: "g_img5.jpg", label: "Prarambh therapy space 5" },
  { file: "g_img6.jpg", label: "Prarambh therapy space 6" },
  { file: "g_img7.jpg", label: "Prarambh therapy space 7" },
  { file: "g_img8.jpg", label: "Prarambh therapy space 8" },
  { file: "g_img9.jpg", label: "Prarambh therapy space 9" },
  { file: "g_img10.jpg", label: "Prarambh therapy space 10" },
  { file: "g_img11.jpg", label: "Prarambh therapy space 11" },
  { file: "g_img12.jpg", label: "Prarambh therapy space 12" },
  { file: "g_img13.jpg", label: "Prarambh therapy space 13" },
  { file: "g_img14.jpg", label: "Prarambh therapy space 14" },
  { file: "g_img15.jpg", label: "Prarambh therapy space 15" },
  { file: "g_img16.jpg", label: "Prarambh therapy space 16" },
  { file: "g_img17.jpg", label: "Prarambh therapy space 17" },
  { file: "g_img18.jpg", label: "Prarambh therapy space 18" },
  { file: "g_img19.jpg", label: "Prarambh therapy space 19" },
  { file: "g_img20.jpg", label: "Prarambh therapy space 20" },
  { file: "g_img21.jpg", label: "Prarambh therapy space 21" },
  { file: "g_img22.jpg", label: "Prarambh therapy space 22" },
  { file: "g_img23.jpg", label: "Prarambh therapy space 23" },
  { file: "g_img24.jpg", label: "Prarambh therapy space 24" },
  { file: "g_img25.jpg", label: "Prarambh therapy space 25" },
  { file: "g_img26.jpg", label: "Prarambh therapy space 26" },
  { file: "g_img27.jpg", label: "Prarambh therapy space 27" },
  { file: "g_img28.jpg", label: "Prarambh therapy space 28" },
  { file: "g_img29.jpg", label: "Prarambh therapy space 29" },
  { file: "g_img30.jpg", label: "Prarambh therapy space 30" },
];

export const FACILITY_IMAGES = GALLERY_IMAGE_FILES.map(({ file, label }) => ({
  image: `/images/gallery/${file}`,
  label,
}));

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
