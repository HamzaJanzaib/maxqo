export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  problem: string;
  solution: string;
  outcome: string;
  accent: string;
  image: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'northline',
    title: 'Rebuilding a B2B platform that converts',
    client: 'Northline Logistics',
    industry: 'Logistics',
    services: ['Web', 'Design'],
    problem:
      'An outdated brochure site was failing to explain complex services or capture qualified leads.',
    solution:
      'We redesigned the brand system and shipped a modular marketing site with clear service journeys and enquiry flows.',
    outcome: '3.2× more qualified enquiries in the first quarter after launch.',
    accent: '#00C2A8',
    image: '/projects/northline.svg',
    imageAlt: 'Northline Logistics web platform mockup',
  },
  {
    id: 'folio',
    title: 'Custom ops dashboard for a growing studio',
    client: 'Folio Creative',
    industry: 'Creative services',
    services: ['Software', 'Design'],
    problem:
      'Project tracking lived across spreadsheets, Slack, and email — slowing delivery and billing.',
    solution:
      'Built a tailored web app for projects, time, and client status with role-based access for the team.',
    outcome: 'Cut weekly admin time by ~12 hours and improved on-time delivery.',
    accent: '#1F6FEB',
    image: '/projects/folio.svg',
    imageAlt: 'Folio Creative operations dashboard mockup',
  },
  {
    id: 'peakwell',
    title: 'Launch campaign for a wellness brand',
    client: 'Peakwell',
    industry: 'Health & wellness',
    services: ['Marketing', 'Design'],
    problem:
      'A strong product lacked a coherent digital presence and paid acquisition strategy.',
    solution:
      'Delivered brand refresh, landing pages, and a paid + organic campaign with weekly optimisation.',
    outcome: '40% lower cost-per-lead within 60 days of campaign launch.',
    accent: '#E85D04',
    image: '/projects/peakwell.svg',
    imageAlt: 'Peakwell marketing and brand campaign mockup',
  },
  {
    id: 'arc',
    title: 'Product site for a SaaS MVP',
    client: 'Arc Metrics',
    industry: 'SaaS',
    services: ['Web', 'Software', 'Design'],
    problem:
      'The founding team needed a credible product site and waitlist before raising their next round.',
    solution:
      'Shipped a high-fidelity marketing site, waitlist product, and early analytics instrumentation.',
    outcome: '1,800 waitlist signups in six weeks from organic and partner traffic.',
    accent: '#7C3AED',
    image: '/projects/arc.svg',
    imageAlt: 'Arc Metrics SaaS product website mockup',
  },
];
