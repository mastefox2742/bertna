// Récupération du contenu depuis Supabase, avec repli sur les données statiques.
import { supabase } from './supabase';
import {
  PRODUCTS as STATIC_PRODUCTS,
  SERVICE_POLES as STATIC_POLES,
  FIXED_PRICE_EVENTS as STATIC_EVENTS,
  CONTACT_WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from '../data';
import { Product, ServicePole, FixedPriceEvent } from '../types';

export interface SiteSettings {
  whatsapp: string;
  email: string;
  phone: string;
}

export const STATIC_SETTINGS: SiteSettings = {
  whatsapp: CONTACT_WHATSAPP_NUMBER,
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
};

// ── Mapping base (snake_case) → modèle app (camelCase) ──────────────────────
function mapProduct(r: any): Product {
  return {
    id: r.id,
    name: r.name,
    price: r.price,
    formattedPrice: r.formatted_price,
    category: r.category,
    image: r.image,
    description: r.description,
  };
}
function mapPole(r: any): ServicePole {
  return {
    id: r.id,
    title: r.title,
    description: r.description,
    subservices: r.subservices ?? [],
    iconName: r.icon_name,
  };
}
function mapEvent(r: any): FixedPriceEvent {
  return {
    id: r.id,
    title: r.title,
    description: r.description,
    price: r.price,
    formattedPrice: r.formatted_price,
    pricePrefix: r.price_prefix ?? undefined,
    priceSuffix: r.price_suffix ?? undefined,
    iconName: r.icon_name,
    image: r.image ?? undefined,
    tagline: r.tagline ?? undefined,
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error || !data || data.length === 0) return STATIC_PRODUCTS;
  return data.map(mapProduct);
}

export async function fetchPoles(): Promise<ServicePole[]> {
  const { data, error } = await supabase
    .from('service_poles')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error || !data || data.length === 0) return STATIC_POLES;
  return data.map(mapPole);
}

export async function fetchEvents(): Promise<FixedPriceEvent[]> {
  const { data, error } = await supabase
    .from('fixed_price_events')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error || !data || data.length === 0) return STATIC_EVENTS;
  return data.map(mapEvent);
}

export async function fetchSettings(): Promise<SiteSettings> {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .eq('id', 1)
    .maybeSingle();
  if (error || !data) return STATIC_SETTINGS;
  return {
    whatsapp: data.contact_whatsapp || STATIC_SETTINGS.whatsapp,
    email: data.contact_email || STATIC_SETTINGS.email,
    phone: data.contact_phone || STATIC_SETTINGS.phone,
  };
}
