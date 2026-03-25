/**
 * Client-side wishlist (mirrors Shopify theme key `sdWishlistHandles`).
 */
const STORAGE_KEY = 'sdWishlistHandles';

export function getWishlistHandles(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((h) => typeof h === 'string') : [];
  } catch {
    return [];
  }
}

export function setWishlistHandles(handles: string[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(handles));
}

export function toggleWishlistHandle(handle: string): boolean {
  const handles = getWishlistHandles();
  const i = handles.indexOf(handle);
  if (i >= 0) {
    handles.splice(i, 1);
    setWishlistHandles(handles);
    return false;
  }
  handles.push(handle);
  setWishlistHandles(handles);
  return true;
}

export function isInWishlist(handle: string): boolean {
  return getWishlistHandles().includes(handle);
}

export function productHandle(product: { handle?: string; name: string }): string {
  if (product.handle) return product.handle;
  return product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
