import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Circle } from "lucide-react";

export function ToolbarMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1 rounded-full bg-card border border-border shadow-soft px-2 py-1.5 ${className}`}>
      <button className="text-xs px-3 py-1 rounded-full text-muted-foreground hover:bg-muted">Style 01</button>
      <span className="w-px h-4 bg-border mx-1" />
      <IconBtn><Bold size={14} /></IconBtn>
      <IconBtn><Italic size={14} /></IconBtn>
      <IconBtn><Underline size={14} /></IconBtn>
      <span className="w-px h-4 bg-border mx-1" />
      <IconBtn><AlignLeft size={14} /></IconBtn>
      <IconBtn><AlignCenter size={14} /></IconBtn>
      <IconBtn><AlignRight size={14} /></IconBtn>
      <span className="w-px h-4 bg-border mx-1" />
      <Circle size={14} className="text-foreground fill-foreground" />
      <Circle size={14} className="text-muted-foreground" />
    </div>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="grid place-items-center w-7 h-7 rounded-full text-foreground/70 hover:bg-muted">
      {children}
    </button>
  );
}
