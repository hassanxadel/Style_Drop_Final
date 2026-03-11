# Shopify Conversion Guide

## 🎯 Overview

This guide explains how to convert the React components into Shopify Liquid sections, snippets, and templates.

---

## 📋 Conversion Checklist

### Phase 1: Setup
- [ ] Create new Shopify theme (Dawn 2.0 recommended as base)
- [ ] Copy `src/index.css` to `assets/theme.css`
- [ ] Copy Tailwind config to Shopify theme
- [ ] Set up build process for CSS compilation

### Phase 2: Layout & Structure
- [ ] Convert `MainLayout.tsx` → `layout/theme.liquid`
- [ ] Convert `Header.tsx` → `sections/header.liquid`
- [ ] Convert `Footer.tsx` → `sections/footer.liquid`

### Phase 3: Homepage Sections
- [ ] Convert `HeroSection.tsx` → `sections/hero.liquid`
- [ ] Convert `BrandsSection.tsx` → `sections/brands.liquid`
- [ ] Convert `TrendingSection.tsx` → `sections/featured-collection.liquid`
- [ ] Convert `CategoryGridSection.tsx` → `sections/categories.liquid`
- [ ] Convert `SaleBanner.tsx` → `sections/promo-banner.liquid`
- [ ] Convert `LifestyleBanners.tsx` → `sections/collection-banners.liquid`
- [ ] Convert `TestimonialsSection.tsx` → `sections/testimonials.liquid`
- [ ] Convert `NewsletterSection.tsx` → `sections/newsletter.liquid`

### Phase 4: Snippets
- [ ] Convert `ProductCard.tsx` → `snippets/product-card.liquid`
- [ ] Convert `BrandCard.tsx` → `snippets/brand-card.liquid`
- [ ] Convert `CategoryCard.tsx` → `snippets/category-card.liquid`
- [ ] Convert `TestimonialCard.tsx` → `snippets/testimonial-card.liquid`
- [ ] Convert `FilterSidebar.tsx` → `snippets/collection-filters.liquid`

### Phase 5: Templates
- [ ] Convert `Index.tsx` → `templates/index.json`
- [ ] Convert `Collection.tsx` → `templates/collection.json`
- [ ] Convert `NotFound.tsx` → `templates/404.liquid`

### Phase 6: Testing
- [ ] Test all sections in theme editor
- [ ] Verify responsive design
- [ ] Test cart functionality
- [ ] Test filters on collection pages
- [ ] Verify newsletter signup
- [ ] Check SEO meta tags

---

## 🔄 Component Conversion Examples

### Example 1: Hero Section

#### React Component
```tsx
const HeroSection = () => {
  return (
    <section>
      <div className="section-dark">
        <div className="container">
          <h1 className="font-display text-6xl">
            WEAR WHAT <span className="text-accent">DROPS</span> TODAY.
          </h1>
          <p>Over 200 brands, handpicked and fast-shipped.</p>
          <button className="btn-accent">Shop What's Trending</button>
        </div>
      </div>
    </section>
  );
};
```

#### Shopify Liquid Section
```liquid
<section>
  <div class="section-dark">
    <div class="container">
      <h1 class="font-display text-6xl">
        {{ section.settings.hero_title }}
      </h1>
      <p>{{ section.settings.hero_description }}</p>
      <a href="{{ section.settings.cta_link }}" class="btn-accent">
        {{ section.settings.cta_text }}
      </a>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Hero Section",
  "settings": [
    {
      "type": "text",
      "id": "hero_title",
      "label": "Hero Title",
      "default": "WEAR WHAT DROPS TODAY."
    },
    {
      "type": "textarea",
      "id": "hero_description",
      "label": "Description",
      "default": "Over 200 brands, handpicked and fast-shipped."
    },
    {
      "type": "text",
      "id": "cta_text",
      "label": "Button Text",
      "default": "Shop What's Trending"
    },
    {
      "type": "url",
      "id": "cta_link",
      "label": "Button Link"
    }
  ],
  "presets": [
    {
      "name": "Hero Section"
    }
  ]
}
{% endschema %}
```

---

### Example 2: Product Card

#### React Component
```tsx
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative">
        <img src={product.img} alt={product.name} />
        <span className="badge-accent">{product.badge}</span>
      </div>
      <p>{product.brand}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
};
```

#### Shopify Liquid Snippet
```liquid
{% comment %}
  Renders a product card

  Accepts:
  - product: {Object} Product Liquid object

  Usage:
  {% render 'product-card', product: product %}
{% endcomment %}

<div class="group cursor-pointer">
  <div class="relative">
    <img 
      src="{{ product.featured_image | image_url: width: 600 }}" 
      alt="{{ product.title }}"
      loading="lazy"
    />
    
    {% if product.compare_at_price > product.price %}
      <span class="badge-accent">SALE</span>
    {% endif %}
  </div>
  
  <p>{{ product.vendor }}</p>
  <p>{{ product.title }}</p>
  <p>{{ product.price | money }}</p>
</div>
```

---

### Example 3: Product Grid with Filters

