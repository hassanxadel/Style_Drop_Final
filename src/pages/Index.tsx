/**
 * Home Page (Index)
 * 
 * Main landing page showcasing all homepage sections.
 * This will map to Shopify's index.liquid template.
 * 
 * Sections included:
 * - Hero banner with trust features
 * - Brands showcase
 * - Trending products
 * - Category grid (with integrated sale banner)
 * - Lifestyle banners
 * - Customer testimonials
 * - Newsletter signup
 */

import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/sections/HeroSection';
import BrandsSection from '@/sections/BrandsSection';
import TrendingSection from '@/sections/TrendingSection';
import CategoryGridSection from '@/sections/CategoryGridSection';
import LifestyleBanners from '@/sections/LifestyleBanners';
import TestimonialsSection from '@/sections/TestimonialsSection';
import NewsletterSection from '@/sections/NewsletterSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BrandsSection />
      <TrendingSection />
      <CategoryGridSection />
      <LifestyleBanners />
      <TestimonialsSection />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
