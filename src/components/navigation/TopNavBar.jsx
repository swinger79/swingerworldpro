import React from 'react';
import { Search, Bell, MessageCircle, Crown } from 'lucide-react';

const TopNavBar = ({ currentUser, onNavigate, onShowPremium }) => {
  return (
    <div className="sticky top-0 z-40 px-4 py-3" style={{
      background: 'linear-gradient(135deg, #1A1A1A 0%, #2A1010 100%)',
      borderBottom: '2px solid rgba(255,8,68,0.4)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
    }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🔥</span>
            <div>
              <h1 className="text-2xl font-bold fire-text">Swinger World</h1>
              <p className="text-xs" style={{ color: 'var(--sexy-gold)' }}>Comunidad Elite</p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar usuarios, eventos, clubes..."
              className="pl-12 pr-4 py-2 rounded-full text-white"
              style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,8,68,0.3)',
                width: '400px'
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!currentUser.isPremium && (
            <button
              onClick={onShowPremium}
              className="px-4 py-2 rounded-lg font-bold flex items-center gap-2 fire-pulse"
              style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white'
              }}
            >
              <Crown size={20} />
              <span className="hidden md:inline">Hazte Premium</span>
            </button>
          )}

          <button className="relative">
            <MessageCircle size={24} style={{ color: 'var(--sexy-red)' }} />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white'
              }}>
              {currentUser.messages}
            </span>
          </button>

          <button className="relative">
            <Bell size={24} style={{ color: 'var(--sexy-red)' }} />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white'
              }}>
              {currentUser.notifications}
            </span>
          </button>

          <button
            onClick={() => onNavigate('perfil')}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-all"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              border: currentUser.isPremium ? '2px solid var(--sexy-gold)' : 'none'
            }}
          >
            {currentUser.isPremium && <Crown size={16} color="white" />}
            <span className="font-bold text-white">{currentUser.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
