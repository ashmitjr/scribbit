import { motion } from "framer-motion";
import { ShieldCheck, WifiOff, Smartphone, ArrowDownToLine, RefreshCw, Sparkles } from "lucide-react";

const items = [
  { icon: Sparkles,        label: "Free plan, forever" },
  { icon: WifiOff,         label: "Works offline" },
  { icon: ShieldCheck,     label: "End-to-end encrypted" },
  { icon: Smartphone,      label: "iOS · Android · Web · Desktop" },
  { icon: ArrowDownToLine, label: "Import from Notion or Evernote" },
  { icon: RefreshCw,       label: "Instant cross-device sync" },
];

export function TrustBar() {
  return (
    <section className="py-8 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
        className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2.5"
      >
        {items.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 6 },
              show: {
                opacity: 1, scale: 1, y: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-border/80 transition-all duration-200"
          >
            <span className="grid place-items-center w-[22px] h-[22px] rounded-md bg-secondary border border-border shrink-0">
              <Icon size={11} strokeWidth={1.8} className="text-foreground/60" />
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-foreground/70 whitespace-nowrap">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
