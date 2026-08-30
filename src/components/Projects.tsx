import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Code2, 
  Smartphone, 
  Server, 
  Layers, 
  GraduationCap, 
  Scissors, 
  Cross, 
  Shield, 
  Users, 
  Info 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'fullstack', label: 'Web & Full Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'api', label: 'APIs & Backend' },
    { id: 'collab', label: 'Projets d’équipe & CI/CD' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory || (selectedCategory === 'fullstack' && (p.category === 'web' || p.category === 'fullstack')));

  // Render modern SVG mockup visual for each project
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'gestion-scolaire':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between rounded-t-xl border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>School_Manager_v2</span>
              </div>
              <span className="text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">Livewire + Postgres</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">Étudiants</span>
                <span className="text-xs font-bold text-white font-mono">1,240</span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">Filières</span>
                <span className="text-xs font-bold text-cyan-400 font-mono">18</span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block">Bulletins</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">Automatique</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Rôles: Admin, Professeur, Étudiant</span>
              <span className="text-blue-400">Auth RBAC ✓</span>
            </div>
          </div>
        );

      case 'atelier-couture':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between rounded-t-xl border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                <Scissors className="w-3.5 h-3.5 text-purple-400" />
                <span>CoutureApp_Flutter</span>
              </div>
              <span className="text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/30">Mobile + Symfony</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 my-auto space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-300 font-mono">
                <span>Commande #CT-842</span>
                <span className="text-amber-400 font-semibold">En confection</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-3/4"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Mesures & Acompte enregistrés</span>
                <span>SMS Rappel : Actif</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Multi-ateliers Bamako</span>
              <span className="text-purple-400">Flutter cross-platform</span>
            </div>
          </div>
        );

      case 'api-pharmacie':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-4 flex flex-col justify-between rounded-t-xl border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                <Cross className="w-3.5 h-3.5 text-emerald-400" />
                <span>PharmaCore_REST_API</span>
              </div>
              <span className="text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">Spring Boot + Postgres</span>
            </div>
            <div className="bg-slate-950/90 rounded-lg p-2 font-mono text-[10px] text-slate-300 border border-slate-800 my-auto space-y-1">
              <div className="text-emerald-400">GET /api/v1/pharmacies/de-garde?lat=12.639&lng=-8.002</div>
              <div className="text-slate-400 pl-2">&#123; "count": 14, "status": "200_OK", "distance_max_km": 5 &#125;</div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Gestion des gardes & stocks</span>
              <span className="text-emerald-400">Google Maps Geocoding</span>
            </div>
          </div>
        );

      case 'plateforme-vps-vpn':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 p-4 flex flex-col justify-between rounded-t-xl border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>CloudNode_VPS_Inertia</span>
              </div>
              <span className="text-cyan-300 bg-cyan-500/15 px-2 py-0.5 rounded border border-cyan-500/30">React + Inertia + Laravel</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-mono">VPS Instance #01</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  En ligne (99.9%)
                </span>
              </div>
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-mono">Tunnel VPN</span>
                <span className="text-xs font-semibold text-cyan-300 font-mono">WireGuard Actif</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Provisioning automatisé</span>
              <span className="text-cyan-400">Dashboard React SPA</span>
            </div>
          </div>
        );

      case 'portfolio-collaboratif':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between rounded-t-xl border-b border-slate-200 dark:border-slate-800 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>DevTeam_Git_Flow</span>
              </div>
              <span className="text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/30">CI/CD GitHub Actions</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 my-auto font-mono text-[10px] text-slate-300 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-blue-400">workflow: deploy.yml</span>
                <span className="text-emerald-400">passing ✓</span>
              </div>
              <div className="text-slate-400">Branches: main, feature/auth, fix/ui-state</div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Revue de code & PRs</span>
              <span className="text-blue-400">Auto-deploy Pages</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-slate-900 p-4 flex items-center justify-center border-b border-slate-800">
            <Code2 className="w-8 h-8 text-blue-400" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-slate-50/70 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Réalisations Techniques</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projets Clés & Démonstrateurs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Sélection de 5 projets majeurs illustrant la maîtrise du cycle complet de développement logiciel, du backend robuste aux interfaces mobiles et web réactives.
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                  : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-md dark:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Visual Mockup Stage */}
                {renderProjectVisual(project.id)}

                {/* Project Details Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 font-semibold">
                      {project.categoryLabel}
                    </span>
                    {project.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List (features) */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {project.features.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 px-6 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white flex items-center gap-1.5 font-medium transition-colors"
                >
                  <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Détails & Architecture</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="Code Source GitHub"
                      aria-label="Code source GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-0.5 font-medium"
                      title="Aperçu ou Démo"
                    >
                      <span>Démo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Collaborative workflow note */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-cyan-50/80 dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/40 border border-blue-200 dark:border-blue-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm dark:shadow-none">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Pratiques professionnelles & Standards de code
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Tous ces projets intègrent des bonnes pratiques : typage strict, séparation des couches, tests et gestion de versions via Git.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition-all"
          >
            Discuter d'un projet
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
