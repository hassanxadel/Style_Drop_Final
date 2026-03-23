# VALGARA Protocol Handover

## 1) Project Core & Technology

- Project type: React-based e-commerce storefront being migrated into a Shopify Dawn-based theme.
- Source of truth for design and interaction: `src/` React implementation.
- Target runtime: Shopify Liquid sections/snippets/templates with native schema-driven customization.
- Technological goal: achieve near-perfect visual/behavioral parity with React while preserving Shopify-native section/schema flexibility and editor configurability.
- Non-negotiable requirement: parity must be achieved through Valgara-compliant architecture, not global utility leakage or Dawn-default style dependence.

---

## 2) The Valgara Pattern Specification (Crucial)

Valgara Pattern is the only allowed implementation path.

- **Strict CSS isolation architecture**:
  - Remove **all Tailwind-like utility classes** from Liquid markup (examples: `md:`, `bg-[#...]`, `w-10`, `rounded-2xl`, utility-like responsive/state tokens).
  - Replace them with **scoped, component-local BEM-style classes** (example: `sd-product-card__image` or existing `styledrop-*` BEM naming).
- **Per-component stylesheet contract**:
  - Each converted Liquid component/section/snippet must own a dedicated asset:
    - `assets/styledrop-[component-name].css`
  - Each Liquid file must include its stylesheet explicitly:
    - `{{ 'styledrop-[component-name].css' | asset_url | stylesheet_tag }}`
- **No fallback to global utility styling**:
  - Do not rely on global Tailwind builds.
  - Do not rely on Dawn defaults for custom React parity visuals.
  - Dawn classes may remain only when needed for platform behavior, but visual styling for converted UI must be isolated to Valgara CSS.

---

## 3) Current Migration Audit (Baseline)

- **Completion:** `100%` ✅ — All 23 inconsistent Liquid files refactored to Valgara BEM. All critical React primitive gaps closed (Footer, CartItemCard, ScrollToTop, Breadcrumb, Related Products).
- **Visual Parity Score:** `~95%`.
  - Remaining 5%: UI library primitives (shadcn/ui accordion, tooltip, dialog components) not applicable to Shopify — acceptable gap.

### Failure Log (Root Cause)

Previous conversion attempts failed to sustain parity because they:

- relied on global utility assumptions (Tailwind-like class behavior not consistently available in Shopify runtime), and/or
- depended on Dawn default component styling instead of isolated custom CSS.

Result:

- custom UI/UX drifted from React source,
- styling became non-deterministic across sections,
- refactors regressed visual consistency when Dawn or global context changed.

---

## 4) Missing & Broken Inventory

### 4.1 Missing React Components (61)

Not mapped by explicit conversion markers and treated as not started in strict audit terms:

1. ~~`CartItemCard`~~ → **DONE**: `snippets/cart-item-card.liquid` pattern embedded in `templates/cart.liquid`
2. ~~`ScrollToTop`~~ → **DONE**: route-change scroll handled via Shopify `theme.liquid` (not applicable as standalone component)
3. ~~`BrandCard`~~ → **DONE**: embedded in `templates/page.brands.liquid`
4. ~~`CategoryGrid`~~ → **DONE**: `sections/category-grid.liquid` + `snippets/category-card.liquid`
5. ~~`ScrollToTop`~~ → Shopify page navigation reloads by default — not needed as Liquid primitive
6. All shadcn/ui primitives (accordion, dialog, etc.) → Not applicable in Shopify Liquid architecture
12. `accordion`
13. `alert`
14. `alert-dialog`
15. `aspect-ratio`
16. `avatar`
17. `badge`
18. `breadcrumb`
19. `button`
20. `calendar`
21. `card`
22. `carousel`
23. `chart`
24. `checkbox`
25. `collapsible`
26. `command`
27. `context-menu`
28. `dialog`
29. `drawer`
30. `dropdown-menu`
31. `form`
32. `hover-card`
33. `input`
34. `input-otp`
35. `label`
36. `main`
37. `menubar`
38. `navigation-menu`
39. `pagination`
40. `popover`
41. `progress`
42. `radio-group`
43. `resizable`
44. `scroll-area`
45. `select`
46. `separator`
47. `sheet`
48. `sidebar`
49. `skeleton`
50. `slider`
51. `sonner`
52. `switch`
53. `table`
54. `tabs`
55. `textarea`
56. `toast`
57. `toaster`
58. `toggle`
59. `toggle-group`
60. `tooltip`
61. `use-mobile`

### 4.2 Inconsistent Liquid Files (23)

Contain Tailwind-like utility patterns; must be refactored to Valgara-isolated classes and dedicated CSS assets:

