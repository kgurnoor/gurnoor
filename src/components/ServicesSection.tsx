import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, LayoutTemplate, CloudSun, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  details: string[];
}

export const ServicesSection: React.FC = () => {
  // TODO: Move services array to src/data/portfolio.json once schema is finalized
  const services: ServiceItem[] = [
    {
      icon: <Database className="text-purple-500" size={20} />,
      title: "Backend Development",
      desc: "Architecting high-performance distributed systems, robust APIs, and scalable database schemas.",
      details: ["Go (Golang) & Node.js microservices", "gRPC, Protocol Buffers & REST APIs", "SQL & NoSQL tuning (Postgres, Redis, MongoDB)", "Distributed caching and event queues"],
    },
    {
      icon: <Cpu className="text-pink-500" size={20} />,
      title: "AI & LLM Integrations",
      desc: "Embedding state-of-the-art intelligence into modern web applications, automating reasoning workflows.",
      details: ["Local LLM runtimes (Ollama, llama.cpp)", "OpenAI, Anthropic & Cohere integration", "Vector embeddings & search (pgvector, Pinecone)", "Retrieval-Augmented Generation (RAG) flows"],
    },
    {
      icon: <LayoutTemplate className="text-orange-500" size={20} />,
      title: "Frontend & UI Engineering",
      desc: "Crafting visually outstanding, highly accessible, and ultra-fluid interfaces with micro-state layers.",
      details: ["React 18, Next.js, and Vite setups", "TypeScript + Tailwind CSS layouts", "Fluid micro-animations (Framer Motion)", "Global state engines (Zustand, Redux Toolkit)"],
    },
    {
      icon: <CloudSun className="text-emerald-500" size={20} />,
      title: "Cloud Infrastructure & DevOps",
      desc: "Managing secure AWS, serverless, and Kubernetes platforms, implementing CI/CD pipelines.",
      details: ["Docker containerization & Kubernetes clusters", "AWS clouds (EKS, RDS, S3, CloudFront)", "Infrastructure as Code (Terraform)", "Automated CI/CD (GitHub Actions, GitLab)"],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-24 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-20 border-t border-zinc-900"
    >
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              03 / SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight silver-heading leading-none">
              AREAS OF
              <span className="block sm:inline sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                EXPERTISE.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm tracking-wide">
            Providing high-end specialized consulting and full-cycle development services for modern fast-growing businesses.
          </p>
        </div>

        {/* Services Rows */}
        <div className="flex flex-col mt-6">
          {services.map((service, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-85px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group border-t border-zinc-800/80 last:border-b border-zinc-800/80 py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden"
              >
                {/* Number Indicator */}
                <div className="lg:w-16 flex-shrink-0">
                  <span className="text-4xl font-extrabold font-mono-custom bg-gradient-to-b from-zinc-700 to-zinc-900 group-hover:from-purple-500 group-hover:to-pink-500 text-transparent bg-clip-text transition-colors duration-300">
                    {formattedIndex}
                  </span>
                </div>

                {/* Left Column: Icon + Service Title */}
                <div className="lg:w-1/3 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Right Column: Description & Subdetails */}
                <div className="lg:w-7/12 flex flex-col gap-4">
                  <p className="text-zinc-300 leading-relaxed font-light text-base">
                    {service.desc}
                  </p>

                  {/* Service Specific Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5 text-sm text-zinc-400 font-light">
                        <CheckCircle2 size={14} className="text-purple-500/80 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
