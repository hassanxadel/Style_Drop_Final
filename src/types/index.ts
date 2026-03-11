/**
 * Type Definitions
 * 
 * Centralized type definitions for the e-commerce application.
 * These types are designed to be Shopify-compatible for easy
 * conversion to Liquid templates.
 */

export interface Product {
  id?: string;
  img: string;
  brand: string;
  name: string;
  price: string;
  originalPrice?: string;
  colors: string[];
  badge?: string;
  badgeSecondary?: string;
  badgeType?: 'sale' | 'new' | 'outOfStock';
  rating?: number;
  reviewCount?: number;
}

export interface Brand {
  name: string;
  color: string;
  logo?: string;
  tagline?: string;
}

export interface Category {
  name: string;
  img: string;
  span?: string;
  link?: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  avatar?: string;
  date?: string;
}

export interface TrustFeature {
  icon: any;
  title: string;
  description: string;
}

export interface FilterOption {
  name: string;
  count?: number;
  active?: boolean;
}
