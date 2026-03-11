const brands = [
  { name: "ZARA", color: "hsl(0 85% 50%)" },
  { name: "H&M", color: "hsl(0 0% 15%)" },
  { name: "ESSENTIALS", color: "hsl(140 50% 35%)" },
  { name: "COS", color: "hsl(30 60% 50%)" },
  { name: "WEEKDAY", color: "hsl(200 60% 45%)" },
  { name: "ARMEDANGELS", color: "hsl(270 40% 45%)" },
];

const BrandsSection = () => {
  return (
    <section className="bg-background py-14">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            200+ BRANDS<br />ONE PLATFORM
          </h2>
          <a href="/collection" className="text-sm font-medium text-accent hover:underline">
            All brands →
          </a>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-accent-foreground font-bold text-xs cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: brand.color }}
            >
              {brand.name.charAt(0)}
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-3">
          {brands.map((brand) => (
            <span key={brand.name} className="shrink-0 w-20 text-center text-xs font-medium text-muted-foreground">
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
