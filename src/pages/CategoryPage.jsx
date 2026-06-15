import { useParams, Link } from 'react-router-dom';
import { useProductsContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../data/siteData';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { useEffect } from 'react';

export default function CategoryPage() {
  const { slug } = useParams();
  const { products, loading } = useProductsContext();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const categoryMeta = CATEGORIES.find(c => c.slug === slug);
  const categoryProducts = products[slug] || [];

  const getStartingPrice = () => {
    const validItems = categoryProducts.filter(item => item.available !== false && item.priceValue > 0);
    if (validItems.length > 0) {
      const minItem = validItems.reduce((min, p) => p.priceValue < min.priceValue ? p : min, validItems[0]);
      return `${minItem.price} / ${minItem.unit?.replace('per ', '') || 'piece'}`;
    }
    const fallbackPrices = {
      cakes: '₹500/KG', bento: '₹299/box', donuts: '₹50/piece',
      muffins: '₹45/piece', cupcakes: '₹40/piece', brownies: '₹60/piece', kunafa: '₹25 onwards'
    };
    return fallbackPrices[slug] || 'Price on Request';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center pt-24">
        <div className="text-center text-[#8B5E3C]">
          <RefreshCw className="animate-spin mx-auto mb-4" size={36} />
          <p className="font-lato">Loading delicious treats...</p>
        </div>
      </div>
    );
  }

  if (!categoryMeta) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <span className="text-6xl mb-4">🤷‍♂️</span>
        <h2 className="font-playfair font-bold text-2xl text-[#3E1F00] mb-2">Category Not Found</h2>
        <p className="text-[#8B5E3C] mb-6">The category you are looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#C8944A] text-sm font-bold transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#3E1F00] to-[#5C3317] rounded-3xl p-8 md:p-12 text-[#F5E6CC] relative overflow-hidden shadow-lg mb-12">
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-[#C8944A]/10 rounded-full blur-xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-4xl md:text-5xl">{categoryMeta.emoji}</span>
                <h1 className="font-playfair font-bold text-white text-3xl md:text-5xl">
                  {categoryMeta.label}
                </h1>
              </div>
              <p className="text-[#C8944A] text-sm md:text-base font-lato max-w-xl">
                {categoryMeta.desc}
              </p>
            </div>
            
            <div className="bg-[#FFFDF9]/10 px-6 py-4 rounded-2xl backdrop-blur-sm border border-[#F5E6CC]/20 text-center shrink-0">
              <p className="text-[#C8944A] text-xs uppercase font-bold tracking-wider mb-1">Starting Price</p>
              <p className="font-playfair text-white text-2xl font-bold">
                {getStartingPrice()}
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#F5E6CC] rounded-3xl">
            <span className="text-5xl block mb-3">🧁</span>
            <p className="text-[#8B5E3C] font-semibold">No products available in this category yet.</p>
            <p className="text-xs text-[#C8944A] mt-1">Check back later or contact us directly on WhatsApp!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                category={slug}
                showBadge={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
