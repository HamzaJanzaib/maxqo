import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenTrial: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenTrial }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 350px)
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg animate-in slide-in-from-bottom-2">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-900">
            Plans from $79/mo
          </span>
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            14 days free · No CC
          </span>
        </div>

        <button
          onClick={onOpenTrial}
          id="mobile-sticky-trial-btn"
          className="flex-1 py-2.5 px-4 bg-indigo-600 active:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md min-h-[44px]"
        >
          <span>Start free trial</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
