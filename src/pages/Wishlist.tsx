/**
 * Liked items / Wishlist page — mirrors Shopify `main-page-wishlist` design.
 */

import MainLayout from '@/layouts/MainLayout';
import { WishlistContent } from '@/components/WishlistContent';

const Wishlist = () => (
  <MainLayout>
    <WishlistContent />
  </MainLayout>
);

export default Wishlist;
