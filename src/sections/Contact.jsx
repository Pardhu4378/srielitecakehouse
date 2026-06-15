import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER, INSTAGRAM_URL } from '../data/siteData';
import { openWhatsApp } from '../lib/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct a WhatsApp inquiry message from the form data
    const message = `👋 *Sri Elite Cake House — General Inquiry*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Expected Date:* ${formData.date || 'Not specified'}
*Inquiry details:* ${formData.message}`;

    openWhatsApp(message);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', date: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-[#F5E6CC]/20 relative">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle">Reach Out</p>
          <div className="ornament-divider"><span className="text-[#C8944A] text-xl">✦</span></div>
          <h2 className="section-title">Contact <span className="text-[#C8944A]">Us</span></h2>
          <p className="text-[#8B5E3C] mt-4 max-w-xl mx-auto text-base">
            Have a custom order in mind, or questions about our menu? Send us an inquiry or call us directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#F5E6CC] rounded-3xl p-8 shadow-sm">
            <div className="space-y-8">
              <h3 className="font-playfair font-bold text-[#3E1F00] text-2xl mb-4">Get In Touch</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8944A]/10 flex items-center justify-center shrink-0 text-[#C8944A]">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3E1F00] text-sm font-playfair uppercase tracking-wide">Call / WhatsApp</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-[#8B5E3C] hover:text-[#C8944A] text-base font-semibold block transition-colors mt-0.5">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-[#25D366] hover:underline text-sm font-bold block mt-0.5">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8944A]/10 flex items-center justify-center shrink-0 text-[#C8944A]">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3E1F00] text-sm font-playfair uppercase tracking-wide">Opening Hours</h4>
                  <p className="text-[#8B5E3C] text-sm leading-relaxed mt-0.5">
                    Everyday: 9:00 AM - 10:00 PM
                  </p>
                  <p className="text-xs text-[#C8944A] italic mt-0.5">*Orders must be placed 24-48 hours in advance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8944A]/10 flex items-center justify-center shrink-0 text-[#C8944A]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3E1F00] text-sm font-playfair uppercase tracking-wide">Location</h4>
                  <p className="text-[#8B5E3C] text-sm leading-relaxed mt-0.5">
                    Sri Elite Cake House, Bangalore, Karnataka, India
                  </p>
                  <span className="text-[#C8944A] text-xs block mt-0.5">Home Delivery & Self-Pickup Available</span>
                </div>
              </div>
            </div>

            {/* Social box */}
            <div className="mt-8 pt-8 border-t border-[#F5E6CC] text-center sm:text-left">
              <p className="text-[#8B5E3C] text-sm mb-3">Follow our creations on Instagram</p>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="btn-outline text-xs px-5 py-2 inline-flex"
              >
                📸 @srielitecakehouse
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div
  className="lg:col-span-7 bg-[#3E1F00] text-[#F5E6CC] rounded-3xl shadow-md"
  style={{ padding: '32px' }}
>
            <h3 className="font-playfair font-bold text-white text-2xl mb-6">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-[#F5E6CC]/80 font-bold uppercase tracking-wider block mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#5C3317]/50 border border-[#C8944A]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5E6CC]/40 outline-none focus:border-[#C8944A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#F5E6CC]/80 font-bold uppercase tracking-wider block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#5C3317]/50 border border-[#C8944A]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5E6CC]/40 outline-none focus:border-[#C8944A] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#F5E6CC]/80 font-bold uppercase tracking-wider block mb-1">Celebration Date (Optional)</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#5C3317]/50 border border-[#C8944A]/30 rounded-xl px-4 py-3 text-white outline-none focus:border-[#C8944A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#F5E6CC]/80 font-bold uppercase tracking-wider block mb-1">Tell Us What You Need</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Flavor, design details, egg/eggless preference, weight..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#5C3317]/50 border border-[#C8944A]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5E6CC]/40 outline-none focus:border-[#C8944A] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-primary w-full justify-center py-3.5 mt-2"
              >
                {submitted ? (
                  <span>✅ Inquiry Sent! Opening WhatsApp...</span>
                ) : (
                  <>
                    <Send size={16} /> <span>Submit & Order via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
