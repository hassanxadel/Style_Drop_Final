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
    <div className="
      bg-white rounded-2xl 
      p-6 
      hover:shadow-lg transition-shadow
    ">
      {/* Star Rating */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={
              index < rating
                ? 'text-[#F5C800]'
                : 'text-gray-300'
            }
          >
            ★
          </span>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="
        text-sm text-[#0D0D0D] 
        leading-relaxed mb-6
      ">
        "{text}"
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="
            w-10 h-10 rounded-full 
            bg-accent text-white 
            flex items-center justify-center 
            font-bold text-sm
          ">
            {name.charAt(0)}
          </div>
        )}

        {/* Customer Name */}
        <p className="text-sm font-semibold text-[#0D0D0D]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
