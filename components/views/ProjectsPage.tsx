import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectCategory } from '../../types';
import {
  Search,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Eye,
  Github,
  X,
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { theme, t, language, projects, navigateTo } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'ALL', label: t.projects.allFilter },
    { id: 'FULLSTACK', label: 'Full-Stack' },
    { id: 'FRONTEND', label: 'Frontend & UI' },
    { id: 'BACKEND', label: 'Backend & APIs' },
  ];

  // Filtering logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'ALL' || project.category === selectedCategory;

    if (!searchQuery.trim()) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const titleMatch =
      project.title.en.toLowerCase().includes(query) ||
      project.title.ar.toLowerCase().includes(query) ||
      project.title.tr.toLowerCase().includes(query);

    const descMatch =
      project.description.en.toLowerCase().includes(query) ||
      project.description.ar.toLowerCase().includes(query) ||
      project.description.tr.toLowerCase().includes(query);

    const techMatch = project.technologies.some((tech) =>
      tech.toLowerCase().includes(query)
    );

    return matchesCategory && (titleMatch || descMatch || techMatch);
  });

  return (
    <div id="projects-gallery-page" className="w-full py-16 md:py-24">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Centered Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
          >
            {t.projects.badge}
          </span>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-display tracking-tight mb-4 ${
              theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
            }`}
          >
            {t.projects.title}
          </h1>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
            }`}
          >
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`filter-cat-${cat.id.toLowerCase()}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 ${
                      isSelected
                        ? theme === 'dark'
                          ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                          : 'bg-[#C8A97E] text-[#1A1715] shadow-sm'
                        : theme === 'dark'
                        ? 'bg-[#11182e] border border-[#1e294b] text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8]'
                        : 'bg-white border border-[#E5DCD0] text-[#55473F] hover:border-[#8C6D37]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[280px] sm:min-w-[320px]">
              <Search className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8E8074]'}`} />
              <input
                type="text"
                id="projects-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                className={`w-full pl-11 pr-10 py-2.5 rounded-full text-xs border focus:outline-none transition-all ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50'
                    : 'bg-white border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8E8074] hover:text-[#2C2523] dark:hover:text-[#F1F5F9]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div
            id="no-projects-found"
            className={`p-16 text-center rounded-2xl border space-y-4 ${
              theme === 'dark'
                ? 'border-[#1e294b] bg-[#11182e]'
                : 'border-[#E5DCD0] bg-white'
            }`}
          >
            <Layers className={`w-10 h-10 mx-auto ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8E8074]'}`} />
            <p className="text-sm font-medium text-[#8E8074] dark:text-[#94A3B8]">{t.projects.noResults}</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white'
                  : 'bg-[#C8A97E] text-[#1A1715]'
              }`}
            >
              {t.projects.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.slug}`}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 group ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b] hover:border-[#38bdf8]/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]'
                    : 'bg-white border-[#E5DCD0] shadow-sm hover:border-[#8C6D37]/50'
                }`}
              >
                {/* Thumbnail header */}
                <div className="relative h-56 w-full overflow-hidden bg-[#0a0f1d]">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title[language] || project.title.en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category and Featured Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                        theme === 'dark'
                          ? 'bg-[#0a0f1d]/85 border-[#1e294b] text-[#38bdf8]'
                          : 'bg-white/90 border-[#DDD4C9] text-[#2C2523]'
                      }`}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                          theme === 'dark'
                            ? 'bg-[#a855f7] text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                            : 'bg-[#C8A97E] text-[#1A1715]'
                        }`}
                      >
                        {t.projects.featuredBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-2xl font-serif-display font-semibold transition-colors ${
                        theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                      }`}
                    >
                      {project.title[language] || project.title.en}
                    </h3>
                    <p
                      className={`text-sm mt-3 line-clamp-3 leading-relaxed ${
                        theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#6E6156]'
                      }`}
                    >
                      {project.description[language] || project.description.en}
                    </p>
                  </div>

                  {/* Tech stack & controls */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            theme === 'dark'
                              ? 'bg-[#0a0f1d] border-[#1e294b] text-[#38bdf8]'
                              : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#55473F]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-[#8E8074] dark:text-[#64748B]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Bottom Actions */}
                    <div
                      className={`pt-5 border-t flex items-center justify-between ${
                        theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
                      }`}
                    >
                      <button
                        id={`btn-live-view-${project.slug}`}
                        onClick={() => navigateTo('project-detail', project.slug)}
                        className={`flex items-center gap-2 text-xs uppercase tracking-wider font-bold hover:underline transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-amber-950'
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t.projects.liveViewBtn}</span>
                      </button>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full border transition-all duration-300 hover:scale-110 ${
                              theme === 'dark'
                                ? 'border-[#1e294b] text-[#38bdf8] hover:border-[#38bdf8]'
                                : 'border-[#DDD4C9] text-[#55473F] hover:border-[#8C6D37]'
                            }`}
                            title="GitHub Source"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button
                          onClick={() => navigateTo('project-detail', project.slug)}
                          className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-all duration-300 hover:opacity-80 hover:scale-105 ${
                            theme === 'dark'
                              ? 'bg-[#16203c] text-cyan-400 border border-cyan-400/40 shadow-sm'
                              : 'bg-[#EFE8DE] text-amber-950 border border-[#C8A97E]/50'
                          }`}
                        >
                          <span>{t.projects.detailsBtn}</span>
                          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
