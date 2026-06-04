import { useState } from 'react';
import { Users, Gift, TrendingUp, MessageSquare, Check, Phone, ArrowDown, HelpCircle, Sparkles, FileText } from 'lucide-react';
import { OFFICE_BACKGROUND_URL, SERVICE_POLES } from '../data';
import TarifsView from './TarifsView';

interface ServicesViewProps {
  onOpenRequest: (title: string, price?: string, type?: 'order' | 'quote' | 'appointment') => void;
}

export default function ServicesView({ onOpenRequest }: ServicesViewProps) {
  // Sub-tab state within services: 'poles' (solutions 360) vs 'tarifs' (event pricing)
  const [subTab, setSubTab] = useState<'poles' | 'tarifs'>('poles');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'groups':
        return Users;
      case 'celebration':
        return Gift;
      case 'trending_up':
        return TrendingUp;
      case 'chat_bubble':
        return MessageSquare;
      default:
        return Sparkles;
    }
  };

  const scrollToGrid = () => {
    const el = document.getElementById('services-grid-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-slate-800 antialiased overflow-hidden">
      {/* 1. Header Sub-navigation for Services Tabs */}
      <nav className="fixed top-20 left-0 w-full z-30 bg-white border-b border-slate-200 shadow-sm overflow-x-auto whitespace-nowrap">
        <div className="flex gap-8 justify-center max-w-7xl mx-auto px-4">
          <button
            onClick={() => setSubTab('poles')}
            className={`font-sans font-bold text-xs uppercase tracking-widest py-4 px-4 transition-all duration-200 cursor-pointer relative ${
              subTab === 'poles'
                ? 'text-[#705d00] font-black'
                : 'text-slate-500 hover:text-[#705d00]'
            }`}
          >
            Pôles d'Excellence 360°
            {subTab === 'poles' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#705d00]" />
            )}
          </button>
          <button
            onClick={() => setSubTab('tarifs')}
            className={`font-sans font-bold text-xs uppercase tracking-widest py-4 px-4 transition-all duration-200 cursor-pointer relative ${
              subTab === 'tarifs'
                ? 'text-[#705d00] font-black'
                : 'text-slate-500 hover:text-[#705d00]'
            }`}
          >
            Organisation d'Événements & Tarifs Fixes
            {subTab === 'tarifs' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#705d00]" />
            )}
          </button>
        </div>
      </nav>

      {subTab === 'poles' ? (
        <div className="pt-14">
          {/* Hero Section */}
          <section className="relative h-[480px] flex items-center bg-[#0d1c32] overflow-hidden text-left">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <img
                src={OFFICE_BACKGROUND_URL}
                alt="Sophisticated Office Interior"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-16 w-full text-white">
              <div className="max-w-2xl space-y-6">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  Expertise &amp; <br/>
                  <span className="text-[#fcd400]">Performance.</span>
                </h1>
                <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
                  BERTNA48 transforme vos ambitions en résultats concrets à travers quatre pôles d'excellence stratégique.
                </p>
                <div className="pt-2">
                  <button
                    onClick={scrollToGrid}
                    className="inline-flex items-center gap-2 bg-[#fcd400] text-[#0d1c32] hover:bg-[#ffe16d] px-8 py-3.5 font-sans font-bold uppercase text-xs tracking-wider rounded-sm transition-all cursor-pointer"
                  >
                    Découvrir nos pôles
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions 360 Section */}
          <section
            id="services-grid-anchor"
            className="py-24 max-w-7xl mx-auto px-4 md:px-16 text-center scroll-mt-24"
          >
            <div className="mb-16">
              <h2 className="font-display text-3xl font-extrabold text-[#0d1c32] mb-3">
                Nos Solutions <span className="text-[#705d00]">360°</span>
              </h2>
              <div className="w-24 h-1 bg-[#fcd400] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICE_POLES.map((pole) => {
                const Icon = getIcon(pole.iconName);
                return (
                  <div
                    key={pole.id}
                    className="bg-white border border-slate-200 p-8 md:p-12 relative overflow-hidden text-left hover:shadow-[4px_4px_0px_0px_rgba(13,28,50,0.1)] transition-all duration-300 group"
                  >
                    {/* Visual accent top line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#fcd400]" />

                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-6">
                        <div className="mb-6 inline-flex p-3 bg-slate-50 border border-slate-100 rounded-sm">
                          <Icon className="w-12 h-12 text-[#0d1c32]" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-[#0d1c32]">
                          {pole.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {pole.description}
                        </p>

                        <ul className="space-y-3 pt-2">
                          {pole.subservices.map((sub, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-3 text-sm text-slate-700">
                              <span className="w-5 h-5 rounded-full bg-[#fcd400]/20 flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 text-[#705d00] stroke-[3]" />
                              </span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8">
                        <button
                          onClick={() => onOpenRequest(pole.title, undefined, 'quote')}
                          className="w-full bg-[#fcd400] hover:bg-[#ffe16d] text-[#0d1c32] py-3.5 font-sans font-bold text-xs uppercase tracking-wide rounded-sm transition-all flex justify-center items-center gap-2 cursor-pointer border border-yellow-400 font-extrabold"
                        >
                          <FileText className="w-4 h-4" />
                          Demander un devis
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Call to Action Solutions */}
          <section className="bg-[#0d1c32] py-20 text-center px-4 md:px-16 text-white relative border-t border-slate-800">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Prêt à propulser vos <span className="text-[#fcd400]">résultats ?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 max-w-lg mx-auto">
                Contactez nos experts dès maintenant pour une analyse personnalisée et approfondie de vos besoins commerciaux ou institutionnels.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <button
                  onClick={() => onOpenRequest('Consultation et Analyse Strategique', undefined, 'appointment')}
                  className="bg-[#fcd400] text-[#0d1c32] hover:bg-[#ffe16d] px-10 py-4 font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  Planifier un rendez-vous
                </button>
                <a
                  href={`https://wa.me/242066446257?text=${encodeURIComponent("Bonjour BERTNA48, je souhaite obtenir de plus amples informations concernant vos brochures de services d'excellence.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-slate-500 text-white hover:bg-white/10 px-10 py-4 font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="pt-14">
          <TarifsView onOpenRequest={onOpenRequest} />
        </div>
      )}
    </div>
  );
}
