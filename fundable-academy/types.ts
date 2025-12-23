export type ProductTier = 'FREE' | 'STARTER' | 'GROWTH' | 'ELITE';

export interface Product {
  id: string;
  tier: ProductTier;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  href: string;
  isExternal?: boolean;
  image?: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  metric?: string;
}

export interface Founder {
  name: string;
  bio: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}