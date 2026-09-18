import React, { useState, useEffect, useRef } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  MapPin,
  Users,
  LayoutGrid,
  SlidersHorizontal,
  Plus,
  X,
  Building2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { TestimonialItem } from '../types';

const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    role: 'Founder & Head Coach',
    gymName: 'IronPeak Strength & Athletic Club',
    location: 'Denver, CO',
    category: 'Strength & Conditioning',
    quote:
      'Before Gymlane, I was juggling Mindbody for scheduling, Stripe on a separate tab, and Excel sheets for attendance. Switching cut our admin overhead in half and recovered $2,400 in failed renewals within the very first month.',
    highlightMetric: 'Saved 14 hrs/wk',
    metricLabel: 'on manual billing & rosters',
    rating: 5,
    initials: 'MV',
    avatarColor: 'from-blue-600 to-indigo-700',
    switchedFrom: 'Mindbody',
    memberCount: '340 active members'
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    role: 'Managing Owner',
    gymName: 'Prana Flow Movement Studio',
    location: 'Austin, TX',
    category: 'Yoga & Pilates',
    quote:
      'Our students constantly rave about how effortless it is to book reformer sessions and workshops on their phones. Waitlist drops fill in under 2 minutes automatically without any staff intervention.',
    highlightMetric: '+38% retention',
    metricLabel: 'over 6-month trial cohort',
    rating: 5,
    initials: 'ER',
    avatarColor: 'from-emerald-500 to-teal-700',
    switchedFrom: 'ZenPlanner',
    memberCount: '280 active members'
  },
  {
    id: 't-3',
    name: 'Dave Kincaid',
    role: 'Co-Owner & Head Coach',
    gymName: 'Apex Forge CrossFit',
    location: 'San Diego, CA',
    category: 'CrossFit & Group',
    quote:
      'We run 9 group classes daily. The kiosk check-in tablet at our front desk handled 180 athletes on Day 1 with zero lag. Our coaches love seeing attendance rosters update in real time while warming up.',
    highlightMetric: '100% check-in rate',
    metricLabel: 'zero front-desk lines',
    rating: 5,
    initials: 'DK',
    avatarColor: 'from-amber-500 to-orange-700',
    switchedFrom: 'Wodify',
    memberCount: '410 active members'
  },
  {
    id: 't-4',
    name: 'Sofia Calderon',
    role: 'Owner & Chief Instructor',
    gymName: 'Strikeworks Combat & Boxing',
    location: 'Miami, FL',
    category: 'Combat & Boxing',
    quote:
      'Managing tiered gloves, sparring memberships, and day passes used to be a nightmare of unpaid guest waivers. Gymlane unified digital waiver signatures with the turnstile kiosk. Unpaid entries dropped to zero.',
    highlightMetric: '$3,100/mo recovered',
    metricLabel: 'in previously unbilled drop-ins',
    rating: 5,
    initials: 'SC',
    avatarColor: 'from-rose-500 to-pink-700',
    switchedFrom: 'Spreadsheets + Square',
    memberCount: '220 active members'
  },
  {
    id: 't-5',
    name: 'Tyler Jensen',
    role: 'Operations Director',
    gymName: 'Cascade Functional Fitness',
    location: 'Seattle, WA',
    category: 'Strength & Conditioning',
    quote:
      'The transparent pricing with no hidden per-member surcharges made switching an absolute no-brainer. Their data migration team transferred our entire 450-member list over a single weekend.',
    highlightMetric: '$460/mo saved',
    metricLabel: 'compared to legacy software fees',
    rating: 5,
    initials: 'TJ',
    avatarColor: 'from-indigo-600 to-purple-700',
    switchedFrom: 'Mindbody',
    memberCount: '460 active members'
  },
  {
    id: 't-6',
    name: 'Camilla Thorne',
    role: 'Founder',
    gymName: 'Solstice Reformer & Mat Studio',
    location: 'Chicago, IL',
    category: 'Yoga & Pilates',
    quote:
      'The automated SMS reminders cut our class no-show rates from 18% down to under 4%. For a boutique studio with limited 12-reformer capacity, that directly equates to thousands in recovered revenue.',
    highlightMetric: '4% no-show rate',
    metricLabel: 'down from 18% previously',
    rating: 5,
    initials: 'CT',
    avatarColor: 'from-violet-500 to-fuchsia-700',
    switchedFrom: 'Glofox',
    memberCount: '195 active members'
  }
];

const CATEGORIES = [
  'All Studios',
  'Strength & Conditioning',
  'CrossFit & Group',
  'Yoga & Pilates',
  'Combat & Boxing'
] as const;

