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
    <section className="py-6 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
        className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
      >
        {items.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-muted-foreground"
          >
            <Icon size={13} strokeWidth={1.6} className="shrink-0 text-foreground/40" />
            {label}
            {i < items.length - 1 && (
              <span className="ml-5 hidden sm:block w-[1px] h-3 bg-border" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
