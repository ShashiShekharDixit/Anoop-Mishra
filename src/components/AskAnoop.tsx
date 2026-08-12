import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareText, X, Send, Sparkles } from "lucide-react";
import { findBestAnswer, FALLBACK_RESPONSE, SUGGESTED_QUESTIONS } from "../lib/askAnoop";
import { contact } from "../data";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export default function AskAnoop() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text:
        "Hi — I'm a quick-answers assistant with information about Anoop's experience, services, and projects. Ask me anything, or reach him directly for anything specific to your project.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const match = findBestAnswer(trimmed);
    const answer = match ? match.answer : FALLBACK_RESPONSE;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer },
    ]);
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="fixed bottom-6 right-6 z-[110] w-14 h-14 rounded-full bg-brass text-iron flex items-center justify-center shadow-lg shadow-black/30 hover:bg-brass-light transition-colors"
      >
        {open ? <X size={22} /> : <MessageSquareText size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[110] w-[92vw] max-w-sm glass-panel bg-panel rounded-2xl overflow-hidden flex flex-col"
            style={{ height: "min(560px, 70vh)" }}
          >
            <div className="px-5 py-4 border-b border-mullion/60 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-iron border border-mullion flex items-center justify-center">
                <Sparkles size={14} className="text-brass-light" />
              </div>
              <div>
                <div className="font-display text-sm font-medium text-chalk leading-tight">
                  Ask about Anoop
                </div>
                <div className="text-[11px] text-fog font-mono">Instant answers · not a substitute for a call</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-panel2 text-chalk"
                        : "bg-iron border border-mullion/60 text-chalk"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-col gap-2 pt-1">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-left text-xs text-pane-light border border-mullion/60 rounded-lg px-3 py-2 hover:border-pane transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 border-t border-mullion/60">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send(input)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-panel2 border border-mullion/60 rounded-lg px-3 py-2 text-sm text-chalk placeholder:text-fog focus:outline-none focus:border-pane"
                />
                <button
                  onClick={() => send(input)}
                  aria-label="Send"
                  className="w-9 h-9 rounded-lg bg-brass text-iron flex items-center justify-center hover:bg-brass-light transition-colors shrink-0"
                >
                  <Send size={15} />
                </button>
              </div>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="block text-center mt-2.5 text-[11px] text-fog hover:text-pane-light transition-colors"
              >
                Prefer a real conversation? Message Anoop on WhatsApp →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
