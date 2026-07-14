import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialLinks } from "./SocialLinks";
import { ArrowDown, Code2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20 px-6 sm:px-12"
    >
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-purple-600/10 via-pink-600/10 to-orange-500/10 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[250px] h-[250px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none -z-10" />

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
          <div className="relative w-full h-full rounded-full bg-[#121212] p-1 border border-zinc-800/80 overflow-hidden flex items-center justify-center">
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
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 border border-zinc-900 text-white p-2 rounded-full shadow-lg shadow-black/40">
            <Code2 size={16} />
          </div>
        </motion.div>

        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#121212]/80 border border-zinc-800/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-400 tracking-wider mb-6 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          OPEN TO WORK · SEEKING FRESHER SDE ROLES & INTERNSHIPS
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
          className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-medium max-w-2xl px-2 leading-snug mb-8"
        >
          {profile.tagline}
        </motion.p>

        {/* Social Link Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-12 w-full"
        >
          <SocialLinks socials={profile.social} className="justify-center" />
        </motion.div>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Explore Projects
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center border border-zinc-800 hover:border-zinc-700 bg-transparent hover:bg-zinc-900/30 text-zinc-300 hover:text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-zinc-500 font-light tracking-widest hidden sm:flex"
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-3 border border-zinc-500 rounded-full flex justify-center p-[2px]"
        >
          <span className="w-0.5 h-0.5 rounded-full bg-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};
