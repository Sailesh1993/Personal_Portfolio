// src/App.tsx
import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/Skills/skills';
import ProjectList from './components/projects/ProjectList';
import TimelineSection from './components/layout/TimelineSection';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

import { usePortfolioData } from './hooks/usePortfolioData';

const App: React.FC = () => {
  const { profile, navigation, education, experience, projects, isLoading } = usePortfolioData();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950">
      {/* 1. Navigation Shell Layer */}
      <Navbar navItems={navigation} profile={profile} />
      
      {/* 2. Core Dynamic Feature Modules */}
      <main>
        <Hero profile={profile} />
        
        <Skills />
        
        <ProjectList projects={projects} />
        
        {/* Unified Side-by-Side CV Timelines */}
        <TimelineSection education={education} experience={experience} />
        
        <Contact />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
};

export default App;