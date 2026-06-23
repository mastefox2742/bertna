import { Mail, Phone, Globe, Shield } from 'lucide-react';
import LogoMark from './LogoMark';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  return (
    <footer className="w-full py-16 px-4 md:px-16 bg-[#161310] text-white border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('agence')}>
            <LogoMark size={40} inverted={true} />
            <span className="font-display font-black text-2xl tracking-tighter text-white uppercase">
              BERT<span className="text-[#f0c420]">NA48</span>
            </span>
          </div>
          <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
            Agence architecturale d'exception et commerce d'élite spécialisés dans la haute performance digitale, la rentabilité numérique et l'événementiel de prestige.
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/242066446257"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-sm bg-slate-800 hover:bg-[#705d00] transition-colors flex items-center justify-center text-white"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="mailto:bertnajh@gmail.com"
              className="w-10 h-10 rounded-sm bg-slate-800 hover:bg-[#705d00] transition-colors flex items-center justify-center text-white"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+242066446257"
              className="w-10 h-10 rounded-sm bg-slate-800 hover:bg-[#705d00] transition-colors flex items-center justify-center text-white"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links / Services */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#ffe16d] uppercase tracking-widest mb-2">
              Expertise
            </span>
            <button
              onClick={() => onTabChange('services')}
              className="text-sm text-slate-300 hover:text-[#ffe16d] transition-colors text-left"
            >
              Disponibilité 24/7
            </button>
            <button
              onClick={() => onTabChange('services')}
              className="text-sm text-slate-300 hover:text-[#ffe16d] transition-colors text-left"
            >
              Réseau Étendu
            </button>
            <button
              onClick={() => onTabChange('services')}
              className="text-sm text-slate-300 hover:text-[#ffe16d] transition-colors text-left"
            >
              Services Sur-Mesure
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#ffe16d] uppercase tracking-widest mb-2">
              Structure
            </span>
            <button
              onClick={() => onTabChange('services')}
              className="text-sm text-slate-300 hover:text-[#ffe16d] transition-colors text-left"
            >
              Rentabilité
            </button>
            <button
              onClick={() => onTabChange('services')}
              className="text-sm text-slate-300 hover:text-[#ffe16d] transition-colors text-left"
            >
              Flexibilité Totale
            </button>
            <button
              onClick={() => onTabChange('boutique')}
              className="text-sm text-slate-300 hover:text-[#ffe16d] transition-colors text-left"
            >
              Boutique Premium
            </button>
          </div>
        </div>

        {/* Contacts column */}
        <div className="space-y-6">
          <div>
            <span className="block text-xs font-bold text-[#ffe16d] uppercase tracking-widest mb-3">
              Contact Agence
            </span>
            <p className="text-sm text-slate-300 font-mono">bertnajh@gmail.com</p>
            <p className="text-sm text-slate-300 font-mono mt-1">+242 06 644 62 57</p>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>Paiement & Échanges 100% Sécurisés</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              © {new Date().getFullYear()} BERTNA48. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
