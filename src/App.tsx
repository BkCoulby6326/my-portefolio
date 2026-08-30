/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = (isDark: boolean) => {
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation Bar */}
      <Navbar 
        darkMode={darkMode}
        setDarkMode={handleToggleTheme}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Modal (Interactive View & Print to PDF) */}
      <CVModal 
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
}
