/**
 * Types & Data Contracts for Elmutasem's Portfolio & CMS
 */

export type Language = 'en' | 'ar' | 'tr';
export type Theme = 'dark' | 'light';
export type DeviceType = 'desktop' | 'mobile';

export type ProjectCategory = 'ALL' | 'FULLSTACK' | 'FRONTEND' | 'BACKEND';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: {
    en: string;
    ar: string;
    tr: string;
  };
  description: {
    en: string;
    ar: string;
    tr: string;
  };
  fullDetails: {
    en: string;
    ar: string;
    tr: string;
  };
  category: 'FULLSTACK' | 'FRONTEND' | 'BACKEND';
  featured: boolean;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
  thumbnailUrl: string;
  defaultDevice: DeviceType;
  metrics?: ProjectMetric[];
  challenges?: {
    en: string;
    ar: string;
    tr: string;
  };
  solutions?: {
    en: string;
    ar: string;
    tr: string;
  };
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: 'UNREAD' | 'READ';
  createdAt: string;
}

export interface AdminUserSession {
  id: string;
  username: string;
  name: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
}

export type RoutePath =
  | 'home'
  | 'about'
  | 'projects'
  | 'project-detail'
  | 'contact'
  | 'admin'
  | 'admin-login';
