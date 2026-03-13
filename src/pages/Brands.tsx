/**
 * Brands Page
 * 
 * Displays all available brands with clickable cards
 * Each card shows the brand name and a short tagline
 */

import { Link } from 'react-router-dom';
import { featuredBrands } from '@/data/brands';
import MainLayout from '@/layouts/MainLayout';
import { ArrowLeft } from 'lucide-react';

const Brands = () => {
  return (
    <MainLayout>
      <div className="min-h-screen" style={{ background: '#F5F0EB' }}>
        {/* Header Section */}
        <div className="container px-5 md:px-8 py-8 md:py-12">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#0D0D0D]/70 hover:text-[#0D0D0D] transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Page Title */}
          <div className="mb-8 md:mb-12">
            <span className="inline-block mb-3 rounded px-3 py-1.5 bg-[#F5C800] font-condensed text-[11px] font-extrabold uppercase tracking-[1.54px] text-[#0D0D0D]">
              FEATURED BRANDS
            </span>
            <h1 className="font-display font-normal text-[52px] md:text-[72px] leading-[49px] md:leading-[68px] tracking-[0.12px] text-[#0D0D0D]">
              200+ BRANDS
              <br />
              ONE PLATFORM
            </h1>
            <p className="mt-4 text-[#0D0D0D]/60 text-sm md:text-base max-w-2xl">
              Discover trending styles from the brands you love — with full transparency on pricing and returns.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {featuredBrands.map((brand) => (
              <Link
                key={brand.name}
                to={`/brand/${brand.name.toLowerCase()}`}
                className="group bg-white rounded-[20px] border border-black/[0.04] shadow-[0px_2px_12px_rgba(0,0,0,0.06)] p-6 flex flex-col items-center justify-center hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Brand Logo/Initial */}
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-[16px] flex items-center justify-center text-white font-display text-[28px] md:text-[32px] leading-[33px] tracking-[2.64px] mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.logo ? (
                    <img src={brand.logo} alt={brand.name} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                  ) : (
                    <span>{brand.name.charAt(0)}</span>
                  )}
                </div>

                {/* Brand Info */}
                <div className="text-center">
                  <p className="font-condensed text-base md:text-lg font-bold tracking-[1.4px] text-[#0D0D0D] mb-1">
                    {brand.name}
                  </p>
                  {brand.tagline && (
                    <p className="font-sans text-xs md:text-[13px] leading-4 text-[#0D0D0D]/50">
                      {brand.tagline}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Brands Coming Soon */}
          <div className="mt-12 p-8 md:p-12 bg-white/50 rounded-2xl border border-black/[0.04] text-center">
            <p className="font-condensed text-sm font-bold tracking-[1.4px] text-[#0D0D0D]/40 uppercase mb-2">
              More brands coming soon
            </p>
            <p className="text-[#0D0D0D]/50 text-sm">
              We're constantly adding new brands. Check back regularly for updates!
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Brands;
