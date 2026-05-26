import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { Award, Users, Trophy } from "lucide-react";

export const AchievementsSection: React.FC = () => {
  const { achievements } = usePortfolio();

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "academic":
        return <Trophy className="text-orange-500" size={18} />;
      case "leadership":
        return <Users className="text-purple-500" size={18} />;
      case "certification":
      default:
        return <Award className="text-pink-500" size={18} />;
    }
  };

  return (
    <section
      id="achievements"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20 border-t border-zinc-900"
    >
      <div className="flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              05 / MILESTONES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-none">
              ACHIEVEMENTS &
              <span className="block sm:inline sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                AWARDS.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm tracking-wide">
            A chronicle of my academic successes, professional certifications, and leadership roles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12 pl-4 sm:pl-8 lg:pl-32 max-w-4xl mx-auto w-full">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] sm:left-[39px] lg:left-[143px] top-4 bottom-4 w-[2px] bg-zinc-800/80" />

          <div className="flex flex-col gap-12">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative flex flex-col lg:flex-row gap-4 lg:gap-12 group"
              >
                {/* Date column (Desktop only) */}
                <div className="hidden lg:block lg:w-28 text-right flex-shrink-0 pt-1.5">
                  <span className="text-xs font-mono-custom font-bold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {item.date}
                  </span>
                </div>

                {/* Timeline Icon Node */}
                <div className="absolute left-[3px] sm:left-[19px] lg:left-[99px] h-9 w-9 rounded-full bg-[#121212] border-2 border-zinc-800 group-hover:border-pink-500 flex items-center justify-center z-10 transition-colors duration-300 shadow-md shadow-black">
                  {getIcon(item.category)}
                </div>

                {/* Achievement Card Content */}
                <div className="ml-10 sm:ml-12 lg:ml-0 flex-grow bg-[#121212]/50 hover:bg-[#121212] border border-zinc-800/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-sm relative overflow-hidden group-hover:border-zinc-700/60">
                  {/* Subtle corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent pointer-events-none" />

                  {/* Mobile-only Date badge */}
                  <span className="inline-block lg:hidden text-[10px] font-mono-custom font-semibold text-zinc-500 uppercase tracking-widest mb-2.5">
                    {item.date}
                  </span>

                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="bg-zinc-950 border border-zinc-800 text-[10px] font-bold px-2 py-0.5 rounded-full text-zinc-500 uppercase tracking-wider font-mono-custom ml-auto sm:ml-0">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
