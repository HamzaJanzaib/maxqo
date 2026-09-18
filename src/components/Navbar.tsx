import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenLogin: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenLogin, onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 flex items-center justify-center text-white shadow-xs group-hover:shadow-indigo-500/25 transition-all">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <path d="M4 10h16M4 14h16M7 6v12M17 6v12" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Gymlane
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-indigo-600 mt-0.5">
                Gym Software
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => scrollToSection('product')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              Pricing
              <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                From $79/mo
              </span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
            >
              Resources
            </button>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              id="nav-login-btn"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-colors cursor-pointer"
            >
              Log in
            </button>
            <button
              onClick={onOpenTrial}
              id="nav-trial-btn"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-xs hover:shadow-indigo-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenTrial}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-md"
            >
              Free trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => scrollToSection('product')}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Product Tour</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Features</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span>Pricing</span>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                  $79/mo
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Customer Reviews (4.9/5)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="w-full text-left px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Resources & FAQs</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-indigo-600 active:bg-indigo-700 rounded-xl shadow-xs flex items-center justify-center gap-2"
            >
              <span>Start your free trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 px-4 text-center font-semibold text-slate-700 bg-slate-100 active:bg-slate-200 rounded-xl text-sm"
            >
              Watch 2-minute demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2 text-center text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Log in to staff portal
            </button>
            <p className="text-center text-xs text-slate-500 pt-1 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              14-day free trial · No credit card required
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
