import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Code2, Cpu, Megaphone, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '../Logo';
import { ButtonLink } from '../ui/Button';
import { services } from '../../data/services';
import type { NavLink as NavLinkType } from '../../types';

const links: NavLinkType[] = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const serviceIcons = {
  web: Code2,
  software: Cpu,
  marketing: Megaphone,
  design: Palette,
};

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const onDarkHero = isHome && !scrolled && !open;
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? onDarkHero
          ? 'text-teal'
          : 'text-teal-dark'
        : onDarkHero
          ? 'text-white/80 hover:text-white'
          : 'text-ink/70 hover:text-ink'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? 'bg-paper shadow-sm'
          : scrolled
            ? 'bg-paper/95 backdrop-blur-md border-b border-line/60 shadow-sm'
            : isHome
              ? 'bg-transparent'
              : 'bg-paper/95 backdrop-blur-md border-b border-line/60'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-[4.25rem]">
        <Logo variant={onDarkHero ? 'light' : 'dark'} />

        <div className="hidden md:flex items-center gap-7">
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                location.pathname === '/services'
                  ? onDarkHero
                    ? 'text-teal'
                    : 'text-teal-dark'
                  : onDarkHero
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink/70 hover:text-ink'
              }`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[22rem]"
                >
                  <div className="rounded-2xl border border-line bg-white shadow-xl p-2 overflow-hidden">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.id as keyof typeof serviceIcons];
                      return (
                        <Link
                          key={s.id}
                          to={`/services#${s.slug}`}
                          className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-paper transition-colors group"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-teal group-hover:scale-105 transition-transform">
                            <Icon size={16} />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink">{s.title}</span>
                            <span className="block text-xs text-muted mt-0.5 leading-snug">
                              {s.tagline}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      to="/services"
                      className="mt-1 flex items-center justify-center rounded-xl bg-paper-dim px-3 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <ButtonLink
            to="/contact"
            variant="primary"
            className="!py-2 !px-4 hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            Start a project
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`md:hidden p-2 rounded-lg transition-colors ${onDarkHero ? 'text-white' : 'text-ink'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-line bg-paper overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              <p className="px-3 pt-1 pb-2 text-xs font-bold uppercase tracking-wider text-muted">
                Services
              </p>
              {services.map((s) => (
                <Link
                  key={s.id}
                  to={`/services#${s.slug}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper-dim"
                >
                  {s.title}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper-dim"
                >
                  {link.label}
                </Link>
              ))}
              <ButtonLink to="/contact" className="mt-2 w-full">
                Start a project
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
