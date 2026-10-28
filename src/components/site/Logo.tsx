// Piste B « Ligne Claire » : un cap (deux lignes orthogonales) traversé par une trajectoire qui finit sur un point.
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path d="M6 4v22h22" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square" />
      <path d="M6 26 22 10" stroke="var(--signal)" strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="24.5" cy="7.5" r="3" fill="var(--signal)" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight">Ligne Claire</span>
    </span>
  );
}
