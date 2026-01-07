import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import { MapPin, Heart, X, Info, Minus, Plus } from 'lucide-react';

const RadarView = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [distance, setDistance] = useState(1000); // en metros (1km por defecto)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const nearbyMembers = AI_MEMBERS_ENHANCED.filter(m => m.status === 'online').slice(0, 15);

  const getMemberPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 150 + (Math.sin(rotation * 0.02 + index) * 30);
    const x = 50 + Math.cos(angle) * (radius / 3);
    const y = 50 + Math.sin(angle) * (radius / 3);
    const z = Math.sin(angle + rotation * 0.01) * 50;
    const scale = 0.7 + (z + 50) / 100 * 0.6;
    return { x, y, scale, z };
  };

  const formatDistance = (meters) => {
    if (meters < 1000) return `${meters}m`;
    return `${(meters / 1000).toFixed(1)}km`;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header con selector de distancia */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 fire-text">🎯 Radar 3D</h2>
          
          {/* Selector de distancia */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setDistance(Math.max(40, distance - 100))}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--sexy-red)'
              }}
            >
              <Minus size={20} />
            </button>
            
            <div className="text-center">
              <div className="text-4xl font-bold" style={{ color: 'var(--sexy-gold)' }}>
                {formatDistance(distance)}
              </div>
              <div className="text-sm text-gray-400">Radio de búsqueda</div>
            </div>
            
            <button
              onClick={() => setDistance(Math.min(6000, distance + 100))}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--sexy-red)'
              }}
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Barra deslizante */}
          <div className="max-w-md mx-auto mb-4">
            <input
              type="range"
              min="40"
              max="6000"
              step="50"
              value={distance}
              onChange={(e) => setDistance(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--sexy-red) 0%, var(--sexy-red) ${((distance - 40) / 5960) * 100}%, var(--sexy-gray) ${((distance - 40) / 5960) * 100}%, var(--sexy-gray) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>40m</span>
              <span>6km</span>
            </div>
          </div>

          <p className="text-gray-400">
            {nearbyMembers.length} usuarios online en {formatDistance(distance)}
          </p>
        </div>

        {/* Radar 3D */}
        <div className="relative mx-auto rounded-3xl overflow-hidden" style={{
          width: '800px',
          height: '800px',
          maxWidth: '100%',
          background: 'radial-gradient(circle at center, rgba(255,8,68,0.1) 0%, rgba(10,10,10,0.95) 70%)',
          border: '3px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-strong)'
        }}>
          {/* Círculos concéntricos */}
          {[1, 2, 3, 4].map((circle) => (
            <div
              key={circle}
              className="absolute rounded-full border"
              style={{
                width: `${circle * 25}%`,
                height: `${circle * 25}%`,
                top: `${50 - (circle * 12.5)}%`,
                left: `${50 - (circle * 12.5)}%`,
                borderColor: `rgba(255,8,68,${0.3 - circle * 0.05})`,
                borderWidth: '1px'
              }}
            />
          ))}

          {/* Líneas de radar */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `conic-gradient(
                from ${rotation}deg at 50% 50%,
                transparent 0deg,
                rgba(255,8,68,0.3) 30deg,
                rgba(255,184,0,0.2) 60deg,
                transparent 90deg
              )`
            }}
          />

          {/* Centro */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full fire-pulse" style={{
            background: 'var(--gradient-primary)',
            boxShadow: '0 0 30px rgba(255,8,68,0.8)'
          }} />

          {/* Miembros con fotos reales */}
          {nearbyMembers.map((member, index) => {
            const pos = getMemberPosition(index, nearbyMembers.length);
            
            return (
              <motion.div
                key={member.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: `translate(-50%, -50%) scale(${pos.scale})`,
                  zIndex: Math.round(pos.z + 50),
                  filter: `brightness(${0.7 + pos.scale * 0.6})`
                }}
                whileHover={{ scale: pos.scale * 1.2 }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative">
                  {/* Foto real del miembro */}
                  <img
                    src={member.media?.photos?.[0]}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{
                      borderColor: member.trustLevel === 'ELITE' ? 'var(--sexy-gold)' : 'var(--sexy-red)',
                      boxShadow: `0 0 20px ${member.trustLevel === 'ELITE' ? 'rgba(255,184,0,0.6)' : 'rgba(255,8,68,0.6)'}`
                    }}
                  />
                  
                  {/* Badge online */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{
                    boxShadow: '0 0 10px rgba(0,255,0,0.8)'
                  }} />
                  
                  {/* Distancia simulada */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{
                    background: 'rgba(0,0,0,0.8)',
                    color: 'var(--sexy-gold)',
                    fontSize: '10px'
                  }}>
                    {Math.floor(Math.random() * distance)}m
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Panel de información */}
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 rounded-xl p-6 w-80"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-strong)'
              }}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 right-2 text-white hover:text-red-500"
              >
                <X size={20} />
              </button>

              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={selectedMember.media?.photos?.[0]}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover border-2"
                  style={{ borderColor: 'var(--sexy-gold)' }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-sm text-gray-300">{selectedMember.age} años</p>
                  <div className="flex items-center text-xs mt-1" style={{ color: 'var(--sexy-gold)' }}>
                    <MapPin size={12} className="mr-1" />
                    {Math.floor(Math.random() * distance)}m
                  </div>
                </div>
              </div>

              {selectedMember.personalityTraits && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {selectedMember.personalityTraits.map((trait, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full" style={{
                        background: 'rgba(255,184,0,0.2)',
                        color: 'var(--sexy-gold)',
                        border: '1px solid rgba(255,184,0,0.3)'
                      }}>
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <button className="w-full py-2 rounded-lg font-bold transition-all" style={{
                  background: 'var(--gradient-primary)',
                  color: 'white'
                }}>
                  <Heart size={16} className="inline mr-2" />
                  Me Gusta
                </button>
                <button className="w-full py-2 rounded-lg font-bold transition-all" style={{
                  background: 'rgba(255,184,0,0.2)',
                  color: 'var(--sexy-gold)',
                  border: '1px solid rgba(255,184,0,0.3)'
                }}>
                  <Info size={16} className="inline mr-2" />
                  Ver Perfil
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Leyenda */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: 'var(--sexy-gold)' }} />
            <span className="text-gray-400">Elite</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: 'var(--sexy-red)' }} />
            <span className="text-gray-400">Verificado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-400">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarView;
