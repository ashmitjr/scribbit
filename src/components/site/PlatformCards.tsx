import { motion } from "framer-motion";
import { Home, Copy, Clock, FileText, Folder, Users, Phone } from "lucide-react";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

const cards = [
  {
    title: "Notely for Android",
    body: "Take notes on the go with fast capture sync across all your devices. Capture thoughts instantly and access them anytime.",
    illo: <AndroidIllo />,
  },
  {
    title: "Notely for iOS",
    body: "Jot down ideas, organize with folders, and collaborate on shared projects, all from your iPhone or iPad.",
    illo: <IOSIllo />,
  },
  {
    title: "Notely for Windows / Linux",
    body: "Work smarter on desktop. Enjoy seamless typing, keyboard shortcuts, and distraction-free writing.",
    illo: <WindowsIllo />,
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
        className="mt-10 sm:mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={{
              hidden: { opacity: 0, scale: 0.94 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.015, boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}
            className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-soft"
          >
            <div className="relative h-44 sm:h-48 grid place-items-center rounded-xl bg-secondary/60 mb-5 overflow-hidden">
              {c.illo}
            </div>
            <h3 className="font-sans text-[15px] sm:text-[16px] font-semibold">{c.title}</h3>
            <p className="mt-2 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function AndroidIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6">
      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-foreground/90 text-background text-[10px] font-medium px-2.5 py-1 shadow-sm">
        Keep it simple
      </span>

      <div className="w-full max-w-[220px]">
        <div className="rounded-2xl bg-card border border-border shadow-card p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-secondary border border-border grid place-items-center shrink-0">
              <Home size={16} className="text-foreground" />
            </div>
            <div className="w-9 h-9 rounded-xl bg-secondary border border-border grid place-items-center shrink-0">
              <Copy size={16} className="text-foreground" />
            </div>
            <div className="w-9 h-9 rounded-xl bg-secondary border border-border grid place-items-center shrink-0">
              <XIcon />
            </div>
            <div className="flex-1" />
          </div>

          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background text-[11px] font-medium px-3 py-1.5 shadow-sm"
          >
            <Phone size={11} />
            Book a Call
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function IOSIllo() {
  const items = [
    { icon: FileText, label: "Note taken" },
    { icon: Folder, label: "folders used" },
    { icon: Users, label: "collaborated projects" },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center px-6">
      <div className="w-full max-w-[220px] space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
            className="flex items-center gap-3 rounded-xl bg-card border border-border px-3 py-2.5 shadow-soft"
          >
            <div className="w-7 h-7 rounded-lg bg-secondary border border-border grid place-items-center shrink-0">
              <item.icon size={13} className="text-foreground" />
            </div>
            <span className="text-[12px] font-medium text-foreground/80">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WindowsIllo() {
  return (
    <div className="w-full h-full flex items-end justify-center pb-4">
      <div className="relative">
        <svg width="180" height="130" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="90" cy="110" rx="72" ry="18" fill="oklch(0.22 0.003 60)" />
          <rect x="26" y="55" width="128" height="60" rx="24" fill="oklch(0.22 0.003 60)" />
          <circle cx="50" cy="52" r="22" fill="oklch(0.22 0.003 60)" />
          <circle cx="90" cy="44" r="28" fill="oklch(0.22 0.003 60)" />
          <circle cx="132" cy="52" r="22" fill="oklch(0.22 0.003 60)" />
          <circle cx="66" cy="47" r="14" fill="oklch(0.28 0.003 60)" />
          <circle cx="114" cy="47" r="14" fill="oklch(0.28 0.003 60)" />
          <circle cx="90" cy="42" r="10" fill="oklch(0.30 0.003 60)" />
        </svg>
      </div>
    </div>
  );
}

function WebIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-foreground/90 text-background text-[10px] font-medium px-2.5 py-1">
        Responsive
      </span>
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-card border border-border text-foreground text-[10px] font-medium px-2.5 py-1 shadow-soft">
        <Clock size={10} />
        under 3 seconds
      </span>

      <div className="relative w-28 h-28">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-border"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border border-border/60"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-foreground border-2 border-background shadow-sm" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3"
        >
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary border border-border shadow-soft" />
        </motion.div>

        <div className="absolute inset-0 grid place-items-center">
          <div className="w-10 h-10 rounded-full bg-foreground grid place-items-center shadow-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
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
