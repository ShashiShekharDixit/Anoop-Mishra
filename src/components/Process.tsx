import { motion } from "framer-motion";
import { process } from "../data";

export default function Process() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
      {process.map((p, i) => (
        <motion.div
          key={p.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="relative glass-panel rounded-2xl p-6"
        >
          <div className="font-mono text-3xl text-brass-light/70 mb-4">{p.step}</div>
          <h3 className="font-display text-lg text-chalk font-medium mb-2">{p.title}</h3>
          <p className="text-fog text-sm leading-relaxed">{p.description}</p>
          {i < process.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-mullion" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
