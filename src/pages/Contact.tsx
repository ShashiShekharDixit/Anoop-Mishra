import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { contact } from "../data";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageBanner
        eyebrow="Get in touch"
        title={
          <>
            Let's talk about <span className="text-gradient">what you're building.</span>
          </>
        }
        description="Fill in the form and it'll open a pre-filled email, or reach out directly — whichever's easier for you."
        badges={["Usually replies same day"]}
        wide
      />

      <section className="pt-14 pb-28 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mt-0 grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a href={contact.phoneHref} className="glass-panel rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-iron border border-mullion flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-brass-light" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-fog font-mono uppercase tracking-wide">Call</div>
                <div className="text-chalk text-sm mt-0.5">{contact.phone}</div>
              </div>
            </a>

            <a href={`mailto:${contact.email}`} className="glass-panel rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-iron border border-mullion flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-pane-light" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-fog font-mono uppercase tracking-wide">Email</div>
                <div className="text-chalk text-sm mt-0.5 break-all">{contact.email}</div>
              </div>
            </a>

            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="glass-panel rounded-2xl p-6 flex items-center gap-4 hover:bg-white/[0.05] transition-colors">
              <div className="w-11 h-11 rounded-xl bg-iron border border-mullion flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-brass-light" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-fog font-mono uppercase tracking-wide">WhatsApp</div>
                <div className="text-chalk text-sm mt-0.5">Message directly</div>
              </div>
            </a>

            <div className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-iron border border-mullion flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-pane-light" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs text-fog font-mono uppercase tracking-wide">Service area</div>
                <div className="text-chalk text-sm mt-0.5">{contact.serviceArea}</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-7 md:p-8 space-y-5"
          >
            <div>
              <label className="text-xs font-mono text-fog uppercase tracking-wide">Your name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-iron border border-mullion rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-fog focus:outline-none focus:border-pane"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-fog uppercase tracking-wide">Phone number</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full bg-iron border border-mullion rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-fog focus:outline-none focus:border-pane"
                placeholder="+91-"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-fog uppercase tracking-wide">What are you building?</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-iron border border-mullion rounded-lg px-4 py-3 text-sm text-chalk placeholder:text-fog focus:outline-none focus:border-pane resize-none"
                placeholder="A few lines about the space, the work needed, and your rough timeline..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brass text-iron font-semibold text-sm hover:bg-brass-light transition-colors"
            >
              Send message <Send size={15} />
            </button>
            <p className="text-[11px] text-fog text-center leading-relaxed">
              This opens your email app with the message pre-filled — nothing is sent from here directly.
            </p>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 pt-10 border-t border-mullion/50"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-pane mb-6">
            What happens after you reach out
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="font-mono text-2xl text-brass-light/70 mb-2">01</div>
              <p className="text-chalk text-sm font-medium mb-1">A real reply, not a form email</p>
              <p className="text-fog text-xs leading-relaxed">
                Usually same day — a direct response from Anoop, not an auto-reply.
              </p>
            </div>
            <div>
              <div className="font-mono text-2xl text-brass-light/70 mb-2">02</div>
              <p className="text-chalk text-sm font-medium mb-1">A site visit gets scheduled</p>
              <p className="text-fog text-xs leading-relaxed">
                For anything beyond a quick question — an accurate quote needs to see the actual space.
              </p>
            </div>
            <div>
              <div className="font-mono text-2xl text-brass-light/70 mb-2">03</div>
              <p className="text-chalk text-sm font-medium mb-1">A written estimate, explained</p>
              <p className="text-fog text-xs leading-relaxed">
                Cost and material choices laid out with the reasoning, not just a total.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </section>
    </>
  );
}
