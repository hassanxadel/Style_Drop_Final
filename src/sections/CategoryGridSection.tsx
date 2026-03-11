/**
 * Category Grid Section Component
 * 
 * Displays category cards in a masonry-style grid layout with integrated sale banner.
 * Designed to convert to Shopify categories.liquid section.
 * 
 * Features:
 * - Responsive masonry grid
 * - Variable card sizes
 * - Section heading with badge
 * - Integrated sale banner below
 */

import { Link } from 'react-router-dom';
import { Category } from '@/types';
import CategoryCard from '@/components/CategoryCard';

import categoryWomen from '@/assets/category-women.jpg';
import categoryMen from '@/assets/category-men.jpg';
import categoryShoes from '@/assets/category-shoes.jpg';
import categoryAccessories from '@/assets/category-accessories.jpg';
import trending1 from '@/assets/trending-1.jpg';
import saleBanner from '@/assets/sale-banner.jpg';

const defaultCategories: Category[] = [
  {
    name: 'WOMEN',
    img: categoryWomen,
    span: 'col-span-1 row-span-2',
  },
  {
    name: 'MEN',
    img: categoryMen,
    span: 'col-span-1',
  },
  {
    name: 'SHOES',
    img: categoryShoes,
    span: 'col-span-1',
  },
  {
    name: 'ACCESSORIES',
    img: categoryAccessories,
    span: 'col-span-1',
  },
  {
    name: 'NEW IN',
    img: trending1,
    span: 'col-span-1',
  },
];

interface CategoryGridSectionProps {
  categories?: Category[];
}

const CategoryGridSection = ({ 
  categories = defaultCategories 
}: CategoryGridSectionProps) => {
  return (
    <section className="bg-background py-14">
      <div className="container px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Badge */}
          <span className="
            inline-block mb-4 px-3 py-1.5 
            bg-[#F5C800] rounded 
            font-condensed text-[14px] font-extrabold 
            uppercase tracking-[1.54px] text-[#0D0D0D]
          ">
            SHOP BY CATEGORY
          </span>

          {/* Heading - Bebas Neue 64px, line-height 60.8px, letter-spacing 1.92px */}
          <h2 className="font-display text-[64px] leading-[60.8px] tracking-[1.92px] font-normal">
            CLOTHES THAT FIT
            <br />
            <span className="text-accent">YOUR LIFE</span>
          </h2>
        </div>

        {/* Category Grid - Masonry Layout */}
        <div className="
          grid grid-cols-2 md:grid-cols-3 gap-4 mb-6
          auto-rows-[240px] md:auto-rows-[280px]
        ">
          {categories.map((category) => (
            <CategoryCard 
              key={category.name} 
              category={category} 
            />
          ))}
        </div>

        {/* Integrated Sale Banner */}
        <Link to="/collection" className="block">
          <div className="relative overflow-hidden rounded-2xl h-[200px] md:h-[240px] group cursor-pointer">
            {/* Background Image */}
            <img
              src={saleBanner}
              alt="Sale - Up to 50% Off"
              className="
                w-full h-full object-cover
                group-hover:scale-105 transition-transform duration-500
              "
            />

            {/* Overlay */}
            <div className="
              absolute inset-0 
              bg-gradient-to-t from-black/70 via-black/40 to-transparent
              flex items-center justify-center
            ">
              <div className="text-center px-4">
                {/* Title */}
                <h3 className="
                  font-display text-4xl md:text-6xl font-normal
                  text-white mb-2
                " style={{ letterSpacing: '0.05em' }}>
                  SALE — UP TO 50% OFF
                </h3>

                {/* Subtitle */}
                <p className="
                  text-white/80
                  text-xs md:text-sm mb-6
                ">
                  Limited time · While stocks last
                </p>

                {/* CTA Button */}
                <button className="btn-accent px-8 py-3 text-xs font-bold hover:bg-accent/90 transition-colors">
                  SHOP SALE
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryGridSection;
