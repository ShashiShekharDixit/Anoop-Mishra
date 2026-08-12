import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data";
import ProjectVisual from "../components/ProjectVisual";
import ProjectModal from "../components/ProjectModal";
import PageBanner from "../components/PageBanner";

const FILTERS: { key: Project["category"] | "all"; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "institutional", label: "Institutional" },
  { key: "commercial", label: "Commercial" },
  { key: "residential", label: "Residential" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Project["category"] | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageBanner
        eyebrow="Selected work"
        title="Projects that speak for the craft"
        badges={["50+ projects", "Institutional · Commercial · Residential"]}
        wide
      />

      <section className="pt-10 pb-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mt-0 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-body border transition-colors ${
                filter === f.key
                  ? "bg-brass text-iron border-brass font-semibold"
                  : "border-mullion text-fog hover:text-chalk hover:border-pane"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <motion.button
              layout
              key={project.slug}
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="glass-panel rounded-2xl overflow-hidden text-left group"
            >
              <div className="relative">
                <ProjectVisual
                  src={`/projects/${project.images[0]}`}
                  alt={project.name}
                  hue={project.hue}
                  icon={project.icon}
                  className="w-full h-52"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full bg-iron/70 text-brass-light border border-mullion capitalize">
                  {project.flagship ? `Featured · ${project.index}` : project.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base text-chalk font-medium leading-snug">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-pane-light shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-fog text-xs leading-relaxed mt-2 line-clamp-2">{project.subtitle}</p>
                <div className="flex items-center gap-3 mt-3 font-mono text-[11px] text-fog">
                  <span>{project.date}</span>
                  {project.location && (
                    <>
                      <span>&middot;</span>
                      <span>{project.location}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-fog text-sm mt-12 text-center">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </section>
    </>
  );
}
