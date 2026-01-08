import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20" style={{
      background: 'linear-gradient(180deg, transparent 0%, #0A0A0A 20%)',
      borderTop: '1px solid rgba(255,8,68,0.2)'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contáctanos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
              Soporte
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">El Equipo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
              Privacidad
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
              Más
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-500" style={{
          borderColor: 'rgba(255,8,68,0.2)'
        }}>
          <p className="mb-2">© 2024 Swinger World. Todos los derechos reservados.</p>
          <p>Plataforma exclusiva para adultos +18</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
