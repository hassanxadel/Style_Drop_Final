/**
 * Main nav links — paths are unique so `NavLink` active state works.
 * Shopify equivalent: header section `nav_link` blocks (editable in theme editor).
 */
export const mainNavLinks = [
  { label: 'New In', to: '/', highlight: false },
  { label: 'Women', to: '/collection?nav=women', highlight: false },
  { label: 'Men', to: '/collection?nav=men', highlight: false },
  { label: 'Shoes', to: '/collection?nav=shoes', highlight: false },
  { label: 'Accessories', to: '/collection?nav=accessories', highlight: false },
  { label: 'Sale', to: '/collection?nav=sale', highlight: true },
] as const;
