/**
 * Order Summary Component
 * 
 * Displays cart totals and checkout button.
 * Designed to convert to Shopify cart-summary.liquid snippet.
 * 
 * Features:
 * - Subtotal, shipping, and total calculations
 * - Prominent checkout button
 * - Trust badges (free shipping, returns)
 * - Sticky positioning on desktop
 */

import { Link } from 'react-router-dom';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  itemCount: number;
}

const OrderSummary = ({ subtotal, shipping, itemCount }: OrderSummaryProps) => {
  const total = subtotal + shipping;
  const freeShippingThreshold = 75;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const amountUntilFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="bg-card border border-border rounded-lg p-6 lg:sticky lg:top-24 h-fit">
      {/* Header */}
      <h3 className="font-display text-2xl mb-6">ORDER SUMMARY</h3>

      {/* Free Shipping Progress */}
      {!isFreeShipping && amountUntilFreeShipping > 0 && (
        <div className="mb-6 p-3 bg-accent/5 border border-accent/20 rounded">
          <p className="text-xs text-accent font-semibold">
            Add EGP {amountUntilFreeShipping.toFixed(2)} more for free shipping!
          </p>
        </div>
      )}

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6 pb-6 border-b border-border">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </span>
          <span className="font-semibold">EGP {subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold">
            {isFreeShipping ? (
              <span className="text-accent">FREE</span>
            ) : (
              `EGP ${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        {/* Taxes */}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Taxes</span>
          <span className="text-xs text-muted-foreground">
            Calculated at checkout
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-display text-xl">TOTAL</span>
        <span className="font-display text-3xl">
          EGP {(isFreeShipping ? subtotal : total).toFixed(2)}
        </span>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout">
        <button className="w-full btn-accent h-12 rounded-lg font-condensed text-sm tracking-wider mb-4">
          ● PROCEED TO CHECKOUT
        </button>
      </Link>

      {/* Continue Shopping Link */}
      <Link
        to="/collection"
        className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Continue Shopping
      </Link>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-border space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Truck size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-xs font-semibold">Free Shipping</p>
            <p className="text-[10px] text-muted-foreground">
              On orders over EGP {freeShippingThreshold}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <RotateCcw size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-xs font-semibold">Free Returns</p>
            <p className="text-[10px] text-muted-foreground">
              30-day hassle-free returns
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <ShieldCheck size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-xs font-semibold">Secure Checkout</p>
            <p className="text-[10px] text-muted-foreground">
              256-bit SSL encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
