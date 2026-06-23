// Logo officiel BERTNA48 (image dorée)
import logoUrl from '../assets/logo-bertna48.jpeg';

interface LogoMarkProps {
  size?: number;
  className?: string;
  inverted?: boolean; // conservé pour compatibilité (non utilisé avec l'image)
}

export default function LogoMark({ size = 40, className = '' }: LogoMarkProps) {
  return (
    <img
      src={logoUrl}
      alt="Logo BERTNA48"
      width={size}
      height={size}
      className={`rounded-full object-cover shadow-sm ring-1 ring-[#f0c420]/40 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
