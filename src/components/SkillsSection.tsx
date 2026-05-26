import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { Cpu, Cloud, Brain, Wrench, CheckCircle } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { skills } = usePortfolio();

  const getCategoryIcon = (name: string) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes("language")) {
      return <Cpu className="text-purple-500 animate-pulse" size={24} />;
    } else if (lowercaseName.includes("cloud") || lowercaseName.includes("serverless")) {
      return <Cloud className="text-pink-500" size={24} />;
    } else if (lowercaseName.includes("ai") || lowercaseName.includes("machine") || lowercaseName.includes("learning")) {
      return <Brain className="text-orange-500" size={24} />;
    } else {
      return <Wrench className="text-blue-500" size={24} />;
    }
  };

  const getGradient = (name: string) => {
    const lowercaseName = name.toLowerCase();
    if (lowercaseName.includes("language")) {
      return "from-purple-500/10 to-transparent border-purple-500/30 group-hover:border-purple-500/60";
    } else if (lowercaseName.includes("cloud") || lowercaseName.includes("serverless")) {
      return "from-pink-500/10 to-transparent border-pink-500/30 group-hover:border-pink-500/60";
    } else if (lowercaseName.includes("ai") || lowercaseName.includes("machine") || lowercaseName.includes("learning")) {
      return "from-orange-500/10 to-transparent border-orange-500/30 group-hover:border-orange-500/60";
    } else {
      return "from-blue-500/10 to-transparent border-blue-500/30 group-hover:border-blue-500/60";
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20 border-t border-zinc-900"
    >
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              03 / EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-none">
              TECHNICAL
              <span className="block sm:inline sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                SKILLS.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm tracking-wide">
            A comprehensive overview of my technological arsenal across software development, AI, and distributed architectures.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {skills.categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group bg-[#121212] border rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-md relative overflow-hidden transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br ${getGradient(
                category.name
              )}`}
            >
              {/* Card Header with Icon */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Skills Badges Wrapper */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 bg-[#161616]/80 hover:bg-[#202020] border border-zinc-800 hover:border-zinc-700/60 px-3.5 py-2 rounded-xl text-xs font-bold text-zinc-300 hover:text-white transition-all duration-300 font-mono-custom tracking-wider"
                  >
                    <CheckCircle size={10} className="text-zinc-500 group-hover:text-pink-500 transition-colors" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
