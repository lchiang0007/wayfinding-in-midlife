import logoUrl from "@/assets/wayfinding-cycling-logo.png";

export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
 
  <svg viewBox="0 0 48 32" className={className} aria-hidden="true">
      <path d="M0 32 L14 10 L22 22 Z" fill="var(--marigold)" />
      <path d="M10 32 L26 2 L42 32 Z" fill="var(--terracotta)" />
      <path d="M30 32 L39 16 L48 32 Z" fill="var(--olive)" />
  </svg>
    

  );
}

export function Logo() {
  return (
    <img
      src={logoUrl}
      alt="Wayfinding Cycling"
      width={1876}
      height={593}
      className="h-11 w-auto md:h-12"
    />
  );
}
