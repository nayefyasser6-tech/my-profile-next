import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  User,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Layers,
  Calendar,
  ArrowRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { theme, t, navigateTo } = usePortfolio();

  const milestones = t.about.milestones || [
    {
      period: '2023 – Present',
      role: 'Lead Full-Stack Web Developer',
      company: 'Independent Web Studio',
      location: 'Bursa, Türkiye',
      description:
        'Architecting production-ready e-commerce platforms, restaurant POS dashboards, and digital library systems with Next.js App Router, Prisma ORM, and PostgreSQL.',
    },
    {
      period: '2021 – 2023',
      role: 'Full-Stack Software Engineer',
      company: 'Digital Solutions Agency',
      location: 'Türkiye',
      description:
        'Developed full-stack web applications, headless commerce integrations, and high-conversion client portals. Spearheaded TypeScript adoption and database schema migrations.',
    },
    {
      period: '2019 – 2021',
      role: 'Frontend & UI Engineer',
      company: 'Web Craft Studio',
      location: 'Bursa, Türkiye',
      description:
        'Built accessible, responsive web interfaces and design systems. Engineered multi-language localization (AR/EN/TR) and dynamic layout animations.',
    },
  ];

  const technicalCompetencies = t.about.competencies || [
    {
      category: 'Frontend Engineering',
      skills: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'State Management'],
    },
    {
      category: 'Backend Architecture',
      skills: ['Node.js', 'Express', 'REST APIs', 'Server Actions', 'Authentication Flow', 'API Route Handlers'],
    },
    {
      category: 'Database & ORM',
      skills: ['Neon PostgreSQL', 'Prisma ORM', 'Relational Schemas', 'Indexing & Queries', 'Connection Pooling'],
    },
    {
      category: 'Performance & UX',
      skills: ['Mobile-First Layouts', 'Core Web Vitals', 'i18n Localization', 'Semantic HTML', 'SEO Optimization'],
    },
  ];

  return (
    <div id="about-page" className="w-full py-16 md:py-24">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20">
        
        {/* Centered Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
          >
            {t.about.badge}
          </span>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-display tracking-tight leading-tight mb-4 ${
              theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
            }`}
          >
            {t.about.title}
          </h1>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
            }`}
          >
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Direct Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-8">
            <div
              className={`p-8 sm:p-10 rounded-2xl border space-y-6 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <h2
                className={`text-2xl font-serif-display font-bold ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                }`}
              >
                {t.about.journeyTitle}
              </h2>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                }`}
              >
                {t.about.journeyP1}
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                }`}
              >
                {t.about.journeyP2}
              </p>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                }`}
              >
                {t.about.journeyP3}
              </p>
            </div>

            {/* Philosophy Card */}
            <div
              className={`p-8 sm:p-10 rounded-2xl border space-y-4 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#0a0f1d] border-[#1e294b]'
                  : 'bg-[#FAF7F2] border-[#DDD4C9]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Compass className={`w-5 h-5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                <h3
                  className={`text-xl font-serif-display font-semibold ${
                    theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                  }`}
                >
                  {t.about.philosophyTitle}
                </h3>
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#4A3E38]'
                }`}
              >
                {t.about.philosophyP1}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-[#64748B]' : 'text-[#6E6156]'
                }`}
              >
                {t.about.philosophyP2}
              </p>
            </div>
          </div>

          {/* Coordinate & Education Card */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Direct Coordinates */}
            <div
              className={`p-8 rounded-2xl border space-y-6 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <h3
                className={`text-xs uppercase tracking-widest font-semibold ${
                  theme === 'dark' ? 'text-[#c084fc]' : 'text-[#8C6D37]'
                }`}
              >
                {t.about.directInfoTitle}
              </h3>

              <div className="space-y-4 text-xs">
                <div
                  className={`p-4 rounded-xl border space-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="text-[#8E8074] dark:text-[#94A3B8] flex items-center gap-2">
                    <User className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                    <span>{t.about.fullNameLabel || 'Full Name'}</span>
                  </div>
                  <div className="font-semibold text-sm text-inherit">Elmutasem</div>
                </div>

                <div
                  className={`p-4 rounded-xl border space-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="text-[#8E8074] dark:text-[#94A3B8] flex items-center gap-2">
                    <MapPin className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                    <span>{t.about.locationLabel || 'Location'}</span>
                  </div>
                  <div className="font-semibold text-sm text-inherit">Bursa, Türkiye</div>
                </div>

                <div
                  className={`p-4 rounded-xl border space-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="text-[#8E8074] dark:text-[#94A3B8] flex items-center gap-2">
                    <Mail className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                    <span>{t.about.emailLabel || 'Direct Email'}</span>
                  </div>
                  <a
                    href="mailto:nayefyaser6@gmail.com"
                    className={`font-semibold text-sm hover:underline block truncate ${
                      theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'
                    }`}
                  >
                    nayefyaser6@gmail.com
                  </a>
                </div>

                <div
                  className={`p-4 rounded-xl border space-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="text-[#8E8074] dark:text-[#94A3B8] flex items-center gap-2">
                    <Phone className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                    <span>{t.about.phoneLabel || 'Direct Phone / WhatsApp'}</span>
                  </div>
                  <a
                    href="tel:+905510947569"
                    className={`font-semibold text-sm hover:underline block ${
                      theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'
                    }`}
                  >
                    +90 551 094 7569
                  </a>
                </div>
              </div>

              <button
                onClick={() => navigateTo('contact')}
                className={`w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 text-center ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(2,132,199,0.5)]'
                    : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                }`}
              >
                {t.about.initiateConvBtn || 'Initiate Conversation'}
              </button>
            </div>

            {/* Education Box */}
            <div
              className={`p-8 rounded-2xl border space-y-4 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap className={`w-5 h-5 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-[#C8A97E]'}`} />
                <h3
                  className={`text-sm uppercase tracking-wider font-semibold ${
                    theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                  }`}
                >
                  {t.about.educationTitle}
                </h3>
              </div>
              <div>
                <div
                  className={`text-base font-semibold ${
                    theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                  }`}
                >
                  {t.about.educationDegree}
                </div>
                <div className="text-xs text-[#8E8074] dark:text-[#94A3B8] mt-1">
                  {t.about.educationSchool}
                </div>
                <div className={`text-xs font-medium mt-1 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'}`}>
                  {t.about.educationPeriod}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Arsenal Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span
              className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
            >
              Core Stack
            </span>
            <h2
              className={`text-3xl font-serif-display font-bold ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
              }`}
            >
              {t.about.skillsRadarTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {technicalCompetencies.map((group) => (
              <div
                key={group.category}
                className={`p-8 rounded-2xl border space-y-5 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b] hover:border-[#38bdf8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                    : 'bg-white border-[#E5DCD0] shadow-sm hover:border-[#8C6D37]/50'
                }`}
              >
                <h3
                  className={`text-base font-serif-display font-semibold pb-3 border-b ${
                    theme === 'dark'
                      ? 'text-[#F1F5F9] border-[#1e294b]'
                      : 'text-[#2C2523] border-[#EFE8DE]'
                  }`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                     <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        theme === 'dark'
                          ? 'bg-[#0a0f1d] border-[#1e294b] text-[#38bdf8]'
                          : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#55473F]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones & Experience Timeline */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span
              className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
            >
              Track Record
            </span>
            <h2
              className={`text-3xl font-serif-display font-bold ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
              }`}
            >
              {t.about.experienceTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((mile, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b] hover:border-[#a855f7]/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]'
                    : 'bg-white border-[#E5DCD0] shadow-sm hover:border-[#8C6D37]/40'
                }`}
              >
                <div
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-4 ${
                    theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
                  }`}
                >
                  <div>
                    <h3
                      className={`text-xl font-serif-display font-bold ${
                        theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                      }`}
                    >
                      {mile.role}
                    </h3>
                    <p className={`text-xs mt-1 font-medium ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'}`}>
                      {mile.company} • {mile.location}
                    </p>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#c084fc]'
                        : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#55473F]'
                    }`}
                  >
                    <Calendar className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-[#C8A97E]'}`} />
                    <span>{mile.period}</span>
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                  }`}
                >
                  {mile.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
