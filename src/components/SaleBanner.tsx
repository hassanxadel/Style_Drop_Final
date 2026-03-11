import saleBanner from "@/assets/sale-banner.jpg";

const SaleBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img src={saleBanner} alt="Sale" className="w-full h-[300px] md:h-[400px] object-cover" />
      <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-5xl md:text-7xl text-primary-foreground mb-2">
            SALE - UP TO 50% OFF
          </h2>
          <p className="text-primary-foreground/70 text-sm mb-6">Limited time. While stocks last.</p>
          <button className="btn-accent">Shop Sale</button>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
