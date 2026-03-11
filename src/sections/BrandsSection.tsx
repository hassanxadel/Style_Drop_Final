/**
 * Brands Section Component
 * 
 * Showcases featured brands in a horizontal scrollable grid.
 * Designed to convert to Shopify brands.liquid section.
 * 
 * Features:
 * - Horizontal scroll on mobile
 * - Section heading with link
 * - Reusable brand cards
 * 
 * Props:
 * - brands: Array of Brand objects (optional, uses default data)
 */

import { Brand } from '@/types';
import { Link } from 'react-router-dom';
import { featuredBrands } from '@/data/brands';

interface BrandsSectionProps {
  brands?: Brand[];
}

const BrandsSection = ({ brands = featuredBrands }: BrandsSectionProps) => {
  return (
    <section className="bg-[#F5F0EB] py-16">
      <div className="container px-8">
        {/* Figma: padding 64px 0, gap 32px */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            {/* Badge - FEATURED BRANDS */}
            <span className="inline-block mb-3 rounded px-3 py-1 bg-[#F5C800] font-condensed text-[11px] font-extrabold uppercase tracking-[1.54px] text-[#0D0D0D]">
              FEATURED BRANDS
            </span>
            {/* Heading - 200+ BRANDS / ONE PLATFORM */}
            <h2 className="font-display font-normal text-[52px] leading-[49px] tracking-[0.12px] text-[#0D0D0D]">
              200+ BRANDS
              <br />
              ONE PLATFORM
            </h2>
          </div>
          <Link
            to="/collection"
            className="font-sans text-[14px] font-semibold tracking-[0.18em] uppercase text-[#0D0D0D]/70 hover:text-[#0D0D0D] flex items-center gap-1"
          >
            All brands
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Figma: cards 160x160, border 0.8px rgba(0,0,0,0.04), shadow 0px 2px 12px rgba(0,0,0,0.06), rounded 20px */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/brand/${brand.name.toLowerCase()}`}
              className="shrink-0 w-[160px] h-[160px] bg-white rounded-[20px] border border-black/[0.04] shadow-[0px_2px_12px_rgba(0,0,0,0.06)] box-border flex flex-col items-center pt-5 pb-4 px-4 hover:shadow-[0px_4px_20px_rgba(0,0,0,0.12)] transition-shadow"
            >
              {/* Figma: inner 64x64 rounded 16px, Bebas 22px letter-spacing 2.64px (doubled for bold look) white */}
              <div
                className="w-16 h-16 rounded-[16px] flex items-center justify-center text-white font-display text-[22px] leading-[33px] tracking-[2.64px]"
                style={{ backgroundColor: brand.color }}
              >
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="w-10 h-10 object-contain" />
                ) : (
                  <span>{brand.name.charAt(0)}</span>
                )}
              </div>
              <div className="mt-4 text-center">
                <p className="font-condensed text-sm font-bold tracking-[1.4px] text-[#0D0D0D]">
                  {brand.name}
                </p>
                {brand.tagline && (
                  <p className="mt-0.5 font-sans text-[11px] leading-4 text-[#0D0D0D]/45 text-center">
                    {brand.tagline}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
