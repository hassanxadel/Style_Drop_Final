/**
 * Cart Item Card Component
 * 
 * Individual cart item display with quantity controls and remove option.
 * Designed to convert to Shopify cart-item.liquid snippet.
 * 
 * Features:
 * - Horizontal card layout
 * - Product image, title, variant info
 * - Quantity selector (matches ProductDetails style)
 * - Price display
 * - Remove button
 */

import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  variant: {
    size?: string;
    color?: string;
  };
  quantity: number;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItemCard = ({
  id,
  name,
  brand,
  image,
  price,
  variant,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1);
  };

  const itemTotal = price * quantity;

  return (
    <div className="bg-card border border-border rounded-lg p-4 flex gap-4 items-start">
      {/* Product Image */}
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        {/* Brand */}
        <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
          {brand}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-sm mb-1 truncate">
          {name}
        </h3>

        {/* Variant Info */}
        {(variant.size || variant.color) && (
          <p className="text-xs text-muted-foreground">
            {variant.size && `Size: ${variant.size}`}
            {variant.size && variant.color && ' • '}
            {variant.color && `Color: ${variant.color}`}
          </p>
        )}

        {/* Mobile Price (shown below info on small screens) */}
        <div className="mt-2 flex items-center justify-between md:hidden">
          <span className="font-display text-xl">EGP {itemTotal.toFixed(2)}</span>
          <button
            onClick={() => onRemove(id)}
            className="text-destructive hover:text-destructive-foreground transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Quantity Selector - Desktop */}
      <div className="hidden md:flex items-center border border-border rounded shrink-0">
        <button
          onClick={handleDecrease}
          className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="w-12 text-center font-semibold text-sm">
          {quantity}
        </span>
        <button
          onClick={handleIncrease}
          className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Quantity Selector - Mobile (full width below) */}
      <div className="md:hidden w-full flex items-center border border-border rounded mt-3">
        <button
          onClick={handleDecrease}
          className="flex-1 h-10 flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="flex-1 text-center font-semibold text-sm">
          {quantity}
        </span>
        <button
          onClick={handleIncrease}
          className="flex-1 h-10 flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Price - Desktop */}
      <div className="hidden md:flex items-center gap-4 shrink-0">
        <span className="font-display text-xl min-w-[80px] text-right">
          EGP {itemTotal.toFixed(2)}
        </span>
        <button
          onClick={() => onRemove(id)}
          className="text-destructive hover:text-destructive-foreground transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
