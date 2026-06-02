import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, Search } from "lucide-react";

const chips = [
  { icon: Zap,    label: "Instant capture" },
  { icon: Brain,  label: "Smart organize" },
  { icon: Search, label: "Find anything" },
];

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const gx = useTransform(mx, (v) => `${v}px`);
  const gy = useTransform(my, (v) => `${v}px`);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-6 py-12 sm:py-16">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden bg-foreground text-background"
      >
        {/* Moving spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(600px circle at ${gx} ${gy}, oklch(1 0 0 / 0.04), transparent 55%)`,
          }}
        />

        {/* Decorative grid lines */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -left-20 -bottom-16 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -top-12 w-48 h-48 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 px-8 sm:px-14 lg:px-20 py-14 sm:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 text-center lg:text-left">

          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] sm:text-[12px] font-medium text-white/60 tracking-wide uppercase"
            >
              Notely for thinkers
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-sans font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.02] tracking-[-0.03em] text-white"
            >
              Still losing your
              <br />
              <span className="text-white/50">best thoughts?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="mt-4 text-[14px] sm:text-[15px] text-white/55 leading-relaxed max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
              Thousands of ideas live and die in your head every day.
              Notely catches every one before it disappears.
            </motion.p>

            {/* Feature chips */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.38 } } }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {chips.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.45 } } }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/7 px-3 py-1.5 text-[12px] font-medium text-white/70"
                >
                  <Icon size={12} className="text-white/50" />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 w-full max-w-[300px] sm:max-w-[320px] rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 flex flex-col items-center gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-white grid place-items-center shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
              <span className="font-sans font-bold text-foreground text-[18px]">N</span>
            </div>

            <div className="text-center">
              <p className="font-semibold text-[16px] text-white tracking-[-0.01em]">Start free today</p>
              <p className="mt-1 text-[13px] text-white/50">No card required</p>
            </div>

            <motion.a
              href="#download"
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full bg-white text-foreground text-[14px] font-semibold py-3 text-center tracking-[-0.01em] transition-shadow"
            >
              Download Notely →
            </motion.a>

            <motion.a
              href="#trial"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-full border border-white/15 text-white/70 text-[13px] font-medium py-2.5 text-center hover:bg-white/5 transition-colors"
            >
              Try in browser
            </motion.a>

            <p className="text-[11px] text-white/30 text-center leading-relaxed">
              Works on iOS, Android, Web and Desktop.
              <br />Free plan, always.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
