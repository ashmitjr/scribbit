import { motion } from "framer-motion";
import { ToolbarMockup } from "./ToolbarMockup";
import mountain from "@/assets/mountain-hero.jpg";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

export function Hero() {
  return (
    <section className="pt-16 pb-6 px-4">
      <div className="max-w-4xl mx-auto bg-hero-card rounded-[28px] overflow-hidden pt-12 px-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/60 px-3 py-1 text-[12px] font-medium text-muted-foreground"
          >
            <span>✦</span>
            +100K active users
          </motion.div>

          <h1 className="mt-3.5 font-serif text-foreground text-[36px] sm:text-[48px] md:text-[52px] leading-[1.05] tracking-[-0.5px]">
            <Words words={line1} delay={0.35} />
            <br />
            <Words words={line2} delay={0.35 + line1.length * 0.055} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="mt-3 mx-auto max-w-[290px] text-[14px] leading-[1.6] text-muted-foreground"
          >
            Combine note-taking, idea tracking, and daily planning in one smart notebook — ready whenever inspiration hits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.35 }}
            className="mt-4 flex justify-center"
          >
            <ToolbarMockup />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.15 } } }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#download"
              className="rounded-full bg-foreground text-background text-[14px] font-medium px-5 py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:opacity-95 transition"
            >
              Download for Playstore
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#trial"
              className="rounded-full border border-[#C0BFBA] text-foreground text-[14px] font-medium px-5 py-2.5 hover:bg-foreground/5 transition"
            >
              Start Free Trial →
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 1.0, ease: "easeOut" }}
          className="relative mt-6 -mx-5"
        >
          <img
            src={mountain}
            alt="Black and white mountain landscape"
            className="block w-full object-cover object-top"
            style={{ filter: "grayscale(100%) contrast(1.05) brightness(1.02)", aspectRatio: "16/9" }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
            style={{ background: "linear-gradient(to top, var(--hero-card) 0%, transparent 100%)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Words({ words, delay }: { words: string[]; delay: number }) {
  return (
    <>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.055, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.2em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
