/**
 * Brand Products Page
 * 
 * Displays all products from a specific brand with filtering.
 * Designed to convert to Shopify collection.liquid template.
 * 
 * Features:
 * - Brand hero header with background image
 * - Brand info (name, rating, description)
 * - Filter sidebar
 * - Product grid
 * - Sort and view options
 * - Load more functionality
 */

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid3X3, LayoutGrid, ChevronLeft, Filter, X } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { collectionProducts } from '@/data/products';
import { featuredBrands } from '@/data/brands';
import brandHero from '@/assets/zara.jpg';

const BrandProducts = () => {
  const { brandName } = useParams();
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortBy, setSortBy] = useState('Trending');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Get brand info
  const brand =
    featuredBrands.find(
      (b) => b.name.toLowerCase() === brandName?.toLowerCase()
    ) || featuredBrands[0];

  const isZara = brand.name.toLowerCase() === 'zara';

  // Filter products by brand
  const brandProducts = collectionProducts.filter(
    (product) => product.brand.toLowerCase() === brand.name.toLowerCase()
  );

  const displayedProducts = brandProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, brandProducts.length));
  };

  // Mock brand stats
  const brandStats = {
    rating: 4.5,
    reviewCount: 120000,
    productCount: brandProducts.length,
    categories: ['MULTI-CATEGORY'],
  };

  return (
    <MainLayout>
      {/* Breadcrumb + Back Button */}
      <div className="bg-[#F5F0EB] border-b border-[#0D0D0D]/10">
        <div className="container py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft size={14} />
            All Products
          </Link>
        </div>
      </div>

      {/* Brand Hero Header - Dark */}
      <div className="relative overflow-hidden bg-[#111111]">
        {/* Background image / wash */}
        {isZara ? (
          <>
            {/* Zara hero image */}
            <img
              src={brandHero}
              alt={`${brand.name} hero`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark gradient overlay to keep text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/70 to-transparent" />
          </>
        ) : (
          <div
            className="absolute inset-0 opacity-70 mix-blend-screen"
            style={{
              backgroundColor: brand.color,
              backgroundImage:
                'radial-gradient(circle at 10% 0%, rgba(255,255,255,0.28) 0%, transparent 45%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.18) 0%, transparent 55%)',
            }}
          />
        )}

        <div className="container relative py-16 md:py-20 text-white">
          {/* Brand Badge */}
          <div className="inline-block mb-5 px-3 py-1.5 bg-[#F5C800] rounded font-condensed text-[11px] font-extrabold uppercase tracking-[1.54px] text-[#0D0D0D]">
            ● OFFICIAL BRAND PAGE
          </div>

          {/* Brand Name */}
          <h1 className="font-display text-6xl md:text-8xl mb-4 tracking-[0.08em]">
            {brand.name}
          </h1>

          {/* Brand Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-5 text-sm">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(brandStats.rating) ? 'text-[#F5C800]' : 'text-white/20'}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-1 font-semibold">{brandStats.rating}</span>
              </div>
              <span className="text-white/70">
                {brandStats.reviewCount.toLocaleString()} reviews
              </span>
            </div>

            {/* Product Count */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">{brandStats.productCount}</span>
              <span className="text-white/70">products in stock</span>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2">
              <span className="text-white/70">
                {brandStats.categories.join(', ')}
              </span>
            </div>
          </div>

          {/* Brand Description */}
          <p className="max-w-3xl text-sm text-white/80 leading-relaxed">
            {brand.tagline && `${brand.name} delivers ${brand.tagline.toLowerCase()}. `}
            {brand.name} pioneered fast-fashion and continues to set the pace of global style. From
            statement-making silhouettes to everyday essentials, {brand.name} invites trend-forward
            shoppers with a keen sense of high-quality textiles and construction at prices both accessible and transparent.
          </p>
        </div>
      </div>

      {/* Collection Header */}
      <div className="bg-[#F5F0EB] border-b border-[#0D0D0D]/10">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Collection Title */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl">
                {brand.name}{' '}
                <span className="text-accent">
                  COLLECTION
                </span>
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {brandProducts.length} items
              </p>
            </div>

            {/* Right: Sort, View & Filters Controls */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Sort Dropdown */}
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-semibold bg-transparent border border-border rounded px-3 py-1.5 cursor-pointer hover:border-primary"
                >
                  <option value="Trending">Trending</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>

              {/* View Toggle Buttons (desktop) */}
              <div className="hidden md:flex items-center gap-1">
                <button
                  className="p-2 bg-primary text-primary-foreground rounded"
                  aria-label="Grid view"
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  className="p-2 text-muted-foreground hover:bg-muted rounded"
                  aria-label="List view"
                >
                  <LayoutGrid size={16} />
                </button>
              </div>

              {/* Filters toggle (mobile) */}
              <button
                type="button"
                onClick={() => setIsFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0D0D0D]/15 bg-white/70 text-[11px] font-semibold tracking-[0.16em] uppercase"
              >
                <Filter size={14} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Filters + Products */}
      <div className="bg-[#F5F0EB] py-8 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-[240px_1fr] gap-8">
            {/* Left Sidebar - Filters (desktop only) */}
            <div className="hidden md:block">
              <FilterSidebar />
            </div>

            {/* Right Content - Products */}
            <div>
              {/* Product Grid */}
              {displayedProducts.length > 0 ? (
                <ProductGrid products={displayedProducts} columns={3} />
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    No products found for {brand.name}
                  </p>
                  <Link
                    to="/collection"
                    className="inline-block mt-4 btn-accent"
                  >
                    Browse All Products
                  </Link>
                </div>
              )}

              {/* Load More Section */}
              {visibleCount < brandProducts.length && (
                <div className="mt-12 flex flex-col items-center gap-4">
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm text-muted-foreground">
                      Showing {displayedProducts.length} of {brandProducts.length}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Load More Button */}
                  <button
                    onClick={loadMore}
                    className="btn-accent px-8 py-3 font-display text-sm tracking-wider"
                  >
                    LOAD MORE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isFiltersOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close filters"
            onClick={() => setIsFiltersOpen(false)}
          />

          {/* Drawer panel - anchored to left */}
          <div className="relative flex h-full w-[85%] max-w-xs flex-col bg-[#050505] text-white shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h2 className="font-display text-base tracking-[0.18em] uppercase">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setIsFiltersOpen(false)}
                className="p-1 rounded-full hover:bg-white/10"
                aria-label="Close filters"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer content */}
            <div className="flex-1 overflow-y-auto px-3 py-4">
              <FilterSidebar />
            </div>

            {/* Drawer footer */}
            <div className="px-4 pb-6 pt-3 border-t border-white/10 bg-[#050505]">
              <button
                type="button"
                onClick={() => setIsFiltersOpen(false)}
                className="w-full h-12 rounded-full bg-accent text-white font-condensed text-xs tracking-[0.18em] uppercase flex items-center justify-center"
              >
                Show {brandProducts.length} results
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default BrandProducts;
