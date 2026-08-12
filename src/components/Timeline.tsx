import { motion } from "framer-motion";
import { Building2, Hammer, GlassWater, HardHat } from "lucide-react";
import { experience } from "../data";

const ICONS = [Building2, Hammer, GlassWater, HardHat];

export default function Timeline() {
  return (
    <section id="experience" className="py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Career" title="A track record built year on year" />

        <div className="mt-16 relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-mullion md:left-1/2" />

          {experience.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative mb-12 md:mb-16 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                } pl-16 md:pl-0`}
              >
                <div
                  className={`absolute top-1 left-0 md:left-auto ${
                    isLeft ? "md:-right-[21px]" : "md:-left-[21px]"
                  } w-11 h-11 rounded-full bg-panel border border-mullion flex items-center justify-center`}
                >
                  <Icon className="w-4.5 h-4.5 text-brass-light" size={18} strokeWidth={1.5} />
                </div>

                <div className="font-mono text-xs text-pane tracking-widest mb-2">{item.year}</div>
                <h3 className="font-display text-xl text-chalk font-medium">{item.role}</h3>
                <div className="text-sm text-brass-light font-body mt-0.5 mb-2">{item.company}</div>
                <p className="text-fog text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-pane mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-medium text-chalk max-w-xl">
        {title}
      </h2>
      <div className="glazing-divider mt-8 max-w-[140px]" />
    </motion.div>
  );
}
