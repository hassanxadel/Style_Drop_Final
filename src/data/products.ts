/**
 * Product Data
 * 
 * Mock product data for the e-commerce store.
 * In a real Shopify implementation, this would be replaced
 * with Liquid template variables pulling from the Shopify API.
 */

import { Product } from '@/types';

import productBiker from '@/assets/product-biker.jpg';
import productHoodie from '@/assets/product-hoodie.jpg';
import productTrench from '@/assets/product-trench.jpg';
import productAirforce from '@/assets/product-airforce.jpg';
import productTurtleneck from '@/assets/product-turtleneck.jpg';
import productPuffer from '@/assets/product-puffer.jpg';
import productDress from '@/assets/product-dress.jpg';
import productCargo from '@/assets/product-cargo.jpg';
import productBomber from '@/assets/product-bomber.jpg';

export const collectionProducts: Product[] = [
  {
    handle: 'leather-biker-jacket',
    img: productBiker,
    brand: 'ARITZIA',
    name: 'Leather Biker Jacket',
    price: 'EGP 1148.00',
    originalPrice: 'EGP 1198',
    colors: ['hsl(0 0% 10%)', 'hsl(0 0% 30%)', 'hsl(30 30% 40%)'],
    badge: '-25% OFF',
    badgeType: 'sale',
  },
  {
    handle: 'oversized-hoodie',
    img: productHoodie,
    brand: 'ESSENTIALS',
    name: 'Oversized Hoodie',
    price: 'EGP 1188.00',
    colors: ['hsl(0 0% 90%)', 'hsl(0 0% 10%)', 'hsl(30 30% 40%)'],
  },
  {
    img: productTrench,
    brand: 'ZARA',
    name: 'Classic Trench Coat',
    price: 'EGP 1124.00',
    colors: ['hsl(30 50% 60%)', 'hsl(0 0% 10%)', 'hsl(30 10% 80%)'],
  },
  {
    handle: 'air-force-1-07',
    img: productAirforce,
    brand: 'NIKE',
    name: 'Air Force 1 \'07',
    price: 'EGP 1110.00',
    colors: ['hsl(0 0% 95%)', 'hsl(0 0% 10%)', 'hsl(0 70% 50%)'],
  },
  {
    handle: 'ribbed-turtleneck',
    img: productTurtleneck,
    brand: 'COS',
    name: 'Ribbed Turtleneck',
    price: 'EGP 1175.00',
    colors: ['hsl(0 0% 90%)', 'hsl(0 0% 10%)'],
  },
  {
    handle: 'down-puffer-jacket',
    img: productPuffer,
    brand: 'CANADA GOOSE',
    name: 'Down Puffer Jacket',
    price: 'EGP 1235.00',
    originalPrice: 'EGP 1295',
    colors: ['hsl(0 70% 40%)', 'hsl(0 0% 10%)', 'hsl(30 30% 40%)'],
    badge: '-20% OFF',
    badgeType: 'sale',
  },
  {
    handle: 'wrap-midi-dress',
    img: productDress,
    brand: '& OTHER STORIES',
    name: 'Wrap Midi Dress',
    price: 'EGP 1196.00',
    colors: ['hsl(0 70% 50%)', 'hsl(0 0% 10%)', 'hsl(210 60% 50%)'],
    badge: '● NEW IN',
    badgeType: 'new',
  },
  {
    handle: 'relaxed-cargo-trousers',
    img: productCargo,
    brand: 'JACQUEMUS',
    name: 'Relaxed Cargo Trousers',
    price: 'EGP 1185.00',
    colors: ['hsl(120 20% 35%)', 'hsl(0 0% 10%)', 'hsl(30 10% 70%)'],
  },
  {
    handle: 'bomber-jacket',
    img: productBomber,
    brand: 'STRADIVARIUS',
    name: 'Bomber Jacket',
    price: 'EGP 1179.00',
    originalPrice: 'EGP 1109',
    colors: ['hsl(0 70% 40%)', 'hsl(120 20% 30%)', 'hsl(0 70% 50%)'],
    badge: '-27% OFF',
    badgeType: 'sale',
  },
];
