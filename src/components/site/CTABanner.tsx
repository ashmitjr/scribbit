import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { NoteLogo } from "./NoteLogo";

const stats = [
  { value: "100K+", label: "active users" },
  { value: "4.8", label: "App Store rating" },
  { value: "Free", label: "to get started" },
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
    <section className="px-4 sm:px-6 lg:px-6 py-12 sm:py-16" id="download">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden bg-foreground"
      >
        {/* Cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(500px circle at ${gx} ${gy}, oklch(1 0 0 / 0.05), transparent 60%)`,
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative z-10 px-8 sm:px-14 lg:px-20 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-20">
            {/* Left: headline + sub */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.45 }}
                className="flex items-center gap-2 mb-5"
              >
                <NoteLogo size={22} />
                <span className="text-[12px] font-medium text-white/50 tracking-wide">Notely</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-semibold text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.02] tracking-[-0.03em] text-white"
              >
                Write now.
                <br />
                <span className="text-white/40">Find it later.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24, duration: 0.5 }}
                className="mt-5 text-[14px] sm:text-[15px] text-white/50 leading-relaxed max-w-lg"
              >
                Most note apps become digital junk drawers. Notely is the one you keep coming back
                to — because it works with how your brain already thinks, not against it.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.32 } } }}
                className="mt-8 flex flex-wrap gap-8"
              >
                {stats.map(({ value, label }) => (
                  <motion.div
                    key={label}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { ease: [0.16, 1, 0.3, 1], duration: 0.45 },
                      },
                    }}
                  >
                    <p className="font-semibold text-[22px] sm:text-[26px] text-white tracking-[-0.03em] leading-none">
                      {value}
                    </p>
                    <p className="mt-1 text-[12px] text-white/40 font-medium">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-auto shrink-0"
            >
              <div className="w-full lg:w-[280px] rounded-2xl sm:rounded-3xl border border-white/10 bg-white/6 backdrop-blur-sm p-6 sm:p-7 flex flex-col gap-4">
                <p className="font-semibold text-[15px] text-white tracking-[-0.01em] leading-snug">
                  Get Notely on your device
                </p>
                <p className="text-[13px] text-white/45 leading-relaxed -mt-1">
                  Pick a platform and you're up in under two minutes.
                </p>

                <div className="flex flex-col gap-2.5 mt-1">
                  <motion.a
                    href="#ios"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(255,255,255,0.18)" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-between rounded-xl bg-white text-foreground text-[13px] font-semibold px-4 py-3 transition-shadow"
                  >
                    <span>App Store</span>
                    <span className="text-foreground/40 text-[11px] font-normal">iOS / macOS</span>
                  </motion.a>
                  <motion.a
                    href="#android"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-between rounded-xl border border-white/12 bg-white/6 text-white text-[13px] font-medium px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span>Play Store</span>
                    <span className="text-white/35 text-[11px] font-normal">Android</span>
                  </motion.a>
                  <motion.a
                    href="#web"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-between rounded-xl border border-white/12 bg-white/6 text-white text-[13px] font-medium px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span>Use in browser</span>
                    <span className="text-white/35 text-[11px] font-normal">Any device</span>
                  </motion.a>
                </div>

                <p className="text-[11px] text-white/25 text-center pt-1">
                  No account needed to try it out
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
