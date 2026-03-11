/**
 * Trending Products Section Component
 * 
 * Showcases trending products in a grid layout.
 * Designed to convert to Shopify featured-collection.liquid section.
 * 
 * Features:
 * - Dark section styling
 * - 4-column responsive grid
 * - Section heading with badge
 * - Product cards with tags
 */

import { Product } from '@/types';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import trending1 from '@/assets/trending-1.jpg';
import trending2 from '@/assets/trending-2.jpg';
import trending3 from '@/assets/trending-3.jpg';
import categoryWomen from '@/assets/category-women.jpg';

const defaultProducts: Product[] = [
  {
    img: trending1,
    brand: 'ARITZIA',
    name: 'Leather Biker Jacket',
    price: 'EGP 1198.00',
    colors: ['hsl(0 0% 10%)'],
    badge: 'BEST SELLER',
    badgeSecondary: 'FAST DROP',
  },
  {
    img: categoryWomen,
    brand: 'ESSENTIALS',
    name: 'Oversized Hoodie',
    price: 'EGP 1188.00',
    colors: ['hsl(0 0% 90%)'],
    badge: 'TRENDING',
    badgeSecondary: 'FAST DROP',
  },
  {
    img: trending2,
    brand: 'ZARA',
    name: 'Trench Coat',
    price: 'EGP 1124.00',
    colors: ['hsl(30 50% 60%)'],
    badge: 'NEW IN',
    badgeSecondary: undefined,
  },
  {
    img: trending3,
    brand: 'NIKE',
    name: "Air Force 1 '07",
    price: 'EGP 1110.00',
    colors: ['hsl(0 0% 90%)'],
    badge: 'BEST SELLER',
    badgeSecondary: 'FAST DROP',
  },
];

interface TrendingSectionProps {
  products?: Product[];
}

const TrendingSection = ({ 
  products = defaultProducts 
}: TrendingSectionProps) => {
  return (
    <section className="bg-[#0D0D0D] pt-16 pb-16">
      <div className="container px-8">
        {/* Figma: gap 40px, badge #F5C800, heading Bebas 60px/57px/3.6px */}
        <div className="flex items-end justify-between mb-14 gap-6">
          <div>
            <span className="inline-block mb-3 rounded px-1.5 py-0.5 bg-[#F5C800] font-condensed text-[15px] font-extrabold uppercase tracking-[3.54px] text-[#0D0D0D]">
              Trending Now
            </span>
            <h2 className="font-display font-normal text-[65px] leading-[55px] tracking-[1.7px] sub-heading-stretch-up text-white">
              STYLES THE INTERNET
              <br />
              <span className="text-[#DC2626]">CAN'T STOP</span> WEARING
            </h2>
          </div>
          <Link to="/collection" className="font-sans text-[13px] font-semibold text-white/70 hover:text-white hover:underline flex items-center gap-1.5">
            View all
            <span aria-hidden className="text-base">→</span>
          </Link>
        </div>

        {/* Figma: cards 270x378, white, rounded 16px, shadow 0px 2px 12px rgba(0,0,0,0.05) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((product, index) => (
            <Link 
              key={index} 
              to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group cursor-pointer flex flex-col w-full bg-white rounded-[16px] overflow-hidden shadow-[0px_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="relative w-full aspect-[270/280]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-[#DC2626] text-white font-sans text-[9px] font-bold leading-[14px] tracking-[0.9px] uppercase px-2 py-1">
                      ● {product.badge}
                    </span>
                    {product.badgeSecondary && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#0D0D0D] text-white font-sans text-[9px] font-bold leading-[14px] tracking-[0.72px] uppercase px-2 py-1">
                        <svg className="w-2 h-2 fill-white" viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
                        {product.badgeSecondary}
                      </span>
                    )}
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#0D0D0D] hover:bg-[#DC2626] hover:text-white transition-colors" aria-label="Wishlist">
                  <Heart size={15} strokeWidth={1.25} />
                </button>
              </div>
              <div className="p-3.5 flex flex-col">
                <p className="font-condensed text-[10px] font-bold tracking-[1.4px] text-[#0D0D0D]/45 uppercase">{product.brand}</p>
                <p className="font-sans text-sm font-semibold text-[#0D0D0D] mt-1">{product.name}</p>
                <div className="flex items-center justify-between gap-2 mt-2">
                  <span className="font-sans text-[15px] font-bold leading-[22px] text-[#0D0D0D]">{product.price}</span>
                  <span className="font-sans text-[9px] font-semibold leading-[14px] tracking-[0.45px] text-[#0D0D0D] px-2 py-1 rounded-full bg-[#F5F0EB]">
                    ↩ Free Returns
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
