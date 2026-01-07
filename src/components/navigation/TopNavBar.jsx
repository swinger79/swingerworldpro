import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Bell, Search, ChevronDown, LogOut } from 'lucide-react';

const TopNavBar = ({ currentUser = { name: 'Usuario', notifications: 3, messages: 5 }, onNavigate }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white">SW</div>
          <div>
            <h1 className="text-lg font-bold text-white">Swinger World</h1>
            <p className="text-xs text-gray-400">Comunidad Swinger</p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por nombre o ciudad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => onNavigate('mensajes')} className="relative text-white hover:text-pink-400">
            <Mail size={22} />
            {currentUser.messages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{currentUser.messages}</span>
            )}
          </button>

          <button onClick={() => onNavigate('avisos')} className="relative text-white hover:text-pink-400">
            <Bell size={22} />
            {currentUser.notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{currentUser.notifications}</span>
            )}
          </button>

          <div className="relative">
            <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5">
              <User size={18} className="text-white" />
              <span className="text-white font-medium">{currentUser.name}</span>
              <ChevronDown size={16} className="text-white" />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-white/20 rounded-xl shadow-2xl">
                <button onClick={() => onNavigate('perfil')} className="w-full px-4 py-3 hover:bg-white/10 text-white text-left">Tu Perfil</button>
                <button onClick={() => onNavigate('editar-perfil')} className="w-full px-4 py-3 hover:bg-white/10 text-white text-left">Editar perfil</button>
                <button onClick={() => console.log('Logout')} className="w-full px-4 py-3 hover:bg-white/10 text-white text-left flex items-center gap-2">
                  <LogOut size={16} /> Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
