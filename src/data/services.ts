export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'web',
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web',
    tagline: 'Fast, conversion-focused websites that feel premium.',
    description:
      'We design and build marketing sites, product pages, and web apps that load quickly, look sharp, and turn visitors into customers. From landing pages to complex multi-page platforms.',
    outcomes: [
      'Higher conversion rates from clearer journeys',
      'Stronger brand presence across every screen',
      'Sites that are easy for your team to update',
    ],
    deliverables: [
      'Custom website design & build',
      'Landing pages & microsites',
      'CMS setup & training',
      'Performance & SEO foundations',
      'Ongoing support & iteration',
    ],
    process: ['Discovery & sitemap', 'Design & prototype', 'Build & launch', 'Measure & improve'],
  },
  {
    id: 'software',
    slug: 'custom-software',
    title: 'Custom Software',
    shortTitle: 'Software',
    tagline: 'Tools shaped around how your business actually works.',
    description:
      'When off-the-shelf software falls short, we build tailored web applications, dashboards, and internal tools that automate workflows and give your team clarity.',
    outcomes: [
      'Less manual work through smart automation',
      'Systems that fit your processes, not the other way around',
      'Scalable foundations as you grow',
    ],
    deliverables: [
      'Product discovery & scoping',
      'Web apps & admin dashboards',
      'API integrations',
      'MVP to production builds',
      'Maintenance & feature roadmaps',
    ],
    process: ['Map workflows', 'Prototype & validate', 'Build & integrate', 'Ship & support'],
  },
  {
    id: 'marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Marketing',
    tagline: 'Campaigns that bring the right people to your brand.',
    description:
      'We plan and run digital marketing that connects strategy, creative, and channels — so your message reaches the people who matter and drives measurable growth.',
    outcomes: [
      'Qualified traffic from channels that convert',
      'Clear reporting you can act on',
      'Consistent brand voice across campaigns',
    ],
    deliverables: [
      'Go-to-market strategy',
      'SEO & content marketing',
      'Paid ads (search & social)',
      'Email & lifecycle campaigns',
      'Analytics & attribution',
    ],
    process: ['Audit & goals', 'Strategy & creative', 'Launch & optimise', 'Report & scale'],
  },
  {
    id: 'design',
    slug: 'brand-design',
    title: 'Brand & UI Design',
    shortTitle: 'Design',
    tagline: 'Visual systems that make your product unmistakable.',
    description:
      'From brand identity to product interfaces, we craft design that feels intentional — logos, visual languages, and UI systems your customers recognise and trust.',
    outcomes: [
      'A cohesive brand across web and product',
      'Interfaces that feel simple to use',
      'Assets your team can reuse confidently',
    ],
    deliverables: [
      'Logo & brand identity',
      'UI/UX for web & apps',
      'Design systems',
      'Marketing collateral',
      'Motion & micro-interactions',
    ],
    process: ['Brand discovery', 'Concepts & direction', 'System & assets', 'Hand-off & guide'],
  },
];

export const serviceOptions = [
  { value: 'web', label: 'Web Development' },
  { value: 'software', label: 'Custom Software' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'design', label: 'Brand & UI Design' },
  { value: 'other', label: 'Other / Not sure' },
];
