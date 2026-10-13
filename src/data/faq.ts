export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Marketing sites usually take 4–8 weeks. Custom software and brand systems vary by scope — we share a clear timeline after discovery, typically in 1–2 week phases.',
  },
  {
    question: 'Do you work with startups and established companies?',
    answer:
      'Yes. We partner with founders shipping MVPs and with established UK teams that need a reliable digital partner for web, product, marketing, or design.',
  },
  {
    question: 'Can you handle strategy and build together?',
    answer:
      'That is our default. We keep strategy, design, and engineering in one team so the brief does not get lost between agencies.',
  },
  {
    question: 'What does engagement look like after launch?',
    answer:
      'We offer retainers for iteration, campaigns, and support — or a clean hand-off with documentation if you prefer to own day-to-day yourself.',
  },
  {
    question: 'How do pricing and proposals work?',
    answer:
      'After a short intro call we send a scoped proposal with deliverables, timeline, and investment. No surprise line items mid-project.',
  },
  {
    question: 'Do I need a full brief before contacting you?',
    answer:
      'No. A rough idea of goals, timeline, and budget is enough. Our contact form walks you through the details in three short steps.',
  },
];

export interface TechItem {
  name: string;
  category: string;
  service: 'web' | 'software' | 'marketing' | 'design' | 'all';
}

export const techStack: TechItem[] = [
  { name: 'React', category: 'Frontend', service: 'web' },
  { name: 'TypeScript', category: 'Frontend', service: 'web' },
  { name: 'Next.js', category: 'Frontend', service: 'web' },
  { name: 'Tailwind', category: 'Frontend', service: 'web' },
  { name: 'WordPress', category: 'CMS', service: 'web' },
  { name: 'Webflow', category: 'CMS', service: 'web' },
  { name: 'Node.js', category: 'Backend', service: 'software' },
  { name: 'PostgreSQL', category: 'Data', service: 'software' },
  { name: 'AWS', category: 'Cloud', service: 'software' },
  { name: 'API Integrations', category: 'Backend', service: 'software' },
  { name: 'Google Ads', category: 'Paid', service: 'marketing' },
  { name: 'Meta Ads', category: 'Paid', service: 'marketing' },
  { name: 'SEO / Analytics', category: 'Growth', service: 'marketing' },
  { name: 'Email / CRM', category: 'Lifecycle', service: 'marketing' },
  { name: 'Figma', category: 'Design', service: 'design' },
  { name: 'Design Systems', category: 'UI/UX', service: 'design' },
  { name: 'Brand Identity', category: 'Brand', service: 'design' },
  { name: 'Motion / UI', category: 'Design', service: 'design' },
];

export interface ServiceCapability {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const serviceCapabilities: ServiceCapability[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Sites and platforms built to convert and perform.',
    items: [
      'Marketing websites & landing pages',
      'E-commerce & product catalogues',
      'CMS setup (WordPress / headless)',
      'Performance, accessibility & SEO basics',
      'Migrations & redesigns',
    ],
  },
  {
    id: 'software',
    title: 'Custom Software',
    description: 'Tools shaped around how your team actually works.',
    items: [
      'Web apps & admin dashboards',
      'Internal ops & workflow tools',
      'API & third-party integrations',
      'MVP to production builds',
      'Hosting, security & maintenance',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Campaigns that bring the right people in.',
    items: [
      'Go-to-market & channel strategy',
      'SEO & content planning',
      'Paid search & social ads',
      'Email / lifecycle sequences',
      'Analytics, tracking & reporting',
    ],
  },
  {
    id: 'design',
    title: 'Brand & UI Design',
    description: 'Visual systems your customers recognise and trust.',
    items: [
      'Logo & brand identity',
      'UI/UX for web and apps',
      'Component design systems',
      'Marketing creatives & decks',
      'Prototypes & micro-interactions',
    ],
  },
];

export const industries = [
  'SaaS & technology',
  'Professional services',
  'Health & wellness',
  'Logistics & ops',
  'Creative studios',
  'Consumer brands',
  'Education',
  'Fintech & professional finance',
  'E-commerce',
  'Real estate',
  'Hospitality',
  'Non-profits',
];
