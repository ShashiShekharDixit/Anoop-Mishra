import { motion } from "framer-motion";
import { Settings2, Layers, Wrench, Paintbrush, Sparkles, Box } from "lucide-react";
import { skills } from "../data";
import { SectionHeading } from "./Timeline";

const ICON_MAP = {
  management: Settings2,
  glass: Layers,
  structural: Wrench,
  design: Paintbrush,
  restoration: Sparkles,
  printing: Box,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-10 bg-panel/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Capabilities" title="Where craftsmanship meets engineering" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = ICON_MAP[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="glass-panel rounded-2xl p-6 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-iron border border-mullion flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-pane-light" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-chalk font-medium mb-2">{skill.name}</h3>
                <p className="text-fog text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
