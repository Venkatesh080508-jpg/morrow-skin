export type ProductCategory = 
  | 'all'
  | 'cleansers' 
  | 'toners' 
  | 'serums' 
  | 'moisturizers' 
  | 'suncare' 
  | 'treatments';

export type SkinConcern = 
  | 'all'
  | 'hydration' 
  | 'barrier' 
  | 'redness' 
  | 'radiance' 
  | 'firmness';

export type SkinType = 
  | 'all'
  | 'dry' 
  | 'oily' 
  | 'combination' 
  | 'sensitive' 
  | 'normal';

export interface ProductSize {
  label: string;
  volume: string;
  price: number;
}

export interface KeyIngredient {
  name: string;
  purpose: string;
  percentage?: string;
}

export interface HowToUseStep {
  step: string;
  instruction: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  details: string;
  benefits: string[];
  keyIngredients: KeyIngredient[];
  fullIngredients: string;
  howToUse: HowToUseStep[];
  skinConcerns: SkinConcern[];
  skinTypes: SkinType[];
  volume: string;
  sizes: ProductSize[];
  routineStep: string;
  badge?: string;
  images: string[];
  inStock: boolean;
  pairedWith: string[];
}

export interface CartItem {
  id: string; // composite key: `${product.id}-${selectedSize.volume}`
  product: Product;
  quantity: number;
  selectedSize: ProductSize;
}

export interface Review {
  id: string;
  productId?: string;
  productName?: string;
  author: string;
  skinType: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatarBg?: string;
}

export interface FilterState {
  category: ProductCategory;
  concern: SkinConcern;
  skinType: SkinType;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  searchQuery: string;
}

export interface QuizState {
  primaryGoal: string;
  skinType: string;
  routinePreference: string;
}
