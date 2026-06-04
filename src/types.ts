export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: 'Vêtements' | 'Accessoires' | 'Électronique' | 'Cosmétiques';
  image: string;
  description: string;
}

export interface ServicePole {
  id: string;
  title: string;
  description: string;
  subservices: string[];
  iconName: 'groups' | 'celebration' | 'trending_up' | 'chat_bubble';
}

export interface FixedPriceEvent {
  id: string;
  title: string;
  description: string;
  price: number;
  formattedPrice: string;
  pricePrefix?: string;
  priceSuffix?: string;
  iconName: 'favorite' | 'cake' | 'business_center' | 'nightlife';
  image?: string;
  tagline?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}
