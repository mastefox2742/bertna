// Contexte global : charge produits / pôles / événements / contact depuis
// Supabase et les fournit à toute l'application cliente.
import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { Product, ServicePole, FixedPriceEvent } from '../types';
import {
  fetchProducts,
  fetchPoles,
  fetchEvents,
  fetchSettings,
  SiteSettings,
  STATIC_SETTINGS,
} from '../lib/content';
import {
  PRODUCTS as STATIC_PRODUCTS,
  SERVICE_POLES as STATIC_POLES,
  FIXED_PRICE_EVENTS as STATIC_EVENTS,
} from '../data';

interface ContentState {
  products: Product[];
  poles: ServicePole[];
  events: FixedPriceEvent[];
  settings: SiteSettings;
  loading: boolean;
  reload: () => Promise<void>;
}

const ContentContext = createContext<ContentState | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  // On démarre avec les données statiques pour un premier rendu instantané,
  // puis on rafraîchit avec les données de Supabase.
  const [products, setProducts] = useState<Product[]>(STATIC_PRODUCTS);
  const [poles, setPoles] = useState<ServicePole[]>(STATIC_POLES);
  const [events, setEvents] = useState<FixedPriceEvent[]>(STATIC_EVENTS);
  const [settings, setSettings] = useState<SiteSettings>(STATIC_SETTINGS);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    const [p, pl, e, s] = await Promise.all([
      fetchProducts(),
      fetchPoles(),
      fetchEvents(),
      fetchSettings(),
    ]);
    setProducts(p);
    setPoles(pl);
    setEvents(e);
    setSettings(s);
    setLoading(false);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <ContentContext.Provider value={{ products, poles, events, settings, loading, reload }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentState {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent doit être utilisé dans <ContentProvider>');
  return ctx;
}
