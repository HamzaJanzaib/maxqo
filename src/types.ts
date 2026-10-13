export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  website: string;
  services: string[];
  projectType: string;
  budget: string;
  timeline: string;
  startPreference: string;
  teamSize: string;
  source: string;
  goals: string;
  challenges: string;
  inspiration: string;
  details: string;
  preferredContact: string;
  bestTime: string;
  newsletter: boolean;
  nda: boolean;
}

export interface NavLink {
  to: string;
  label: string;
}
