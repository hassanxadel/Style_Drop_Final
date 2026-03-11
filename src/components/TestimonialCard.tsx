/**
 * Testimonial Card Component
 * 
 * Individual customer testimonial/review card.
 * Designed to convert to Shopify testimonial-card.liquid snippet.
 * 
 * Features:
 * - Star rating display
 * - Customer quote
 * - Customer name
 * - Card styling with border
 * 
 * Props:
 * - testimonial: Testimonial object with name, text, rating
 */

import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, text, rating, avatar } = testimonial;

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      {/* Star Rating */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={14}
            className={
              index < rating
                ? 'fill-accent text-accent'
                : 'text-muted'
            }
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        "{text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3">
        {/* Avatar (if available) */}
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}

        {/* Customer Name */}
        <p className="text-sm font-semibold">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
