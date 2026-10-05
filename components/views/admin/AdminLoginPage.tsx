'use client';
import React, { useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import {
  Lock,
  User,
  KeyRound,
  ArrowRight,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const { theme, t, loginAdmin, navigateTo } = usePortfolio();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please provide admin credentials.');
      return;
    }
    const success = loginAdmin(username, password);
    if (success) {
      navigateTo('admin');
    } else {
      setError('Invalid credentials.');
    }
  };

  const handleFillDemo = () => {
    setUsername('admin@elmutasem.dev');
    setPassword('cyber-2026-auth');
    setError('');
  };

  return (
    <div
      id="admin-login-page"
      className="min-h-[80vh] flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-md space-y-8">
        
        {/* Card Header */}
        <div className="text-center space-y-3">
          <div
            className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center border transition-all ${
              theme === 'dark'
                ? 'bg-[#16203c] border-[#38bdf8]/40 text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                : 'bg-[#C8A97E]/15 border-[#C8A97E]/40 text-[#8C6D37]'
            }`}
          >
            <Lock className="w-6 h-6" />
          </div>
          <h1
            className={`text-3xl font-serif-display font-bold tracking-tight ${
              theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
            }`}
          >
            {t.admin.loginTitle}
          </h1>
          <p
            className={`text-xs max-w-xs mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#8E8074]'
            }`}
          >
            {t.admin.loginSubtitle}
          </p>
        </div>

        {/* Login Form Box */}
        <div
          className={`p-8 sm:p-10 rounded-2xl border ${
            theme === 'dark'
              ? 'bg-[#11182e] border-[#1e294b] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
              : 'bg-white border-[#E5DCD0] shadow-sm'
          }`}
        >
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5 text-xs">
            {/* Username */}
            <div className="space-y-2">
              <label
                htmlFor="admin-username"
                className="block uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
              >
                {t.admin.usernameLabel}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8E8074] dark:text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="admin-username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin@elmutasem.dev"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="admin-password"
                className="block uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
              >
                {t.admin.passwordLabel}
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-[#8E8074] dark:text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="admin-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border focus:outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                  }`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="admin-login-submit"
              type="submit"
              className={`w-full py-3.5 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm ${
                theme === 'dark'
                  ? 'bg-[#38bdf8] text-[#0a0f1d] hover:bg-[#7dd3fc] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                  : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
              }`}
            >
              <span>{t.admin.loginBtn}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </form>

          {/* Demo Access Helper */}
          <div
            className={`mt-8 pt-6 border-t space-y-3 ${
              theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
            }`}
          >
            <p className="text-[11px] text-[#8E8074] dark:text-[#94A3B8] text-center">
              {t.admin.demoNotice}
            </p>
            <button
              type="button"
              id="admin-fill-demo-creds"
              onClick={handleFillDemo}
              className={`w-full py-2.5 rounded-full border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                theme === 'dark'
                  ? 'border-[#1e294b] bg-[#0a0f1d] text-[#38bdf8] hover:border-[#38bdf8]'
                  : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#55473F] hover:border-[#8C6D37]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
              <span>{t.admin.useDemoCreds}</span>
            </button>
          </div>
        </div>

        {/* Back to Site */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('home')}
            className={`text-xs uppercase tracking-wider transition-colors hover:underline ${
              theme === 'dark' ? 'text-[#94A3B8] hover:text-[#38bdf8]' : 'text-[#8E8074] hover:text-[#2C2523]'
            }`}
          >
            &larr; Return to Public Portfolio
          </button>
        </div>

      </div>
    </div>
  );
};
