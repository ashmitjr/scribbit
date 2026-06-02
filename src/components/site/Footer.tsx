import { Linkedin, Twitter } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "How It Works", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Contact", "Press"] },
  { title: "Resources", links: ["Help Center", "Updates", "Guides"] },
];

export function Footer() {
  return (
    <footer className="px-6 pt-20 pb-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-7 h-7 rounded-md bg-foreground text-background font-serif text-sm">N</span>
            <span className="font-medium">Scribbit</span>
          </div>
          <p className="mt-4 text-[14px] text-muted-foreground max-w-xs leading-relaxed">
            Your simple space to capture ideas, stay organised, and never lose a thought.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-sans text-[14px] font-semibold text-foreground">{c.title}</h4>
            <ul className="mt-4 space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[14px] text-muted-foreground hover:text-foreground hover:underline">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-14 pt-6 border-t border-border flex items-center justify-between">
        <p className="text-[13px] text-muted-foreground">© 2025 Loopout. All rights reserved.</p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={16} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
