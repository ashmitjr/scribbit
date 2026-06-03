import { motion } from "framer-motion";
import {
  FileText,
  Folder,
  Grid2x2,
  Home,
  Keyboard,
  LayoutGrid,
  MousePointer2,
  Phone,
  Search,
  Settings,
  X,
} from "lucide-react";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

const cards = [
  {
    title: "Notely for Android",
    body: "Take notes on the go with fast capture sync across all your devices. Capture thoughts instantly and access them anytime.",
    illo: <SimpleIllo />,
  },
  {
    title: "Notely for iOS",
    body: "Jot down ideas, organize with folders, and collaborate on shared projects, all from your iPhone or iPad.",
    illo: <StatsIllo />,
  },
  {
    title: "Notely for Windows / Linux",
    body: "Work smarter on desktop. Enjoy seamless typing, keyboard shortcuts, and distraction-free writing.",
    illo: <DesktopIllo />,
  },
  {
    title: "Notely for Web",
    body: "Access your notes anywhere with a responsive web app that loads in under 3 seconds.",
    illo: <WebIllo />,
  },
];

export function PlatformCards() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] leading-[1.08]">
          <Words words={line1} />
          <br />
          <Words words={line2} delay={line1.length * 0.07} />
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-10 sm:mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={{
              hidden: { opacity: 0, scale: 0.94 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.01, boxShadow: "0 8px 28px rgba(0,0,0,0.06)" }}
            className="rounded-3xl bg-card border border-border/60 p-5 sm:p-6 shadow-soft"
          >
            <div className="relative h-44 sm:h-52 grid place-items-center rounded-2xl bg-secondary/70 mb-6 overflow-hidden">
              {c.illo}
            </div>
            <h3 className="font-serif text-[22px] sm:text-[26px] leading-tight tracking-tight">
              {c.title}
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
              {c.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------- Card 1: Keep it simple ---------- */
function SimpleIllo() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 px-6">
      <div className="rounded-full bg-foreground text-background text-[12px] font-medium px-4 py-1.5 shadow-sm">
        Keep it simple
      </div>

      <div className="flex items-center gap-2">
        <IconCircle><Home size={14} /></IconCircle>
        <IconCircle><FileText size={14} /></IconCircle>
        <IconCircle><X size={14} /></IconCircle>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-[12px] font-medium px-3.5 py-2 shadow-sm">
          <Phone size={12} />
          Book a Call
        </div>
      </div>

      <svg width="140" height="14" viewBox="0 0 140 14" fill="none" className="text-muted-foreground/50">
        <path
          d="M2 7 C 22 -2, 42 16, 70 7 S 118 -2, 138 7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid place-items-center w-9 h-9 rounded-full bg-card border border-border/60 text-foreground/70 shadow-soft">
      {children}
    </div>
  );
}

/* ---------- Card 2: Stat rows ---------- */
function StatsIllo() {
  const rows = [
    { icon: Phone, label: "Note taken", fill: 0.7 },
    { icon: Folder, label: "folders used", fill: 0.5 },
    { icon: Grid2x2, label: "collaborated projects", fill: 0.35 },
  ];
  return (
    <div className="w-full px-4 sm:px-5 space-y-2.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 + 0.15, duration: 0.4 }}
          className="flex items-center gap-3 rounded-full bg-card border border-border/60 pl-4 pr-3 py-2.5 shadow-soft"
        >
          <r.icon size={14} className="text-foreground/70 shrink-0" />
          <span className="text-[12px] sm:text-[13px] font-medium text-foreground/80 flex-1 truncate">
            {r.label}
          </span>
          <div className="relative h-1.5 w-12 rounded-full bg-secondary overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-foreground/30"
              style={{ width: `${r.fill * 100}%` }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- Card 3: Desktop ---------- */
function DesktopIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-5">
      <div className="w-full max-w-[260px] rounded-2xl bg-card border border-border/60 shadow-soft overflow-hidden">
        <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
          <Keyboard size={12} className="text-muted-foreground" />
        </div>
        <div className="grid grid-cols-[60px_1fr]">
          <div className="border-r border-border/60 bg-secondary/60 p-2.5 space-y-2 min-h-[100px]">
            <div className="h-1.5 w-8 rounded-full bg-foreground/60" />
            <div className="h-1.5 w-9 rounded-full bg-border" />
            <div className="h-1.5 w-6 rounded-full bg-border" />
            <div className="h-1.5 w-8 rounded-full bg-border" />
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 rounded-full bg-foreground/70" />
              <Search size={11} className="text-muted-foreground" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-secondary" />
            <div className="h-1.5 w-10/12 rounded-full bg-secondary" />
            <div className="h-1.5 w-7/12 rounded-full bg-secondary" />
            <div className="pt-1 flex gap-1.5">
              <div className="h-5 w-10 rounded-md bg-secondary border border-border/60" />
              <div className="h-5 w-10 rounded-md bg-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Card 4: Web ---------- */
function WebIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-3 px-5">
      <div className="w-[150px] rounded-xl bg-card border border-border/60 shadow-soft overflow-hidden">
        <div className="flex items-center gap-1 border-b border-border/60 px-2 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="ml-1 h-1.5 w-16 rounded-full bg-secondary" />
        </div>
        <div className="p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="grid place-items-center w-7 h-7 rounded-lg bg-foreground text-background">
              <LayoutGrid size={12} />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-14 rounded-full bg-foreground/70" />
              <div className="h-1.5 w-9 rounded-full bg-border" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <div className="h-8 rounded-md bg-secondary border border-border/60" />
            <div className="h-8 rounded-md bg-secondary border border-border/60" />
          </div>
        </div>
      </div>

      <div className="w-[64px] rounded-[14px] bg-foreground p-1 shadow-soft">
        <div className="rounded-[10px] bg-card p-1.5 space-y-1">
          <div className="h-1 w-6 rounded-full bg-border" />
          <div className="h-1 w-full rounded-full bg-secondary" />
          <div className="h-1 w-8 rounded-full bg-secondary" />
          <div className="grid place-items-center mt-2 w-6 h-6 rounded-md bg-secondary mx-auto">
            <MousePointer2 size={10} className="text-foreground/60" />
          </div>
        </div>
      </div>

      <Settings
        size={14}
        className="absolute top-3 right-3 text-muted-foreground/60"
      />
    </div>
  );
}

function Words({ words, delay = 0 }: { words: string[]; delay?: number }) {
  return (
    <>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
