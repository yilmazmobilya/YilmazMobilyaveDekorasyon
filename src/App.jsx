import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Products from './components/Products'; 
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative font-sans text-gray-800">
      
      <Navbar />
      <Hero />
      <Products />
      <Contact />

    </div>
  );
}

export default App;