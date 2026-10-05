import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Code2,
  Database,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Utensils,
  BookOpen,
  Layout,
  Send,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { theme, t, language, projects, navigateTo } = usePortfolio();

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const capabilities = [
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: t.services.ecommerce.title,
      desc: t.services.ecommerce.desc,
      stack: ['Next.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    },
    {
      id: 'hospitality',
      icon: Utensils,
      title: t.services.hospitality.title,
      desc: t.services.hospitality.desc,
      stack: ['React', 'WebSockets', 'Prisma ORM', 'TypeScript'],
    },
    {
      id: 'archival',
      icon: BookOpen,
      title: t.services.archival.title,
      desc: t.services.archival.desc,
      stack: ['Neon Postgres', 'Full-Text Search', 'Node.js', 'Docker'],
    },
    {
      id: 'bespoke',
      icon: Layout,
      title: t.services.bespoke.title,
      desc: t.services.bespoke.desc,
      stack: ['Tailwind v4', 'Framer Motion', 'SSR', 'SEO Core'],
    },
  ];

  return (
    <div id="home-page" className="w-full">
      {/* =========================================================================
         1. HERO SECTION (Centered Layout, Profile Picture, Minimalist & Elegant)
         ========================================================================= */}
      <section
        id="hero-section"
        className={`relative pt-16 pb-24 md:pt-20 md:pb-32 border-b transition-colors ${
          theme === 'dark'
            ? 'border-[#1e294b] bg-[#0a0f1d]'
            : 'border-[#EBE2D8] bg-[#FAF7F2]'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10 space-y-8">
          
          {/* Circular Profile Picture Placeholder */}
          <div className="flex justify-center">
            <div
              id="hero-profile-picture-container"
              className={`relative p-[3px] rounded-full transition-all duration-500 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-[#38bdf8] via-[#818cf8] to-[#c084fc] shadow-[0_0_30px_rgba(56,189,248,0.35)]'
                  : 'bg-gradient-to-tr from-[#C8A97E] via-[#DDD4C9] to-[#E5DCD0] shadow-md'
              }`}
            >
              {/* Inner Circular Avatar */}
              <div
                className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden flex flex-col items-center justify-center relative border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b]'
                    : 'bg-[#F9F6F0] border-[#E8DFD5]'
                }`}
              >
                {/* Developer Monogram / Stylized Portrait Placeholder */}
                <div className="flex flex-col items-center justify-center select-none">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-serif-display text-2xl font-bold border transition-colors ${
                      theme === 'dark'
                        ? 'bg-[#16203c] border-[#38bdf8]/40 text-[#38bdf8]'
                        : 'bg-[#EFE8DE] border-[#C8A97E]/50 text-[#4A3E38]'
                    }`}
                  >
                    EM
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-semibold mt-1.5 ${
                      theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'
                    }`}
                  >
                    Elmutasem
                  </span>
                </div>

                {/* Online Status Dot */}
                <span
                  title="Available for projects"
                  className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#11182e] absolute bottom-2 end-3 shadow-sm animate-pulse"
                />
              </div>
            </div>
          </div>

          {/* Refined Status Pill */}
          <div>
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-medium tracking-wide transition-all ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b] text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                  : 'bg-[#F2ECE4] border-[#DDD4C9] text-[#55473F]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-[#38bdf8]' : 'bg-[#C8A97E]'}`} />
              <span>{t.hero.statusBadge}</span>
            </div>
          </div>

          {/* Centered Title & Headline with elegantly balanced greeting */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span
                className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-amber-950 dark:text-cyan-400"
              >
                {t.hero.greeting}
              </span>
              <h1
                className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif-display ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
                }`}
              >
                {t.hero.name}
              </h1>
            </div>
            <p
              className={`text-xl sm:text-2xl font-serif italic font-medium ${
                theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#5C4D44]'
              }`}
            >
              {t.hero.role}
            </p>
          </div>

          {/* Centered Narrative Tagline */}
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light ${
              theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
            }`}
          >
            {t.hero.tagline}
          </p>

          {/* Action Buttons (Centered & Hover Scale) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="hero-cta-projects"
              onClick={() => navigateTo('projects')}
              className={`px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-2.5 transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_25px_rgba(2,132,199,0.5)]'
                  : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F] shadow-sm'
              }`}
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              id="hero-cta-contact"
              onClick={() => navigateTo('contact')}
              className={`px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold border flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'border-[#1e294b] bg-[#11182e] text-[#F1F5F9] hover:border-[#38bdf8] hover:text-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'border-[#DDD4C9] bg-white text-[#2C2523] hover:border-[#8C6D37] hover:bg-[#F2ECE4]'
              }`}
            >
              <Send className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-[#C8A97E]'}`} />
              <span>{t.hero.contactBtn}</span>
            </button>
          </div>

          {/* Centered Key Metrics */}
          <div
            className={`grid grid-cols-3 gap-6 sm:gap-12 max-w-xl mx-auto pt-8 border-t transition-colors ${
              theme === 'dark' ? 'border-[#1e294b]' : 'border-[#E8DFD5]'
            }`}
          >
            <div>
              <div
                className={`text-3xl sm:text-4xl font-serif-display font-semibold ${
                  theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#2C2523]'
                }`}
              >
                6+
              </div>
              <div className={`text-xs uppercase tracking-wider mt-1 font-medium ${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#8E8074]'}`}>
                {t.hero.statYears}
              </div>
            </div>
            <div>
              <div
                className={`text-3xl sm:text-4xl font-serif-display font-semibold ${
                  theme === 'dark' ? 'text-[#c084fc]' : 'text-[#2C2523]'
                }`}
              >
                30+
              </div>
              <div className={`text-xs uppercase tracking-wider mt-1 font-medium ${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#8E8074]'}`}>
                {t.hero.statProjects}
              </div>
            </div>
            <div>
              <div
                className={`text-3xl sm:text-4xl font-serif-display font-semibold ${
                  theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'
                }`}
              >
                100%
              </div>
              <div className={`text-xs uppercase tracking-wider mt-1 font-medium ${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#8E8074]'}`}>
                {t.hero.statResponsive}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
         2. CORE CAPABILITIES (E-Commerce, Hospitality POS, Library Archives, Bespoke)
         ========================================================================= */}
      <section
        id="services-section"
        className={`py-24 md:py-32 border-b transition-colors ${
          theme === 'dark' ? 'border-[#1e294b] bg-[#070b16]' : 'border-[#EBE2D8] bg-[#F7F3EC]'
        }`}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
            >
              {t.services.sectionBadge}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display tracking-tight ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
              }`}
            >
              {t.services.title}
            </h2>
            <p
              className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
              }`}
            >
              {t.services.subtitle}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  id={`capability-card-${cap.id}`}
                  className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 flex flex-col justify-between group ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b] hover:border-[#38bdf8]/60 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'bg-[#FAF7F2] border-[#E5DCD0] hover:border-[#8C6D37]/50 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-[#16203c] border-[#1e294b] text-[#38bdf8] group-hover:border-[#38bdf8]'
                          : 'bg-white border-[#DDD4C9] text-[#4A3E38]'
                      }`}
                    >
                      <IconComp className={`w-5 h-5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                    </div>

                    <h3
                      className={`text-xl font-serif-display font-semibold ${
                        theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                      }`}
                    >
                      {cap.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#6E6156]'
                      }`}
                    >
                      {cap.desc}
                    </p>
                  </div>

                  <div
                    className={`pt-6 border-t mt-8 flex flex-wrap gap-1.5 ${
                      theme === 'dark' ? 'border-[#1e294b]' : 'border-[#E8DFD5]'
                    }`}
                  >
                    {cap.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                          theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b] text-[#38bdf8]'
                            : 'bg-white border-[#DDD4C9] text-[#55473F]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         3. FEATURED PROJECTS SHOWCASE
         ========================================================================= */}
      <section
        id="featured-projects-section"
        className={`py-24 md:py-32 border-b transition-colors ${
          theme === 'dark' ? 'border-[#1e294b] bg-[#0a0f1d]' : 'border-[#EBE2D8] bg-[#FAF7F2]'
        }`}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
            >
              {t.projects.badge}
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display tracking-tight ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
              }`}
            >
              {t.projects.title}
            </h2>
            <p
              className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
              }`}
            >
              {t.projects.subtitle}
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('projects')}
                className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold border-b pb-1 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'border-[#38bdf8] text-[#38bdf8] hover:text-[#c084fc] hover:border-[#c084fc]'
                    : 'border-[#8C6D37] text-[#4A3E38] hover:text-[#201A18]'
                }`}
              >
                <span>{t.projects.allFilter}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Featured Projects Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                id={`featured-card-${project.slug}`}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 group ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b] hover:border-[#a855f7]/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                    : 'bg-white border-[#E5DCD0] shadow-sm hover:border-[#8C6D37]/50'
                }`}
              >
                {/* Image Cover */}
                <div className="relative h-60 w-full overflow-hidden bg-[#0a0f1d]">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title[language] || project.title.en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                        theme === 'dark'
                          ? 'bg-[#0a0f1d]/85 border-[#1e294b] text-[#38bdf8]'
                          : 'bg-white/90 border-[#DDD4C9] text-[#2C2523]'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
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
                      className={`text-sm mt-3 line-clamp-2 leading-relaxed ${
                        theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#6E6156]'
                      }`}
                    >
                      {project.description[language] || project.description.en}
                    </p>
                  </div>

                  {/* Stack & Action */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
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
                    </div>

                    <div
                      className={`pt-5 border-t flex items-center justify-between ${
                        theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
                      }`}
                    >
                      <button
                        onClick={() => navigateTo('project-detail', project.slug)}
                        className={`flex items-center gap-2 text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:scale-105 ${
                          theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-amber-950 hover:text-amber-900'
                        }`}
                      >
                        <span>{t.projects.liveViewBtn}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

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
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
         4. CALL TO ACTION STRIP
         ========================================================================= */}
      <section
        id="cta-strip"
        className={`py-24 md:py-28 border-b transition-colors ${
          theme === 'dark' ? 'border-[#1e294b] bg-[#070b16]' : 'border-[#EBE2D8] bg-[#F2ECE4]'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto px-6 text-center space-y-6">
          <span
            className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
          >
            {t.hero.ctaBadge}
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-serif-display font-bold ${
              theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
            }`}
          >
            {t.hero.ctaTitle}
          </h2>
          <p
            className={`text-base max-w-xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
            }`}
          >
            {t.hero.ctaSubtitle}
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => navigateTo('contact')}
              className={`px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 shadow-sm ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white hover:shadow-[0_0_25px_rgba(2,132,199,0.5)]'
                  : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
              }`}
            >
              {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
