import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryShoes from "@/assets/category-shoes.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";
import trending1 from "@/assets/trending-1.jpg";

const categories = [
  { name: "WOMEN", img: categoryWomen, span: "col-span-1 row-span-2" },
  { name: "MEN", img: categoryMen, span: "col-span-1" },
  { name: "SHOES", img: categoryShoes, span: "col-span-1" },
  { name: "ACCESSORIES", img: categoryAccessories, span: "col-span-1" },
  { name: "NEW IN", img: trending1, span: "col-span-1" },
];

const CategoryGrid = () => {
  return (
    <section className="bg-background py-14">
      <div className="container">
        <div className="text-center mb-10">
          <span className="badge-accent mb-3 inline-block">Shop by Category</span>
          <h2 className="font-display text-4xl md:text-5xl">
            CLOTHES THAT FIT<br />
            <span className="text-accent">YOUR LIFE</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`relative rounded-lg overflow-hidden cursor-pointer group ${cat.span}`}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-2xl text-primary-foreground">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
