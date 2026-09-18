import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="resources" className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Logo & Value Proposition */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-white"
                >
                  <path d="M4 10h16M4 14h16M7 6v12M17 6v12" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Gymlane</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              All-in-one gym management platform for independent gyms and fitness studios with 1–3 locations.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo('product')} className="hover:text-white transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Class Scheduling
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Member Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Billing & Payments
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Check-in System
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Reporting & Analytics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  Integrations
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">
                  Pricing Plans
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Company & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#company" className="hover:text-white transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-white transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Gymlane Software Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-slate-400 cursor-pointer">Security</span>
            <span className="hover:text-slate-400 cursor-pointer">SOC2 Certified Infrastructure</span>
            <span className="hover:text-slate-400 cursor-pointer">Stripe Verified Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
