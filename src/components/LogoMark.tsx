// Inline SVG logo mark for BERTNA48 — no external URL dependency
interface LogoMarkProps {
  size?: number;
  className?: string;
  inverted?: boolean; // true = white text on dark bg (footer)
}

export default function LogoMark({ size = 40, className = '', inverted = false }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background square */}
      <rect width="40" height="40" fill={inverted ? '#ffffff' : '#0d1c32'} />
      {/* Gold accent bar top */}
      <rect x="0" y="0" width="40" height="4" fill="#fcd400" />
      {/* Letter B */}
      <text
        x="4"
        y="27"
        fontFamily="Montserrat, sans-serif"
        fontWeight="900"
        fontSize="15"
        fill={inverted ? '#0d1c32' : '#ffffff'}
      >
        B
      </text>
      {/* Number 48 in gold */}
      <text
        x="15"
        y="27"
        fontFamily="Montserrat, sans-serif"
        fontWeight="900"
        fontSize="15"
        fill="#fcd400"
      >
        48
      </text>
      {/* Small tagline */}
      <text
        x="4"
        y="35"
        fontFamily="Montserrat, sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="1"
        fill={inverted ? '#0d1c32' : '#fcd400'}
        opacity="0.7"
      >
        AGENCE
      </text>
    </svg>
  );
}
