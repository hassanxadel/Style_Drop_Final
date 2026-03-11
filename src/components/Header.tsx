/**
 * Header Component
 * 
 * Main site header with promotional banner, logo, navigation, and cart.
 * This component is designed to convert to Shopify's header.liquid section.
 * 
 * Features:
 * - Sticky header with promotional banner
 * - Responsive navigation
 * - Cart icon with item count
 * - Search, wishlist, and user account icons
 */

import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItemCount = 4;

  const navigationLinks = [
    { label: 'New In', path: '/', highlight: false },
    { label: 'Women', path: '/', highlight: false },
    { label: 'Men', path: '/', highlight: false },
    { label: 'Shoes', path: '/', highlight: false },
    { label: 'Accessories', path: '/', highlight: false },
    { label: 'Sale', path: '/', highlight: true },
  ];

  const promoMessages = [
    '🚚 Free delivery on orders over EGP 975',
    '💖 New drops every Friday - don\'t miss out',
    '🔥 Up to 40% off Sale items · Limited time',
    '🚚 Free delivery on orders over EGP 975',
    '💖 New drops every Friday - don\'t miss out',
    '🔥 Up to 40% off Sale items · Limited time',
  ];

  return (
    <header className="sticky top-0 z-50 bg-white text-[#0D0D0D]">
      {/* Promo bar - Figma: 38px, #0D0D0D, Inter 12px, white 0.9 */}
      <div className="bg-[#0D0D0D] h-[38px] flex items-center justify-center overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-white/90 text-xs font-normal tracking-[0.6px] leading-[18px]">
          {promoMessages.map((message, index) => (
            <span key={index}>{message}</span>
          ))}
        </div>
      </div>

      {/* Main Nav - Figma: 72px, padding 0 20px */}
      <nav className="container flex items-center justify-between h-[72px] px-5">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display text-3xl tracking-tight hover:opacity-90 transition-opacity"
        >
          Style<span className="text-[#DC2626]">Drop</span>
        </Link>

        {/* Desktop Nav - Inter 13px 500, letter-spacing 0.52px */}
        <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.52px] text-[#0D0D0D]">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`transition-colors hover:underline underline-offset-4 ${link.highlight ? 'text-[#DC2626] font-semibold' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Icons - 34px circles */}
        <div className="flex items-center gap-2">
          <button className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5" aria-label="Search">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5" aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.5} />
          </button>

          <Link to="/cart" className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5 relative" aria-label="Cart">
          <button className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5 relative" aria-label="Cart">

            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartItemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#DC2626] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
           </button>
          </Link>

          <button className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5" aria-label="Account">
            <User size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;