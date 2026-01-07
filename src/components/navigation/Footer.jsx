import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-purple-900/30 to-gray-900 border-t border-white/10 mt-20 py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {['Contáctanos', 'Ayuda', 'Privacidad', 'Cookies', 'Condiciones', 'El Equipo', 'Blog', 'Transparencia'].map((link) => (
          <a key={link} href="#" className="text-gray-400 hover:text-white text-sm">{link}</a>
        ))}
      </div>
      <div className="border-t border-white/10 pt-6 text-center">
        <p className="text-gray-400 text-sm">© 2024 Swinger World. Todos los derechos reservados.</p>
        <p className="text-gray-500 text-xs mt-2">Plataforma exclusiva para adultos +18</p>
      </div>
    </div>
  </footer>
);

export default Footer;
