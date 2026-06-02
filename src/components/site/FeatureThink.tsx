import { motion } from "framer-motion";
import { EditorMockup } from "./EditorMockup";

export function FeatureThink() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[40px] leading-[1.1] max-w-xs">
            Notes that work the way you think.
          </h2>
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed max-w-sm">
            Notes shouldn't feel messy or scattered. With Scribbit, every thought flows
            into an organized system that adapts to your style and keeps you focused.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <EditorMockup />
        </motion.div>
      </div>
    </section>
  );
}
