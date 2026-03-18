# StyleDrop Shopify Theme - Setup & Deployment Guide

## 📦 What You Have

A complete Shopify theme converted from React, including:

### ✅ Completed Components

**Product Page:**
- Breadcrumb navigation
- Product image gallery with thumbnails
- Product info panel (title, price, rating, description)
- Color & size variant selectors
- Quantity selector & add to cart
- Product feature badges
- Accordion sections (Size Guide, Shipping, etc.)
- Related products section
- Size predictor modal

**Homepage Sections:**
- Hero section with CTAs
- Trending products showcase
- Customer testimonials

**Interactive Features:**
- Wishlist (localStorage)
- Size predictor calculator
- Quick add to cart
- Responsive mobile design
- Horizontal scroll on mobile

---

## 🚀 Deployment Instructions

### Step 1: Upload Theme to Shopify

**Option A: Using Shopify CLI (Recommended)**
```bash
# Install Shopify CLI (if not already installed)
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd basic_shopify_theme

# Login to Shopify
shopify auth login

# Push theme to Shopify
shopify theme push

# Or push and preview
shopify theme dev
```

**Option B: Manual Upload via Admin**
1. Compress `basic_shopify_theme` folder as ZIP
2. Go to: Shopify Admin > Online Store > Themes
3. Click "Add theme" > "Upload ZIP file"
4. Select your ZIP file
5. Wait for upload to complete

---

### Step 2: Theme Setup

#### 2.1. Upload Custom CSS
The theme requires `style-drop-custom.css` for StyleDrop design system.

**Location:** `assets/style-drop-custom.css`

**Verify it's loaded in:**
- `templates/product.styledrop.liquid`
- `templates/index.liquid`

#### 2.2. Configure Homepage

1. Go to: **Online Store > Themes > Customize**
2. Navigate to **Homepage**
3. Sections are already configured in `index.json`
4. Customize each section:

**Hero Section:**
- Upload hero image
- Customize headline text
- Set CTA button links
- Select featured product (optional)
- Configure trust features

**Trending Products:**
- Select collection to display
- Set product limit (2-12)
- Customize heading text

**Testimonials:**
- Add customer names
- Enter review text
- Set star ratings (1-5)
- Upload customer avatars (optional)

#### 2.3. Configure Product Pages

1. Navigate to any product in Theme Editor
2. Select template: **"product.styledrop"**
3. Or rename file to make it default:
   - Rename `product.styledrop.liquid` → `product.liquid`

---

### Step 3: Product Setup

#### 3.1. Product Tags for Badges

Add these tags to products for automatic badges:

**Primary Badges (Red):**
- `sale` - Shows "SALE" badge
- `bestseller` or `best seller` - Shows "BEST SELLER"
- `new` - Shows "NEW IN"
- `trending` - Shows "TRENDING"

**Secondary Badge (Black with lightning):**
- `fast-drop` or `fast drop` - Shows "FAST DROP"

**Example:**
Product Tags: `bestseller, fast-drop`
Result: Shows both "BEST SELLER" and "FAST DROP" badges

#### 3.2. Product Images

- Upload multiple images for gallery
- First image = featured image
- Gallery supports navigation, thumbnails, zoom

#### 3.3. Product Variants

- Add color variants for color selector
- Add size variants for size selector
- Set compare-at prices for discount badges

#### 3.4. Product Metafields (Optional)

For star ratings, create metafield:
- Namespace: `reviews`
- Key: `rating`
- Type: Number (decimal)
- Value: 1-5

---

### Step 4: Collections Setup

#### 4.1. Create Collections

Create these collections for proper theme functionality:

1. **All Products** - Handle: `all`
2. **Trending** - Handle: `trending`
3. **New Arrivals** - Handle: `new-arrivals`
4. **Best Sellers** - Handle: `bestsellers`

#### 4.2. Assign Products

- Add products to relevant collections
- Tag products appropriately
- Set featured products for homepage

---

### Step 5: Testing Checklist

#### Product Page Testing:
- [ ] Image gallery navigation works
- [ ] Thumbnails click to change main image
- [ ] Variant selection updates price/image
- [ ] Add to cart button works
- [ ] Quantity selector increases/decreases
- [ ] Wishlist button toggles
- [ ] Size predictor opens and calculates
- [ ] Accordions expand/collapse
- [ ] Related products show recommendations
- [ ] Breadcrumb links work
- [ ] Mobile responsive layout

#### Homepage Testing:
- [ ] Hero section displays correctly
- [ ] CTA buttons navigate properly
- [ ] Featured product card shows (desktop only)
- [ ] Trust features display
- [ ] Trending products load from collection
- [ ] Product badges show correctly
- [ ] Wishlist buttons work
- [ ] Horizontal scroll on mobile works
- [ ] Testimonials display with star ratings
- [ ] Mobile snap scrolling works

