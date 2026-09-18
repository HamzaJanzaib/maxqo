import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles, Lock } from 'lucide-react';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 79,
      annualPrice: 63,
      memberLimit: 'Up to 150 members',
      description: 'Ideal for independent boutique studios and single-location facilities.',
      features: [
        'Up to 150 active members',
        'Unlimited class scheduling & waitlists',
        'Front-desk kiosk & QR check-in',
        'Automated recurring billing (Card & ACH)',
        'Basic financial & attendance reports',
        'Email & chat support (under 2-hour response)'
      ],
      ctaText: 'Start free trial'
    },
    {
      id: 'growth',
      name: 'Growth',
      monthlyPrice: 149,
      annualPrice: 119,
      memberLimit: 'Up to 500 members',
      description: 'Best for established fitness studios ready to automate renewals and scale.',
      isPopular: true,
      features: [
        'Up to 500 active members',
        'Everything in Starter',
        'Automated member retention & drop-off alerts',
        'Custom-branded member check-in app',
        'Advanced financial reporting & QuickBooks sync',
        'Staff role permissions & payroll tracking',
        'Priority phone & live chat support'
      ],
      ctaText: 'Start free trial'
    },
    {
      id: 'multi-location',
      name: 'Multi-Location',
      monthlyPrice: 0,
      annualPrice: 0,
      memberLimit: 'Unlimited members',
      description: 'Tailored for gym groups running 2–3 facilities with unified reporting.',
      features: [
        'Unlimited members & locations (1–3 locations)',
        'Centralized multi-location dashboard',
        'Cross-location member roaming & check-in',
        'Dedicated account onboarding specialist',
        'Custom Zapier & API webhooks',
        'Custom contract & SLA agreement'
      ],
      ctaText: 'Contact for custom quote'
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
            Simple pricing. No surprises.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6">
            Start with a 14-day free trial. No credit card required.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isGrowth = plan.isPopular;
            const price =
              billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isGrowth
                    ? 'bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100/50 -translate-y-1'
                    : 'bg-white border border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {isGrowth && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular for Studios
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                      {plan.memberLimit}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 min-h-[40px] mb-5">
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="py-4 border-y border-slate-100 mb-6">
                    {plan.id === 'multi-location' ? (
                      <div className="flex items-baseline">
                        <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                          Custom
                        </span>
                        <span className="text-xs text-slate-500 ml-2">tailored to your locations</span>
                      </div>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm font-medium text-slate-500 ml-2">
                          /month
                        </span>
                        {billingCycle === 'annual' && (
                          <span className="text-[11px] text-emerald-600 font-bold ml-2">
                            (Billed annually)
                          </span>
                        )}
                      </div>
                    )}
                    <p className="text-[11px] text-slate-500 mt-1">
                      No setup fees · Unlimited staff logins
                    </p>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Included features:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isGrowth
                        ? 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-md hover:shadow-indigo-500/25'
                        : 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-500 mt-2.5 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    14-day free trial · No credit card required
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note below pricing */}
        <div className="mt-10 text-center max-w-xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <p className="text-xs text-slate-600 font-medium flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>
              <strong className="text-slate-800">Switching from Mindbody or spreadsheets?</strong> Our team will import your members and class schedules at no extra charge during your free trial.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
