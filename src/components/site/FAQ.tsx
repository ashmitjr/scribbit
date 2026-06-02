import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is there actually a free plan, or is this just a trial?",
    a: "The free plan is permanent — no countdown, no surprise paywall after 14 days. You get full note-taking, basic organization, and sync across two devices at no cost. The paid plan just adds more devices, larger attachments, and priority support.",
  },
  {
    q: "What makes Notely different from Notion or Evernote?",
    a: "Both are solid tools. Notely is built for people who want one reliable place to write things down without spending time configuring a system first. No blocks to set up, no databases to design — just open it and write. If you want a second brain, there are better tools. If you want to stop losing ideas, Notely is it.",
  },
  {
    q: "Does it work when I have no internet connection?",
    a: "Yes. Notely stores everything locally first, then syncs when you're back online. You won't lose a note because your Wi-Fi dropped or your flight had no service. It works exactly the same offline as it does online.",
  },
  {
    q: "How private is what I write?",
    a: "Your notes are encrypted in transit and at rest. We don't read what you write, we don't train any AI models on your notes, and we don't sell or share your data with anyone. The business model is subscriptions — not your content.",
  },
  {
    q: "Can I export my notes if I decide to leave?",
    a: "Any time, in seconds. Go to Settings → Export and pull everything as plain Markdown, PDF, or plain text. No hoops, no customer service ticket. Your notes belong to you.",
  },
  {
    q: "I already use another app. Is switching worth the hassle?",
    a: "We have one-click import from Notion, Evernote, Apple Notes, and Bear. Most people are fully moved over in under five minutes. The import keeps your folder structure and formatting intact.",
  },
  {
    q: "What devices and platforms does Notely run on?",
    a: "iOS, Android, Mac, Windows, Linux, and the browser. All of them stay in sync automatically. The web version works on any device with a modern browser — even school Chromebooks.",
  },
  {
    q: "Who is Notely built for?",
    a: "Students keeping lecture notes. Developers tracking ideas between coding sessions. Writers drafting outlines. Anyone who's ever lost a good thought because they didn't have a reliable place to put it. If you write things down, Notely is for you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24" id="faq">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground mb-4">
            Questions
          </span>
          <h2 className="font-sans font-semibold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.025em]">
            Things people ask before signing up
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed">
            Honest answers. No sales speak.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          className="divide-y divide-border"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="font-sans font-medium text-[14px] sm:text-[15px] text-foreground leading-snug group-hover:text-foreground/80 transition-colors pr-2">
                  {faq.q}
                </span>
                <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full border border-border text-muted-foreground group-hover:border-foreground/30 transition-colors">
                  {open === i ? <Minus size={12} strokeWidth={2} /> : <Plus size={12} strokeWidth={2} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed pr-10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center text-[13px] text-muted-foreground"
        >
          Still have a question?{" "}
          <a href="mailto:hello@notely.app" className="text-foreground underline underline-offset-2 hover:opacity-70 transition-opacity">
            Write to us directly.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
