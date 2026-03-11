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
              {/* Card 1: Cart Items Table */}
              <div className="bg-white rounded-2xl border border-[#0D0D0D]/10 p-4 sm:p-6">
                {/* Table Header (desktop) - align to grid */}
                <div className="hidden md:grid grid-cols-[2fr_1fr_1.5fr_1fr] gap-4 pb-4 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <div className="text-left">PRODUCT</div>
                  <div className="text-center">PRICE</div>
                  <div className="text-center">QUANTITY</div>
                  <div className="text-center">TOTAL</div>
                </div>

                {/* Cart Items */}
                <div className="divide-y divide-border">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="py-5 md:py-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr_1fr] gap-4 md:items-center md:gap-4"
                    >
                      {/* Product Column - left aligned */}
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                            {item.brand}
                          </p>
                          <h3 className="font-semibold text-sm mb-2">{item.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            {item.variant.colorHex && (
                              <div className="flex items-center gap-1.5">
                                <div
                                  className="w-4 h-4 rounded-full border border-border shrink-0"
                                  style={{ backgroundColor: item.variant.colorHex }}
                                />
                                <span className="text-xs text-muted-foreground">
                                  {item.variant.color} / {item.variant.size}
                                </span>
                              </div>
                            )}
                          </div>
                          {item.fastDrop && (
                            <span className="inline-flex items-center gap-1 w-fit px-2 py-0.5 bg-[#F5C800] rounded-full text-[9px] font-bold text-[#0D0D0D] uppercase">
                              ⚡ FAST DROP
                            </span>
                          )}
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-xs text-accent hover:underline mt-2 text-left w-fit flex items-center gap-1"
                          >
                            <span className="text-muted-foreground">|</span> Remove
                          </button>
                        </div>
                      </div>

                      {/* Price Column - centered under PRICE */}
                      <div className="flex md:flex-col md:items-center md:justify-center text-left md:text-center gap-0">
                        <p className="font-bold text-base">EGP {item.price.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground line-through">
                          EGP {(item.price * 1.2).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Column - centered: pill control only */}
                      <div className="flex flex-col items-start md:items-center gap-2">
                        {/* Pill-shaped quantity control - rounded outer edges */}
                        <div className="inline-flex items-stretch rounded-lg overflow-hidden border border-border bg-white shadow-sm">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center bg-muted hover:bg-gray-200 text-foreground rounded-l-lg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={2.5} />
                          </button>
                          <span className="min-w-[2.25rem] flex items-center justify-center font-bold text-sm text-foreground bg-white px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center bg-[#0D0D0D] text-white hover:bg-black rounded-r-lg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={2.5} />
                          </button>
                        </div>
                      </div>

                      {/* Total Column - centered under TOTAL */}
                      <div className="flex md:flex-col md:items-center md:justify-center text-left md:text-center">
                        <p className="font-bold text-lg">
                          EGP {(item.price * item.quantity).toFixed(2)}
                        </p>
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
