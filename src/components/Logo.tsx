export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" className={className} aria-hidden="true">
      <path d="M0 32 L14 10 L22 22 Z" fill="#65734B" />
      <path d="M10 32 L26 2 L42 32 Z" fill="#C85D3A" />
      <path d="M26 2 L31 11.5 L26 9 L21 11.5 Z" fill="#FFF8ED" />
      <path d="M30 32 L39 16 L48 32 Z" fill="#E8A33D" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none text-foreground">
        <span className="text-sm font-bold tracking-[0.18em]">WAYFINDING</span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.42em] text-sand">CYCLING</span>
      </span>
    </span>
  );
}
