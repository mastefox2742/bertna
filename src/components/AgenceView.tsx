import { Clock, Share2, Compass, TrendingUp, Activity, ShoppingCart, CheckCircle } from 'lucide-react';
import { ABSTRACT_TECH_URL, TESTIMONIALS } from '../data';
import LogoMark from './LogoMark';

interface AgenceViewProps {
  onTabChange: (tab: string) => void;
  onOpenRequest: (title: string, price?: string, type?: 'order' | 'quote' | 'appointment') => void;
}

export default function AgenceView({ onTabChange, onOpenRequest }: AgenceViewProps) {
  const pillars = [
    {
      icon: Clock,
      title: 'Disponibilité 24/7',
      desc: 'Un accompagnement sans interruption pour répondre à l\'urgence de vos besoins stratégiques.',
    },
    {
      icon: Share2,
      title: 'Réseau Étendu',
      desc: 'L\'accès privilégié à un écosystème de partenaires et d\'experts internationaux de haut vol.',
    },
    {
      icon: Compass,
      title: 'Sur-Mesure',
      desc: 'Chaque stratégie est une architecture unique, rigoureusement conçue pour vos objectifs précis.',
    },
    {
      icon: TrendingUp,
      title: 'Rentabilité',
      desc: 'Optimisation chirurgicale de chaque ressource investie pour garantir un retour sur investissement maximal.',
    },
    {
      icon: Activity,
      title: 'Flexibilité',
      desc: 'Adaptabilité totale face aux mutations technologiques du marché et à vos contraintes organisationnelles.',
    },
  ];

  return (
    <div className="font-sans text-slate-800 antialiased overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center px-4 md:px-16 py-12 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Abstract background blur shapes */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] rounded-full bg-[#fcd400]/20 blur-[120px]" />
          <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] rounded-full bg-[#0d1c32]/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#fcd400]/20 text-[#6e5c00] font-sans text-xs font-extrabold uppercase tracking-widest">
              L'agence de la performance
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d1c32] tracking-tighter leading-none">
              L'intelligence au <br/>
              service de vos <span className="text-[#705d00] underline decoration-[#fcd400] decoration-4 underline-offset-4">résultats</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Moins de discours, plus de résultats mesurables. Rapide. Efficace. Rentable. Une approche architecturale rigoureuse pour bâtir votre succès numérique suprême.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onTabChange('services')}
                className="inline-flex justify-center items-center py-4 px-8 bg-[#fcd400] hover:bg-[#ffe16d] text-[#111c2d] font-sans font-bold uppercase rounded-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm"
              >
                Découvrir l'Agence
              </button>
              <button
                onClick={() => onTabChange('boutique')}
                className="inline-flex justify-center items-center py-3.5 px-8 border-2 border-[#0d1c32] text-[#0d1c32] hover:bg-[#0d1c32] hover:text-white font-sans font-bold uppercase rounded-sm transition-all duration-200 cursor-pointer text-sm"
              >
                Visiter la Boutique
              </button>
            </div>
          </div>

          {/* Right graphics */}
          <div className="hidden lg:flex justify-end relative select-none">
            <div className="w-full aspect-square max-w-md bg-white border border-slate-200 p-8 relative shadow-xl">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#fcd400]" />
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <LogoMark size={100} />
                <div className="text-center">
                  <span className="font-display text-3xl font-black tracking-tighter text-[#0d1c32]">
                    BERT<span className="text-[#705d00]">NA48</span>
                  </span>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                    L'intelligence au service de vos résultats
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-[#0d1c32] text-white shadow-xl min-w-[180px]">
                <span className="block font-display text-4xl font-extrabold leading-none text-[#fcd400]">100%</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 5 Pillars Section */}
      <section className="bg-white py-24 px-4 md:px-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-extrabold text-[#0d1c32] mb-3">
              Nos 5 Piliers Fondamentaux
            </h2>
            <div className="w-20 h-1 bg-[#fcd400] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 border border-slate-200 hover:border-[#fcd400] transition-all duration-300 group hover:shadow-[4px_4px_0px_0px_rgba(13,28,50,0.1)] relative text-left"
                >
                  {/* Sliding hover top accent line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#fcd400] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <Icon className="w-8 h-8 text-[#705d00] mb-6 block group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="font-display text-lg font-bold text-[#0d1c32] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Performance Bento Grid */}
      <section className="py-24 px-4 md:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 h-auto">
            {/* Cell 1: Expertise Directe (Large 2 cols x 2 rows) */}
            <div className="lg:col-span-2 lg:row-span-2 bg-[#0d1c32] p-10 md:p-14 flex flex-col justify-end text-white relative overflow-hidden text-left min-h-[400px]">
              {/* Backlight trail artwork */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                <img
                  src={ABSTRACT_TECH_URL}
                  alt="Abstract Gold Lines"
                  className="w-full h-full object-cover scale-105"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
                  Expertise Directe
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
                  Nous ne vendons pas du rêve, nous construisons des architectures et systèmes rentables de haute performance. Nos méthodes d'acquisition, de gestion et de relation publique sont testées et éprouvées par les leaders de l'industrie.
                </p>
                <button
                  onClick={() => onTabChange('services')}
                  className="inline-flex justify-center items-center py-3 px-6 bg-[#fcd400] text-[#111c2d] hover:bg-[#ffe16d] font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow cursor-pointer"
                >
                  Savoir Plus
                </button>
              </div>
            </div>

            {/* Cell 2: La Boutique Premium Link (2 cols x 1 row) */}
            <div
              onClick={() => onTabChange('boutique')}
              className="lg:col-span-2 bg-[#fcd400] p-8 md:p-10 flex items-center justify-between group cursor-pointer overflow-hidden text-left hover:bg-[#ffe16d] transition-all shadow border border-yellow-400"
            >
              <div className="flex-1 space-y-2">
                <div className="bg-[#111c2d] text-white px-2 py-0.5 rounded-sm inline-block text-[10px] font-bold uppercase tracking-wider">
                  Accès Privé
                </div>
                <h4 className="font-display text-2xl font-extrabold text-[#0d1c32]">
                  La Boutique Premium
                </h4>
                <p className="text-sm text-[#544600] max-w-sm">
                  Accédez instantanément à nos articles de prêt-à-porter de créateurs, accessoires d'excellence et produits technologiques phares sélectionnés par BERTNA48.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-[#0d1c32] text-[#fcd400] flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 shadow-lg ml-4">
                <ShoppingCart className="w-6 h-6" />
              </div>
            </div>

            {/* Cell 3: Support Counter (1 col x 1 row) */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-center items-center text-center shadow-sm">
              <span className="font-display text-5xl font-black text-[#705d00] block mb-2 tracking-tight">
                24h
              </span>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Temps de Réponse Moyen
              </p>
              <p className="text-xs text-slate-500 mt-1 font-sans">
                Priorité absolue à l'urgence
              </p>
            </div>

            {/* Cell 4: Satisfaction Counter (1 col x 1 row) */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-center items-center text-center shadow-sm">
              <span className="font-display text-5xl font-black text-[#0d1c32] block mb-2 tracking-tight">
                98%
              </span>
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Satisfaction Clientèle
              </p>
              <p className="text-xs text-slate-500 mt-1 font-sans font-medium text-emerald-600">
                Performance certifiée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mini Testimonial slider / showcase */}
      <section className="py-20 bg-white px-4 md:px-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-[#0d1c32]">
              Partenaires de Votre Croissance
            </h2>
            <p className="text-sm text-slate-500 mt-2 font-sans">
              Ce que disent les experts et institutions qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 border border-slate-150 bg-slate-50 relative text-left"
              >
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#705d00]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Avis Certifié
                  </span>
                </div>
                <p className="italic text-slate-600 text-sm leading-relaxed mb-6">
                  "{t.content}"
                </p>
                <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[#0d1c32] text-sm">{t.name}</h4>
                    <span className="text-xs text-slate-500">{t.role}</span>
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#705d00] bg-[#fcd400]/20 px-2 py-1 rounded-sm">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="bg-[#0d1c32] py-20 text-center px-4 md:px-16 text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#ffe16d_0%,_transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Prêt à transformer votre vision en rentabilité ?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-sans">
            Ne perdez plus de temps précieux avec des approches génériques et des schémas d'exécution obsolètes. Parlons dès aujourd'hui de vos objectifs d'affaires réels.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenRequest('Consultation Initiale Stratégique', undefined, 'appointment')}
              className="px-10 py-4.5 bg-[#fcd400] text-[#0d1c32] font-sans font-bold uppercase tracking-wider rounded-sm text-sm hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Démarrer le Projet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
