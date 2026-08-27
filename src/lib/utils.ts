import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/916377216003`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getCallLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