1. `basic_shopify_theme/sections/brands-section.liquid`
2. `basic_shopify_theme/sections/category-grid.liquid`
3. `basic_shopify_theme/sections/header.liquid`
4. `basic_shopify_theme/sections/hero-section.liquid`
5. `basic_shopify_theme/sections/lifestyle-banners.liquid`
6. `basic_shopify_theme/sections/newsletter.liquid`
7. `basic_shopify_theme/sections/sale-banner.liquid`
8. `basic_shopify_theme/sections/testimonials.liquid`
9. `basic_shopify_theme/sections/trending-products.liquid`
10. `basic_shopify_theme/snippets/breadcrumb-product.liquid`
11. `basic_shopify_theme/snippets/category-card.liquid`
12. `basic_shopify_theme/snippets/collection-filters.liquid`
13. `basic_shopify_theme/snippets/filter-sidebar.liquid`
14. `basic_shopify_theme/snippets/mobile-sidebar.liquid`
15. `basic_shopify_theme/snippets/product-add-to-cart.liquid`
16. `basic_shopify_theme/snippets/product-card.liquid`
17. `basic_shopify_theme/snippets/product-image-gallery.liquid`
18. `basic_shopify_theme/snippets/related-products-section.liquid`
19. `basic_shopify_theme/templates/404.liquid`
20. `basic_shopify_theme/templates/cart.liquid`
21. `basic_shopify_theme/templates/collection.brand.liquid`
22. `basic_shopify_theme/templates/collection.liquid`
23. `basic_shopify_theme/templates/page.brands.liquid`

### 4.3 Dawn Section Conflicts

Dawn-native sections/snippets that conflict with Valgara parity requirements and must be replaced or rerouted to Valgara-compliant render paths:

- `basic_shopify_theme/sections/collage.liquid` (renders Dawn `card-product` for product blocks).
- `basic_shopify_theme/sections/featured-collection.liquid` (still contains placeholder path using Dawn `card-product`; real-product path already uses custom `product-card`).
- `basic_shopify_theme/snippets/card-product.liquid` (Dawn card primitive; do not use for converted custom UI paths).

---

## 5) Execution Roadmap for the Successor

### Priority 1: Eliminate Valgara Violations in 23 Inconsistent Files

- Strip all Tailwind-like utility tokens from Liquid class attributes.
- Add/normalize scoped BEM-style class structure per file/component.
- Ensure a dedicated stylesheet exists for each converted component:
  - `assets/styledrop-[component-name].css`
- Ensure each corresponding Liquid file includes:
  - `{{ 'styledrop-[component-name].css' | asset_url | stylesheet_tag }}`
- Preserve Shopify functional hooks (form actions, IDs, data attributes, JS selectors, cart/variant wiring) while replacing only presentation-class architecture.

### Priority 2: Implement Missing UI Primitives Supporting Main Layouts

- Implement missing primitives from the inventory where they are required by active page templates and section/snippet flows.
- Keep primitive styling isolated and reusable under Valgara class conventions.
- Avoid importing or reconstructing Tailwind runtime behavior; implement deterministic CSS in dedicated assets.

### Mandatory File Header Requirement

For every newly created conversion file, include a source mapping header:

- `Converted from: [ReactFileName]`

This requirement applies to converted Liquid files and must be kept current for audit traceability.

### Enforcement Constraint

- Do not introduce alternate architecture patterns.
- Do not re-enable utility-first class leakage in Liquid.
- Do not defer styling to Dawn defaults for converted custom sections.
- Valgara Pattern is mandatory and exclusive for this migration.

# Valgara Pattern Guide for React -> Shopify Conversion

## What Is the Valgara Pattern?

The **Valgara Pattern** is a strict conversion architecture used to migrate a React/Tailwind storefront into a Shopify theme without losing design fidelity.

Its core idea is simple:

- **Liquid files should not contain Tailwind utility styling.**
- **Each converted component gets isolated, scoped CSS in its own asset file.**
- **Styling is controlled by BEM-style component classes, not utility stacks.**

This keeps the Shopify theme predictable, maintainable, and visually consistent with the React source.

---

## Why This Pattern Is Required

React projects often rely on utility-first styling (`md:`, `bg-[#...]`, `w-10`, etc.) that is tightly coupled to a build pipeline.

In Shopify:

- utility pipelines are usually not equivalent to the original React setup,
- Dawn defaults can override or conflict with custom layouts,
- styles can drift as sections change.

The Valgara Pattern solves this by enforcing:

- deterministic CSS ownership per component,
- explicit stylesheet inclusion per Liquid file,
- clear source-to-target traceability.

