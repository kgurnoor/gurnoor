import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import { Blog } from "../types/portfolio";

interface NavbarProps {
  currentView: 'home' | 'achievements' | 'blog' | 'projects';
  onViewChange: (view: 'home' | 'achievements' | 'blog' | 'projects') => void;
  onSelectBlog: (blog: Blog | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, onSelectBlog }) => {
  const { profile } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", href: "#home", isAnchor: true },
    { label: "ABOUT", href: "#about", isAnchor: true },
    { label: "SKILLS", href: "#skills", isAnchor: true },
    { label: "EXPERIENCE", href: "#experience", isAnchor: true },
    { label: "ACHIEVEMENTS", href: "achievements", isAnchor: false },
    { label: "BLOG", href: "blog", isAnchor: false },
    { label: "PROJECTS", href: "projects", isAnchor: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentView !== "home") return;

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120; // offset for navbar
      for (const item of navItems) {
        if (!item.isAnchor) continue;
        const targetId = item.href.slice(1);
        const el = document.getElementById(targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(targetId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.isAnchor) {
      if (currentView !== "home") {
        onViewChange("home");
        // Delay scroll slightly to allow React DOM to render and section to exist
        setTimeout(() => {
          const targetId = item.href.slice(1);
          const element = document.getElementById(targetId);
          if (element) {
            const offsetPosition = element.offsetTop - 80; // 80px offset
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 150);
      } else {
        const targetId = item.href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetPosition = element.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    } else {
      if (item.href === "blog") {
        onSelectBlog(null); // Reset detailed blog reader back to list view
      }
      onViewChange(item.href as any);
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  };

  const getIsActive = (item: typeof navItems[0]) => {
    if (item.isAnchor) {
      return currentView === "home" && activeSection === item.href.slice(1);
    }
    return currentView === item.href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C0C0C]/80 backdrop-blur-md border-b border-zinc-800/50 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, { label: "HOME", href: "#home", isAnchor: true })}
          className="group flex items-center gap-2 font-bold tracking-tight text-white cursor-pointer"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="h-full w-full bg-[#0C0C0C] rounded-[6px] flex items-center justify-center">
              <Terminal size={16} className="text-pink-500" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-wider hover:text-zinc-200 transition-colors">
            {profile.shortName.toUpperCase()}
            <span className="text-pink-500 font-extrabold font-mono-custom">.</span>
            <span className="text-xs uppercase font-light tracking-widest text-zinc-400 block sm:inline sm:ml-2 border-l sm:border-l border-zinc-800 sm:pl-2">
              {profile.role.split(" ").slice(0, 2).join(" ")}
            </span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative text-xs tracking-widest font-semibold transition-all duration-300 hover:text-white cursor-pointer ${
                  isActive ? "text-white" : "text-zinc-400"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                )}
              </a>
            );
          })}
          
          {/* Quick CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { label: "CONTACT", href: "#contact", isAnchor: true })}
            className="text-xs tracking-widest font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-purple-500/10 hover:shadow-purple-500/20 active:scale-95 cursor-pointer"
          >
            LET'S CHAT
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none p-1 rounded-md hover:bg-zinc-800/30 transition-all cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] z-40 bg-[#0C0C0C]/95 backdrop-blur-lg border-t border-zinc-900 flex flex-col px-8 py-12 gap-8 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-xl tracking-widest font-bold border-b border-zinc-900 pb-3 transition-colors ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400"
                      : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { label: "CONTACT", href: "#contact", isAnchor: true })}
            className="w-full text-center tracking-widest font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-4 rounded-xl transition-all duration-300 shadow-md shadow-purple-500/10"
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </nav>
  );
};
