import { useState, FormEvent } from 'react';
import { Mail, Phone, Clock, Send, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP_NUMBER } from '../data';

export default function ContactView() {
  const [subject, setSubject] = useState('Prise de Contact');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let text = `Bonjour BERTNA48,\n\n`;
    text += `Je viens de remplir votre formulaire de contact sur le site internet :\n`;
    text += `📌 *Sujet* : ${subject}\n\n`;
    text += `👤 *Nom* : ${name}\n`;
    text += `📞 *Téléphone* : ${phone}\n`;
    if (email) text += `📧 *Email* : ${email}\n`;
    text += `\n*Message / Besoins* :\n_${message}_\n\n`;
    text += `Merci de revenir vers moi à votre meilleure convenance.`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/242066446257?text=${encoded}`;
    
    // Open in separate window
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="font-sans text-slate-800 antialiased overflow-hidden py-16 px-4 md:px-16 max-w-7xl mx-auto text-left">
      {/* Header section */}
      <div className="mb-16">
        <span className="inline-block px-4 py-1.5 bg-[#fcd400]/20 text-[#6e5c00] rounded-sm mb-4 font-sans text-xs font-extrabold uppercase tracking-widest">
          COMMUNICATION DIRECTE
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d1c32] tracking-tighter leading-none mb-6">
          Contact &amp; Support
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
          Nous croyons en un contact direct, direct et hautement réactif. Remplissez le formulaire ci-dessous ou joignez directement nos collaborateurs sur WhatsApp ou par appel vocal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact info details, Left column, lg:span-5 */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-slate-50 border border-slate-200 p-8 space-y-8 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#fcd400]" />
            
            <h3 className="font-display text-2xl font-black text-[#0d1c32] tracking-tight">
              Canaux Officiels
            </h3>

            <div className="space-y-6">
              <a 
                href="https://wa.me/242066446257"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 bg-white border border-slate-100 hover:border-[#fcd400] transition-colors rounded-sm group"
              >
                <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-sm shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1c32] text-sm">WhatsApp Business</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Réponse garantie en moins de 5 minutes</p>
                  <p className="font-mono text-sm text-[#705d00] font-bold mt-2">+242 06 644  62 57</p>
                </div>
              </a>

              <a 
                href="tel:+242066446257"
                className="flex items-start gap-4 p-4 bg-white border border-slate-100 hover:border-[#fcd400] transition-colors rounded-sm group"
              >
                <div className="p-3 bg-red-50 text-red-600 rounded-sm shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1c32] text-sm">Ligne Téléphonique Directe</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Appels vocaux et consultations d'urgence</p>
                  <p className="font-mono text-sm text-[#0d1c32] font-bold mt-2">+242 06 644  62 57</p>
                </div>
              </a>

              <a 
                href="mailto:bertnajh@gmail.com"
                className="flex items-start gap-4 p-4 bg-white border border-slate-100 hover:border-[#fcd400] transition-colors rounded-sm group"
              >
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-sm shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0d1c32] text-sm">Courregistre Électronique (Mail)</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Dossiers institutionnels, brochures &amp; devis volumineux</p>
                  <p className="font-mono text-sm text-[#0d1c32] font-bold mt-2">bertnajh@gmail.com</p>
                </div>
              </a>
            </div>
            
            <div className="border-t border-slate-200 pt-6 flex items-center gap-3 text-xs text-slate-500 leading-relaxed font-sans">
              <Clock className="w-5 h-5 text-[#705d00] shrink-0" />
              <span>Assistance client disponible en continu 24h/24 et 7j/7, dimanches et jours fériés compris.</span>
            </div>
          </div>

        </div>

        {/* Form panel, Right column, lg:span-7 */}
        <div className="lg:col-span-7 bg-white border border-slate-200 p-8 md:p-12 shadow-sm rounded-sm relative text-left">
          <div className="absolute top-0 right-0 w-full h-1.5 bg-[#fcd400]" />
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-display text-2xl font-black text-[#0d1c32] tracking-tight">
                Envoyer un Message Rapide
              </h3>
              
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Quel est l'objet de votre démarche ? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Prise de Contact', 'Commande Boutique', 'Demande de Devis', 'Autre'].map((sObj) => (
                    <button
                      key={sObj}
                      type="button"
                      onClick={() => setSubject(sObj)}
                      className={`py-3 px-4 rounded-sm border font-sans text-xs font-bold transition-all text-center cursor-pointer ${
                        subject === sObj
                          ? 'border-[#0d1c32] bg-[#0d1c32] text-white'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {sObj}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Votre Nom Complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Patricia Malonga"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-sm outline-none focus:border-[#0d1c32] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: +242 06 644 62 57"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-sm outline-none focus:border-[#0d1c32] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Adresse de messagerie (Email)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@domaine.com (optionnel)"
                  className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-sm outline-none focus:border-[#0d1c32] transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Décrivez votre demande en quelques lignes *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: J'aimerais en savoir plus sur l'organisation de galas de fin d'année et obtenir un devis global..."
                  className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-sm outline-none focus:border-[#0d1c32] transition-colors text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fcd400] hover:bg-[#ffe16d] text-[#111c2d] font-sans font-black uppercase text-xs tracking-wider py-4 px-6 rounded-sm transition-all focus:outline-none cursor-pointer border border-[#fcd400]"
                  id="submit-contact-form"
                >
                  <Send className="w-4 h-4" />
                  Ouvrir et envoyer sur WhatsApp
                </button>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#0d1c32] tracking-tight mb-2">
                  Message Préparé !
                </h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Votre formulaire a été encodé avec succès. Vos détails de contact et demandes ont été formatés pour être envoyés directement par WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 max-w-xs mx-auto">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-3 bg-[#0d1c32] hover:bg-[#39475f] text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Nouveau message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
