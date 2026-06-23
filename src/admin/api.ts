// Écritures admin : conversion modèle app → base, puis appel à la Edge Function.
import { adminApi, AdminTable } from '../lib/supabase';
import { getPassword } from './auth';
import { Product, ServicePole, FixedPriceEvent } from '../types';
import { SiteSettings } from '../lib/content';

function pwd(): string {
  const p = getPassword();
  if (!p) throw new Error('Session expirée — reconnectez-vous.');
  return p;
}

function check(res: { ok?: boolean; error?: string }) {
  if (!res.ok) throw new Error(res.error || 'Erreur inconnue');
  return res;
}

// ── Produits ────────────────────────────────────────────────────────────────
export async function saveProduct(p: Product, sortOrder: number) {
  return check(
    await adminApi(pwd(), 'upsert', 'products', {
      id: p.id,
      name: p.name,
      price: p.price,
      formatted_price: p.formattedPrice,
      category: p.category,
      image: p.image,
      description: p.description,
      sort_order: sortOrder,
    })
  );
}

// ── Pôles de services ─────────────────────────────────────────────────────────
export async function savePole(pole: ServicePole, sortOrder: number) {
  return check(
    await adminApi(pwd(), 'upsert', 'service_poles', {
      id: pole.id,
      title: pole.title,
      description: pole.description,
      subservices: pole.subservices,
      icon_name: pole.iconName,
      sort_order: sortOrder,
    })
  );
}

// ── Événements à prix fixes ───────────────────────────────────────────────────
export async function saveEvent(ev: FixedPriceEvent, sortOrder: number) {
  return check(
    await adminApi(pwd(), 'upsert', 'fixed_price_events', {
      id: ev.id,
      title: ev.title,
      description: ev.description,
      price: ev.price,
      formatted_price: ev.formattedPrice,
      price_prefix: ev.pricePrefix ?? null,
      price_suffix: ev.priceSuffix ?? null,
      icon_name: ev.iconName,
      image: ev.image ?? null,
      tagline: ev.tagline ?? null,
      sort_order: sortOrder,
    })
  );
}

// ── Contact / paramètres ──────────────────────────────────────────────────────
export async function saveSettings(s: SiteSettings) {
  return check(
    await adminApi(pwd(), 'upsert', 'site_settings', {
      id: 1,
      contact_whatsapp: s.whatsapp,
      contact_email: s.email,
      contact_phone: s.phone,
    })
  );
}

// ── Suppression générique ─────────────────────────────────────────────────────
export async function deleteRow(table: AdminTable, id: string) {
  return check(await adminApi(pwd(), 'delete', table, { id }));
}

// ── Changer le mot de passe admin ─────────────────────────────────────────────
export async function changePassword(newPassword: string) {
  return check(await adminApi(pwd(), 'set_password', undefined, { password: newPassword }));
}
