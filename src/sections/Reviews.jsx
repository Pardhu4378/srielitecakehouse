import { REVIEWS } from '../data/siteData';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} viewBox="0 0 24 24" width="16" height="16"
          fill={i <= rating ? '#D4A847' : '#e5e7eb'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-6 md:px-16 bg-[#FFFDF9]">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle">What They Say</p>
          <div className="ornament-divider"><span className="text-[#C8944A] text-xl">✦</span></div>
          <h2 className="section-title">Customer <span className="text-[#C8944A]">Reviews</span></h2>
          <p className="text-[#8B5E3C] mt-4 max-w-xl mx-auto">
            Real words from our happy customers — the best proof of our quality.
          </p>
        </div>

        {/* Overall rating banner */}
        <div className="bg-gradient-to-r from-[#3E1F00] to-[#5C3317] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-center">
          <div>
            <p className="font-playfair font-bold text-[#C8944A] text-6xl">4.9</p>
            <StarRating rating={5} />
            <p className="text-[#F5E6CC]/60 text-xs mt-1">out of 5 stars</p>
          </div>
          <div className="w-px h-16 bg-[#C8944A]/30 hidden sm:block" />
          <div>
            <p className="text-white font-playfair font-bold text-xl">Excellent Quality</p>
            <p className="text-[#F5E6CC]/70 text-sm">Based on 500+ happy customers</p>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-white border border-[#F5E6CC] rounded-2xl p-6 hover:shadow-lg hover:border-[#C8944A]/30 transition-all">
              {/* Quote mark */}
              <div className="text-[#C8944A]/20 font-playfair text-6xl leading-none mb-2">"</div>
              <p className="text-[#8B5E3C] text-sm leading-relaxed mb-4 -mt-4">{review.review}</p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8944A] to-[#3E1F00] flex items-center justify-center text-white font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-[#3E1F00] text-sm">{review.name}</p>
                    <p className="text-[#8B5E3C]/60 text-xs">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/917795064442?text=Hi%20Sri%20Elite%20Cake%20House!%20I%20would%20like%20to%20share%20my%20feedback."
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            ⭐ Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}
