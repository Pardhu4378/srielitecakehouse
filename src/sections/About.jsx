export default function About() {
  const features = [
    { icon: '🌿', title: 'Fresh Daily', desc: 'Every product is baked fresh daily using the finest ingredients — no preservatives, no compromises.' },
    { icon: '🏠', title: 'Homemade Taste', desc: 'We bring you the authentic warmth of homemade baking in every single bite.' },
    { icon: '🎨', title: 'Custom Creations', desc: 'From theme cakes to photo cakes, we bring your sweetest visions to life.' },
    { icon: '🥚', title: 'Egg & Eggless', desc: 'All our products are available in both egg and eggless options for everyone.' },
  ];

  return (
    <section id="about" className="py-20 px-8 lg:px-12 bg-[#FFFDF9]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img src="/logo.png" alt="Sri Elite Cake House" className="w-full h-full object-contain bg-[#F5E6CC] p-10" />
            </div>
            {/* Decorative background blob */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#C8944A]/20 to-[#F5E6CC] -z-10" />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#3E1F00] text-[#F5E6CC] rounded-2xl p-4 shadow-xl z-20">
              <p className="font-script text-2xl text-[#C8944A]">Made with</p>
              <p className="font-playfair font-bold text-lg">❤️ Love</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="section-subtitle mb-2">Our Story</p>
            <div className="ornament-divider" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
              <span className="text-[#C8944A]">✦ ✦ ✦</span>
            </div>
            <h2 className="section-title mb-6">
              Baked with Passion,<br />
              <span className="text-[#C8944A]">Served with Love</span>
            </h2>
            <p className="text-[#8B5E3C] leading-relaxed mb-4 text-base">
              At <strong className="text-[#3E1F00]">Sri Elite Cake House</strong>, we believe every celebration deserves a cake as special as the moment itself. Our journey began with a simple love for baking and a passion for creating happiness through food.
            </p>
            <p className="text-[#8B5E3C] leading-relaxed mb-8 text-base">
              We specialize in <strong className="text-[#3E1F00]">custom-designed cakes</strong>, premium desserts, and artisanal baked goods — all made from scratch using the freshest, finest quality ingredients. Whether it's a birthday, wedding, anniversary, or a simple everyday treat, we craft every product with the same dedication and care.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f.title} className="bg-[#F5E6CC] rounded-2xl p-4 hover:shadow-md transition-shadow">
                  <span className="text-2xl mb-2 block">{f.icon}</span>
                  <h4 className="font-playfair font-bold text-[#3E1F00] text-sm mb-1">{f.title}</h4>
                  <p className="text-[#8B5E3C] text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
