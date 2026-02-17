export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: 'Home' | 'Commercial' | 'Industrial';
  image: string;
  capacity: string;
  filtrationStages: string;
  warranty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
