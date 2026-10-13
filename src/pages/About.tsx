import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Section, SectionHeading } from '../components/ui/Section';
import { ButtonLink } from '../components/ui/Button';
import { PageHero, Reveal } from '../components/Reveal';

const values = [
  {
    title: 'Clarity first',
    text: 'We write scopes people can understand, flag risks early, and never hide behind jargon.',
  },
  {
    title: 'Craft that ships',
    text: 'Beautiful work only counts when it is live, reliable, and useful to real users.',
  },
  {
    title: 'Partnership over pitch',
    text: 'We measure success by your outcomes — not by how many extras we sell you.',
  },
  {
    title: 'Honest timelines',
    text: 'We plan for quality and buffer for reality, then communicate when things change.',
  },
];

const approach = [
  {
    title: 'Listen harder than we sell',
    text: 'Kickoffs are for understanding constraints, audiences, and what “done” actually means.',
  },
  {
    title: 'Prototype before overbuilding',
    text: 'We validate direction with designs or thin slices of software before committing the full budget.',
  },
  {
    title: 'Leave you stronger',
    text: 'Documentation, training, and clean hand-offs so your team can own what we build together.',
  },
];

export const About: React.FC = () => {
  return (
    <>
      <PageHero
        eyebrow="About Maxqo"
        title="A digital agency built for focus."
        description="Maxqo helps UK businesses and ambitious teams grow with websites, software, marketing, and design that work together."
        image="/projects/northline.svg"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">Our story</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Maxqo started from a simple frustration: too many projects fail because strategy, design, and engineering never share the same brief. Brands get a pretty site that cannot convert. Products get features nobody asked for. Campaigns launch without a landing experience ready.
              </p>
              <p>
                We built Maxqo as a single partner for that full stack — digital work with one voice, one timeline, and one team accountable for the outcome. Based in the United Kingdom, we work with founders, operators, and marketing leads who value clear communication and thoughtful craft.
              </p>
              <p>
                Whether you need a launch site, a custom internal tool, a growth campaign, or a brand refresh, we meet you where you are and ship what moves the needle.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl bg-ink text-white p-8 sm:p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-teal/20 blur-2xl" />
              <p className="font-display text-2xl sm:text-3xl font-bold leading-snug relative">
                “Good digital work should feel inevitable once you see it — and useful the day it ships.”
              </p>
              <p className="mt-8 text-sm text-teal relative">— Maxqo</p>
            </motion.div>
          </Reveal>
        </div>
      </Section>

      <Section className="!bg-paper-dim">
        <Reveal>
          <SectionHeading eyebrow="Values" title="What we refuse to compromise on." />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3 }}
                className="border border-line bg-white rounded-xl p-5 h-full"
              >
                <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">{v.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Approach" title="How engagement feels with Maxqo." />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {approach.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <p className="font-mono text-sm text-teal-dark mb-2">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark compact>
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white max-w-xl">
            Ready to work together?
          </h2>
          <p className="mt-4 text-white/65 max-w-lg leading-relaxed">
            Send a short brief or book an intro call. We respond within one business day.
          </p>
          <div className="mt-6">
            <ButtonLink to="/contact" variant="primary" className="hover:scale-[1.03] transition-transform">
              Contact Maxqo <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
};
