import streetwear from "@/assets/streetwear-banner.jpg";
import comfort from "@/assets/comfort-banner.jpg";

const LifestyleBanners = () => {
  return (
    <section className="bg-background py-14">
      <div className="container grid md:grid-cols-2 gap-6">
        <div className="relative rounded-lg overflow-hidden group cursor-pointer h-[320px]">
          <img src={streetwear} alt="Streetwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute bottom-6 left-6">
            <p className="font-display text-xs tracking-widest text-primary-foreground/60 mb-1">EVERYDAY</p>
            <h3 className="font-display text-4xl text-primary-foreground">STREETWEAR</h3>
            <button className="mt-4 btn-outline-light text-xs py-2 px-4">Shop Tops →</button>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden group cursor-pointer h-[320px]">
          <img src={comfort} alt="Comfort" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-accent/40" />
          <div className="absolute bottom-6 right-6 text-right">
            <h3 className="font-display text-4xl text-accent-foreground">
              COMFORT<br />REDEFINED
            </h3>
            <button className="mt-4 btn-accent text-xs py-2 px-4">Shop Styles →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleBanners;
