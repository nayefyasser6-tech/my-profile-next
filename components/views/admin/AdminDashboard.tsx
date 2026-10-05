'use client';
import React, { useState } from 'react';
import { usePortfolio } from '../../../context/PortfolioContext';
import { Project, ProjectCategory } from '../../../types';
import {
  Layers,
  Inbox,
  LayoutDashboard,
  Plus,
  Trash2,
  Edit,
  Eye,
  LogOut,
  Search,
  Clock,
  Mail,
  Phone,
  Database,
  Shield,
  X,
  Save,
  Star,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    theme,
    t,
    projects,
    addProject,
    updateProject,
    deleteProject,
    messages,
    markMessageStatus,
    deleteMessage,
    adminSession,
    logoutAdmin,
    navigateTo,
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'inbox'>('overview');
  const [projectSearch, setProjectSearch] = useState('');
  
  // Modal states for Project Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  // Form State for Project Modal
  const [projectForm, setProjectForm] = useState({
    slug: '',
    titleEn: '',
    titleAr: '',
    titleTr: '',
    descEn: '',
    descAr: '',
    descTr: '',
    fullDetailsEn: '',
    category: 'FULLSTACK' as ProjectCategory,
    featured: false,
    liveUrl: '',
    githubUrl: '',
    technologies: '',
    thumbnailUrl: '',
    defaultDevice: 'desktop' as 'desktop' | 'mobile',
  });

  const unreadCount = messages.filter((m) => m.status === 'UNREAD').length;

  const handleOpenNewModal = () => {
    setEditingProjectId(null);
    setProjectForm({
      slug: `web-app-${Date.now().toString().slice(-4)}`,
      titleEn: '',
      titleAr: '',
      titleTr: '',
      descEn: '',
      descAr: '',
      descTr: '',
      fullDetailsEn: '',
      category: 'FULLSTACK',
      featured: false,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/elmutasem',
      technologies: 'Next.js, TypeScript, PostgreSQL, Prisma',
      thumbnailUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      defaultDevice: 'desktop',
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (project: Project) => {
    setEditingProjectId(project.id);
    setProjectForm({
      slug: project.slug,
      titleEn: project.title.en,
      titleAr: project.title.ar,
      titleTr: project.title.tr,
      descEn: project.description.en,
      descAr: project.description.ar,
      descTr: project.description.tr,
      fullDetailsEn: project.fullDetails.en,
      category: project.category,
      featured: project.featured,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl || '',
      technologies: project.technologies.join(', '),
      thumbnailUrl: project.thumbnailUrl,
      defaultDevice: project.defaultDevice,
    });
    setIsModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();

    const techArray = projectForm.technologies
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const projectPayload = {
      slug: projectForm.slug.trim() || `web-app-${Date.now()}`,
      title: {
        en: projectForm.titleEn || 'Untitled Project',
        ar: projectForm.titleAr || projectForm.titleEn || 'مشروع جديد',
        tr: projectForm.titleTr || projectForm.titleEn || 'Yeni Proje',
      },
      description: {
        en: projectForm.descEn || 'Full-stack web application with responsive UI and relational database.',
        ar: projectForm.descAr || projectForm.descEn || 'تطبيق ويب متكامل مع واجهة سريعة الاستجابة.',
        tr: projectForm.descTr || projectForm.descEn || 'Duyarlı kullanıcı arayüzü ile modern web uygulaması.',
      },
      fullDetails: {
        en: projectForm.fullDetailsEn || projectForm.descEn || 'Built with Next.js App Router, Prisma ORM, and PostgreSQL.',
        ar: projectForm.descAr || 'تم بناؤه باستخدام Next.js App Router و Prisma و PostgreSQL.',
        tr: projectForm.descTr || 'Next.js App Router, Prisma ve PostgreSQL ile geliştirildi.',
      },
      category: projectForm.category as 'FULLSTACK' | 'BACKEND' | 'FRONTEND',
      featured: projectForm.featured,
      liveUrl: projectForm.liveUrl || 'https://example.com',
      githubUrl: projectForm.githubUrl || undefined,
      technologies: techArray.length > 0 ? techArray : ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      thumbnailUrl:
        projectForm.thumbnailUrl ||
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      defaultDevice: projectForm.defaultDevice,
    };

    if (editingProjectId) {
      updateProject(editingProjectId, projectPayload);
    } else {
      addProject(projectPayload);
    }

    setIsModalOpen(false);
  };

  const filteredProjects = projects.filter((p) => {
    if (!projectSearch.trim()) return true;
    const q = projectSearch.toLowerCase();
    return (
      p.title.en.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
    );
  });

  return (
    <div id="admin-cms-dashboard" className="w-full min-h-screen py-8">
      {/* Top Admin Header Bar */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12 mb-8">
        <header
          className={`p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            theme === 'dark'
              ? 'bg-[#11182e] border-[#1e294b]'
              : 'bg-white border-[#E5DCD0] shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                theme === 'dark'
                  ? 'bg-[#16203c] border-[#38bdf8]/30 text-[#38bdf8] shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                  : 'bg-[#C8A97E]/15 border-[#C8A97E]/30 text-[#8C6D37]'
              }`}
            >
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1
                className={`text-xl font-serif-display font-bold ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                }`}
              >
                {t.admin.dashboardTitle}
              </h1>
              <p className="text-xs text-[#8E8074] dark:text-[#94A3B8]">
                Signed in as: <span className="font-semibold text-inherit">{adminSession.email}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${
                theme === 'dark'
                  ? 'border-[#1e294b] text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8]'
                  : 'border-[#DDD4C9] text-[#55473F] hover:border-[#8C6D37]'
              }`}
            >
              Public Site
            </button>
            <button
              id="admin-logout-btn"
              onClick={logoutAdmin}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t.admin.logoutBtn}</span>
            </button>
          </div>
        </header>
      </div>

      {/* Main Admin Layout with Sidebar */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-4">
            <div
              className={`p-4 rounded-2xl border space-y-1.5 ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <button
                id="admin-tab-overview"
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeTab === 'overview'
                    ? theme === 'dark'
                      ? 'bg-[#38bdf8] text-[#0a0f1d] shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'bg-[#C8A97E] text-[#1A1715]'
                    : 'text-[#8E8074] dark:text-[#94A3B8] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>{t.admin.tabOverview}</span>
                </span>
              </button>

              <button
                id="admin-tab-projects"
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeTab === 'projects'
                    ? theme === 'dark'
                      ? 'bg-[#38bdf8] text-[#0a0f1d] shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'bg-[#C8A97E] text-[#1A1715]'
                    : 'text-[#8E8074] dark:text-[#94A3B8] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4" />
                  <span>{t.admin.tabProjects}</span>
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] ${
                    activeTab === 'projects'
                      ? theme === 'dark'
                        ? 'bg-[#0a0f1d]/30 text-[#0a0f1d]'
                        : 'bg-[#1A1715]/20 text-[#1A1715]'
                      : 'bg-black/5 dark:bg-white/5'
                  }`}
                >
                  {projects.length}
                </span>
              </button>

              <button
                id="admin-tab-inbox"
                onClick={() => setActiveTab('inbox')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeTab === 'inbox'
                    ? theme === 'dark'
                      ? 'bg-[#38bdf8] text-[#0a0f1d] shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                      : 'bg-[#C8A97E] text-[#1A1715]'
                    : 'text-[#8E8074] dark:text-[#94A3B8] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Inbox className="w-4 h-4" />
                  <span>{t.admin.tabInbox}</span>
                </span>
                {unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-bold">
                    {unreadCount} NEW
                  </span>
                )}
              </button>
            </div>

            {/* Neon Postgres Status */}
            <div
              className={`p-6 rounded-2xl border space-y-2.5 text-xs ${
                theme === 'dark'
                  ? 'bg-[#11182e] border-[#1e294b]'
                  : 'bg-white border-[#E5DCD0] shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-[#8E8074] dark:text-[#94A3B8]">
                <span className="flex items-center gap-2">
                  <Database className={`w-4 h-4 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                  <span className="font-semibold text-inherit">Neon Postgres</span>
                </span>
                <span className="text-[#81B29A] flex items-center gap-1.5 font-semibold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#81B29A] animate-pulse" />
                  <span>Connected</span>
                </span>
              </div>
              <p className="text-[11px] text-[#8E8074] dark:text-[#94A3B8] leading-relaxed">
                Prisma ORM connected to Neon Serverless PostgreSQL database.
              </p>
            </div>
          </aside>

          {/* Main Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* VIEW 1: OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border space-y-3 ${
                      theme === 'dark'
                        ? 'bg-[#11182e] border-[#1e294b]'
                        : 'bg-white border-[#E5DCD0] shadow-sm'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                      {t.admin.totalProjectsStat}
                    </span>
                    <div
                      className={`text-4xl font-serif-display font-bold ${
                        theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                      }`}
                    >
                      {projects.length}
                    </div>
                    <p className="text-xs text-[#8E8074] dark:text-[#94A3B8]">
                      {projects.filter((p) => p.featured).length} featured on homepage
                    </p>
                  </div>

                  <div
                    className={`p-6 sm:p-8 rounded-2xl border space-y-3 ${
                      theme === 'dark'
                        ? 'bg-[#11182e] border-[#1e294b]'
                        : 'bg-white border-[#E5DCD0] shadow-sm'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                      {t.admin.totalMessagesStat}
                    </span>
                    <div
                      className={`text-4xl font-serif-display font-bold ${
                        theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                      }`}
                    >
                      {messages.length}
                    </div>
                    <p className="text-xs text-[#8E8074] dark:text-[#94A3B8]">Stored in inquiries collection</p>
                  </div>

                  <div
                    className={`p-6 sm:p-8 rounded-2xl border space-y-3 ${
                      theme === 'dark'
                        ? 'bg-[#11182e] border-[#1e294b]'
                        : 'bg-white border-[#E5DCD0] shadow-sm'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                      {t.admin.unreadMessagesStat}
                    </span>
                    <div className="text-4xl font-serif-display font-bold text-[#81B29A]">
                      {unreadCount}
                    </div>
                    <p className="text-xs text-[#8E8074] dark:text-[#94A3B8]">Awaiting review or follow-up</p>
                  </div>
                </div>

                {/* Operations */}
                <div
                  className={`p-8 rounded-2xl border space-y-5 ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b]'
                      : 'bg-white border-[#E5DCD0] shadow-sm'
                  }`}
                >
                  <h2
                    className={`text-lg font-serif-display font-bold ${
                      theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                    }`}
                  >
                    Quick Actions
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleOpenNewModal}
                      className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all shadow-sm ${
                        theme === 'dark'
                          ? 'bg-[#38bdf8] text-[#0a0f1d] hover:bg-[#7dd3fc] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                          : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      <span>{t.admin.newProjectBtn}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('inbox')}
                      className={`px-6 py-3 rounded-full border text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all ${
                        theme === 'dark'
                          ? 'border-[#1e294b] bg-[#0a0f1d] text-[#F1F5F9] hover:border-[#38bdf8]'
                          : 'border-[#DDD4C9] bg-[#FAF7F2] text-[#55473F] hover:border-[#8C6D37]'
                      }`}
                    >
                      <Inbox className={`w-4 h-4 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                      <span>Review Inbox ({unreadCount} unread)</span>
                    </button>
                  </div>
                </div>

                {/* Recent Inquiries */}
                <div
                  className={`p-8 rounded-2xl border space-y-5 ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b]'
                      : 'bg-white border-[#E5DCD0] shadow-sm'
                  }`}
                >
                  <h3
                    className={`text-lg font-serif-display font-bold ${
                      theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                    }`}
                  >
                    Recent Client Inquiries
                  </h3>
                  {messages.length === 0 ? (
                    <p className="text-xs text-[#8E8074] dark:text-[#94A3B8]">{t.admin.emptyInbox}</p>
                  ) : (
                    <div className="space-y-3 text-xs">
                      {messages.slice(0, 3).map((m) => (
                        <div
                          key={m.id}
                          className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                            theme === 'dark'
                              ? 'bg-[#0a0f1d] border-[#1e294b]'
                              : 'bg-[#FAF7F2] border-[#E8DFD5]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-inherit">{m.name}</span>
                              <span className="text-[#8E8074] dark:text-[#94A3B8] text-[11px]">&lt;{m.email}&gt;</span>
                              {m.status === 'UNREAD' && (
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  theme === 'dark' ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-[#81B29A]/20 text-[#54826B]'
                                }`}>
                                  NEW
                                </span>
                              )}
                            </div>
                            <p className="text-[#8E8074] dark:text-[#94A3B8] text-xs mt-1 truncate max-w-lg">
                              {m.subject || m.message}
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveTab('inbox')}
                            className="text-xs font-semibold text-[#8C6D37] dark:text-[#38bdf8] hover:underline shrink-0"
                          >
                            Open &rarr;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* VIEW 2: MANAGE PROJECTS (FULL CRUD) */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 text-[#8E8074] dark:text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={projectSearch}
                      onChange={(e) => setProjectSearch(e.target.value)}
                      placeholder={t.admin.searchProjectsPlaceholder}
                      className={`w-full pl-11 pr-4 py-2.5 rounded-full text-xs border focus:outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-[#11182e] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                          : 'bg-white border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                      }`}
                    />
                  </div>

                  <button
                    id="admin-add-project-btn"
                    onClick={handleOpenNewModal}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-sm shrink-0 ${
                      theme === 'dark'
                        ? 'bg-[#38bdf8] text-[#0a0f1d] hover:bg-[#7dd3fc] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                        : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t.admin.newProjectBtn}</span>
                  </button>
                </div>

                {/* Projects Table */}
                <div
                  className={`rounded-2xl border overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b]'
                      : 'bg-white border-[#E5DCD0] shadow-sm'
                  }`}
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead
                        className={`border-b text-[11px] uppercase tracking-wider ${
                          theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b] text-[#94A3B8]'
                            : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#7A6C62]'
                        }`}
                      >
                        <tr>
                          <th className="py-4 px-6">{t.admin.tableTitle}</th>
                          <th className="py-4 px-6">{t.admin.tableCategory}</th>
                          <th className="py-4 px-6">{t.admin.tableStatus}</th>
                          <th className="py-4 px-6 text-end">{t.admin.tableActions}</th>
                        </tr>
                      </thead>
                      <tbody
                        className={`divide-y ${
                          theme === 'dark' ? 'divide-[#1e294b]' : 'divide-[#EFE8DE]'
                        }`}
                      >
                        {filteredProjects.map((project) => (
                          <tr
                            key={project.id}
                            className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                          >
                            <td className="py-4 px-6">
                              <div
                                className={`font-semibold text-sm ${
                                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                                }`}
                              >
                                {project.title.en}
                              </div>
                              <div className="text-[11px] text-[#8C6D37] dark:text-[#38bdf8] mt-0.5">
                                /{project.slug}
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${
                                  theme === 'dark'
                                    ? 'bg-[#0a0f1d] border-[#1e294b] text-[#94A3B8]'
                                    : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#55473F]'
                                }`}
                              >
                                {project.category}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              {project.featured ? (
                                <span className={`inline-flex items-center gap-1 font-medium text-[11px] ${
                                  theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#8C6D37]'
                                }`}>
                                  <Star className={`w-3.5 h-3.5 ${theme === 'dark' ? 'fill-[#38bdf8] text-[#38bdf8]' : 'fill-[#C8A97E] text-[#C8A97E]'}`} />
                                  <span>Featured</span>
                                </span>
                              ) : (
                                <span className="text-[#8E8074] dark:text-[#94A3B8] text-[11px]">Standard</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-end">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => navigateTo('project-detail', project.slug)}
                                  title="View Public Mockup"
                                  className={`p-2 rounded-full border transition-colors ${
                                    theme === 'dark'
                                      ? 'border-[#1e294b] text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8]'
                                      : 'border-[#DDD4C9] text-[#55473F] hover:border-[#8C6D37]'
                                  }`}
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleOpenEditModal(project)}
                                  title="Edit Project"
                                  className={`p-2 rounded-full border transition-colors ${
                                    theme === 'dark'
                                      ? 'border-[#1e294b] text-[#94A3B8] hover:border-[#38bdf8] hover:text-[#38bdf8]'
                                      : 'border-[#DDD4C9] text-[#55473F] hover:border-[#8C6D37]'
                                  }`}
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm(t.admin.deleteConfirm)) {
                                      deleteProject(project.id);
                                    }
                                  }}
                                  title="Delete Project"
                                  className="p-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: INBOX MESSAGES */}
            {activeTab === 'inbox' && (
              <div className="space-y-6">
                <div
                  className={`p-6 sm:p-8 rounded-2xl border space-y-2 ${
                    theme === 'dark'
                      ? 'bg-[#11182e] border-[#1e294b]'
                      : 'bg-white border-[#E5DCD0] shadow-sm'
                  }`}
                >
                  <h2
                    className={`text-xl font-serif-display font-bold ${
                      theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                    }`}
                  >
                    {t.admin.inboxTitle}
                  </h2>
                  <p className="text-xs text-[#8E8074] dark:text-[#94A3B8] leading-relaxed">
                    {t.admin.inboxSubtitle}
                  </p>
                </div>

                {messages.length === 0 ? (
                  <div
                    className={`p-16 text-center rounded-2xl border text-xs text-[#8E8074] dark:text-[#94A3B8] ${
                      theme === 'dark'
                        ? 'bg-[#11182e] border-[#1e294b]'
                        : 'bg-white border-[#E5DCD0]'
                    }`}
                  >
                    {t.admin.emptyInbox}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        id={`inbox-msg-${msg.id}`}
                        className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                          msg.status === 'UNREAD'
                            ? theme === 'dark'
                              ? 'bg-[#11182e] border-[#38bdf8]/50 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                              : 'bg-white border-[#8C6D37]/50 shadow-sm'
                            : theme === 'dark'
                            ? 'bg-[#0a0f1d] border-[#1e294b]'
                            : 'bg-[#FAF7F2] border-[#E8DFD5]'
                        }`}
                      >
                        <div
                          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-4 ${
                            theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`text-base font-semibold ${
                                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                                }`}
                              >
                                {msg.name}
                              </span>
                              {msg.status === 'UNREAD' && (
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                  theme === 'dark' ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-[#81B29A]/20 text-[#54826B]'
                                }`}>
                                  UNREAD
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-[#8E8074] dark:text-[#94A3B8] mt-1.5 flex flex-wrap items-center gap-4">
                              <span className="flex items-center gap-1.5">
                                <Mail className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                                <a
                                  href={`mailto:${msg.email}`}
                                  className="text-[#8C6D37] dark:text-[#38bdf8] hover:underline"
                                >
                                  {msg.email}
                                </a>
                              </span>
                              {msg.phone && (
                                <span className="flex items-center gap-1.5">
                                  <Phone className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-[#38bdf8]' : 'text-[#C8A97E]'}`} />
                                  <a href={`tel:${msg.phone}`} className="hover:underline">
                                    {msg.phone}
                                  </a>
                                </span>
                              )}
                              <span className="flex items-center gap-1 text-[#8E8074] dark:text-[#94A3B8]">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{new Date(msg.createdAt).toLocaleString()}</span>
                              </span>
                            </div>
                          </div>

                          {/* Message Actions */}
                          <div className="flex items-center gap-2">
                            {msg.status === 'UNREAD' ? (
                              <button
                                onClick={() => markMessageStatus(msg.id, 'READ')}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                  theme === 'dark'
                                    ? 'border-[#1e294b] bg-[#0a0f1d] text-[#F1F5F9] hover:border-[#38bdf8]'
                                    : 'border-[#DDD4C9] bg-white text-[#55473F]'
                                }`}
                              >
                                {t.admin.markAsRead}
                              </button>
                            ) : (
                              <button
                                onClick={() => markMessageStatus(msg.id, 'UNREAD')}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                  theme === 'dark'
                                    ? 'border-[#1e294b] bg-[#0a0f1d] text-[#94A3B8] hover:text-[#F1F5F9]'
                                    : 'border-[#DDD4C9] bg-white text-[#8E8074]'
                                }`}
                              >
                                {t.admin.markAsUnread}
                              </button>
                            )}

                            <a
                              href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(
                                msg.subject || 'Inquiry to Elmutasem'
                              )}`}
                              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                                theme === 'dark'
                                  ? 'bg-[#38bdf8] text-[#0a0f1d] hover:bg-[#7dd3fc]'
                                  : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                              }`}
                            >
                              {t.admin.replyEmail}
                            </a>

                            <button
                              onClick={() => deleteMessage(msg.id)}
                              className="p-1.5 rounded-full text-rose-400 hover:bg-rose-500/10 transition-colors"
                              title={t.admin.deleteMsg}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {msg.subject && (
                          <div
                            className={`text-xs font-semibold mb-2 ${
                              theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                            }`}
                          >
                            Subject: {msg.subject}
                          </div>
                        )}

                        <p
                          className={`text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                            theme === 'dark' ? 'text-[#94A3B8]' : 'text-[#61544B]'
                          }`}
                        >
                          {msg.message}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>

      {/* PROJECT CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div
            className={`w-full max-w-2xl my-8 rounded-2xl border p-8 text-xs space-y-6 shadow-2xl ${
              theme === 'dark'
                ? 'bg-[#11182e] border-[#1e294b]'
                : 'bg-white border-[#E5DCD0]'
            }`}
          >
            <div
              className={`flex items-center justify-between border-b pb-4 ${
                theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
              }`}
            >
              <h2
                className={`text-xl font-serif-display font-bold ${
                  theme === 'dark' ? 'text-[#F1F5F9]' : 'text-[#2C2523]'
                }`}
              >
                {editingProjectId ? t.admin.modalEditTitle : t.admin.modalNewTitle}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#8E8074] hover:text-[#2C2523] dark:hover:text-[#38bdf8] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    {t.admin.fieldTitleEn} *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectForm.titleEn}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, titleEn: e.target.value })
                    }
                    placeholder="e.g. Modern E-Commerce Store"
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    Slug Identifier *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectForm.slug}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, slug: e.target.value })
                    }
                    placeholder="e.g. modern-store"
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                    }`}
                  />
                </div>
              </div>

              {/* Multi-language Title Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    {t.admin.fieldTitleAr} (Arabic)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={projectForm.titleAr}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, titleAr: e.target.value })
                    }
                    placeholder="عنوان المشروع بالعربية"
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    {t.admin.fieldTitleTr} (Turkish)
                  </label>
                  <input
                    type="text"
                    value={projectForm.titleTr}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, titleTr: e.target.value })
                    }
                    placeholder="Türkçe Proje Başlığı"
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                    }`}
                  />
                </div>
              </div>

              {/* Short Description */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                  {t.admin.fieldDescEn} *
                </label>
                <textarea
                  required
                  rows={2}
                  value={projectForm.descEn}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, descEn: e.target.value })
                  }
                  placeholder="Overview of web application functionality and user flow..."
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                      : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                  }`}
                />
              </div>

              {/* Category & Device */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    {t.admin.fieldCategory}
                  </label>
                  <select
                    value={projectForm.category}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        category: e.target.value as ProjectCategory,
                      })
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523]'
                    }`}
                  >
                    <option value="FULLSTACK">FULLSTACK</option>
                    <option value="FRONTEND">FRONTEND</option>
                    <option value="BACKEND">BACKEND</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    Default Device
                  </label>
                  <select
                    value={projectForm.defaultDevice}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        defaultDevice: e.target.value as 'desktop' | 'mobile',
                      })
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523]'
                    }`}
                  >
                    <option value="desktop">Desktop Frame</option>
                    <option value="mobile">Mobile Frame</option>
                  </select>
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    <input
                      type="checkbox"
                      checked={projectForm.featured}
                      onChange={(e) =>
                        setProjectForm({ ...projectForm, featured: e.target.checked })
                      }
                      className={`w-4 h-4 rounded ${theme === 'dark' ? 'accent-[#38bdf8]' : 'accent-[#C8A97E]'}`}
                    />
                    
                    <span>{(t.admin as Record<string, string>).fieldFeatured}</span>
                    
                  </label>
                </div>
              </div>

              {/* Live URL & GitHub URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    {t.admin.fieldLiveUrl} *
                  </label>
                  <input
                    type="url"
                    required
                    value={projectForm.liveUrl}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, liveUrl: e.target.value })
                    }
                    placeholder="https://..."
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                    
                    {(t.admin as Record<string, string>).fieldGithub}
                  </label>
                  <input
                    type="url"
                    value={projectForm.githubUrl}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, githubUrl: e.target.value })
                    }
                    placeholder="https://github.com/..."
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                        : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                    }`}
                  />
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                  {(t.admin as Record<string, string>).fieldGithub}
                </label>
                <input
                  type="text"
                  value={projectForm.technologies}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, technologies: e.target.value })
                  }
                  placeholder="React 19, Next.js, TypeScript, PostgreSQL, Prisma"
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                      : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                  }`}
                />
              </div>

              {/* Thumbnail URL */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#8E8074] dark:text-[#94A3B8]">
                  Thumbnail Image URL
                </label>
                <input
                  type="url"
                  value={projectForm.thumbnailUrl}
                  onChange={(e) =>
                    setProjectForm({ ...projectForm, thumbnailUrl: e.target.value })
                  }
                  placeholder="https://images.unsplash.com/..."
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-[#0a0f1d] border-[#1e294b] text-[#F1F5F9] placeholder:text-[#64748B] focus:border-[#38bdf8] focus:shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                      : 'bg-[#FAF7F2] border-[#DDD4C9] text-[#2C2523] placeholder:text-[#9E8E81] focus:border-[#8C6D37]'
                  }`}
                />
              </div>

              {/* Modal Buttons */}
              <div
                className={`pt-6 border-t flex items-center justify-end gap-3 ${
                  theme === 'dark' ? 'border-[#1e294b]' : 'border-[#EFE8DE]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={`px-5 py-2.5 rounded-full border text-xs font-semibold ${
                    theme === 'dark'
                      ? 'border-[#1e294b] text-[#94A3B8] hover:text-[#F1F5F9]'
                      : 'border-[#DDD4C9] text-[#7A6C62] hover:text-[#2C2523]'
                  }`}
                >
                  {t.admin.cancelBtn}
                </button>
                <button
                  type="submit"
                  className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-sm ${
                    theme === 'dark'
                      ? 'bg-[#38bdf8] text-[#0a0f1d] hover:bg-[#7dd3fc] hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                      : 'bg-[#C8A97E] text-[#1A1715] hover:bg-[#D4B88F]'
                  }`}
                >
                  <Save className="w-4 h-4" />
                  <span>{t.admin.saveBtn}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
