import React from 'react';
import { motion, type MotionProps } from 'motion/react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & MotionProps;

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  y = 24,
  ...rest
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const PageHero: React.FC<{
  eyebrow: string;
  title: string;
  description: string;
}> = ({ eyebrow, title, description }) => (
  <section className="relative overflow-hidden bg-ink text-white pt-28 sm:pt-32 pb-12 sm:pb-16 texture-bg">
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 85% 15%, rgba(0,194,168,0.2), transparent 55%), radial-gradient(ellipse 40% 50% at 5% 90%, rgba(0,194,168,0.08), transparent 50%), linear-gradient(160deg, #0B0F14 0%, #151B24 50%, #0B0F14 100%)',
      }}
    />
    <div className="absolute inset-0 texture-noise opacity-[0.35]" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-semibold tracking-wide uppercase text-teal mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="mt-4 text-lg text-white/65 max-w-2xl leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  </section>
);
