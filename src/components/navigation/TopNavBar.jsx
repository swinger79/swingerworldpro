import React from 'react';
import { Search, MessageCircle, Bell, User, Menu, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const TopNavBar = ({ currentUser, onNavigate }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0000 50%, #0A0A0A 100%)',
      borderBottom: '2px solid rgba(255,8,68,0.3)',
      boxShadow: '0 4px 20px rgba(255,8,68,0.2)'
    }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('inicio')}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-full flex items-center justify-center relative"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              boxShadow: '0 0 30px rgba(255,8,68,0.6), inset 0 0 20px rgba(255,184,0,0.4)'
            }}
          >
            <Flame size={28} className="text-white" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))' }} />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold font-display" style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Swinger World
            </h1>
            <p className="text-xs" style={{ color: '#FFB800' }}>Comunidad Élite</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#FFB800' }} />
            <input
              type="text"
              placeholder="Buscar usuarios, eventos, clubes..."
              className="w-full pl-12 pr-4 py-2 rounded-full text-white placeholder-gray-500 transition-all"
              style={{
                background: 'rgba(26,26,26,0.8)',
                border: '1px solid rgba(255,8,68,0.3)',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF0844'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,8,68,0.3)'}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('mensajes')}
            className="relative p-2 rounded-full transition-all"
            style={{
              background: 'rgba(255,8,68,0.1)',
              border: '1px solid rgba(255,8,68,0.3)'
            }}
          >
            <MessageCircle size={24} style={{ color: '#FF0844' }} />
            {currentUser.messages > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white'
              }}>
                {currentUser.messages}
              </span>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('avisos')}
            className="relative p-2 rounded-full transition-all"
            style={{
              background: 'rgba(255,184,0,0.1)',
              border: '1px solid rgba(255,184,0,0.3)'
            }}
          >
            <Bell size={24} style={{ color: '#FFB800' }} />
            {currentUser.notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{
                background: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)',
                color: 'white'
              }}>
                {currentUser.notifications}
              </span>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('perfil')}
            className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              color: 'white'
            }}
          >
            <User size={20} />
            <span className="font-medium">{currentUser.name}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
