import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Bell, Search, ChevronDown, LogOut } from 'lucide-react';

const TopNavBar = ({ currentUser = { name: 'Usuario', notifications: 3, messages: 5 }, onNavigate }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sticky top-0 z-50" style={{ 
      background: 'linear-gradient(135deg, rgba(131,56,236,0.95) 0%, rgba(255,0,110,0.95) 50%, rgba(251,86,7,0.95) 100%)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(255,0,110,0.4), 0 0 60px rgba(131,56,236,0.3)',
      borderBottom: '1px solid rgba(255,0,110,0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => onNavigate('inicio')}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xl neon-pulse" style={{
            background: 'linear-gradient(135deg, #FF006E 0%, #8338EC 100%)',
            boxShadow: '0 0 30px rgba(255,0,110,0.6)'
          }}>
            SW
          </div>
          <div>
            <h1 className="text-lg font-bold text-white neon-text" style={{ textShadow: '0 0 20px rgba(255,0,110,0.8)' }}>
              Swinger World
            </h1>
            <p className="text-xs" style={{ color: '#FFA69E' }}>Comunidad Élite</p>
          </div>
        </motion.div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: '#FF006E' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o ciudad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none rounded-full transition-all"
              style={{
                background: 'rgba(13,2,33,0.6)',
                border: '1px solid rgba(255,0,110,0.3)',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 20px rgba(255,0,110,0.4), inset 0 2px 10px rgba(0,0,0,0.3)'}
              onBlur={(e) => e.target.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.3)'}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('mensajes')} 
            className="relative text-white hover:text-pink-400 transition-all"
          >
            <Mail size={22} />
            {currentUser.messages > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold neon-pulse" style={{
                background: 'linear-gradient(135deg, #FF006E 0%, #FB5607 100%)',
                boxShadow: '0 0 15px rgba(255,0,110,0.8)'
              }}>
                {currentUser.messages}
              </span>
            )}
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('avisos')} 
            className="relative text-white hover:text-pink-400 transition-all"
          >
            <Bell size={22} />
            {currentUser.notifications > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold neon-pulse" style={{
                background: 'linear-gradient(135deg, #8338EC 0%, #FF006E 100%)',
                boxShadow: '0 0 15px rgba(131,56,236,0.8)'
              }}>
                {currentUser.notifications}
              </span>
            )}
          </motion.button>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 rounded-full px-3 py-1.5 transition-all"
              style={{
                background: 'rgba(255,0,110,0.2)',
                border: '1px solid rgba(255,0,110,0.4)',
                boxShadow: showUserMenu ? '0 0 20px rgba(255,0,110,0.6)' : 'none'
              }}
            >
              <User size={18} className="text-white" />
              <span className="text-white font-medium">{currentUser.name}</span>
              <ChevronDown size={16} className="text-white" style={{ transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
            </motion.button>
            
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(131,56,236,0.95) 0%, rgba(13,2,33,0.98) 100%)',
                    border: '1px solid rgba(255,0,110,0.3)',
                    boxShadow: '0 0 40px rgba(255,0,110,0.4)'
                  }}
                >
                  {[
                    { label: 'Tu Perfil', action: () => onNavigate('perfil') },
                    { label: 'Editar perfil', action: () => onNavigate('editar-perfil') },
                    { label: 'Cerrar sesión', action: () => console.log('Logout'), icon: LogOut }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => { item.action(); setShowUserMenu(false); }}
                      className="w-full px-4 py-3 text-white text-left transition-all flex items-center gap-2"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(255,0,110,0.2)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      {item.icon && <item.icon size={16} />}
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
