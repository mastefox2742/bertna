// Admin data store — persists edits in localStorage
// Falls back to the static data.ts values on first load

import {
  PRODUCTS as DEFAULT_PRODUCTS,
  FIXED_PRICE_EVENTS as DEFAULT_EVENTS,
  CONTACT_WHATSAPP_NUMBER as DEFAULT_WA,
  CONTACT_EMAIL as DEFAULT_EMAIL,
  CONTACT_PHONE as DEFAULT_PHONE,
} from '../data';
import { Product, FixedPriceEvent } from '../types';

const KEYS = {
  products: 'bertna48_products',
  events: 'bertna48_events',
  contact: 'bertna48_contact',
};

// ── Products ──────────────────────────────────────────────────────────────────
export function getProducts(): Product[] {
  try {
    const raw = localStorage.getItem(KEYS.products);
    return raw ? JSON.parse(raw) : DEFAULT_PRODUCTS;
  } catch {
    return DEFAULT_PRODUCTS;
  }
}
export function saveProducts(products: Product[]): void {
  localStorage.setItem(KEYS.products, JSON.stringify(products));
}

// ── Events / Tarifs ───────────────────────────────────────────────────────────
export function getEvents(): FixedPriceEvent[] {
  try {
    const raw = localStorage.getItem(KEYS.events);
    return raw ? JSON.parse(raw) : DEFAULT_EVENTS;
  } catch {
    return DEFAULT_EVENTS;
  }
}
export function saveEvents(events: FixedPriceEvent[]): void {
  localStorage.setItem(KEYS.events, JSON.stringify(events));
}

// ── Contact ───────────────────────────────────────────────────────────────────
export interface ContactInfo {
  whatsapp: string;
  email: string;
  phone: string;
}
export function getContact(): ContactInfo {
  try {
    const raw = localStorage.getItem(KEYS.contact);
    return raw
      ? JSON.parse(raw)
      : { whatsapp: DEFAULT_WA, email: DEFAULT_EMAIL, phone: DEFAULT_PHONE };
  } catch {
    return { whatsapp: DEFAULT_WA, email: DEFAULT_EMAIL, phone: DEFAULT_PHONE };
  }
}
export function saveContact(info: ContactInfo): void {
  localStorage.setItem(KEYS.contact, JSON.stringify(info));
}

// ── Reset all ─────────────────────────────────────────────────────────────────
export function resetAll(): void {
  Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
}
