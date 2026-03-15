/**
 * Product Details Page
 * 
 * Single product page with image gallery, product info, and related products.
 * Designed to convert to Shopify product.liquid template.
 * 
 * Features:
 * - Breadcrumb navigation
 * - Image gallery with thumbnails
 * - Product info panel (price, colors, sizes, quantity)
 * - Add to cart functionality
 * - Collapsible product details sections
 * - Related products carousel
 */

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Minus, Plus, Truck, RotateCcw, AlertCircle, ChevronDown, Zap, ShoppingBag, ShieldAlert, ShieldPlus } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import ProductCard from '@/components/ProductCard';
import SizePredictor from '@/components/SizePredictor';
import { collectionProducts } from '@/data/products';

// Mock product images - in real app these would come from product data
import productBiker from '@/assets/product-biker.jpg';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isSizePredictorOpen, setIsSizePredictorOpen] = useState(false);

  // Mock product data - in real app this would be fetched based on ID
  const product = {
    id: id || '1',
    brand: 'ARITZIA',
    name: 'Leather Biker Jacket',
    price: 'EGP 1148.00',
    originalPrice: 'EGP 1198',
    rating: 4.5,
    reviews: 1381,
    
    images: [productBiker, productBiker, productBiker, productBiker],
    colors: [
      { name: 'Black', value: 'hsl(0 0% 10%)' },
      { name: 'Dark Gray', value: 'hsl(0 0% 30%)' },
      { name: 'Brown', value: 'hsl(30 30% 40%)' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stockLeft: 6,
    description: 'A sleek, editable-forward biker jacket crafted from premium faux leather. Features asymmetric silver-tone hardware, zip details, and an interior lining— this is the bold-chic staple that\'s practically timeless.',
  };

  // Related products
  const relatedProducts = collectionProducts.slice(0, 4);

  const sizes = ['XS', 'S', 'M', 'L'];

  const accordionSections = [
    { id: 'size', title: 'Size Guide', content: 'Size guide content will be displayed here. Measurements for each size available.' },
    { id: 'shipping', title: 'Shipping Information', content: 'Free shipping on orders over EGP 975. Same-day delivery available in select areas.' },
    { id: 'fabric', title: 'Fabric & Care', content: 'Material: 100% premium faux leather. Care: Wipe clean with a damp cloth. Avoid direct sunlight.' },
    { id: 'faq', title: 'FAQ', content: 'Common questions about this product will be answered here.' },
    { id: 'returns', title: 'Return Policy', content: 'Free 30-day returns. Items must be unworn with tags attached.' },
  ];

  return (
    <MainLayout>
      {/* Breadcrumb Navigation */}
      <div className="bg-[#F5F0EB] border-b border-[#0D0D0D]/10">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ChevronLeft size={14} />
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to={`/brand/${product.brand}`} className="hover:text-foreground">{product.brand}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="bg-[#F5F0EB] py-8 pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-6 mb-8 lg:mb-0">
            {/* Thumbnails - row on mobile, column on desktop */}
            <div className="flex md:flex-col gap-2 md:gap-3 md:w-auto w-full overflow-x-auto pb-1">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    rounded-lg overflow-hidden border-2 
                    ${selectedImage === index ? 'border-accent' : 'border-border'}
                    w-20 h-24 md:w-16 md:h-20 flex-shrink-0
                  `}
                >
                  <img src={img} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative min-w-0">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-muted relative group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges - Top Left */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {/* Best Seller Badge - White text on dark/transparent */}
                  <span className="
                    inline-flex items-center gap-1.5 
                    px-3 py-1.5 
                    bg-black/90 backdrop-blur
                    bg-[#ffffff]
                    rounded-full
                    text-[10px] font-bold 
                    text-[#ffffff] uppercase tracking-wider
                  ">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                    BEST SELLER
                  </span>

                  {/* Fast Drop Badge - Yellow background */}
                  <span className="
                    inline-flex items-center gap-1.5 
                    px-3 py-1.5 
                    bg-[#F5C800]
                    rounded-full
                    text-[10px] font-bold 
                    text-[#0D0D0D] uppercase tracking-wider
                  ">
                    <span>⚡</span>
                    FAST DROP
                  </span>
                </div>

                {/* Magnifier Icon - Top Right */}
                <button
                  className="
                    absolute top-4 right-4 
                    w-10 h-10 
                    bg-white rounded-full 
                    flex items-center justify-center 
                    hover:bg-gray-100 transition-colors
                    shadow-md
                  "
                  aria-label="Zoom image"
                >
                  <svg 
                    className="w-5 h-5 text-[#0D0D0D]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                  className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    w-10 h-10 
                    bg-white rounded-full 
                    flex items-center justify-center 
                    hover:bg-gray-100 transition-colors
                    shadow-md
                  "
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-[#0D0D0D]" />
                </button>

                <button
                  onClick={() => setSelectedImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    w-10 h-10 
                    bg-white rounded-full 
                    flex items-center justify-center 
                    hover:bg-gray-100 transition-colors
                    shadow-md
                  "
                  aria-label="Next image"
                >
                  <ChevronLeft size={20} className="text-[#0D0D0D] rotate-180" />
                </button>

                {/* Dot Indicators - Bottom Center */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`
                        w-2 h-2 rounded-full transition-all
                        ${selectedImage === index ? 'bg-accent w-6' : 'bg-white/50'}
                      `}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <div className="mb-4">
              <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mb-2">
                {product.brand}
              </p>
              <h1 className="font-display text-4xl md:text-5xl mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                  <span className="ml-1 font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  {product.reviews.toLocaleString()} reviews
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-3xl">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                  <span className="badge-accent text-[10px]">-25% OFF</span>
                </>
              )}
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="text-sm font-semibold mb-3 block">
                Color: <span className="text-muted-foreground font-normal">{product.colors[selectedColor].name}</span>
              </label>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`
                      w-10 h-10 rounded-full border-2 
                      ${selectedColor === index ? 'border-primary' : 'border-border'}
                    `}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold">Size:</label>
                <div className="flex items-center gap-2">
                  <button className="text-xs text-accent hover:underline">Size Guide</button>
                  <span className="text-xs text-muted-foreground">|</span>
                  <button
                    onClick={() => setIsSizePredictorOpen(true)}
                    className="text-xs text-accent hover:underline flex items-center gap-1"
                  >
                    <Zap size={12} />
                    Find Your Best Size
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-5 py-2 border rounded-full text-xs font-semibold tracking-[0.12em]
                      ${selectedSize === size
                        ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                        : 'border-border text-[#0D0D0D] hover:border-[#0D0D0D]'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector + Actions */}
            <div className="flex items-center gap-3 mb-6">
              {/* Quantity Row */}
              <div className="flex items-center justify-between bg-white border border-border rounded-full px-6 py-3 shadow-sm flex-none w-[40%] max-w-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full"
                  aria-label="Decrease quantity"
                >
                  <Minus size={10} />
                </button>
                <span className="min-w-[2rem] text-center font-semibold text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full"
                  aria-label="Increase quantity"
                >
                  <Plus size={10} />
                </button>
              </div>

              {/* Add to Cart Button + Wishlist */}
              <div className="flex flex-1 items-center gap-3">
                <button className="flex-1 h-12 bg-accent text-white rounded-full font-condensed text-sm tracking-[0.18em] uppercase flex items-center justify-center gap-2 shadow-md hover:bg-accent/90 transition-colors">
                  <ShoppingBag size={18} strokeWidth={2} />
                  ADD TO CART
                </button>
                <button
                  className="w-11 h-11 border border-border rounded-full flex items-center justify-center hover:border-[#0D0D0D] hover:text-[#0D0D0D]"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Features - Square Card Layout */}
            <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border">
              <div className="flex flex-col items-center justify-center gap-3 px-3 py-4 bg-white rounded-2xl border border-border shadow-sm text-center">
                <div className="">
                  <Truck size={18} className="text-accent" />
                </div>
                <span className="text-xs leading-tight">Free shipping over<br />EGP100</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 px-3 py-4 bg-white rounded-2xl border border-border shadow-sm text-center">
                <div className="">
                  <RotateCcw size={18} className="text-accent" />
                </div>
                <span className="text-xs leading-tight">Free returns,<br />30 days</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 px-3 py-4 bg-white rounded-2xl border border-border shadow-sm text-center">
                <div className="">
                  <ShieldPlus size={18} className="text-accent" />
                </div>
                <span className="text-xs leading-tight">Secure<br />checkout</span>
              </div>
            </div>

            {/* Accordion Sections */}
            <div>
              {accordionSections.map((section) => (
                <div key={section.id} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === section.id ? null : section.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-semibold hover:text-accent"
                  >
                    {section.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openAccordion === section.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === section.id && (
                    <div className="pb-4 text-sm text-muted-foreground">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Size Predictor Modal */}
      <SizePredictor
        isOpen={isSizePredictorOpen}
        onClose={() => setIsSizePredictorOpen(false)}
        currentProduct={{
          category: 'tops', // Can be dynamic based on product type
          availableSizes: sizes,
        }}
      />
      </div>

      {/* Related Products Section - Cream Background */}
      <div className="bg-[#F5F0EB] py-16">
        <div className="container">
          {/* Black Rounded Container */}
          <div className="bg-[#0D0D0D] rounded-3xl px-6 md:px-10 lg:px-12 py-10 md:py-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                {/* Badge - Yellow */}
                <span className="
                  inline-block mb-3 px-3 py-1.5 
                  bg-[#F5C800] rounded 
                  font-condensed text-[10px] font-extrabold 
                  uppercase tracking-[1.54px] text-[#0D0D0D]
                ">
                  RELATED PRODUCTS
                </span>
                
                {/* Heading */}
                <h2 className="font-display text-4xl md:text-5xl font-normal text-white">
                  COMPLETE <span className="text-accent">THE</span> LOOK
                </h2>
              </div>
              
              {/* View All Link */}
              <Link
                to="/collection"
                className="text-sm text-white/60 hover:text-white flex items-center gap-2 transition-colors"
              >
                View all
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Related Products Grid - Black Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-[#0D0D0D] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-white/10">
                  {/* Product Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Wishlist Button - Top Right */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0D0D0D] hover:bg-accent hover:text-white transition-colors shadow-md"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={16} />
                    </button>

                    {/* Badge - Top Left */}
                    {product.badge && (
                      <span
                        className={`
                          absolute top-3 left-3 
                          px-2.5 py-1 rounded-full
                          font-condensed text-[9px] font-bold 
                          uppercase tracking-wider
                          flex items-center gap-1
                          ${
                            product.badgeType === 'sale'
                              ? 'bg-[#0D0D0D] text-white'
                              : product.badgeType === 'new'
                              ? 'bg-[#0D0D0D] text-white'
                              : 'bg-[#0D0D0D] text-white'
                          }
                        `}
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
                        {product.badgeType === 'sale' ? 'SALE' : product.badgeType === 'new' ? 'NEW' : 'HOT'}
                      </span>
                    )}
                  </div>

                  {/* Product Info - Inside Black Card */}
                  <div className="p-4">
                    {/* Brand */}
                    <p className="
                      font-condensed text-[10px] font-bold 
                      tracking-[1.4px] uppercase 
                      text-white/50 mb-1
                    ">
                      {product.brand}
                    </p>

                    {/* Product Name */}
                    <h3 className="font-sans text-sm font-semibold text-white mb-2">
                      {product.name}
                    </h3>

                    {/* Price & Original Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-sans text-base font-bold text-white">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="font-sans text-sm text-white/40 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button - Red */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="w-full bg-accent text-white rounded-full py-2.5 px-4 font-condensed text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                    >
                      <ShoppingBag size={14} strokeWidth={2} />
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
