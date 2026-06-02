import { motion } from "framer-motion";
import { Circle, X } from "lucide-react";

const items = [
  { label: "$0 Fee", icon: null },
  { label: "100% Legal Compliance", icon: Circle },
  { label: "80%+ Reduced Abuse", icon: Circle },
  { label: "Cancel", icon: X },
];

export function TrustBar() {
  return (
    <section className="px-4 py-5 overflow-hidden">
      <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex items-center gap-1.5 text-[13px] text-[#9E9E99] shrink-0"
          >
            {it.icon ? <it.icon size={12} strokeWidth={1.5} /> : null}
            {it.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
