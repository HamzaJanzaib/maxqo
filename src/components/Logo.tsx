import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="Maxqo home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-ink overflow-hidden">
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
          <path
            d="M6 24V8h3.4l5.2 9.2V8H18v16h-3.4l-5.2-9.2V24H6z"
            fill="#00C2A8"
          />
          <circle cx="24" cy="10" r="3" fill="#00C2A8" className="transition-transform group-hover:scale-110 origin-center" />
        </svg>
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${textColor}`}>
        Maxqo
      </span>
    </Link>
  );
};
