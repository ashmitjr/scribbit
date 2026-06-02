import { motion } from "framer-motion";
import { Brain, Shuffle, Zap, Home, Share2, Bookmark, FileText, Settings } from "lucide-react";

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
    title: "Simple and Flexible",
    body: "A tool that fits your style, whether for study, work, or personal journaling. Take notes your way, on the go, and access them any time.",
  },
];

const floatingIcons = [
  { Icon: Home,     x: "18%",  y: "12%", delay: 0,    dur: 3.2 },
  { Icon: FileText, x: "44%",  y: "4%",  delay: 0.2,  dur: 3.8 },
  { Icon: Share2,   x: "68%",  y: "14%", delay: 0.4,  dur: 3.5 },
  { Icon: Bookmark, x: "28%",  y: "28%", delay: 0.15, dur: 4.0 },
  { Icon: Settings, x: "58%",  y: "26%", delay: 0.35, dur: 3.3 },
];

export function FeaturesOrganize() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-start">

        {/* LEFT: badge + heading + paragraph + animation box */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div>
            <span className="inline-block rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground">
              sorted by users today
            </span>
            <h2 className="mt-4 font-sans font-semibold text-[28px] sm:text-[34px] md:text-[38px] leading-[1.1] tracking-[-0.025em] max-w-md">
              Smarter Notes. One Simple Space to Capture, Organize and Remember
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
              Simplify the way you take notes. Write down your thoughts instantly, organize them into clear
              categories, and find anything in seconds. Capture ideas in real time, stay focused with smart
              organization, and keep all your notes in one place that moves with you.
            </p>
          </div>

          {/* Animation box — now lives under the paragraph */}
          <div className="relative w-full max-w-full aspect-[4/3] rounded-3xl bg-secondary/70 border border-border overflow-hidden flex items-center justify-center">
            {floatingIcons.map(({ Icon, x, y, delay, dur }, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
                className="absolute z-10 w-11 h-11 rounded-2xl bg-card border border-border shadow-card grid place-items-center"
                style={{ left: x, top: y }}
              >
                <Icon size={18} className="text-foreground/70" />
              </motion.div>
            ))}

            <div className="relative mt-8 sm:mt-10">
              <svg
                width="190"
                height="150"
                viewBox="0 0 190 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="95" cy="144" rx="68" ry="8" fill="oklch(0.18 0.003 60 / 0.12)" />
                <rect x="28" y="68" width="134" height="70" rx="6" fill="oklch(0.22 0.003 60)" />
                <rect x="28" y="68" width="134" height="8" rx="6" fill="oklch(0.30 0.003 60)" />
                <path d="M28 68 L10 56 L10 118 L28 130" fill="oklch(0.18 0.003 60)" />
                <path d="M162 68 L180 56 L180 118 L162 130" fill="oklch(0.18 0.003 60)" />
                <path d="M28 68 L10 56 L58 38 L84 52 Z" fill="oklch(0.28 0.003 60)" />
                <path d="M28 68 L84 52 L84 46 L28 62 Z" fill="oklch(0.20 0.003 60 / 0.4)" />
                <path d="M162 68 L180 56 L132 38 L106 52 Z" fill="oklch(0.28 0.003 60)" />
                <path d="M162 68 L106 52 L106 46 L162 62 Z" fill="oklch(0.20 0.003 60 / 0.4)" />
                <path d="M84 52 L106 52 L162 68 L28 68 Z" fill="oklch(0.16 0.003 60)" />
                <line x1="95" y1="76" x2="95" y2="134" stroke="oklch(0.28 0.003 60)" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="95" cy="100" r="7" fill="oklch(0.30 0.003 60)" />
                <circle cx="95" cy="100" r="4" fill="oklch(0.22 0.003 60)" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: feature bullets */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:pt-[7.5rem]"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4"
            >
              <div className="grid place-items-center w-10 h-10 rounded-lg bg-secondary border border-border shrink-0">
                <f.icon size={18} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em]">{f.title}</h3>
                <p className="mt-1 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
