import React from 'react';
import { Link } from 'react-router-dom';

interface PolicyLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, updated, children }) => (
  <>
    <section className="bg-ink text-white pt-28 sm:pt-32 pb-12 sm:pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-white/50 mb-3">
          <Link to="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          Legal
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-white/55">Last updated: {updated}</p>
      </div>
    </section>
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-maxqo space-y-6 text-muted leading-relaxed text-[15px]">
        {children}
      </div>
    </article>
  </>
);

export const PolicyH2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-display text-xl font-bold text-ink pt-4">{children}</h2>
);
