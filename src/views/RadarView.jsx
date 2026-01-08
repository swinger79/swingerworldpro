import React, { useState, useEffect } from 'react';
import { MapPin, Heart, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TODOS_MIEMBROS from '../data/memberGenerator';
import TrustBadge from '../components/TrustBadge';

const RadarView = ({ onNavigate }) => {
  const [distance, setDistance] = useState(1000);
  const [selectedUser, setSelectedUser] = useState(null);
  const [radarAngle, setRadarAngle] = useState(0);

  // Obtener usuarios online
  const onlineUsers = TODOS_MIEMBROS
    .filter(m => m.status === 'online')
    .slice(0, 50)
    .map((user, idx) => ({
      ...user,
      distance: Math.floor(Math.random() * distance),
      angle: (idx * 360 / 50),
      x: 50 + Math.cos((idx * 360 / 50) * Math.PI / 180) * (30 + Math.random() * 15),
      y: 50 + Math.sin((idx * 360 / 50) * Math.PI / 180) * (30 + Math.random() * 15)
    }));

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarAngle(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold fire-text mb-2">🎯 Radar 3D</h2>
          <p className="text-gray-400">
            {onlineUsers.length} usuarios online cerca de ti
          </p>
        </div>

        {/* Selector de distancia */}
        <div className="card-sexy max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white font-bold">Radio de búsqueda:</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--sexy-gold)' }}>
              {distance < 1000 ? `${distance}m` : `${(distance/1000).toFixed(1)}km`}
            </span>
          </div>
          <input
            type="range"
            min="40"
            max="6000"
            value={distance}
            onChange={(e) => setDistance(parseInt(e.target.value))}
            className="w-full"
            style={{
              accentColor: 'var(--sexy-red)'
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>40m</span>
            <span>6km</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Radar 3D */}
          <div className="lg:col-span-2">
            <div className="card-sexy aspect-square relative overflow-hidden" style={{
              background: 'radial-gradient(circle, rgba(255,8,68,0.1) 0%, rgba(0,0,0,0.9) 100%)'
            }}>
              {/* Círculos concéntricos */}
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: `${50 - i * 12.5}%`,
                    left: `${50 - i * 12.5}%`,
                    width: `${i * 25}%`,
                    height: `${i * 25}%`,
                    border: '1px solid rgba(255,8,68,0.3)'
                  }}
                />
              ))}

              {/* Línea de barrido del radar */}
              <div
                className="absolute top-1/2 left-1/2 origin-left"
                style={{
                  width: '50%',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(255,8,68,0.8) 0%, transparent 100%)',
                  transform: `rotate(${radarAngle}deg)`,
                  boxShadow: '0 0 20px rgba(255,8,68,0.6)'
                }}
              />

              {/* Centro */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: 'var(--sexy-red)',
                  boxShadow: '0 0 20px rgba(255,8,68,0.8)'
                }}
              />

              {/* Usuarios */}
              {onlineUsers.map((user) => (
                <motion.div
                  key={user.id}
                  onClick={() => handleUserClick(user)}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${user.x}%`,
                    top: `${user.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="relative">
                    <img
                      src={user.media?.photos?.[0]}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                      style={{
                        border: `3px solid ${
                          user.trustLevel === 'ELITE' ? '#FFB800' : '#4169E1'
                        }`,
                        boxShadow: '0 0 15px rgba(0,255,0,0.6)'
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-pulse"
                      style={{
                        border: '2px solid #000'
                      }}
                    />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold whitespace-nowrap px-2 py-1 rounded"
                      style={{
                        background: 'rgba(0,0,0,0.9)',
                        color: 'var(--sexy-gold)'
                      }}
                    >
                      {user.distance}m
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Panel de información */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedUser ? (
                <motion.div
                  key="user-info"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="card-sexy"
                >
                  <img
                    src={selectedUser.media?.photos?.[0]}
                    alt={selectedUser.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{selectedUser.name}</h3>
                    <TrustBadge
                      trustScore={selectedUser.trustScore}
                      trustLevel={selectedUser.trustLevel}
                      size="sm"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <MapPin size={16} style={{ color: 'var(--sexy-gold)' }} />
                    <span className="text-sm">{selectedUser.distance}m de distancia</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{selectedUser.bio}</p>

                  {selectedUser.personalityTraits && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedUser.personalityTraits.map((trait, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(255,8,68,0.2)',
                            color: 'var(--sexy-gold)',
                            border: '1px solid rgba(255,184,0,0.5)'
                          }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      className="flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                        color: 'white'
                      }}
                    >
                      <Heart size={16} />
                      Me Gusta
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(null);
                        if (onNavigate) onNavigate('gente');
                      }}
                      className="flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-2"
                      style={{
                        background: 'rgba(255,184,0,0.2)',
                        color: 'var(--sexy-gold)',
                        border: '1px solid rgba(255,184,0,0.5)'
                      }}
                    >
                      <Eye size={16} />
                      Ver Perfil
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="no-selection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="card-sexy text-center py-12"
                >
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-gray-400">
                    Haz click en un usuario para ver su información
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarView;
