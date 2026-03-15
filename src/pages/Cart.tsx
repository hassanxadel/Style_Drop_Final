/**
 * Shopping Cart Page
 * 
 * Displays cart items in table format with dark order summary sidebar.
 * Designed to convert to Shopify cart.liquid template.
 * 
 * Features:
 * - Cream background (#F5F0EB)
 * - Separate white cards for products, promo code, and order notes
 * - Progress tracker for free shipping
 * - Dark sidebar with order summary
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Tag, ChevronRight } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';

// Mock product images
import productBiker from '@/assets/product-biker.jpg';
import productHoodie from '@/assets/product-hoodie.jpg';
import productTrench from '@/assets/product-trench.jpg';

interface CartItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  variant: {
    size?: string;
    color?: string;
    colorHex?: string;
  };
  quantity: number;
  fastDrop?: boolean;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      productId: 'product-1',
      name: 'Leather Biker Jacket',
      brand: 'ARITZIA',
      image: productBiker,
      price: 148.00,
      variant: { size: 'M', color: 'Jet Black', colorHex: '#1a1a1a' },
      quantity: 1,
      fastDrop: true,
    },
    {
      id: '2',
      productId: 'product-2',
      name: 'Oversized Hoodie',
      brand: 'ESSENTIALS',
      image: productHoodie,
      price: 88.00,
      variant: { size: 'L', color: 'Jet Black', colorHex: '#1a1a1a' },
      quantity: 2,
      fastDrop: true,
    },
    {
      id: '3',
      productId: 'product-3',
      name: 'Classic Hoodie',
      brand: 'COMFORT FIT',
      image: productTrench,
      price: 62.00,
      variant: { size: 'M', color: 'Ash', colorHex: '#d1d5db' },
      quantity: 1,
      fastDrop: true,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 975; // EGP 975 for free shipping
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const amountUntilFreeShipping = Math.max(freeShippingThreshold - subtotal, 0);
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Apply promo:', promoCode);
  };

  return (
    <MainLayout>
      {/* Promo Bar - Top (Single Bar) */}
     

      {/* Breadcrumb/Back Navigation - On Cream Background */}
      <div className="bg-[#F5F0EB] border-b border-[#0D0D0D]/10">
        <div className="container py-4">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft size={16} />
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Page Header - On Cream Background */}
      <div className="bg-[#F5F0EB]">
        <div className="container py-6 md:py-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h1 className="font-display text-4xl md:text-6xl">
              SHOPPING
              <br />
              <span className="text-accent">CART</span>
            </h1>
            <span className="text-sm font-sans text-muted-foreground">
              ({itemCount} items)
            </span>
          </div>
        </div>
      </div>

      {/* Main Content - Cream Background */}
      <div className="bg-[#F5F0EB] pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_420px] gap-6 lg:gap-8">
            {/* Left: Cart Items - Separate Cards */}
            <div className="space-y-6">
              {/* Card 1: Cart Items - Compact Card Style */}
              <div className="bg-white rounded-2xl border border-[#0D0D0D]/10 overflow-hidden">
                {/* Cart Items */}
                <div className="divide-y divide-border">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5"
                    >
                      {/* Compact Card Layout */}
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-muted shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          {/* Top Section: Brand, Name, Color */}
                          <div>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">
                              {item.brand}
                            </p>
                            <h3 className="font-bold text-base mb-2">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                              {item.variant.colorHex && (
                                <div className="flex items-center gap-1.5">
                                  <div
                                    className="w-4 h-4 rounded-full border border-border shrink-0"
                                    style={{ backgroundColor: item.variant.colorHex }}
                                  />
                                  <span className="text-sm text-muted-foreground">
                                    {item.variant.color} / {item.variant.size}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Bottom Section: Price, Quantity, Total */}
                          <div className="space-y-2">
                            {/* Price Row */}
                            <div className="flex items-baseline gap-2">
                              <p className="font-bold text-lg">EGP {item.price.toFixed(2)}</p>
                              <p className="text-sm text-muted-foreground line-through">
                                EGP {(item.price * 1.2).toFixed(2)}
                              </p>
                            </div>

                            {/* Quantity & Remove Row */}
                            <div className="flex items-center justify-between gap-4">
                              {/* Quantity Control - Circular Buttons */}
                              <div className="inline-flex items-center gap-3">
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="w-10 h-10 flex items-center justify-center bg-[#F5F0EB] hover:bg-[#E8E6E3] text-foreground rounded-full transition-colors border border-border"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={16} strokeWidth={2.5} />
                                </button>
                                <span className="min-w-[2rem] flex items-center justify-center font-bold text-base text-foreground">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="w-10 h-10 flex items-center justify-center bg-[#0D0D0D] text-white hover:bg-black rounded-full transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={16} strokeWidth={2.5} />
                                </button>
                              </div>

                              {/* Remove Button with Trash Icon */}
                              <button
                                onClick={() => handleRemove(item.id)}
                                className="text-sm text-accent hover:opacity-80 flex items-center gap-2 underline decoration-accent"
                              >
                                <svg 
                                  className="w-4 h-4" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Remove
                              </button>
                            </div>

                            {/* Fast Drop Badge */}
                            {item.fastDrop && (
                              <div className="mt-2">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#F5C800] rounded text-[9px] font-bold text-[#0D0D0D] uppercase">
                                  ⚡ FAST DROP
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Promo Code */}
              <div className="bg-white rounded-2xl border border-[#0D0D0D]/10 p-4 sm:p-6">
                <form onSubmit={handleApplyPromo} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-[#F5F0EB] rounded-lg">
                    <Tag size={16} className="text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Promo code (try: DROP10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#0D0D0D] text-white rounded-lg font-bold text-sm uppercase hover:bg-black transition-colors"
                  >
                    APPLY CODE
                  </button>
                </form>
              </div>

              {/* Card 3: Order Notes */}
              <div className="bg-white rounded-2xl border border-[#0D0D0D]/10 p-6">
                <label className="block text-sm font-semibold mb-3">
                  Order notes <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Any special instructions or notes for your order..."
                  className="w-full px-4 py-3 bg-[#F5F0EB] rounded-lg text-sm outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                  rows={4}
                />
              </div>
            </div>

            {/* Right: Order Summary - Dark */}
            <div>
              <div className="bg-[#0D0D0D] text-white rounded-2xl p-6 sticky top-24">
                {/* Free Shipping Progress */}
                <div className="mb-6">
                  {isFreeShipping ? (
                    <p className="text-sm font-semibold text-accent mb-3">
                      🎉 You've unlocked Free Shipping!
                    </p>
                  ) : (
                    <p className="text-sm font-semibold mb-3">
                      You're EGP {amountUntilFreeShipping.toFixed(2)} away from Free Shipping!
                    </p>
                  )}
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>

                {/* Shipping Estimate */}
                <div className="mb-6">
                  <button className="w-full flex items-center justify-between text-sm font-semibold hover:text-accent transition-colors">
                    <span>ESTIMATE SHIPPING</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm uppercase tracking-wider">SUBTOTAL</span>
                    <span className="text-2xl font-bold text-[#F5C800]">
                        EGP {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-white/50">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>

                {/* Checkout Button */}
                <Link to="/checkout">
                  <button className="w-full btn-accent h-14 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                    CHECKOUT
                    <ChevronRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