#### General Testing:
- [ ] Custom CSS loads correctly
- [ ] Fonts display properly (Bebas Neue, Barlow Condensed)
- [ ] Colors match design (#DC2626 red, #F5C800 yellow, #0D0D0D black)
- [ ] Responsive breakpoints work (mobile/desktop)
- [ ] No console errors
- [ ] Page load speed acceptable

---

## 🎨 Customization Guide

### Colors

Main colors are defined in `style-drop-custom.css`:

```css
--sd-black: #0D0D0D;
--sd-cream: #F5F0EB;
--sd-accent: #DC2626;
--sd-yellow: #F5C800;
```

To change colors, edit `assets/style-drop-custom.css`

### Fonts

Current fonts:
- **Display:** Bebas Neue (headings)
- **Condensed:** Barlow Condensed (labels, badges)
- **Sans:** Inter (body text)

Fonts are loaded via Google Fonts CDN in custom CSS.

### Sections

All sections are configurable in Theme Editor:
- No code changes needed for text/images
- Add/remove sections freely
- Reorder sections by drag & drop

---

## 📱 Mobile Optimization

The theme is fully responsive with special mobile features:

**Homepage:**
- Hero titles hidden on mobile
- Product card hidden on mobile (hero section)
- CTAs stack vertically
- Trust features: 2 columns instead of 4

**Product Grid:**
- Desktop: 4 columns
- Mobile: 2 visible + horizontal scroll
- Snap scrolling for smooth UX

**Testimonials:**
- Desktop: 3 columns
- Mobile: 1 visible + horizontal scroll

**Product Page:**
- Desktop: 2-column grid
- Mobile: Single column, stacked
- Content centered on mobile

---

## 🔧 Troubleshooting

### CSS Not Loading
**Fix:** Verify `style-drop-custom.css` exists in `assets/` folder
```liquid
{{ 'style-drop-custom.css' | asset_url | stylesheet_tag }}
```

### Fonts Not Showing
**Fix:** Check internet connection (Google Fonts CDN)
Or download fonts and host locally in `assets/`

### Products Not Showing
**Fix:** 
- Verify collection exists and has products
- Check collection handle matches section settings
- Ensure products are published

### Badges Not Showing
**Fix:**
- Add proper product tags
- Check tag spelling (case-sensitive)
- Refresh page/clear cache

### Wishlist Not Working
**Fix:**
- Check browser console for JavaScript errors
- Verify localStorage is enabled
- Try different browser

### Size Predictor Not Opening
**Fix:**
- Check for JavaScript errors in console
- Verify snippet is rendered in template
- Test `openSizePredictor()` function in console

---

## 📊 Performance Tips

1. **Optimize Images:**
   - Use Shopify's `img_url` filter with size parameters
   - Example: `{{ product.image | img_url: '600x' }}`
   - Compress images before upload

2. **Lazy Loading:**
   - Add `loading="lazy"` to images below fold
   - Already implemented in templates

3. **Minimize JavaScript:**
   - Current implementation uses vanilla JS (no libraries)
   - Keep scripts inline for critical features
   - Consider minifying for production

4. **CSS Optimization:**
   - Custom CSS is already optimized
   - Consider purging unused Tailwind classes
   - Minify CSS for production

---

## 🆘 Support & Resources

### Shopify Documentation
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Theme Objects](https://shopify.dev/docs/api/liquid/objects)
- [Section Schema](https://shopify.dev/docs/themes/architecture/sections/section-schema)

### StyleDrop Files
- **Custom CSS:** `assets/style-drop-custom.css`
- **Product Template:** `templates/product.styledrop.liquid`
- **Homepage:** `templates/index.json`
- **Snippets:** `snippets/` folder
- **Sections:** `sections/` folder

### Common Commands

```bash
# Preview theme locally
shopify theme dev

# Push changes
shopify theme push

# Pull theme from Shopify
shopify theme pull

# Check theme for issues
shopify theme check
```

---

## ✅ Launch Checklist

Before going live:

- [ ] Test all product pages
- [ ] Test homepage sections
- [ ] Test cart functionality
- [ ] Test checkout process
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Verify all images load
- [ ] Check page load speed
- [ ] Set up analytics
- [ ] Configure domain
- [ ] Remove password protection
- [ ] Announce launch!

---

## 🎉 You're Ready!

Your StyleDrop Shopify theme is complete and ready for deployment.

**Next Steps:**
1. Upload theme to Shopify
2. Configure sections in Theme Editor
3. Add products with proper tags
4. Test thoroughly
5. Go live!

Good luck with your launch! 🚀
