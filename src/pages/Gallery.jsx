import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGallery from '../hooks/useGallery';
import { CATEGORIES } from '../data/siteData';
import { ArrowLeft, RefreshCw, X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const { gallery, loading } = useGallery();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFDF9] pt-28 pb-20 px-8 lg:px-12">
        <div className="text-center text-[#8B5E3C]">
          <RefreshCw className="animate-spin mx-auto mb-4" size={36} />
          <p className="font-lato">Loading our sweet gallery...</p>
        </div>
      </div>
    );
  }

  // Filter gallery items
  const filteredGallery = selectedFilter === 'all'
    ? gallery
    : gallery.filter(item => item.category === selectedFilter);

  // Handle escape key to close lightbox
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setLightboxItem(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-28 pb-20 px-4 md:px-8" onKeyDown={handleKeyDown}>
      <div className="w-full max-w-[1600px] mx-auto px-8">        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#C8944A] text-sm font-bold transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header Banner */}
<div className="w-full bg-gradient-to-r from-[#3E1F00] to-[#5C3317] rounded-3xl px-8 py-10 md:px-12 md:py-12 text-[#F5E6CC] relative overflow-hidden shadow-lg mb-10 text-center md:text-left">          <div className="absolute right-0 top-0 w-64 h-64 bg-[#C8944A]/10 rounded-full blur-2xl" />
          <span className="text-4xl md:text-5xl block mb-2">✨</span>
          <h1 className="font-playfair font-bold text-white text-3xl md:text-5xl mb-2">
            Our Sweet Masterpieces
          </h1>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2.5 rounded-full font-lato font-bold text-sm uppercase tracking-wide transition-all border shrink-0 ${
              selectedFilter === 'all'
                ? 'bg-[#3E1F00] text-white border-[#3E1F00] shadow-sm'
                : 'bg-white text-[#8B5E3C] border-[#F5E6CC] hover:border-[#C8944A] hover:bg-[#FDF6EC]'
            }`}
          >
            🌟 View All ({gallery.length})
          </button>
          
          {CATEGORIES.map(cat => {
            const count = gallery.filter(item => item.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full font-lato font-bold text-sm uppercase tracking-wide transition-all border shrink-0 flex items-center gap-2 ${
                  selectedFilter === cat.id
                    ? 'bg-[#3E1F00] text-white border-[#3E1F00] shadow-sm'
                    : 'bg-white text-[#8B5E3C] border-[#F5E6CC] hover:border-[#C8944A] hover:bg-[#FDF6EC]'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span className="text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Grid */}
        {filteredGallery.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#F5E6CC] rounded-3xl">
            <span className="text-5xl block mb-3">📸</span>
            <p className="text-[#8B5E3C] font-semibold">No creations posted in this category yet.</p>
            <p className="text-xs text-[#C8944A] mt-1">We are always baking new designs, check back soon!</p>
          </div>
        ) : (
          <div className="masonry-grid">
            {filteredGallery.map((item, index) => (
              <div 
                key={item.id || index}
                onClick={() => setLightboxItem(item)}
                className="masonry-item relative group overflow-hidden rounded-2xl shadow-sm cursor-pointer bg-[#F5E6CC]/20 border border-[#F5E6CC]/30 hover:shadow-md transition-shadow"
              >
                <img
                  src={item.imageUrl}
                  alt={item.caption || 'Sri Elite Creation'}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="p-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E6CC] to-[#e8d5b0] text-[#8B5E3C] aspect-square rounded-2xl">
                        <span class="text-4xl">🎂</span>
                        <span class="text-xs font-bold mt-2 text-center">${item.caption}</span>
                      </div>
                    `;
                  }}
                />
                
                {/* Lightbox / Overlay Trigger */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#3E1F00]/80 text-[#F5E6CC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} />
                </div>

                {/* Caption Bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end">
                  <span className="text-[#C8944A] text-xxs uppercase font-bold tracking-widest">{item.category}</span>
                  <p className="font-playfair text-white text-sm font-semibold">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fadeIn">
          {/* Close button */}
          <button 
            onClick={() => setLightboxItem(null)} 
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-4">
            <img
              src={lightboxItem.imageUrl}
              alt={lightboxItem.caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onError={e => {
                e.target.src = '/logo.png';
              }}
            />
            <div className="text-center text-white max-w-xl px-4">
              <span className="text-[#C8944A] text-xs uppercase font-bold tracking-widest block mb-1">
                {lightboxItem.category}
              </span>
              <h3 className="font-playfair text-xl font-bold">{lightboxItem.caption}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
