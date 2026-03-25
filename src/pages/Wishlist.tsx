/**
 * Liked items / Wishlist page — mirrors Shopify `main-page-wishlist` design.
 */

import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, X, Zap } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import { collectionProducts } from '@/data/products';
import { getWishlistHandles, setWishlistHandles, productHandle } from '@/lib/wishlist';
import type { Product } from '@/types';

const Wishlist = () => {
  const [handles, setHandles] = useState<string[]>(() => getWishlistHandles());

  const products = useMemo(() => {
    const set = new Set(handles);
    return collectionProducts.filter((p) => set.has(productHandle(p)));
  }, [handles]);

  const remove = useCallback((handle: string) => {
    const next = getWishlistHandles().filter((h) => h !== handle);
    setWishlistHandles(next);
    setHandles(next);
  }, []);

  const addAllToCart = () => {
    // Demo storefront: no real cart API in React mock
    alert(`Would add ${products.length} item(s) to cart.`);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F5F0EB] pb-32 md:pb-24">
        <div className="container px-5 pt-10 md:pt-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <div>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#EA580C] mb-2">
                Your collection
              </p>
              <h1 className="font-display text-4xl md:text-6xl md:text-7xl leading-[0.95] tracking-tight text-[#0D0D0D] uppercase">
                Liked{' '}
                <span className="text-[#EA580C]">Items</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-muted-foreground">
                {products.length} item{products.length === 1 ? '' : 's'} saved
              </p>
              <Link
                to="/collection"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D0D0D] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#1a1a1a] transition-colors w-fit"
              >
                Shop more
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl bg-white/80 border border-[#0D0D0D]/10 p-12 text-center max-w-lg mx-auto">
              <p className="text-muted-foreground mb-4">No saved items yet.</p>
              <p className="text-sm text-muted-foreground mb-6">
                Tap the heart on any product to save it here — same list syncs with the Shopify theme wishlist page.
              </p>
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 text-accent font-semibold underline underline-offset-4"
              >
                Browse products
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {products.map((p) => (
                <WishlistCard key={productHandle(p)} product={p} onRemove={() => remove(productHandle(p))} />
              ))}
            </div>
          )}
        </div>

        {products.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 pointer-events-none">
            <div className="container pointer-events-auto max-w-[1200px] mx-auto">
              <div className="rounded-2xl bg-[#0D0D0D] text-white px-5 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xl">
                <div>
                  <p className="font-condensed text-sm md:text-base font-bold uppercase tracking-[0.12em] mb-1">
                    Ready to check out?
                  </p>
                  <p className="text-xs md:text-sm text-white/50">Add all to cart and complete your order.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={addAllToCart}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EA580C] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] hover:opacity-95 transition-opacity"
                  >
                    <ShoppingBag size={18} strokeWidth={2} />
                    Add all to cart
                  </button>
                  <Link
                    to="/cart"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] hover:bg-white/10 transition-colors text-center"
                  >
                    View cart
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

function WishlistCard({ product, onRemove }: { product: Product; onRemove: () => void }) {
  const h = productHandle(product);
  const showFast = product.badgeType === 'sale' || product.badgeType === 'new';
  return (
    <div className="bg-white rounded-2xl p-2.5 pb-4 shadow-sm border border-[#0D0D0D]/5">
      <Link to={`/product/${h}`} className="block relative rounded-2xl overflow-hidden aspect-[3/4] bg-muted group">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 items-start">
          {product.badge && product.badgeType === 'sale' && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#EA580C] text-white">{product.badge}</span>
          )}
          {showFast && (
            <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0D0D0D] text-white flex items-center gap-1">
              <Zap size={10} className="text-[#F5C800]" fill="currentColor" />
              Fast
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
          className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-muted transition-colors"
          aria-label="Remove from wishlist"
        >
          <X size={16} className="text-[#0D0D0D]" />
        </button>
      </Link>
      <div className="mt-3 px-1">
        <p className="text-[10px] font-bold uppercase tracking-[1.2px] text-muted-foreground mb-0.5">{product.brand}</p>
        <p className="text-sm font-semibold text-[#0D0D0D] leading-snug mb-2 line-clamp-2">{product.name}</p>
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <span className="text-sm font-bold text-[#0D0D0D]">{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>
        <div className="flex gap-1">
          {product.colors.slice(0, 5).map((c, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border border-[#0D0D0D]/15 shrink-0"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
