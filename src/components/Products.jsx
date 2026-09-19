import React, { useState } from 'react';

// --- ALT BİLEŞEN: Her bir kategori için özel Slider Kartı ---
function ProductCard({ item, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div 
      id={item.id} 
      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl mx-auto border border-gray-100"
    >
      <div 
        className="relative w-full lg:w-2/3 h-72 sm:h-96 lg:h-[500px] group cursor-pointer bg-gray-100"
        onClick={() => onImageClick(item.images, currentIndex)}
      >
        <img 
          src={item.images[currentIndex]} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="bg-white/90 text-gray-900 px-6 py-2 rounded-full font-semibold backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
             Büyütmek İçin Tıkla
           </span>
        </div>

        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 rounded-full p-3 backdrop-blur-md shadow-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 rounded-full p-3 backdrop-blur-md shadow-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {item.images.map((_, dotIdx) => (
            <div 
              key={dotIdx} 
              className={`h-2 rounded-full transition-all duration-300 ${dotIdx === currentIndex ? 'w-6 bg-amber-500' : 'w-2 bg-white/70'}`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white z-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{item.desc}</p>
        
        <a 
          href="#iletisim"
          className="inline-flex justify-center items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          Fiyat Alın
        </a>
      </div>
    </div>
  );
}

// --- ANA BİLEŞEN: Ürünler Bölümü ---
function Products() {
  const [lightbox, setLightbox] = useState(null); 

  const categories = [
    {
      id: "mutfak-dolabi",
      title: "Mutfak Dolapları",
      desc: "Fonksiyonellik ve zarafeti mutfağınıza taşıyan, size özel ölçü ve renk seçenekleriyle tasarlanan modern mutfak dolapları.",
      images: [
        "/images/Mutfak/mutfak-1.jpeg",
        "/images/Mutfak/mutfak-2.jpeg",
        "/images/Mutfak/mutfak-3.jpeg",
        "/images/Mutfak/mutfak-4.jpeg",
        "/images/Mutfak/mutfak-5.jpeg",
        "/images/Mutfak/mutfak-6.jpeg",
        "/images/Mutfak/mutfak-7.jpeg",
        "/images/Mutfak/mutfak-8.jpeg",
        "/images/Mutfak/mutfak-9.jpeg",
        "/images/Mutfak/mutfak-10.jpeg",
        "/images/Mutfak/mutfak-11.jpeg",
        "/images/Mutfak/mutfak-12.jpeg",
        "/images/Mutfak/mutfak-13.jpeg",
        "/images/Mutfak/mutfak-14.jpeg"
        ]
    },
    {
      id: "vestiyer",
      title: "Vestiyer & Portmanto",
      desc: "Evinize ilk adımda düzeni ve şıklığı hissettiren, dar alanları bile en verimli şekilde kullanan giriş çözümleri.",
      images: [
        "/images/Vestiyer/vestiyer-1.jpeg",
        "/images/Vestiyer/vestiyer-2.jpeg",
        "/images/Vestiyer/vestiyer-3.jpeg",
        "/images/Vestiyer/vestiyer-4.jpeg",
        "/images/Vestiyer/vestiyer-5.jpeg",
        "/images/Vestiyer/vestiyer-6.jpeg",
        "/images/Vestiyer/vestiyer-7.jpeg",
        "/images/Vestiyer/vestiyer-8.jpeg",
        "/images/Vestiyer/vestiyer-9.jpeg",
        "/images/Vestiyer/vestiyer-10.jpeg",
        "/images/Vestiyer/vestiyer-11.jpeg",
        "/images/Vestiyer/vestiyer-12.jpeg",
        "/images/Vestiyer/vestiyer-13.jpeg",
        "/images/Vestiyer/vestiyer-14.jpeg",
        "/images/Vestiyer/vestiyer-15.jpeg",
        "/images/Vestiyer/vestiyer-16.jpeg",
        "/images/Vestiyer/vestiyer-17.jpeg",
      ]
    },
    {
      id: "dresuar",
      title: "Dresuar",
      desc: "Koridor ve salonlarınıza estetik bir dokunuş katan, aynalı ve çekmeceli zarif dresuar modelleri.",
      images: [
        "/images/Dresuar/dresuar-9.jpeg",
        "/images/Dresuar/dresuar-2.jpeg",
        "/images/Dresuar/dresuar-3.jpeg",
        "/images/Dresuar/dresuar-4.jpeg",
        "/images/Dresuar/dresuar-5.jpeg",
        "/images/Dresuar/dresuar-6.jpeg",
        "/images/Dresuar/dresuar-7.jpeg",
        "/images/Dresuar/dresuar-8.jpeg",
        "/images/Dresuar/dresuar-1.jpeg",
        "/images/Dresuar/dresuar-10.jpeg",
        "/images/Dresuar/dresuar-11.jpeg",
        "/images/Dresuar/dresuar-12.jpeg",
        "/images/Dresuar/dresuar-13.jpeg",
        "/images/Dresuar/dresuar-14.jpeg",
      ]
    },
    {
      id: "kahve-kosesi",
      title: "Kahve Köşesi",
      desc: "Evinizin en keyifli anlarına eşlik edecek, fincanlarınız ve kahve makineniz için özel tasarlanmış köşeler.",
      images: [
         "/images/Kahve/kahve-17.jpeg",
         "/images/Kahve/kahve-2.jpeg",
         "/images/Kahve/kahve-3.jpeg",
         "/images/Kahve/kahve-4.jpeg",
         "/images/Kahve/kahve-5.jpeg",
         "/images/Kahve/kahve-6.jpeg",
         "/images/Kahve/kahve-7.jpeg",
         "/images/Kahve/kahve-8.jpeg",
         "/images/Kahve/kahve-9.jpeg",
         "/images/Kahve/kahve-10.jpeg",
         "/images/Kahve/kahve-11.jpeg",
         "/images/Kahve/kahve-12.jpeg",
         "/images/Kahve/kahve-13.jpeg",
         "/images/Kahve/kahve-14.jpeg",
         "/images/Kahve/kahve-15.jpeg",
         "/images/Kahve/kahve-16.jpeg",
         "/images/Kahve/kahve-1.jpeg",
      ]
    },
    {
      id: "yatak-odasi",
      title: "Yatak Odası",
      desc: "Günün yorgunluğunu atacağınız huzur dolu, gardırop ve şifonyer detaylarıyla zenginleştirilmiş takımlar.",
      images: [
         "/images/Yatak/yatak-5.jpeg",
         "/images/Yatak/yatak-2.jpeg",
         "/images/Yatak/yatak-3.jpeg",
         "/images/Yatak/yatak-4.jpeg",
         "/images/Yatak/yatak-1.jpeg",
         "/images/Yatak/yatak-6.jpeg",
         "/images/Yatak/yatak-7.jpeg",
         "/images/Yatak/yatak-8.jpeg",
         "/images/Yatak/yatak-9.jpeg",
         "/images/Yatak/yatak-10.jpeg",
         "/images/Yatak/yatak-11.jpeg",
         "/images/Yatak/yatak-12.jpeg",
         "/images/Yatak/yatak-13.jpeg",
      ]
    },
    // YENİ EKLENEN TV ÜNİTESİ BÖLÜMÜ
    {
      id: "tv-unitesi",
      title: "TV Ünitesi",
      desc: "Salonunuzun odak noktası olacak, estetik ve işlevselliği bir araya getiren modern TV ünitesi tasarımları.",
      images: [
        "/images/TV/tv-16.jpeg",
        "/images/TV/tv-2.jpeg",
        "/images/TV/tv-3.jpeg",
        "/images/TV/tv-4.jpeg",
        "/images/TV/tv-5.jpeg",
        "/images/TV/tv-6.jpeg",
        "/images/TV/tv-7.jpeg",
        "/images/TV/tv-8.jpeg",
        "/images/TV/tv-9.jpeg",
        "/images/TV/tv-10.jpeg",
        "/images/TV/tv-11.jpeg",
        "/images/TV/tv-12.jpeg",
        "/images/TV/tv-13.jpeg",
        "/images/TV/tv-14.jpeg",
        "/images/TV/tv-15.jpeg",
        "/images/TV/tv-1.jpeg",
        "/images/TV/tv-17.jpeg",
        "/images/TV/tv-18.jpeg",
        "/images/TV/tv-19.jpeg",
        "/images/TV/tv-20.jpeg",
        ]
    }
  ];

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1
    }));
  };
  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1
    }));
  };

  return (
    <section id="urunlerimiz" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Koleksiyonlarımız
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Geniş ürün yelpazemiz arasında gezinin. Görselleri detaylı incelemek için üzerlerine tıklayabilirsiniz.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {categories.map((item) => (
            <ProductCard 
              key={item.id} 
              item={item} 
              onImageClick={(images, index) => setLightbox({ images, index })} 
            />
          ))}

          {/* DİĞER İHTİYAÇLAR / ÖZEL ÜRETİM KARTI (RESİMSİZ VE ORTALANMIŞ) */}
          <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl mx-auto border border-gray-800 p-10 lg:p-16 flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-amber-500 mb-6">Özel Tasarımlar</h3>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl">
              Giyinme odası, ayakkabılık, kitaplık, ders çalışma masası ve ihtiyacınıza uygun diğer tüm mobilya ve dekorasyon ürünleri için bize ulaşın.
            </p>
            
            <a 
              href="#iletisim"
              className="inline-flex justify-center items-center px-10 py-4 bg-amber-500 text-gray-900 font-bold rounded-full hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              İletişime Geç
            </a>
          </div>
          {/* ÖZEL ÜRETİM KARTI SONU */}

        </div>

      </div>

      {/* LIGHTBOX MODÜLÜ */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setLightbox(null)} 
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/30 rounded-full p-2 transition-colors z-50"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <button 
            onClick={prevLightboxImage}
            className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full p-3 sm:p-5 transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button 
            onClick={nextLightboxImage}
            className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full p-3 sm:p-5 transition-colors z-50"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <img 
            src={lightbox.images[lightbox.index]} 
            alt="Tam Ekran Ürün" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
      
    </section>
  );
}

export default Products;