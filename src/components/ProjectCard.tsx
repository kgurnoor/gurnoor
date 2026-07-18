import React from "react";
import { ExternalLink, Code, Cpu, Github } from "lucide-react";
import { Project } from "../types/portfolio";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
}) => {
  const formattedIndex = String(index + 1).padStart(2, "0");
  const hasLink = project.link && project.link.trim() !== "";

  // Dynamic sticky offset so each card stacks beautifully below the previous one
  const stickyTopOffset = 120 + index * 32;

  return (
    <div
      className="sticky w-full mb-12 last:mb-0"
      style={{ top: `${stickyTopOffset}px` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 sm:gap-10 shadow-2xl relative group transition-colors duration-300 overflow-hidden"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
      >
        {/* Subtle hover gradient glow on card corners */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

        {/* Card Number Watermark */}
        <div className="absolute top-6 right-8 text-7xl sm:text-8xl font-black font-mono-custom text-zinc-900 select-none pointer-events-none group-hover:text-zinc-800/50 transition-colors duration-300">
          {formattedIndex}
        </div>

        {/* Left Side: Mock Image / Fallback Placeholder */}
        <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-950 flex-shrink-0">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            /* Premium Fallback Placeholder with Title Overlay & Code Icon */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#18181B] to-[#09090B] relative overflow-hidden select-none">
              {/* Circuit board grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
              
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              
              <div className="h-14 w-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 shadow-lg text-pink-500 mb-4 z-10 group-hover:scale-110 transition-transform duration-300">
                <Code size={28} />
              </div>
              <h4 className="text-white font-bold text-center text-lg z-10 max-w-[80%] uppercase tracking-wide group-hover:text-pink-400 transition-colors">
                {project.title}
              </h4>
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mt-2 z-10 flex items-center gap-1.5 font-mono-custom">
                <Cpu size={12} />
                {project.subtitle}
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Information Content */}
        <div className="w-full md:w-7/12 flex flex-col justify-between py-2 relative z-10">
          <div>
            {/* Title & Metadata */}
            <div className="flex flex-col gap-1 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-custom text-zinc-500 font-bold uppercase tracking-widest">
                  {project.year}
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-800" />
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-widest">
                  {project.role}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300 mt-1">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm font-semibold tracking-wide">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-300 font-light leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-950 border border-zinc-800/80 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 tracking-wide hover:border-zinc-700 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Link Buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              {hasLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-300 shadow-md shadow-purple-500/10 active:scale-95 cursor-pointer"
                >
                  LIVE PROJECT
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && project.github.trim() !== "" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-xs tracking-widest uppercase px-5 py-3 rounded-full border transition-all duration-300 active:scale-95 cursor-pointer"
                  style={{ borderColor: 'var(--border-strong)', color: 'var(--text-2)' }}
                >
                  GITHUB CODE
                  <Github size={14} />
                </a>
              )}
              {!hasLink && (!project.github || project.github.trim() === "") && (
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full border"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', backgroundColor: 'var(--bg-card-deep)' }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Cvent Internal · Private Repo
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
