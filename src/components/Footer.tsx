import React, { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialLinks } from "./SocialLinks";
import { Copy, Check, Terminal, Heart, PhoneCall } from "lucide-react";

export const Footer: React.FC = () => {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (profile.social.email) {
      navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills & Experience", href: "#skills" },
    { label: "Achievements & Awards", href: "#achievements" },
    { label: "Weekly Blogs", href: "#blog" },
    { label: "Production Projects", href: "#projects" },
  ];

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] pt-24 pb-12 px-6 sm:px-12 border-t border-zinc-900 overflow-hidden">
      
      {/* Background neon accent glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-pink-600/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pb-16 relative z-10">
        
        {/* Column 1: Brand details */}
        <div className="flex flex-col gap-5">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2 font-bold tracking-tight text-white cursor-pointer"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 p-[1.5px]">
              <div className="h-full w-full bg-[#0C0C0C] rounded-[6px] flex items-center justify-center">
                <Terminal size={16} className="text-pink-500" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
              {profile.name.toUpperCase()}
            </span>
          </a>
          
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-zinc-300 font-semibold text-sm tracking-wide">
              {profile.specialization}
            </p>
            <p className="text-zinc-500 font-light text-xs uppercase tracking-widest">
              Based in {profile.location}
            </p>
          </div>

          <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm mt-1">
            Designing resilient modern software systems and highly performant edge network integrations.
          </p>
        </div>

        {/* Column 2: Navigations */}
        <div className="flex flex-col gap-5 md:pl-10">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            NAVIGATE
          </h3>
          <ul className="flex flex-col gap-3.5 mt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-zinc-400 hover:text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Reach Out & Copy Email */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            REACH OUT
          </h3>
          
          {/* Email row with Copy Interaction */}
          {profile.social.email && (
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                Direct Email
              </span>
              <div className="flex items-center gap-2 group/email">
                <a
                  href={`mailto:${profile.social.email}`}
                  className="text-zinc-300 group-hover/email:text-pink-400 font-bold tracking-wide text-sm sm:text-base transition-colors"
                >
                  {profile.social.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer shadow-sm relative group/btn"
                  title="Copy to Clipboard"
                >
                  {copied ? (
                    <Check size={14} className="text-green-500" />
                  ) : (
                    <Copy size={14} className="group-hover/btn:scale-105 transition-transform" />
                  )}
                  {copied && (
                    <span className="absolute -top-8 bg-zinc-950 border border-zinc-800 text-[10px] px-2 py-0.5 rounded shadow text-green-400 font-bold uppercase tracking-widest animate-fade-in font-mono-custom">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Phone call row */}
          {profile.social.phone && (
            <div className="flex flex-col gap-1 mt-1">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                Call / Message
              </span>
              <a
                href={`tel:${profile.social.phone}`}
                className="text-zinc-300 hover:text-pink-400 font-semibold tracking-wide text-sm transition-colors flex items-center gap-2"
              >
                <PhoneCall size={14} className="text-zinc-500" />
                {profile.social.phone}
              </a>
            </div>
          )}

          {/* Small Social Pill row in reach out */}
          <div className="mt-4">
            <SocialLinks socials={profile.social} pillStyle={false} />
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-zinc-500 font-light text-xs font-mono-custom uppercase tracking-wider text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.
        </p>
        <p className="text-zinc-500 font-light text-xs font-mono-custom uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-end">
          BUILT WITH
          <Heart size={10} className="text-pink-500 fill-pink-500" />
          USING REACT, TS & FRAMER MOTION
        </p>
      </div>
    </footer>
  );
};
