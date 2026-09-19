import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Products from './components/Products'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './NotFound';

// Mevcut ana sayfa yapını bozmamak için tüm bileşenleri tek bir Home fonksiyonunda topluyoruz
function Home() {
  return (
    <div className="relative font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Kullanıcı siteye (/) girdiğinde Home içindeki tüm bileşenler sırayla yüklenir */}
        <Route path="/" element={<Home />} />
        
        {/* Kullanıcı tanımlanmayan, yanlış bir URL (*) girerse NotFound sayfası açılır */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;