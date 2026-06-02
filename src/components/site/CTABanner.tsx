import { motion } from "framer-motion";
import { useRef, type MouseEvent } from "react";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-[oklch(0.88_0.004_85)] border border-border overflow-hidden px-8 sm:px-14 py-12 sm:py-16 text-center"
        style={{
          backgroundImage:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(0,0,0,0.03), transparent 70%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-12 -bottom-10 w-40 h-40 rounded-full bg-border/50 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 -top-8 w-32 h-32 rounded-full bg-border/40 blur-2xl" />

        <h2 className="relative font-serif text-[28px] sm:text-[38px] md:text-[42px] leading-tight text-foreground">
          How You Take Notes?
        </h2>
        <p className="relative mt-3 text-[13px] sm:text-[15px] text-muted-foreground max-w-sm mx-auto leading-relaxed">
          Start Using Notely To Capture Your Thoughts Instantly And Keep Them Organised Without Worrying.
        </p>

        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#download"
            className="rounded-full bg-foreground text-background text-[13px] sm:text-[14px] font-medium px-5 sm:px-6 py-2.5 hover:opacity-90 transition shadow-sm"
          >
            Download for Free →
          </a>
          <a
            href="#start"
            className="rounded-full border border-border text-foreground text-[13px] sm:text-[14px] font-medium px-5 sm:px-6 py-2.5 hover:bg-foreground/5 transition"
          >
            Get Started Free →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
