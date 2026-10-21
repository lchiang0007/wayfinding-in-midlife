import logoUrl from "@/assets/wayfinding-cycling-logo.png";

export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
  <!--  <svg viewBox="0 0 48 32" className={className} aria-hidden="true">
      <path d="M0 32 L14 10 L22 22 Z" fill="var(--marigold)" />
      <path d="M10 32 L26 2 L42 32 Z" fill="var(--terracotta)" />
      <path d="M30 32 L39 16 L48 32 Z" fill="var(--olive)" />
    </svg> -->
    
<svg viewBox="0 0 48 32" className={className} aria-hidden="true">
   <g transform="translate(-128 -1228)">
    <text class="deep-green" font-family="Montserrat,Montserrat_MSFontService,sans-serif" font-weight="700" font-size="69" transform="matrix(1 0 0 1 1102.21 1808)">E</text>

    <path d="M345.152 1907C288.176 1716.05 396.85 1515.09 587.883 1458.14 778.916 1401.19 979.967 1509.82 1036.94 1700.77 1057.02 1768.05 1057.02 1839.72 1036.94 1907" class="deep-green-stroke" stroke-width="21.5853" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/>

    <path d="M433.5 1553.5 395.5 1516.5" class="deep-green-stroke" stroke-width="9.25075" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/>

    <path d="M949.5 1553.5 987.5 1516.5" class="deep-green-stroke" stroke-width="9.25075" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/>

    <path d="M521 1666.04 676.541 1347 859 1759.95 783.557 1829 675.464 1610.08 593.521 1737.01C558.759 1737.01 594.216 1737.01 521 1666.04Z" class="terracotta" fill-rule="evenodd"/>

    <path d="M237 1907 444.128 1564 592 1738.09 528.878 1808.31 444.128 1708.06 316.892 1907 237 1907Z" class="marigold" fill-rule="evenodd"/>

    <path d="M1144 1907 909.928 1564 760 1769.56 786.977 1828.91 909.928 1708.06 1053.72 1907 1144 1907Z" class="olive" fill-rule="evenodd"/>

    <path d="M302.5 1907.5 425.146 1763.41 505.742 1838.88 652.917 1684.5 786.076 1845.75 905.217 1729.1 1010.34 1838.88 1143.5 1907.5Z" class="mountain-ridge" stroke-width="15.418" stroke-linejoin="round" stroke-miterlimit="10" fill-rule="evenodd"/>

    <text class="deep-green" font-family="Montserrat,Montserrat_MSFontService,sans-serif" font-weight="700" font-size="69" transform="matrix(1 0 0 1 646.621 1316)">N</text>

    <text class="deep-green" font-family="Montserrat,Montserrat_MSFontService,sans-serif" font-weight="700" font-size="69" transform="matrix(1 0 0 1 170.207 1828)">W</text>

    <!-- a tiny comment here to test the synch with lovable -->
  </g> 
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
