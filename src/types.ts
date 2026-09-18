export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  memberLimit: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  metric?: string;
}

export interface ClassScheduleItem {
  time: string;
  name: string;
  instructor: string;
  enrolled: number;
  capacity: number;
  waitlist: number;
  room: string;
  tag: string;
  tagColor: string;
}

export interface MemberCheckIn {
  id: string;
  name: string;
  avatar: string;
  timeAgo: string;
  membership: string;
  status: 'Checked in' | 'Access Granted' | 'Guest Pass';
  class?: string;
}

export interface TrialFormData {
  fullName: string;
  workEmail: string;
  gymName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  gymName: string;
  location: string;
  category: 'Strength & Conditioning' | 'CrossFit & Group' | 'Yoga & Pilates' | 'Combat & Boxing';
  quote: string;
  highlightMetric: string;
  metricLabel: string;
  rating: number;
  initials: string;
  avatarColor: string;
  switchedFrom: string;
  memberCount: string;
}
