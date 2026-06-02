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
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground">
            sorted by users today
          </span>
          <h2 className="mt-5 font-serif text-[38px] leading-[1.1] max-w-md">
            Smarter Notes. One Simple Space to Capture, Organize & Remember
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed">
            Simplify the way you take notes. Write down your thoughts instantly, organize them into clear categories, and find anything in seconds. Capture ideas in real time, stay focused with smart organization, and keep all your notes in one place that moves with you.
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
                  <h3 className="font-sans text-[15px] font-semibold">{f.title}</h3>
                  <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[460px] grid place-items-center">
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 rounded-full bg-gradient-to-br from-white via-secondary to-[oklch(0.88_0.01_85)] border border-border shadow-card"
          >
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-secondary to-white opacity-80" />
            <div className="absolute top-6 -left-8 w-12 h-12 rounded-2xl bg-card border border-border shadow-soft grid place-items-center text-xs">📝</div>
            <div className="absolute -top-4 right-6 w-12 h-12 rounded-2xl bg-card border border-border shadow-soft grid place-items-center text-xs">💡</div>
            <div className="absolute bottom-8 -right-6 w-12 h-12 rounded-2xl bg-card border border-border shadow-soft grid place-items-center text-xs">📌</div>
            <div className="absolute -bottom-4 left-10 w-12 h-12 rounded-2xl bg-card border border-border shadow-soft grid place-items-center text-xs">🔖</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
