import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-mono text-6xl text-brass-light/60 mb-4">404</div>
        <h1 className="font-display text-3xl text-chalk font-medium">
          This pane hasn't been fitted yet.
        </h1>
        <p className="text-fog mt-3 max-w-sm mx-auto">
          The page you're looking for doesn't exist — but the rest of the
          site does.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-brass text-iron font-semibold text-sm hover:bg-brass-light transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </motion.div>
    </section>
  );
}
