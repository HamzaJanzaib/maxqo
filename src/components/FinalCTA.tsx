import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
          Ready to simplify your gym operations?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Start your 14-day free trial today. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenTrial}
            id="final-trial-cta-btn"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
          >
            <span>Start free trial</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Takes 60 seconds to set up · Cancel anytime</span>
        </p>
      </div>
    </section>
  );
};
