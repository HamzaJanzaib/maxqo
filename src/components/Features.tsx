import React from 'react';
import {
  CalendarDays,
  Users,
  CreditCard,
  QrCode,
  BarChart3,
  Boxes,
  ArrowRight
} from 'lucide-react';

interface FeaturesProps {
  onOpenTrial: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenTrial }) => {
  const features = [
    {
      id: 'scheduling',
      title: 'Class Scheduling',
      description: 'Build recurring schedules, manage capacity, and automate waitlists.',
      icon: CalendarDays,
      metric: 'Auto waitlist fills',
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    },
    {
      id: 'membership',
      title: 'Membership Management',
      description: 'Manage plans, renewals, freezes and attendance from one member profile.',
      icon: Users,
      metric: '1-click plan freeze',
      iconBg: 'bg-violet-50 text-violet-600 border-violet-100'
    },
    {
      id: 'billing',
      title: 'Billing & Payments',
      description: 'Automate recurring billing with card and ACH support.',
      icon: CreditCard,
      metric: 'Card & ACH auto-pay',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      id: 'checkin',
      title: 'Check-in System',
      description: 'Let members check in from the front desk, kiosk or mobile app.',
      icon: QrCode,
      metric: '0.8s scan time',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      id: 'reporting',
      title: 'Reporting',
      description: 'Track revenue, retention and attendance with built-in reports.',
      icon: BarChart3,
      metric: '40+ exportable reports',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Connect Gymlane with tools such as QuickBooks, Mailchimp and Zapier.',
      icon: Boxes,
      metric: 'Syncs in real-time',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Built for independent gyms and fitness studios
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Every feature is purpose-built to streamline your front desk, eliminate manual spreadsheets, and give members a seamless experience.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-white p-7 border border-slate-200/90 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${feature.iconBg} transition-transform group-hover:scale-105`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      {feature.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Included in all plans</span>
                  <span className="text-indigo-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-CTA banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 inline-flex flex-col sm:flex-row items-center gap-2">
            <span>Want to see how it fits your 1–3 location studio?</span>
            <button
              onClick={onOpenTrial}
              className="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4 cursor-pointer"
            >
              Start your 14-day free trial today →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
