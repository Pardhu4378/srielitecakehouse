import { Phone } from 'lucide-react';
import { openWhatsApp, buildGeneralMessage } from '../lib/whatsapp';
import { PHONE_NUMBER } from '../data/siteData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

// IMPORT YOUR IMAGES HERE
const heroImages = [
  '/assets/products/cakes/vanilla.jpg',
  '/assets/products/cakes/redvelvet.jpg',
  '/assets/products/cakes/chocolate.jpg',
];
export default function Hero() {

  const scrollToSpecialities = () => {
    document.getElementById('specialities')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* HERO SLIDER */}
  <div className="absolute inset-0">
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-full"
    >
      {heroImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Hero ${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="hero-overlay absolute inset-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#3E1F00]/80 via-transparent to-[#3E1F00]/30" />
  </div>
      {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">        
      {/* Script tag */}
        <p className="font-script text-[#C8944A] text-3xl md:text-4xl mb-2 animate-fadeInUp">
          Welcome to
        </p>

        {/* Main title */}
        <h1 className="font-playfair font-bold text-white text-5xl md:text-8xl leading-tight mb-6">          Sri Elite<br />
          <span className="text-[#C8944A]">Cake House</span>
        </h1>

        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 my-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8944A]" />
          <span className="text-[#C8944A] text-xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8944A]" />
        </div>

        {/* Tagline */}
        <p className="font-playfair text-[#F5E6CC] text-xl md:text-2xl italic mb-2 animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
          Freshly Baked Happiness
        </p>
        <p className="text-[#C8944A]/90 text-base md:text-lg mb-10 font-lato tracking-wide animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Customized Cakes & Desserts For Every Occasion
        </p>

        <button
  onClick={scrollToSpecialities}
  className="btn-primary text-base px-8 py-3.5 min-w-[230px]"
>
  🎂 Order Now
</button>

<button
  onClick={() => openWhatsApp(buildGeneralMessage())}
  className="btn-whatsapp text-base px-8 py-3.5 min-w-[20px]"
>
  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
    ...
  </svg>
  WhatsApp Us
</button>

<a
  href="https://wa.me/917795064442"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary min-w-[230px]"
>
  <Phone size={18} />
  Call Us
</a>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          {[
            { num: '500+', label: 'Happy Customers' },
            { num: '100+', label: 'Cake Designs' },
            { num: '6', label: 'Categories' },
            { num: '5★', label: 'Rated' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair font-bold text-[#C8944A] text-2xl">{stat.num}</p>
              <p className="text-[#F5E6CC]/70 text-xs font-lato tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
}
