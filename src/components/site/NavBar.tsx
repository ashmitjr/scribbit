import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/85 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-foreground text-background font-serif text-sm">N</span>
          <span className="font-medium text-foreground">Scribbit</span>
        </a>
        <a
          href="#download"
          className="inline-flex items-center rounded-full bg-foreground text-background text-[13px] font-medium px-5 py-2 hover:opacity-90 transition"
        >
          Download for Playform
        </a>
      </div>
    </motion.header>
  );
}
