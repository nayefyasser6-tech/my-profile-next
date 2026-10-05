import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  MessageCircle,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { theme, t, addMessage, showToast } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+905510947569');
    setCopiedPhone(true);
    showToast('Copied', 'Phone number copied to clipboard', 'info');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nayefyaser6@gmail.com');
    setCopiedEmail(true);
    showToast('Copied', 'Email address copied to clipboard', 'info');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Validation Error', 'Please complete the required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      addMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject || undefined,
        message: formData.message,
      });

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 500);
  };

  return (
    <div id="contact-page" className="w-full py-16 md:py-24">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Centered Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="inline-block mb-8 text-sm uppercase tracking-widest font-semibold text-amber-950 dark:text-cyan-400"
          >
            {t.contact.badge}
          </span>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-display tracking-tight mb-4 ${
              theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#201A18]'
            }`}
          >
            {t.contact.title}
          </h1>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
            }`}
          >
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Grid: Direct Coordinates vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div
              id="direct-contact-card"
              className={`p-8 sm:p-10 rounded-2xl border space-y-8 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <div>
                <h2
                  className={`text-2xl font-serif-display font-bold ${
                    theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                  }`}
                >
                  {t.contact.directTitle}
                </h2>
                <p className="text-xs text-[#8E8074] dark:text-[#94A3B8] mt-1.5 leading-relaxed">
                  {t.contact.directSubtitle}
                </p>
              </div>

              {/* Hardcoded Channels */}
              <div className="space-y-4 text-xs">
                
                {/* 1. Phone / WhatsApp Card */}
                <div
                  className={`p-5 rounded-xl border space-y-2.5 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[#8E8074] dark:text-[#94A3B8]">
                    <span className="flex items-center gap-2">
                      <Phone className={`w-4 h-4 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                      <span>{t.contact.phoneLabelDirect}</span>
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="hover:text-[#2C2523] dark:hover:text-[#38bdf8] p-1 flex items-center gap-1 transition-colors"
                      title={t.contact.copyTooltip}
                    >
                      {copiedPhone ? (
                        <Check className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-stone-700'}`} />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="text-base font-semibold text-inherit">
                    +90 551 094 7569
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="tel:+905510947569"
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'border-[#1e294b] bg-[#11182e] text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8]'
                          : 'border-[#DDD4C9] bg-white text-[#55473F] hover:border-[#8C6D37]'
                      }`}
                    >
                      {t.contact.callBtn}
                    </a>
                    <a
                      href="https://wa.me/905510947569"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-[#10b981]/15 border-[#10b981]/40 text-[#34d399] hover:bg-[#10b981]/25'
                          : 'bg-[#81B29A]/15 border-[#81B29A]/40 text-[#54826B] hover:bg-[#81B29A]/25'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t.contact.whatsappBtn}</span>
                    </a>
                  </div>
                </div>

                {/* 2. Email Card */}
                <div
                  className={`p-5 rounded-xl border space-y-2.5 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[#8E8074] dark:text-[#94A3B8]">
                    <span className="flex items-center gap-2">
                      <Mail className={`w-4 h-4 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                      <span>{t.contact.emailLabelDirect}</span>
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="hover:text-[#2C2523] dark:hover:text-[#38bdf8] p-1 flex items-center gap-1 transition-colors"
                      title={t.contact.copyTooltip}
                    >
                      {copiedEmail ? (
                        <Check className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-stone-700'}`} />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-inherit break-all">
                    nayefyaser6@gmail.com
                  </div>
                  <div className="pt-1">
                    <a
                      href="mailto:nayefyaser6@gmail.com"
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${
                        theme === 'dark'
                          ? 'border-[#1e294b] bg-[#11182e] text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8]'
                          : 'border-[#DDD4C9] bg-white text-[#55473F] hover:border-[#8C6D37]'
                      }`}
                    >
                      Compose Email
                    </a>
                  </div>
                </div>

                {/* 3. Location Card */}
                <div
                  className={`p-5 rounded-xl border space-y-1.5 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E8DFD5]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#8E8074] dark:text-[#94A3B8]">
                    <MapPin className={`w-4 h-4 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                    <span>{t.contact.locationLabelDirect}</span>
                  </div>
                  <div className="text-base font-semibold text-inherit">
                    Bursa, Türkiye
                  </div>
                  <p className="text-[11px] text-[#8E8074] dark:text-[#64748B]">
                    GMT+3 (Available for international client collaboration)
                  </p>
                </div>

              </div>

              {/* Status Note */}
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  theme === 'dark'
                    ? 'border-[#1e294b] bg-[#0a0f1d]'
                    : 'border-[#E8DFD5] bg-[#FAF7F2]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]' : 'bg-[#81B29A]'}`} />
                <span className="text-xs text-[#8E8074] dark:text-[#94A3B8]">
                  Inquiries receive an initial technical reply within 24 business hours.
                </span>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <h2
                className={`text-2xl font-serif-display font-bold mb-8 flex items-center gap-3 ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                }`}
              >
                <MessageSquare className={`w-5 h-5 ${theme === 'dark' ? 'text-[#c084fc]' : 'text-[#C8A97E]'}`} />
                <span>{t.contact.formTitle}</span>
              </h2>

              {submitted ? (
                <div
                  id="contact-form-success"
                  className={`p-8 rounded-2xl border text-center space-y-4 ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b]'
                      : 'bg-[#FAF7F2] border-[#E5DCD0]'
                  }`}
                >
                  <CheckCircle2 className={`w-10 h-10 mx-auto ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#81B29A]'}`} />
                  <h3
                    className={`text-xl font-serif-display font-bold ${
                      theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                    }`}
                  >
                    {t.contact.sentSuccess}
                  </h3>
                  <p className="text-xs text-[#8E8074] dark:text-[#94A3B8]">
                    Your inquiry has been stored securely in Elmutasems CMS inbox.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                        : 'bg-[#C8A97E] text-[#1A1715]'
                    }`}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-transmission-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="input-name"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
                      >
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50'
                            : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] focus:border-[#8C6D37]'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="input-email"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
                      >
                        {t.contact.emailLabel} *
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50'
                            : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] focus:border-[#8C6D37]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="input-phone"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
                      >
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+90 5XX XXX XXXX"
                        className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50'
                            : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] focus:border-[#8C6D37]'
                        }`}
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="input-subject"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
                      >
                        {t.contact.subjectLabel}
                      </label>
                      <input
                        id="input-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. E-Commerce Development"
                        className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none transition-all ${
                          theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50'
                            : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] focus:border-[#8C6D37]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message Body */}
                  <div className="space-y-2">
                    <label
                      htmlFor="input-message"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]"
                    >
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      id="input-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your web development requirements, desired timeline, and goals..."
                      className={`w-full px-4 py-3 rounded-xl text-xs border focus:outline-none transition-all resize-y ${
                        theme === 'dark'
                          ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50'
                            : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] focus:border-[#8C6D37]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-button"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-[#9333ea] to-[#0284c7] text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(2,132,199,0.5)]'
                        : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.contact.sending : t.contact.sendBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
