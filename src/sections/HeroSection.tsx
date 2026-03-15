/**
 * Hero Section Component
 * 
 * Main hero banner with headline, CTA buttons, and trust features.
 * Designed to convert to Shopify hero.liquid section with configurable settings.
 * 
 * Layout:
 * - Two-column grid (text + image)
 * - Dark background matching design
 * - Trust bar with 4 features
 * - Fully responsive (stacks on mobile)
 */

import { Truck, RotateCcw, ShieldCheck, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TrustFeature } from '@/types';
import heroModel from '@/assets/hero-model.jpg';
import productTrench from '@/assets/product-trench.jpg';

const HeroSection = () => {
  const trustFeatures: TrustFeature[] = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Same-day & next-day options',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: 'Free 30-day hassle-free returns',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Checkout',
      description: '256-bit SSL encrypted payments',
    },
    {
      icon: Star,
      title: 'Trusted Brands',
      description: '200+ verified fashion brands',
    },
  ];

  return (
    <section>
      {/* Hero - Figma: 1141x702, #F5F0EB, padding 0 32px */}
      <div className="bg-[#F5F0EB] min-h-[702px] flex flex-col pt-6 md:pt-0">
        <div className="container px-8 flex flex-col flex-1">
          {/* Top row: MOVE FREELY | LIVE BOLDLY | FEEL ICONIC - Figma: 82px height, space-between */}
          <div className="hidden md:flex flex-row justify-between items-center h-[82px] shrink-0">
            <p className="font-condensed text-[12px] font-bold leading-[18px] tracking-[2.4px] text-[#0D0D0D]/40 uppercase">
              MOVE FREELY
            </p>
            <p className="font-condensed text-[12px] font-bold leading-[18px] tracking-[2.4px] text-[#0D0D0D]/40 uppercase">
              LIVE BOLDLY
            </p>
            <p className="font-condensed text-[12px] font-bold leading-[18px] tracking-[2.4px] text-[#0D0D0D]/40 uppercase">
              FEEL ICONIC
            </p>
          </div>

          {/* Content row - Figma: 620px, two columns */}
          <div className="flex flex-1 flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 pb-12 md:pb-0">
            {/* Left column - text block ~480px */}
            <div className="flex flex-col max-w-[480px]">
              {/* SAME-DAY DELIVERY - Figma: 28.5px height, red pill */}
              <span className="badge-accent h-[22px] md:h-[28.5px] inline-flex items-center gap-1.5 md:gap-2 rounded-full w-fit px-2 md:px-3 mb-0">
                <svg className="w-[9px] h-[9px] md:w-[11px] md:h-[11px] fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                </svg>
                <span className="font-sans text-[9px] md:text-[11px] font-bold leading-4 tracking-[0.72px] md:tracking-[0.88px] text-white uppercase">SAME-DAY DELIVERY</span>
              </span>

              {/* Heading - Bebas Neue 60px, line-height 57px, letter-spacing 3.6px (wider for bold look) */}
              <h1 className="font-display font-normal text-[56px] md:text-[99px] leading-[50px] md:leading-[87px] tracking-[2.8px] md:tracking-[3.6px] text-[#0D0D0D] mt-4 md:mt-6 mb-5 md:mb-8" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}>
                <span className="block">WEAR WHAT</span>
                <span className="block text-[#DC2626]">DROPS</span>
                <span className="block">TODAY.</span>
              </h1>

              {/* Paragraph - Figma: top 345px from section = ~80px after heading, 15px/24px, opacity 0.55 */}
              <p className="font-sans text-[13px] md:text-[15px] leading-5 md:leading-6 text-[#0D0D0D]/55 max-w-[320px] mb-6 md:mb-8">
                Multi-brand fashion delivered fast. Discover trending styles from the brands you love — with full transparency on pricing and returns.
              </p>

              {/* CTAs - Figma: 52px height row; extra spacing below */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center mb-10">
                <Link to="/collection">
                  <button className="btn-accent font-condensed text-sm md:text-base font-bold uppercase tracking-[1.68px] md:tracking-[1.92px] h-[44px] md:h-[52px] px-5 md:px-7 rounded-full">
                    Shop What&apos;s Trending
                  </button>
                </Link>
                <Link to="/collection" className="font-sans text-xs md:text-sm font-semibold text-[#0D0D0D] border-b border-[#0D0D0D] pb-0.5 hover:opacity-80 inline-flex items-center gap-2">
                  Explore New Arrivals
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Right column - image + overlays; wider image */}
            <div className="relative w-full max-w-[570px] aspect-[480/620] md:aspect-auto md:h-[620px] shrink-0">
              <img
                src={heroModel}
                alt="Fashion model in red sweater"
                className="absolute inset-0 w-full h-full object-cover rounded-t-[20px]"
              />

              {/* FAST DROP - Figma: left -15px top 20px, 125x44.5, pill */}
              <div className="absolute -left-[15px] top-5 pl-[14px] pr-4 py-2 flex flex-col gap-0.5 rounded-full bg-[#0D0D0D] shadow-[0px_8px_24px_rgba(0,0,0,0.2)] z-10">
                <div className="flex items-center gap-1.5">
                  <span className="text-white text-lg leading-[27px]">⚡</span>
                  <span className="font-sans text-[10px] font-bold leading-[15px] tracking-[0.6px] text-white uppercase">FAST DROP</span>
                </div>
                <span className="font-sans text-[9px] leading-[14px] text-white/60">Delivered today</span>
              </div>

              {/* Product card - Figma: 160x192.5, left 340 top 367.5; card padding 12px, image 136x100, text left 12px */}
              <div className="hidden md:block absolute left-[340px] top-[367.5px] w-[160px] min-h-[192px] bg-white rounded-2xl p-3 shadow-[0px_20px_60px_rgba(0,0,0,0.15)] z-10 flex flex-col">
                <img src={productTrench} alt="Trench Coat" className="w-[136px] h-[100px] rounded-[10px] object-cover self-start" />
                <p className="font-condensed text-[10px] font-bold leading-[15px] tracking-[1px] text-[#0D0D0D]/50 uppercase mt-2">
                  ARITZIA
                </p>
                <p className="font-sans text-[12px] font-semibold leading-[18px] text-[#0D0D0D] mt-1">
                  Trench Coat
                </p>
                <div className="flex flex-row justify-between items-center gap-2 mt-3">
                  <span className="font-sans text-[13px] font-bold leading-5 text-[#0D0D0D]">EGP 1124.00</span>
                  <span className="font-sans text-[9px] font-bold leading-[14px] tracking-[0.45px] text-[#0D0D0D] px-[6px] py-[1.8px] rounded-full bg-[#F5F0EB] uppercase">
                    FREE RTN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar - Figma: #0D0D0D, icon circle rgba(232,76,30,0.12), Barlow 15px 700 / Inter 12px */}
      <div className="bg-[#0D0D0D] text-white">
        <div className="container flex justify-center py-8">
          <div className="w-full max-w-[1141px] grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {trustFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(232, 76, 30, 0.12)' }}>
                  {feature.title === 'Fast Delivery' ? (
                    <svg className="w-5 h-5 text-[#DC2626]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                  ) : feature.title === 'Trusted Brands' ? (
                    <svg className="w-5 h-5 text-[#DC2626]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L12 14.77l-4.77 2.51.91-5.32L4.27 7.62l5.34-.78L12 2z" />
                    </svg>
                  ) : (
                    <IconComponent size={20} className="text-[#DC2626]" strokeWidth={1.67} />
                  )}
                </div>
                <div>
                  <p className="font-condensed text-[15px] font-bold leading-[22px] tracking-[0.9px] uppercase text-white">
                    {feature.title}
                  </p>
                  <p className="font-sans text-[12px] font-normal leading-[17px] text-white/45 mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
