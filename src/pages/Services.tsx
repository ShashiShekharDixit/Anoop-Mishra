import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Lightbulb, Target } from "lucide-react";
import { services } from "../data";
import { ICON_MAP } from "../components/iconMap";
import PageBanner from "../components/PageBanner";
import TiltCard from "../components/TiltCard";

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title={
          <>
            Six capabilities.
            <br />
            One point of accountability.
          </>
        }
        description="Construction and glasswork are usually handled by separate contractors who barely talk to each other. Here, it's one team, one standard, start to finish."
        badges={["6 core services", "One accountable team"]}
      />

      <section className="pt-14 pb-28 px-6 md:px-10" style={{ perspective: 1200 }}>
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((s, i) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
              >
                <TiltCard maxTilt={3} className="glass-panel rounded-2xl p-7 md:p-9">
                  <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-9">
                    <div className="w-12 h-12 rounded-xl bg-iron border border-mullion flex items-center justify-center shrink-0">
                      <Icon className="w-5.5 h-5.5 text-pane-light" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl text-chalk font-medium">{s.name}</h2>
                      <p className="text-fog text-sm mt-2 leading-relaxed max-w-xl">{s.summary}</p>
                      <ul className="mt-5 space-y-2.5">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-chalk/90">
                            <Check size={15} className="text-brass-light mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 pt-6 border-t border-mullion/50 grid sm:grid-cols-2 gap-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-brass-light mb-2">
                        <Lightbulb size={13} /> Why it matters
                      </div>
                      <p className="text-fog text-sm leading-relaxed">{s.whyItMatters}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-pane-light mb-2">
                        <Target size={13} /> When you need it
                      </div>
                      <p className="text-fog text-sm leading-relaxed">{s.whenYouNeedIt}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brass text-iron font-semibold text-sm hover:bg-brass-light transition-colors"
          >
            Discuss your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
