'use client';
import React from 'react';
import { PortfolioProvider, usePortfolio } from '../context/PortfolioContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ToastContainer } from '../components/Toast';
import { HomePage } from '../components/views/HomePage';
import { AboutPage } from '../components/views/AboutPage';
import { ProjectsPage } from '../components/views/ProjectsPage';
import { ProjectDetailsPage } from '../components/views/ProjectDetailsPage';
import { ContactPage } from '../components/views/ContactPage';
import { AdminLoginPage } from '../components/views/admin/AdminLoginPage';
import { AdminDashboard } from '../components/views/admin/AdminDashboard';
const AppContent: React.FC = () => {
  const { currentRoute, adminSession } = usePortfolio();

  return (
    <div className="min-h-screen flex flex-col justify-between transition-colors duration-300">
      {/* Sticky Glassmorphism Navbar */}
      <Navbar />

      {/* Main Routed Content */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && <HomePage />}
        {currentRoute === 'about' && <AboutPage />}
        {currentRoute === 'projects' && <ProjectsPage />}
        {currentRoute === 'project-detail' && <ProjectDetailsPage />}
        {currentRoute === 'contact' && <ContactPage />}
        {currentRoute === 'admin-login' && <AdminLoginPage />}
        {currentRoute === 'admin' &&
          (adminSession.isAuthenticated ? <AdminDashboard /> : <AdminLoginPage />)}
      </main>

      {/* Professional Footer (hidden only during full admin dashboard focus if preferred, but sleek everywhere) */}
      {currentRoute !== 'admin' && <Footer />}

      {/* Toast Feedback */}
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}
