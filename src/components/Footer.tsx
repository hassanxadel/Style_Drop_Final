/**
 * Footer Component
 * 
 * Site footer with links and branding.
 * Designed to convert to Shopify footer.liquid section.
 * 
 * Features:
 * - Multi-column layout (responsive)
 * - Brand information
 * - Navigation links
 * - Copyright notice
 * - Dark styling
 * 
 * In Shopify, footer links would be managed through
 * Theme Settings or Navigation menus.
 */

import { Link } from 'react-router-dom';
import logo from '@/assets/logo for web .png';

interface FooterColumn {
  title: string;
  links: string[];
}

const Footer = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'Shop',
      links: ['New In', 'Women', 'Men', 'Shoes', 'Sale'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Shipping', 'Returns', 'Size Guide'],
    },
    {
      title: 'Quick Links',
      links: ['About Us', 'Careers', 'Privacy Policy', 'Terms'],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="StyleDrop Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Brand Description */}
            <p className="
              text-xs text-primary-foreground/60 
              leading-relaxed
            ">
              Curated fashion from 200+ brands, delivered to your door. 
              Setting the pace of global style.
            </p>
          </div>

          {/* Dynamic Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              {/* Column Heading */}
              <h4 className="text-sm font-semibold mb-4">
                {column.title}
              </h4>

              {/* Column Links */}
              <ul className="space-y-2">
                {column.links.map((linkText) => (
                  <li key={linkText}>
                    <Link
                      to="/"
                      className="
                        text-xs text-primary-foreground/60 
                        hover:text-accent 
                        transition-colors
                      "
                    >
                      {linkText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="
          mt-10 pt-6 
          border-t border-primary-foreground/10
        ">
          <p className="
            text-xs text-primary-foreground/40 
            text-center
          ">
            © 2026 StyleDrop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
