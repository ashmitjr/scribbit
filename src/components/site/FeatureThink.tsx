import { motion } from "framer-motion";
import { EditorMockup } from "./EditorMockup";

export function FeatureThink() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-sans font-semibold text-[30px] sm:text-[38px] md:text-[42px] leading-[1.1] max-w-xs tracking-[-0.025em]">
            Notes that work the way you think.
          </h2>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed max-w-sm">
            Notes shouldn't feel messy or scattered. With Scribbit, every thought flows
            into an organized system that adapts to your style and keeps you focused.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 w-full"
        >
          <EditorMockup />
        </motion.div>
      </div>
    </section>
  );
}
