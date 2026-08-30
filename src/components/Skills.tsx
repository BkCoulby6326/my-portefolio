import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Server, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Search 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const filteredCategories = skillsData.map((category) => {
    if (filterCategory !== 'all' && category.title !== filterCategory) {
      return null;
    }
    const matchingSkills = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }
    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Stack technique & Outils</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Compétences Techniques Structurées
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Un aperçu transparent de mon savoir-faire technique, structuré par domaine de compétence avec une rigueur orientée recrutement.
          </p>
        </div>

        {/* Filters & Search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 w-full md:w-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800/60'
              }`}
            >
              Toutes ({skillsData.length})
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setFilterCategory(cat.title)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filterCategory === cat.title
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrer une techno (ex: Laravel, Flutter)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {category.skills.length} technologie{category.skills.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/90 shadow-sm flex items-center justify-between group hover:border-blue-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                            {skill.name}
                          </span>
                        </div>
                        
                        {/* Proficiency Level Badge */}
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-medium ${
                            skill.level === 'Avancé'
                              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20'
                              : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                          }`}>
                            {skill.level || 'Maîtrisé'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/60 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between font-mono">
                  <span>Usage en projets réels</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Validé</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
