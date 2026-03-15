/**
 * Mobile Sidebar Component
 * 
 * Sliding sidebar navigation for mobile devices
 * Contains main navigation links that are hidden on mobile header
 */

import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '@/assets/logo for web .png';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const navigationLinks = [
    { label: 'New In', path: '/', highlight: false },
    { label: 'Women', path: '/', highlight: false },
    { label: 'Men', path: '/', highlight: false },
    { label: 'Shoes', path: '/', highlight: false },
    { label: 'Accessories', path: '/', highlight: false },
    { label: 'Sale', path: '/', highlight: true },
  ];

  // Prevent body scroll when sidebar is open
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
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={onClose}
          >
            <img 
              src={logo} 
              alt="StyleDrop Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-5">
          <ul className="space-y-1">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={`block px-4 py-3 text-[15px] font-medium tracking-[0.3px] rounded-lg transition-colors ${
                    link.highlight
                      ? 'text-[#DC2626] bg-red-50 hover:bg-red-100'
                      : 'text-[#0D0D0D] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-200 text-xs text-gray-500">
          <p>🚚 Free delivery over EGP 975</p>
          <p className="mt-1">💖 New drops every Friday</p>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
