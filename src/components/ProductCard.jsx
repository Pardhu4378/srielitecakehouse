import { useState } from 'react';
import { openWhatsApp, buildCakeMessage, buildBentoMessage, buildDonutMessage, buildMuffinMessage, buildCupcakeMessage, buildBrownieMessage, builddreamtinMessage } from '../lib/whatsapp';
import { ShoppingBag, Tag, AlertCircle } from 'lucide-react';

function getMessageFn(category, product, occasion) {
  switch (category) {
    case 'cakes':    return buildCakeMessage(product.name, occasion || product.occasion || 'Special Occasion');
    case 'bento':    return buildBentoMessage(product.name);
    case 'donuts':   return buildDonutMessage(product.name);
    case 'muffins':  return buildMuffinMessage(product.name);
    case 'cupcakes': return buildCupcakeMessage(product.name);
    case 'brownies': return buildBrownieMessage(product.name);
    case 'dreamtin': return builddreamtinMessage(product.name);
    default:         return `Hi! I'd like to order: ${product.name}`;
  }
}

export default function ProductCard({ product, category, occasion, showBadge = true }) {
  const [imgError, setImgError] = useState(false);

  const categoryEmojis = {
    cakes: '🎂', bento: '🎁', donuts: '🍩', muffins: '🧁',
    cupcakes: '🍰', brownies: '🍫', dreamtin: '✨'
  };

  const handleOrder = () => {
    const message = getMessageFn(category, product, occasion);
    openWhatsApp(message);
  };

  return (
    <div className="product-card flex flex-col h-full group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-5xl">{categoryEmojis[category] || '🎂'}</span>
            <span className="text-xs text-[#8B5E3C] font-lato">Image coming soon</span>
          </div>
        )}

        {/* Availability badge */}
        {product.available === false && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Currently Unavailable</span>
          </div>
        )}

        {/* Category tag */}
        {showBadge && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#3E1F00]/80 text-[#F5E6CC] text-xs font-bold px-2.5 py-1 rounded-full capitalize backdrop-blur-sm">
              {categoryEmojis[category]} {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-playfair font-bold text-[#3E1F00] text-lg leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-[#8B5E3C] text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price Badge */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#3E1F00] to-[#5C3317] text-white px-3 py-1.5 rounded-full">
            <Tag size={13} className="text-[#C8944A]" />
            <span className="font-playfair font-bold text-base">{product.price}</span>
            <span className="text-[#C8944A] text-xs font-lato">/{product.unit?.replace('per ', '')}</span>
          </div>
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrder}
          disabled={product.available === false}
          className="btn-whatsapp w-full justify-center text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order Now
        </button>
      </div>
    </div>
  );
}
