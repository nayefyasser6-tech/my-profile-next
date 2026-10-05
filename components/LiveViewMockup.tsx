import React, { useState } from 'react';
import { Project, DeviceType } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Monitor,
  Smartphone,
  RotateCw,
  ExternalLink,
  Maximize2,
  Minimize2,
  Lock,
  Wifi,
  Battery,
  ShoppingBag,
  Utensils,
  BookOpen,
  Compass,
} from 'lucide-react';

interface LiveViewMockupProps {
  project: Project;
}

export const LiveViewMockup: React.FC<LiveViewMockupProps> = ({ project }) => {
  const { theme, t } = usePortfolio();
  const [device, setDevice] = useState<DeviceType>(project.defaultDevice || 'desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);
  const [activeView, setActiveView] = useState<'interactive' | 'iframe'>('interactive');

  const handleReload = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div
      id="live-view-mockup-wrapper"
      className={`relative w-full rounded-2xl border transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none p-4 sm:p-8 overflow-y-auto' : ''
      } ${
        theme === 'dark'
          ? 'bg-[#0a0f1d] border-[#1e294b]'
          : 'bg-[#FAF7F2] border-[#E5DCD0] shadow-sm'
      }`}
    >
      {/* Mockup Header Control Bar */}
      <div
        className={`px-5 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b ${
          theme === 'dark'
            ? 'bg-[#11182e] border-[#1e294b]'
            : 'bg-[#F2ECE4] border-[#E8DFD5]'
        }`}
      >
        {/* Device Switcher Controls */}
        <div
          className={`flex items-center gap-1.5 p-1 rounded-full border ${
            theme === 'dark'
              ? 'bg-[#0a0f1d] border-[#1e294b]'
              : 'bg-[#FAF7F2] border-[#DDD4C9]'
          }`}
        >
          <button
            id="mockup-btn-desktop"
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              device === 'desktop'
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white font-semibold shadow-sm'
                  : 'bg-[#EFE8DE] text-[#2C2523] border border-[#C8A97E]/50 font-semibold'
                : theme === 'dark'
                ? 'text-[#94A3B8] hover:text-[#F1F5F9]'
                : 'text-[#7D6E63] hover:text-[#2C2523]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.projectDetails.desktopMode}</span>
          </button>
          <button
            id="mockup-btn-mobile"
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              device === 'mobile'
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white font-semibold shadow-sm'
                  : 'bg-[#EFE8DE] text-[#2C2523] border border-[#C8A97E]/50 font-semibold'
                : theme === 'dark'
                ? 'text-[#94A3B8] hover:text-[#F1F5F9]'
                : 'text-[#7D6E63] hover:text-[#2C2523]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.projectDetails.mobileMode}</span>
          </button>
        </div>

        {/* View Mode Toggle: Interactive App Preview vs Raw Iframe */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center p-1 rounded-full border text-xs font-medium ${
              theme === 'dark'
                ? 'bg-[#0a0f1d] border-[#1e294b]'
                : 'bg-[#FAF7F2] border-[#DDD4C9]'
            }`}
          >
            <button
              onClick={() => setActiveView('interactive')}
              className={`px-3 py-1 rounded-full transition-all ${
                activeView === 'interactive'
                  ? theme === 'dark'
                    ? 'bg-[#1e294b] text-[#38bdf8] font-semibold'
                    : 'bg-[#EFE8DE] text-[#2C2523] font-semibold'
                  : theme === 'dark'
                  ? 'text-[#94A3B8]'
                  : 'text-[#7D6E63]'
              }`}
            >
              Interactive App
            </button>
            <button
              onClick={() => setActiveView('iframe')}
              className={`px-3 py-1 rounded-full transition-all ${
                activeView === 'iframe'
                  ? theme === 'dark'
                    ? 'bg-[#1e294b] text-[#38bdf8] font-semibold'
                    : 'bg-[#EFE8DE] text-[#2C2523] font-semibold'
                  : theme === 'dark'
                  ? 'text-[#94A3B8]'
                  : 'text-[#7D6E63]'
              }`}
            >
              Raw Embed
            </button>
          </div>

          {/* Action buttons */}
          <button
            onClick={handleReload}
            title={t.projectDetails.reloadPreview}
            className={`p-2 rounded-full border transition-all ${
              theme === 'dark'
                ? 'border-[#1e294b] bg-[#0a0f1d] text-[#38bdf8] hover:border-[#38bdf8]'
                : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#6E6156] hover:border-[#C8A97E]'
            }`}
            aria-label="Reload preview"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={t.projectDetails.openInNewTab}
            className={`p-2 rounded-full border transition-all ${
              theme === 'dark'
                ? 'border-[#1e294b] bg-[#0a0f1d] text-[#38bdf8] hover:border-[#38bdf8]'
                : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#6E6156] hover:border-[#C8A97E]'
            }`}
            aria-label="Open external project"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle fullscreen mockup"
            className={`p-2 rounded-full border transition-all ${
              theme === 'dark'
                ? 'border-[#1e294b] bg-[#0a0f1d] text-[#38bdf8] hover:border-[#38bdf8]'
                : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#6E6156] hover:border-[#C8A97E]'
            }`}
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Mockup Viewport Canvas */}
      <div
        className={`p-6 sm:p-10 flex items-center justify-center overflow-x-auto min-h-[540px] transition-colors ${
          theme === 'dark' ? 'bg-[#080d19]' : 'bg-[#F2ECE4]'
        }`}
      >
        {device === 'desktop' ? (
          /* =========================================================================
             DESKTOP BROWSER FRAME MOCKUP
             ========================================================================= */
          <div
            id="desktop-frame-container"
            className={`w-full max-w-5xl rounded-xl border shadow-xl overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#0a0f1d] border-[#1e294b]'
                : 'bg-white border-[#DDD4C9]'
            }`}
          >
            {/* Desktop Browser Header / URL Bar */}
            <div
              className={`h-11 px-4 flex items-center justify-between gap-4 border-b ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-[#FAF7F2] border-[#E9E1D7]'
              }`}
            >
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#f87171]" />
                <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                <span className="w-3 h-3 rounded-full bg-[#34d399]" />
              </div>

              {/* URL Address Bar */}
              <div
                className={`flex-1 max-w-xl mx-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs ${
                  theme === 'dark'
                    ? 'bg-[#080d19] border-[#1e294b] text-[#38bdf8]'
                    : 'bg-white border-[#E2D8CC] text-[#55473F]'
                }`}
              >
                <Lock className={`w-3 h-3 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                <span className={`font-medium ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`}>https://</span>
                <span className="truncate">{project.slug}.elmutasem.dev</span>
                <span className={`ml-auto text-[10px] uppercase tracking-wider font-semibold ${theme === 'dark' ? 'text-[#a855f7]' : 'text-[#A88B5D]'}`}>
                  Live
                </span>
              </div>

              <div className="w-12 text-right">
                <span className="text-[11px] text-[#9E8E81]">SSL</span>
              </div>
            </div>

            {/* Desktop Screen Content */}
            <div className="relative w-full h-[540px] overflow-hidden">
              {activeView === 'interactive' ? (
                <ProjectInteractiveExperience project={project} device="desktop" />
              ) : (
                <iframe
                  key={key}
                  src={project.liveUrl}
                  title={`${project.title.en} Desktop Preview`}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        ) : (
          /* =========================================================================
             MOBILE SMARTPHONE FRAME MOCKUP
             ========================================================================= */
          <div
            id="mobile-frame-container"
            className={`relative w-[340px] h-[650px] rounded-[44px] border-[10px] shadow-2xl overflow-hidden transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#1A1715] border-[#2E2824]'
                : 'bg-white border-[#DDD4C9]'
            }`}
          >
            {/* Dynamic Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#25201C] rounded-full z-30 flex items-center justify-between px-3">
              <span className="w-2 h-2 rounded-full bg-[#1A1715]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
            </div>

            {/* Status Bar */}
            <div
              className={`h-11 pt-2.5 px-6 flex items-center justify-between text-[11px] font-medium z-20 ${
                theme === 'dark'
                  ? 'bg-[#221D1A] text-[#D8C7B5]'
                  : 'bg-[#FAF7F2] text-[#55473F]'
              }`}
            >
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Mobile Screen Content */}
            <div className="w-full h-[570px] overflow-y-auto">
              {activeView === 'interactive' ? (
                <ProjectInteractiveExperience project={project} device="mobile" />
              ) : (
                <iframe
                  key={key}
                  src={project.liveUrl}
                  title={`${project.title.en} Mobile Preview`}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />
              )}
            </div>

            {/* Home Indicator Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#8E8074]/50 rounded-full z-30" />
          </div>
        )}
      </div>

      {/* Mockup Footer Caption */}
      <div
        className={`px-5 py-3 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium ${
          theme === 'dark'
            ? 'border-[#2E2824] bg-[#1E1A17] text-[#9E8E81]'
            : 'border-[#E9E1D7] bg-[#FAF7F2] text-[#7A6C62]'
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#81B29A]" />
          <span>{t.projectDetails.sandboxNotice}</span>
        </span>
        <span className="text-[#A88B5D] dark:text-[#C8A97E]">
          {device === 'desktop' ? 'Desktop Viewport (1440x900)' : 'Mobile Viewport (390x844)'}
        </span>
      </div>
    </div>
  );
};

/* =========================================================================
   Interactive Web Application Experience for Visitors
   Tailored directly to the project scope (Clothing E-Commerce, Restaurant POS, Library System, Landing Page)
   ========================================================================= */
const ProjectInteractiveExperience: React.FC<{ project: Project; device: DeviceType }> = ({
  project,
  device,
}) => {
  const { theme } = usePortfolio();
  const [selectedTab, setSelectedTab] = useState<'overview' | 'features' | 'preview'>('overview');
  const [cartCount, setCartCount] = useState(2);
  const [bookingTime, setBookingTime] = useState('19:30');
  const [searchQuery, setSearchQuery] = useState('');

  const isEcommerce = project.slug.includes('fashion') || project.slug.includes('ecommerce') || project.category === 'FULLSTACK' && project.title.en.includes('Lumière');
  const isRestaurant = project.slug.includes('restaurant') || project.title.en.includes('Saffron');
  const isLibrary = project.slug.includes('library') || project.title.en.includes('Alexandria');

  return (
    <div
      className={`h-full w-full flex flex-col justify-between p-5 overflow-y-auto ${
        theme === 'dark' ? 'bg-[#1A1715] text-[#EFE8DE]' : 'bg-[#FAF7F2] text-[#2C2523]'
      } ${device === 'mobile' ? 'text-xs' : 'text-sm'}`}
    >
      <div>
        {/* Header inside mockup */}
        <div
          className={`flex items-center justify-between pb-3.5 mb-4 border-b ${
            theme === 'dark' ? 'border-[#2E2824]' : 'border-[#E8DFD5]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            {isEcommerce && <ShoppingBag className="w-4 h-4 text-[#C8A97E]" />}
            {isRestaurant && <Utensils className="w-4 h-4 text-[#C8A97E]" />}
            {isLibrary && <BookOpen className="w-4 h-4 text-[#C8A97E]" />}
            {!isEcommerce && !isRestaurant && !isLibrary && <Compass className="w-4 h-4 text-[#C8A97E]" />}
            <span className="font-serif-display font-semibold tracking-tight text-base">
              {project.title.en}
            </span>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
              theme === 'dark'
                ? 'bg-[#25201C] border-[#38312B] text-[#D8C7B5]'
                : 'bg-[#EFE8DE] border-[#DDD4C9] text-[#55473F]'
            }`}
          >
            {project.category}
          </span>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setSelectedTab('overview')}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
              selectedTab === 'overview'
                ? theme === 'dark'
                  ? 'bg-[#2E2824] text-[#F5EFEB] font-semibold border border-[#C8A97E]/30'
                  : 'bg-[#EFE8DE] text-[#2C2523] font-semibold border border-[#C8A97E]/40'
                : theme === 'dark'
                ? 'text-[#9E8E81]'
                : 'text-[#7A6C62]'
            }`}
          >
            Live Showcase
          </button>
          <button
            onClick={() => setSelectedTab('features')}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
              selectedTab === 'features'
                ? theme === 'dark'
                  ? 'bg-[#2E2824] text-[#F5EFEB] font-semibold border border-[#C8A97E]/30'
                  : 'bg-[#EFE8DE] text-[#2C2523] font-semibold border border-[#C8A97E]/40'
                : theme === 'dark'
                ? 'text-[#9E8E81]'
                : 'text-[#7A6C62]'
            }`}
          >
            Key Capabilities
          </button>
          <button
            onClick={() => setSelectedTab('preview')}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
              selectedTab === 'preview'
                ? theme === 'dark'
                  ? 'bg-[#2E2824] text-[#F5EFEB] font-semibold border border-[#C8A97E]/30'
                  : 'bg-[#EFE8DE] text-[#2C2523] font-semibold border border-[#C8A97E]/40'
                : theme === 'dark'
                ? 'text-[#9E8E81]'
                : 'text-[#7A6C62]'
            }`}
          >
            Visual Interface
          </button>
        </div>

        {/* Tab 1: Live Interactive Showcase by project archetype */}
        {selectedTab === 'overview' && (
          <div className="space-y-4">
            {isEcommerce && (
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  theme === 'dark'
                    ? 'bg-[#221D1A] border-[#38312B]'
                    : 'bg-white border-[#E8DFD5]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs text-[#A88B5D]">Apparel Catalog Simulator</span>
                  <span className="text-xs">Bag: {cartCount} items</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className={`p-3 rounded-lg border ${theme === 'dark' ? 'border-[#38312B] bg-[#1A1715]' : 'border-[#EFE8DE] bg-[#FAF7F2]'}`}>
                    <p className="font-semibold text-xs">Cashmere Overcoat</p>
                    <p className="text-xs text-[#8E8074] mt-0.5">$480.00</p>
                    <button
                      onClick={() => setCartCount((c) => c + 1)}
                      className="mt-2.5 w-full py-1 text-[11px] rounded bg-[#C8A97E] text-[#1A1715] font-semibold hover:bg-[#D4B88F]"
                    >
                      + Add to Cart
                    </button>
                  </div>
                  <div className={`p-3 rounded-lg border ${theme === 'dark' ? 'border-[#38312B] bg-[#1A1715]' : 'border-[#EFE8DE] bg-[#FAF7F2]'}`}>
                    <p className="font-semibold text-xs">Linen Pleated Trousers</p>
                    <p className="text-xs text-[#8E8074] mt-0.5">$220.00</p>
                    <button
                      onClick={() => setCartCount((c) => c + 1)}
                      className="mt-2.5 w-full py-1 text-[11px] rounded bg-[#C8A97E] text-[#1A1715] font-semibold hover:bg-[#D4B88F]"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isRestaurant && (
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  theme === 'dark'
                    ? 'bg-[#221D1A] border-[#38312B]'
                    : 'bg-white border-[#E8DFD5]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs text-[#A88B5D]">Table Reservation Portal</span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">4 Tables Available</span>
                </div>
                <div className="flex items-center gap-2">
                  {['18:00', '19:30', '20:45', '21:30'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setBookingTime(time)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-medium border ${
                        bookingTime === time
                          ? 'bg-[#C8A97E] text-[#1A1715] border-[#C8A97E] font-bold'
                          : theme === 'dark'
                          ? 'border-[#38312B] bg-[#1A1715] text-[#D8C7B5]'
                          : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#55473F]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#8E8074]">
                  Selected booking slot: <strong className="text-inherit">{bookingTime}</strong> at Bursa Downtown branch.
                </p>
              </div>
            )}

            {isLibrary && (
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  theme === 'dark'
                    ? 'bg-[#221D1A] border-[#38312B]'
                    : 'bg-white border-[#E8DFD5]'
                }`}
              >
                <span className="font-medium text-xs text-[#A88B5D]">Archival Search Simulator</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 180,000+ catalog titles..."
                  className={`w-full px-3.5 py-2 rounded-lg border text-xs ${
                    theme === 'dark'
                      ? 'bg-[#1A1715] border-[#38312B] text-[#EFE8DE]'
                      : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523]'
                  }`}
                />
                <div className="text-xs space-y-1.5 text-[#8E8074]">
                  <p>• Ibn Battuta: The Complete Travels (Shelf B-14, Available)</p>
                  <p>• Ottoman Architectural Studies (Digital Archival Access)</p>
                </div>
              </div>
            )}

            {!isEcommerce && !isRestaurant && !isLibrary && (
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  theme === 'dark'
                    ? 'bg-[#221D1A] border-[#38312B]'
                    : 'bg-white border-[#E8DFD5]'
                }`}
              >
                <span className="font-medium text-xs text-[#A88B5D]">Architectural Spatial View</span>
                <p className="text-xs leading-relaxed">
                  Interactive multi-breakpoint landing page featuring dynamic hero image reveals, high-resolution gallery viewports, and clean responsive typography.
                </p>
              </div>
            )}

            {/* Performance metrics banner */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border text-center ${
                      theme === 'dark'
                        ? 'bg-[#221D1A] border-[#38312B]'
                        : 'bg-white border-[#E8DFD5]'
                    }`}
                  >
                    <p className="text-[10px] uppercase text-[#8E8074]">{m.label}</p>
                    <p className="text-xs font-bold text-[#A88B5D] dark:text-[#C8A97E] mt-0.5">{m.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Key Capabilities */}
        {selectedTab === 'features' && (
          <div
            className={`p-4 rounded-xl border space-y-3 ${
              theme === 'dark'
                ? 'bg-[#221D1A] border-[#38312B]'
                : 'bg-white border-[#E8DFD5]'
            }`}
          >
            <h5 className="font-semibold text-xs">Architectural Highlights</h5>
            <p className="text-xs leading-relaxed text-[#8E8074]">
              {project.fullDetails.en}
            </p>
            <div className="pt-2">
              <span className="text-xs font-medium block mb-2 text-[#A88B5D]">Tech Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] border ${
                      theme === 'dark'
                        ? 'bg-[#1A1715] border-[#38312B] text-[#D8C7B5]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#55473F]'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Visual Interface Screenshot */}
        {selectedTab === 'preview' && (
          <div className="rounded-xl overflow-hidden border border-[#DDD4C9] dark:border-[#38312B]">
            <img
              src={project.thumbnailUrl}
              alt={project.title.en}
              className="w-full h-56 object-cover"
            />
          </div>
        )}
      </div>

      {/* Mockup sub-footer status */}
      <div
        className={`pt-3 mt-4 border-t flex items-center justify-between text-xs text-[#8E8074] ${
          theme === 'dark' ? 'border-[#2E2824]' : 'border-[#E8DFD5]'
        }`}
      >
        <span>Engineered with Next.js & PostgreSQL</span>
        <span className="text-[#A88B5D] dark:text-[#C8A97E] font-medium">Ready to Explore</span>
      </div>
    </div>
  );
};
