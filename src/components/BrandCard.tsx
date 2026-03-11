/**
 * Brand Card Component
 * 
 * Individual brand showcase card with circular avatar.
 * Designed to convert to Shopify brand-card.liquid snippet.
 * 
 * Features:
 * - Circular brand avatar with initial
 * - Hover scale effect
 * - Brand name label
 * - Customizable background color
 * 
 * Props:
 * - brand: Brand object with name, color, and optional logo
 * - showLabel: Whether to show brand name below (default: true)
 */

import { Brand } from '@/types';

interface BrandCardProps {
  brand: Brand;
  showLabel?: boolean;
}

const BrandCard = ({ brand, showLabel = true }: BrandCardProps) => {
  const { name, color, logo } = brand;

  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      {/* Brand Circle */}
      <div
        className="
          w-20 h-20 rounded-full 
          flex items-center justify-center 
          text-accent-foreground font-bold text-xs 
          cursor-pointer 
          hover:scale-105 
          transition-transform
        "
        style={{ backgroundColor: color }}
        title={name}
      >
        {/* Display logo if available, otherwise show first letter */}
        {logo ? (
          <img src={logo} alt={name} className="w-12 h-12 object-contain" />
        ) : (
          <span>{name.charAt(0)}</span>
        )}
      </div>

      {/* Brand Name Label */}
      {showLabel && (
        <span className="
          w-20 text-center text-xs font-medium 
          text-muted-foreground
        ">
          {name}
        </span>
      )}
    </div>
  );
};

export default BrandCard;
