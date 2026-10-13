import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { customers, type CustomerStory } from '../data/customers';

export const CustomerDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CustomerStory>(customers[0]);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      <div className="lg:col-span-5" ref={wrapRef}>
        <label className="block text-sm font-medium text-ink mb-2">Choose a customer</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="listbox"
            className="w-full flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3.5 text-left shadow-sm hover:border-ink/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 transition-colors"
          >
            <span className="flex items-center gap-3 min-w-0">
              <img
                src={selected.avatar}
                alt=""
                className="h-10 w-10 rounded-full object-cover shrink-0"
              />
              <span className="min-w-0">
                <span className="block font-semibold text-ink truncate">{selected.company}</span>
                <span className="block text-xs text-muted truncate">
                  {selected.name} · {selected.service}
                </span>
              </span>
            </span>
            <ChevronDown
              size={18}
              className={`text-muted shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                role="listbox"
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="absolute z-20 mt-2 w-full rounded-xl border border-line bg-white shadow-lg overflow-hidden"
              >
                {customers.map((c) => {
                  const active = c.id === selected.id;
                  return (
                    <li key={c.id} role="option" aria-selected={active}>
                      <button
                        type="button"
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          active ? 'bg-paper-dim' : 'hover:bg-paper'
                        }`}
                        onClick={() => {
                          setSelected(c);
                          setOpen(false);
                        }}
                      >
                        <img
                          src={c.avatar}
                          alt=""
                          className="h-9 w-9 rounded-full object-cover shrink-0"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink truncate">
                            {c.company}
                          </span>
                          <span className="block text-xs text-muted truncate">{c.service}</span>
                        </span>
                        {active && <Check size={16} className="text-teal-dark shrink-0" />}
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {customers.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold border transition-all ${
                c.id === selected.id
                  ? 'bg-ink text-white border-ink scale-105'
                  : 'bg-white text-ink border-line hover:border-ink/30'
              }`}
            >
              {c.logoLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="relative rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm overflow-hidden"
          >
            <div
              className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-teal/10 blur-2xl"
              aria-hidden="true"
            />
            <Quote className="text-teal mb-4" size={28} />
            <p className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug relative">
              “{selected.quote}”
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative">
              <div className="flex items-center gap-3">
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-teal/30"
                />
                <div>
                  <cite className="not-italic font-semibold text-ink block">{selected.name}</cite>
                  <p className="text-sm text-muted">
                    {selected.role}, {selected.company}
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-paper-dim border border-line px-4 py-2.5">
                <p className="text-[10px] uppercase tracking-wider font-bold text-muted">Result</p>
                <p className="text-sm font-semibold text-teal-dark">{selected.result}</p>
              </div>
            </div>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </div>
  );
};
