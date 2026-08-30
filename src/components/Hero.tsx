import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  FileDown, 
  Download,
  MapPin, 
  Sparkles,
  Terminal,
  Code,
  Smartphone,
  Server,
  Layers,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';
import { downloadCVPdf } from '../utils/generateCVPdf';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const handleQuickDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    downloadCVPdf();
  };
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-indigo-500/10 dark:from-blue-600/15 dark:via-cyan-500/10 dark:to-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b818_1px,transparent_1px),linear-gradient(to_bottom,#94a3b818_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Disponible pour opportunités professionnelles
              </span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                {profileData.location}
              </span>
            </div>

            {/* Main Greeting & Title */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4" />
                Bonjour, je suis Bakary Coulibaly
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Développeur{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500">
                  Full Stack
                </span>{' '}
                <br className="hidden sm:inline" />
                Web & Mobile
              </h1>
            </div>

            {/* Short Bio Text */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Titulaire d'une <span className="font-semibold text-slate-900 dark:text-slate-100">Licence en Programmation et Développement Informatique</span> (INTEC Sup) et d'une <span className="font-semibold text-slate-900 dark:text-slate-100">Licence en Informatique de Gestion</span> (IUG). Je conçois des architectures web modernes, des applications mobiles multiplateformes et des solutions de gestion adaptées aux besoins des entreprises.
            </p>

            {/* Core highlights row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                  <Code className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">Web & API</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Laravel, Spring Boot, React, Symfony</p>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-left">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <Smartphone className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">Mobile</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Flutter, Dart, APIs REST, Offline-first</p>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm text-left col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Server className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold">Bases & Réseaux</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">PostgreSQL, MySQL, Support IT & Diagnostic</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-blue-500/35 hover:-translate-y-0.5"
              >
                <span>Explorer mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleQuickDownload}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:shadow-emerald-500/35 hover:-translate-y-0.5 cursor-pointer"
                title="Télécharger directement le CV en PDF"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le CV</span>
              </button>

              <button
                onClick={onOpenCV}
                className="flex items-center gap-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5 cursor-pointer"
                title="Consulter et prévisualiser le CV"
              >
                <FileDown className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>Aperçu CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Developer Profile / IDE Terminal Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative gradient frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* IDE Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-[11px] text-slate-400 ml-2 font-mono flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-blue-400" />
                      developer_profile.json
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live
                  </span>
                </div>

                {/* IDE Code Body */}
                <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">fullName</span>: <span className="text-emerald-300">"{profileData.name}"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">location</span>: <span className="text-emerald-300">"{profileData.location}"</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">academicDegrees</span>: [
                    <div className="pl-4 text-emerald-300">
                      "Licence Programmation & Dév (INTEC Sup)",<br />
                      "Licence Informatique de Gestion (IUG)"
                    </div>
                    <span className="text-blue-300">]</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">coreSpecialties</span>: [
                    <div className="pl-4 text-cyan-300">
                      "Full Stack Web (Laravel, React, Livewire)",<br />
                      "Mobile Multiplateforme (Flutter, Dart)",<br />
                      "APIs RESTful & Microservices (Spring Boot)",<br />
                      "Bases de données (PostgreSQL, MySQL)",<br />
                      "Support IT & Diagnostic Réseau"
                    </div>
                    <span className="text-blue-300">]</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">experience</span>: &#123;
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-300">role</span>: <span className="text-emerald-300">"Technicien Support & Réseau"</span>,<br />
                      <span className="text-blue-300">company</span>: <span className="text-emerald-300">"ALKAN Mali SA"</span>
                    </div>
                    &#125;,
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">immediateAvailability</span>: <span className="text-amber-400">true</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-blue-300">targetRoles</span>: [
                    <div className="pl-4 text-slate-400 text-[11px]">
                      "Dév Full Stack", "Dév Web", "Dév Mobile", "Support IT"
                    </div>
                    <span className="text-blue-300">]</span>
                  </div>

                  <div>&#125;;</div>

                  {/* Terminal console status */}
                  <div className="pt-3 mt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Status: Profil vérifié & prêt
                    </span>
                    <span className="text-slate-500 font-mono">UTF-8 / LF</span>
                  </div>
                </div>

                {/* Bottom interactive card tags */}
                <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>5 Projets Réalisés</span>
                  </div>
                  <a 
                    href="#projects" 
                    className="text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
                  >
                    Voir démos ›
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
