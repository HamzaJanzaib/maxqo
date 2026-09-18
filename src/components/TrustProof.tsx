import React from 'react';
import { Dumbbell, Flame, Activity, Zap, Compass, Trophy } from 'lucide-react';

export const TrustProof: React.FC = () => {
  const logos = [
    { name: 'Apex Performance Gym', icon: Dumbbell, tag: 'APEX' },
    { name: 'Iron & Oak Fitness Studio', icon: Trophy, tag: 'IRON & OAK' },
    { name: 'Solstice Yoga Collective', icon: Compass, tag: 'SOLSTICE' },
    { name: 'District Boxing Club', icon: Flame, tag: 'DISTRICT' },
    { name: 'Forge Athletics', icon: Activity, tag: 'FORGE' },
    { name: 'Momentum Barre', icon: Zap, tag: 'MOMENTUM' }
  ];

  return (
    <section className="py-10 sm:py-12 border-y border-slate-200/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header label */}
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
            Trusted by 2,000+ fitness businesses across the country
          </p>
        </div>

        {/* 6 Understated Fictional Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center mb-10 opacity-75 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors py-2 px-3 rounded-lg"
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                <span className="text-xs sm:text-sm font-extrabold tracking-wider font-mono">
                  {logo.tag}
                </span>
              </div>
            );
          })}
        </div>

        {/* 3 Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100 max-w-4xl mx-auto text-center">
          <div className="px-4 py-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              2,000+
            </div>
            <div className="text-sm font-medium text-slate-600 mt-1">
              Fitness businesses
            </div>
          </div>

          <div className="px-4 py-3 md:border-x border-slate-200/80">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              40+
            </div>
            <div className="text-sm font-medium text-slate-600 mt-1">
              Built-in reports
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              99.9%
            </div>
            <div className="text-sm font-medium text-slate-600 mt-1">
              Platform uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
