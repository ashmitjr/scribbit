import { motion } from "framer-motion";
import { Smartphone, Apple, Monitor, Globe, Clock } from "lucide-react";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

const cards = [
  {
    title: "Notely for Android",
    body: "Take notes on the go with fast capture sync across all your devices. Capture thoughts instantly and access them anytime.",
    illo: <BlobIllo><Smartphone size={36} className="text-foreground" /></BlobIllo>,
  },
  {
    title: "Notely for iOS",
    body: "Jot down ideas, organize with folders, and collaborate on shared projects, all from your iPhone or iPad.",
    illo: <BlobIllo><Apple size={36} className="text-foreground" /></BlobIllo>,
  },
  {
    title: "Notely for Windows / Linux",
    body: "Work smarter on desktop. Enjoy seamless typing, keyboard shortcuts, and distraction-free writing.",
    illo: <BlobIllo><Monitor size={36} className="text-foreground" /></BlobIllo>,
    badge: "Responsive",
  },
  {
    title: "Notely for Web",
    body: "Access your notes anywhere with a responsive web app that loads in under 3 seconds.",
    illo: <BlobIllo><Globe size={36} className="text-foreground" /></BlobIllo>,
    badge: "under 3 seconds",
    badgeIcon: <Clock size={11} />,
  },
];

export function PlatformCards() {
  return (
    <section className="px-6 py-24 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-[40px] sm:text-[48px] leading-[1.08]">
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
        className="mt-14 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={{
              hidden: { opacity: 0, scale: 0.94 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}
            className="rounded-2xl bg-card border border-border p-6 shadow-soft"
          >
            <div className="relative h-40 grid place-items-center rounded-xl bg-secondary/60 mb-5">
              {c.illo}
              {c.badge && (
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-foreground text-background text-[10px] px-2 py-1">
                  {c.badgeIcon}
                  {c.badge}
                </span>
              )}
            </div>
            <h3 className="font-sans text-[16px] font-semibold">{c.title}</h3>
            <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function BlobIllo({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-white to-secondary blur-xl opacity-80" />
      <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-white to-secondary border border-border grid place-items-center shadow-soft">
        {children}
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
