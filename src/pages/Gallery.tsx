import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../data";
import PageBanner from "../components/PageBanner";
import VideoBanner from "../components/VideoBanner";
import TiltCard from "../components/TiltCard";
import ProjectVisual from "../components/ProjectVisual";
import ProjectModal from "../components/ProjectModal";

export default function Gallery() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <PageBanner
        eyebrow="Gallery"
        title="The work, up close"
        description="A closer look at finished glasswork and construction — click any piece to see the full set."
        badges={["Photos & video", "Updated per project"]}
        wide
      />

      <section className="pt-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <VideoBanner
            src="/media/glass-showcase.mp4"
            poster="/media/glass-showcase.jpg"
            className="w-full h-[320px] md:h-[420px] rounded-3xl"
          />
          <p className="text-center text-xs text-fog font-mono mt-3">
            Drop a video at <code className="text-pane-light">public/media/glass-showcase.mp4</code> to
            replace this with real footage — see public/media/README.md
          </p>
        </div>
      </section>

      <section className="pt-16 pb-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <TiltCard className="glass-panel-wrapper" maxTilt={6}>
                  <button
                    onClick={() => setSelected(project)}
                    className="w-full text-left rounded-2xl overflow-hidden border border-mullion/60 bg-panel/60"
                  >
                    <ProjectVisual
                      src={`/projects/${project.images[0]}`}
                      alt={project.name}
                      hue={project.hue}
                      icon={project.icon}
                      className="w-full h-56"
                    />
                    <div className="p-4">
                      <h3 className="font-display text-sm text-chalk font-medium leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-fog text-xs mt-1.5 font-mono">
                        {project.date} · {project.images.length} photo
                        {project.images.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
