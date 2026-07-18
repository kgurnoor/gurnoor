import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialLinks } from "./SocialLinks";
import { ArrowDown, Code2, Download } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20 px-6 sm:px-12"
    >
      {/* Background Pastel Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-pink-400/20 via-fuchsia-400/15 to-rose-300/10 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full bg-pink-300/15 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[250px] h-[250px] rounded-full bg-fuchsia-200/20 blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10">
        
        {/* Avatar Container with glowing border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 mb-8 group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-full bg-[#FCE4F1] p-1 border border-pink-200/80 overflow-hidden flex items-center justify-center">
            {profile.avatarImage ? (
              <img
                src={profile.avatarImage}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: profile.avatarSvg }}
              />
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 border border-pink-100 text-white p-2 rounded-full shadow-lg shadow-pink-300/40">
            <Code2 size={16} />
          </div>
        </motion.div>

        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-6 backdrop-blur-sm"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-strong)', color: 'var(--text-3)' }}
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          OPEN TO WORK · SEEKING FRESHER SDE & AI ENGINEER ROLES
        </motion.div>

        {/* Large Chrome Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-none hero-heading mb-6 drop-shadow-sm select-none"
        >
          Hi, I'm {profile.shortName}
        </motion.h1>

        {/* Specialization & Role tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-medium max-w-2xl px-2 leading-snug mb-8"
          style={{ color: 'var(--text-2)' }}
        >
          {profile.tagline}
        </motion.p>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10 w-full"
        >
          {[
            { value: "9.07", label: "GPA" },
            { value: "4+", label: "Projects" },
            { value: "28+", label: "Technologies" },
            { value: "6 mo", label: "@ Cvent" },
          ].map((s, i, arr) => (
            <React.Fragment key={s.label}>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-3xl font-black tracking-tight" style={{ color: 'var(--accent)' }}>
                  {s.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                  {s.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <span className="hidden sm:block self-center w-px h-8 rounded-full" style={{ backgroundColor: 'var(--border-strong)' }} />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Social Link Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-10 w-full"
        >
          <SocialLinks socials={profile.social} className="justify-center" />
        </motion.div>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-pink-400/20 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Explore Projects
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center border font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer hover:bg-[var(--bg-card-deep)]"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-2)' }}
          >
            Get In Touch
          </a>
          <a
            href="/GurnoorKaur_Latest_June26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer hover:bg-[var(--bg-card-deep)]"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-2)' }}
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-light tracking-widest hidden sm:flex"
        style={{ color: 'var(--text-muted)' }}
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-3 border rounded-full flex justify-center p-[2px]"
          style={{ borderColor: 'var(--text-muted)' }}
        >
          <span className="w-0.5 h-0.5 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};
