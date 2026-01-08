import React from 'react';
import { X, MapPin, MessageCircle, Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TrustBadge from './TrustBadge';

const PerfilModal = ({ miembro, onClose, onSendMessage }) => {
  if (!miembro) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.95)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1E1E1E 0%, #2A1010 100%)',
            border: '2px solid rgba(255,8,68,0.5)',
            boxShadow: '0 20px 60px rgba(255,8,68,0.6)'
          }}
        >
          {/* Header con foto */}
          <div className="relative h-80">
            <img
              src={miembro.media?.photos?.[0] || miembro.foto}
              alt={miembro.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: 'rgba(0,0,0,0.8)',
                border: '2px solid rgba(255,8,68,0.5)'
              }}
            >
              <X size={24} color="white" />
            </button>

            <div className="absolute top-4 left-4">
              <TrustBadge
                trustScore={miembro.trustScore}
                trustLevel={miembro.trustLevel}
                size="md"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl font-bold text-white mb-2">{miembro.name}</h2>
              <div className="flex items-center gap-2 text-white">
                <MapPin size={18} />
                <span>{miembro.location}</span>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6">
            {/* Info básica */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl" style={{
                background: 'rgba(255,8,68,0.1)',
                border: '1px solid rgba(255,8,68,0.3)'
              }}>
                <p className="text-gray-400 text-sm">Edad</p>
                <p className="text-white font-bold text-xl">{miembro.age} años</p>
              </div>
              <div className="p-4 rounded-xl" style={{
                background: 'rgba(255,184,0,0.1)',
                border: '1px solid rgba(255,184,0,0.3)'
              }}>
                <p className="text-gray-400 text-sm">Tipo</p>
                <p className="text-white font-bold text-xl capitalize">{miembro.type}</p>
              </div>
            </div>

            {/* Rasgos de personalidad */}
            {miembro.personalityTraits && (
              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Personalidad</h3>
                <div className="flex flex-wrap gap-2">
                  {miembro.personalityTraits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium"
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

            {/* Bio */}
            {miembro.bio && (
              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Sobre mí</h3>
                <p className="text-gray-300">{miembro.bio}</p>
              </div>
            )}

            {/* Galería de fotos */}
            {miembro.media?.photos && miembro.media.photos.length > 1 && (
              <div className="mb-6">
                <h3 className="text-white font-bold mb-3">Más fotos</h3>
                <div className="grid grid-cols-3 gap-2">
                  {miembro.media.photos.slice(0, 6).map((foto, idx) => (
                    <img
                      key={idx}
                      src={foto}
                      alt={`Foto ${idx + 1}`}
                      className="aspect-square rounded-lg object-cover"
                      style={{
                        border: '2px solid rgba(255,8,68,0.3)'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Botones de acción */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onSendMessage && onSendMessage(miembro);
                  onClose();
                }}
                className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  color: 'white'
                }}
              >
                <MessageCircle size={20} />
                Enviar Mensaje
              </button>
              <button
                className="px-6 py-3 rounded-lg font-bold flex items-center justify-center"
                style={{
                  background: 'rgba(255,8,68,0.2)',
                  color: 'var(--sexy-red)',
                  border: '1px solid rgba(255,8,68,0.5)'
                }}
              >
                <Heart size={20} />
              </button>
              <button
                className="px-6 py-3 rounded-lg font-bold flex items-center justify-center"
                style={{
                  background: 'rgba(255,184,0,0.2)',
                  color: 'var(--sexy-gold)',
                  border: '1px solid rgba(255,184,0,0.5)'
                }}
              >
                <Star size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PerfilModal;
