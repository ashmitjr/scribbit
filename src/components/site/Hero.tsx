import { motion } from "framer-motion";
import { ToolbarMockup } from "./ToolbarMockup";
import mountain from "@/assets/mountain-hero.jpg";

const line1 = "Ideas. Notes. Clarity.".split(" ");
const line2 = "Wherever your mind goes.".split(" ");

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[12px] text-muted-foreground"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/80" />
          +100K active users
        </motion.div>

        <h1 className="mt-6 font-serif text-foreground text-[40px] sm:text-[56px] leading-[1.05]">
          <Words words={line1} delay={0.2} />
          <br />
          <Words words={line2} delay={0.2 + line1.length * 0.07} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="mt-5 mx-auto max-w-md text-[15px] leading-relaxed text-muted-foreground"
        >
          Combine note-taking, idea tracking, and daily planning in one smart notebook — ready whenever inspiration hits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#download" className="rounded-full bg-foreground text-background text-sm font-medium px-6 py-2.5 hover:opacity-90 transition">
            Download for Playform
          </a>
          <a href="#trial" className="rounded-full border border-foreground text-foreground text-sm font-medium px-6 py-2.5 hover:bg-foreground hover:text-background transition">
            Start Free Trial →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <ToolbarMockup />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1.0, ease: "easeOut" }}
        className="mt-12 max-w-5xl mx-auto"
      >
        <img
          src={mountain}
          alt="Mountain landscape"
          className="w-full rounded-2xl object-cover aspect-[16/7]"
        />
      </motion.div>
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
          transition={{ delay: delay + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {w}
        </motion.span>
      ))}
    </>
  );
}
