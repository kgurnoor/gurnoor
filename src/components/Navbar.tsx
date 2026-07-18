import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import { Blog } from "../types/portfolio";

interface NavbarProps {
  currentView: 'home' | 'achievements' | 'blog' | 'projects';
  onViewChange: (view: 'home' | 'achievements' | 'blog' | 'projects') => void;
  onSelectBlog: (blog: Blog | null) => void;
  onPendingScroll: (id: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  onSelectBlog,
  onPendingScroll,
  theme,
  toggleTheme,
}) => {
  const { profile } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME",         href: "#home",       isAnchor: true  },
    { label: "PROJECTS",     href: "projects",    isAnchor: false },
    { label: "BLOG",         href: "blog",        isAnchor: false },
    { label: "ACHIEVEMENTS", href: "achievements",isAnchor: false },
    { label: "SKILLS",       href: "#skills",     isAnchor: true  },
    { label: "EXPERIENCE",   href: "#experience", isAnchor: true  },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (currentView !== "home") return;
      const anchorItems = navItems.filter(i => i.isAnchor);
      let current = anchorItems[0].href.slice(1);
      for (const item of anchorItems) {
        const el = document.getElementById(item.href.slice(1));
        if (el && el.getBoundingClientRect().top <= 120) current = item.href.slice(1);
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setIsOpen(false);
    if (item.isAnchor) {
      const targetId = item.href.slice(1);
      if (currentView !== "home") {
        onPendingScroll(targetId);
        onViewChange("home");
      } else {
        scrollToSection(targetId);
      }
    } else {
      if (item.href === "blog") onSelectBlog(null);
      onViewChange(item.href as 'achievements' | 'blog' | 'projects');
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  const getIsActive = (item: typeof navItems[0]) => {
    if (item.isAnchor) return currentView === "home" && activeSection === item.href.slice(1);
    return currentView === item.href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md border-b py-4" : "bg-transparent py-6"
      }`}
      style={scrolled ? {
        backgroundColor: 'var(--bg-nav)',
        borderBottomColor: 'var(--border-strong)',
        boxShadow: '0 1px 24px var(--shadow-sm)',
      } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Left side: theme toggle + brand */}
        <div className="flex items-center gap-3">
          {/* Theme toggle — leftmost element */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex items-center justify-center h-9 w-9 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
              color: 'var(--text-3)',
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Brand */}
          <a
            href="#home"
            onClick={e => handleNavClick(e, { label: "HOME", href: "#home", isAnchor: true })}
            className="group flex items-center gap-2 font-bold tracking-tight cursor-pointer"
            style={{ color: 'var(--text-primary)' }}
          >
            <span
              className="text-xl font-bold tracking-wider transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              {profile.shortName.toUpperCase()}
              <span style={{ color: 'var(--accent)' }} className="font-extrabold font-mono-custom">.</span>
              <span
                className="text-xs uppercase font-light tracking-widest block sm:inline sm:ml-2 sm:pl-2 border-l [border-left-color:var(--border-strong)]"
                style={{ color: 'var(--text-muted)' }}
              >
                {profile.role.split(" ").slice(0, 2).join(" ")}
              </span>
            </span>
          </a>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => {
            const isActive = getIsActive(item);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleNavClick(e, item)}
                className="relative text-xs tracking-widest font-semibold transition-all duration-300 cursor-pointer"
                style={{ color: isActive ? 'var(--text-primary)' : 'var(--text-3)' }}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(to right, var(--accent), var(--accent-2))' }}
                  />
                )}
              </a>
            );
          })}

          {/* Available badge */}
          <div
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-strong)', color: 'var(--text-3)' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={e => handleNavClick(e, { label: "CONTACT", href: "#contact", isAnchor: true })}
            className="text-xs tracking-widest font-bold text-white px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)' }}
          >
            LET'S CHAT
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden focus:outline-none p-1 rounded-md transition-all cursor-pointer"
          style={{ color: 'var(--text-3)' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] z-40 backdrop-blur-lg border-t flex flex-col px-8 py-12 gap-8"
          style={{
            backgroundColor: 'var(--bg-nav)',
            borderTopColor: 'var(--border)',
          }}
        >
          <div className="flex flex-col gap-6">
            {navItems.map(item => {
              const isActive = getIsActive(item);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={e => handleNavClick(e, item)}
                  className="text-xl tracking-widest font-bold border-b pb-3 transition-colors"
                  style={{
                    borderBottomColor: 'var(--border)',
                    color: isActive ? 'var(--accent)' : 'var(--text-3)',
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            onClick={e => handleNavClick(e, { label: "CONTACT", href: "#contact", isAnchor: true })}
            className="w-full text-center tracking-widest font-bold text-white py-4 rounded-xl transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)' }}
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </nav>
  );
};
