import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Bell, Search, ChevronDown, LogOut, Flame } from 'lucide-react';

const TopNavBar = ({ currentUser = { name: 'Usuario', notifications: 3, messages: 5 }, onNavigate }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sticky top-0 z-50" style={{ 
      background: 'linear-gradient(135deg, rgba(255,8,68,0.95) 0%, rgba(255,23,68,0.95) 50%, rgba(255,184,0,0.95) 100%)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(255,8,68,0.5), 0 0 80px rgba(255,184,0,0.3)',
      borderBottom: '2px solid rgba(255,8,68,0.4)'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => onNavigate('inicio')}
        >
          {/* Logo Moderno - Más sexy y dinámico */}
          <motion.div 
            className="relative fire-pulse"
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Círculo exterior con gradiente */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FF1744 50%, #FFB800 100%)',
              boxShadow: '0 0 40px rgba(255,8,68,0.8), 0 0 80px rgba(255,184,0,0.4), inset 0 0 20px rgba(255,255,255,0.2)',
            }}>
              {/* Brillo interno animado */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Icono de fuego en el centro */}
              <Flame 
                size={28} 
                className="text-white relative z-10" 
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))',
                  strokeWidth: 2.5
                }}
              />
            </div>

            {/* Partículas decorativas */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
              style={{ background: '#FFB800' }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            />
          </motion.div>

          <div>
            <motion.h1 
              className="text-2xl font-bold text-white fire-text" 
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                letterSpacing: '1.5px',
                textShadow: '0 0 30px rgba(255,8,68,0.8), 0 0 60px rgba(255,184,0,0.5)'
              }}
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 40px rgba(255,8,68,1), 0 0 80px rgba(255,184,0,0.8)'
              }}
            >
              Swinger World
            </motion.h1>
            <p className="text-xs" style={{ 
              color: '#FFB800',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              textShadow: '0 0 10px rgba(255,184,0,0.5)'
            }}>
              🔥 Comunidad Élite
            </p>
          </div>
        </motion.div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: '#FF0844' }} />
            <input
              type="text"
              placeholder="Buscar por nombre o ciudad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none rounded-full transition-all"
              style={{
                background: 'rgba(10,10,10,0.7)',
                border: '2px solid rgba(255,8,68,0.3)',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 400
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid rgba(255,8,68,0.6)';
                e.target.style.boxShadow = '0 0 30px rgba(255,8,68,0.5), inset 0 2px 10px rgba(0,0,0,0.5)';
              }}
              onBlur={(e) => {
                e.target.style.border = '2px solid rgba(255,8,68,0.3)';
                e.target.style.boxShadow = 'inset 0 2px 10px rgba(0,0,0,0.5)';
              }}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('mensajes')} 
            className="relative text-white transition-all"
          >
            <Mail size={22} />
            {currentUser.messages > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center fire-pulse" style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                boxShadow: '0 0 20px rgba(255,8,68,0.8)',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700
              }}>
                {currentUser.messages}
              </span>
            )}
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('avisos')} 
            className="relative text-white transition-all"
          >
            <Bell size={22} />
            {currentUser.notifications > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center fire-pulse" style={{
                background: 'linear-gradient(135deg, #FFB800 0%, #FF1744 100%)',
                boxShadow: '0 0 20px rgba(255,184,0,0.8)',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700
              }}>
                {currentUser.notifications}
              </span>
            )}
          </motion.button>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 rounded-full px-4 py-2 transition-all"
              style={{
                background: 'rgba(255,8,68,0.2)',
                border: '2px solid rgba(255,8,68,0.5)',
                boxShadow: showUserMenu ? '0 0 30px rgba(255,8,68,0.8)' : '0 0 10px rgba(255,8,68,0.3)',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600
              }}
            >
              <User size={18} className="text-white" />
              <span className="text-white">{currentUser.name}</span>
              <ChevronDown size={16} className="text-white" style={{ 
                transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0)', 
                transition: 'transform 0.3s' 
              }} />
            </motion.button>
            
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,8,68,0.95) 0%, rgba(10,10,10,0.98) 100%)',
                    border: '2px solid rgba(255,8,68,0.4)',
                    boxShadow: '0 0 50px rgba(255,8,68,0.6)',
                    fontFamily: "'Poppins', sans-serif"
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
                      style={{ 
                        background: 'transparent',
                        fontWeight: 500,
                        fontSize: '0.875rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255,8,68,0.3)';
                        e.target.style.boxShadow = 'inset 0 0 20px rgba(255,8,68,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.boxShadow = 'none';
                      }}
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
