import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/siteData';
import PriceListModal from '../components/PriceListModal';
import { useProductsContext } from '../context/ProductContext';

export default function Specialities() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  const { products } = useProductsContext();
const handleCategoryClick = (id) => {
  if (id === "cakes") {
    navigate("/cakes");
  } else {
    navigate(`/category/${id}`);
  }
};
  const categoryImages = {
    cakes:    '/products/cakes/birthday_chocolate.png',
    bento:    '/products/cakes/birthday_vanilla.png',
    donuts:   '/products/donuts/chocolate.jpg',
    muffins:  '/products/muffins/chocolate.jpg',
    cupcakes: '/products/cupcakes/chocolate.jpg',
    brownies: '/products/brownies/fudge.jpg',
    dreamtin:   '/products/dreamtin/dreamtin.png',
  };

  // Dynamically calculate starting prices based on live database info
  const startingPrices = {};
  CATEGORIES.forEach(cat => {
    const items = products[cat.id] || [];
    const validItems = items.filter(item => item.available !== false && item.priceValue > 0);
    if (validItems.length > 0) {
      const minItem = validItems.reduce((min, p) => p.priceValue < min.priceValue ? p : min, validItems[0]);
      startingPrices[cat.id] = `${minItem.price}/${minItem.unit?.replace('per ', '') || 'piece'}`;
    } else {
      const fallbackPrices = {
  cakes: '₹400/500g',
  bento: '₹280/cake',
  donuts: '₹250/box',
  muffins: '₹270/box',
  cupcakes: '₹300/box',
  brownies: '₹250/box',
  dreamtin: '₹600/1/2 kg'
};
      startingPrices[cat.id] = fallbackPrices[cat.id] || 'Price on request';
    }
  });

  return (
  <section
    id="specialities"
    className="py-20 px-6 lg:px-12 bg-[#F5E6CC]/40"
  >
    <div className="max-w-screen-2xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="section-subtitle">What We Offer</p>

        <div className="ornament-divider">
          <span className="text-[#C8944A] text-xl">✦</span>
        </div>

        <h2 className="section-title">
          Our <span className="text-[#C8944A]">Specialities</span>
        </h2>

        <p className="text-[#8B5E3C] mt-4 max-w-xl mx-auto text-base">
          Explore our handcrafted range of premium baked goods — each made
          fresh with love and the finest ingredients.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="group cursor-pointer"
          >
            <div className="product-card overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={categoryImages[cat.id]}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3E1F00]/70 to-transparent" />

                <span className="absolute top-3 left-3 text-2xl">
                  {cat.emoji}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-playfair font-bold text-[#3E1F00] text-sm mb-1">
                  {cat.label}
                </h3>

                <p className="text-[#C8944A] text-xs font-bold mb-3">
                  {startingPrices[cat.id]}
                </p>

                <button
  onClick={(e) => {
    e.stopPropagation();
    handleCategoryClick(cat.id);
  }}
  className="bg-[#C8944A] hover:bg-[#B07F35] text-white text-xs px-4 py-2 rounded-full transition-all"
>
  View Prices
</button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>

    {/* Price List Modal */}
    {activeModal && (
      <PriceListModal
        category={activeModal}
        onClose={() => setActiveModal(null)}
      />
    )}
  </section>
  );
}
