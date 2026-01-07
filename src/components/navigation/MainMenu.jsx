import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Search, Calendar, PartyPopper, Building, MessageSquare, ChevronDown } from 'lucide-react';
import { MAIN_MENU } from '../../data/menuStructure';

const iconMap = { Home, Users, Search, Calendar, PartyPopper, Building, MessageSquare };

const MainMenu = ({ currentView, onNavigate }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div className="bg-gradient-to-r from-purple-800 to-pink-800 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 overflow-x-auto">
        {MAIN_MENU.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = currentView === item.id;
          const hasSubmenu = item.submenu?.length > 0;

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => hasSubmenu ? setActiveSubmenu(activeSubmenu === item.id ? null : item.id) : onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg ${isActive ? 'bg-purple-600 text-white shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                {Icon && <Icon size={18} />}
                <span className="font-medium whitespace-nowrap">{item.label}</span>
                {hasSubmenu && <ChevronDown size={14} className={activeSubmenu === item.id ? 'rotate-180' : ''} />}
              </button>

              {hasSubmenu && activeSubmenu === item.id && (
                <div className="absolute left-0 mt-0 w-64 bg-gray-900 border border-white/20 rounded-b-xl shadow-2xl z-50">
                  {item.submenu.map((subitem) => (
                    <button key={subitem.id} onClick={() => { onNavigate(subitem.id); setActiveSubmenu(null); }} className="w-full px-4 py-3 hover:bg-white/10 text-white text-left">
                      {subitem.label}
                      {subitem.badge && <span className="ml-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">2</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainMenu;
