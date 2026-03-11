import trending1 from "@/assets/trending-1.jpg";
import trending2 from "@/assets/trending-2.jpg";
import trending3 from "@/assets/trending-3.jpg";
import categoryWomen from "@/assets/category-women.jpg";

const products = [
  { img: trending1, brand: "ZARA", name: "Classic Trench Coat", price: "$124.00", tag: "Bestseller" },
  { img: categoryWomen, name: "Leather Biker Jacket", brand: "COS", price: "$189.00", tag: "New" },
  { img: trending2, brand: "H&M", name: "Chelsea Boots", price: "$89.00" },
  { img: trending3, brand: "WEEKDAY", name: "Gold Accessories Set", price: "$59.00" },
];

const TrendingSection = () => {
  return (
    <section className="section-dark py-14">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="badge-accent">Curated picks</span>
            <h2 className="font-display text-4xl md:text-5xl">
              STYLES THE INTERNET<br />
              <span className="text-accent">CAN'T STOP</span> WEARING
            </h2>
          </div>
          <a href="/" className="text-sm text-surface-dark-muted hover:text-accent transition-colors">View all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.tag && (
                  <span className="absolute top-3 left-3 badge-accent text-[10px]">{p.tag}</span>
                )}
              </div>
              <div className="mt-3">
                <p className="text-xs text-surface-dark-muted">{p.brand}</p>
                <p className="text-sm font-medium mt-0.5">{p.name}</p>
                <p className="text-sm font-bold mt-1">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
