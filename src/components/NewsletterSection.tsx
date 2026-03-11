const NewsletterSection = () => {
  return (
    <section className="section-dark py-16">
      <div className="container text-center max-w-2xl mx-auto">
        <span className="badge-accent mb-4 inline-block">Drop · Weekly</span>
        <h2 className="font-display text-4xl md:text-6xl mb-3">
          BE FIRST TO KNOW<br />EVERY DROP.
        </h2>
        <p className="text-surface-dark-muted text-sm mb-8 max-w-md mx-auto">
          Join 50K+ shoppers who get early access to new drops, exclusive deals, and style tips - just by signing up.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-1 px-4 py-3 rounded-sm bg-surface-dark border border-surface-dark-muted/30 text-surface-dark-foreground placeholder:text-surface-dark-muted text-sm focus:outline-none focus:border-accent"
          />
          <button className="btn-accent text-sm whitespace-nowrap">Get Early Access →</button>
        </div>
        <p className="text-[11px] text-surface-dark-muted mt-3">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
