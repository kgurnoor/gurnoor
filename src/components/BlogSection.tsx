import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { Calendar, ArrowUpRight, BookOpen } from "lucide-react";
import { Blog } from "../types/portfolio";

interface BlogSectionProps {
  onSelectBlog: (post: Blog) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectBlog }) => {
  const { blogs } = usePortfolio();

  return (
    <section
      id="blog"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20 border-t border-zinc-900 animate-fadeIn"
    >
      <div className="flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              06 / WRITING & LOGS
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-none">
              BLOGS.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm tracking-wide">
            Documenting my coding journey, advanced machine learning research logs, and software project reviews.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {blogs.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-[#121212] hover:bg-[#161616] border border-zinc-800/80 hover:border-zinc-700/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-md relative group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

              <div>
                {/* Date & Icon */}
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono-custom mb-4 font-semibold uppercase tracking-wider">
                  <Calendar size={13} />
                  <span>{post.date}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                  <span className="text-[10px] text-zinc-500 flex items-center gap-1 font-mono-custom uppercase tracking-wider font-semibold">
                    <BookOpen size={10} />
                    Logs
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300 line-clamp-2 uppercase tracking-wide leading-snug mb-3">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-zinc-400 font-light text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Read button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectBlog(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                >
                  READ ARTICLE
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
