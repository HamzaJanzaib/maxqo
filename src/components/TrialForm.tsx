import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  User,
  Mail,
  Zap,
  Clock,
  CreditCard,
  Star,
  Check,
  Smartphone,
  Calendar,
  Lock,
  RotateCcw
} from 'lucide-react';
import { TrialFormData } from '../types';

interface TrialFormProps {
  initialPlan?: string;
}

const PLAN_OPTIONS = [
  {
    name: 'Starter',
    price: '$79',
    period: '/mo',
    members: 'Up to 100 members',
    badge: 'Solo Studios'
  },
  {
    name: 'Growth',
    price: '$149',
    period: '/mo',
    members: 'Up to 300 members',
    badge: 'Most Popular'
  },
  {
    name: 'Pro',
    price: '$249',
    period: '/mo',
    members: 'Unlimited members',
    badge: 'Multi-Location'
  }
];

export const TrialForm: React.FC<TrialFormProps> = ({ initialPlan = 'Growth' }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlan);
  const [formData, setFormData] = useState<TrialFormData>({
    fullName: '',
    workEmail: '',
    gymName: ''
  });

  // Synchronize when initialPlan changes externally (e.g. from Pricing cards)
  useEffect(() => {
    if (initialPlan) {
      setSelectedPlan(initialPlan);
    }
  }, [initialPlan]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill sample demo data for quick testing
  const handleQuickFill = () => {
    setFormData({
      fullName: 'Alex Morgan',
      workEmail: 'alex@forgefitness.com',
      gymName: 'Forge Athletic Club'
    });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      setErrorMsg('Please enter a valid work email address');
      return;
    }
    if (!formData.gymName.trim()) {
      setErrorMsg('Please enter your gym or studio name');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const activePlanDetails =
    PLAN_OPTIONS.find((p) => p.name.toLowerCase() === selectedPlan.toLowerCase()) ||
    PLAN_OPTIONS[1];

  return (
    <section
      id="trial-signup"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-slate-100/60 relative overflow-hidden border-t border-slate-200/80"
    >
      {/* Subtle decorative background gradients */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Responsive Card Container */}
        <div className="bg-white rounded-3xl border border-indigo-100/80 shadow-2xl shadow-indigo-900/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Value Proposition, Trial Inclusions & Social Proof */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background ambient accents */}
              <div
                className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -left-20 -bottom-20 w-64 h-64 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Header Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/80 border border-indigo-700/60 text-indigo-300 text-xs font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Instant 14-Day Free Access</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Start running your gym smarter today.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                  Join 500+ independent gym and studio owners who replaced fragmented spreadsheets and overcomplicated tools with Gymlane.
                </p>

                {/* Plan Selection Chips */}
                <div className="mt-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                    <span>Select your starting tier</span>
                    <span className="text-indigo-400 font-normal normal-case">Change anytime</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {PLAN_OPTIONS.map((plan) => {
                      const isSelected = selectedPlan.toLowerCase() === plan.name.toLowerCase();
                      return (
                        <button
                          key={plan.name}
                          type="button"
                          onClick={() => setSelectedPlan(plan.name)}
                          className={`p-2.5 sm:p-3 rounded-xl text-left border transition-all cursor-pointer relative ${
                            isSelected
                              ? 'bg-indigo-600/90 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                              : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute -top-2 right-2 w-4 h-4 rounded-full bg-white text-indigo-700 flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                          )}
                          <div className="text-xs font-bold">{plan.name}</div>
                          <div className="text-sm font-extrabold mt-0.5">
                            {plan.price}
                            <span className="text-[10px] font-normal text-slate-300">{plan.period}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* What's included checklist */}
                <div className="mt-8 space-y-3 pt-6 border-t border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Everything included in your free 14-day trial:
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Full access to <strong>Class Calendar, Roster & Check-in Kiosk</strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Automated recurring billing via Stripe with <strong>zero added per-member fees</strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Member mobile booking app for <strong>iOS and Android</strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Free white-glove data migration from Mindbody, Wodify, or Excel
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quote & Trust Metric */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 relative z-10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs text-white shrink-0 border border-white/20">
                  MV
                </div>
                <div className="text-xs text-slate-300">
                  <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  “Setup took under 15 minutes. We went live on Monday morning without missing a single check-in.”
                  <div className="text-slate-400 font-medium mt-0.5">
                    — Marcus Vance, IronPeak Athletic Club
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: User-Friendly Interactive Form */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-center">
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 text-center animate-in fade-in zoom-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                    Workspace Ready, {formData.fullName.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    We've provisioned your 14-day free trial on the{' '}
                    <strong className="text-indigo-600 font-semibold">{activePlanDetails.name} Plan</strong>.
                    No credit card was charged.
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-3 mb-6 max-w-md mx-auto">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-slate-500 font-medium">Facility Workspace</span>
                      <span className="font-mono font-bold text-indigo-600">
                        {formData.gymName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'studio'}.gymlane.app
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-slate-500 font-medium">Administrator</span>
                      <span className="font-semibold text-slate-800">{formData.fullName}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-slate-500 font-medium">Notification Email</span>
                      <span className="font-mono text-slate-700">{formData.workEmail}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Trial Duration</span>
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        14 Days (Full Access)
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <button
                      onClick={() => {
                        const heroElement = document.getElementById('hero');
                        if (heroElement) {
                          heroElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                    >
                      Open Live Dashboard Demo
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <div>
                  {/* Card Title & Selected Plan summary */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Create your workspace
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Selected: <strong className="text-indigo-600 font-semibold">{activePlanDetails.name}</strong> ({activePlanDetails.price}/mo after 14 days)
                      </p>
                    </div>

                    {/* Quick Demo Autofill Button for test convenience */}
                    <button
                      type="button"
                      onClick={handleQuickFill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 text-[11px] font-semibold text-slate-600 hover:text-indigo-700 border border-slate-200 transition-colors cursor-pointer"
                      title="Fill with sample gym info to try the flow"
                    >
                      <Zap className="w-3 h-3 text-amber-500" />
                      <span>Quick fill demo</span>
                    </button>
                  </div>

                  {errorMsg && (
                    <div className="p-3 mb-4 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Field 1: Full Name */}
                    <div>
                      <label
                        htmlFor="trial-fullName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="trial-fullName"
                          name="fullName"
                          type="text"
                          required
                          placeholder="e.g. Jordan Mitchell"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-500/15 transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Field 2: Work Email */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="trial-workEmail"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                        >
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">Your login credential</span>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="trial-workEmail"
                          name="workEmail"
                          type="email"
                          required
                          placeholder="jordan@apexfitness.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-500/15 transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Field 3: Gym / Studio Name */}
                    <div>
                      <label
                        htmlFor="trial-gymName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Gym or Studio Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          id="trial-gymName"
                          name="gymName"
                          type="text"
                          required
                          placeholder="e.g. Apex Performance & Boxing"
                          value={formData.gymName}
                          onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-3 focus:ring-indigo-500/15 transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="submit-trial-form-btn"
                        className="w-full py-3.5 px-5 rounded-xl font-bold text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 min-h-[48px]"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Creating your gym workspace...</span>
                          </div>
                        ) : (
                          <>
                            <span>Start my 14-day free trial</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      {/* Reassurances & Trust Badges */}
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100 text-center">
                        <div className="flex flex-col items-center">
                          <CreditCard className="w-4 h-4 text-slate-400 mb-1" />
                          <span className="text-[11px] font-medium text-slate-600">No credit card</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Clock className="w-4 h-4 text-slate-400 mb-1" />
                          <span className="text-[11px] font-medium text-slate-600">Setup in 60s</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
                          <span className="text-[11px] font-medium text-slate-600">Cancel anytime</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-8 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            Bank-grade 256-bit encrypted data
          </span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-slate-400" />
            iOS & Android apps included
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Free data import assistance
          </span>
        </div>
      </div>
    </section>
  );
};
