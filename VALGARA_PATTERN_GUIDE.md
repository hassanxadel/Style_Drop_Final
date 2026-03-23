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

