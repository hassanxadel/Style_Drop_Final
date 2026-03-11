/**
 * Newsletter Section Component
 * 
 * Email signup section with dark background.
 * Designed to convert to Shopify newsletter.liquid section.
 * 
 * Features:
 * - Email input with validation
 * - Dark section styling
 * - Centered layout
 * - Privacy notice
 * - Fully responsive
 * 
 * In Shopify, this would integrate with the email marketing app
 * or use Shopify's built-in customer API.
 */

const NewsletterSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In Shopify, this would submit to the customer API
    console.log('Newsletter signup');
  };

  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="
          relative overflow-hidden rounded-3xl 
          bg-accent p-12 md:p-16
        ">
          {/* Large "DROP" Background Text */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <span className="font-display text-[200px] md:text-[300px] font-normal text-white leading-none">
              DROP
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>
              </svg>
              <span className="
                font-condensed text-[11px] font-bold 
                uppercase tracking-[1.54px] text-white
              ">
                DROP INSIDER
              </span>
            </div>

            {/* Heading */}
            <h2 className="
              font-display text-5xl md:text-7xl font-normal 
              text-white mb-6
            " style={{ letterSpacing: '0.02em' }}>
              BE FIRST TO KNOW
              <br />
              EVERY DROP.
            </h2>

            {/* Description */}
            <p className="
              text-white/90 text-sm mb-8 
              max-w-lg
            ">
              Join 50K+ shoppers who get early access to new drops, exclusive 
              deals, and style inspo — before anyone else.
            </p>

            {/* Email Signup Form */}
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl"
            >
              {/* Email Input */}
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="
                  flex-1 px-6 py-4 rounded-full
                  bg-white/20 backdrop-blur
                  border border-white/30
                  text-white 
                  placeholder:text-white/60
                  text-sm 
                  focus:outline-none focus:border-white/60
                  focus:bg-white/30
                "
              />

              {/* Submit Button */}
              <button 
                type="submit"
                className="
                  px-8 py-4 
                  bg-[#0D0D0D] text-white 
                  rounded-full 
                  font-condensed text-xs font-bold 
                  tracking-wider uppercase
                  hover:bg-black transition-colors
                  whitespace-nowrap
                "
              >
                GET EARLY ACCESS →
              </button>
            </form>

            {/* Privacy Notice */}
            <p className="text-xs text-white/70 mt-4">
              No spam, ever. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
