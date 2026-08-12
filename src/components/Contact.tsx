import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { contact } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-pane mb-4"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl md:text-5xl font-medium text-chalk"
        >
          Let's build <span className="text-gradient">something solid.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fog mt-5 max-w-lg mx-auto leading-relaxed"
        >
          For inquiries or to discuss a project, reach out directly — always
          happy to talk through what you're building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          <a
            href={contact.phoneHref}
            className="glass-panel rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-white/[0.05] transition-colors"
          >
            <Phone className="w-5 h-5 text-brass-light" strokeWidth={1.5} />
            <span className="text-sm text-chalk font-body">{contact.phone}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="glass-panel rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-white/[0.05] transition-colors"
          >
            <Mail className="w-5 h-5 text-pane-light" strokeWidth={1.5} />
            <span className="text-sm text-chalk font-body break-all">{contact.email}</span>
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="glass-panel rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-white/[0.05] transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-brass-light" strokeWidth={1.5} />
            <span className="text-sm text-chalk font-body">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
