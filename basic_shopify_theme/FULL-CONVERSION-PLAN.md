# Complete Shopify Theme Conversion Plan
## 4-Part Structured Conversion

**Current Status:** Only 3 homepage sections + 8 product snippets converted (11 of 40+ files)

**Goal:** Convert ALL React components, pages, and sections to Shopify Liquid

---

## PART 1: Global Layout Components (Header, Footer, Navigation)
**Priority:** CRITICAL - These appear on every page
**Estimated Files:** 4 files

### Files to Convert:
1. **Header Section** (`sections/header.liquid`)
   - Source: `src/components/Header.tsx`
   - Features: Promo banner, logo, desktop nav, action icons (search, cart, wishlist, user)
   - Mobile: Hamburger menu trigger, hidden wishlist
   - Logo: Image from `src/assets/logo for web .png`
   - Cart count badge integration

2. **Mobile Sidebar** (`snippets/mobile-sidebar.liquid`)
   - Source: `src/components/MobileSidebar.tsx`
   - Features: Slide-in navigation, logo, close button, navigation links, promo footer
   - JavaScript: Toggle open/close, body scroll lock

3. **Footer Section** (`sections/footer.liquid`)
   - Source: `src/components/Footer.tsx`
   - Features: Logo, 4-column layout (brand + 3 link columns)
   - Links: Shop, Support, Quick Links
   - Copyright notice

4. **Navbar Component** (Legacy - may skip if Header covers it)
   - Source: `src/components/Navbar.tsx`
   - Note: Similar to Header but older version, determine if needed

**Deliverables:**
- ✅ Header section with mobile sidebar
- ✅ Footer section with logo
- ✅ Cart integration working
- ✅ Mobile responsiveness verified

---

## PART 2: Homepage Sections (Remaining 5 sections)
**Priority:** HIGH - Complete the homepage
**Estimated Files:** 5 files

### Files to Convert:
5. **Brands Section** (`sections/brands-section.liquid`)
   - Source: `src/sections/BrandsSection.tsx`
   - Features: Brand grid display, "All brands" button linking to `/brands`
   - Dynamic: Load brands from products (vendors)

6. **Category Grid Section** (`sections/category-grid.liquid`)
   - Source: `src/sections/CategoryGridSection.tsx`
   - Features: Category cards with images and links
   - Configuration: Editable in Theme Editor

7. **Lifestyle Banners Section** (`sections/lifestyle-banners.liquid`)
   - Source: `src/sections/LifestyleBanners.tsx`
   - Features: Two large banner cards - "Everyday street wear" & "Comfort redefined"
   - Links: Navigate to `/collection` (products page)

8. **Newsletter Section** (`sections/newsletter.liquid`)
   - Source: `src/sections/NewsletterSection.tsx`
   - Features: Email signup form with large "DROP" text, gradient styling
   - Integration: Shopify customer email capture

9. **Sale Banner Section** (`sections/sale-banner.liquid`)
   - Source: `src/sections/SaleBanner.tsx`
   - Features: Promotional banner with CTA button
   - Configuration: Editable text and link

**Deliverables:**
- ✅ Complete homepage with all 8 sections (3 existing + 5 new)
- ✅ Updated `templates/index.json` with all sections
- ✅ Theme Editor fully functional

---

## PART 3: Product & Collection Pages
**Priority:** HIGH - Core shopping experience
**Estimated Files:** 8-10 files

### Files to Convert:
10. **Collection Page Template** (`templates/collection.liquid`)
    - Source: `src/pages/Collection.tsx`
    - Features: Product grid with filters, sort options
    - Pagination

11. **Collection Filters** (`snippets/collection-filters.liquid`)
    - Source: `src/components/CollectionFilters.tsx`
    - Features: Horizontal filter chips (Category, Price, Brand, etc.)

12. **Filter Sidebar** (`snippets/filter-sidebar.liquid`)
    - Source: `src/components/FilterSidebar.tsx`
    - Features: Vertical sidebar with collapsible filter groups
    - Mobile: Drawer-style

13. **Product Card** (`snippets/product-card.liquid`)
    - Source: `src/components/ProductCard.tsx`
    - Features: Image, title, price, badges, wishlist toggle
    - Quick add to cart

14. **Product Grid** (`snippets/product-grid.liquid`)
    - Source: `src/components/ProductGrid.tsx`
    - Features: Responsive grid layout, loading states

15. **Category Card** (`snippets/category-card.liquid`)
    - Source: `src/components/CategoryCard.tsx`
    - Features: Category image and name, link to collection

16. **Brand Products Page Template** (`templates/collection.brand.liquid`)
    - Source: `src/pages/BrandProducts.tsx`
    - Features: Brand hero banner, "Official Brand Page" badge, brand info section
    - Filter by vendor

