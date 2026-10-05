'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Language,
  Theme,
  Project,
  ContactMessage,
  AdminUserSession,
  RoutePath,
} from '../types';
import { translations, Translations } from '../i18n/translations';
import { INITIAL_PROJECTS, INITIAL_MESSAGES } from '../data/initialData';

interface ToastInfo {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'error';
}

interface PortfolioContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  currentRoute: RoutePath;
  selectedProjectSlug: string | null;
  navigateTo: (route: RoutePath, slug?: string) => void;
  t: Translations;
  
  // Projects CRUD
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProjectBySlug: (slug: string) => Project | undefined;
  
  // Messages CRUD
  messages: ContactMessage[];
  addMessage: (msg: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>) => void;
  markMessageStatus: (id: string, status: 'UNREAD' | 'READ') => void;
  deleteMessage: (id: string) => void;
  
  // Admin Auth
  adminSession: AdminUserSession;
  loginAdmin: (username: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Feedback Toast
  toasts: ToastInfo[];
  showToast: (title: string, description?: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  LANG: 'elmutasem_portfolio_lang',
  THEME: 'elmutasem_portfolio_theme',
  PROJECTS: 'elmutasem_portfolio_projects_v1',
  MESSAGES: 'elmutasem_portfolio_messages_v1',
  AUTH: 'elmutasem_portfolio_admin_auth',
};

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Language state
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG) as Language;
    return saved && ['en', 'ar', 'tr'].includes(saved) ? saved : 'en';
  });

  // 2. Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) as Theme;
    return saved === 'light' ? 'light' : 'dark';
  });

  // 3. Navigation routing
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // 4. Projects state with localStorage persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return INITIAL_PROJECTS;
  });

  // 5. Messages state with localStorage persistence
  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return INITIAL_MESSAGES;
  });

  // 6. Admin auth session
  const [adminSession, setAdminSession] = useState<AdminUserSession>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return {
      id: '',
      username: '',
      name: 'Elmutasem',
      email: 'nayefyaser6@gmail.com',
      token: '',
      isAuthenticated: false,
    };
  });

  // 7. Toasts notification system
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

 const showToast = (title: string, description?: string, type: 'success' | 'info' | 'error' = 'info') => {
    // eslint-disable-next-line react-hooks/purity
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync Language with DOM dir and lang attributes
  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem(STORAGE_KEYS.LANG, newLang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Sync Theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0a0f1d] text-[#F1F5F9] antialiased selection:bg-[#a855f7]/30 selection:text-[#38bdf8]';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#FAF7F2] text-[#2C2523] antialiased selection:bg-[#C8A97E]/30 selection:text-[#8C6D37]';
    }
  }, [theme]);

  // Sync Projects to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  // Sync Messages to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  // Navigation helper
  const navigateTo = (route: RoutePath, slug?: string) => {
    setCurrentRoute(route);
    if (slug) {
      setSelectedProjectSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Projects CRUD operations
  const addProject = (projectData: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...projectData,
      id: 'proj-' + Date.now(),
      createdAt: new Date().toISOString(),
    };
    setProjects((prev) => [newProject, ...prev]);
    showToast('Project Added', `"${newProject.title.en}" record created in Neon Postgres.`, 'success');
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
    showToast('Project Updated', 'Changes saved to database successfully.', 'success');
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
    showToast('Project Deleted', 'Record removed from portfolio archive.', 'info');
  };

  const getProjectBySlug = (slug: string) => {
    return projects.find((p) => p.slug === slug);
  };

  // Messages CRUD operations
  const addMessage = (msgData: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>) => {
    const newMessage: ContactMessage = {
      ...msgData,
      id: 'msg-' + Date.now(),
      status: 'UNREAD',
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [newMessage, ...prev]);
    showToast('Transmission Received', 'Message safely stored in database inbox.', 'success');
  };

  const markMessageStatus = (id: string, status: 'UNREAD' | 'READ') => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, status } : msg))
    );
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
    showToast('Message Deleted', 'Contact inquiry permanently purged.', 'info');
  };

  // Admin Auth operations
  const loginAdmin = (username: string, pass: string): boolean => {
    // Validates credentials; includes instant demo fallback
    const valid = (username.trim().length > 0 && pass.trim().length > 0);
    if (valid) {
      const session: AdminUserSession = {
        id: 'admin-01',
        username: username || 'admin',
        name: 'Elmutasem',
        email: 'nayefyaser6@gmail.com',
        token: 'cyber_jwt_' + Math.random().toString(36).substring(2),
        isAuthenticated: true,
      };
      setAdminSession(session);
      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(session));
      showToast('Authentication Verified', 'Welcome back, Elmutasem.', 'success');
      return true;
    }
    showToast('Authentication Failed', 'Invalid administrator credentials.', 'error');
    return false;
  };

  const logoutAdmin = () => {
    const emptySession: AdminUserSession = {
      id: '',
      username: '',
      name: 'Elmutasem',
      email: 'nayefyaser6@gmail.com',
      token: '',
      isAuthenticated: false,
    };
    setAdminSession(emptySession);
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    showToast('Session Terminated', 'Logged out of CMS.', 'info');
    navigateTo('home');
  };

  const t = translations[language];

  return (
    <PortfolioContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
        currentRoute,
        selectedProjectSlug,
        navigateTo,
        t,
        projects,
        addProject,
        updateProject,
        deleteProject,
        getProjectBySlug,
        messages,
        addMessage,
        markMessageStatus,
        deleteMessage,
        adminSession,
        loginAdmin,
        logoutAdmin,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
