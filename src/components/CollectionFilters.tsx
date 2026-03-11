import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const categories = [
  { name: "All", count: 18, active: true },
  { name: "Women", count: 11 },
  { name: "Men", count: 6 },
  { name: "Shoes", count: 1 },
  { name: "Accessories", count: 0 },
  { name: "New In", count: 5 },
  { name: "Sale", count: 5 },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colorSwatches = [
  "hsl(0 0% 98%)", "hsl(0 0% 10%)", "hsl(200 10% 50%)", "hsl(45 60% 50%)",
  "hsl(0 70% 50%)", "hsl(120 40% 45%)", "hsl(210 70% 50%)", "hsl(350 60% 50%)",
  "hsl(300 40% 50%)", "hsl(30 10% 60%)",
];

const brands = ["ZARA", "COS", "H&M", "Nike", "Essentials", "Canada Goose", "Jacquemus", "Stradivarius"];

const FilterSection = ({ title, defaultOpen = true, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border pb-4 mb-4">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full font-display text-lg">
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
};

const CollectionFilters = () => {
  return (
    <aside className="bg-[#050505] text-white rounded-3xl p-6 border border-[#1C1C1C] h-fit shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
      <h3 className="font-display text-xl mb-4 tracking-[0.16em] uppercase">FILTERS</h3>

      <FilterSection title="PRODUCT CATEGORIES">
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex items-center justify-between w-full text-sm py-2 px-3 rounded-xl ${
                cat.active
                  ? "bg-[#701F1B] text-white font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{cat.name}</span>
              <span className={cat.active ? "text-white" : "text-white/40"}>{cat.count}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="PRICE">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-[10px] text-white/50">Min price</label>
            <div className="flex items-center border border-white/10 bg-[#111111] rounded-xl px-2 py-1.5 mt-1">
              <span className="text-xs text-white/50 mr-1">EGP</span>
              <input type="number" defaultValue={0} className="w-full text-sm bg-transparent outline-none text-white" />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-[10px] text-white/50">Max price</label>
            <div className="flex items-center border border-white/10 bg-[#111111] rounded-xl px-2 py-1.5 mt-1">
              <span className="text-xs text-white/50 mr-1">EGP</span>
              <input type="number" defaultValue={500} className="w-full text-sm bg-transparent outline-none text-white" />
            </div>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="SIZE">
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              className="border border-white/15 rounded-xl px-3 py-1.5 text-xs text-white/80 hover:border-white hover:text-white transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="COLORS">
        <div className="flex flex-wrap gap-2">
          {colorSwatches.map((c, i) => (
            <button
              key={i}
              className="w-7 h-7 rounded-full border-2 border-transparent hover:border-white transition-colors"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="AVAILABILITY">
        <div className="space-y-2">
          <label className="flex items-center justify-between text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-accent" />
              <span>In stock</span>
            </div>
            <span className="text-[#F04B32] text-xs">16</span>
          </label>
          <label className="flex items-center justify-between text-sm cursor-pointer">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-accent" />
              <span>Out of stock</span>
            </div>
            <span className="text-white/40 text-xs">2</span>
          </label>
        </div>
      </FilterSection>

      <FilterSection title="BRANDS" defaultOpen={false}>
        <div className="space-y-2">
          {brands.map((b) => (
            <label key={b} className="flex items-center gap-2 text-sm cursor-pointer text-white/80 hover:text-white">
              <input type="checkbox" className="accent-accent" />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </aside>
  );
};

export default CollectionFilters;
