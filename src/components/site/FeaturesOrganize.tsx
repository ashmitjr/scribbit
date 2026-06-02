import { motion } from "framer-motion";
import { Brain, Shuffle, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Note Capture",
    body: "Quickly jot down ideas, tasks, and reminders without losing flow. Add tags, folders, or checklists to keep everything in order.",
  },
  {
    icon: Shuffle,
    title: "Adaptive Organization",
    body: "Your notes grow with you. Use smart search, categories, and links to connect ideas and find what you need instantly.",
  },
  {
    icon: Zap,
    title: "Simple & Flexible",
    body: "A tool that fits your style — whether for study, work, or personal journaling. Take notes your way, on the go, and access them any time.",
  },
];

export function FeaturesOrganize() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground">
            sorted by users today
          </span>
          <h2 className="mt-5 font-serif text-[30px] sm:text-[36px] md:text-[38px] leading-[1.1] max-w-md">
            Smarter Notes. One Simple Space to Capture, Organize & Remember
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
            Simplify the way you take notes. Write down your thoughts instantly, organize them into clear
            categories, and find anything in seconds. Capture ideas in real time, stay focused with smart
            organization, and keep all your notes in one place that moves with you.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-secondary border border-border shrink-0">
                  <f.icon size={18} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-sans text-[14px] sm:text-[15px] font-semibold">{f.title}</h3>
                  <p className="mt-1 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[340px] sm:h-[420px] md:h-[460px] grid place-items-center">
          <NotesBoxIllo />
        </div>
      </div>
    </section>
  );
}

function NotesBoxIllo() {
  const floatingCards = [
    { emoji: "📝", label: "Quick note", top: "8%", left: "-4%", delay: 0 },
    { emoji: "💡", label: "Idea", top: "5%", right: "4%", delay: 0.15 },
    { emoji: "📌", label: "Pinned", bottom: "12%", right: "-2%", delay: 0.3 },
    { emoji: "🔖", label: "Saved", bottom: "8%", left: "2%", delay: 0.45 },
  ];

  return (
    <div className="relative w-full max-w-[320px] h-full mx-auto">
      {floatingCards.map((c, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
          className="absolute z-10 flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-2 shadow-card text-[12px] font-medium"
          style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom } as React.CSSProperties}
        >
          <span>{c.emoji}</span>
          <span className="text-foreground/70">{c.label}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute inset-x-8 top-1/2 -translate-y-1/2"
      >
        <div className="rounded-3xl bg-card border border-border shadow-card overflow-hidden">
          <div className="h-2 bg-secondary border-b border-border" />

          <div className="p-5 space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-md bg-foreground grid place-items-center">
                <span className="text-background text-[10px] font-serif">N</span>
              </div>
              <span className="text-[12px] font-semibold text-foreground">My Notebook</span>
            </div>

            {["Meeting agenda", "Project ideas", "Daily plan", "Quick thoughts"].map((note, i) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-secondary/70 border border-border/50"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                <span className="text-[12px] text-foreground/70">{note}</span>
                <div className="ml-auto w-12 h-1.5 rounded-full bg-border" />
              </motion.div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-border flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">4 notes</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-border" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2 mx-4 h-3 rounded-b-2xl bg-secondary border border-border/60 border-t-0 shadow-sm" />
        <div className="mt-0.5 mx-8 h-2.5 rounded-b-2xl bg-muted border border-border/40 border-t-0" />
      </motion.div>
    </div>
  );
}
