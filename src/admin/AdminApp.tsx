import { useState, FormEvent } from 'react';
import { ShoppingBag, Sparkles, CalendarDays, Phone, LogOut, ArrowLeft, Lock } from 'lucide-react';
import { isAuthenticated, login, logout } from './auth';
import LogoMark from '../components/LogoMark';
import { Button, Input, Field, Card } from './ui';
import ProductsAdmin from './sections/ProductsAdmin';
import PolesAdmin from './sections/PolesAdmin';
import EventsAdmin from './sections/EventsAdmin';
import ContactAdmin from './sections/ContactAdmin';

type Section = 'products' | 'poles' | 'events' | 'contact';

const NAV: { id: Section; label: string; icon: typeof ShoppingBag }[] = [
  { id: 'products', label: 'Produits', icon: ShoppingBag },
  { id: 'poles', label: 'Services', icon: Sparkles },
  { id: 'events', label: 'Événements', icon: CalendarDays },
  { id: 'contact', label: 'Contact', icon: Phone },
];

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const ok = await login(password);
    setBusy(false);
    if (ok) onSuccess();
    else setError('Mot de passe incorrect.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161310] px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-sm p-8 space-y-5 shadow-2xl">
        <div className="flex flex-col items-center text-center gap-3">
          <LogoMark size={64} />
          <div>
            <h1 className="font-display text-xl font-black text-[#161310]">Espace Administration</h1>
            <p className="text-xs text-slate-500 mt-1">BERTNA48 — accès réservé</p>
          </div>
        </div>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm px-4 py-2.5">{error}</div>}
        <Field label="Mot de passe">
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus placeholder="••••••••" />
        </Field>
        <Button variant="gold" type="submit" disabled={busy} className="w-full">
          <Lock className="w-4 h-4" /> {busy ? 'Connexion…' : 'Se connecter'}
        </Button>
        <a href="/" className="block text-center text-xs text-slate-400 hover:text-[#705d00]">← Retour au site</a>
      </form>
    </div>
  );
}

export default function AdminApp() {
  const [authed, setAuthed] = useState(isAuthenticated());
  const [section, setSection] = useState<Section>('products');

  if (!authed) return <LoginScreen onSuccess={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      {/* Barre supérieure */}
      <header className="sticky top-0 z-30 bg-[#161310] text-white px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={36} />
          <span className="font-display font-black tracking-tighter uppercase hidden sm:block">
            BERT<span className="text-[#f0c420]">NA48</span>
            <span className="ml-2 text-[11px] font-bold text-slate-400 align-middle">ADMIN</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { window.location.hash = 'agence'; }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-sm bg-[#f0c420] text-[#161310] hover:bg-[#ffe16d] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Retour au site</span>
          </button>
          <button
            onClick={() => { logout(); setAuthed(false); }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-sm bg-white/10 hover:bg-white/20 transition-colors"
          >
            <LogOut className="w-4 h-4" /> <span className="hidden sm:inline">Quitter</span>
          </button>
        </div>
      </header>

      {/* Navigation des sections */}
      <nav className="bg-white border-b border-slate-200 px-2 md:px-8 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-1 max-w-6xl mx-auto">
          {NAV.map((n) => {
            const Icon = n.icon;
            const active = section === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setSection(n.id)}
                className={`inline-flex items-center gap-2 px-4 py-4 text-sm font-bold border-b-2 transition-colors shrink-0 ${
                  active ? 'border-[#f0c420] text-[#161310]' : 'border-transparent text-slate-500 hover:text-[#161310]'
                }`}
              >
                <Icon className="w-4 h-4" /> {n.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Contenu */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {section === 'products' && <ProductsAdmin />}
        {section === 'poles' && <PolesAdmin />}
        {section === 'events' && <EventsAdmin />}
        {section === 'contact' && <ContactAdmin />}
      </main>
    </div>
  );
}
