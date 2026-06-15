import { WHY_CHOOSE_US } from '../data/siteData';

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-8 lg:px-12 bg-[#3E1F00] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#C8944A]/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#C8944A]/5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-script text-[#C8944A] text-3xl mb-2">Why Us?</p>
          <div className="ornament-divider"><span className="text-[#C8944A] text-xl">✦</span></div>
          <h2 className="font-playfair font-bold text-white text-4xl md:text-5xl">
            Why Choose <span className="text-[#C8944A]">Sri Elite</span>
          </h2>
          <p className="text-[#F5E6CC]/60 mt-4 max-w-xl mx-auto">
            We're not just a bakery — we're memory makers. Here's what sets us apart.
          </p>
        </div>

        {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-[#C8944A]/15 border border-white/10 hover:border-[#C8944A]/40 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C8944A]/20 group-hover:bg-[#C8944A]/30 flex items-center justify-center text-3xl mx-auto mb-4 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-playfair font-bold text-white text-base mb-2">{item.title}</h3>
              <p className="text-[#F5E6CC]/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/917795064442"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp inline-flex text-base px-10 py-4"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order Your Cake Today
          </a>
        </div>
      </div>
    </section>
  );
}
