import { ToolbarMockup } from "./ToolbarMockup";

export function EditorMockup() {
  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      <div className="flex items-center gap-1 px-3 pt-3">
        <div className="px-3 py-1.5 text-xs rounded-md bg-muted text-foreground">Document</div>
        <div className="px-3 py-1.5 text-xs rounded-md text-muted-foreground">Draft</div>
      </div>
      <div className="px-4 pt-3">
        <ToolbarMockup className="!shadow-none border-border/70" />
      </div>
      <div className="p-6 space-y-3 text-[13px] leading-relaxed text-muted-foreground">
        <p>
          Haurem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.
        </p>
        <p>
          Haurem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis{" "}
          <span className="bg-yellow-200/60 text-foreground rounded px-1">Curabitur ut bibendum lorem</span>.
          Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <p>
          Haurem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis quam ipsum. Praesent auctor purus quis tellus scelerisque,
          ac scelerisque erat venenatis. Mauris condimentum.
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <span className="text-[11px] text-muted-foreground rounded-full border border-border px-2 py-0.5">in summary</span>
        <button className="text-[12px] rounded-md bg-foreground text-background px-3 py-1.5">Save</button>
      </div>
    </div>
  );
}
