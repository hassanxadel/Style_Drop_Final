/**
 * Testimonials Section Component
 * 
 * Displays customer testimonials in a responsive grid.
 * Designed to convert to Shopify testimonials.liquid section.
 * 
 * Features:
 * - Responsive 3-column grid
 * - Section heading with badge
 * - Reusable testimonial cards
 * 
 * Props:
 * - testimonials: Array of Testimonial objects (optional, uses default data)
 */

import { Testimonial } from '@/types';
import { customerTestimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({ 
  testimonials = customerTestimonials 
}: TestimonialsSectionProps) => {
  return (
    <section className="bg-[#0D0D0D] py-14">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            {/* Badge */}
            <span className="
              inline-block mb-3 px-3 py-1.5 
              bg-[#F5C800] rounded 
              font-condensed text-[13px] font-extrabold 
              uppercase tracking-[1.54px] text-[#0D0D0D]
            ">
              TESTIMONIALS
            </span>

            {/* Heading */}
            <h2 className="font-display text-5xl md:text-6xl font-normal text-white">
              FROM HAPPY
              <br />
              <span className="text-accent">SHOPPERS</span>
            </h2>
          </div>

          {/* Navigation Arrows - Optional */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-white/50 text-sm">01 / 05</span>
            <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/40 hover:text-white transition-colors">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/90 transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Testimonials Grid - Mobile: horizontal scroll, Desktop: 3 columns */}
        <div className="md:grid md:grid-cols-3 md:gap-6 flex md:flex-none overflow-x-auto md:overflow-visible gap-6 snap-x snap-mandatory scrollbar-hide pb-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="w-full flex-shrink-0 snap-start md:w-auto">
              <TestimonialCard
                testimonial={testimonial}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
