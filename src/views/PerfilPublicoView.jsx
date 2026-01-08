import React, { useState } from 'react';
import { Camera, Video, MapPin, Users, Star, MessageCircle, Heart, UserPlus, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import TrustBadge from '../components/TrustBadge';

const PerfilPublicoView = ({ miembro, onNavigate, onBack }) => {
  const [activeTab, setActiveTab] = useState('fotos');

  if (!miembro) return null;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Botón volver */}
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all"
          style={{
            background: 'rgba(255,8,68,0.2)',
            color: 'var(--sexy-red)',
            border: '1px solid rgba(255,8,68,0.5)'
          }}
        >
          <ArrowLeft size={20} />
          Volver
        </button>

        {/* Header del perfil */}
        <div className="card-sexy p-8 mb-6">
          <div className="flex items-start gap-6">
            <img
              src={miembro.media?.photos?.[0]}
              alt={miembro.name}
              className="w-32 h-32 rounded-2xl object-cover"
              style={{
                border: '3px solid var(--sexy-gold)',
                boxShadow: 'var(--glow-gold)'
              }}
            />
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-white">{miembro.name}</h1>
                <TrustBadge
                  trustScore={miembro.trustScore}
                  trustLevel={miembro.trustLevel}
                  size="lg"
                />
              </div>
              
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <MapPin size={18} style={{ color: 'var(--sexy-gold)' }} />
                <span>{miembro.location}</span>
              </div>

              {miembro.status === 'online' && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                  background: 'rgba(0,255,0,0.2)',
                  border: '1px solid #00ff00'
                }}>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-green-500">Online ahora</span>
                </div>
              )}
              
              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate && onNavigate('mensajes')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white'
                  }}
                >
                  <MessageCircle size={20} />
                  Enviar Mensaje
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                  style={{
                    background: 'rgba(255,8,68,0.2)',
                    color: 'var(--sexy-red)',
                    border: '1px solid rgba(255,8,68,0.5)'
                  }}
                >
                  <Heart size={20} />
                  Me Gusta
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                  style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)',
                    border: '1px solid rgba(255,184,0,0.5)'
                  }}
                >
                  <UserPlus size={20} />
                  Añadir Amigo
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda - Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Información básica */}
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">📍 Información</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Ubicación:</p>
                  <p className="text-white font-medium">{miembro.location}</p>
                </div>
                <div>
                  <p className="text-gray-400">Edad:</p>
                  <p className="text-white font-medium">{miembro.age} años</p>
                </div>
                <div>
                  <p className="text-gray-400">Tipo:</p>
                  <p className="text-white font-medium capitalize">{miembro.type}</p>
                </div>
                {miembro.ultimaConexion && (
                  <div>
                    <p className="text-gray-400">Última conexión:</p>
                    <p style={{ color: 'var(--sexy-gold)' }} className="font-medium">{miembro.ultimaConexion}</p>
                  </div>
                )}
                {miembro.trustScore && (
                  <div>
                    <p className="text-gray-400">Puntuación de confianza:</p>
                    <p className="text-white font-medium">{miembro.trustScore}%</p>
                  </div>
                )}
              </div>
            </div>

            {/* Rasgos de personalidad */}
            {miembro.personalityTraits && miembro.personalityTraits.length > 0 && (
              <div className="card-sexy">
                <h3 className="text-xl font-bold text-white mb-4">✨ Personalidad</h3>
                <div className="flex flex-wrap gap-2">
                  {miembro.personalityTraits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 rounded-full text-sm font-medium"
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
              </div>
            )}

            {/* Fantasías */}
            {miembro.fantasias && miembro.fantasias.length > 0 && (
              <div className="card-sexy">
                <h3 className="text-xl font-bold text-white mb-4">🔥 Fantasías</h3>
                <div className="space-y-2">
                  {miembro.fantasias.map((fantasia, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span style={{ color: 'var(--sexy-red)' }}>•</span>
                      <span className="text-white">{fantasia}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Estadísticas */}
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">📊 Estadísticas</h3>
              <div className="space-y-3">
                {miembro.likesRecibidos && (
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{
                    background: 'rgba(255,8,68,0.1)',
                    border: '1px solid rgba(255,8,68,0.3)'
                  }}>
                    <span className="text-gray-200">Likes recibidos:</span>
                    <span className="font-bold text-white">{miembro.likesRecibidos}</span>
                  </div>
                )}
                {miembro.mensajesRecibidos && (
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{
                    background: 'rgba(255,184,0,0.1)',
                    border: '1px solid rgba(255,184,0,0.3)'
                  }}>
                    <span className="text-gray-200">Mensajes recibidos:</span>
                    <span className="font-bold text-white">{miembro.mensajesRecibidos}</span>
                  </div>
                )}
                {miembro.encuentrosRealizados && (
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{
                    background: 'rgba(255,8,68,0.1)',
                    border: '1px solid rgba(255,8,68,0.3)'
                  }}>
                    <span className="text-gray-200">Encuentros:</span>
                    <span className="font-bold text-white">{miembro.encuentrosRealizados}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            {miembro.bio && (
              <div className="card-sexy">
                <h3 className="text-xl font-bold text-white mb-4">💬 Sobre mí</h3>
                <p className="text-gray-300 leading-relaxed">{miembro.bio}</p>
              </div>
            )}

            {/* Tabs */}
            <div className="card-sexy">
              <div className="flex gap-4 mb-6" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setActiveTab('fotos')}
                  className="px-4 py-3 font-bold flex items-center gap-2 transition-all"
                  style={{
                    color: activeTab === 'fotos' ? 'var(--sexy-red)' : 'white',
                    borderBottom: activeTab === 'fotos' ? '3px solid var(--sexy-red)' : 'none'
                  }}
                >
                  <Camera size={20} />
                  Fotos ({miembro.media?.photos?.length || 0})
                </button>
                {miembro.media?.videos && (
                  <button
                    onClick={() => setActiveTab('videos')}
                    className="px-4 py-3 font-bold flex items-center gap-2 transition-all"
                    style={{
                      color: activeTab === 'videos' ? 'var(--sexy-red)' : 'white',
                      borderBottom: activeTab === 'videos' ? '3px solid var(--sexy-red)' : 'none'
                    }}
                  >
                    <Video size={20} />
                    Videos ({miembro.media.videos})
                  </button>
                )}
              </div>

              {/* Galería de fotos */}
              {activeTab === 'fotos' && miembro.media?.photos && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {miembro.media.photos.map((foto, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-xl overflow-hidden cursor-pointer"
                      style={{
                        border: '2px solid rgba(255,8,68,0.3)'
                      }}
                    >
                      <img
                        src={foto}
                        alt={`Foto ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Videos */}
              {activeTab === 'videos' && miembro.media?.videos && (
                <div className="text-center py-12">
                  <Video size={48} className="mx-auto mb-4" style={{ color: 'var(--sexy-gold)' }} />
                  <p className="text-gray-400">
                    {miembro.name} tiene {miembro.media.videos} videos
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPublicoView;
