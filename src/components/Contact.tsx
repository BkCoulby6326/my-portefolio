import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Info, 
  ExternalLink, 
  Clock, 
  Sparkles,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [submitted, setSubmitted] = useState(false);
  const [lastSentMethod, setLastSentMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const cleanPhone = profileData.phone.replace(/[^0-9]/g, '');
  const internationalPhone = cleanPhone.startsWith('223') ? cleanPhone : `223${cleanPhone}`;

  const buildWhatsAppUrl = () => {
    const formattedText = `👋 *Bonjour Bakary,*\n\nJe vous contacte depuis votre portfolio en ligne.\n\n👤 *Nom / Entreprise :* ${formData.name || 'Visiteur'}\n📧 *Email :* ${formData.email || 'Non spécifié'}\n📌 *Objet :* ${formData.subject || 'Prise de contact'}\n\n💬 *Message :*\n${formData.message}`;
    return `https://wa.me/${internationalPhone}?text=${encodeURIComponent(formattedText)}`;
  };

  const buildEmailUrl = () => {
    const emailSubject = formData.subject 
      ? `[Portfolio] ${formData.subject} - ${formData.name}`
      : `[Portfolio] Message de ${formData.name}`;
    
    const emailBody = `Bonjour Bakary,\n\nVous avez reçu un nouveau message depuis votre portfolio :\n\n- Nom : ${formData.name}\n- Email de l'expéditeur : ${formData.email}\n- Objet : ${formData.subject || 'Prise de contact'}\n\n-------------------------------\nMessage :\n${formData.message}\n-------------------------------\n\nEnvoyé depuis le portfolio officiel de Bakary Coulibaly.`;
    
    return `mailto:${profileData.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleSendViaWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Veuillez renseigner au moins votre nom et votre message.");
      return;
    }

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    const url = buildWhatsAppUrl();
    window.open(url, '_blank');
    setLastSentMethod('whatsapp');
    setSubmitted(true);
  };

  const handleSendViaEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Veuillez renseigner votre nom, votre email et votre message.");
      return;
    }

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    const url = buildEmailUrl();
    window.location.href = url;
    setLastSentMethod('email');
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sendMethod === 'whatsapp') {
      handleSendViaWhatsApp();
    } else {
      handleSendViaEmail();
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-slate-50/70 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Direct & Gratuit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Discutons de Vos Projets
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Envoyez-moi un message direct sans frais. Choisissez la réception sur mon <strong>WhatsApp (+223 77 20 66 76)</strong> ou par <strong>Email direct</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Coordonnées Directes
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Je réponds avec réactivité par WhatsApp, appel ou email pour toute proposition d'embauche, stage, projet web/mobile ou support informatique.
                </p>
              </div>

              {/* Contact Item 1: WhatsApp Direct */}
              <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold block">WhatsApp Direct</span>
                    <a 
                      href={`https://wa.me/${internationalPhone}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      +223 {profileData.phone}
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${internationalPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  Discuter
                </a>
              </div>

              {/* Contact Item 2: Email */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Adresse Email</span>
                    <a 
                      href={`mailto:${profileData.email}`} 
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(profileData.email, 'email')}
                  className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 ml-2"
                  title="Copier l'email"
                  aria-label="Copier l'email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Contact Item 3: Phone */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Téléphone Appel</span>
                    <a 
                      href={`tel:+223${profileData.phone.replace(/\s+/g, '')}`} 
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +223 {profileData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(`+223 ${profileData.phone}`, 'phone')}
                  className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 ml-2"
                  title="Copier le numéro"
                  aria-label="Copier le numéro"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Contact Item 4: Location */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Localisation Actuelle</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Disponibilité Immédiate</span>
                  <span>Basé à Bamako, ouvert aux opportunités sur place ainsi qu'en télétravail international.</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Direct Free Dispatch */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl">
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Formulaire de Contact Direct
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  100% Gratuit
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Remplissez vos informations. Votre message me sera envoyé instantanément par <strong>WhatsApp</strong> ou <strong>Email</strong>.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">Message transmis avec succès !</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Votre message a été transmis via <strong>{lastSentMethod === 'whatsapp' ? 'WhatsApp (+223 77 20 66 76)' : 'Email'}</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ouvrir sur WhatsApp</span>
                    </a>

                    <a
                      href={buildEmailUrl()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Ouvrir par Email</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      ← Rédiger un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Channel Selection Toggle */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                      Mode d'envoi préféré (sans frais) :
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSendMethod('whatsapp')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer ${
                          sendMethod === 'whatsapp'
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-400 ring-2 ring-emerald-500/20 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="truncate">Direct sur mon WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSendMethod('email')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer ${
                          sendMethod === 'email'
                            ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-700 dark:text-blue-400 ring-2 ring-blue-500/20 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="truncate">Direct par Email (Gmail)</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                        Nom complet / Entreprise <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Entreprise Tech ou Recruteur"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                        Votre adresse email {sendMethod === 'email' && <span className="text-rose-500">*</span>}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required={sendMethod === 'email'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                      Objet de votre demande
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Opportunité Développeur / Projet Web & Mobile / Support IT"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
                      Votre message détaillé <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre projet, vos besoins techniques ou les modalités du poste..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Dual Action Submit Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <button
                      id="submit-contact-whatsapp-btn"
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:shadow-emerald-500/35 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Envoyer sur WhatsApp</span>
                    </button>

                    <button
                      id="submit-contact-email-btn"
                      type="button"
                      onClick={handleSendViaEmail}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-500/35 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Envoyer par Email</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Info className="w-3 h-3 text-emerald-500" />
                      Transmis instantanément sans aucun frais
                    </span>
                    <span>Réponse rapide garantie</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
