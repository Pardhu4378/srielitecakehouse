import { useEffect } from 'react';
import { X, Tag } from 'lucide-react';
import { useProductsContext } from '../context/ProductContext';

const categoryMeta = {
  cakes:    { label: 'Cakes',             emoji: '🎂', note: 'Minimum order: 500g. Custom weights available.' },
  bento:    { label: 'Bento Cakes',       emoji: '🎁', note: 'Minimum order: 1 lunchbox. Perfect for gifting.' },
  donuts:   { label: 'Donuts',            emoji: '🍩', note: 'Minimum order: 6 pieces.' },
  muffins:  { label: 'Muffins',           emoji: '🧁', note: 'Minimum order: 4 pieces.' },
  cupcakes: { label: 'Cupcakes',          emoji: '🍰', note: 'Minimum order: 6 pieces.' },
  brownies: { label: 'Brownies',          emoji: '🍫', note: 'Minimum order: 4 pieces.' },
  dreamtincakes:   { label: 'dreamtin cakes', emoji: '✨', note: 'Gift box pricing on request.' },
};

export default function PriceListModal({ category, onClose }) {
  const meta = categoryMeta[category] || { label: category, emoji: '🎂', note: '' };
  const { products } = useProductsContext();
  const items = products[category] || [];

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
        <div className="relative bg-[#FFFDF9] w-full sm:max-w-3xl rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col border border-[#EAD7B5]">        {/* Header */}
        <div className="bg-gradient-to-r from-[#3E1F00] to-[#5C3317] p-5 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl">{meta.emoji}</span>
              <h2 className="font-playfair font-bold text-white text-3xl">{meta.label}</h2>
            </div>
            <p className="text-[#C8944A] text-xs font-lato">Sri Elite Cake House — Price List</p>
          </div>
          <button onClick={onClose} className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Ornament */}
        <div className="bg-[#F5E6CC] px-5 py-2 text-center">
          <p className="text-[#8B5E3C] text-xs font-lato italic">✦ Homemade with Love · Fresh Daily ✦</p>
        </div>

        {/* Price Items — scrollable */}
        <div className="overflow-y-auto flex-1 p-5">
          <div className="grid md:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
  key={i}
  onClick={() => {
    const msg = `Hi, I would like to order:

${item.name}
Price: ${item.price}
Category: ${meta.label}`;

    window.open(
      `https://wa.me/917795064442?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  }}
  className="bg-gradient-to-br from-white to-[#FFF8ED] border border-[#EAD7B5] rounded-2xl p-4 hover:shadow-lg hover:border-[#C8944A] transition-all cursor-pointer"
>
                <div className="flex justify-between items-start">
  <div>
    <h4 className="font-playfair font-bold text-[#3E1F00] text-lg">
      {item.name}
    </h4>

    <p className="text-[#8B5E3C] text-xs mt-1">
      Freshly Prepared
    </p>
  </div>

  <div className="text-right">
  <div className="bg-[#FFF8ED] rounded-xl px-3 py-2 border border-[#EAD7B5]">
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-[#8B5E3C] font-medium">500g</span>
      <span className="font-bold text-[#C8944A]">₹400</span>
    </div>

    <div className="flex justify-between gap-4 text-sm mt-1">
      <span className="text-[#8B5E3C] font-medium">1kg</span>
      <span className="font-bold text-[#C8944A]">₹700</span>
    </div>
  </div>
</div>
</div>
              </div>
            ))}
          </div>

          {/* Note */}
          {meta.note && (
            <div className="mt-4 bg-[#F5E6CC] rounded-xl p-3 flex gap-2">
              <span className="text-[#C8944A] text-sm shrink-0">ℹ️</span>
              <p className="text-[#8B5E3C] text-xs font-lato">{meta.note}</p>
            </div>
          )}

          {/* Custom note */}
          <div className="mt-3 bg-[#3E1F00] rounded-xl p-4 text-center">
            <p className="text-[#F5E6CC] text-xs font-lato mb-1">Need a custom quote?</p>
            <p className="text-[#C8944A] text-xs font-bold">WhatsApp us for bulk orders & special requests</p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-[#F5E6CC] shrink-0">
          <a
            href="https://wa.me/917795064442"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg"          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
