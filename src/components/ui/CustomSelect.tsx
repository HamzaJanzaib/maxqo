import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[] | string[];
  placeholder?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

function normalizeOptions(options: SelectOption[] | string[]): SelectOption[] {
  return options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  error,
  className = '',
  required,
}) => {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const autoId = useId();
  const selectId = id ?? autoId;
  const listId = `${selectId}-listbox`;
  const opts = useMemo(() => normalizeOptions(options), [options]);
  const selected = opts.find((o) => o.value === value);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    if (!open) return;
    const idx = opts.findIndex((o) => o.value === value);
    setHighlight(idx >= 0 ? idx : 0);
  }, [open, value, opts]);

  useEffect(() => {
    if (!open || highlight < 0 || !listRef.current) return;
    const el = listRef.current.children[highlight] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest' });
  }, [highlight, open]);

  const pick = (next: string) => {
    onChange(next);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else if (highlight >= 0 && opts[highlight]) {
        pick(opts[highlight].value);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) setOpen(true);
      else setHighlight((h) => Math.min(h + 1, opts.length - 1));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) setOpen(true);
      else setHighlight((h) => Math.max(h - 1, 0));
    }
  };

  return (
    <div className={`relative ${className}`} ref={rootRef}>
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-ink mb-1.5">
          {label}
          {required ? ' *' : ''}
        </label>
      )}
      <button
        id={selectId}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-haspopup="listbox"
        aria-required={required}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className={`w-full flex items-center justify-between gap-2 rounded-lg border bg-white px-3.5 py-2.5 text-sm text-left cursor-pointer transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 ${
          open
            ? 'border-teal shadow-sm ring-2 ring-teal/25'
            : error
              ? 'border-red-400'
              : 'border-line hover:border-ink/30'
        }`}
      >
        <span className={`truncate ${selected ? 'text-ink' : 'text-muted/80'}`}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180 text-teal-dark' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            ref={listRef}
            role="listbox"
            aria-labelledby={selectId}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute z-40 mt-1.5 w-full max-h-60 overflow-auto rounded-xl border border-line bg-white py-1.5 shadow-xl shadow-ink/10"
          >
            <li role="option" aria-selected={!value}>
              <button
                type="button"
                className={`w-full flex items-center gap-2 px-3.5 py-2.5 text-sm text-left transition-colors ${
                  !value ? 'bg-paper-dim text-ink font-medium' : 'text-muted hover:bg-paper'
                } ${highlight === -1 ? 'bg-paper' : ''}`}
                onClick={() => pick('')}
                onMouseEnter={() => setHighlight(-1)}
              >
                <span className="w-4 shrink-0 flex justify-center">
                  {!value && <Check size={14} className="text-teal-dark" />}
                </span>
                {placeholder}
              </button>
            </li>
            {opts.map((opt, i) => {
              const active = opt.value === value;
              const focused = highlight === i;
              return (
                <li key={opt.value} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className={`w-full flex items-center gap-2 px-3.5 py-2.5 text-sm text-left transition-colors ${
                      active
                        ? 'bg-ink text-white'
                        : focused
                          ? 'bg-paper-dim text-ink'
                          : 'text-ink hover:bg-paper'
                    }`}
                    onClick={() => pick(opt.value)}
                    onMouseEnter={() => setHighlight(i)}
                  >
                    <span className="w-4 shrink-0 flex justify-center">
                      {active && (
                        <Check size={14} className={active ? 'text-teal' : 'text-teal-dark'} />
                      )}
                    </span>
                    {opt.label}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};
