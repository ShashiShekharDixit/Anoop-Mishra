import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import { SectionHeading } from "../components/Timeline";
import ProjectVisual from "../components/ProjectVisual";
import { services, projects, principles } from "../data";
import { ICON_MAP } from "../components/iconMap";

export default function Home() {
  const flagship = projects.filter((p) => p.flagship);

  return (
    <>
      <Hero />

      {/* Services teaser */}
      <section className="py-28 px-6 md:px-10 bg-panel/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="What we do" title="Six capabilities, one standard of work" />
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm text-pane-light hover:text-pane transition-colors font-body shrink-0"
            >
              All services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((s, i) => {
              const Icon = ICON_MAP[s.icon];
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-iron border border-mullion flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-pane-light" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-chalk font-medium mb-2">{s.name}</h3>
                  <p className="text-fog text-sm leading-relaxed">{s.summary}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship projects preview */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Selected work" title="Recent projects worth a look" />
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-pane-light hover:text-pane transition-colors font-body shrink-0"
            >
              All projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {flagship.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-panel rounded-2xl overflow-hidden group"
              >
                <Link to="/projects">
                  <div className="relative">
                    <ProjectVisual
                      src={`/projects/${project.images[0]}`}
                      alt={project.name}
                      hue={project.hue}
                      icon={project.icon}
                      className="w-full h-64"
                    />
                    <div className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 rounded-full bg-iron/70 text-brass-light border border-mullion">
                      Featured &middot; {project.index}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-chalk font-medium leading-snug">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-pane-light shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <p className="text-fog text-sm leading-relaxed mt-2">{project.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why teaser */}
      <section className="py-28 px-6 md:px-10 bg-panel/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Why it's done this way" title="The reasoning, not just the result" />
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm text-pane-light hover:text-pane transition-colors font-body shrink-0"
            >
              Full approach <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {principles.slice(0, 2).map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-7"
              >
                <h3 className="font-display text-lg text-chalk font-medium mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-fog text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm text-fog hover:text-pane-light transition-colors font-mono"
            >
              See the work in motion on the Gallery page →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-10 md:p-14 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium text-chalk">
            Have a space that needs <span className="text-gradient">building or glazing?</span>
          </h2>
          <p className="text-fog mt-4 max-w-md mx-auto leading-relaxed">
            Tell me what you're working with — I'll walk the site and give you
            a straight answer on scope and cost.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-brass text-iron font-semibold text-sm hover:bg-brass-light transition-colors"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
