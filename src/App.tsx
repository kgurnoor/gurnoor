import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
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

  const handleSelectBlog = (blog: Blog | null) => {
    setSelectedBlog(blog);
    if (blog) {
      setCurrentView('blog');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#E0E0E0] selection:bg-purple-600/30 selection:text-white">
      {/* Dynamic Sticky Navbar */}
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        onSelectBlog={setSelectedBlog}
      />

      {/* Main Page Layout Conditionally Rendered */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <HeroSection />

          {/* Main content body */}
          <main className="relative z-10 w-full">
            {/* Section 01: About */}
            <AboutSection />

            {/* Section 02: Skills */}
            <SkillsSection />

            {/* Section 03: Career Timeline (Experience) */}
            <ExperienceSection />
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

      {/* Footer (and Contact details) */}
      <Footer />
    </div>
  );
};
