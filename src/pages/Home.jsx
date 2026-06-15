import Hero from '../sections/Hero';
import About from '../sections/About';
import Specialities from '../sections/Specialities';
import WhyChooseUs from '../sections/WhyChooseUs';
import GalleryPreview from '../sections/GalleryPreview';
import Reviews from '../sections/Reviews';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="specialities">
        <Specialities />
      </div>
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      <div id="gallery-preview">
        <GalleryPreview />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
