import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqKnowledgeBase } from "../data";
import PageBanner from "../components/PageBanner";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageBanner
        eyebrow="FAQ"
        title="Common questions, answered directly"
        description="The same information the Ask Anoop assistant uses — laid out here for a quick read."
        badges={[`${faqKnowledgeBase.length} questions`]}
      />

      <section className="pt-14 pb-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqKnowledgeBase.map((entry, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={entry.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass-panel rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base text-chalk font-medium">
                    {entry.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-pane-light shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-fog text-sm leading-relaxed">{entry.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