export const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Studios');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // New review modal state
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Owner',
    gymName: '',
    location: '',
    category: 'Strength & Conditioning' as TestimonialItem['category'],
    quote: '',
    highlightMetric: 'Saved 10+ hrs/wk',
    metricLabel: 'operational efficiency',
    rating: 5,
    switchedFrom: 'Mindbody',
    memberCount: '150 active members'
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filtered testimonials
  const filteredTestimonials = testimonials.filter((t) => {
    if (selectedCategory === 'All Studios') return true;
    return t.category === selectedCategory;
  });

  // Ensure currentIndex stays within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Autoplay timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying || viewMode !== 'spotlight' || filteredTestimonials.length <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, viewMode, filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentItem = filteredTestimonials[currentIndex] || filteredTestimonials[0] || testimonials[0];

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.gymName || !newReview.quote) return;

    const initials = newReview.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const created: TestimonialItem = {
      id: `t-${Date.now()}`,
      name: newReview.name,
      role: newReview.role,
      gymName: newReview.gymName,
      location: newReview.location || 'United States',
      category: newReview.category,
      quote: newReview.quote,
      highlightMetric: newReview.highlightMetric || '5-Star Operator',
      metricLabel: newReview.metricLabel || 'verified review',
      rating: newReview.rating,
      initials: initials || 'GY',
      avatarColor: 'from-emerald-500 to-indigo-600',
      switchedFrom: newReview.switchedFrom || 'Other Software',
      memberCount: newReview.memberCount || '100+ members'
    };

    setTestimonials([created, ...testimonials]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitModalOpen(false);
      setSelectedCategory('All Studios');
      setCurrentIndex(0);
    }, 1200);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Gym & Studio Owners</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Trusted by 500+ fitness facilities daily
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              See how independent gym owners, CrossFit boxes, and boutique studios eliminated daily admin bottlenecks.
            </p>
          </div>

          {/* Controls: View Mode & Submit Story */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setViewMode('spotlight')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'spotlight'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Spotlight view"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Spotlight</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Stories ({testimonials.length})</span>
              </button>
            </div>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-400" />
              <span>Share your story</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === 'All Studios'
                ? testimonials.length
                : testimonials.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white border border-indigo-500 shadow-sm'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-indigo-700/80 text-indigo-100'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        {viewMode === 'spotlight' ? (
          /* Spotlight Carousel Card */
          <div
            className="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xs transition-all"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Top Row: Category Tag, Switched From & Rating */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-950/70 text-indigo-300 border border-indigo-800/60">
                  {currentItem.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  Switched from <strong className="text-slate-200 font-semibold">{currentItem.switchedFrom}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center text-amber-400" aria-label="5 stars rating">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {currentIndex + 1} of {filteredTestimonials.length}
                </span>
              </div>
            </div>

            {/* Middle Row: Big Quote + Proven Metric Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
              <div className="lg:col-span-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <Quote className="w-5 h-5 fill-indigo-400/20" />
                </div>
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight leading-relaxed text-slate-100">
                  “{currentItem.quote}”
                </blockquote>
              </div>

              {/* Proven Metric Card */}
              <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Verified Outcome</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentItem.highlightMetric}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {currentItem.metricLabel}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-400" />
                    {currentItem.memberCount}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {currentItem.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Author credentials + Interactive navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${currentItem.avatarColor} flex items-center justify-center font-bold text-sm text-white shadow-md border border-white/10`}
                >
                  {currentItem.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-base font-bold text-white">
                      {currentItem.name}
                    </span>
                    <span title="Verified Gym Owner">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {currentItem.role} · <span className="text-slate-300 font-medium">{currentItem.gymName}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                {/* Dots indicator */}
                <div className="hidden sm:flex items-center gap-1.5 mr-2">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx
                          ? 'w-6 bg-indigo-500'
                          : 'w-2 bg-slate-700 hover:bg-slate-600'
                      }`}
                      aria-label={`Jump to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Autoplay Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause automatic slideshow' : 'Resume slideshow'}
                  aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer active:scale-95 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View of all matching testimonials */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
                      {t.category}
                    </span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed mb-4">
                    “{t.quote}”
                  </p>

                  {/* Highlight pill */}
                  <div className="mb-5 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-400">{t.highlightMetric}</div>
                      <div className="text-[10px] text-slate-400">{t.metricLabel}</div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      from {t.switchedFrom}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center font-bold text-xs text-white shadow-xs`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>{t.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.role} · {t.gymName}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Aggregate Trust Stats below carousel */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-black text-white">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 mt-0.5">Average customer rating</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-indigo-400">99.4%</div>
            <div className="text-xs text-slate-400 mt-0.5">Monthly renewal retention</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400">&lt; 24 hrs</div>
            <div className="text-xs text-slate-400 mt-0.5">Data migration turnaround</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-200">500+</div>
            <div className="text-xs text-slate-400 mt-0.5">Studios & gym clubs live</div>
          </div>
        </div>
      </div>

      {/* Share Your Story / Submit Testimonial Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">Share Your Gymlane Story</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Help fellow gym and studio owners understand the real-world impact.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Thank you for your review!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your review has been published to our customer spotlight board.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 pt-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Adams"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Your Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Owner & Head Coach"
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Gym or Studio Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Horizon Fitness Lab"
                      value={newReview.gymName}
                      onChange={(e) => setNewReview({ ...newReview, gymName: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Location (City, State)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Phoenix, AZ"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Facility Category
                    </label>
                    <select
                      value={newReview.category}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          category: e.target.value as TestimonialItem['category']
                        })
                      }
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Strength & Conditioning">Strength & Conditioning</option>
                      <option value="CrossFit & Group">CrossFit & Group</option>
                      <option value="Yoga & Pilates">Yoga & Pilates</option>
                      <option value="Combat & Boxing">Combat & Boxing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Previous System Switched From
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mindbody, Wodify, Excel"
                      value={newReview.switchedFrom}
                      onChange={(e) => setNewReview({ ...newReview, switchedFrom: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1">
                    Your Review / Story *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Share how Gymlane helped with class booking, payments, or your daily workflow..."
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Headline Metric
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +30% class booking"
                      value={newReview.highlightMetric}
                      onChange={(e) =>
                        setNewReview({ ...newReview, highlightMetric: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2 py-1">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: starVal })}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              starVal <= newReview.rating ? 'fill-amber-400' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-slate-400 ml-1">({newReview.rating} of 5 stars)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold cursor-pointer"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
