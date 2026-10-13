import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light';

interface ButtonBaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-teal text-ink hover:bg-teal-dark font-semibold shadow-sm',
  secondary:
    'bg-ink text-white hover:bg-ink-soft font-semibold',
  ghost:
    'bg-transparent text-ink hover:bg-paper-dim font-medium',
  'outline-light':
    'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5 font-medium',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm cursor-pointer transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 hover:-translate-y-0.5 active:translate-y-0';

export const Button: React.FC<
  ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant = 'primary', className = '', children, ...props }) => (
  <button className={`${base} ${variants[variant]} ${className}`} {...props}>
    {children}
  </button>
);

export const ButtonLink: React.FC<
  ButtonBaseProps & { to: string }
> = ({ variant = 'primary', className = '', children, to }) => (
  <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
    {children}
  </Link>
);
