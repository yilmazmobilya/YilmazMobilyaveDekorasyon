import React from 'react';

function Footer() {
  return(
    <section>
      <div className="mt-12 border-t border-gray-200 pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center md:text-left mb-2 md:mb-0">
            © {new Date().getFullYear()} Yılmaz Mobilya ve Dekorasyon. Tüm hakları saklıdır.
          </p>
          <p className="text-center md:text-right">
            by <span href="https://github.com/RoiDargent" target="_blank" rel="noreferrer" className="font-semibold text-gray-700 hover:text-amber-500 transition-colors">RoiDargent</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;