import { useNavigate, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import useProducts from '../../hooks/useProducts';
import useGallery from '../../hooks/useGallery';
import useReviews from '../../hooks/useReviews';
import { Package, Image as ImageIcon, MessageSquare, LogOut, ArrowRight, BarChart2 } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { products } = useProducts();
  const { gallery } = useGallery();
  const { reviews } = useReviews(false); // get all reviews to count pending

  // Count total products
  const totalProducts = Object.values(products).reduce((acc, catList) => acc + catList.length, 0);
  const totalGallery = gallery.length;
  const pendingReviews = reviews.filter(r => !r.approved).length;

  const handleLogout = async () => {
    sessionStorage.removeItem('isAdminDemo');
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Signout error:", err);
    }
    navigate('/admin/login');
  };

  const isDemo = sessionStorage.getItem('isAdminDemo') === 'true';

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5E6CC] pb-6 mb-8">
          <div>
            <h1 className="font-playfair font-bold text-3xl text-[#3E1F00]">Admin Dashboard</h1>
            <p className="text-[#8B5E3C] text-sm mt-1">
              Welcome back, Administrator. {isDemo && <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-100">(Demo Mode)</span>}
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="btn-outline text-red-700 border-red-200 hover:bg-red-50 hover:text-red-800 text-xs px-5 py-2 inline-flex items-center gap-2"
          >
            <LogOut size={14} /> Log Out
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-[#3E1F00] text-[#F5E6CC] rounded-3xl p-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C8944A]/20 flex items-center justify-center text-[#C8944A]">
              <BarChart2 size={24} />
            </div>
            <div>
              <h2 className="font-playfair text-lg font-bold text-white">System Status</h2>
              <p className="text-xs text-[#C8944A] mt-0.5">Quick look at the site statistics</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="px-4">
              <p className="text-[#C8944A] text-xxs font-bold uppercase tracking-wider">Products</p>
              <p className="text-white text-xl font-bold font-playfair">{totalProducts}</p>
            </div>
            <div className="px-4 border-x border-[#F5E6CC]/20">
              <p className="text-[#C8944A] text-xxs font-bold uppercase tracking-wider">Gallery</p>
              <p className="text-white text-xl font-bold font-playfair">{totalGallery}</p>
            </div>
            <div className="px-4">
              <p className="text-[#C8944A] text-xxs font-bold uppercase tracking-wider">Pending Reviews</p>
              <p className={`text-xl font-bold font-playfair ${pendingReviews > 0 ? 'text-amber-400' : 'text-white'}`}>{pendingReviews}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Products */}
          <div className="bg-white border border-[#F5E6CC] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#C8944A]/10 text-[#C8944A] flex items-center justify-center mb-4">
                <Package size={20} />
              </div>
              <h3 className="font-playfair font-bold text-[#3E1F00] text-lg mb-2">Manage Products</h3>
              <p className="text-[#8B5E3C] text-xs leading-relaxed">
                Add new celebration cakes, brownies, donuts, kunafa, or bento cakes. Edit prices, descriptions, and change availability.
              </p>
            </div>
            <Link 
              to="/admin/products" 
              className="btn-primary text-xs py-2 px-4 mt-6 justify-center"
            >
              <span>Go to Products</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: Gallery */}
          <div className="bg-white border border-[#F5E6CC] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#C8944A]/10 text-[#C8944A] flex items-center justify-center mb-4">
                <ImageIcon size={20} />
              </div>
              <h3 className="font-playfair font-bold text-[#3E1F00] text-lg mb-2">Manage Gallery</h3>
              <p className="text-[#8B5E3C] text-xs leading-relaxed">
                Upload photos of your latest custom designs to the showcase gallery. Assign categories and add visual captions.
              </p>
            </div>
            <Link 
              to="/admin/gallery" 
              className="btn-primary text-xs py-2 px-4 mt-6 justify-center"
            >
              <span>Go to Gallery</span> <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3: Reviews */}
          <div className="bg-white border border-[#F5E6CC] rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#C8944A]/10 text-[#C8944A] flex items-center justify-center mb-4">
                <MessageSquare size={20} />
              </div>
              <h3 className="font-playfair font-bold text-[#3E1F00] text-lg mb-2">Manage Reviews</h3>
              <p className="text-[#8B5E3C] text-xs leading-relaxed">
                Moderate user feedback. Read, approve, or reject testimonials before they go live on the home page.
              </p>
            </div>
            <Link 
              to="/admin/reviews" 
              className="btn-primary text-xs py-2 px-4 mt-6 justify-center"
            >
              <span>Go to Reviews</span> <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
