import React, { useState, useEffect } from 'react';
import { X, Play, Pause, CheckCircle2, ArrowRight, Sparkles, Volume2, Calendar, QrCode, CreditCard, BarChart3 } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onStartTrial }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: 'Class Scheduling & Automated Waitlists',
      duration: '0:35',
      icon: Calendar,
      description: 'Set recurring classes, assign instructors, set room capacities, and let Gymlane automatically bump waitlisted members when someone cancels.',
      highlight: 'Zero phone calls needed for waitlist management.'
    },
    {
      title: '0.8s Member Check-In via Front Desk Kiosk',
      duration: '0:40',
      icon: QrCode,
      description: 'Place any tablet at your reception. Members scan their phone QR code in under a second with instant attendance syncing.',
      highlight: 'Cuts front-desk morning queues to zero.'
    },
    {
      title: 'Hands-Free Automated Recurring Billing',
      duration: '0:45',
      icon: CreditCard,
      description: 'Collect monthly memberships, class packs, and drop-ins through automated credit card and ACH processing with built-in dunning recovery.',
      highlight: '99.4% payment collection rate.'
    },
    {
      title: 'Instant Financial & Attendance Reporting',
      duration: '0:40',
      icon: BarChart3,
      description: 'Understand member churn before it happens, track coach revenue split, and export accounting data directly to QuickBooks with one click.',
      highlight: '40+ pre-built operational reports.'
    }
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, demoSteps.length]);

  if (!isOpen) return null;

  const current = demoSteps[currentStep];
  const StepIcon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-bold text-sm">Gymlane Product Tour (2-Minute Walkthrough)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation Canvas */}
        <div className="relative bg-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[300px]">
          {/* Simulated SaaS Screen Animation */}
          <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                  <StepIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-indigo-400 font-bold">
                    Step {currentStep + 1} of {demoSteps.length}
                  </span>
                  <h4 className="font-bold text-base text-slate-100">{current.title}</h4>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">{current.duration}</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              {current.description}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.highlight}</span>
            </div>
          </div>

          {/* Timeline navigation pills */}
          <div className="grid grid-cols-4 gap-2 mt-6">
            {demoSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStep(idx);
                  setIsPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentStep === idx
                    ? 'bg-indigo-500'
                    : currentStep > idx
                    ? 'bg-indigo-900'
                    : 'bg-slate-800'
                }`}
              />
            ))}
          </div>

          {/* Player controls */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 text-white hover:text-indigo-400 cursor-pointer font-medium"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}</span>
            </button>
            <span className="font-mono">Simulated Interactive Preview</span>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Ready to test Gymlane with your gym's schedule?
          </div>
          <button
            onClick={() => {
              onClose();
              onStartTrial();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Start your 14-day free trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
