import React from 'react';
import { 
  Wrench, 
  Layout, 
  Smartphone, 
  Cpu, 
  Briefcase, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Network': return <Network className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default: return <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Offre de Services & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ce Que Je Peux Apporter À Vos Projets
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            De la conception logicielle au déploiement et au support technique des utilisateurs, un accompagnement complet et rigoureux.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/90 transition-all duration-300 shadow-sm dark:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 w-fit mb-5 group-hover:scale-105 transition-transform shadow-sm">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 border-t border-slate-200 dark:border-slate-800/80 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-cyan-300 transition-colors"
                >
                  <span>Demander un devis ou échanger</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
