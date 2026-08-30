import React from 'react';
import { 
  User, 
  GraduationCap, 
  Target, 
  Shield, 
  Network, 
  Code2, 
  CheckCircle, 
  Briefcase, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-slate-50/70 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <User className="w-3.5 h-3.5" />
            <span>À propos de moi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Parcours, Vision & Objectifs Professionnels
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Un profil d'ingénierie logicielle doublement diplômé combinant compétences techniques de pointe et compréhension des enjeux de gestion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Narrative & Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Développeur Informatique Passionné & Polyvalent
              </h3>

              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span>Applications Web & Mobile robustes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Network className="w-4 h-4" />
                  </div>
                  <span>Réseaux, Protocoles & Diagnostic IT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>Sensibilisation Cybersécurité</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <span>Support & Résolution d'incidents</span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Details card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Localisation</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profileData.location}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Téléphone</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{profileData.phone}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Email direct</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block">coulibaly.bakary6326</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Double Degree & Target Roles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Double degree showcase */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 border border-blue-200 dark:border-blue-500/30 shadow-md dark:shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  Formation d'excellence
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-700 dark:text-blue-300 font-medium">
                  2 Licences
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Licence en Programmation et Développement Informatique</h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">INTEC Sup de Bamako</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Génie logiciel, développement web & mobile, architecture de données.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Licence en Informatique de Gestion</h4>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">Institut Universitaire de Gestion (IUG)</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Systèmes d'information, gestion opérationnelle, analyse de processus d'entreprise.</p>
                </div>
              </div>
            </div>

            {/* Target Job Roles / Opportunités visées */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Opportunités & Postes Recherchés
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Je souhaite évoluer dans un environnement professionnel où je peux contribuer à des projets concrets, continuer à apprendre et développer mes compétences techniques.
              </p>

              <div className="flex flex-wrap gap-2">
                {profileData.objectives.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-blue-500/50 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
