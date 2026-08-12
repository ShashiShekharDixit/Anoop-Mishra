import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Calendar, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import type { Project } from "../data";
import ProjectVisual from "./ProjectVisual";
import VideoBanner from "./VideoBanner";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [mediaMode, setMediaMode] = useState<"photo" | "video">("photo");

  if (!project) return null;

  const total = project.images.length;
  const next = () => setActiveImage((i) => (i + 1) % total);
  const prev = () => setActiveImage((i) => (i - 1 + total) % total);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-iron/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel bg-panel rounded-2xl max-w-3xl w-full overflow-hidden max-h-[88vh] flex flex-col"
        >
          <div className="relative">
            {mediaMode === "photo" ? (
              <ProjectVisual
                src={`/projects/${project.images[activeImage]}`}
                alt={project.name}
                hue={project.hue}
                icon={project.icon}
                className="w-full h-72 md:h-96"
              />
            ) : (
              <VideoBanner
                src={`/media/projects/${project.video}`}
                className="w-full h-72 md:h-96"
                overlay={false}
              />
            )}

            {mediaMode === "photo" && total > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-iron/70 border border-mullion flex items-center justify-center text-chalk hover:border-pane"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-iron/70 border border-mullion flex items-center justify-center text-chalk hover:border-pane"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Show image ${i + 1}`}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i === activeImage ? "bg-brass-light" : "bg-chalk/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {project.video && (
              <div className="absolute top-3 left-3 flex bg-iron/70 border border-mullion rounded-full p-0.5">
                <button
                  onClick={() => setMediaMode("photo")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
                    mediaMode === "photo" ? "bg-brass text-iron font-semibold" : "text-fog"
                  }`}
                >
                  <ImageIcon size={12} /> Photos
                </button>
                <button
                  onClick={() => setMediaMode("video")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
                    mediaMode === "video" ? "bg-brass text-iron font-semibold" : "text-fog"
                  }`}
                >
                  <Play size={12} /> Video
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-iron/70 border border-mullion flex items-center justify-center text-chalk hover:border-brass-light"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="flex items-center gap-4 text-xs font-mono text-fog mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {project.date}
              </span>
              {project.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {project.location}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl text-chalk font-medium mb-2">{project.name}</h3>
            <p className="text-fog text-sm leading-relaxed mb-4">{project.subtitle}</p>
            <div className="inline-block px-3 py-1.5 rounded-full border border-mullion text-xs font-mono text-pane-light mb-6">
              {project.role}
            </div>

            <div className="grid sm:grid-cols-3 gap-5 pt-5 border-t border-mullion/50">
              <div>
                <div className="text-xs font-mono uppercase tracking-wide text-fog mb-2">
                  The challenge
                </div>
                <p className="text-chalk/85 text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wide text-brass-light mb-2">
                  The approach
                </div>
                <p className="text-chalk/85 text-sm leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wide text-pane-light mb-2">
                  The outcome
                </div>
                <p className="text-chalk/85 text-sm leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
