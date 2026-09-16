import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // bg-white/40 ve backdrop-blur-lg ile buzlu cam efekti verildi
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#baslangic" className="flex items-center">
          <img 
            src="/images/yilmaz-mobilya-logo.png" 
            alt="Yılmaz Mobilya Logo" 
            className="h-12 w-auto object-contain" 
          />
        </a>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <a href="#baslangic" className="hover:text-amber-700 transition-colors">
            Başlangıç
          </a>
          
          {/* Masaüstü Açılır Menü */}
          <div className="relative group">
            <a 
              href="#urunlerimiz" 
              className="hover:text-amber-700 transition-colors py-2 inline-flex items-center"
            >
              Ürünlerimiz
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            
            {/* Dropdown menüsü */}
            <div className="absolute left-0 top-full mt-0 w-48 bg-white/90 backdrop-blur-md border border-white/50 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2 flex flex-col">
                <a href="#mutfak-dolabi" className="px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-700 transition-colors">Mutfak Dolabı</a>
                <a href="#vestiyer" className="px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-700 transition-colors">Vestiyer</a>
                <a href="#dresuar" className="px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-700 transition-colors">Dresuar</a>
                <a href="#kahve-kosesi" className="px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-700 transition-colors">Kahve Köşesi</a>
                <a href="#yatak-odasi" className="px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-700 transition-colors">Yatak Odası</a>
                <a href="#tv-unitesi" className="px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-700 transition-colors">TV Ünitesi</a>
              </div>
            </div>
          </div>

          <a href="#iletisim" className="hover:text-amber-700 transition-colors">
            İletişim
          </a>
        </div>

        {/* Mobil Hamburger Butonu */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil Açılır Menü İçeriği */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-lg border-t border-white/30 shadow-xl absolute top-full left-0 w-full">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
            <a href="#baslangic" onClick={closeMenu} className="hover:text-amber-700 transition-colors">
              Başlangıç
            </a>
            
            <div className="flex flex-col space-y-3">
              <a href="#urunlerimiz" onClick={closeMenu} className="hover:text-amber-700 transition-colors">
                Ürünlerimiz
              </a>
              <div className="flex flex-col pl-4 border-l-2 border-gray-300/50 space-y-3 text-sm text-gray-700">
                <a href="#mutfak-dolabi" onClick={closeMenu}>Mutfak Dolabı</a>
                <a href="#vestiyer" onClick={closeMenu}>Vestiyer</a>
                <a href="#dresuar" onClick={closeMenu}>Dresuar</a>
                <a href="#kahve-kosesi" onClick={closeMenu}>Kahve Köşesi</a>
                <a href="#yatak-odasi" onClick={closeMenu}>Yatak Odası</a>
                <a href="#tv-unitesi" onClick={closeMenu}>TV Ünitesi</a>
              </div>
            </div>

            <a href="#iletisim" onClick={closeMenu} className="hover:text-amber-700 transition-colors">
              İletişim
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;