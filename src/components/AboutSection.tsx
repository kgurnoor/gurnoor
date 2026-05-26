import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { Award, MapPin, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { profile } = usePortfolio();

  const stats = [
    {
      icon: <Award className="text-purple-500" size={24} />,
      label: "Experience",
      value: `${profile.yearsOfExperience}+ Years`,
      desc: "Architecting web systems",
    },
    {
      icon: <Compass className="text-pink-500" size={24} />,
      label: "Specialization",
      value: "Full-Stack SDE",
      desc: "Distributed Systems & UI/UX",
    },
    {
      icon: <MapPin className="text-orange-500" size={24} />,
      label: "Location",
      value: profile.location,
      desc: "Hybrid / Remote open",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Sticky-ish Headline & Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            01 / INSIGHT
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-tight">
            ABOUT MY
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              MISSION.
            </span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full" />
          
          {/* Decorative design elements */}
          <div className="hidden lg:block mt-8 p-6 bg-[#121212]/30 border border-zinc-800/30 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            <p className="text-xs text-zinc-500 font-mono-custom uppercase tracking-wider mb-2">
              Current Focus
            </p>
            <p className="text-sm text-zinc-300 font-medium">
              Developing high-throughput microservices, local AI workflows, and micro-frontend state layers.
            </p>
          </div>
        </div>

        {/* Right Side: Bio text & stats grid */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Bio text block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-light"
          >
            {/* Standard overflow-wrap and word-break applied via Tailwind break-normal and explicit inline styles */}
            <p
              className="break-normal overflow-wrap-normal word-break-normal text-justify"
              style={{
                overflowWrap: "normal",
                wordBreak: "normal",
                whiteSpace: "normal",
              }}
            >
              {profile.bio}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#121212] hover:bg-[#161616] border border-zinc-800/80 hover:border-zinc-700/60 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 shadow-sm hover:shadow-purple-500/5"
              >
                <div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  {stat.icon}
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                    {stat.label}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {stat.desc}
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
