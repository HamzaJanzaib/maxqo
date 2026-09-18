import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Users,
  CheckCircle2,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  ChevronRight,
  Sparkles,
  QrCode,
  ShieldCheck,
  Search,
  Plus
} from 'lucide-react';
import { ClassScheduleItem, MemberCheckIn } from '../types';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

const mockClasses: ClassScheduleItem[] = [
  {
    time: '07:00 AM',
    name: 'HIIT Conditioning',
    instructor: 'Marcus Vance',
    enrolled: 18,
    capacity: 20,
    waitlist: 3,
    room: 'Studio A',
    tag: 'Popular',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    time: '09:30 AM',
    name: 'Power Vinyasa Yoga',
    instructor: 'Elena Rostova',
    enrolled: 15,
    capacity: 15,
    waitlist: 4,
    room: 'Studio B',
    tag: 'Full',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    time: '12:00 PM',
    name: 'Strength & Barbell Club',
    instructor: 'David Kim',
    enrolled: 12,
    capacity: 16,
    waitlist: 0,
    room: 'Main Floor',
    tag: 'Open',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    time: '05:30 PM',
    name: 'Metabolic Circuit',
    instructor: 'Chloe Bennett',
    enrolled: 19,
    capacity: 20,
    waitlist: 2,
    room: 'Studio A',
    tag: 'Filling Fast',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-200'
  }
];

const mockRecentCheckIns: MemberCheckIn[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    avatar: 'SJ',
    timeAgo: '2m ago',
    membership: 'Unlimited Monthly',
    status: 'Checked in',
    class: 'HIIT Conditioning'
  },
  {
    id: '2',
    name: 'Alex Moreno',
    avatar: 'AM',
    timeAgo: '6m ago',
    membership: 'Founders Tier',
    status: 'Access Granted'
  },
  {
    id: '3',
    name: 'Liam Chen',
    avatar: 'LC',
    timeAgo: '11m ago',
    membership: '10-Class Pack (7 left)',
    status: 'Checked in',
    class: 'Power Vinyasa'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'checkins'>('schedule');

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-50/60 via-white to-white">
      {/* Subtle modern geometric background glow (not overwhelming, pure SaaS polish) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl overflow-hidden -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-12 left-1/4 w-80 h-80 rounded-full bg-indigo-200/50" />
        <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-violet-200/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: High Conversion Messaging */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                All-in-One Gym Management
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-4 sm:mb-5">
              Run your gym.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600">
                Without the busywork.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-4 sm:mb-5">
              Scheduling, memberships, billing and check-ins — everything you need to run your fitness business in one place.
            </p>

            {/* Commercial Proposition Banner (Above the fold, instant conversion clarity) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/80 px-3.5 py-2 rounded-lg border border-slate-200/70 self-start mb-6">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>14-day free trial · No credit card required · Plans from $79/month</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button
                onClick={onOpenTrial}
                id="hero-primary-trial-cta"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
              >
                <span>Start your free trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenDemo}
                id="hero-secondary-demo-cta"
                className="w-full sm:w-auto px-5 py-3.5 sm:py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-xl transition-all flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Play className="w-3.5 h-3.5 fill-indigo-600 ml-0.5" />
                </div>
                <span>Watch 2-minute demo</span>
              </button>
            </div>

            {/* Micro Trust Statement */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  JD
                </div>
                <div className="w-7 h-7 rounded-full bg-violet-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  KL
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  MR
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Trusted by 2,000+</span> fitness businesses
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Fictional Gymlane Dashboard Mockup */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Top Window Bar (Modern macOS / SaaS aesthetic) */}
              <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-400 text-xs ml-2 font-mono">app.gymlane.com/dashboard</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                    Live Sync
                  </span>
                  <div className="w-6 h-6 rounded-full bg-indigo-600 text-[10px] font-bold flex items-center justify-center text-white">
                    GL
                  </div>
                </div>
              </div>

              {/* Sub-Header / Workspace navigation */}
              <div className="bg-slate-50/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-bold text-slate-900 truncate">
                    Downtown Studio
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Loc #1
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-xs font-semibold">
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`px-2.5 py-1 rounded-md transition-all text-[11px] ${
                        activeTab === 'schedule'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Schedule
                    </button>
                    <button
                      onClick={() => setActiveTab('checkins')}
                      className={`px-2.5 py-1 rounded-md transition-all text-[11px] ${
                        activeTab === 'checkins'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Check-ins
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Metrics Row inside the Mockup */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-white border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium mb-1">
                    <span>Today's Check-ins</span>
                    <QrCode className="w-3.5 h-3.5 text-indigo-500" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">142</span>
                    <span className="text-[10px] font-bold text-emerald-600">+18%</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium mb-1">
                    <span>Active Members</span>
                    <Users className="w-3.5 h-3.5 text-violet-500" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">486</span>
                    <span className="text-[10px] font-bold text-indigo-600">98% ret.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium mb-1">
                    <span>Monthly Rev.</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900">$38.4k</span>
                    <span className="text-[10px] font-bold text-emerald-600">+$4.2k</span>
                  </div>
                </div>
              </div>

              {/* Main Tab Content */}
              <div className="p-3 sm:p-4 bg-white">
                {activeTab === 'schedule' ? (
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Today's Class Schedule (Thursday)</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">4 of 12 classes</span>
                    </div>

                    <div className="space-y-2">
                      {mockClasses.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50/60 transition-all text-xs"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="font-mono font-bold text-slate-800 text-[11px] shrink-0">
                              {item.time}
                            </span>
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 truncate text-[13px]">{item.name}</p>
                              <p className="text-slate-500 text-[11px] truncate">
                                {item.instructor} · {item.room}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <div className="text-right hidden sm:block">
                              <span className="font-semibold text-slate-800 text-[11px]">
                                {item.enrolled}/{item.capacity}
                              </span>
                              {item.waitlist > 0 && (
                                <span className="text-amber-600 text-[10px] block font-medium">
                                  +{item.waitlist} waitlist
                                </span>
                              )}
                            </div>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.tagColor}`}
                            >
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <QrCode className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Live Member Check-in Stream</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Front Desk & Kiosk
                      </span>
                    </div>

                    <div className="space-y-2">
                      {mockRecentCheckIns.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50/60 transition-all text-xs"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                              {item.avatar}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 truncate text-[12px]">{item.name}</p>
                              <p className="text-slate-500 text-[10px] truncate">
                                {item.membership} {item.class ? `· ${item.class}` : ''}
                              </p>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" />
                              {item.status}
                            </span>
                            <span className="text-slate-400 text-[10px] block mt-0.5">{item.timeAgo}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Mini-Footer of Mockup */}
              <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  Auto-Billing: Next cycle Mar 1 · 100% on-time
                </span>
                <span className="font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
                  All 1–3 Locations Active →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
