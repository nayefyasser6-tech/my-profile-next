'use client';
import React, { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Language, RoutePath } from '../types';
import {
  Sun,
  Moon,
  Globe,
  ChevronDown,
  Menu,
  X,
  Lock,
  Check,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    theme,
    toggleTheme,
    currentRoute,
    navigateTo,
    t,
    adminSession,
  } = usePortfolio();

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { route: RoutePath; label: string }[] = [
    { route: 'home', label: t.nav.home },
    { route: 'projects', label: t.nav.projects },
    { route: 'about', label: t.nav.about },
    { route: 'contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ar', label: 'العربية', native: 'العربية' },
    { code: 'tr', label: 'Türkçe', native: 'Türkçe' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-colors duration-300 border-b ${
        theme === 'dark'
          ? 'bg-[#0a0f1d]/92 border-[#1e294b] backdrop-blur-md'
          : 'bg-[#FAF7F2]/92 border-[#E9E1D7] backdrop-blur-md'
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Monogram */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3.5 text-left group focus:outline-none transition-transform duration-300 hover:scale-105"
          id="navbar-brand-button"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-bold border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#11182e] border-[#38bdf8]/40 text-[#38bdf8] group-hover:border-[#a855f7] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-[#F2ECE4] border-[#C8A97E]/40 text-[#4A3E38] group-hover:border-[#A88B5D]'
            }`}
          >
            E
          </div>
          <div>
            <span
              className={`text-lg font-semibold tracking-tight font-serif-display block ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
              }`}
            >
              Elmutasem
            </span>
            <p
              className={`text-xs tracking-wider uppercase font-medium ${
                theme === 'dark' ? 'text-cyan-400' : 'text-amber-950'
              }`}
            >
              Web Developer
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                id={`nav-link-${item.route}`}
                onClick={() => navigateTo(item.route)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-cyan-400 bg-[#16203c] border border-cyan-400/40 font-semibold shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'text-amber-950 bg-[#EFE8DE] border border-[#C8A97E]/40 font-semibold'
                    : theme === 'dark'
                    ? 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#11182e]'
                    : 'text-amber-950/80 hover:text-amber-950 hover:bg-[#F2ECE4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Admin CMS Access Link */}
          <button
            id="nav-link-admin"
            onClick={() => navigateTo(adminSession.isAuthenticated ? 'admin' : 'admin-login')}
            title="Admin CMS"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 ml-2 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${
              currentRoute === 'admin' || currentRoute === 'admin-login'
                ? theme === 'dark'
                  ? 'border-[#a855f7] text-[#c084fc] bg-[#1e1735] shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  : 'border-[#A88B5D] text-amber-950 bg-[#EFE8DE]'
                : theme === 'dark'
                ? 'border-[#1e294b] text-[#94A3B8] hover:text-[#c084fc] hover:border-[#a855f7]/40'
                : 'border-[#DDD4C9] text-amber-950 hover:text-amber-900 hover:border-[#A88B5D]/50'
            }`}
          >
            <Lock className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-amber-950'}`} />
            <span>CMS</span>
            {adminSession.isAuthenticated && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            )}
          </button>
        </nav>

        {/* Desktop Controls: Theme Toggle and then Language Switcher AT THE FAR EDGE */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button (Dark / Light) */}
          <button
            id="theme-mode-toggle"
            onClick={toggleTheme}
            aria-label={t.nav.themeToggle}
            className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-[#11182e] border-[#1e294b] text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                : 'bg-[#F2ECE4] border-[#E2D8CC] text-[#705E51] hover:border-[#C8A97E]'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#38bdf8]" />
            ) : (
              <Moon className="w-4 h-4 text-[#705E51]" />
            )}
          </button>

          {/* Language Switcher Dropdown - Situated at the FAR EDGE */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="language-switcher-dropdown"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              aria-label={t.nav.langSelect}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium uppercase tracking-wider rounded-full border transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b] text-[#F1F5F9] hover:border-[#a855f7] hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                  : 'bg-[#F2ECE4] border-[#E2D8CC] text-[#4A3E38] hover:border-[#C8A97E]'
              }`}
            >
              <Globe className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
              <span>{currentLangObj.code.toUpperCase()}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform text-[#9E8E81] ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div
                id="language-dropdown-menu"
                className={`absolute end-0 mt-2 w-44 rounded-xl shadow-xl border py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#1e294b] divide-y divide-[#1e294b] text-[#F1F5F9]'
                    : 'bg-[#FAF7F2] border-[#E5DCD0] divide-y divide-[#EDE5DA]'
                }`}
              >
                {languages.map((l) => {
                  const isSelected = l.code === language;
                  return (
                    <button
                      key={l.code}
                      id={`lang-option-${l.code}`}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs text-start transition-colors ${
                        isSelected
                          ? theme === 'dark'
                            ? 'bg-[#1e294b] text-[#38bdf8] font-semibold'
                            : 'bg-[#EFE8DE] text-[#2C2523] font-semibold'
                          : theme === 'dark'
                          ? 'text-[#94A3B8] hover:bg-[#16203c] hover:text-[#F1F5F9]'
                          : 'text-[#61544B] hover:bg-[#F2ECE4] hover:text-[#2C2523]'
                      }`}
                    >
                      <span>{l.native}</span>
                      {isSelected && (
                        <Check className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Header Controls: Strictly ONLY ONE Theme Toggle + Hamburger Menu */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            id="mobile-theme-mode-toggle"
            onClick={toggleTheme}
            aria-label={t.nav.themeToggle}
            className={`p-2 rounded-full border transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-[#11182e] border-[#1e294b] text-[#38bdf8]'
                : 'bg-[#F2ECE4] border-[#E2D8CC] text-[#705E51]'
            }`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#38bdf8]" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className={`p-2 rounded-full border transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'bg-[#11182e] border-[#1e294b] text-[#F1F5F9]'
                : 'bg-[#F2ECE4] border-[#E2D8CC] text-[#2C2523]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden border-b px-6 pt-4 pb-6 space-y-4 ${
            theme === 'dark'
              ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9]'
              : 'bg-[#FAF7F2] border-[#E9E1D7] text-[#2C2523]'
          }`}
        >
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  navigateTo(item.route);
                  setMobileMenuOpen(false);
                }}
                className={`text-start px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentRoute === item.route
                    ? theme === 'dark'
                      ? 'text-cyan-400 bg-[#16203c] border border-cyan-400/30 font-semibold'
                      : 'text-amber-950 bg-[#EFE8DE] font-semibold'
                    : theme === 'dark'
                    ? 'text-[#94A3B8] hover:text-[#F1F5F9]'
                    : 'text-amber-950/80'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                navigateTo(adminSession.isAuthenticated ? 'admin' : 'admin-login');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 text-start px-4 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                theme === 'dark'
                  ? 'border-[#1e294b] text-[#c084fc] bg-[#11182e]'
                  : 'border-[#E2D8CC] text-amber-950 bg-[#F2ECE4]'
              }`}
            >
              <Lock className={`w-4 h-4 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-amber-950'}`} />
              <span>{t.nav.admin}</span>
            </button>
          </div>

          {/* Mobile Language Selection (No redundant theme toggle here) */}
          <div className="pt-3 border-t border-[#1e294b] dark:border-[#1e294b]">
            <p className={`text-xs uppercase tracking-wider mb-2.5 font-medium ${theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#9E8E81]'}`}>
              {t.nav.langSelect}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLanguage(l.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 text-xs rounded-lg border text-center transition-all duration-200 ${
                    language === l.code
                      ? theme === 'dark'
                        ? 'border-[#38bdf8] bg-[#16203c] text-[#38bdf8] font-bold shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                        : 'border-[#A88B5D] bg-[#EFE8DE] text-[#2C2523] font-bold'
                      : theme === 'dark'
                      ? 'border-[#1e294b] bg-[#11182e] text-[#94A3B8]'
                      : 'border-[#E2D8CC] bg-[#F2ECE4] text-[#61544B]'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
