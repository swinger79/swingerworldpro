import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, MessageCircle, Star, MapPin, UserPlus } from 'lucide-react';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import TrustBadge from '../components/TrustBadge';

const MatchView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [matchedUser, setMatchedUser] = useState(null);

  const currentMember = AI_MEMBERS_ENHANCED[currentIndex];

  const handleSwipe = (liked) => {
    setDirection(liked ? 'right' : 'left');
    
    if (liked && Math.random() > 0.5) {
      setMatchedUser(currentMember);
      setShowMatchModal(true);
    }
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % AI_MEMBERS_ENHANCED.length);
      setDirection(null);
    }, 300);
  };

  const handleSendMessage = () => {
    alert('Abriendo chat con ' + matchedUser.name);
    setShowMatchModal(false);
  };

  const handleAddFriend = () => {
    alert('Solicitud de amistad enviada a ' + matchedUser.name);
    setShowMatchModal(false);
  };

  if (!currentMember) return null;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 fire-text">💘 Match</h2>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.8, opacity: 0, x: direction === 'right' ? 300 : direction === 'left' ? -300 : 0 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.8, opacity: 0, x: direction === 'right' ? 300 : -300 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              height: '600px',
              background: 'var(--bg-card)',
              border: '2px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-strong)'
            }}
          >
            {/* Foto REAL */}
            <img
              src={currentMember.media?.photos?.[0]}
              alt={currentMember.name}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Trust Badge */}
            <div className="absolute top-4 right-4">
              <TrustBadge
                trustScore={currentMember.trustScore}
                trustLevel={currentMember.trustLevel}
                size="md"
              />
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">{currentMember.name}, {currentMember.age}</h3>
              <div className="flex items-center text-sm mb-3">
                <MapPin size={16} className="mr-1" />
                {currentMember.location}
              </div>

              {currentMember.personalityTraits && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentMember.personalityTraits.map((trait, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: 'rgba(255,8,68,0.2)',
                        color: 'var(--sexy-gold)',
                        border: '1px solid rgba(255,184,0,0.3)'
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-gray-300 text-sm">{currentMember.bio}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botones */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe(false)}
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '3px solid #FF0844',
              boxShadow: '0 0 20px rgba(255,8,68,0.3)'
            }}
          >
            <X size={32} color="#FF0844" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe(true)}
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              boxShadow: '0 0 30px rgba(255,8,68,0.5)'
            }}
          >
            <Heart size={40} color="white" fill="white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '3px solid #FFB800',
              boxShadow: '0 0 20px rgba(255,184,0,0.3)'
            }}
          >
            <Star size={28} color="#FFB800" />
          </motion.button>
        </div>

        {/* Match Modal */}
        {showMatchModal && matchedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.9)' }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-8 rounded-3xl max-w-md"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-strong)'
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-8xl mb-4"
              >
                💘
              </motion.div>

              <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
                ¡ES UN MATCH!
              </h2>

              <p className="text-gray-300 mb-6">
                A {matchedUser.name} también le gustas
              </p>

              <div className="flex gap-3">
                <button
                  onClick={handleSendMessage}
                  className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white'
                  }}
                >
                  <MessageCircle size={20} />
                  Enviar Mensaje
                </button>

                <button
                  onClick={handleAddFriend}
                  className="flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)',
                    border: '1px solid rgba(255,184,0,0.3)'
                  }}
                >
                  <UserPlus size={20} />
                  Añadir Amigo
                </button>
              </div>

              <button
                onClick={() => setShowMatchModal(false)}
                className="mt-4 text-gray-400 hover:text-white transition-colors"
              >
                Continuar buscando
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchView;
