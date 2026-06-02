import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    price: "$0.00",
    label: "Free",
    features: ["Basic notes & notebooks", "Standard search", "Single device", "Community support"],
    highlight: false,
  },
  {
    price: "$69.00",
    label: "Pro (Most Popular)",
    features: [
      "Unlimited notes & notebooks",
      "Advanced search & tagging",
      "Real-time collaboration",
      "Cloud sync across devices",
    ],
    highlight: true,
  },
  {
    price: "$149.00",
    label: "Vision Pro (Most Popular)",
    features: ["Everything in Pro", "Team workspaces", "Priority support", "Custom integrations"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-[40px] leading-tight">Choose your pricing plan</h2>
        <p className="mt-4 text-[15px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Keep your notes organized, clear, and easy to find. With Scribbit, every thought flows into a system that adapts to your style, helping you stay focused and productive.
        </p>
      </div>

      <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-3 gap-4 items-center">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={!p.highlight ? { y: -4 } : undefined}
            className={`relative rounded-2xl border p-7 ${
              p.highlight
                ? "bg-foreground text-background border-foreground md:scale-105 shadow-card"
                : "bg-card border-border shadow-soft"
            }`}
          >
            {p.highlight && (
              <span className="absolute top-4 right-4 rounded-full bg-background text-foreground text-[10px] font-medium px-2.5 py-1">
                Most Popular
              </span>
            )}
            <div className={`font-serif text-[40px] leading-none ${p.highlight ? "" : ""}`}>
              {p.price}
            </div>
            <div className={`mt-2 text-[13px] ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
              {p.label}
            </div>

            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13px]">
                  <Check size={14} className={`mt-0.5 ${p.highlight ? "text-background" : "text-foreground/60"}`} />
                  <span className={p.highlight ? "text-background/90" : "text-foreground/80"}>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-7 w-full rounded-lg py-2.5 text-[13px] font-medium transition ${
                p.highlight
                  ? "bg-background text-foreground hover:opacity-90"
                  : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              Upgrade to premium
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
