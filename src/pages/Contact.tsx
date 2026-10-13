import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { CustomSelect } from '../components/ui/CustomSelect';
import { PageHero } from '../components/Reveal';
import { serviceOptions } from '../data/services';
import type { ContactFormData } from '../types';

const budgetOptions = [
  'Under £5,000',
  '£5,000 – £15,000',
  '£15,000 – £40,000',
  '£40,000 – £80,000',
  '£80,000+',
  'Not sure yet',
];

const timelineOptions = [
  'ASAP / Urgent',
  'Within 1–2 months',
  'In 3–6 months',
  '6+ months',
  'Exploring / no rush',
];

const projectTypes = [
  'New website',
  'Website redesign',
  'Custom software / app',
  'Brand identity',
  'Marketing campaign',
  'Ongoing retainer',
  'Not sure — need advice',
];

const teamSizes = ['Just me', '2–10', '11–50', '51–200', '200+'];

const startOptions = ['This week', 'Next 2–4 weeks', 'Next quarter', 'Flexible'];

const sourceOptions = [
  'Google search',
  'Referral / word of mouth',
  'LinkedIn',
  'Social media',
  'Existing client',
  'Event / podcast',
  'Other',
];

const contactMethods = ['Email', 'Phone', 'Video call', 'Either'];

const bestTimes = ['Morning (UK)', 'Afternoon (UK)', 'Evening (UK)', 'Anytime'];

const STEPS = [
  { id: 0, label: 'About you', hint: 'Your details' },
  { id: 1, label: 'Project scope', hint: 'Services & timing' },
  { id: 2, label: 'Project details', hint: 'Goals & brief' },
] as const;

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  company: '',
  jobTitle: '',
  phone: '',
  website: '',
  services: [],
  projectType: '',
  budget: '',
  timeline: '',
  startPreference: '',
  teamSize: '',
  source: '',
  goals: '',
  challenges: '',
  inspiration: '',
  details: '',
  preferredContact: 'Email',
  bestTime: 'Anytime',
  newsletter: false,
  nda: false,
};

