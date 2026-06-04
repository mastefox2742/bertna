import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Views
import BoutiqueView from './components/BoutiqueView';
import AgenceView from './components/AgenceView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('boutique');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubtitle, setModalSubtitle] = useState('');
  const [modalType, setModalType] = useState<'order' | 'quote' | 'appointment'>('order');
  const [modalContext, setModalContext] = useState<any>(undefined);

  // Read hash on mount & setup hash navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['boutique', 'agence', 'services', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRequest = (
    title: string,
    price?: string,
    type: 'order' | 'quote' | 'appointment' = 'quote',
    context?: any
  ) => {
    setModalTitle(
      type === 'order'
        ? 'Passer une Commande d\'Exception'
        : type === 'quote'
        ? 'Demander un Devis d\'Élite'
        : 'Planification et Consultation Stratégique'
    );
    setModalSubtitle(
      type === 'order'
        ? 'Finalisez vos détails de livraison pour que nos équipes préparent vos articles.'
        : type === 'quote'
        ? 'Renseignez notre court formulaire pour que nos experts estiment votre projet sous 24h.'
        : 'Choisissez une date et transmettez vos objectifs d\'affaires directes.'
    );
    setModalType(type);
    setModalContext(
      context
        ? { productName: context.name, productPrice: context.formattedPrice }
        : { serviceTitle: title, eventTitle: title, eventPrice: price }
    );
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" id="app-viewport">
      {/* Dynamic Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        onOpenSchedule={() => handleOpenRequest('Consultation et Analyse Strategique', undefined, 'appointment')}
      />

      {/* Main Content Area */}
      <div className="flex-grow pt-20">
        {currentTab === 'boutique' && (
          <BoutiqueView onTabChange={handleTabChange} onOpenRequest={handleOpenRequest} />
        )}
        {currentTab === 'agence' && (
          <AgenceView onTabChange={handleTabChange} onOpenRequest={handleOpenRequest} />
        )}
        {currentTab === 'services' && (
          <ServicesView onOpenRequest={handleOpenRequest} />
        )}
        {currentTab === 'contact' && <ContactView />}
      </div>

      {/* Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* Highly Polished Global Interaction Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        subtitle={modalSubtitle}
        type={modalType}
        contextData={modalContext}
      />
    </div>
  );
}
