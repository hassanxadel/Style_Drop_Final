/**
 * Product Grid Component
 * 
 * Responsive grid layout for displaying multiple products.
 * Designed to convert to Shopify collection-grid.liquid section.
 * 
 * Features:
 * - Responsive grid (2 columns mobile, 3 columns tablet+)
 * - Load more functionality
 * - Product count display
 * 
 * Props:
 * - products: Array of Product objects
 * - columns: Number of columns (default: 3)
 */

import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const ProductGrid = ({ 
  products, 
  columns = 3 
}: ProductGridProps) => {
  const gridClasses = {
    2: 'grid-cols-2 md:grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div 
      className={`
        grid gap-5
        ${gridClasses[columns]}
      `}
    >
      {products.map((product, index) => (
        <ProductCard 
          key={product.id || `product-${index}`} 
          product={product} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;
