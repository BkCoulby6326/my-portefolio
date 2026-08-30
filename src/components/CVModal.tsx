import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  FileText,
  Calendar,
  Globe,
  Award,
  Heart,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData, skillsData, educationData, experienceData, projectsData } from '../data/portfolioData';
import { downloadCVPdf } from '../utils/generateCVPdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    setDownloading(true);
    // Trigger celebratory confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 }
    });

    try {
      downloadCVPdf();
    } catch (err) {
      console.error("Erreur lors du téléchargement du PDF:", err);
    } finally {
      setTimeout(() => {
        setDownloading(false);
      }, 1000);
    }
  };

  const handlePrint = () => {
    // Also trigger PDF download or browser print
    handleDownloadPdf();
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 dark:bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                CV • {profileData.name}
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 hidden sm:inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Conforme document officiel
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Téléchargement direct au format PDF vectoriel (A4)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-semibold shadow transition-all cursor-pointer"
              title="Télécharger le fichier PDF sur votre appareil"
            >
              <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Téléchargement...' : 'Télécharger le PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              title="Imprimer ou enregistrer en PDF via le navigateur"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Interactive CV Content */}
        <div 
          id="cv-printable-area"
          className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-7 text-xs sm:text-sm print:bg-white print:text-black print:p-8"
        >
          
          {/* CV Header */}
          <div className="pb-6 border-b border-slate-200 dark:border-slate-800 print:border-gray-300 flex flex-col sm:flex-row justify-between sm:items-start gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight">
                {profileData.name}
              </h1>
              <h2 className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 print:text-blue-700">
                {profileData.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 pt-1">
                <span>🎂 {profileData.birthDate || "11/07/2004"}</span>
                <span>🇲🇱 Nationalité: {profileData.nationality || "Malienne"}</span>
              </div>
            </div>

            <div className="space-y-1.5 font-mono text-xs text-slate-600 dark:text-slate-300 print:text-gray-700 sm:text-right shrink-0 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <a href={`mailto:${profileData.email}`} className="hover:underline">{profileData.email}</a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <a href="tel:+22377206676" className="hover:underline">{profileData.phone}</a>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                <span>{profileData.location}</span>
              </div>
              {profileData.linkedIn && (
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <a href={`https://${profileData.linkedIn}`} target="_blank" rel="noreferrer" className="hover:underline text-[11px] truncate max-w-[200px]">
                    {profileData.linkedIn}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Profil */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Profil Professionnel
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {profileData.fullBio.join(' ')}
            </p>
          </div>

          {/* Expériences Professionnelles */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              Expériences Professionnelles
            </h3>

            <div className="space-y-3">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {exp.role} <span className="text-slate-400 font-normal">|</span> <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60 w-fit">
                      {exp.period} • {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                  <div className="space-y-1 pt-1">
                    {exp.missions.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Éducation & Diplômes */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              Éducation & Diplômes
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {edu.degree}
                    </h4>
                  </div>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {edu.institution} • {edu.location}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              Compétences Techniques
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block text-xs border-b border-slate-200 dark:border-slate-800 pb-1">
                  Développement
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Flutter, Laravel, Symfony, Spring Boot, HTML5 / CSS3 / JavaScript
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block text-xs border-b border-slate-200 dark:border-slate-800 pb-1">
                  Bases de données
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  MySQL, PostgreSQL, Oracle Database, Firebase
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block text-xs border-b border-slate-200 dark:border-slate-800 pb-1">
                  Outils & IA
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Git / GitHub, GitHub Actions, Microsoft Office, Canva, Postman, VS Code, IA appliquée au dév
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 block text-xs border-b border-slate-200 dark:border-slate-800 pb-1">
                  Support Informatique
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Support L1, Maintenance HW/SW, Windows, AnyDesk, Réseaux & Routeurs, Diagnostic
                </p>
              </div>
            </div>
          </div>

          {/* Projets Académiques et Personnels */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Projets Académiques & Personnels
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Plateforme de visualisation de CV (Collaboratif)
                </div>
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                  Git, GitHub, GitHub Actions, GitHub Pages
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Développement en équipe d’un site web avec déploiement automatique via GitHub Actions et publication sur GitHub Pages.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Application de Gestion d’Atelier de Couture (Projet de Fin d'Études)
                </div>
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                  Flutter, Symfony, Base de données
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Analyse et développement full-stack pour la gestion des commandes, fiches clients, confections et paiements.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Application Web de Gestion Scolaire (Projet ESAD)
                </div>
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                  PostgreSQL, Laravel, Architecture relationnelle
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Modélisation de données, contrôles de cohérence, gestion pédagogique et sécurisation des accès.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">
                  Application Mobile Météo
                </div>
                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                  Flutter, Géolocalisation, Stockage Local
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Géolocalisation automatique, prévisions météorologiques dynamiques et cache des recherches.
                </p>
              </div>
            </div>
          </div>

          {/* Langues, Qualités & Centres d'intérêt */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
            {/* Langues */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Langues
              </h4>
              <div className="space-y-1 text-xs">
                <div><span className="font-semibold text-slate-900 dark:text-slate-200">Français :</span> <span className="text-slate-600 dark:text-slate-400">Compétence professionnelle</span></div>
                <div><span className="font-semibold text-slate-900 dark:text-slate-200">Bambara :</span> <span className="text-slate-600 dark:text-slate-400">Langue maternelle</span></div>
                <div><span className="font-semibold text-slate-900 dark:text-slate-200">Anglais :</span> <span className="text-slate-600 dark:text-slate-400">Intermédiaire</span></div>
              </div>
            </div>

            {/* Qualités Personnelles */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Qualités Personnelles
              </h4>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <div>• Créatif et autonome</div>
                <div>• Sens de l’organisation</div>
                <div>• Excellent relationnel</div>
                <div>• Adaptabilité & Travail en équipe</div>
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Centres d'intérêt
              </h4>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <div>• Lecture & auto-formation tech</div>
                <div>• Solutions d'IA pour le dév</div>
                <div>• Développement personnel</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 no-print text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Document PDF officiel de Bakary Coulibaly</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Fermer
            </button>
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold shadow-md transition-all cursor-pointer"
            >
              <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Téléchargement en cours...' : 'Télécharger le fichier PDF'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
