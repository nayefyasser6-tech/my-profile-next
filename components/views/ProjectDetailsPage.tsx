import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { LiveViewMockup } from '../../components/LiveViewMockup';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Compass,
} from 'lucide-react';

export const ProjectDetailsPage: React.FC = () => {
  const {
    theme,
    t,
    language,
    selectedProjectSlug,
    getProjectBySlug,
    projects,
    navigateTo,
  } = usePortfolio();

  const project =
    (selectedProjectSlug && getProjectBySlug(selectedProjectSlug)) ||
    projects[0];

  if (!project) {
    return (
      <div className="w-full max-w-screen-2xl mx-auto px-6 py-24 text-center space-y-4">
        <h2 className="text-xl font-serif text-[#8E8074]">Project record not found.</h2>
        <button
          onClick={() => navigateTo('projects')}
          className="px-6 py-2.5 rounded-full bg-[#C8A97E] text-[#1A1715] text-xs uppercase tracking-wider font-bold"
        >
          {t.projectDetails.backBtn}
        </button>
      </div>
    );
  }

  return (
    <div id="project-details-page" className="w-full py-16 md:py-24">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Navigation & Header */}
        <div className="space-y-6">
          <button
            onClick={() => navigateTo('projects')}
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'text-[#38bdf8] hover:text-[#7dd3fc]'
                : 'text-[#55473F] hover:text-[#201A18]'
            }`}
          >
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{t.projectDetails.backBtn}</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b] text-[#38bdf8]'
                      : 'bg-[#FAF7F2] border-[#E5DCD0] text-[#55473F]'
                  }`}
                >
                  {project.category}
                </span>
                {project.featured && (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      theme === 'dark'
                        ? 'bg-[#a855f7] text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                        : 'bg-[#C8A97E] text-[#1A1715]'
                    }`}
                  >
                    {t.projects.featuredBadge}
                  </span>
                )}
              </div>

              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-display tracking-tight ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
                }`}
              >
                {project.title[language] || project.title.en}
              </h1>

              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                }`}
              >
                {project.description[language] || project.description.en}
              </p>
            </div>

            {/* Links and Actions */}
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-full border text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'border-[#1e294b] bg-[#11182e] text-[#38bdf8] hover:border-[#38bdf8]'
                      : 'border-[#DDD4C9] bg-white text-[#55473F] hover:border-[#8C6D37]'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>{t.projectDetails.viewSource}</span>
                </a>
              )}

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-7 py-3 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(2,132,199,0.5)]'
                    : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.projectDetails.openInNewTab}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
           CORE LIVE VIEW FEATURE: INTERACTIVE DESKTOP/MOBILE DEVICE MOCKUP
           ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2
              className={`text-xl font-serif-display font-bold flex items-center gap-2.5 ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
              }`}
            >
              <Compass className={`w-5 h-5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
              <span>{t.projectDetails.liveMockupTitle}</span>
            </h2>
          </div>

          <LiveViewMockup project={project} />
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-4">
            <h3
              className="block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
            >
              {t.projectDetails.metricsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b] hover:border-[#38bdf8]/50'
                      : 'bg-white border-[#E5DCD0] shadow-sm hover:border-[#8C6D37]/50'
                  }`}
                >
                  <div className="text-xs uppercase tracking-wider text-[#8E8074] dark:text-[#94A3B8]">
                    {metric.label}
                  </div>
                  <div
                    className={`text-3xl font-serif-display font-bold mt-2 ${
                      theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#2C2523]'
                    }`}
                  >
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deep Dive Narrative & Engineering Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Architecture & Solution Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Section */}
            <div
              className={`p-8 sm:p-10 rounded-2xl border space-y-4 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <h3
                className={`text-2xl font-serif-display font-bold flex items-center gap-2.5 ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                }`}
              >
                <Layers className={`w-5 h-5 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-[#C8A97E]'}`} />
                <span>{t.projectDetails.overviewTitle}</span>
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                }`}
              >
                {project.fullDetails[language] || project.fullDetails.en}
              </p>
            </div>

            {/* Challenges and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenge */}
              <div
                className={`p-8 rounded-2xl border space-y-4 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#0a0f1d] border-[#1e294b]'
                    : 'bg-[#FAF7F2] border-[#DDD4C9]'
                }`}
              >
                <div className="flex items-center gap-2 text-[#E07A5F] dark:text-[#f87171]">
                  <AlertTriangle className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-wider font-bold">
                    {t.projectDetails.challengesTitle}
                  </h4>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                  }`}
                >
                  {project.challenges?.[language] ||
                    project.challenges?.en ||
                    'High concurrency database access, inventory contention during peak sales, and cross-browser layout consistency.'}
                </p>
              </div>

              {/* Solution */}
              <div
                className={`p-8 rounded-2xl border space-y-4 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b]'
                    : 'bg-white border-[#E5DCD0] shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 text-[#81B29A] dark:text-[#34d399]">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-wider font-bold">
                    {t.projectDetails.solutionsTitle}
                  </h4>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#4A3E38]'
                  }`}
                >
                  {project.solutions?.[language] ||
                    project.solutions?.en ||
                    'Implemented Prisma atomic operations, optimistic locking, and responsive mobile-first component hierarchies.'}
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar Tech Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div
              className={`p-8 rounded-2xl border space-y-6 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <h4
                className="block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
              >
                Integrated Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#38bdf8]'
                        : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#55473F]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className={`pt-6 border-t space-y-3 text-xs ${
                  theme === 'dark'
                    ? 'border-[#1e294b] text-[#94A3B8]'
                    : 'border-[#EFE8DE] text-[#7A6C62]'
                }`}
              >
                <div className="flex justify-between">
                  <span>Category</span>
                  <span className="font-semibold text-inherit">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Database</span>
                  <span className="font-semibold text-inherit">PostgreSQL (Neon)</span>
                </div>
                <div className="flex justify-between">
                  <span>ORM Model</span>
                  <span className="font-semibold text-inherit">Prisma Schema</span>
                </div>
                <div className="flex justify-between">
                  <span>Created</span>
                  <span className="font-semibold text-inherit">{project.createdAt.slice(0, 10)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
