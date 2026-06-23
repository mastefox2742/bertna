import { X, CheckCircle, Send, MessageSquare, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useContent } from '../content/ContentProvider';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  type: 'order' | 'quote' | 'appointment';
  contextData?: {
    productName?: string;
    productPrice?: string;
    serviceTitle?: string;
    eventTitle?: string;
    eventPrice?: string;
  };
}

export default function Modal({ isOpen, onClose, title, subtitle, type, contextData }: ModalProps) {
  const { settings } = useContent();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Compose professional French whatsapp message
    let message = `Bonjour BERTNA48,\n\nJe m'appelle *${name}*.\n`;
    if (email) message += `Email : ${email}\n`;
    if (phone) message += `Téléphone : ${phone}\n\n`;

    if (type === 'order') {
      message += `Je souhaite commander le produit d'exception suivant :\n`;
      message += `🛒 *${contextData?.productName}* (${contextData?.productPrice})\n`;
    } else if (type === 'quote') {
      message += `Je souhaite obtenir un devis personnalisé pour le service suivant :\n`;
      message += `💼 *${contextData?.serviceTitle || contextData?.eventTitle}* ${contextData?.eventPrice ? `(${contextData?.eventPrice})` : ''}\n`;
    } else {
      message += `Je souhaite planifier un rendez-vous stratégique concernant mes objectifs de performance digitale.\n`;
    }

    if (details) {
      message += `\n*Détails / Besoins spécifiques* :\n_${details}_\n`;
    }

    message += `\nMerci de me recontacter pour finaliser notre collaboration.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${settings.whatsapp}?text=${encodedMessage}`;
    setWhatsappUrl(url);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#ffffff] border border-slate-200 rounded-sm shadow-2xl overflow-hidden">
        {/* Top gold bar accent */}
        <div className="h-1.5 bg-[#f0c420] w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          id="close-modal-btn"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <h3 className="font-display text-2xl font-bold text-[#161310] tracking-tight mb-2">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-slate-500 mb-6 font-sans">
                  {subtitle}
                </p>
              )}

              {contextData && (
                <div className="mb-6 p-4 bg-slate-50 border-l-4 border-[#161310] rounded-sm font-sans">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Contexte de la demande
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#161310] text-sm md:text-base">
                      {contextData.productName || contextData.serviceTitle || contextData.eventTitle}
                    </span>
                    <span className="font-bold text-[#705d00] text-sm">
                      {contextData.productPrice || contextData.eventPrice}
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Sébastien Malonga"
                    className="w-full px-4 py-3 bg-white border border-[#c5c6cd] text-slate-900 rounded-sm outline-none focus:border-[#161310] focus:ring-1 focus:ring-[#161310] transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+242 06 644 6257"
                      className="w-full px-4 py-3 bg-white border border-[#c5c6cd] text-slate-900 rounded-sm outline-none focus:border-[#161310] focus:ring-1 focus:ring-[#161310] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.com"
                      className="w-full px-4 py-3 bg-white border border-[#c5c6cd] text-slate-900 rounded-sm outline-none focus:border-[#161310] focus:ring-1 focus:ring-[#161310] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                    {type === 'quote' ? 'Description de votre projet / exigences (optionnel)' : 'Instructions de livraison ou commentaires (optionnel)'}
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={type === 'quote' ? 'Spécifiez vos dates, nombre d\'invités, etc.' : 'Ex: Livraison à domicile, heure favorite de rappel...'}
                    className="w-full px-4 py-3 bg-white border border-[#c5c6cd] text-slate-900 rounded-sm outline-none focus:border-[#161310] focus:ring-1 focus:ring-[#161310] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#f0c420] hover:bg-[#ffe16d] text-[#0b0907] py-3.5 px-6 rounded-sm font-bold tracking-wide uppercase transition-all duration-200 active:scale-95 cursor-pointer text-sm"
                  id="submit-modal-form"
                >
                  <Send className="w-4 h-4" />
                  Générer le bon & finaliser
                </button>
              </form>
            </>
          ) : (
            <div className="py-6 text-center space-y-6 font-sans">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#161310] tracking-tight mb-2">
                  Demande Prête !
                </h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Votre bon de commande/devis a été généré avec succès. Pour entamer la discussion et sécuriser vos résultats immobiliers ou événementiels, veuillez cliquer sur l'un des boutons ci-dessous.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-sm font-bold uppercase transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
                  id="whatsapp-redirect-btn"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Ouvrir WhatsApp Business
                </a>
                <a
                  href={`tel:+${settings.whatsapp}`}
                  className="flex items-center justify-center gap-3 bg-[#161310] hover:bg-[#38322a] text-white py-3.5 px-6 rounded-sm font-bold uppercase transition-all active:scale-95 text-sm"
                  id="call-direct-btn"
                >
                  <Phone className="w-5 h-5" />
                  Appeler l'Agence Directement
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setEmail('');
                  setDetails('');
                  onClose();
                }}
                className="text-slate-400 hover:text-slate-600 font-semibold text-xs uppercase tracking-wide underline cursor-pointer pt-4"
              >
                Retourner sur le site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
