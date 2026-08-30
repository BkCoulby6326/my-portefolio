import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Code, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Diplômes Universitaires</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Formation & Diplômes Académiques
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Deux diplômes universitaires d'État complétant l'expertise en génie logiciel et la vision organisationnelle des systèmes de gestion.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical timeline line */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-600 opacity-30" />

          <div className="space-y-10">
            {educationData.map((edu, idx) => {
              const isFirst = idx === 0;
              return (
                <div key={idx} className="relative sm:pl-20">
                  
                  {/* Timeline Badge Node */}
                  <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-500 items-center justify-center text-blue-600 dark:text-blue-400 shadow-md shadow-blue-500/20 z-10">
                    {isFirst ? <Code className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                  </div>

                  {/* Card Container */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-slate-900/75 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-md dark:shadow-xl group">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 font-semibold">
                            Licence Universitaire
                          </span>
                          <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                            <Award className="w-3.5 h-3.5" />
                            Diplômé
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      <div className="sm:text-right">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold inline-block">
                          Diplôme d'État
                        </span>
                      </div>
                    </div>

                    {/* Institution info */}
                    <div className="py-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm">
                        <Building2 className="w-4 h-4" />
                        {edu.institution}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {edu.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Key focal points */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        Domaines clés abordés :
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
