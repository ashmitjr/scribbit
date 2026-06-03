import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Circle,
  Italic,
  Underline,
} from "lucide-react";

export function EditorMockup() {
  return (
    <div className="rounded-2xl bg-card border border-border/70 shadow-card overflow-hidden">
      {/* Tabs */}
      <div className="flex items-center gap-6 px-5 sm:px-6 pt-4">
        <button className="relative pb-3 text-[13px] sm:text-[14px] font-medium text-foreground">
          Document
          <span className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full bg-foreground" />
        </button>
        <button className="pb-3 text-[13px] sm:text-[14px] text-muted-foreground/70">
          Draft
        </button>
      </div>
      <div className="h-px bg-border/70" />

      {/* Inline toolbar */}
      <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 overflow-x-auto scrollbar-hide">
        <span className="text-[12px] sm:text-[13px] text-muted-foreground pr-2 shrink-0">
          Style 01
        </span>
        <span className="w-px h-4 bg-border shrink-0" />
        <ToolBtn><Bold size={14} strokeWidth={2.4} /></ToolBtn>
        <ToolBtn><Italic size={14} strokeWidth={2.4} /></ToolBtn>
        <ToolBtn><Underline size={14} strokeWidth={2.4} /></ToolBtn>
        <span className="w-px h-4 bg-border shrink-0" />
        <ToolBtn><AlignLeft size={14} strokeWidth={2.2} /></ToolBtn>
        <ToolBtn><AlignCenter size={14} strokeWidth={2.2} /></ToolBtn>
        <ToolBtn><AlignRight size={14} strokeWidth={2.2} /></ToolBtn>
        <span className="w-px h-4 bg-border shrink-0" />
        <Circle size={14} className="text-foreground fill-foreground shrink-0" />
        <Circle size={14} className="text-foreground/60 shrink-0" />
      </div>
      <div className="h-px bg-border/70" />

      {/* Body */}
      <div className="px-5 sm:px-6 py-5 sm:py-6 space-y-3.5 text-[13px] sm:text-[14px] leading-[1.65] text-foreground/75">
        <p>
          Daily Standup Notes: shipped the onboarding checklist, reviewed the
          sync edge cases, and queued follow-up tasks for the mobile polish
          pass.
        </p>
        <p>
          Project Brainstorming: group capture around three themes: faster note
          entry, clearer notebook structure, and{" "}
          <span className="bg-yellow-200/70 text-foreground rounded px-1.5 py-0.5">
            one-tap search from anywhere
          </span>
          .
        </p>
        <p>
          Meeting Minutes: confirm launch timeline by Friday, assign import
          testing to Maya, and share the revised pricing copy with the team
          before review.
        </p>
      </div>

      {/* Footer */}
      <div className="h-px bg-border/70" />
      <div className="flex items-center justify-between px-5 sm:px-6 py-3.5">
        <span className="text-[12px] sm:text-[13px] text-muted-foreground">
          in summary
        </span>
        <button className="rounded-full bg-foreground text-background text-[12px] sm:text-[13px] font-medium px-5 py-2 shadow-sm hover:opacity-90 transition-opacity">
          Save
        </button>
      </div>
    </div>
  );
}

function ToolBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="grid place-items-center w-7 h-7 rounded-md text-foreground/70 hover:bg-muted shrink-0">
      {children}
    </button>
  );
}
