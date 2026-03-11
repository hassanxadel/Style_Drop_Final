import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white text-foreground">
      {/* Top banner */}
      <div className="bg-accent text-accent-foreground text-xs py-1.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-16">
          <span>🚚 Free delivery on orders over $75</span>
          <span>💖 New drops every Friday - don't miss out</span>
          <span>🔥 Up to 40% off Sale items · Limited time</span>
          <span>🚚 Free delivery on orders over $75</span>
          <span>💖 New drops every Friday - don't miss out</span>
          <span>🔥 Up to 40% off Sale items · Limited time</span>
        </div>
      </div>

      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="font-display text-3xl tracking-tight">
          Style<span className="text-accent">Drop</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-accent transition-colors">New In</Link></li>
          <li><Link to="/" className="hover:text-accent transition-colors">Women</Link></li>
          <li><Link to="/" className="hover:text-accent transition-colors">Men</Link></li>
          <li><Link to="/" className="hover:text-accent transition-colors">Shoes</Link></li>
          <li><Link to="/" className="hover:text-accent transition-colors">Accessories</Link></li>
          <li><Link to="/" className="text-accent font-bold">Sale</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hover:text-accent transition-colors"><Search size={20} /></button>
          <button className="hover:text-accent transition-colors"><Heart size={20} /></button>
          <button className="hover:text-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
          </button>
          <button className="hover:text-accent transition-colors"><User size={20} /></button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