export const Contact: React.FC = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleService = (value: string) => {
    setForm((prev) => {
      const next = prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value];
      return { ...prev, services: next };
    });
    setErrors((prev) => ({ ...prev, services: undefined }));
  };

  const validateStep = (current: number) => {
    const next: Partial<Record<keyof ContactFormData, string>> = {};
    if (current === 0) {
      if (!form.name.trim()) next.name = 'Please enter your name';
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        next.email = 'Enter a valid email address';
      }
    }
    if (current === 1) {
      if (form.services.length === 0) next.services = 'Select at least one service';
      if (!form.projectType) next.projectType = 'Select a project type';
    }
    if (current === 2) {
      if (!form.goals.trim() || form.goals.trim().length < 15) {
        next.goals = 'Share your main goals (15+ characters)';
      }
      if (!form.details.trim() || form.details.trim().length < 20) {
        next.details = 'Add project details (20+ characters)';
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setDirection(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  };

  const goToStep = (target: number) => {
    if (target === step) return;
    if (target < step) {
      setDirection(-1);
      setErrors({});
      setStep(target);
      return;
    }
    // only advance if current (and intermediates) valid
    for (let i = step; i < target; i++) {
      if (!validateStep(i)) {
        setDirection(1);
        setStep(i);
        return;
      }
    }
    setDirection(1);
    setStep(target);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      goNext();
      return;
    }
    if (!validateStep(2)) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const fieldClass =
    'w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-shadow';
  const labelClass = 'block text-sm font-medium text-ink mb-1.5';
  const errorClass = 'mt-1 text-xs text-red-600';

  const slide = {
    enter: (dir: number) => ({ x: dir > 0 ? 28 : -28, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -28 : 28, opacity: 0 }),
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build."
        description="The more detail you share, the faster we can propose a clear first phase. We reply within one business day."
        image="/projects/arc.svg"
      />

      <Section className="!pt-10 sm:!pt-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Sticky left panel */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold mb-4">Reach us directly</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-teal shrink-0">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Email</p>
                    <a href="mailto:hello@maxqo.co.uk" className="text-muted hover:text-teal-dark">
                      hello@maxqo.co.uk
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-teal shrink-0">
                    <Phone size={16} />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Phone</p>
                    <p className="text-muted">Available on request after enquiry</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-teal shrink-0">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Location</p>
                    <p className="text-muted">United Kingdom · Remote-friendly worldwide</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-teal shrink-0">
                    <Clock size={16} />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Response time</p>
                    <p className="text-muted">Within 1 business day (Mon–Fri)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-paper-dim border border-line p-5 space-y-3">
              <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                <MessageSquare size={16} className="text-teal-dark" />
                What happens next
              </div>
              <ol className="space-y-2.5 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="font-mono text-teal-dark text-xs mt-0.5">01</span>
                  We review your brief and goals
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-teal-dark text-xs mt-0.5">02</span>
                  Reply with questions or a call invite
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-teal-dark text-xs mt-0.5">03</span>
                  Share a scoped proposal if it’s a fit
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-line bg-white p-5 flex gap-3">
              <Shield size={18} className="text-teal-dark shrink-0 mt-0.5" />
              <p className="text-sm text-muted leading-relaxed">
                Your details stay private. We never sell contact data. Tick NDA if you need confidentiality before sharing sensitive plans.
              </p>
            </div>
          </aside>

          {/* Multi-step form */}
          <div className="lg:col-span-8 min-w-0">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-line bg-white p-8 sm:p-10 text-center shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                  >
                    <CheckCircle2 className="mx-auto text-teal-dark mb-4" size={48} />
                  </motion.div>
                  <h2 className="font-display text-2xl font-bold mb-2">Message received</h2>
                  <p className="text-muted max-w-md mx-auto leading-relaxed">
                    Thanks, {form.name.split(' ')[0] || 'there'}. We’ll reply within one business day at{' '}
                    <span className="text-ink font-medium">{form.email}</span>
                    {form.preferredContact !== 'Email'
                      ? ` via ${form.preferredContact.toLowerCase()}`
                      : ''}
                    .
                  </p>
                  {form.nda && (
                    <p className="mt-3 text-sm text-teal-dark font-medium">
                      NDA request noted — we’ll follow up on confidentiality before deep-dive.
                    </p>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-6"
                    onClick={() => {
                      setSuccess(false);
                      setForm(emptyForm);
                      setStep(0);
                      setErrors({});
                    }}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={onSubmit}
                  className="rounded-2xl border border-line bg-white p-5 sm:p-8 shadow-sm overflow-visible"
                  noValidate
                >
                  {/* Step progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <p className="text-sm font-medium text-ink">
                        Step {step + 1} of {STEPS.length}
                      </p>
                      <p className="text-xs text-muted">{STEPS[step].hint}</p>
                    </div>
                    <div className="flex gap-2 mb-4">
                      {STEPS.map((s) => (
                        <div
                          key={s.id}
                          className="h-1.5 flex-1 rounded-full bg-paper-dim overflow-hidden"
                        >
                          <motion.div
                            className="h-full bg-teal rounded-full"
                            initial={false}
                            animate={{ width: step >= s.id ? '100%' : '0%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {STEPS.map((s) => {
                        const active = s.id === step;
                        const done = s.id < step;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => goToStep(s.id)}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold border transition-colors ${
                              active
                                ? 'bg-ink text-white border-ink'
                                : done
                                  ? 'bg-teal/15 text-teal-dark border-teal/30'
                                  : 'bg-white text-muted border-line hover:border-ink/25'
                            }`}
                          >
                            {done ? '✓ ' : `${s.id + 1}. `}
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative min-h-[320px]">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={step}
                        custom={direction}
                        variants={slide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.22 }}
                      >
                        {step === 0 && (
                          <div>
                            <h3 className="font-display text-xl font-bold text-ink mb-5">About you</h3>
                            <div className="grid sm:grid-cols-2 gap-5">
                              <div>
                                <label htmlFor="name" className={labelClass}>
                                  Full name *
                                </label>
                                <input
                                  id="name"
                                  className={fieldClass}
                                  value={form.name}
                                  onChange={(e) => update('name', e.target.value)}
                                  autoComplete="name"
                                  placeholder="Jane Smith"
                                />
                                {errors.name && <p className={errorClass}>{errors.name}</p>}
                              </div>
                              <div>
                                <label htmlFor="email" className={labelClass}>
                                  Work email *
                                </label>
                                <input
                                  id="email"
                                  type="email"
                                  className={fieldClass}
                                  value={form.email}
                                  onChange={(e) => update('email', e.target.value)}
                                  autoComplete="email"
                                  placeholder="jane@company.com"
                                />
                                {errors.email && <p className={errorClass}>{errors.email}</p>}
                              </div>
                              <div>
                                <label htmlFor="company" className={labelClass}>
                                  Company
                                </label>
                                <input
                                  id="company"
                                  className={fieldClass}
                                  value={form.company}
                                  onChange={(e) => update('company', e.target.value)}
                                  autoComplete="organization"
                                  placeholder="Acme Ltd"
                                />
                              </div>
                              <div>
                                <label htmlFor="jobTitle" className={labelClass}>
                                  Job title
                                </label>
                                <input
                                  id="jobTitle"
                                  className={fieldClass}
                                  value={form.jobTitle}
                                  onChange={(e) => update('jobTitle', e.target.value)}
                                  placeholder="Founder, Marketing lead…"
                                />
                              </div>
                              <div>
                                <label htmlFor="phone" className={labelClass}>
                                  Phone
                                </label>
                                <input
                                  id="phone"
                                  type="tel"
                                  className={fieldClass}
                                  value={form.phone}
                                  onChange={(e) => update('phone', e.target.value)}
                                  autoComplete="tel"
                                  placeholder="+44…"
                                />
                              </div>
                              <div>
                                <label htmlFor="website" className={labelClass}>
                                  Website / product URL
                                </label>
                                <input
                                  id="website"
                                  type="url"
                                  className={fieldClass}
                                  value={form.website}
                                  onChange={(e) => update('website', e.target.value)}
                                  placeholder="https://"
                                />
                              </div>
                              <CustomSelect
                                id="teamSize"
                                label="Company / team size"
                                value={form.teamSize}
                                onChange={(v) => update('teamSize', v)}
                                options={teamSizes}
                                placeholder="Select size"
                              />
                              <CustomSelect
                                id="source"
                                label="How did you find Maxqo?"
                                value={form.source}
                                onChange={(v) => update('source', v)}
                                options={sourceOptions}
                                placeholder="Select an option"
                              />
                            </div>
                          </div>
                        )}

                        {step === 1 && (
                          <div>
                            <h3 className="font-display text-xl font-bold text-ink mb-5">
                              Project scope
                            </h3>
                            <div className="mb-5">
                              <p className={labelClass}>Services interested in *</p>
                              <div className="flex flex-wrap gap-2">
                                {serviceOptions.map((opt) => {
                                  const active = form.services.includes(opt.value);
                                  return (
                                    <motion.button
                                      key={opt.value}
                                      type="button"
                                      whileTap={{ scale: 0.97 }}
                                      onClick={() => toggleService(opt.value)}
                                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                                        active
                                          ? 'border-ink bg-ink text-white'
                                          : 'border-line bg-white text-ink hover:border-ink/30'
                                      }`}
                                    >
                                      {opt.label}
                                    </motion.button>
                                  );
                                })}
                              </div>
                              {errors.services && <p className={errorClass}>{errors.services}</p>}
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                              <CustomSelect
                                id="projectType"
                                className="sm:col-span-2"
                                label="Project type"
                                required
                                value={form.projectType}
                                onChange={(v) => update('projectType', v)}
                                options={projectTypes}
                                placeholder="Select project type"
                                error={errors.projectType}
                              />
                              <CustomSelect
                                id="budget"
                                label="Budget range"
                                value={form.budget}
                                onChange={(v) => update('budget', v)}
                                options={budgetOptions}
                                placeholder="Select budget"
                              />
                              <CustomSelect
                                id="timeline"
                                label="Ideal timeline"
                                value={form.timeline}
                                onChange={(v) => update('timeline', v)}
                                options={timelineOptions}
                                placeholder="Select timeline"
                              />
                              <CustomSelect
                                id="startPreference"
                                label="Preferred start"
                                value={form.startPreference}
                                onChange={(v) => update('startPreference', v)}
                                options={startOptions}
                                placeholder="Select start"
                              />
                              <CustomSelect
                                id="preferredContact"
                                label="Preferred contact method"
                                value={form.preferredContact}
                                onChange={(v) => update('preferredContact', v)}
                                options={contactMethods}
                                placeholder="Select contact method"
                              />
                              <CustomSelect
                                id="bestTime"
                                className="sm:col-span-2"
                                label="Best time to reach you"
                                value={form.bestTime}
                                onChange={(v) => update('bestTime', v)}
                                options={bestTimes}
                                placeholder="Select time"
                              />
                            </div>
                          </div>
                        )}

                        {step === 2 && (
                          <div>
                            <h3 className="font-display text-xl font-bold text-ink mb-5">
                              Project details
                            </h3>
                            <div className="space-y-5">
                              <div>
                                <label htmlFor="goals" className={labelClass}>
                                  Main goals *
                                </label>
                                <textarea
                                  id="goals"
                                  rows={3}
                                  className={`${fieldClass} resize-y`}
                                  placeholder="e.g. Launch a new site that converts demos, or automate internal reporting…"
                                  value={form.goals}
                                  onChange={(e) => update('goals', e.target.value)}
                                />
                                {errors.goals && <p className={errorClass}>{errors.goals}</p>}
                              </div>
                              <div>
                                <label htmlFor="challenges" className={labelClass}>
                                  Current challenges
                                </label>
                                <textarea
                                  id="challenges"
                                  rows={3}
                                  className={`${fieldClass} resize-y`}
                                  placeholder="What’s blocking you today? Tools, traffic, brand clarity, delivery speed…"
                                  value={form.challenges}
                                  onChange={(e) => update('challenges', e.target.value)}
                                />
                              </div>
                              <div>
                                <label htmlFor="inspiration" className={labelClass}>
                                  Inspiration / competitor links
                                </label>
                                <textarea
                                  id="inspiration"
                                  rows={2}
                                  className={`${fieldClass} resize-y`}
                                  placeholder="Paste URLs you like (or dislike) and a short note why"
                                  value={form.inspiration}
                                  onChange={(e) => update('inspiration', e.target.value)}
                                />
                              </div>
                              <div>
                                <label htmlFor="details" className={labelClass}>
                                  Full project brief *
                                </label>
                                <textarea
                                  id="details"
                                  rows={5}
                                  className={`${fieldClass} resize-y min-h-[120px]`}
                                  placeholder="Audience, must-have features, integrations, constraints, success metrics…"
                                  value={form.details}
                                  onChange={(e) => update('details', e.target.value)}
                                />
                                {errors.details && <p className={errorClass}>{errors.details}</p>}
                              </div>

                              <div className="space-y-3 pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                  <input
                                    type="checkbox"
                                    className="mt-1 rounded border-line text-teal focus:ring-teal"
                                    checked={form.nda}
                                    onChange={(e) => update('nda', e.target.checked)}
                                  />
                                  <span className="text-sm text-muted group-hover:text-ink transition-colors">
                                    <span className="font-medium text-ink">Request NDA</span> — I’d like a confidentiality agreement before sharing sensitive materials.
                                  </span>
                                </label>
                                <label className="flex items-start gap-3 cursor-pointer group">
                                  <input
                                    type="checkbox"
                                    className="mt-1 rounded border-line text-teal focus:ring-teal"
                                    checked={form.newsletter}
                                    onChange={(e) => update('newsletter', e.target.checked)}
                                  />
                                  <span className="text-sm text-muted group-hover:text-ink transition-colors">
                                    <span className="font-medium text-ink">Occasional updates</span> — send me Maxqo insights on product, design, and growth.
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Nav actions */}
                  <div className="mt-8 pt-5 border-t border-line flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      {step > 0 ? (
                        <Button type="button" variant="ghost" onClick={goBack} className="!px-3">
                          <ArrowLeft size={16} /> Back
                        </Button>
                      ) : (
                        <p className="text-xs text-muted hidden sm:block">
                          Takes about 2–3 minutes
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      {step === STEPS.length - 1 && (
                        <p className="text-xs text-muted order-2 sm:order-1 sm:max-w-[200px] sm:text-right">
                          We’ll reply within 1 business day.
                        </p>
                      )}
                      {step < STEPS.length - 1 ? (
                        <Button type="button" onClick={goNext} className="order-1 w-full sm:w-auto">
                          Continue <ArrowRight size={16} />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={submitting}
                          className="order-1 w-full sm:w-auto min-w-[180px]"
                        >
                          {submitting ? (
                            <>
                              <Loader2 size={16} className="animate-spin" /> Sending…
                            </>
                          ) : (
                            <>
                              Send enquiry <ArrowRight size={16} />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </>
  );
};
