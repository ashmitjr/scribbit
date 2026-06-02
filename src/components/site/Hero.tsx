import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ToolbarMockup } from "./ToolbarMockup";
import mountain from "@/assets/mountain-hero.jpg";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const mountainY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const mountainScale = useSpring(rawScale, { stiffness: 60, damping: 20, mass: 0.8 });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-12%"]);

  return (
    <section ref={sectionRef} className="pt-16 pb-6 px-3 sm:px-4">
      <div className="grain relative max-w-4xl mx-auto bg-hero-card rounded-[24px] sm:rounded-[32px] overflow-hidden">

        {/* ── Mountain — parallax background ── */}
        <motion.div
          style={{ y: mountainY, scale: mountainScale }}
          className="absolute inset-x-0 bottom-0 h-[64%] pointer-events-none origin-bottom"
        >
          <img
            src={mountain}
            alt="Mountain landscape"
            className="w-full h-full object-cover object-top"
            style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.98)" }}
          />
          {/* Top blend — mountain fades up into card bg */}
          <div
            className="absolute inset-x-0 top-0 h-[52%] pointer-events-none"
            style={{ background: "linear-gradient(to bottom, var(--hero-card) 0%, transparent 100%)" }}
          />
        </motion.div>

        {/* ── Bottom vignette ── */}
        <div
          className="absolute inset-x-0 bottom-0 h-[22%] pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, var(--hero-card) 0%, transparent 100%)" }}
        />

        {/* ── Subtle radial glow behind headline ── */}
        <div
          className="absolute inset-x-0 top-0 h-[55%] pointer-events-none z-[5]"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 20%, oklch(0.96 0.003 85 / 0.55) 0%, transparent 70%)" }}
        />

        {/* ── Content ── */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-20 text-center px-4 sm:px-8 pt-10 sm:pt-14 pb-[54%] sm:pb-[46%] md:pb-[40%]"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/70 backdrop-blur-sm px-3 py-1 text-[11px] sm:text-[12px] font-medium text-muted-foreground"
          >
            <motion.span
              animate={{ rotate: [0, 20, -10, 0] }}
              transition={{ delay: 1, duration: 1.2, repeat: Infinity, repeatDelay: 4 }}
            >
              ✦
            </motion.span>
            +100K active users
          </motion.div>

          {/* Headline */}
          <h1
            className="mt-3 sm:mt-4 font-sans font-semibold text-foreground text-[36px] sm:text-[52px] md:text-[60px] leading-[1.03] tracking-[-0.03em]"
          >
            <Words words={line1} delay={0.28} />
            <br />
            <Words words={line2} delay={0.28 + line1.length * 0.055} />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5, ease: "easeOut" }}
            className="mt-3 mx-auto max-w-[260px] sm:max-w-[320px] text-[13px] sm:text-[14px] leading-[1.7] text-muted-foreground"
          >
            Combine note-taking, idea tracking, and daily planning in
            one smart notebook — ready whenever inspiration hits.
          </motion.p>

          {/* Toolbar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex justify-center"
          >
            <ToolbarMockup />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.12 } } }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } } }}
              whileHover={{ scale: 1.04, boxShadow: "0 4px 18px rgba(0,0,0,0.22)" }}
              whileTap={{ scale: 0.97 }}
              href="#download"
              className="rounded-full bg-foreground text-background text-[13px] sm:text-[14px] font-medium px-5 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.22)] transition-shadow"
            >
              Download for Playstore
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } } }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#trial"
              className="rounded-full border border-[#C4C3BD]/80 bg-white/40 backdrop-blur-sm text-foreground text-[13px] sm:text-[14px] font-medium px-5 py-2.5 hover:bg-white/65 transition-colors"
            >
              Start Free Trial →
            </motion.a>
          </motion.div>
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
          initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + i * 0.06,
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.18em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
