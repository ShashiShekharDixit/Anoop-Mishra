import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Ambient glazing-bar grid in the background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute inset-0 grid grid-cols-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border-r border-chalk" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-pane mb-5"
          >
            Construction &amp; Glassworks · Lucknow
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-chalk"
          >
            Built solid.
            <br />
            <span className="text-gradient">Finished in glass.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-fog text-base md:text-lg leading-relaxed max-w-lg"
          >
            With over 15 years in the trade, Anoop Mishra delivers construction
            and custom glasswork built to last — from residential interiors to
            commercial facades, wherever durability needs to meet a finish
            people notice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-brass text-iron font-body font-semibold text-sm hover:bg-brass-light transition-colors"
            >
              See the projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-mullion text-chalk font-body text-sm hover:border-pane hover:text-pane-light transition-colors"
            >
              Start a project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md font-mono"
          >
            {[
              ["15+", "Years"],
              ["50+", "Projects"],
              ["06", "Core skills"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl text-chalk font-medium">{num}</div>
                <div className="text-xs text-fog mt-1 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stacked glass panes with a traveling light sheen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative h-[420px] hidden md:block"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="glass-panel absolute rounded-2xl overflow-hidden"
              style={{
                width: "78%",
                height: "78%",
                top: `${i * 11}%`,
                left: `${i * 9}%`,
                transform: `rotate(${(i - 1) * 4}deg)`,
                zIndex: 3 - i,
              }}
            >
              <div className="absolute inset-0 bg-glass-sheen" />
              <motion.div
                className="absolute -inset-y-10 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ left: ["-40%", "140%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 2.5 + i,
                  ease: "easeInOut",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
