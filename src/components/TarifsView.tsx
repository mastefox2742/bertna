import { Heart, Cake, Briefcase, Sparkles, HelpCircle, Phone, ArrowUpRight, HelpCircle as HelpIcon, FileText } from 'lucide-react';
import { FIXED_PRICE_EVENTS } from '../data';
import { useContent } from '../content/ContentProvider';

interface TarifsViewProps {
  onOpenRequest: (title: string, price?: string, type?: 'order' | 'quote' | 'appointment') => void;
}

export default function TarifsView({ onOpenRequest }: TarifsViewProps) {
  // Map icons to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'favorite':
        return Heart;
      case 'cake':
        return Cake;
      case 'business_center':
        return Briefcase;
      case 'nightlife':
        return Sparkles;
      default:
        return Sparkles;
    }
  };

  const { events, settings } = useContent();
  const findEvent = (id: string) =>
    events.find((e) => e.id === id) || FIXED_PRICE_EVENTS.find((e) => e.id === id)!;

  const weddingEvent = findEvent('event-mariage');
  const birthdayEvent = findEvent('event-anniv');
  const professionalEvent = findEvent('event-prof');
  const galaEvent = findEvent('event-gala');

  return (
    <div className="font-sans text-slate-800 antialiased overflow-hidden py-12">
      {/* 1. Header Hero Title */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mb-16 text-center md:text-left">
        <div className="inline-block px-4 py-1.5 bg-[#f0c420]/20 text-[#6e5c00] rounded-sm mb-6 font-sans text-xs font-extrabold uppercase tracking-widest">
          NOS OFFRES EXCLUSIVES
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#161310] mb-6 leading-tight max-w-4xl tracking-tighter">
          Organisation d'Événements <br/>&amp; Tarifs Fixes
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          Une expertise architecturale appliquée à vos moments les plus précieux. Nous concevons et coordonnons des expériences événementielles mémorables de très haut standing avec une structure de prix transparente et garantie sans aucune surprise.
        </p>
      </section>

      {/* 2. Pricing Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        
        {/* Cell 1: Mariage Card (Large Layout, md:col-span-8) */}
        <div 
          onClick={() => onOpenRequest(weddingEvent.title, weddingEvent.formattedPrice, 'quote')}
          className="md:col-span-8 group relative bg-white border border-slate-200 p-8 md:p-10 flex flex-col justify-between h-[480px] hover:shadow-[4px_4px_0px_0px_rgba(13,28,50,0.1)] transition-all duration-300 cursor-pointer text-left"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f0c420]" />
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="space-y-4 max-w-md">
              <span className="p-3 bg-red-50 border border-red-100 rounded-sm inline-block">
                <Heart className="w-8 h-8 text-red-500 fill-red-100" />
              </span>
              <h3 className="font-display text-2xl font-black text-[#161310]">{weddingEvent.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{weddingEvent.description}</p>
            </div>
            
            <div className="text-left md:text-right shrink-0">
              <span className="block font-sans text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                {weddingEvent.pricePrefix || 'À PARTIR DE'}
              </span>
              <span className="font-display text-2xl md:text-3xl font-black text-[#705d00] block tracking-tighter">
                {weddingEvent.formattedPrice}
              </span>
            </div>
          </div>

          <div className="relative w-full h-40 mt-6 overflow-hidden bg-slate-100 border border-slate-200 rounded-sm">
            <img 
              src={weddingEvent.image} 
              alt="Luxury Wedding Presentation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Cell 2: Anniversaire Card (Small Layout, md:col-span-4) */}
        <div 
          onClick={() => onOpenRequest(birthdayEvent.title, birthdayEvent.formattedPrice, 'quote')}
          className="md:col-span-4 bg-white border border-slate-200 p-8 md:p-10 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(13,28,50,0.1)] transition-all duration-300 cursor-pointer text-left"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f0c420]" />
          
          <div className="space-y-4">
            <span className="p-3 bg-amber-50 border border-amber-100 rounded-sm inline-block">
              <Cake className="w-8 h-8 text-amber-500" />
            </span>
            <h3 className="font-display text-xl font-black text-[#161310]">{birthdayEvent.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{birthdayEvent.description}</p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex justify-between items-end mt-6">
            <span className="font-display text-xl font-black text-[#705d00] tracking-tight">
              {birthdayEvent.formattedPrice}
            </span>
            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#705d00]">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Cell 3: Événement Professionnel (Medium Primary, md:col-span-6) */}
        <div 
          onClick={() => onOpenRequest(professionalEvent.title, professionalEvent.formattedPrice, 'quote')}
          className="md:col-span-6 bg-[#161310] text-white p-8 md:p-10 flex flex-col justify-between h-[420px] relative transition-all duration-300 cursor-pointer text-left group overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f0c420]" />
          
          <div className="space-y-4">
            <span className="p-3 bg-slate-800 border border-slate-700 text-[#f0c420] rounded-sm inline-block">
              <Briefcase className="w-8 h-8" />
            </span>
            <h3 className="font-display text-2xl font-black text-white">{professionalEvent.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{professionalEvent.description}</p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="font-display text-2xl font-black text-[#f0c420] tracking-tight">
              {professionalEvent.formattedPrice}
            </span>
            <button className="bg-[#f0c420] text-[#161310] font-sans font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-sm hover:-translate-y-0.5 active:translate-y-0 transition-transform duration-200">
              DÉCOUVRIR
            </button>
          </div>
        </div>

        {/* Cell 4: Retrouvailles / Gala (Medium Standard, md:col-span-6) */}
        <div 
          onClick={() => onOpenRequest(galaEvent.title, galaEvent.formattedPrice, 'quote')}
          className="md:col-span-6 bg-white border border-slate-200 p-8 md:p-10 flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(13,28,50,0.1)] transition-all duration-300 cursor-pointer text-left h-[420px] relative"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f0c420]" />
          
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="space-y-4">
              <span className="p-3 bg-indigo-50 border border-indigo-100 rounded-sm inline-block text-indigo-600">
                <Sparkles className="w-8 h-8" />
              </span>
              <h3 className="font-display text-2xl font-black text-[#161310]">{galaEvent.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-sm">{galaEvent.description}</p>
            </div>
          </div>

          <div className="flex justify-between items-end mt-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black text-[#705d00] tracking-tight">
                {galaEvent.formattedPrice}
              </span>
              <span className="text-xs text-slate-400 italic mt-0.5">
                {galaEvent.priceSuffix || 'Tarif Standard'}
              </span>
            </div>
            <div className="w-20 h-20 bg-slate-100 border border-slate-200 rounded-full overflow-hidden shrink-0 shadow-sm">
              <img 
                src={galaEvent.image} 
                alt="Gala Event Setup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Negotiable Note banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-16 mb-24">
        <div className="bg-slate-100 border border-slate-200 rounded-sm p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex p-3 bg-white border border-slate-200 rounded-full mb-2">
              <FileText className="w-7 h-7 text-[#705d00]" />
            </div>
            <h4 className="font-display text-xl md:text-2xl font-black text-[#161310]">
              Besoin d'un accompagnement ultra-spécifique ?
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Chaque vision est profondément unique. Pour les initiatives sur-mesure d'envergure, les mariages majestueux hors continent, ou les projets organisationnels complexes, nos tarifs d'honoraires sont négociables en fonction de vos exigences précises.
            </p>
            <div className="pt-4 flex justify-center">
              <a 
                href={`tel:+${settings.whatsapp}`}
                className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold text-[#161310] hover:text-[#705d00] transition-colors"
                id="tarifs-phone-link"
              >
                <Phone className="w-5 h-5 text-[#705d00]" />
                {settings.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Plan dynamic call action */}
      <section className="bg-[#161310] py-20 text-center px-4 md:px-16 text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#ffe16d_0%,_transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Donnez Vie à Votre Vision Événementielle
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto leading-relaxed text-sm">
            Faites confiance à l'excellence logistique, artistique et technique de BERTNA48 pour sublimer vos cérémonies.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenRequest('Planification Evenementielle d\'Elite', undefined, 'appointment')}
              className="px-10 py-4.5 bg-[#f0c420] text-[#161310] font-sans font-bold uppercase tracking-wider rounded-sm text-sm hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Planifier mon événement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
