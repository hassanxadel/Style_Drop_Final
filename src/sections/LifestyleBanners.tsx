/**
 * Lifestyle Banners Section Component
 * 
 * Two-column promotional banners for lifestyle collections.
 * Designed to convert to Shopify collection-banners.liquid section.
 * 
 * Features:
 * - Two-column responsive grid
 * - Image overlays with CTAs
 * - Hover zoom effects
 * - Configurable content
 */

import streetwear from '@/assets/streetwear-banner.jpg';
import comfort from '@/assets/comfort-banner.jpg';
import { Link } from 'react-router-dom';

const LifestyleBanners = () => {
  return (
    <section className="bg-background py-14">
      <div className="container grid md:grid-cols-2 gap-6">
        {/* Streetwear Banner */}
        <Link 
          to="/collection"
          className="
          relative rounded-2xl overflow-hidden 
          group cursor-pointer h-[400px] block
        ">
          {/* Background Image */}
          <img
            src={streetwear}
            alt="Everyday Streetwear"
            className="
              w-full h-full object-cover 
              group-hover:scale-105 
              transition-transform duration-500
            "
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content - Bottom Left */}
          <div className="absolute bottom-8 left-8">
            {/* Badge */}
            <span className="
              inline-block mb-3 px-3 py-1.5 
              bg-[#F5C800] rounded 
              font-condensed text-[10px] font-extrabold 
              uppercase tracking-[1.4px] text-[#0D0D0D]
            ">
              NEW DROP
            </span>

            {/* Eyebrow Text */}
            <p className="
              font-condensed text-[10px] font-bold 
              tracking-[1.4px] uppercase 
              text-white/60 mb-2
            ">
              MEN'S COLLECTION
            </p>

            {/* Title */}
            <h3 className="
              font-display text-5xl font-normal 
              text-white mb-4
            " style={{ letterSpacing: '0.02em' }}>
              EVERYDAY
              <br />
              STREETWEAR
            </h3>

            {/* CTA Button */}
            <button className="
              px-6 py-2.5 
              bg-white text-[#0D0D0D] 
              rounded-full 
              font-condensed text-xs font-bold 
              tracking-wider uppercase
              hover:bg-white/90 transition-colors
            ">
              SHOP MEN'S →
            </button>
          </div>
        </Link>

        {/* Comfort Redefined Banner */}
        <Link
          to="/collection"
          className="
          relative rounded-2xl overflow-hidden 
          group cursor-pointer h-[400px] bg-black block
        ">
          {/* Background Image */}
          <img
            src={comfort}
            alt="Comfort Redefined"
            className="
              w-full h-full object-cover opacity-90
              group-hover:scale-105 
              transition-transform duration-500
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content - Top Right & Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            {/* Badge - Top */}
            <div className="absolute top-8 left-8">
              <span className="
                inline-block px-3 py-1.5 
                bg-accent rounded 
                font-condensed text-[10px] font-extrabold 
                uppercase tracking-[1.4px] text-white
              ">
                FIND YOUR FIT
              </span>
            </div>

            {/* Center Content */}
            <div className="text-center">
              {/* Eyebrow */}
              <p className="
                font-condensed text-[10px] font-bold 
                tracking-[1.4px] uppercase 
                text-white/70 mb-2
              ">
                YOUR EVERYDAY FAVORITES
              </p>

              {/* Title */}
              <h3 className="
                font-display text-6xl font-normal 
                text-white mb-2
              " style={{ letterSpacing: '0.02em' }}>
                COMFORT
              </h3>
              <h3 className="
                font-display text-6xl font-normal 
                text-accent mb-6
              " style={{ letterSpacing: '0.02em' }}>
                REDEFINED
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm mb-2 max-w-xs mx-auto">
                Fabrics that move with you.
              </p>
              <p className="text-white/80 text-sm mb-6 max-w-xs mx-auto">
                Styles that speak for you.
              </p>

              {/* CTA Button */}
              <button className="
                px-8 py-3 
                bg-accent text-white 
                rounded-full 
                font-condensed text-xs font-bold 
                tracking-wider uppercase
                hover:bg-accent/90 transition-colors
              ">
                EXPLORE STYLES →
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default LifestyleBanners;
