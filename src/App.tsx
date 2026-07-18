import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { AchievementsStrip } from "./components/AchievementsStrip";
import { ContactSection } from "./components/ContactSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { BlogSection } from "./components/BlogSection";
import { BlogReader } from "./components/BlogReader";
import { Footer } from "./components/Footer";
import { Blog } from "./types/portfolio";

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'achievements' | 'blog' | 'projects'>('home');
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';
  });

  // Sync theme to <html data-theme> so CSS vars cascade everywhere
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  // After switching back to home view, scroll to the pending section target.
  useEffect(() => {
    if (currentView === 'home' && pendingScroll) {
      requestAnimationFrame(() => {
        const el = document.getElementById(pendingScroll);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
        setPendingScroll(null);
      });
    }
  }, [currentView, pendingScroll]);

  const handleSelectBlog = (blog: Blog | null) => {
    setSelectedBlog(blog);
    if (blog) setCurrentView('blog');
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)' }}>
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        onSelectBlog={setSelectedBlog}
        onPendingScroll={setPendingScroll}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {currentView === 'home' && (
        <>
          <HeroSection />
          <main className="relative z-10 w-full">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <AchievementsStrip />
            <ContactSection />
          </main>
        </>
      )}

      {currentView === 'achievements' && (
        <main className="relative z-10 w-full pt-24 min-h-[70vh]">
          <AchievementsSection />
        </main>
      )}

      {currentView === 'blog' && (
        <main className="relative z-10 w-full pt-20 min-h-[70vh]">
          {selectedBlog ? (
            <BlogReader post={selectedBlog} onBack={() => setSelectedBlog(null)} />
          ) : (
            <BlogSection onSelectBlog={handleSelectBlog} />
          )}
        </main>
      )}

      {currentView === 'projects' && (
        <main className="relative z-10 w-full pt-24 min-h-[70vh]">
          <ProjectsSection />
        </main>
      )}

      <Footer />
    </div>
  );
};
