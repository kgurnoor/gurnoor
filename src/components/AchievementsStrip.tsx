import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Users } from "lucide-react";

const highlights = [
  {
    icon: <Star size={18} style={{ color: 'var(--accent)' }} />,
    label: "Amazon ML Summer School",
    sub: "Competitive nationwide selection",
  },
  {
    icon: <Award size={18} style={{ color: 'var(--accent)' }} />,
    label: "Deep Learning Specialization",
    sub: "Coursera certified · Andrew Ng",
  },
  {
    icon: <Trophy size={18} style={{ color: 'var(--accent)' }} />,
    label: "Google GenAI Study Jams",
    sub: "15 verified Credly badges",
  },
  {
    icon: <Users size={18} style={{ color: 'var(--accent)' }} />,
    label: "PEC ACM Board Member",
    sub: "Technical events & workshops",
  },
];

export const AchievementsStrip: React.FC = () => (
  <section className="w-full py-16 px-6 sm:px-12 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border p-8"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <p
        className="text-xs uppercase font-extrabold tracking-widest mb-6"
        style={{ color: 'var(--text-muted)' }}
      >
        Certifications & Recognition
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((h, idx) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex items-start gap-3 p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--bg-card-deep)', borderColor: 'var(--border)' }}
          >
            <div
              className="h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: 'var(--accent-glow)' }}
            >
              {h.icon}
            </div>
            <div>
              <p className="text-sm font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                {h.label}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {h.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
