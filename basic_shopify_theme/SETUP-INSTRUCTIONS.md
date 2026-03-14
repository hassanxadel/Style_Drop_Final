# StyleDrop Shopify Theme - Setup Instructions

## STEP 1: Foundation Setup - COMPLETED ✅

### What Was Created:

1. **`assets/style-drop-custom.css`** - Complete custom stylesheet with:
   - All color variables from your design system
   - Font definitions (Bebas Neue, Barlow Condensed, Inter)
   - Custom component classes (badges, buttons, etc.)
   - Animation keyframes
   - Utility classes matching your Tailwind setup
   - Responsive grid helpers
   - Hover effects and transitions

### How to Integrate into Shopify Theme:

#### Option A: Add to theme.liquid (Recommended)
1. Open `layout/theme.liquid`
2. Find the `{{ content_for_header }}` tag (around line 42)
3. Add this line **AFTER** the base.css link:
```liquid
{{ 'style-drop-custom.css' | asset_url | stylesheet_tag }}
```

Full example:
```liquid
{{ 'base.css' | asset_url | stylesheet_tag }}
{{ 'style-drop-custom.css' | asset_url | stylesheet_tag }}
```

#### Option B: Import in base.css
Add at the top of `assets/base.css`:
```css
@import url('style-drop-custom.css');
```

---

## Design System Reference

### Color Palette
```css
--sd-black: #0D0D0D     /* Primary text, dark backgrounds */
--sd-red: #DC2626       /* Accent color, CTAs, badges */
--sd-yellow: #F5C800    /* Secondary accent, badges */
--sd-cream: #F5F0EB     /* Main background color */
```

### Typography
```css
--font-display: 'Bebas Neue'      /* Headings, large text */
--font-condensed: 'Barlow Condensed' /* Buttons, labels */
--font-sans: 'Inter'              /* Body text */
```

### Custom Classes Available

#### Badges
- `.badge-accent` - Red badge (used for sale, new, etc.)
- `.badge-yellow` - Yellow badge (used for featured items)

#### Buttons
- `.btn-accent` - Primary red button with hover effect
- `.btn-outline-light` - Light outline button for dark backgrounds

#### Layout
- `.container` - Max-width container with padding
- `.section-dark` - Dark background section
- `.bg-sd-cream` - Cream background
- `.bg-sd-black` - Black background

#### Typography Effects
- `.font-display` - Bebas Neue font
- `.font-condensed` - Barlow Condensed font
- `.font-sans` - Inter font
- `.heading-stretch-up` - Vertical stretch effect (1.45x)
- `.sub-heading-stretch-up` - Subtle vertical stretch (1.2x)

#### Animations
- `.animate-marquee` - Horizontal scroll animation
- `.animate-fade-in` - Fade in effect
- `.animate-zoom-in` - Zoom in effect
- `.animate-slide-in-bottom` - Slide up from bottom

#### Shadows
- `.shadow-soft` - Subtle shadow
- `.shadow-medium` - Medium shadow
- `.shadow-strong` - Strong shadow
- `.shadow-dark` - Dark, prominent shadow

---

## Next Steps

Now that the foundation is set up, you can proceed to:

### ✅ STEP 2: Breadcrumb Navigation Snippet
- Create `snippets/breadcrumb-product.liquid`
- Convert ProductDetails breadcrumb HTML to Liquid
- Use Shopify route and product objects

### Ready for Step 2?
Reply with **"next"** to continue with breadcrumb navigation conversion.

---

## Testing Checklist for Step 1

After adding the CSS file:
- [ ] Theme loads without errors
- [ ] Google Fonts load correctly (Bebas Neue, Barlow Condensed, Inter)
- [ ] CSS variables are accessible in browser dev tools
- [ ] No conflicts with Dawn's existing styles

---

## Notes

- All Tailwind classes from your React app have equivalent CSS classes
- Custom animations preserve exact timing from original design
- Color variables use the exact hex codes from your Figma design
- Font stack matches your original tailwind.config.ts exactly
