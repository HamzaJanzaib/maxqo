import React from 'react';
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  Layers,
  FileSpreadsheet,
  RefreshCw,
  CreditCard,
  Sparkles,
  X,
  Check,
  AlertTriangle
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="product" className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
            <span>The Unified Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Everything your gym needs.{' '}
            <span className="text-indigo-600">One simple system.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Stop stitching together clunky booking plug-ins, manual spreadsheets, and disconnected card swipers. Gymlane consolidates your entire facility operations into one clear dashboard.
          </p>
        </div>

        {/* Visual Comparison: The Fragmented Stack vs The Gymlane Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          {/* Fragmented Workflow (Before) */}
          <div className="lg:col-span-5 rounded-2xl bg-white p-6 sm:p-8 border border-rose-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">The Fragmented Stack</h3>
                    <p className="text-xs text-slate-500">4+ disconnected tools & headaches</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                  High Churn
                </span>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Separate calendar app:</strong> Double-bookings and manual waitlist texting.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Spreadsheet rosters:</strong> Lost member attendance and uncollected renewals.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Manual card billing:</strong> Failed charges, expired cards, and missed revenue.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Front-desk bottlenecks:</strong> Paper sign-in sheets slow down peak hours.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-rose-700 bg-rose-50/50 p-3 rounded-xl flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Result: 6–10 hours of wasted admin busywork every week.</span>
            </div>
          </div>

          {/* Center Connector / Arrow */}
          <div className="lg:col-span-2 flex lg:flex-col items-center justify-center py-2 lg:py-0">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <ArrowRight className="w-5 h-5 hidden lg:block" />
              <span className="lg:hidden text-xs font-bold">VS</span>
            </div>
          </div>

          {/* Gymlane Flow (After) */}
          <div className="lg:col-span-5 rounded-2xl bg-white p-6 sm:p-8 border-2 border-indigo-500 shadow-md shadow-indigo-100/50 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
              All-in-One
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-indigo-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">The Gymlane Flow</h3>
                    <p className="text-xs text-indigo-700 font-medium">One clean, automated workspace</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Live class booking:</strong> Real-time capacities, automated waitlist drops, and mobile self-booking.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Unified member profiles:</strong> Plans, renewals, freezes, and medical notes in one place.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Automated recurring billing:</strong> Zero-effort credit card & ACH charging with dunning retry.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-semibold">Instant digital check-in:</strong> Front desk barcode scanner, self-serve kiosk, or member app.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-indigo-100 text-xs font-semibold text-indigo-900 bg-indigo-50/70 p-3 rounded-xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>Saves gym owners 30+ hours/month while boosting retention.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
