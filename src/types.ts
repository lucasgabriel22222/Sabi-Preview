export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  badge?: string;
  whatsappMessage: string;
}

export interface ProductServiceItem {
  id: string;
  category: 'racoes' | 'banho-tosa' | 'farmacia' | 'acessorios' | 'agro-aves';
  title: string;
  tag: string;
  tagType: 'best-seller' | 'sale' | 'new' | 'popular';
  priceDesc: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
