import React from "react";
import { Github, Instagram, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Social } from "../types/portfolio";

interface SocialLinksProps {
  socials: Social;
  className?: string;
  pillStyle?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  socials,
  className = "",
  pillStyle = true,
}) => {
  // Filter out empty or undefined social links
  const activeSocials = Object.entries(socials).filter(
    ([_, value]) => value && value.trim() !== ""
  );

  if (activeSocials.length === 0) return null;

  const getIcon = (key: string) => {
    switch (key) {
      case "github":
        return <Github size={18} className="transition-transform duration-300 group-hover:scale-110" />;
      case "instagram":
        return <Instagram size={18} className="transition-transform duration-300 group-hover:scale-110" />;
      case "linkedin":
        return <Linkedin size={18} className="transition-transform duration-300 group-hover:scale-110" />;
      case "email":
        return <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />;
      case "phone":
        return <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />;
      case "website":
        return <Globe size={18} className="transition-transform duration-300 group-hover:scale-110" />;
      default:
        return null;
    }
  };

  const getHref = (key: string, value: string) => {
    if (key === "email") return `mailto:${value}`;
    if (key === "phone") return `tel:${value}`;
    return value;
  };

  const getLabel = (key: string) => {
    switch (key) {
      case "email":
        return "Email Me";
      case "phone":
        return "Call Me";
      default:
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {activeSocials.map(([key, value]) => {
        const href = getHref(key, value);
        const icon = getIcon(key);
        const label = getLabel(key);

        if (pillStyle) {
          return (
            <a
              key={key}
              href={href}
              target={key !== "email" && key !== "phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center gap-2 bg-[#121212] hover:bg-[#1A1A1A] border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-purple-500/10 cursor-pointer"
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          );
        } else {
          return (
            <a
              key={key}
              href={href}
              target={key !== "email" && key !== "phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#121212] hover:bg-[#1A1A1A] border border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-purple-500/10 cursor-pointer"
            >
              {icon}
            </a>
          );
        }
      })}
    </div>
  );
};
