import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Cloud,
  Command,
  FileText,
  Folder,
  Globe2,
  Monitor,
  Search,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

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
            <p className="mt-2 text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed">
              {c.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function AndroidIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-5">
      <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/90 text-background text-[10px] font-medium px-2.5 py-1 shadow-sm">
        <Sparkles size={10} />
        Quick capture
      </span>

      <div className="relative w-[156px] h-[154px]">
        <div className="absolute left-3 top-0 w-[112px] h-[150px] rounded-[24px] bg-foreground p-1.5 shadow-card">
          <div className="h-full rounded-[20px] bg-card border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-3 pt-3">
              <div className="h-1.5 w-8 rounded-full bg-border" />
              <Bell size={12} className="text-muted-foreground" />
            </div>
            <div className="px-3 pt-4">
              <div className="flex items-center gap-2">
                <div className="grid place-items-center w-8 h-8 rounded-xl bg-foreground text-background">
                  <Smartphone size={14} />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-12 rounded-full bg-foreground/80" />
                  <div className="h-1.5 w-8 rounded-full bg-border" />
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <div className="h-2 w-full rounded-full bg-secondary" />
                <div className="h-2 w-10/12 rounded-full bg-secondary" />
                <div className="h-2 w-7/12 rounded-full bg-secondary" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-secondary border border-border px-3 py-2">
              <div className="h-1.5 w-14 rounded-full bg-foreground/70" />
              <div className="mt-1.5 h-1.5 w-9 rounded-full bg-border" />
            </div>
          </div>
        </div>

        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 bottom-5 flex items-center gap-2 rounded-2xl bg-card border border-border shadow-card px-3 py-2"
        >
          <CheckCircle2 size={14} className="text-foreground" />
          <div>
            <div className="h-1.5 w-16 rounded-full bg-foreground/80" />
            <div className="mt-1.5 h-1.5 w-10 rounded-full bg-border" />
          </div>
        </motion.div>

        <div className="absolute left-0 bottom-2 grid place-items-center w-10 h-10 rounded-2xl bg-card border border-border shadow-soft">
          <Cloud size={15} className="text-foreground/70" />
        </div>
      </div>
    </div>
  );
}

function IOSIllo() {
  const items = [
    { icon: FileText, label: "Meeting notes", width: "w-24" },
    { icon: Folder, label: "Research folder", width: "w-20" },
    { icon: Users, label: "Shared draft", width: "w-16" },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center px-6">
      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card border border-border text-foreground text-[10px] font-medium px-2.5 py-1 shadow-soft">
        <Command size={10} />
        iCloud sync
      </div>

      <div className="relative w-full max-w-[226px] pt-6">
        <div className="absolute -right-1 top-2 w-24 h-28 rounded-[24px] bg-foreground/90 shadow-card" />
        <div className="absolute -right-1.5 top-3 w-24 h-28 rounded-[22px] bg-card border border-border shadow-card p-3">
          <div className="h-1.5 w-10 rounded-full bg-foreground/70" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-secondary" />
            <div className="h-1.5 w-10/12 rounded-full bg-secondary" />
            <div className="h-1.5 w-7/12 rounded-full bg-secondary" />
          </div>
        </div>

        <div className="relative z-10 space-y-2.5">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              className="flex items-center gap-3 rounded-2xl bg-card border border-border px-3 py-2.5 shadow-soft"
            >
              <div className="w-8 h-8 rounded-xl bg-secondary border border-border grid place-items-center shrink-0">
                <item.icon size={13} className="text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[12px] font-medium text-foreground/80">{item.label}</span>
                <div className={`mt-1.5 h-1.5 rounded-full bg-border ${item.width}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WindowsIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-5">
      <div className="relative w-full max-w-[260px]">
        <div className="rounded-2xl bg-foreground p-1.5 shadow-card">
          <div className="rounded-[14px] bg-card border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-border" />
                <span className="w-2 h-2 rounded-full bg-border" />
                <span className="w-2 h-2 rounded-full bg-border" />
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Monitor size={12} />
                <span className="text-[10px] font-medium">Desktop</span>
              </div>
            </div>

            <div className="grid grid-cols-[64px_1fr] min-h-[104px]">
              <div className="border-r border-border bg-secondary/60 p-2.5 space-y-2">
                <div className="h-2 w-8 rounded-full bg-foreground/70" />
                <div className="h-1.5 w-10 rounded-full bg-border" />
                <div className="h-1.5 w-7 rounded-full bg-border" />
                <div className="mt-4 h-7 rounded-xl bg-card border border-border" />
              </div>
              <div className="p-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2 w-20 rounded-full bg-foreground/80" />
                    <div className="mt-1.5 h-1.5 w-14 rounded-full bg-border" />
                  </div>
                  <Search size={13} className="text-muted-foreground" />
                </div>
                <div className="mt-4 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-secondary" />
                  <div className="h-1.5 w-11/12 rounded-full bg-secondary" />
                  <div className="h-1.5 w-8/12 rounded-full bg-secondary" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-1.5">
                  <div className="h-7 rounded-lg bg-secondary border border-border" />
                  <div className="h-7 rounded-lg bg-secondary border border-border" />
                  <div className="h-7 rounded-lg bg-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-foreground/90" />
        <div className="absolute -bottom-6 left-1/2 h-2 w-32 -translate-x-1/2 rounded-full bg-foreground/15" />
      </div>
    </div>
  );
}

function WebIllo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-5">
      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/90 text-background text-[10px] font-medium px-2.5 py-1">
        <Globe2 size={10} />
        Responsive
      </span>

      <div className="relative w-full max-w-[250px] h-[138px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute right-5 top-4 w-16 h-16 rounded-full border border-dashed border-border"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute right-8 top-7 w-10 h-10 rounded-full border border-border/60"
        />

        <div className="absolute left-0 top-6 w-[178px] rounded-2xl bg-card border border-border shadow-card overflow-hidden">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-border" />
            <div className="h-1.5 w-20 rounded-full bg-secondary" />
          </div>
          <div className="p-3.5">
            <div className="flex items-center gap-2">
              <div className="grid place-items-center w-8 h-8 rounded-xl bg-foreground text-background">
                <FileText size={14} />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-20 rounded-full bg-foreground/80" />
                <div className="h-1.5 w-12 rounded-full bg-border" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-12 rounded-xl bg-secondary border border-border p-2">
                <div className="h-1.5 w-9 rounded-full bg-foreground/60" />
                <div className="mt-2 h-1.5 w-6 rounded-full bg-border" />
              </div>
              <div className="h-12 rounded-xl bg-secondary border border-border p-2">
                <div className="h-1.5 w-8 rounded-full bg-foreground/60" />
                <div className="mt-2 h-1.5 w-7 rounded-full bg-border" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-7 bottom-0 w-[72px] rounded-[18px] bg-foreground p-1.5 shadow-card">
          <div className="rounded-[14px] bg-card border border-white/10 p-2">
            <div className="h-1.5 w-8 rounded-full bg-border" />
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-secondary" />
              <div className="h-1.5 w-8 rounded-full bg-secondary" />
            </div>
          </div>
        </div>
      </div>
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
