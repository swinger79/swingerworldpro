import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Search, Calendar, PartyPopper, Building, MessageSquare, ChevronDown } from 'lucide-react';
import { MAIN_MENU } from '../../data/menuStructure';

const iconMap = { Home, Users, Search, Calendar, PartyPopper, Building, MessageSquare };

const MainMenu = ({ currentView, onNavigate }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(131,56,236,0.3) 0%, rgba(13,2,33,0.95) 100%)',
      borderBottom: '1px solid rgba(255,0,110,0.2)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 overflow-x-auto">
        {MAIN_MENU.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = currentView === item.id;
          const hasSubmenu = item.submenu?.length > 0;

          return (
            <div key={item.id} className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => hasSubmenu ? setActiveSubmenu(activeSubmenu === item.id ? null : item.id) : onNavigate(item.id)}
                className="flex items-center space-x-2 px-4 py-3 rounded-t-lg transition-all"
                style={{
                  background: isActive ? 'linear-gradient(135deg, #8338EC 0%, #FF006E 100%)' : 'transparent',
                  color: isActive ? 'white' : 'rgba(255,255,255,0.8)',
                  boxShadow: isActive ? '0 0 20px rgba(255,0,110,0.5)' : 'none',
                  borderBottom: isActive ? '2px solid #FF006E' : '2px solid transparent'
                }}
                onMouseEnter={(e) => !isActive && (e.currentTarget.style.background = 'rgba(255,0,110,0.15)')}
                onMouseLeave={(e) => !isActive && (e.currentTarget.style.background = 'transparent')}
              >
                {Icon && <Icon size={18} />}
                <span className="font-medium whitespace-nowrap">{item.label}</span>
                {hasSubmenu && <ChevronDown size={14} style={{ transform: activeSubmenu === item.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />}
              </motion.button>

              {hasSubmenu && activeSubmenu === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 mt-0 w-64 rounded-b-xl shadow-2xl z-50 overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(131,56,236,0.95) 0%, rgba(13,2,33,0.98) 100%)',
                    border: '1px solid rgba(255,0,110,0.3)',
                    boxShadow: '0 0 30px rgba(255,0,110,0.4)'
                  }}
                >
                  {item.submenu.map((subitem) => (
                    <button 
                      key={subitem.id} 
                      onClick={() => { onNavigate(subitem.id); setActiveSubmenu(null); }} 
                      className="w-full px-4 py-3 text-white text-left transition-all"
                      onMouseEnter={(e) => e.target.style.background = 'rgba(255,0,110,0.2)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      {subitem.label}
                      {subitem.badge && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-bold" style={{
                          background: 'linear-gradient(135deg, #FF006E 0%, #FB5607 100%)',
                          boxShadow: '0 0 10px rgba(255,0,110,0.6)'
                        }}>
                          2
                        </span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainMenu;
