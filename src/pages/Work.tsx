import React, { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { PageHero, Reveal } from '../components/Reveal';
import { caseStudies } from '../data/work';

const filters = ['All', 'Web', 'Software', 'Marketing', 'Design'] as const;

export const Work: React.FC = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return caseStudies;
    return caseStudies.filter((s) => s.services.includes(filter));
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects that prove the craft."
        description="Selected case studies across industries — each framed around the problem, what we built, and the outcome."
      />

      {/* Filter + overview grid */}
      <Section className="!pt-10 sm:!pt-12 !pb-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase text-teal-dark mb-1">
                Selected work
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Browse by service
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                    filter === f
                      ? 'bg-ink text-white border-ink'
                      : 'bg-white text-ink border-line hover:border-ink/30'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, i) => (
              <motion.a
                key={study.id}
                href={`#case-${study.id}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-ink text-white cursor-pointer"
              >
                <div className="aspect-[16/10] relative">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {study.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/10 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                    <p className="text-xs text-white/60 mb-1">{study.industry}</p>
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="font-display text-lg sm:text-xl font-bold">{study.client}</p>
                        <p className="text-sm text-white/75 mt-0.5 line-clamp-1">{study.title}</p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-ink group-hover:scale-110 transition-transform">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-10 text-sm">No projects in this category yet.</p>
        )}
      </Section>

      {/* Detailed case studies */}
      <Section className="!bg-paper-dim !pt-10">
        <Reveal>
          <div className="mb-10 max-w-xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-teal-dark mb-1">
              Case studies
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Problem, solution, outcome.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-8 sm:space-y-10">
          {caseStudies.map((study, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={study.id} delay={0.03}>
                <article
                  id={`case-${study.id}`}
                  className="scroll-mt-28 rounded-3xl border border-line bg-white overflow-hidden shadow-sm"
                >
                  <div
                    className={`grid lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
                  >
                    <div
                      className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-full bg-ink"
                      style={{
                        background: `linear-gradient(145deg, ${study.accent}33, #0B0F14 60%)`,
                      }}
                    >
                      <img
                        src={study.image}
                        alt={study.imageAlt}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                        <p className="text-teal text-xs font-bold uppercase tracking-wider mb-1">
                          {study.industry}
                        </p>
                        <p className="font-display text-2xl font-bold text-white">{study.client}</p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                        Case {String(index + 1).padStart(2, '0')} · {study.services.join(' · ')}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink mb-6 leading-snug">
                        {study.title}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4 mb-5">
                        <div className="rounded-xl bg-paper-dim border border-line p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">
                            Problem
                          </p>
                          <p className="text-sm text-ink/80 leading-relaxed">{study.problem}</p>
                        </div>
                        <div className="rounded-xl bg-paper-dim border border-line p-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">
                            Solution
                          </p>
                          <p className="text-sm text-ink/80 leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      <div
                        className="mt-auto rounded-xl border px-4 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                        style={{
                          borderColor: `${study.accent}55`,
                          background: `${study.accent}12`,
                        }}
                      >
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-0.5">
                            Outcome
                          </p>
                          <p className="text-sm font-semibold text-ink">{study.outcome}</p>
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-teal-dark transition-colors shrink-0"
                        >
                          Similar project? <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section dark compact className="overflow-hidden relative">
        <div
          className="pointer-events-none absolute inset-0 texture-noise opacity-30"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-teal/20 blur-3xl"
          aria-hidden="true"
        />
        <Reveal>
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-wide uppercase text-teal mb-2">
                Start a project
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Want results like these?
              </h2>
              <p className="mt-3 text-white/65 leading-relaxed">
                Tell us about your product, brand, or growth challenge — we will outline a sensible first phase.
              </p>
            </div>
            <ButtonLink
              to="/contact"
              variant="primary"
              className="shrink-0 hover:scale-[1.03] transition-transform"
            >
              Start a conversation <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
};
