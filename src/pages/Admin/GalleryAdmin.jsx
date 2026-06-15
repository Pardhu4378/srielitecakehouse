import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import useGallery from '../../hooks/useGallery';
import { CATEGORIES } from '../../data/siteData';
import { ArrowLeft, Plus, Trash2, X, RefreshCw, AlertCircle } from 'lucide-react';

export default function GalleryAdmin() {
  const navigate = useNavigate();
  const { gallery, loading, refetch } = useGallery();
  const [localGallery, setLocalGallery] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const [formData, setFormData] = useState({
    category: 'cakes',
    caption: '',
    imageUrl: ''
  });

  const isDemo = sessionStorage.getItem('isAdminDemo') === 'true' || db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;

  useEffect(() => {
    if (gallery && gallery.length > 0) {
      setLocalGallery(gallery);
    }
  }, [gallery]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);

    const docData = {
      category: formData.category,
      caption: formData.caption,
      imageUrl: formData.imageUrl || '/logo.png',
      createdAt: new Date().toISOString()
    };

    try {
      if (isDemo) {
        // Mock add
        const newItem = { id: `mock_gal_${Date.now()}`, ...docData };
        setLocalGallery([newItem, ...localGallery]);
        alert('Demo success: Photo added to gallery (Local Session Only)');
      } else {
        // Firestore Add
        await addDoc(collection(db, 'gallery'), {
          ...docData,
          createdAt: serverTimestamp()
        });
        await refetch();
      }
      setShowForm(false);
      setFormData({ category: 'cakes', caption: '', imageUrl: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding gallery image: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteClick = async (item) => {
    if (!window.confirm(`Are you sure you want to remove this image?`)) return;

    try {
      if (isDemo) {
        setLocalGallery(localGallery.filter(g => g.id !== item.id));
        alert('Demo success: Image removed (Local Session Only)');
      } else {
        await deleteDoc(doc(db, 'gallery', item.id));
        await refetch();
      }
    } catch (err) {
      console.error(err);
      alert('Error removing image: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/admin/dashboard" 
          className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#C8944A] text-sm font-bold transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5E6CC] pb-6 mb-8">
          <div>
            <h1 className="font-playfair font-bold text-3xl text-[#3E1F00]">Manage Gallery</h1>
            <p className="text-[#8B5E3C] text-sm mt-1">
              Add new product photographs to the main site gallery. {isDemo && <span className="text-amber-600 font-bold">(Demo Mode)</span>}
            </p>
          </div>
          {!showForm && (
            <button 
              onClick={() => setShowForm(true)}
              className="btn-primary text-xs py-2.5 inline-flex items-center gap-2"
            >
              <Plus size={16} /> Add Photo
            </button>
          )}
        </div>

        {/* Upload Form */}
        {showForm && (
          <div className="bg-white border border-[#F5E6CC] rounded-3xl p-6 md:p-8 shadow-sm mb-10">
            <div className="flex items-center justify-between border-b border-[#F5E6CC] pb-4 mb-6">
              <h2 className="font-playfair font-bold text-[#3E1F00] text-xl">Upload Gallery Photo</h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-[#8B5E3C] hover:text-[#3E1F00]"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Caption / Title</label>
                  <input
                    type="text"
                    name="caption"
                    required
                    placeholder="E.g. Strawberry Drip Wedding Cake"
                    value={formData.caption}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Category Filter</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] outline-none focus:border-[#C8944A] transition-colors text-sm"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.emoji} {cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-[#3E1F00] font-bold uppercase tracking-wider block mb-2">Image URL / Path</label>
                <input
                  type="text"
                  name="imageUrl"
                  required
                  placeholder="E.g. /gallery/gallery_1.jpg.jpeg or /products/cakes/wedding_white.png.jpeg"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFDF9] border border-[#F5E6CC] rounded-xl px-4 py-3 text-[#3E1F00] placeholder-[#8B5E3C]/40 outline-none focus:border-[#C8944A] transition-colors text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#F5E6CC]">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-outline text-xs py-2 px-5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="btn-primary text-xs py-2 px-6"
                >
                  {actionLoading ? <RefreshCw className="animate-spin" size={14} /> : 'Add Photo'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Gallery Items Grid */}
        {loading ? (
          <div className="text-center py-20 text-[#8B5E3C]">
            <RefreshCw className="animate-spin mx-auto mb-4" size={24} />
            <p className="text-sm">Fetching gallery...</p>
          </div>
        ) : localGallery.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#F5E6CC] rounded-3xl">
            <span className="text-4xl block mb-2">📸</span>
            <p className="text-[#8B5E3C] font-semibold">No images in the gallery.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {localGallery.map(item => (
              <div 
                key={item.id}
                className="bg-white border border-[#F5E6CC] rounded-2xl overflow-hidden shadow-sm relative group flex flex-col justify-between"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#F5E6CC]/20 relative">
                  <img
                    src={item.imageUrl}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl">🎂</div>';
                    }}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#3E1F00]/85 text-[#F5E6CC] text-xxs font-bold px-2 py-0.5 rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-3 flex items-start justify-between gap-2">
                  <p className="text-xs font-bold text-[#3E1F00] line-clamp-2 leading-snug">{item.caption}</p>
                  <button
                    onClick={() => handleDeleteClick(item)}
                    className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-700 hover:text-white transition-colors shrink-0"
                    title="Remove Photo"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
