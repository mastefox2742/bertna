// Simple admin authentication — credentials stored locally
// Change ADMIN_PASSWORD to secure the panel

export const ADMIN_USER = 'admin';
export const ADMIN_PASSWORD = 'bertna48!';
const SESSION_KEY = 'bertna48_admin_session';
const SESSION_EXPIRY_HOURS = 8;

interface Session {
  user: string;
  expiry: number;
}

export function login(user: string, password: string): boolean {
  if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
    const session: Session = {
      user,
      expiry: Date.now() + SESSION_EXPIRY_HOURS * 60 * 60 * 1000,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const session: Session = JSON.parse(raw);
    if (Date.now() > session.expiry) {
      localStorage.removeItem(SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
