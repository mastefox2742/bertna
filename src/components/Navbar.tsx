import { Menu, X, ShoppingBag, Briefcase, Sparkles, MessageSquare, Phone } from 'lucide-react';
import LogoMark from './LogoMark';
import { useContent } from '../content/ContentProvider';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenSchedule: () => void;
}

export default function Navbar({ currentTab, onTabChange, onOpenSchedule }: NavbarProps) {
  const { settings } = useContent();
  const tabs = [
    { id: 'agence', label: 'Agence', icon: Briefcase },
    { id: 'boutique', label: 'Boutique', icon: ShoppingBag },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 md:px-16 h-20 bg-white border-b border-slate-200 shadow-sm backdrop-blur-md bg-white/95">
        {/* Logo Section */}
        <div 
          onClick={() => onTabChange('agence')} 
          className="flex items-center gap-3 cursor-pointer select-none"
          id="logo-brand"
        >
          <LogoMark size={40} />
          <span className="font-display text-2xl font-black tracking-tighter text-[#161310] uppercase">
            BERT<span className="text-[#705d00]">NA48</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`font-sans font-bold text-sm tracking-wide py-1 px-2.5 transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-[#705d00]'
                    : 'text-slate-600 hover:text-[#705d00]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-[-10px] left-0 w-full h-0.5 bg-[#705d00]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSchedule}
            className="hidden sm:inline-flex bg-[#161310] hover:bg-[#38322a] text-white font-display text-xs font-bold uppercase tracking-wider py-2.5 px-5 transition-all duration-200 active:scale-95 rounded-sm cursor-pointer"
            id="header-contact-btn"
          >
            Lancer un Projet
          </button>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => {
              const drawer = document.getElementById('mobile-drawer');
              if (drawer) drawer.classList.toggle('-translate-x-full');
            }}
            className="md:hidden text-[#161310] p-2 hover:bg-slate-100 rounded-sm cursor-pointer"
            id="mobile-drawer-toggle"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Navigation Drawer (Mobile Only) */}
      <div
        id="mobile-drawer"
        className="fixed inset-y-0 left-0 z-50 h-full w-80 bg-white border-r border-slate-200 shadow-2xl transform -translate-x-full transition-transform duration-300 ease-in-out md:hidden font-sans"
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="font-display font-black text-2xl tracking-tighter text-[#161310]">
                BERTNA48
              </span>
              <button
                onClick={() => {
                  const drawer = document.getElementById('mobile-drawer');
                  if (drawer) drawer.classList.add('-translate-x-full');
                }}
                className="text-slate-500 hover:text-slate-900 cursor-pointer"
                id="mobile-drawer-close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onTabChange(tab.id);
                      const drawer = document.getElementById('mobile-drawer');
                      if (drawer) drawer.classList.add('-translate-x-full');
                    }}
                    className={`flex items-center gap-4 rounded-sm px-4 py-3 text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#f0c420] text-[#0b0907] font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick contact drawer footer */}
          <div className="border-t border-slate-100 pt-6 space-y-4">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Assistance Immédiate
            </p>
            <a
              href={`mailto:${settings.email}`}
              className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#705d00]"
            >
              <span className="font-mono text-xs">{settings.email}</span>
            </a>
            <a
              href={`tel:+${settings.whatsapp}`}
              className="flex items-center gap-3 text-sm text-[#161310] font-bold"
            >
              <Phone className="w-4 h-4 text-[#705d00]" />
              <span>{settings.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
