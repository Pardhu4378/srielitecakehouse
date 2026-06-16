import { Link } from 'react-router-dom';
import { Phone, Instagram} from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL } from '../data/siteData';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Specialities', href: '/#specialities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('/#')) {
      document.getElementById(href.replace('/#', ''))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3E1F00] text-[#F5E6CC]">
      {/* Top Wave */}
      <div className="bg-[#FFFDF9] h-8 rounded-b-[50px]" />

      <div className="px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo.png" alt="Sri Elite Cake House" className="h-20 w-20 object-contain rounded-full border-2 border-[#C8944A]" />
              <div>
                <h2 className="font-playfair font-bold text-white text-2xl">Sri Elite</h2>
                <p className="font-playfair text-[#C8944A] text-lg tracking-widest uppercase">Cake House</p>
              </div>
            </div>
            <p className="text-[#C8944A]/80 text-sm leading-relaxed mb-6">
              Crafting moments of joy with freshly baked, premium homemade cakes and desserts for every special occasion.
            </p>
            <div className="flex items-center gap-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="w-10 h-10 rounded-full bg-[#C8944A] flex items-center justify-center hover:scale-110 transition-transform">
                <Phone size={16} className="text-white" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            {/* Contact */}
<div className="mt-10">
  <h3 className="font-playfair font-bold text-white text-lg mb-5 pb-2 border-b border-[#C8944A]/30">
    Contact Us
  </h3>

  <div className="space-y-4">

    <a
      href={`tel:${PHONE_NUMBER}`}
      className="flex items-start gap-3 group"
    >
      <div className="w-8 h-8 rounded-full bg-[#C8944A]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C8944A] transition-colors">
        <Phone size={14} className="text-[#C8944A] group-hover:text-white" />
      </div>

      <div>
        <p className="text-[#F5E6CC]/60 text-xs">Call Us</p>
        <p className="text-[#C8944A] text-sm font-bold">
          +91 7795064442
        </p>
      </div>
    </a>

    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-3 group"
    >
      <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#25D366] transition-colors">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z"/>
        </svg>
      </div>

      <div>
        <p className="text-[#F5E6CC]/60 text-xs">WhatsApp</p>
        <p className="text-[#C8944A] text-sm font-bold">
          +91 7795064442
        </p>
      </div>
    </a>

    <a
  href={INSTAGRAM_URL}
  target="_blank"
  rel="noreferrer"
  className="flex items-start gap-3 group"
>
  <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-pink-500 transition-colors">
    <Instagram
      size={14}
      className="text-pink-500 group-hover:text-white"
    />
  </div>

  <div>
    <p className="text-[#F5E6CC]/60 text-xs">Instagram</p>
    <p className="text-[#C8944A] text-sm font-bold">
      @srielitecakehouse
    </p>
  </div>
</a>

  </div>
</div>
          </div>

  {/* Outlet Info */}
<div className="lg:col-span-4">
    <h3 className="font-playfair font-bold text-white text-lg mb-5 pb-2 border-b border-[#C8944A]/30">
        Our Outlet
    </h3>
    <iframe
  title="Sri Elite Cake House"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.30852967689!2d77.64919527454538!3d12.887871816709463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150767093ec3%3A0xec480cbdda757b17!2sSri%20Elite%20Cake%20House!5e0!3m2!1sen!2sin!4v1781605479453!5m2!1sen!2sin"
  className="w-full h-[360px] rounded-xl shadow-2xl border-2 border-[#C8944A]/30"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
    <p className="mt-4 text-[#C8944A] text-sm leading-7">
        <strong>Kruthika Nilaya Apartment</strong><br/>
        1st Main Road, Kudlu Main Rd,<br/>
        Bengaluru, Karnataka 560068
    </p>
</div>
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair font-bold text-white text-lg mb-5 pb-2 border-b border-[#C8944A]/30">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  {link.href.startsWith('/#') ? (
                    <button onClick={() => scrollTo(link.href)}
                      className="text-[#C8944A]/80 hover:text-[#C8944A] text-sm transition-colors flex items-center gap-2">
                      <span className="text-[#C8944A]">›</span> {link.label}
                    </button>
                  ) : (
                    <Link to={link.href} className="text-[#C8944A]/80 hover:text-[#C8944A] text-sm transition-colors flex items-center gap-2">
                      <span className="text-[#C8944A]">›</span> {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>

      {/* Bottom Bar */}
<div className="border-t border-[#C8944A]/20 px-6 py-5 text-center">
  <p className="text-[#C8944A]/70 text-sm font-lato">
    © {new Date().getFullYear()} Sri Elite Cake House. All Rights Reserved.
  </p>

  <p className="mt-2 text-[#C8944A] text-sm font-semibold">
    Website Designed & Developed by
  </p>
  <p> Johalapuram Pardhu</p>

  <p className="text-[#C8944A]/80 text-sm">
    Freelance Full Stack Web Developer
  </p>

  <a
  href="https://wa.me/918885474059"
  target="_blank"
  rel="noreferrer"
  className="text-[#C8944A] text-sm font-semibold mt-1 inline-block hover:underline"
>
  💬 +91 8885474059
</a>
</div>
    </footer>
  );
}
