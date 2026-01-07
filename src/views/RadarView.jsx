import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import { Radar, MapPin, Heart, X, Info } from 'lucide-react';

const RadarView = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [rotation, setRotation] = useState(0);
  const canvasRef = useRef(null);

  // Animación del radar
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Miembros online cercanos
  const nearbyMembers = AI_MEMBERS_ENHANCED.filter(m => m.status === 'online').slice(0, 15);

  // Calcular posiciones en círculo 3D
  const getMemberPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 150 + (Math.sin(rotation * 0.02 + index) * 30);
    const x = 50 + Math.cos(angle) * (radius / 3);
    const y = 50 + Math.sin(angle) * (radius / 3);
    const z = Math.sin(angle + rotation * 0.01) * 50;
    const scale = 0.7 + (z + 50) / 100 * 0.6;
    
    return { x, y, scale, z };
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 fire-text" style={{
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎯 Radar 3D
          </h2>
          <p className="text-gray-400">
            {nearbyMembers.length} usuarios online cerca de ti
          </p>
        </div>

        {/* Radar 3D Container */}
        <div className="relative mx-auto rounded-3xl overflow-hidden" style={{
          width: '800px',
          height: '800px',
          maxWidth: '100%',
          background: 'radial-gradient(circle at center, rgba(255,8,68,0.1) 0%, rgba(10,10,10,0.95) 70%)',
          border: '3px solid rgba(255,8,68,0.3)',
          boxShadow: '0 0 80px rgba(255,8,68,0.4), inset 0 0 100px rgba(0,0,0,0.8)'
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

          {/* Líneas de radar giratorio */}
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

          {/* Centro del radar */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full fire-pulse" style={{
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            boxShadow: '0 0 30px rgba(255,8,68,0.8)'
          }} />

          {/* Miembros en el radar */}
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
                  <img
                    src={member.media?.photos?.[0]}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{
                      borderColor: member.trustLevel === 'ELITE' ? '#FFB800' : '#FF0844',
                      boxShadow: `0 0 20px ${member.trustLevel === 'ELITE' ? 'rgba(255,184,0,0.6)' : 'rgba(255,8,68,0.6)'}`
                    }}
                  />
                  {/* Badge online */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{
                    boxShadow: '0 0 10px rgba(0,255,0,0.8)'
                  }} />
                  
                  {/* Distancia */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{
                    background: 'rgba(0,0,0,0.8)',
                    color: '#FFB800',
                    fontSize: '10px'
                  }}>
                    {member.distance}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Overlay de información */}
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 rounded-xl p-6 w-80"
              style={{
                background: 'linear-gradient(145deg, rgba(255,8,68,0.95) 0%, rgba(10,10,10,0.98) 100%)',
                border: '2px solid rgba(255,8,68,0.5)',
                boxShadow: '0 0 50px rgba(255,8,68,0.6)'
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
                  style={{ borderColor: '#FFB800' }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-sm text-gray-300">{selectedMember.age} años</p>
                  <div className="flex items-center text-xs mt-1" style={{ color: '#FFB800' }}>
                    <MapPin size={12} className="mr-1" />
                    {selectedMember.distance}
                  </div>
                </div>
              </div>

              {selectedMember.personalityTraits && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {selectedMember.personalityTraits.map((trait, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full" style={{
                        background: 'rgba(255,184,0,0.2)',
                        color: '#FFB800',
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
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  color: 'white'
                }}>
                  <Heart size={16} className="inline mr-2" />
                  Me Gusta
                </button>
                <button className="w-full py-2 rounded-lg font-bold transition-all" style={{
                  background: 'rgba(255,184,0,0.2)',
                  color: '#FFB800',
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
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFB800' }} />
            <span className="text-gray-400">Elite</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF0844' }} />
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
