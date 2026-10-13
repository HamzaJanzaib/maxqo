import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Megaphone, Palette, Cpu, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionHeading } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { CustomerDropdown } from '../components/CustomerDropdown';
import { services } from '../data/services';
import { caseStudies } from '../data/work';
import { faqs, techStack, industries, serviceCapabilities } from '../data/faq';

const icons = {
  web: Code2,
  software: Cpu,
  marketing: Megaphone,
  design: Palette,
};

const processSteps = [
  { step: '01', title: 'Discover', text: 'We learn your goals, audience, and constraints before proposing a path.' },
  { step: '02', title: 'Design', text: 'Concepts, prototypes, and clear scopes so you know what you are approving.' },
  { step: '03', title: 'Build', text: 'Ship in focused iterations with transparent progress and quality checks.' },
  { step: '04', title: 'Grow', text: 'Measure, refine, and extend what works once you are live.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
};

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [techFilter, setTechFilter] = useState('all');

  return (
    <>
      <section className="relative min-h-[88svh] sm:min-h-[92svh] flex flex-col justify-end overflow-hidden bg-ink text-white">
        <motion.img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,15,20,0.55) 0%, rgba(11,15,20,0.72) 45%, rgba(11,15,20,0.92) 100%), radial-gradient(ellipse 70% 50% at 75% 15%, rgba(0,194,168,0.28), transparent 55%)',
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-teal/20 blur-3xl"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Maxqo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white/95 max-w-2xl leading-snug"
          >
            Digital products and brands that move businesses forward.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
          >
            Web, software, marketing, and design — one agency for teams who want craft without the chaos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <ButtonLink
              to="/contact"
              variant="primary"
              className="hover:scale-[1.04] active:scale-[0.98] transition-transform shadow-lg shadow-teal/20"
            >
              Start a project
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink
              to="/work"
              variant="outline-light"
              className="hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              See our work
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      <Section>
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <SectionHeading
            eyebrow="What we do"
            title="Four disciplines. One accountable partner."
            description="Whether you need a website, a custom tool, a campaign, or a brand system — we stay close from brief to launch."
          />
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
          {services.map((service, i) => {
            const Icon = icons[service.id as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-line bg-white p-5 sm:p-6 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/5 transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.span
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-teal"
                  >
                    <Icon size={20} />
                  </motion.span>
                  <h3 className="font-display text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted leading-relaxed mb-3 text-sm sm:text-base">{service.tagline}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:gap-2.5 transition-all"
                >
                  Explore service <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section dark className="!bg-ink-soft">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <SectionHeading
            light
            eyebrow="How we work"
            title="A clear process from first call to live."
            description="No black boxes. You always know the stage, the decisions, and what comes next."
          />
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-t border-white/15 pt-4 group"
            >
              <p className="font-mono text-sm text-teal mb-1.5 group-hover:tracking-wider transition-all">
                {item.step}
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10">
          <motion.div {...fadeUp} transition={{ duration: 0.45 }} className="flex-1">
            <SectionHeading
              className="!mb-0"
              eyebrow="Selected work"
              title="Outcomes over ornament."
              description="A sample of projects across web, software, marketing, and design."
            />
          </motion.div>
          <ButtonLink to="/work" variant="ghost" className="shrink-0 self-start sm:self-auto !px-0 sm:!px-4">
            View all work <ArrowRight size={16} />
          </ButtonLink>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                to="/work"
                className="group block rounded-2xl overflow-hidden border border-line bg-white hover:border-ink/25 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
                    {study.services.join(' · ')}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                    {study.client}
                  </p>
                  <h3 className="font-display text-lg font-bold group-hover:text-teal-dark transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{study.outcome}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section compact className="!bg-paper-dim !py-10">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
        >
          <div className="lg:w-64 shrink-0">
            <p className="text-sm font-semibold tracking-wide uppercase text-teal-dark mb-1">Industries</p>
            <h2 className="font-display text-2xl font-bold tracking-tight">Who we build for</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Service capabilities detail */}
      <Section>
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <SectionHeading
            eyebrow="Our services in detail"
            title="What Maxqo actually delivers."
            description="Four service lines with clear outputs — so you know what you’re buying before we start."
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {serviceCapabilities.map((cap, i) => {
            const Icon = icons[cap.id as keyof typeof icons];
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-line bg-white p-5 sm:p-6 hover:border-teal/35 hover:shadow-lg hover:shadow-teal/5 transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-teal">
                    {Icon && <Icon size={18} />}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{cap.title}</h3>
                    <p className="text-xs text-muted">{cap.description}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:gap-2.5 transition-all"
                >
                  Explore {cap.title.toLowerCase()} <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Tech / tools stack */}
      <Section className="!bg-paper-dim">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <SectionHeading
            eyebrow="Capabilities"
            title="Modern stack. Practical choices."
            description="Tools across web, software, marketing, and design — picked to fit the product, not the other way around."
          />
        </motion.div>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'all', label: 'All' },
            { id: 'web', label: 'Web' },
            { id: 'software', label: 'Software' },
            { id: 'marketing', label: 'Marketing' },
            { id: 'design', label: 'Design' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTechFilter(tab.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-colors ${
                techFilter === tab.id
                  ? 'bg-ink text-white border-ink'
                  : 'bg-white text-ink border-line hover:border-ink/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {techStack
              .filter((t) => techFilter === 'all' || t.service === techFilter)
              .map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -3, borderColor: 'rgba(0,194,168,0.45)' }}
                  className="rounded-xl border border-line bg-white px-4 py-4 text-center"
                >
                  <p className="font-display font-bold text-ink">{tech.name}</p>
                  <p className="text-xs text-muted mt-1">{tech.category}</p>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-8 text-center">
          <ButtonLink to="/services" variant="secondary" className="hover:scale-[1.02] transition-transform">
            View all services <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </Section>

      {/* Customer dropdown + animated story */}
      <Section className="!bg-paper-dim">
        <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
          <SectionHeading
            eyebrow="Customers"
            title="Trusted by ambitious teams."
            description="Pick a customer to see how we helped them grow."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <CustomerDropdown />
        </motion.div>
      </Section>

      <Section className="!bg-paper-dim">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <p className="text-sm font-semibold tracking-wide uppercase text-teal-dark mb-2">FAQ</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">
              Common questions before we start.
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Straight answers so you know how Maxqo works — timelines, pricing, and what happens after launch.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-white p-5">
              <p className="text-sm font-semibold text-ink mb-1">Still unsure?</p>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                Send a short brief — we’ll reply within one business day.
              </p>
              <ButtonLink to="/contact" variant="secondary" className="!py-2 !px-4 text-sm">
                Ask Maxqo <ArrowRight size={14} />
              </ButtonLink>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((item, index) => {
              const open = openFaq === index;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className={`rounded-2xl border bg-white transition-all duration-300 overflow-hidden ${
                    open
                      ? 'border-teal/40 shadow-lg shadow-teal/10'
                      : 'border-line hover:border-ink/20 hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-4 p-4 sm:p-5 text-left cursor-pointer group"
                    onClick={() => setOpenFaq(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold font-mono transition-colors ${
                        open ? 'bg-teal text-ink' : 'bg-paper-dim text-muted group-hover:bg-ink group-hover:text-teal'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 min-w-0 pt-1">
                      <span
                        className={`block font-display font-semibold text-[15px] sm:text-base leading-snug transition-colors ${
                          open ? 'text-ink' : 'text-ink group-hover:text-teal-dark'
                        }`}
                      >
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        open
                          ? 'border-teal bg-teal text-ink rotate-0'
                          : 'border-line bg-paper text-muted group-hover:border-ink/30'
                      }`}
                    >
                      {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pl-[4.25rem] sm:pl-[4.5rem] pr-14">
                          <p className="text-sm text-muted leading-relaxed border-l-2 border-teal/40 pl-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section dark compact className="!pb-12 sm:!pb-14 overflow-hidden relative">
        <motion.div
          className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-teal/20 blur-3xl"
          animate={{ x: [0, -24, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 5, repeat: Infinity }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute left-10 bottom-0 h-32 w-32 rounded-full bg-teal/10 blur-2xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          aria-hidden="true"
        />
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide uppercase text-teal mb-2">Next step</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-white/65 text-base sm:text-lg leading-relaxed">
              Tell us what you are building. We will reply within one business day with next steps.
            </p>
          </div>
          <ButtonLink
            to="/contact"
            variant="primary"
            className="shrink-0 hover:scale-[1.04] active:scale-[0.98] transition-transform shadow-lg shadow-teal/25"
          >
            Get in touch <ArrowRight size={16} />
          </ButtonLink>
        </motion.div>
      </Section>
    </>
  );
};
