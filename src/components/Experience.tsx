import React from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Network, 
  Wrench, 
  Server, 
  Users, 
  Terminal, 
  ShieldAlert 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Parcours Professionnel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Expérience Professionnelle
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Expérience terrain dans le support technique, la gestion d'infrastructures réseaux et l'assistance informatique professionnelle.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {exp.type || 'Stage Professionnel'}
                  </span>
                </div>
              </div>

              {/* Description summary */}
              <div className="py-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{exp.description}</p>
              </div>

              {/* Core Missions Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Missions Principales Réalisées :
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.missions.map((mission, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{mission}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies and Tools tagged */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  Technologies & Outils :
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
