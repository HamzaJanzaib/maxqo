import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Section, SectionHeading } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { PageHero, Reveal } from '../components/Reveal';
import { caseStudies } from '../data/work';

export const Work: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects that prove the craft."
        description="Selected case studies across industries — each framed around the problem, what we built, and the outcome."
        image="/projects/folio.svg"
      />

      <Section>
        <div className="space-y-14 sm:space-y-16">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.04}>
              <article className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.35 }}
                  className="lg:col-span-5 aspect-[4/3] rounded-2xl relative overflow-hidden border border-line shadow-sm"
                >
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 sm:p-6">
                    <p className="text-white/85 text-sm">{study.industry}</p>
                    <p className="text-white font-display text-2xl font-bold mt-0.5">{study.client}</p>
                  </div>
                </motion.div>

                <div className="lg:col-span-7">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                    Case {String(index + 1).padStart(2, '0')} · {study.services.join(' · ')}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-5">
                    {study.title}
                  </h2>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-ink mb-1">Problem</dt>
                      <dd className="text-muted leading-relaxed text-sm sm:text-base">{study.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-ink mb-1">Solution</dt>
                      <dd className="text-muted leading-relaxed text-sm sm:text-base">{study.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-ink mb-1">Outcome</dt>
                      <dd className="text-ink font-medium leading-relaxed text-sm sm:text-base">{study.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section compact className="!bg-paper-dim">
        <Reveal>
          <SectionHeading
            title="Want results like these?"
            description="Tell us about your product, brand, or growth challenge — we will outline a sensible first phase."
          />
          <ButtonLink to="/contact" variant="secondary" className="hover:scale-[1.03] transition-transform">
            Start a conversation <ArrowRight size={16} />
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
};
