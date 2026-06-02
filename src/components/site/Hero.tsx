import { motion } from "framer-motion";
import { ToolbarMockup } from "./ToolbarMockup";
import mountain from "@/assets/mountain-hero.jpg";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

export function Hero() {
  return (
    <section className="pt-16 pb-6 px-3 sm:px-4">
      <div className="relative max-w-4xl mx-auto bg-hero-card rounded-[24px] sm:rounded-[32px] overflow-hidden">

        {/* Mountain image — full-card background, anchored to bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[62%] pointer-events-none">
          <img
            src={mountain}
            alt="Black and white mountain landscape"
            className="w-full h-full object-cover object-top"
            style={{
              filter: "grayscale(100%) contrast(1.08) brightness(1.0)",
            }}
          />
          {/* Top fade — mountain blends into card background */}
          <div
            className="absolute inset-x-0 top-0 h-[55%] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, var(--hero-card) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Bottom fade — soften mountain bottom edge */}
        <div
          className="absolute inset-x-0 bottom-0 h-[18%] pointer-events-none z-10"
          style={{
            background: "linear-gradient(to top, var(--hero-card) 0%, transparent 100%)",
          }}
        />

        {/* Content — sits above the mountain */}
        <div className="relative z-20 text-center px-4 sm:px-8 pt-10 sm:pt-14 pb-[52%] sm:pb-[44%] md:pb-[38%]">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 backdrop-blur-sm px-3 py-1 text-[11px] sm:text-[12px] font-medium text-muted-foreground"
          >
            <span>✦</span>
            +100K active users
          </motion.div>

          <h1 className="mt-3 sm:mt-4 font-serif text-foreground text-[34px] sm:text-[50px] md:text-[58px] leading-[1.04] tracking-[-0.5px]">
            <Words words={line1} delay={0.3} />
            <br />
            <Words words={line2} delay={0.3 + line1.length * 0.055} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.45 }}
            className="mt-3 mx-auto max-w-[260px] sm:max-w-[320px] text-[13px] sm:text-[14px] leading-[1.65] text-muted-foreground"
          >
            Combine note-taking, idea tracking, and daily planning in
            one smart notebook — ready whenever inspiration hits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.35 }}
            className="mt-4 flex justify-center"
          >
            <ToolbarMockup />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.1 } } }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#download"
              className="rounded-full bg-foreground text-background text-[13px] sm:text-[14px] font-medium px-5 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.22)] hover:opacity-95 transition"
            >
              Download for Playstore
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#trial"
              className="rounded-full border border-[#C4C3BD]/80 bg-white/40 backdrop-blur-sm text-foreground text-[13px] sm:text-[14px] font-medium px-5 py-2.5 hover:bg-white/60 transition"
            >
              Start Free Trial →
            </motion.a>
          </motion.div>
        </div>
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.18em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
