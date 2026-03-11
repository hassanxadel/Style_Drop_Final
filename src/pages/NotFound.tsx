/**
 * 404 Not Found Page
 * 
 * Error page displayed when route is not found.
 * This will map to Shopify's 404.liquid template.
 * 
 * Features:
 * - Centered error message
 * - Navigation back to home
 * - Consistent layout
 */

import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="
        container 
        min-h-[60vh] 
        flex flex-col items-center justify-center 
        text-center py-20
      ">
        {/* 404 Heading */}
        <h1 className="
          font-display text-9xl md:text-[12rem] 
          text-muted
        ">
          404
        </h1>

        {/* Error Message */}
        <h2 className="
          font-display text-3xl md:text-5xl 
          mb-4
        ">
          PAGE NOT FOUND
        </h2>

        <p className="
          text-muted-foreground mb-8 
          max-w-md
        ">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <button className="btn-accent">
            Back to Home
          </button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
