import { motion } from "framer-motion";
import { principles } from "../data";

export default function Principles() {
  return (
    <div className="grid sm:grid-cols-2 gap-5 mt-14">
      {principles.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
          className="glass-panel rounded-2xl p-7"
        >
          <div className="font-mono text-xs text-pane mb-3">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-display text-lg text-chalk font-medium mb-2.5 leading-snug">
            {p.title}
          </h3>
          <p className="text-fog text-sm leading-relaxed">{p.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
