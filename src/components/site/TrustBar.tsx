import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = ["$0 Fee", "100% Legal Compliance", "80%+ Reduced Abuse", "Cancel"];

export function TrustBar() {
  return (
    <div className="bg-trust border-y border-border/60">
      <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {items.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex items-center gap-2 text-[13px] text-muted-foreground"
          >
            <Check size={14} className="text-foreground/70" />
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
