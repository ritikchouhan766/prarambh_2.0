import { type ClassValue, clsx } from "clsx";
import { SITE } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getCallLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
