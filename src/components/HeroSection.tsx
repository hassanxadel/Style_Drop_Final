import heroModel from "@/assets/hero-model.jpg";
import { Truck, RotateCcw, ShieldCheck, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <div className="section-dark">
        <div className="container grid md:grid-cols-2 gap-8 py-12 md:py-20 items-center">
          <div>
            <span className="badge-accent mb-4 inline-block">Everyday delivery</span>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] mb-6">
              WEAR WHAT<br />
              <span className="text-accent">DROPS</span><br />
              TODAY.
            </h1>
            <p className="text-surface-dark-muted max-w-md mb-8 text-sm leading-relaxed">
              Over 200 brands, handpicked and fast-shipped. Trending styles arrive daily to fit your wardrobe - curated for what's happening on street level.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-accent text-sm">Shop What's Trending</button>
              <button className="btn-outline-light text-sm">Explore New Arrivals →</button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={heroModel}
              alt="Fashion model in red sweater"
              className="rounded-lg max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-background border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
          {[
            { icon: Truck, title: "Fast Delivery", desc: "2–5 day shipping on all orders" },
            { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free returns" },
            { icon: ShieldCheck, title: "Secure Checkout", desc: "SSL encrypted payments" },
            { icon: Star, title: "Trusted Brands", desc: "200+ verified partners" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <item.icon size={24} className="text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
