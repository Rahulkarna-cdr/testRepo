import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroBanners } from '../../data/banners';

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const total = heroBanners.length;

  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px]">
        {heroBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={banner.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow">
                    {banner.title}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6">
                    {banner.subtitle}
                  </p>
                  <Link
                    to={banner.ctaLink}
                    className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {banner.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === active ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
