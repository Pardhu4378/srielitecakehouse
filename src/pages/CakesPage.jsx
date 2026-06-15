import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { CAKE_OCCASIONS } from '../data/siteData';
import { ArrowLeft, RefreshCw, Filter } from 'lucide-react';

export default function CakesPage() {
  const { products, loading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedOccasion = searchParams.get('occasion') || 'all';

  // Scroll to top on load or filter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedOccasion]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center pt-24">
        <div className="text-center text-[#8B5E3C]">
          <RefreshCw className="animate-spin mx-auto mb-4" size={36} />
          <p className="font-lato">Loading our cake collection...</p>
        </div>
      </div>
    );
  }

  const allCakes = products.cakes || [];
  
  // Filter cakes based on selected occasion
  const filteredCakes = allCakes;

  const selectOccasion = (id) => {
    if (id === 'all') {
      searchParams.delete('occasion');
    } else {
      searchParams.set('occasion', id);
    }
    setSearchParams(searchParams);
  };

  const getOccasionName = () => {
    if (selectedOccasion === 'all') return 'All Celebration Cakes';
    const occ = CAKE_OCCASIONS.find(o => o.id === selectedOccasion);
    return occ ? occ.label : 'Cakes';
  };

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

        {/* Page Banner */}
        <div className="bg-gradient-to-r from-[#3E1F00] to-[#5C3317] rounded-3xl p-8 md:p-12 text-[#F5E6CC] relative overflow-hidden shadow-lg mb-10">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#C8944A]/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="text-4xl md:text-5xl">🎂</span>
              <h1 className="font-playfair font-bold text-white text-3xl md:text-5xl">
                Premium Cakes
              </h1>
            </div>
          </div>
        </div>

        {/* Occasion sub-navigation */}
        <div className="mb-10">
          <p className="text-[#3E1F00] font-playfair font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Filter size={16} className="text-[#C8944A]" /> Filter by Celebration Occasion:
          </p>
          
          {/* Scrollable list on mobile, grid on desktop */}
          <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 md:-mx-0 md:px-0 md:flex-wrap">
            {/* 'All' button */}
            <button
              onClick={() => selectOccasion('all')}
              className={`px-5 py-2.5 rounded-full font-lato font-bold text-sm uppercase tracking-wide transition-all border shrink-0 ${
                selectedOccasion === 'all'
                  ? 'bg-[#3E1F00] text-white border-[#3E1F00] shadow-sm'
                  : 'bg-white text-[#8B5E3C] border-[#F5E6CC] hover:border-[#C8944A] hover:bg-[#FDF6EC]'
              }`}
            >
              ✨ All Cakes
            </button>

            {CAKE_OCCASIONS.map(occ => (
              <button
                key={occ.id}
                onClick={() => selectOccasion(occ.id)}
                className={`px-5 py-2.5 rounded-full font-lato font-bold text-sm uppercase tracking-wide transition-all border shrink-0 flex items-center gap-2 ${
                  selectedOccasion === occ.id
                    ? 'bg-[#3E1F00] text-white border-[#3E1F00] shadow-sm'
                    : 'bg-white text-[#8B5E3C] border-[#F5E6CC] hover:border-[#C8944A] hover:bg-[#FDF6EC]'
                }`}
              >
                <span>{occ.icon}</span>
                <span>{occ.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results title */}
        <h2 className="font-playfair font-bold text-[#3E1F00] text-2xl mb-6 border-b border-[#F5E6CC] pb-3">
          {getOccasionName()} <span className="text-[#8B5E3C] text-sm font-lato font-normal">({filteredCakes.length} designs available)</span>
        </h2>

        {/* Cakes Grid */}
        {filteredCakes.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#F5E6CC] rounded-3xl">
            <span className="text-5xl block mb-3">🎂</span>
            <p className="text-[#8B5E3C] font-semibold">No cakes listed for this occasion.</p>
            <p className="text-xs text-[#C8944A] mt-1">We can still bake custom designs! Get in touch on WhatsApp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCakes.map(cake => (
              <ProductCard 
                key={cake.id} 
                product={cake} 
                category="cakes"
                occasion={selectedOccasion !== 'all' ? getOccasionName() : undefined}
                showBadge={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
