import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  badges?: string[];
  wide?: boolean;
}

export default function PageBanner({ eyebrow, title, description, badges, wide }: Props) {
  return (
    <section className="relative overflow-hidden pt-40 pb-14 px-6 md:px-10 border-b border-mullion/50">
      {/* Layered backdrop: soft radial glows + a faint blueprint grid, echoing
          the glazing-bar motif used throughout the rest of the site */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 20%, rgba(127,168,201,0.10), transparent), " +
            "radial-gradient(ellipse 50% 40% at 10% 90%, rgba(185,139,78,0.08), transparent), " +
            "linear-gradient(180deg, #171c22 0%, #14181D 100%)",
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none" viewBox="0 0 400 200">
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#3A4653" strokeWidth="0.5" />
        ))}
        {[66, 133].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#3A4653" strokeWidth="0.5" />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative ${wide ? "max-w-6xl" : "max-w-2xl"} mx-auto`}
      >
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {badges.map((b) => (
              <span
                key={b}
                className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-mullion text-pane-light bg-iron/50"
              >
                {b}
              </span>
            ))}
          </div>
        )}
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-pane mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium text-chalk leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-fog text-base leading-relaxed max-w-xl">{description}</p>
        )}
      </motion.div>
    </section>
  );
}
