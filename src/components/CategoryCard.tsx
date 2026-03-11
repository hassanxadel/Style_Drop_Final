/**
 * Category Card Component
 * 
 * Individual category card with image overlay and gradient.
 * Designed to convert to Shopify category-card.liquid snippet.
 * 
 * Features:
 * - Background image with overlay
 * - Hover zoom effect
 * - Category name overlay
 * - Flexible grid span support
 * 
 * Props:
 * - category: Category object with name, image, and optional span
 */

import { Link } from 'react-router-dom';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, img, span } = category;

  return (
    <Link
      to={'/collection'}
      className={`
        relative rounded-lg overflow-hidden 
        cursor-pointer group
        ${span || 'col-span-1'}
      `}
    >
      {/* Category Image */}
      <img
        src={img}
        alt={name}
        className="
          w-full h-full object-cover 
          group-hover:scale-105 
          transition-transform duration-500
        "
      />

      {/* Gradient Overlay */}
      <div className="
        absolute inset-0 
        bg-gradient-to-t from-primary/70 to-transparent
      " />

      {/* Category Name */}
      <span className="
        absolute bottom-4 left-4 
        font-display text-2xl 
        text-primary-foreground
      "      >
        {name}
      </span>
    </Link>
  );
};

export default CategoryCard;