17. **Brands Listing Page Template** (`templates/page.brands.liquid`)
    - Source: `src/pages/Brands.tsx`
    - Features: Grid of brand cards with names and descriptions
    - Background: #F5F0EB

**Deliverables:**
- ✅ Collection page with filters
- ✅ Brand pages working
- ✅ Product cards with badges
- ✅ All links functional

---

## PART 4: Cart, Utility Pages & Final Components
**Priority:** MEDIUM-HIGH - Complete the experience
**Estimated Files:** 10-12 files

### Files to Convert:
18. **Cart Page Template** (`templates/cart.liquid`)
    - Source: `src/pages/Cart.tsx`
    - Features: 
      - **Mobile:** Compact card style (image, details, quantity, price)
      - **Desktop:** Table layout (Product | Price | Quantity | Total)
      - Circular +/- buttons
      - Remove button with trash icon (underlined)
      - No "Fast Drop Badge" on mobile
      - Centered content on mobile

19. **Cart Item Card** (`snippets/cart-item-card.liquid`)
    - Source: `src/components/CartItemCard.tsx`
    - Features: Product card in cart with quantity controls

20. **Order Summary** (`snippets/order-summary.liquid`)
    - Source: `src/components/OrderSummary.tsx`
    - Features: Subtotal, shipping, promo code, checkout button

21. **404 Not Found Page** (`templates/404.liquid`)
    - Source: `src/pages/NotFound.tsx`
    - Features: Custom 404 message, "Continue shopping" button

22. **Size Predictor Component** (Already converted: `snippets/size-predictor-modal.liquid`)
    - ✅ Already done in previous conversion

23. **Testimonial Card** (`snippets/testimonial-card.liquid`)
    - Source: `src/components/TestimonialCard.tsx`
    - Features: Customer review card with stars, name, review text
    - Mobile: Horizontal scroll

24. **Brand Card** (`snippets/brand-card.liquid`)
    - Source: `src/components/BrandCard.tsx`
    - Features: Brand logo/image, name, description

25. **Scroll to Top** (JavaScript utility)
    - Source: `src/components/ScrollToTop.tsx`
    - Implementation: Add to theme JavaScript

26. **Additional Utilities:**
    - NavLink component (integrate into header/footer)
    - UI components folder (buttons, badges, etc.)

**Deliverables:**
- ✅ Cart page (mobile + desktop layouts)
- ✅ 404 page
- ✅ All utility components
- ✅ JavaScript utilities integrated
- ✅ Complete theme ready for production

---

## Summary by Part

| Part | Focus Area | Files | Priority |
|------|-----------|-------|----------|
| **1** | Header, Footer, Navigation | 4 | CRITICAL |
| **2** | Homepage Sections | 5 | HIGH |
| **3** | Products & Collections | 8-10 | HIGH |
| **4** | Cart, 404, Utilities | 10-12 | MEDIUM-HIGH |
| **TOTAL** | Complete Theme | **27-31 files** | - |

---

## Current vs. Complete

### ✅ Already Converted (11 files):
- Product page snippets (8): breadcrumb, image gallery, info panel, variant selector, add to cart, accordion, related products, size predictor
- Homepage sections (3): hero, trending products, testimonials
- Templates (2): `product.styledrop.liquid`, `index.liquid`
- Config: `index.json`
- Assets: `style-drop-custom.css`

### 🔄 To Be Converted (27-31 files):
- **Part 1:** 4 files (Header, Footer, Mobile Sidebar)
- **Part 2:** 5 files (Homepage sections)
- **Part 3:** 8-10 files (Collections, filters, product grids)
- **Part 4:** 10-12 files (Cart, 404, utilities)

---

## Technical Notes

### Shopify Objects to Use:
- `cart` - Cart items, count, total
- `collections` - All collections
- `collection` - Current collection
- `product` - Product data
- `customer` - Logged-in customer
- `shop` - Store info
- `routes` - URL helpers
- `linklists` - Navigation menus
- `settings` - Theme settings

### JavaScript Requirements:
- Mobile sidebar toggle
- Cart drawer (optional)
- Wishlist functionality (localStorage)
- Filter interactions
- Scroll to top
- Quick add to cart
- Product image gallery
- Variant selection

### CSS Approach:
- Continue using `style-drop-custom.css`
- Add new classes as needed
- Maintain Tailwind-style utility classes
- Keep responsive breakpoints consistent

---

## Approval & Progress Tracking

After completing each part, I will:
1. ✅ Show what was converted
2. 📊 Update completion percentage
3. 🚀 Ask for approval to continue to next part
4. 📝 Commit progress to Git (but not push until all 4 parts done)

**Final push to GitHub:** After Part 4 completion

---

**Ready to start PART 1?** Type "next" or "start Part 1" to begin.