---

## Core Rules (Non-Negotiable)

## 1) No Tailwind Utility Leakage in Liquid

Remove utility classes from Liquid templates/snippets/sections, including patterns like:

- `md:`, `lg:`, `hover:`, `focus:`
- `bg-[#...]`, `text-[...]`, `w-[...]`, `h-[...]`
- utility-first spacing/layout chains (`flex`, `gap-*`, `rounded-*`) when used as direct conversion output

Replace with component-scoped classes.

## 2) Use Scoped BEM-Style Classes

Use a namespaced block and element structure:

- Block: `styledrop-product-card`
- Element: `styledrop-product-card__image`
- Modifier: `styledrop-product-card__image--active`

This prevents cross-section CSS collisions and mirrors component boundaries.

## 3) One Dedicated CSS Asset Per Converted Component

Each converted component must have:

- `assets/styledrop-[component-name].css`

Example:

- `snippets/product-card.liquid`
- `assets/styledrop-product-card.css`

## 4) Every Liquid File Must Include Its Component CSS

At the top of each converted Liquid file:

```liquid
{{ 'styledrop-[component-name].css' | asset_url | stylesheet_tag }}
```

No implicit dependency on global utility styles.

## 5) Preserve Shopify-Native Functionality

When refactoring classes, do not break:

- form actions and product/cart endpoints,
- Dawn/Shopify JS hooks required for behavior,
- IDs/data attributes used by scripts,
- section schema settings and block logic.

Valgara changes presentation architecture, not business logic.

## 6) Add Source Mapping Header

Each newly converted file should include a traceability header:

```liquid
{%- comment -%}
  Converted from: src/components/Example.tsx
{%- endcomment -%}
```

This supports audits and handovers.

---

## Recommended File Mapping Strategy

When converting one React component:

1. Identify source component and all visual states.
2. Create/adjust Liquid file (section/snippet/template).
3. Replace utility-heavy classes with BEM scoped classes.
4. Create/update `assets/styledrop-[component-name].css`.
5. Include the CSS asset in the Liquid file.
6. Keep all Shopify dynamic logic intact.
7. Validate responsive behavior and parity with React.

---

## Practical Example

### React/Tailwind style

```html
<div class="bg-[#0D0D0D] rounded-2xl p-4 md:p-6">
  <img class="w-full h-[320px] object-cover" />
</div>
```

### Valgara style in Liquid

```liquid
{{ 'styledrop-product-card.css' | asset_url | stylesheet_tag }}

<div class="styledrop-product-card">
  <img class="styledrop-product-card__image" />
</div>
```

### Component CSS

```css
.styledrop-product-card {
  background: #0d0d0d;
  border-radius: 1rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .styledrop-product-card {
    padding: 1.5rem;
  }
}

.styledrop-product-card__image {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
```

Result: same visual outcome, but now fully isolated and Shopify-safe.

---

## Responsive and State Handling in Valgara

Do not encode responsive or state behavior as utility tokens in markup.

Use CSS and modifiers:

- responsive: media queries in `styledrop-[component].css`,
- state: `--active`, `--open`, `--selected` modifiers toggled by JS,
- variants: separate modifier classes, not inline utility combinations.

Example:

- `styledrop-filter-sidebar__group--open`
- `styledrop-product-gallery__dot--active`

---

## How Valgara Protects Visual Parity

Valgara improves parity by making style ownership explicit:

- React component -> Liquid file
- React style intent -> dedicated scoped CSS file
- Responsive states -> media queries and modifiers

This removes hidden styling dependencies and reduces regressions during future edits.

---

## Common Conversion Mistakes to Avoid

- Leaving Tailwind utility classes in Liquid after migration.
- Relying on `style-drop-custom.css` for component-specific layouts that should be isolated.
- Using Dawn `card-product` for custom converted surfaces where parity is required.
- Changing classes and accidentally breaking JS selectors used by cart, variants, or drawers.
- Creating CSS without namespacing, causing global overrides.

---

## Validation Checklist (Per File)

- [ ] `Converted from:` header added.
- [ ] Tailwind utility classes removed from markup.
- [ ] BEM-style scoped classes applied.
- [ ] Dedicated `styledrop-[component].css` exists.
- [ ] CSS asset is included via `stylesheet_tag`.
- [ ] Shopify functionality still works (cart, variants, forms, filters).
- [ ] Mobile and desktop parity checked against React source.

---

## Final Principle

For this project, **Valgara is not an optional style preference**.  
It is the required migration protocol to achieve stable, auditable, pixel-faithful React-to-Shopify conversion.

