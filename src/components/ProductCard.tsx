/**
 * Product Card Component
 * 
 * Reusable product card displaying product image, brand, name, price, and colors.
 * Designed to convert to Shopify product-card.liquid snippet.
 * 
 * Features:
 * - Product image with hover zoom effect
 * - Badge support (sale, new, out of stock)
 * - Wishlist button
 * - Add to cart button (appears on hover)
 * - Color swatches
 * - Pricing with original price strikethrough
 * 
 * Props:
 * - product: Product object with all product data
 */

import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    img,
    brand,
    name,
    price,
    originalPrice,
    colors,
    badge,
    badgeType,
  } = product;

  return (
    <Link
      to={`/product/${product.id || product.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="group cursor-pointer block bg-white rounded-2xl p-3 pb-4"
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-muted">
        {/* Main Product Image */}
        <img
          src={img}
          alt={name}
          className="
            w-full h-full object-cover 
            group-hover:scale-105 
            transition-transform duration-500
          "
        />

        {/* Product Badge - Sale/New/Out of Stock */}
        {badge && (
          <span
            className={`
              absolute top-3 left-3 
              text-[10px] font-bold 
              px-3 py-1.5 rounded-full
              ${
                badgeType === 'sale'
                  ? 'bg-accent text-white'
                  : badgeType === 'new'
                  ? 'bg-[#0D0D0D] text-white'
                  : 'bg-card text-foreground border border-border'
              }
            `}
          >
            {badge}
          </span>
        )}

        {/* Wishlist Button - Top Right */}
        <button
          className="
            absolute top-3 right-3 
            w-9 h-9 
            bg-white/90 backdrop-blur 
            rounded-full 
            flex items-center justify-center 
            hover:bg-white 
            transition-colors
          "
          aria-label="Add to wishlist"
        >
          <Heart size={17} className="text-[#0D0D0D]" />
        </button>

        {/* Add to Cart Button - Bottom Right (icon) */}
        {badgeType !== 'outOfStock' && (
          <button
            className="
              absolute bottom-3 right-3 
              w-9 h-9 
              bg-[#F36B4F] text-white 
              rounded-full 
              flex items-center justify-center 
              shadow-md
            "
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </button>
        )}

        {/* Out of Stock Overlay */}
        {badgeType === 'outOfStock' && (
          <div className="
            absolute inset-0 
            bg-background/30 
            flex items-center justify-center
          ">
            <span className="
              bg-card text-foreground 
              text-xs font-bold 
              px-4 py-2 rounded 
              border border-border
            ">
              OUT OF STOCK
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3">
        {/* Brand Name */}
        <p
          className="
          text-[10px] text-[#B7A996] 
          tracking-[0.15em] uppercase
        "
        >
          {brand}
        </p>

        {/* Product Name */}
        <p className="text-sm font-semibold mt-0.5 text-[#111111]">
          {name}
        </p>

        {/* Color Swatches */}
        <div className="flex gap-1.5 mt-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="
                w-3.5 h-3.5 rounded-full 
                border border-white/40
              "
              style={{ backgroundColor: color }}
              title={`Color option ${index + 1}`}
            />
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-2">
          {/* Current Price */}
          <p className="text-sm font-bold">
            {price}
          </p>

          {/* Original Price (if on sale) */}
          {originalPrice && (
            <p className="text-xs text-muted-foreground line-through">
              {originalPrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
