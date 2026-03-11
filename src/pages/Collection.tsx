/**
 * Collection Page
 * 
 * Product collection/catalog page with filters and grid.
 * This will map to Shopify's collection.liquid template.
 * 
 * Features:
 * - Breadcrumb navigation
 * - Collection header with sorting
 * - Filter sidebar
 * - Product grid
 * - Load more functionality
 * - Product count display
 */

import { useState } from 'react';
import { Grid3X3, LayoutGrid, ChevronLeft, ArrowRight, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';
import { collectionProducts } from '@/data/products';

const Collection = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const displayedProducts = collectionProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, collectionProducts.length));
  };

  return (
    <MainLayout>
      {/* Breadcrumb + Collection Header */}
      <div className="bg-[#F5F0EB] border-b border-[#0D0D0D]/10">
        <div className="container py-4">
          {/* Breadcrumb Navigation */}
          <div className="
            flex items-center gap-2 
            text-sm text-muted-foreground mb-3
          ">
            <ChevronLeft size={14} />
            <Link 
              to="/" 
              className="hover:text-foreground"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">
              Shop What's Trending
            </span>
          </div>

          {/* Collection Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            {/* Left: Title */}
            <div>
            <span className="inline-block mb-3 rounded px-2.5 py-0.5 bg-[#F5C800] font-condensed text-[13px] font-extrabold uppercase tracking-[1.54px] text-[#0D0D0D]">
              TRENDING COLLECTION
            </span>

              <h1 className="font-display text-5xl md:text-7xl">
                SHOP WHAT'S <span className="text-accent">TRENDING</span>
              </h1>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
              {/* Filters toggle (mobile) */}
              <button
                type="button"
                onClick={() => setIsFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0D0D] text-white text-[11px] font-semibold tracking-[0.16em] uppercase"
              >
                <Filter size={14} />
                <span>Filters</span>
              </button>

              {/* Item Count */}
              <span className="text-sm text-muted-foreground">
                {collectionProducts.length} items
              </span>

              {/* Sort control */}
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  Sort by:
                </span>
                <button
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-sm text-foreground border border-border shadow-sm"
                  type="button"
                >
                  <span className="font-semibold">Trending</span>
                  <span className="text-xs">▾</span>
                </button>
              </div>

              {/* View Toggle Buttons (desktop) */}
              <div className="hidden md:flex items-center gap-2">
                <button 
                  className="
                    p-1.5 bg-primary text-primary-foreground 
                    rounded
                  "
                  aria-label="Grid view"
                >
                  <Grid3X3 size={16} />
                </button>

                <button 
                  className="
                    p-1.5 text-muted-foreground 
                    rounded
                  "
                  aria-label="List view"
                >
                  <LayoutGrid size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Collection Content - Filters + Products */}
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
              <ProductGrid 
                products={displayedProducts} 
                columns={3} 
              />

              {/* Load More Section */}
              {visibleCount < collectionProducts.length && (
                <div className="mt-12 flex flex-col items-center gap-4">
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm text-muted-foreground">
                      Showing {displayedProducts.length} of {collectionProducts.length}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Load More Button */}
                  <button
                    onClick={loadMore}
                    className="
                      btn-accent px-8 py-3 
                      font-display text-sm tracking-wider 
                      flex items-center gap-2
                    "
                  >
                    LOAD MORE <ArrowRight size={16} />
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
                Show {collectionProducts.length} results
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Collection;
