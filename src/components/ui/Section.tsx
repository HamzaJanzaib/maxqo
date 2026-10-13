import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  compact?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  dark = false,
  compact = false,
}) => (
  <section
    id={id}
    className={`${compact ? 'py-10 sm:py-14' : 'py-12 sm:py-16'} ${
      dark ? 'bg-ink text-white' : 'bg-paper text-ink'
    } ${className}`}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}> = ({ eyebrow, title, description, light, className = '' }) => (
  <div className={`max-w-2xl mb-8 sm:mb-10 ${className}`}>
    {eyebrow && (
      <p
        className={`text-sm font-semibold tracking-wide uppercase mb-2 ${
          light ? 'text-teal' : 'text-teal-dark'
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`font-display text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-ink'
      }`}
    >
      {title}
    </h2>
    {description && (
      <p
        className={`mt-3 text-base sm:text-lg leading-relaxed ${
          light ? 'text-white/70' : 'text-muted'
        }`}
      >
        {description}
      </p>
    )}
  </div>
);
