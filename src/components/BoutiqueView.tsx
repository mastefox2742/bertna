import { useState, useMemo } from 'react';
import { Search, MessageSquare, Phone, Sparkles, Filter, ChevronRight, X, ArrowUpRight, HelpCircle } from 'lucide-react';
import { HANDBAGS_PEDESTAL_URL } from '../data';
import { Product } from '../types';
import { useContent } from '../content/ContentProvider';

interface BoutiqueViewProps {
  onTabChange: (tab: string) => void;
  onOpenRequest: (title: string, price?: string, type?: 'order' | 'quote' | 'appointment', context?: any) => void;
}

export default function BoutiqueView({ onTabChange, onOpenRequest }: BoutiqueViewProps) {
  const { products } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tout');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Tout', 'Vêtements', 'Accessoires', 'Électronique', 'Cosmétiques'];

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Tout' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="font-sans text-slate-800 antialiased overflow-hidden">
      {/* 1. Hero Section */}
      <section className="mt-8 px-4 md:px-16 py-12 md:py-20 max-w-7xl mx-auto text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="w-16 h-1 bg-[#f0c420]" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#161310] tracking-tighter leading-none">
              L'Excellence <br/>
              <span className="text-[#705d00] underline decoration-[#f0c420] decoration-4 underline-offset-4">Signature</span> de BERTNA48
            </h1>
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Découvrez notre sélection exclusive d'articles et d'accessoires d'un luxe suprême. Chaque pièce d'exception est minutieusement choisie pour refléter l'autorité, l'élégance aristocratique et la haute performance.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[400px] lg:h-[450px]">
            {/* Soft decorative golden backdrop frame */}
            <div className="absolute inset-0 bg-[#f0c420]/10 -rotate-3 rounded-sm border border-[#f0c420]/20" />
            <img
              src={HANDBAGS_PEDESTAL_URL}
              alt="High-end leather cases and premium lifestyle background"
              className="w-full h-full object-cover rounded-sm shadow-xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive Navigation Filters & Search */}
      <nav className="px-4 md:px-16 py-4 border-y border-slate-250 sticky top-20 bg-white/95 backdrop-blur-md z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex gap-2 lg:gap-4 overflow-x-auto whitespace-nowrap scrollbar-none w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-sans font-bold text-xs uppercase tracking-wider py-2 px-4 transition-all duration-150 cursor-pointer rounded-sm ${
                    isActive
                      ? 'bg-[#161310] text-white font-extrabold shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Real-time search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 text-slate-900 rounded-sm outline-none focus:bg-white focus:border-[#161310] focus:ring-1 focus:ring-[#161310] transition-all text-sm font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 3. Product Grid */}
      <main className="px-4 md:px-16 py-12 max-w-7xl mx-auto text-left">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => {
              return (
                <article
                  key={p.id}
                  className="bg-white border border-slate-200 overflow-hidden group relative hover:shadow-[4px_4px_0px_0px_rgba(13,28,50,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Sliding hover top gold safety bar */}
                  <div className="h-1.5 bg-[#f0c420] absolute top-0 left-0 w-full transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10" />

                  {/* Product Image Frame */}
                  <div 
                    onClick={() => setSelectedProduct(p)}
                    className="aspect-[4/5] overflow-hidden bg-slate-50 relative cursor-pointer"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#161310] flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="font-sans text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                        {p.category}
                      </span>
                      <h3 
                        onClick={() => setSelectedProduct(p)}
                        className="font-display text-lg font-bold text-[#161310] hover:text-[#705d00] transition-colors cursor-pointer leading-tight"
                      >
                        {p.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-3 border-t border-slate-100">
                      <p className="font-display font-black text-xl text-[#705d00] tracking-tight">
                        {p.formattedPrice}
                      </p>
                      
                      <button
                        onClick={() => onOpenRequest(p.name, p.formattedPrice, 'order', p)}
                        className="w-full flex items-center justify-center gap-2 bg-[#f0c420] hover:bg-[#161310] hover:text-white text-[#0b0907] font-sans font-bold py-3.5 px-4 rounded-sm transition-all text-xs uppercase tracking-wider active:scale-95 cursor-pointer border border-yellow-400 group-hover:border-transparent font-extrabold"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        Commander via WhatsApp
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <Filter className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-display text-xl font-bold text-[#161310]">
              Aucun produit ne correspond
            </h3>
            <p className="text-sm text-slate-500 font-sans">
              Essayez de modifier votre recherche ou de réinitialiser la catégorie pour trouver ce que vous cherchez.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Tout');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#161310] text-white rounded-sm font-bold text-xs uppercase"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </main>

      {/* 4. Detail overlay popup for selected product */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="h-64 md:h-full bg-slate-50 relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 flex flex-col justify-between text-left h-full">
              <div className="space-y-4">
                <span className="font-sans text-xs font-black text-[#705d00] uppercase tracking-widest">
                  {selectedProduct.category}
                </span>
                <h3 className="font-display text-2xl font-black text-[#161310] tracking-tight leading-none">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedProduct.description}
                </p>
                <div className="bg-slate-50 p-4 border border-slate-100 rounded-sm">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Prix exclusif</span>
                  <p className="font-display font-black text-2xl text-[#161310] tracking-tight">
                    {selectedProduct.formattedPrice}
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <button
                  onClick={() => {
                    const prod = selectedProduct;
                    setSelectedProduct(null);
                    onOpenRequest(prod.name, prod.formattedPrice, 'order', prod);
                  }}
                  className="w-full flex items-center justify-center gap-3 bg-[#f0c420] hover:bg-[#ffe16d] text-[#161310] font-sans font-bold py-3.5 px-6 rounded-sm text-xs uppercase tracking-widest transition-all cursor-pointer border border-[#f0c420]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Passer la commande WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Call to Action */}
      <section className="bg-[#161310] py-20 text-center px-4 md:px-16 text-white relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Besoin d'un accompagnement sur-mesure ?
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Notre agence technique et créative vous accompagne dans le choix des meilleures pièces, configurations et services haut de gamme pour refléter fidèlement votre réussite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenRequest('Consultation Accompagnement Sur Mesure', undefined, 'appointment')}
              className="bg-[#f0c420] text-[#161310] hover:bg-[#ffe16d] px-8 py-3.5 font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              Prendre Rendez-vous
            </button>
            <button
              onClick={() => onTabChange('services')}
              className="border border-slate-500 hover:bg-white/10 px-8 py-3.5 font-sans font-bold text-xs uppercase tracking-wider rounded-sm transition-all cursor-pointer"
            >
              Voir nos Services Agence
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
