import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    price: "$0.00",
    label: "Free",
    features: [
      "Basic notes & notebooks",
      "Standard search & tagging",
      "Single device",
      "Community support",
    ],
    highlight: false,
    cta: "Upgrade to premium",
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
    cta: "Upgrade to premium",
  },
  {
    price: "$149.00",
    label: "Vision Pro (Most Popular)",
    features: [
      "Everything in Pro",
      "Team collaboration & shared workspaces",
      "Premium access & integrations",
      "Priority support",
    ],
    highlight: false,
    cta: "Upgrade to premium",
  },
];

export function Pricing() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-[32px] sm:text-[40px] leading-tight">
          Choose your pricing plan
        </h2>
        <p className="mt-4 text-[14px] sm:text-[15px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Keep your notes organized, clear, and easy to find. With Scribbit, every thought flows
          into a system that adapts to your style, helping you stay focused and productive.
        </p>
      </div>

      <div className="mt-10 sm:mt-14 max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-0">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            className={`relative flex flex-col w-full sm:w-[220px] md:w-[260px] rounded-2xl border p-6 sm:p-7
              ${
                p.highlight
                  ? "bg-foreground text-background border-foreground z-10 sm:-mx-1 sm:shadow-[0_8px_40px_rgba(0,0,0,0.22)] sm:scale-[1.04]"
                  : "bg-card border-border shadow-soft sm:first:rounded-r-none sm:last:rounded-l-none"
              }`}
          >
            {p.highlight && (
              <span className="absolute top-4 right-4 rounded-full bg-background/15 border border-background/20 text-background text-[10px] font-medium px-2.5 py-1">
                Most Popular
              </span>
            )}

            <div
              className={`font-serif text-[36px] sm:text-[42px] leading-none ${p.highlight ? "text-background" : "text-foreground"}`}
            >
              {p.price}
            </div>
            <div
              className={`mt-2 text-[12px] sm:text-[13px] ${p.highlight ? "text-background/65" : "text-muted-foreground"}`}
            >
              {p.label}
            </div>

            <ul className="mt-5 sm:mt-6 space-y-2.5 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[12px] sm:text-[13px]">
                  <Check
                    size={13}
                    className={`mt-0.5 shrink-0 ${p.highlight ? "text-background/80" : "text-foreground/50"}`}
                  />
                  <span className={p.highlight ? "text-background/85" : "text-foreground/75"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 sm:mt-7 w-full rounded-lg py-2.5 text-[12px] sm:text-[13px] font-medium transition
                ${
                  p.highlight
                    ? "bg-background text-foreground hover:opacity-90"
                    : "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                }`}
            >
              {p.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
