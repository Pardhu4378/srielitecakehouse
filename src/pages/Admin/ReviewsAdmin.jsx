import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import useReviews from '../../hooks/useReviews';
import { ArrowLeft, Check, Trash2, RefreshCw, Star, Clock } from 'lucide-react';

export default function ReviewsAdmin() {
  const navigate = useNavigate();
  const { reviews, loading, refetch } = useReviews(false); // get all reviews (approved & unapproved)
  const [localReviews, setLocalReviews] = useState([]);
  const [actionLoading, setActionLoading] = useState(false);

  const isDemo = sessionStorage.getItem('isAdminDemo') === 'true' || db.app.options.apiKey === "YOUR_API_KEY" || !db.app.options.apiKey;

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setLocalReviews(reviews);
    }
  }, [reviews]);

  const handleApprove = async (review) => {
    setActionLoading(true);
    try {
      if (isDemo) {
        setLocalReviews(localReviews.map(r => r.id === review.id ? { ...r, approved: true } : r));
        alert('Demo success: Review approved (Local Session Only)');
      } else {
        const docRef = doc(db, 'reviews', review.id);
        await updateDoc(docRef, { approved: true, updatedAt: new Date().toISOString() });
        await refetch();
      }
    } catch (err) {
      console.error(err);
      alert('Error approving review: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (review) => {
    if (!window.confirm(`Are you sure you want to delete the review by ${review.name}?`)) return;

    setActionLoading(true);
    try {
      if (isDemo) {
        setLocalReviews(localReviews.filter(r => r.id !== review.id));
        alert('Demo success: Review deleted (Local Session Only)');
      } else {
        await deleteDoc(doc(db, 'reviews', review.id));
        await refetch();
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting review: ' + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Split into pending and approved lists
  const pendingReviews = localReviews.filter(r => !r.approved);
  const approvedReviews = localReviews.filter(r => r.approved);

  return (
    <div className="min-h-screen bg-[#FFFDF9] pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/admin/dashboard" 
          className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#C8944A] text-sm font-bold transition-colors mb-6"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="border-b border-[#F5E6CC] pb-6 mb-8">
          <h1 className="font-playfair font-bold text-3xl text-[#3E1F00]">Manage Reviews</h1>
          <p className="text-[#8B5E3C] text-sm mt-1">
            Moderate customer testimonials. Approve reviews to make them visible on the home page. {isDemo && <span className="text-amber-600 font-bold">(Demo Mode)</span>}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-[#8B5E3C]">
            <RefreshCw className="animate-spin mx-auto mb-4" size={24} />
            <p className="text-sm">Fetching reviews...</p>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* PENDING REVIEWS SECTION */}
            <div>
              <h2 className="font-playfair font-bold text-lg text-[#3E1F00] mb-4 flex items-center gap-2 border-b border-[#F5E6CC] pb-2">
                <Clock size={18} className="text-amber-500" /> Pending Approval ({pendingReviews.length})
              </h2>

              {pendingReviews.length === 0 ? (
                <div className="bg-white border border-[#F5E6CC] rounded-2xl p-6 text-center text-[#8B5E3C] text-sm italic">
                  No reviews pending approval.
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingReviews.map(r => (
                    <div key={r.id} className="bg-white border border-amber-200 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#C8944A] text-white flex items-center justify-center font-bold text-sm">
                            {r.avatar || r.name.charAt(0)}
                          </span>
                          <div>
                            <h4 className="font-bold text-[#3E1F00] text-sm">{r.name}</h4>
                            <p className="text-xxs text-[#8B5E3C]">{r.date || 'Recently'}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < r.rating ? 'fill-[#D4A847] text-[#D4A847]' : 'text-gray-300'} />
                          ))}
                        </div>
                        <p className="text-[#3E1F00] text-xs leading-relaxed italic">"{r.review}"</p>
                      </div>
                      <div className="flex md:flex-col justify-end gap-2 shrink-0 self-end md:self-center">
                        <button
                          onClick={() => handleApprove(r)}
                          disabled={actionLoading}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Check size={14} /> Approve
                        </button>
                        <button
                          onClick={() => handleDelete(r)}
                          disabled={actionLoading}
                          className="px-4 py-2 border border-red-200 hover:bg-red-50 text-red-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* APPROVED REVIEWS SECTION */}
            <div>
              <h2 className="font-playfair font-bold text-lg text-[#3E1F00] mb-4 flex items-center gap-2 border-b border-[#F5E6CC] pb-2">
                <Check size={18} className="text-green-600" /> Approved Reviews ({approvedReviews.length})
              </h2>

              {approvedReviews.length === 0 ? (
                <div className="bg-white border border-[#F5E6CC] rounded-2xl p-6 text-center text-[#8B5E3C] text-sm italic">
                  No approved reviews listed on the site.
                </div>
              ) : (
                <div className="space-y-4">
                  {approvedReviews.map(r => (
                    <div key={r.id} className="bg-white border border-[#F5E6CC] rounded-2xl p-5 shadow-sm flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#3E1F00]/25 text-[#3E1F00] flex items-center justify-center font-bold text-sm">
                            {r.avatar || r.name.charAt(0)}
                          </span>
                          <div>
                            <h4 className="font-bold text-[#3E1F00] text-sm">{r.name}</h4>
                            <p className="text-xxs text-[#8B5E3C]">{r.date || 'Recently'}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < r.rating ? 'fill-[#D4A847] text-[#D4A847]' : 'text-gray-300'} />
                          ))}
                        </div>
                        <p className="text-[#3E1F00] text-xs leading-relaxed">"{r.review}"</p>
                      </div>
                      <div className="flex shrink-0 self-end md:self-center">
                        <button
                          onClick={() => handleDelete(r)}
                          disabled={actionLoading}
                          className="p-2 bg-red-50 text-red-700 hover:bg-red-700 hover:text-white rounded-xl transition-colors"
                          title="Delete Review"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
