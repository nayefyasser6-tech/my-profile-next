import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme, t, navigateTo, adminSession } = usePortfolio();

  return (
    <footer
      id="main-footer"
      className={`w-full border-t mt-16 md:mt-24 transition-colors ${
        theme === 'dark'
          ? 'bg-[#080d19] border-[#1e294b] text-[#94A3B8]'
          : 'bg-[#F5EFEB] border-[#E8DFD5] text-[#6E6156]'
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 mb-12 md:mb-16">
          {/* Identity & Bio - Centered on Mobile */}
          <div className="md:col-span-2 flex flex-col items-center text-center md:items-start md:text-start space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-bold border transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#11182e] border-[#38bdf8]/50 text-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                    : 'bg-[#FAF7F2] border-[#C8A97E]/40 text-[#4A3E38]'
                }`}
              >
                E
              </div>
              <span
                className={`text-xl font-semibold tracking-tight font-serif-display ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                }`}
              >
                Elmutasem
              </span>
            </div>
            <p className="text-sm max-w-lg leading-relaxed text-center md:text-start">
              {t.footer.bio}
            </p>

            {/* Social SVG Links - Centered on Mobile */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              {/* WhatsApp SVG link */}
              <a
                href="https://wa.me/905510947569"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'border-[#1e294b] bg-[#11182e] text-[#38bdf8] hover:border-[#38bdf8] hover:text-[#7dd3fc] hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#52443C] hover:border-[#A88B5D] hover:text-[#2C2523]'
                }`}
                aria-label="WhatsApp Chat"
                title="WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.173.449.741.964 1.2 0 .001.001.001.002.002.663.591 1.222.774 1.395.861.173.086.275.072.376-.044.101-.115.433-.505.549-.679.116-.173.231-.144.39-.086.159.058 1.011.477 1.184.564.173.086.289.13.332.202.043.072.043.419-.101.824z" />
                </svg>
              </a>

              {/* Instagram SVG link */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'border-[#1e294b] bg-[#11182e] text-[#38bdf8] hover:border-[#38bdf8] hover:text-[#7dd3fc] hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                    : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#52443C] hover:border-[#A88B5D] hover:text-[#2C2523]'
                }`}
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Email link */}
              <a
                href="mailto:nayefyaser6@gmail.com"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'border-[#1e294b] bg-[#11182e] text-[#38bdf8] hover:border-[#38bdf8] hover:text-[#7dd3fc]'
                    : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#52443C] hover:border-[#A88B5D] hover:text-[#2C2523]'
                }`}
                aria-label="Email"
                title="nayefyaser6@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Phone call link */}
              <a
                href="tel:+905510947569"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === 'dark'
                    ? 'border-[#1e294b] bg-[#11182e] text-[#38bdf8] hover:border-[#38bdf8] hover:text-[#7dd3fc]'
                    : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#52443C] hover:border-[#A88B5D] hover:text-[#2C2523]'
                }`}
                aria-label="Direct Phone"
                title="+90 551 094 7569"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links - Centered on Mobile */}
          <div className="flex flex-col items-center text-center md:items-start md:text-start space-y-4">
            <h4
              className={`text-xs uppercase tracking-widest font-semibold ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
              }`}
            >
              {t.footer.navTitle}
            </h4>
            <ul className="flex flex-col items-center md:items-start space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:underline transition-colors text-amber-950 dark:text-[#94A3B8] hover:text-amber-900 dark:hover:text-cyan-400"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('projects')}
                  className="hover:underline transition-colors text-amber-950 dark:text-[#94A3B8] hover:text-amber-900 dark:hover:text-cyan-400"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:underline transition-colors text-amber-950 dark:text-[#94A3B8] hover:text-amber-900 dark:hover:text-cyan-400"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:underline transition-colors text-amber-950 dark:text-[#94A3B8] hover:text-amber-900 dark:hover:text-cyan-400"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo(adminSession.isAuthenticated ? 'admin' : 'admin-login')}
                  className="hover:underline transition-colors flex items-center gap-1 text-amber-950 dark:text-cyan-400 hover:text-amber-900 dark:hover:text-cyan-300"
                >
                  <span>{t.nav.admin}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Coordinates - Centered on Mobile */}
          <div className="flex flex-col items-center text-center md:items-start md:text-start space-y-4">
            <h4
              className={`text-xs uppercase tracking-widest font-semibold ${
                theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
              }`}
            >
              {t.footer.coordinatesTitle}
            </h4>
            <div className="flex flex-col items-center md:items-start space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <MapPin className={`w-4 h-4 shrink-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-[#8C6D37]'}`} />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className={`w-4 h-4 shrink-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-[#8C6D37]'}`} />
                <a
                  href="mailto:nayefyaser6@gmail.com"
                  className="hover:underline text-amber-950 dark:text-[#94A3B8] hover:text-amber-900 dark:hover:text-cyan-400"
                >
                  nayefyaser6@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className={`w-4 h-4 shrink-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-[#8C6D37]'}`} />
                <a
                  href="tel:+905510947569"
                  className="hover:underline text-amber-950 dark:text-[#94A3B8] hover:text-amber-900 dark:hover:text-cyan-400"
                >
                  +90 551 094 7569
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered on Mobile */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-start ${
            theme === 'dark'
              ? 'border-[#1e294b] text-[#64748B]'
              : 'border-[#E5DCD0] text-[#7A6C62]'
          }`}
        >
          <div>
            &copy; {new Date().getFullYear()} Elmutasem. {t.footer.rights}
          </div>
          <div className="flex items-center justify-center gap-2 font-medium">
            <span className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'bg-[#81B29A]'}`} />
            <span className={`uppercase tracking-wider text-[11px] ${theme === 'dark' ? 'text-cyan-400' : 'text-amber-950'}`}>
              {t.footer.status}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
