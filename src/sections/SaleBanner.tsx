/**
 * Sale Banner Section Component
 * 
 * Full-width promotional banner for sales.
 * Designed to convert to Shopify promo-banner.liquid section.
 * 
 * Features:
 * - Full-width background image
 * - Overlay with CTA
 * - Responsive height
 * - Centered content
 */

import { Link } from 'react-router-dom';
import saleBanner from '@/assets/sale-banner.jpg';

interface SaleBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

const SaleBanner = ({
  title = 'SALE — UP TO 50% OFF',
  subtitle = 'Limited time · While stocks last',
  buttonText = 'SHOP SALE',
  buttonLink = '/collection',
  image = saleBanner,
}: SaleBannerProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 my-8">
      {/* Background Image */}
      <img
        src={image}
        alt="Sale"
        className="
          w-full 
          h-[200px] md:h-[280px] 
          object-cover
        "
      />

      {/* Overlay with Content */}
      <div className="
        absolute inset-0 
        bg-gradient-to-t from-black/70 via-black/40 to-transparent
        flex items-center justify-center
      ">
        <div className="text-center px-4">
          {/* Title - Bebas Neue, larger size */}
          <h2 className="
            font-display text-4xl md:text-6xl font-normal
            text-white mb-2
          " style={{ letterSpacing: '0.05em' }}>
            {title}
          </h2>

          {/* Subtitle */}
          <p className="
            text-white/80
            text-xs md:text-sm mb-6
          ">
            {subtitle}
          </p>

          {/* CTA Button */}
          <Link to={buttonLink}>
            <button className="btn-accent px-8 py-3 text-xs font-bold">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
