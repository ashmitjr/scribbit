import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NoteLogoFull } from "./NoteLogo";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/90 border-b border-border/50 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 sm:h-16">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <NoteLogoFull height={28} />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3.5 py-1.5 rounded-md text-[14px] text-muted-foreground font-medium hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#signin"
              className="px-4 py-1.5 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </a>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1 rounded-full bg-foreground text-background text-[13px] font-semibold px-4 py-2 shadow-sm hover:opacity-90 transition-opacity"
            >
              Get started
              <span className="opacity-60 ml-0.5">→</span>
            </motion.a>
          </div>

          {/* Mobile: Get started + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#download"
              className="rounded-full bg-foreground text-background text-[12px] font-semibold px-3.5 py-1.5"
            >
              Get started
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 top-14 z-40 bg-background/98 backdrop-blur-md flex flex-col px-6 py-8 gap-1 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[18px] font-semibold text-foreground py-3 border-b border-border/50 tracking-[-0.01em]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#signin"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-border text-foreground text-[14px] font-medium py-3 text-center hover:bg-foreground/5 transition-colors"
              >
                Sign in
              </a>
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-foreground text-background text-[14px] font-semibold py-3 text-center"
              >
                Download free →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
