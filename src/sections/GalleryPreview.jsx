import { Link } from 'react-router-dom';
import useGallery from '../hooks/useGallery';

export default function GalleryPreview() {
  const { gallery, loading } = useGallery();
  
  // Show first 6 items for the preview
  const previewItems = gallery.slice(0, 6);

  return (
    <section className="py-20 px-6 md:px-16 bg-[#FFFDF9] relative">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle">Visual Delights</p>
          <div className="ornament-divider"><span className="text-[#C8944A] text-xl">✦</span></div>
          <h2 className="section-title">Our Sweet <span className="text-[#C8944A]">Gallery</span></h2>
          <p className="text-[#8B5E3C] mt-4 max-w-xl mx-auto text-base">
            Take a peek at our fresh creations. From custom wedding tiers to cute birthday treats, we bake dreams into reality.
          </p>
        </div>

        {/* Masonry or Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewItems.map((item, index) => (
            <div 
              key={item.id || index} 
              className="relative group overflow-hidden rounded-2xl shadow-md aspect-square bg-[#F5E6CC]/20"
            >
              <img
                src={item.imageUrl}
                alt={item.caption || 'Cake House Creation'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F5E6CC] to-[#e8d5b0] text-[#8B5E3C]">
                      <span class="text-5xl">🎂</span>
                      <span class="text-xs mt-2 font-lato">Sri Elite Creation</span>
                    </div>
                  `;
                }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#3E1F00]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-[#C8944A] text-sm uppercase font-bold tracking-wider mb-2">
                  {item.category}
                </span>
                <p className="font-playfair text-white text-lg font-bold">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/gallery" className="btn-primary">
            ✨ View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
