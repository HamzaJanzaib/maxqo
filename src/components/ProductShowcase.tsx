import React, { useState } from 'react';
import {
  Calendar,
  Users,
  DollarSign,
  QrCode,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Filter,
  Search,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Check
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeView, setActiveView] = useState<'calendar' | 'members' | 'revenue' | 'kiosk'>('calendar');

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3">
            <span>Inside the Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Designed for the speed of daily gym operations
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A fast, modern interface your front-desk staff, coaches, and owners will actually enjoy using every day.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveView('calendar')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeView === 'calendar'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Class Calendar</span>
          </button>
          <button
            onClick={() => setActiveView('members')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeView === 'members'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Member Rosters</span>
          </button>
          <button
            onClick={() => setActiveView('revenue')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeView === 'revenue'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Revenue & Billing</span>
          </button>
          <button
            onClick={() => setActiveView('kiosk')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeView === 'kiosk'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Front-Desk Check-in</span>
          </button>
        </div>

        {/* Feature Callout Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-md shadow-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
            <span>Everything your team needs, from one dashboard.</span>
          </div>
        </div>

        {/* Large Browser-Style Frame */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden max-w-6xl mx-auto">
          {/* Browser Window Header */}
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-white">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                <span>https://gymlane.app/studios/downtown/operations</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400 hidden sm:inline">Location: <strong>Downtown HQ (1 of 2)</strong></span>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 text-white font-bold text-xs flex items-center justify-center">
                M
              </div>
            </div>
          </div>

          {/* Inner Dashboard View Canvas */}
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/40 min-h-[420px]">
            {activeView === 'calendar' && (
              <div className="space-y-4">
                {/* Calendar Toolbar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">Weekly Class Schedule</span>
                    <span className="text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-semibold border border-indigo-100">
                      March 18 – 24
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-between sm:justify-end">
                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 font-medium text-slate-700 bg-white hover:bg-slate-50">
                      All Instructors
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                      + Add New Class
                    </button>
                  </div>
                </div>

                {/* Calendar Grid Representation */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">Monday</span>
                      <span className="text-slate-400">Mar 18</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-indigo-900">
                        <span>06:30 AM</span>
                        <span className="text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded text-[10px]">Full</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">HIIT Express</p>
                      <p className="text-slate-500 text-[11px]">Coach Dan · 20/20 booked</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>12:00 PM</span>
                        <span className="text-slate-500 text-[10px]">Open</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">Noon Flow Yoga</p>
                      <p className="text-slate-500 text-[11px]">Elena · 12/15 booked</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">Tuesday</span>
                      <span className="text-slate-400">Mar 19</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-violet-50/60 border border-violet-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-violet-900">
                        <span>07:00 AM</span>
                        <span className="text-violet-700 bg-violet-100/70 px-1.5 py-0.2 rounded text-[10px]">18/20</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">Barbell Strength</p>
                      <p className="text-slate-500 text-[11px]">Marcus V. · Main Floor</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>05:30 PM</span>
                        <span className="text-amber-700 bg-amber-100/70 px-1.5 py-0.2 rounded text-[10px]">+2 Wait</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">Kettlebell Burn</p>
                      <p className="text-slate-500 text-[11px]">Chloe B. · Studio A</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">Wednesday</span>
                      <span className="text-slate-400">Mar 20</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>07:30 AM</span>
                        <span className="text-slate-500 text-[10px]">Open</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">MetCon Circuit</p>
                      <p className="text-slate-500 text-[11px]">Dan K. · 14/18 booked</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-indigo-900">
                        <span>06:00 PM</span>
                        <span className="text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded text-[10px]">Full</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">Power Boxing</p>
                      <p className="text-slate-500 text-[11px]">Coach Malik · Studio B</p>
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-800">Thursday (Today)</span>
                      <span className="text-indigo-600 font-semibold">Active</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-emerald-900">
                        <span>12:00 PM</span>
                        <span className="text-emerald-700 font-extrabold text-[10px]">In Progress</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">Strength & Barbell Club</p>
                      <p className="text-slate-600 text-[11px]">16/16 Checked In</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs space-y-1">
                      <div className="flex justify-between font-bold text-indigo-900">
                        <span>05:30 PM</span>
                        <span className="text-indigo-700 text-[10px]">19/20</span>
                      </div>
                      <p className="font-semibold text-slate-900 text-xs">Metabolic Circuit</p>
                      <p className="text-slate-500 text-[11px]">Auto waitlist drop ready</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'members' && (
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Active Member Directory</h3>
                    <p className="text-xs text-slate-500">486 total members across 1 studio</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search name, email, plan..."
                        readOnly
                        value=""
                        className="pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs w-full sm:w-56"
                      />
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold">
                      + Member
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 text-xs">
                  <div className="grid grid-cols-12 px-4 py-2.5 bg-slate-50/80 font-bold text-slate-500 text-[11px]">
                    <div className="col-span-4">MEMBER</div>
                    <div className="col-span-3">MEMBERSHIP PLAN</div>
                    <div className="col-span-3">STATUS</div>
                    <div className="col-span-2 text-right">LAST VISIT</div>
                  </div>

                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-slate-50/50">
                    <div className="col-span-4 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px]">
                        SJ
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Sarah Jenkins</p>
                        <p className="text-slate-400 text-[11px]">sarah.j@outlook.com</p>
                      </div>
                    </div>
                    <div className="col-span-3 font-medium text-slate-700">Unlimited Monthly ($169)</div>
                    <div className="col-span-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Active · Autopay OK
                      </span>
                    </div>
                    <div className="col-span-2 text-right text-slate-500">Today, 07:02 AM</div>
                  </div>

                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-slate-50/50">
                    <div className="col-span-4 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center text-[10px]">
                        TR
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Tyler Robinson</p>
                        <p className="text-slate-400 text-[11px]">tyler.r@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-span-3 font-medium text-slate-700">Founders Tier ($149)</div>
                    <div className="col-span-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Active · Autopay OK
                      </span>
                    </div>
                    <div className="col-span-2 text-right text-slate-500">Yesterday</div>
                  </div>

                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-slate-50/50">
                    <div className="col-span-4 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-[10px]">
                        MW
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Maya Williams</p>
                        <p className="text-slate-400 text-[11px]">maya.w@company.com</p>
                      </div>
                    </div>
                    <div className="col-span-3 font-medium text-slate-700">10-Class Card</div>
                    <div className="col-span-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        4 Credits Left
                      </span>
                    </div>
                    <div className="col-span-2 text-right text-slate-500">2 days ago</div>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'revenue' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium">Monthly Recurring Revenue (MRR)</p>
                    <p className="text-2xl font-extrabold text-slate-900 mt-1">$38,420</p>
                    <p className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +12.4% vs last month
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium">Auto-Billing Success Rate</p>
                    <p className="text-2xl font-extrabold text-slate-900 mt-1">99.4%</p>
                    <p className="text-xs text-slate-500 mt-1">Stripe & ACH Smart Retry enabled</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 font-medium">Upcoming Renewals (Next 7 Days)</p>
                    <p className="text-2xl font-extrabold text-indigo-600 mt-1">$8,640</p>
                    <p className="text-xs text-slate-500 mt-1">54 memberships scheduled</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-xs text-slate-800">Recent Automatic Invoices</h4>
                    <span className="text-[11px] text-indigo-600 font-semibold cursor-pointer">Export CSV →</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-slate-500" />
                        <div>
                          <span className="font-bold text-slate-800">INV-8492</span>
                          <span className="text-slate-500 ml-2">Sarah Jenkins · Unlimited Tier</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900">$169.00</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-200">
                          Paid
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-slate-500" />
                        <div>
                          <span className="font-bold text-slate-800">INV-8491</span>
                          <span className="text-slate-500 ml-2">Tyler Robinson · Founders Tier</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900">$149.00</span>
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-200">
                          Paid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'kiosk' && (
              <div className="max-w-2xl mx-auto bg-white rounded-xl border-2 border-indigo-500/30 p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center mb-3">
                  <QrCode className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Front Desk & Self-Check-in Kiosk Mode</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 mb-6">
                  Position any iPad or Android tablet at your front desk. Members scan their digital QR pass from the Gymlane mobile app or search by phone number.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                      <Check className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs">Marcus Vance</p>
                      <p className="text-[11px] text-slate-500">Checked into HIIT Conditioning (07:00 AM)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    Welcome!
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
