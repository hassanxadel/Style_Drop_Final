/**
 * Filter Sidebar Component
 * 
 * Product collection filters with collapsible sections.
 * Designed to convert to Shopify collection-filters.liquid section.
 * 
 * Features:
 * - Category filters with item counts
 * - Price range inputs
 * - Size selection buttons
 * - Color swatches
 * - Availability checkboxes
 * - Brand checkboxes
 * - Collapsible sections
 * 
 * This component is structured to work with Shopify's filtering API.
 */

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { FilterOption } from '@/types';

interface FilterSectionProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const FilterSection = ({ 
  title, 
  defaultOpen = true, 
  children 
}: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border pb-4 mb-4">
      {/* Section Header - Clickable to toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center justify-between 
          w-full font-display text-lg
        "
        aria-expanded={isOpen}
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Section Content - Collapsible */}
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
};

const FilterSidebar = () => {
  const categoryOptions: FilterOption[] = [
    { name: 'All', count: 18, active: true },
    { name: 'Women', count: 11 },
    { name: 'Men', count: 6 },
    { name: 'Shoes', count: 1 },
    { name: 'Accessories', count: 0 },
    { name: 'New In', count: 5 },
    { name: 'Sale', count: 5 },
  ];

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colorSwatches = [
    'hsl(0 0% 98%)',
    'hsl(0 0% 10%)',
    'hsl(200 10% 50%)',
    'hsl(45 60% 50%)',
    'hsl(0 70% 50%)',
    'hsl(120 40% 45%)',
    'hsl(210 70% 50%)',
    'hsl(350 60% 50%)',
    'hsl(300 40% 50%)',
    'hsl(30 10% 60%)',
  ];

  const brandOptions = [
    'ZARA',
    'COS',
    'H&M',
    'Nike',
    'Essentials',
    'Canada Goose',
    'Jacquemus',
    'Stradivarius',
  ];

  return (
    <aside
      className="
      bg-[#050505] text-white rounded-3xl
      p-6 border border-[#1C1C1C]
      h-fit shadow-[0_16px_30px_rgba(0,0,0,0.35)]
    "
    >
      {/* Filters Heading */}
      <h3 className="font-display text-xl mb-4 tracking-[0.16em] uppercase">
        FILTERS
      </h3>

      {/* Product Categories Filter */}
      <FilterSection title="PRODUCT CATEGORIES">
        <div className="space-y-2">
          {categoryOptions.map((category) => (
            <button
              key={category.name}
              className={`
                flex items-center justify-between 
                w-full text-sm py-2 px-3 rounded-xl
                ${
                  category.active
                    ? 'bg-[#701F1B] text-white font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }
              `}
            >
              <span>{category.name}</span>
              <span
                className={
                  category.active 
                    ? 'text-white' 
                    : 'text-white/40'
                }
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection title="PRICE">
        <div className="flex gap-3">
          {/* Min Price Input */}
          <div className="flex-1">
            <label className="text-[10px] text-white/50">
              Min price
            </label>
            <div className="
              flex items-center 
              border border-white/10 rounded-xl 
              bg-[#111111]
              px-2 py-1.5 mt-1
            ">
              <span className="text-xs text-white/50 mr-1">EGP</span>
              <input
                type="number"
                defaultValue={0}
                className="
                  w-full text-sm 
                  bg-transparent outline-none text-white
                "
              />
            </div>
          </div>

          {/* Max Price Input */}
          <div className="flex-1">
            <label className="text-[10px] text-white/50">
              Max price
            </label>
            <div className="
              flex items-center 
              border border-white/10 rounded-xl 
              bg-[#111111]
              px-2 py-1.5 mt-1
            ">
              <span className="text-xs text-white/50 mr-1">EGP</span>
              <input
                type="number"
                defaultValue={500}
                className="
                  w-full text-sm 
                  bg-transparent outline-none text-white
                "
              />
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Size Filter */}
      <FilterSection title="SIZE">
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map((size) => (
            <button
              key={size}
              className="
                border border-white/15 rounded-xl 
                px-3 py-1.5 text-xs 
                text-white/80
                hover:border-white hover:text-white 
                transition-colors
              "
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Color Filter */}
      <FilterSection title="COLORS">
        <div className="flex flex-wrap gap-2">
          {colorSwatches.map((color, index) => (
            <button
              key={index}
              className="
                w-7 h-7 rounded-full 
                border-2 border-transparent 
                hover:border-white 
                transition-colors
              "
              style={{ backgroundColor: color }}
              aria-label={`Filter by color ${index + 1}`}
            />
          ))}
        </div>
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection title="AVAILABILITY">
        <div className="space-y-2">
          {/* In Stock */}
          <label className="
            flex items-center justify-between 
            text-sm cursor-pointer
          ">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-accent" />
              <span>In stock</span>
            </div>
            <span className="text-[#F04B32] text-xs">16</span>
          </label>

          {/* Out of Stock */}
          <label className="
            flex items-center justify-between 
            text-sm cursor-pointer
          ">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-accent" />
              <span>Out of stock</span>
            </div>
            <span className="text-white/40 text-xs">2</span>
          </label>
        </div>
      </FilterSection>

      {/* Brands Filter */}
      <FilterSection title="BRANDS" defaultOpen={false}>
        <div className="space-y-2">
          {brandOptions.map((brand) => (
            <label
              key={brand}
              className="
                flex items-center gap-2 
                text-sm cursor-pointer
                text-white/80 hover:text-white
              "
            >
              <input type="checkbox" className="accent-accent" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;
