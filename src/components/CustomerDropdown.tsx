import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { customers } from '../data/customers';

export const CustomerDropdown: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const selected = customers[index];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % customers.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, index]);

  const go = (next: number) => {
    setIndex((next + customers.length) % customers.length);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Avatar selector */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {customers.map((c, i) => {
          const active = i === index;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`group flex items-center gap-2.5 rounded-full border pl-1.5 pr-3.5 py-1.5 transition-all cursor-pointer ${
                active
                  ? 'bg-ink border-ink text-white shadow-lg shadow-ink/15 scale-[1.02]'
                  : 'bg-white border-line text-ink hover:border-ink/30 hover:shadow-sm'
              }`}
              aria-pressed={active}
            >
              <img
                src={c.avatar}
                alt=""
                className={`h-9 w-9 rounded-full object-cover ring-2 transition-all ${
                  active ? 'ring-teal' : 'ring-transparent group-hover:ring-line'
                }`}
              />
              <span className="text-left hidden sm:block">
                <span className="block text-xs font-bold leading-tight">{c.logoLabel}</span>
                <span
                  className={`block text-[10px] leading-tight ${
                    active ? 'text-white/60' : 'text-muted'
                  }`}
                >
                  {c.service}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured quote card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={selected.id}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-3xl rounded-3xl border border-line bg-white p-6 sm:p-10 shadow-xl shadow-ink/5 overflow-hidden"
          >
            <div
              className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-teal/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-ink/5 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex items-start justify-between gap-4 mb-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-teal-dark">
                <Quote size={22} />
              </span>
              <span className="rounded-full border border-line bg-paper-dim px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-muted">
                {selected.service}
              </span>
            </div>

            <p className="relative font-display text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-ink leading-snug">
              “{selected.quote}”
            </p>

            <div className="relative mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="flex items-center gap-3">
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-teal/40"
                />
                <div>
                  <cite className="not-italic font-bold text-ink block text-base">
                    {selected.name}
                  </cite>
                  <p className="text-sm text-muted">
                    {selected.role}, {selected.company}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-ink text-white px-5 py-3 min-w-[180px]">
                <p className="text-[10px] uppercase tracking-wider font-bold text-teal mb-0.5">
                  Result
                </p>
                <p className="text-sm font-semibold leading-snug">{selected.result}</p>
              </div>
            </div>
          </motion.blockquote>
        </AnimatePresence>

        {/* Nav arrows */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2 px-2">
            {customers.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`Show ${c.company}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === index ? 'w-7 bg-teal' : 'w-2 bg-line hover:bg-muted'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-ink hover:text-white hover:border-ink transition-colors cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-muted">
          {paused ? 'Paused — hover away to auto-play' : 'Auto-playing · hover to pause'}
        </p>
      </div>
    </div>
  );
};
