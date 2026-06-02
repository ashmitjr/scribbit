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
    <section className="px-6 py-16">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto rounded-3xl bg-foreground text-background overflow-hidden p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center"
        style={{
          backgroundImage:
            "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.08), transparent 60%)",
        }}
      >
        <div>
          <h2 className="font-serif text-[36px] leading-tight text-background">How You Take Notes?</h2>
          <p className="mt-3 text-[15px] text-background/70 max-w-md">
            Start Using Notely To Capture Your Thoughts Instantly And Keep Them Organised Without Worrying.
          </p>
        </div>
        <div className="flex flex-wrap md:justify-end gap-3">
          <a href="#download" className="rounded-full bg-background text-foreground text-sm font-medium px-5 py-2.5 hover:opacity-90 transition">
            Download for Free →
          </a>
          <a href="#start" className="rounded-full border border-background/40 text-background text-sm font-medium px-5 py-2.5 hover:bg-background/10 transition">
            Get Started Free →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
