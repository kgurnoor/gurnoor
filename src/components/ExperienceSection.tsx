import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const { experience } = usePortfolio();

  return (
    <section
      id="experience" // Career timeline section
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20 border-t border-zinc-900"
    >
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              02 / EXPERIENCE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-none">
              CAREER
              <span className="block sm:inline sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                TIMELINE.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm tracking-wide">
            A track record of engineering scalable backend structures and highly optimized responsive frontend systems.
          </p>
        </div>

        {/* Experience Rows */}
        <div className="flex flex-col mt-6">
          {experience.map((item, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, "0");
            
            return (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group border-t border-zinc-800/80 last:border-b border-zinc-800/80 py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden"
              >
                {/* Number Indicator */}
                <div className="lg:w-16 flex-shrink-0">
                  <span className="text-4xl font-extrabold font-mono-custom bg-gradient-to-b from-zinc-700 to-zinc-900 group-hover:from-purple-500 group-hover:to-pink-500 text-transparent bg-clip-text transition-colors duration-300">
                    {formattedIndex}
                  </span>
                </div>

                {/* Left Side: Role, Company & Pill */}
                <div className="lg:w-1/3 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                      {item.role}
                    </h3>
                  </div>
                  
                  <div className="text-zinc-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                    <span className="text-zinc-200">{item.company}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                    <span className="flex items-center gap-1 text-zinc-500">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>

                  {/* Monospace Period Pill */}
                  <div className="mt-2 flex">
                    <span className="inline-flex items-center gap-2 bg-[#121212] border border-zinc-800/60 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-zinc-400 font-mono-custom uppercase group-hover:border-zinc-700 transition-colors">
                      <Calendar size={12} className="text-zinc-500" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Right Side: Summary & Highlights */}
                <div className="lg:w-7/12 flex flex-col gap-4">
                  <p className="text-zinc-300 leading-relaxed font-light text-base">
                    {item.summary}
                  </p>

                  {/* Highlights (First 3) */}
                  <ul className="flex flex-col gap-2.5 mt-2">
                    {item.highlights.slice(0, 3).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                        <ArrowRight size={14} className="mt-1 flex-shrink-0 text-pink-500/80" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
