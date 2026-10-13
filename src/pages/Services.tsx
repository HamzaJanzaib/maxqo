import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Section, SectionHeading } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { PageHero } from '../components/Reveal';
import { services } from '../data/services';

export const Services: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Web, software, marketing, and design — end to end."
        description="Pick a specialty or combine them. We scope clearly, ship in stages, and stay accountable for results."
      />

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.slug}
          className={`scroll-mt-24 ${index % 2 === 1 ? '!bg-paper-dim' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="grid lg:grid-cols-12 gap-10 lg:gap-14"
          >
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-teal-dark uppercase tracking-wide mb-2">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                {service.title}
              </h2>
              <p className="text-lg text-ink/80 font-medium mb-4">{service.tagline}</p>
              <p className="text-muted leading-relaxed mb-6">{service.description}</p>
              <ButtonLink to="/contact" variant="secondary" className="!py-2.5">
                Discuss {service.shortTitle.toLowerCase()} <ArrowRight size={16} />
              </ButtonLink>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">
                  Outcomes
                </h3>
                <ul className="space-y-3">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                      <Check size={16} className="text-teal-dark shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="text-sm text-muted border-b border-line pb-2.5 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-4">
                  Typical process
                </h3>
                <ol className="flex flex-wrap gap-3">
                  {service.process.map((step, i) => (
                    <li
                      key={step}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-white border border-line rounded-lg px-3 py-2"
                    >
                      <span className="text-teal-dark font-mono text-xs">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </Section>
      ))}

      <Section dark>
        <SectionHeading
          light
          title="Not sure which service you need?"
          description="Share your goals on the contact form — we will recommend a practical starting point."
        />
        <ButtonLink to="/contact" variant="primary">
          Talk to Maxqo <ArrowRight size={16} />
        </ButtonLink>
      </Section>
    </>
  );
};
