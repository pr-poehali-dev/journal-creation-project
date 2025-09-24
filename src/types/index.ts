export interface Article {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Interview {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  readTime: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  photographer: string;
  description: string;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
}