// Authentification admin : le mot de passe est validé par la Edge Function
// (il est stocké en base, jamais en dur dans le code). En cas de succès on
// garde le mot de passe en sessionStorage pour signer les écritures suivantes.
import { adminApi } from '../lib/supabase';

const SESSION_KEY = 'bertna48_admin_session';
const SESSION_EXPIRY_HOURS = 8;

interface Session {
  password: string;
  expiry: number;
}

export async function login(password: string): Promise<boolean> {
  const res = await adminApi(password, 'verify');
  if (res.ok) {
    const session: Session = {
      password,
      expiry: Date.now() + SESSION_EXPIRY_HOURS * 60 * 60 * 1000,
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

function getSession(): Session | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session: Session = JSON.parse(raw);
    if (Date.now() > session.expiry) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

// Mot de passe courant, nécessaire pour signer les écritures admin.
export function getPassword(): string | null {
  return getSession()?.password ?? null;
}
