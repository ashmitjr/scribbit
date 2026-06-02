interface NoteLogoProps {
  size?: number;
  className?: string;
}

export function NoteLogo({ size = 32, className = "" }: NoteLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Notely logo"
    >
      <rect width="36" height="36" rx="9" fill="#18181A" />
      <path
        d="M10 26 L10 10 L22 26 L22 10"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="27" cy="10" r="2" fill="white" opacity="0.45" />
    </svg>
  );
}

export function NoteLogoFull({ height = 28, className = "" }: { height?: number; className?: string }) {
  const w = Math.round(height * (36 / 36));
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <NoteLogo size={height} />
      <span
        style={{ fontSize: Math.round(height * 0.52), lineHeight: 1 }}
        className="font-semibold text-foreground tracking-[-0.02em]"
      >
        Notely
      </span>
    </span>
  );
}
