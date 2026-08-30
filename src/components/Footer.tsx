import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Heart, 
  Code2, 
  Terminal, 
  ShieldCheck,
  MessageSquare 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPhone = profileData.phone.replace(/[^0-9]/g, '');
  const internationalPhone = cleanPhone.startsWith('223') ? cleanPhone : `223${cleanPhone}`;

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Formation', href: '#education' },
    { name: 'Projets', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-sm">
                  BK
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Bakary Coulibaly</h3>
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">Développeur Full Stack Web & Mobile</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Conception d'applications web, mobiles et de solutions de gestion performantes. Double Licence (INTEC Sup & IUG). Basé à Bamako, Mali.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`https://wa.me/${internationalPhone}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                title="Discuter directement sur WhatsApp"
                aria-label="Contacter sur WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="Email direct"
                aria-label="Envoyer un email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:+223${profileData.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="Appel direct"
                aria-label="Appeler par téléphone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                title="GitHub (Placeholder)"
                aria-label="Profil GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/bakary-coulibaly-bb39663b0"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                title="LinkedIn de Bakary Coulibaly"
                aria-label="Profil LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-300 font-bold">
              Navigation Rapide
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-blue-500">›</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Coordinates */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-slate-300 font-bold">
              Coordonnées
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 truncate">{profileData.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponible pour embauche
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Bakary Coulibaly. Tous droits réservés. Portfolio conçu avec React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            title="Retour en haut"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
