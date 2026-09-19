import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
    
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-20">
        <h1 className="text-9xl font-extrabold text-amber-500 drop-shadow-sm mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Aradığınız sayfa bulunamadı.
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          Görünüşe göre bu oda boş. Aradığınız mobilya koleksiyonu veya sayfa taşınmış ya da hiç var olmamış olabilir.
        </p>
        
        <a 
          href="/"
          className="mt-10 inline-flex justify-center items-center px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Ana Sayfaya Dön
        </a>
      </main>

      <Footer />
      
    </div>
  );
}

export default NotFound;