#### React Component
```tsx
const Collection = () => {
  const [products, setProducts] = useState(collectionProducts);
  
  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-8">
      <FilterSidebar />
      <ProductGrid products={products} columns={3} />
    </div>
  );
};
```

#### Shopify Liquid Template
```liquid
<div class="grid md:grid-cols-[240px_1fr] gap-8">
  {%- render 'collection-filters', results: collection -%}
  
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
      {% for product in collection.products %}
        {% render 'product-card', product: product %}
      {% endfor %}
    </div>
    
    {% if paginate.pages > 1 %}
      {% render 'pagination', paginate: paginate %}
    {% endif %}
  </div>
</div>
```

---

### Example 4: Newsletter Section

#### React Component
```tsx
const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <section className="section-dark py-16">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email..." />
        <button className="btn-accent">Get Early Access →</button>
      </form>
    </section>
  );
};
```

#### Shopify Liquid Section
```liquid
<section class="section-dark py-16">
  <div class="container text-center max-w-2xl mx-auto">
    <h2>{{ section.settings.title }}</h2>
    <p>{{ section.settings.description }}</p>
    
    {% form 'customer', class: 'newsletter-form' %}
      <input type="hidden" name="contact[tags]" value="newsletter">
      <div class="flex gap-3">
        <input 
          type="email" 
          name="contact[email]" 
          placeholder="{{ section.settings.placeholder }}"
          required
        />
        <button type="submit" class="btn-accent">
          {{ section.settings.button_text }}
        </button>
      </div>
    {% endform %}
  </div>
</section>

{% schema %}
{
  "name": "Newsletter",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Title",
      "default": "BE FIRST TO KNOW EVERY DROP."
    },
    {
      "type": "textarea",
      "id": "description",
      "label": "Description"
    },
    {
      "type": "text",
      "id": "placeholder",
      "label": "Input Placeholder",
      "default": "Enter your email..."
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Button Text",
      "default": "Get Early Access"
    }
  ],
  "presets": [
    {
      "name": "Newsletter"
    }
  ]
}
{% endschema %}
```

---

## 🎨 Styling Conversion

### Tailwind in Shopify

**Option 1: Keep Tailwind (Recommended)**
```bash
# Install Tailwind in Shopify theme
npm install -D tailwindcss
npx tailwindcss init
```

**Option 2: Convert to Plain CSS**
```css
/* Convert Tailwind classes */
.btn-accent {
  background-color: hsl(0 85% 50%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.125rem;
}
```

---

## 🔧 Common Patterns

### Pattern 1: Loops

**React:**
```tsx
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}
```

**Shopify:**
```liquid
{% for product in collection.products %}
  {% render 'product-card', product: product %}
{% endfor %}
```

### Pattern 2: Conditionals

**React:**
```tsx
{product.badge && <span>{product.badge}</span>}
```

**Shopify:**
```liquid
{% if product.tags contains 'sale' %}
  <span class="badge-accent">SALE</span>
{% endif %}
```

### Pattern 3: Props

**React:**
```tsx
<ProductCard product={product} showBadge={true} />
```

**Shopify:**
```liquid
{% render 'product-card', 
  product: product, 
  show_badge: true 
%}
```

---

## 📦 Data Mapping

| React Data | Shopify Object |
|------------|----------------|
| `collectionProducts` | `collection.products` |
| `product.img` | `product.featured_image` |
| `product.name` | `product.title` |
| `product.price` | `product.price \| money` |
| `product.brand` | `product.vendor` |
| `product.colors` | `product.options` |

---

## 🚀 Deployment Steps

### 1. Create Theme Files
```bash
shopify-cli theme init
```

### 2. Copy Assets
- Copy CSS to `assets/`
- Copy images to `assets/`
- Copy fonts to `assets/`

### 3. Create Sections
- One file per section in `sections/`
- Add schema for customization

### 4. Create Snippets
- Reusable components in `snippets/`

### 5. Create Templates
- JSON templates in `templates/`

### 6. Test & Deploy
```bash
shopify theme serve  # Test locally
shopify theme push   # Deploy to store
```

---

## 🎯 Best Practices

1. **Use Section Groups** for page-specific sections
2. **Add Presets** for easy drag-and-drop
3. **Include Schema Settings** for customization
4. **Use Lazy Loading** for images
5. **Add Alt Text** for accessibility
6. **Test on Mobile** before deploying
7. **Use Shopify CDN** for images
8. **Optimize CSS** (remove unused classes)

---

## 🔍 Testing Checklist

- [ ] All sections render correctly
- [ ] Theme editor settings work
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Forms submit correctly
- [ ] Links work
- [ ] Cart functionality
- [ ] Checkout process
- [ ] SEO meta tags
- [ ] Performance (Lighthouse score)

---

## 📚 Resources

- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Syntax](https://shopify.github.io/liquid/)
- [Dawn Theme Reference](https://github.com/Shopify/dawn)
- [Tailwind Shopify Integration](https://tailwindcss.com)

---

**Ready to build your Shopify theme! 🚀**
