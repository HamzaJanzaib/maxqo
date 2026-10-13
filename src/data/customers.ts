export interface CustomerStory {
  id: string;
  company: string;
  name: string;
  role: string;
  quote: string;
  result: string;
  service: string;
  avatar: string;
  logoLabel: string;
}

export const customers: CustomerStory[] = [
  {
    id: 'northline',
    company: 'Northline Logistics',
    name: 'Amelia Hart',
    role: 'Founder',
    quote:
      'Maxqo rebuilt our website and brand in weeks — the new site finally matches how we sell.',
    result: '3.2× more qualified enquiries',
    service: 'Web & Design',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
    logoLabel: 'Northline',
  },
  {
    id: 'folio',
    company: 'Folio Creative',
    name: 'James Okonkwo',
    role: 'Director',
    quote:
      'Their software team understood our ops mess and turned it into a tool the whole studio uses daily.',
    result: '~12 hrs admin saved weekly',
    service: 'Custom Software',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    logoLabel: 'Folio',
  },
  {
    id: 'peakwell',
    company: 'Peakwell',
    name: 'Priya Shah',
    role: 'CMO',
    quote:
      'Clear strategy, sharp creative, and reporting we actually read. Marketing that feels under control.',
    result: '40% lower cost-per-lead',
    service: 'Marketing & Design',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
    logoLabel: 'Peakwell',
  },
  {
    id: 'arc',
    company: 'Arc Metrics',
    name: 'Daniel Ruiz',
    role: 'CEO',
    quote:
      'They shipped a credible product site and waitlist fast — exactly what we needed before our raise.',
    result: '1,800 waitlist signups',
    service: 'Web & Product',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
    logoLabel: 'Arc',
  },
];
