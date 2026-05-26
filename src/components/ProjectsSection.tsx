import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection: React.FC = () => {
  const { projects } = usePortfolio();

  // Sort projects so that highlighted: true items come first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return 0;
  });

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20 border-t border-zinc-900"
    >
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              04 / SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-none">
              PRODUCTION
              <span className="block sm:inline sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                PROJECTS.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm tracking-wide">
            A handpicked selection of production systems, developer toolkits, and open-source contributions.
          </p>
        </div>

        {/* Sticky Projects Container */}
        <div className="relative flex flex-col mt-8 pb-12">
          {sortedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
