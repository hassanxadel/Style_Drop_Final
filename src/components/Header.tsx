/**
 * Header Component
 *
 * Main site header with promotional banner, logo, navigation, and cart.
 */

import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import MobileSidebar from './MobileSidebar';
import logo from '@/assets/logo for web .png';
import { mainNavLinks } from '@/data/nav';

const Header = () => {
  const cartItemCount = 4;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const promoMessages = [
    '🚚 Free delivery on orders over EGP 975',
    "💖 New drops every Friday - don't miss out",
    '🔥 Up to 40% off Sale items · Limited time',
    '🚚 Free delivery on orders over EGP 975',
    "💖 New drops every Friday - don't miss out",
    '🔥 Up to 40% off Sale items · Limited time',
  ];

  return (
    <>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <header className="sticky top-0 z-50 bg-white text-[#0D0D0D]">
        <div className="bg-[#0D0D0D] h-[38px] flex items-center justify-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-8 text-white/90 text-xs font-normal tracking-[0.6px] leading-[18px]">
            {promoMessages.map((message, index) => (
              <span key={index}>{message}</span>
            ))}
          </div>
        </div>

        <nav className="container flex items-center justify-between h-[72px] px-5">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="StyleDrop Logo" className="h-24 w-auto object-contain" />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-[0.52px] text-[#0D0D0D]">
            {mainNavLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `transition-colors hover:underline underline-offset-4 ${
                      link.highlight ? 'text-[#DC2626] font-semibold' : ''
                    } ${isActive ? 'underline underline-offset-4 font-semibold' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Search"
              type="button"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <Link
              to="/wishlist"
              className="hidden md:flex w-[34px] h-[34px] items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Wishlist"
            >
              <Heart size={18} strokeWidth={1.5} />
            </Link>

            <Link
              to="/cart"
              className="w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5 relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#DC2626] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="hidden md:flex w-[34px] h-[34px] items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden w-[34px] h-[34px] flex items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
