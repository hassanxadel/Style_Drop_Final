/**
 * Full-screen mobile navigation (matches StyleDrop / DROP reference).
 */

import { Camera, ChevronDown, Heart, Search, ShoppingBag, User, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '@/assets/logo for web .png';
import { mainNavLinks } from '@/data/nav';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-[#F5F0EB] flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-2'
        }`}
      >
        {/* Top bar: logo + icons */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#0D0D0D]/10">
          <Link to="/" onClick={onClose} className="flex items-center">
            <img src={logo} alt="StyleDrop" className="h-14 w-auto object-contain max-h-[52px]" />
          </Link>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 text-[#0D0D0D]"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link
              to="/cart"
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 relative text-[#0D0D0D]"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#EA580C] text-white text-[9px] font-bold flex items-center justify-center">
                4
              </span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 text-[#0D0D0D]"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-8">
          {/* Search */}
          <div className="mt-5 mb-8">
            <div className="flex items-center gap-3 rounded-2xl bg-[#E8E4DF] px-4 py-3.5 border border-[#0D0D0D]/6">
              <Search size={18} className="text-[#0D0D0D]/50 shrink-0" strokeWidth={1.5} />
              <input
                type="search"
                placeholder="Search brands, styles..."
                className="flex-1 bg-transparent border-0 outline-none text-sm text-[#0D0D0D] placeholder:text-[#0D0D0D]/40"
                aria-label="Search"
              />
            </div>
          </div>

          {/* Primary nav */}
          <nav className="flex flex-col">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 border-b border-[#0D0D0D]/10 font-condensed text-lg font-bold uppercase tracking-[0.08em] ${
                    link.highlight ? 'text-[#EA580C]' : 'text-[#0D0D0D]'
                  } ${isActive ? 'text-[#0D0D0D] bg-black/[0.03] -mx-5 px-5' : ''}`
                }
              >
                <span>{link.label}</span>
                <ChevronDown size={20} className="text-[#0D0D0D]/40 -rotate-90" strokeWidth={2} aria-hidden />
              </NavLink>
            ))}
          </nav>

          <div className="my-8 h-px bg-[#0D0D0D]/15" />

          {/* Secondary */}
          <div className="flex flex-col gap-1">
            <button
              type="button"
              className="flex items-center gap-3 py-3 text-left text-[15px] font-medium text-[#0D0D0D]"
            >
              <User size={20} strokeWidth={1.5} className="text-[#0D0D0D]/70" />
              Account
            </button>
            <Link
              to="/wishlist"
              onClick={onClose}
              className="flex items-center gap-3 py-3 text-[15px] font-medium text-[#0D0D0D]"
            >
              <Heart size={20} strokeWidth={1.5} className="text-[#0D0D0D]/70" />
              Wishlist
            </Link>
          </div>

          {/* Profile card (demo — mirrors reference) */}
          <div className="mt-10 rounded-2xl bg-[#1a1512] p-5 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#3d2a1f_0%,transparent_50%),radial-gradient(circle_at_80%_80%,#2a1810_0%,transparent_45%)]" />
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#EA580C] flex items-center justify-center text-lg font-bold tracking-tight">
                  AJ
                </div>
                <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-[#1a1512] text-[#0D0D0D]">
                  <Camera size={12} strokeWidth={2} aria-hidden />
                </span>
              </div>
              <div>
                <p className="font-condensed font-bold text-sm uppercase tracking-[0.12em]">Alex Johnson</p>
                <p className="text-xs text-white/55 mt-0.5">alex@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
