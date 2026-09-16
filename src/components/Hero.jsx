import React, { useState, useEffect } from 'react';

function Hero() {
  const images = [
    "/images/ym-hero-1.jpg",
    "/images/ym-hero-2.jpg", 
    "/images/ym-hero-3.jpg", 
    "/images/ym-hero-4.jpg"  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="baslangic" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-32 md:mt-48">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Mobilya evin makyajıdır
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow-md">
          Evinizin ruhunu yansıtan, konfor ve şıklığı bir araya getiren özel tasarım mobilyalar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#urunlerimiz" className="px-8 py-4 text-lg font-bold bg-white text-gray-900 rounded-full hover:bg-amber-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl">
            Ürünleri Keşfet
          </a>
          <a href="#iletisim" className="px-8 py-4 text-lg font-bold bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl">
            İletişime Geç
          </a>
        </div>
      </div>

      {/* Nokta (Dot) Göstergeleri */}
      <div className="absolute bottom-24 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-amber-500 scale-125" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Resim ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Zıplayan Aşağı Ok (Scroll İndikatörü) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#urunlerimiz" className="text-white/70 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>

    </section>
  );
}

export default Hero;