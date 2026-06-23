// Client Supabase + appel sécurisé à la fonction admin.
// Les valeurs ci-dessous sont PUBLIQUES par conception (clé "publishable") :
// la base est protégée par RLS (lecture seule pour le public).
import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://fbrkiwjykpvxeojwbisu.supabase.co';

export const SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_bnaDhuVXXhsredm95Vxleg_1fSVRB6k';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
});

// ── Appel à la Edge Function admin-api (écritures protégées par mot de passe) ──
export type AdminAction = 'verify' | 'upsert' | 'delete' | 'set_password';
export type AdminTable =
  | 'products'
  | 'service_poles'
  | 'fixed_price_events'
  | 'site_settings';

export async function adminApi(
  password: string,
  action: AdminAction,
  table?: AdminTable,
  payload?: unknown
): Promise<{ ok?: boolean; error?: string; data?: unknown }> {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/admin-api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    body: JSON.stringify({ password, action, table, payload }),
  });
  try {
    return await res.json();
  } catch {
    return { error: 'Réponse serveur invalide' };
  }
}
