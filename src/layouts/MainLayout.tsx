/**
 * Main Layout Component
 * 
 * Wraps all pages with consistent header and footer.
 * This will map to Shopify's theme.liquid template.
 */

import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0EB]">
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
