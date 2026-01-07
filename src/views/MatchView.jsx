import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import TrustBadge from '../components/TrustBadge';
import { Heart, X, Star, MapPin, Info, Zap, MessageCircle } from 'lucide-react';

const MatchView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatchAnimation, setShowMatchAnimation] = useState(false);
  const [matchedUser, setMatchedUser] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const currentMember = AI_MEMBERS_ENHANCED[currentIndex];
  const compatibilityScore = 70 + Math.floor(Math.random() * 30);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    
    if (direction === 'right') {
      // Simular match (70% probabilidad)
      if (Math.random() > 0.3) {
        setMatchedUser(currentMember);
        setShowMatchAnimation(true);
        setTimeout(() => {
          setShowMatchAnimation(false);
          nextCard();
        }, 3000);
      } else {
        nextCard();
      }
    } else {
      nextCard();
    }
  };

  const nextCard = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % AI_MEMBERS_ENHANCED.length);
      setSwipeDirection(null);
    }, 300);
  };

  const handleSuperLike = () => {
    setMatchedUser(currentMember);
    setShowMatchAnimation(true);
    setTimeout(() => {
      setShowMatchAnimation(false);
      nextCard();
    }, 3000);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 fire-text" style={{
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            💘 Match
          </h2>
          <p className="text-gray-400">
            {AI_MEMBERS_ENHANCED.length - currentIndex} perfiles disponibles
          </p>
        </div>

        {/* Card Stack */}
        <div className="relative" style={{ height: '700px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0, rotateY: 90 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotateY: 0,
                x: swipeDirection === 'left' ? -1000 : swipeDirection === 'right' ? 1000 : 0,
                rotate: swipeDirection === 'left' ? -30 : swipeDirection === 'right' ? 30 : 0
              }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(255,8,68,0.1) 0%, rgba(10,10,10,0.95) 100%)',
                border: '3px solid rgba(255,8,68,0.3)',
                boxShadow: '0 20px 60px rgba(255,8,68,0.4)'
              }}
            >
              {/* Imagen principal */}
              <div className="relative h-[500px]">
                <img
                  src={currentMember.media?.photos?.[0]}
                  alt={currentMember.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Degradado inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Trust Badge - Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <TrustBadge
                    trustScore={currentMember.trustScore}
                    trustLevel={currentMember.trustLevel}
                    size="md"
                  />
                </div>

                {/* Premium Badge - Top Left */}
                {currentMember.premium && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full font-bold text-sm fire-pulse" style={{
                    background: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)',
                    color: 'white',
                    boxShadow: '0 0 20px rgba(255,184,0,0.6)'
                  }}>
                    👑 Premium
                  </div>
                )}

                {/* Online Badge */}
                {currentMember.status === 'online' && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full font-bold text-sm" style={{
                    background: 'rgba(0,255,0,0.2)',
                    color: '#00ff00',
                    border: '1px solid rgba(0,255,0,0.3)',
                    marginTop: currentMember.premium ? '50px' : '0'
                  }}>
                    <div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
                    Online
                  </div>
                )}

                {/* Info Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {currentMember.name}, {currentMember.age}
                    </h3>
                    <div className="flex items-center text-gray-300">
                      <MapPin size={16} className="mr-1" />
                      <span>{currentMember.location}</span>
                    </div>
                  </div>

                  {/* Personality Traits */}
                  {currentMember.personalityTraits && currentMember.personalityTraits.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {currentMember.personalityTraits.map((trait, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1 rounded-full font-medium"
                          style={{
                            background: 'rgba(255,184,0,0.2)',
                            color: '#FFB800',
                            border: '1px solid rgba(255,184,0,0.3)'
                          }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* AI Insights */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-xs px-2 py-1 rounded-full" style={{
                      background: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      💬 {currentMember.aiInsights?.communicationStyle}
                    </div>
                    {currentMember.responseRate > 0.7 && (
                      <div className="text-xs px-2 py-1 rounded-full" style={{
                        background: 'rgba(0,255,0,0.2)',
                        color: '#00ff00',
                        border: '1px solid rgba(0,255,0,0.3)'
                      }}>
                        ⚡ {Math.round(currentMember.responseRate * 100)}% responde
                      </div>
                    )}
                    <div className="text-xs px-2 py-1 rounded-full" style={{
                      background: 'rgba(255,8,68,0.2)',
                      color: '#FF0844',
                      border: '1px solid rgba(255,8,68,0.3)'
                    }}>
                      📊 {currentMember.profileCompleteness}% completo
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info Section */}
              <div className="p-6 space-y-4">
                {/* Interests */}
                {currentMember.interests && currentMember.interests.length > 0 && (
                  <div>
                    <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                      <Star size={16} style={{ color: '#FFB800' }} />
                      Intereses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentMember.interests.slice(0, 6).map((interest, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,8,68,0.1)',
                            color: '#FF0844',
                            border: '1px solid rgba(255,8,68,0.2)'
                          }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compatibility Score */}
                <div className="rounded-lg p-3" style={{
                  background: 'rgba(255,184,0,0.1)',
                  border: '1px solid rgba(255,184,0,0.2)'
                }}>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">Compatibilidad IA:</span>
                    <span className="text-2xl font-bold" style={{ color: '#FFB800' }}>
                      {compatibilityScore}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Match Animation Overlay */}
          <AnimatePresence>
            {showMatchAnimation && matchedUser && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="fixed inset-0 z-50 flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(255,8,68,0.9) 0%, rgba(10,10,10,0.98) 70%)'
                }}
              >
                <div className="text-center p-8">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                    className="text-9xl mb-6"
                  >
                    💘
                  </motion.div>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-6xl font-bold mb-4 fire-text" style={{
                      background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      ¡ES UN MATCH!
                    </h2>
                    
                    <div className="text-4xl font-bold mb-2" style={{ color: '#FFB800' }}>
                      {compatibilityScore}%
                    </div>
                    
                    <p className="text-xl text-white mb-6">
                      Tú y <span className="font-bold">{matchedUser.name}</span> os gustáis
                    </p>

                    <div className="space-y-2 text-sm text-gray-300">
                      <div>✨ Alta compatibilidad detectada</div>
                      <div>💬 Excelente química de personalidad</div>
                      <div>🎯 Intereses muy alineados</div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-3 rounded-full font-bold text-lg"
                      style={{
                        background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                        color: 'white',
                        boxShadow: '0 0 30px rgba(255,8,68,0.6)'
                      }}
                    >
                      <MessageCircle size={20} className="inline mr-2" />
                      Enviar mensaje
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all"
            style={{
              background: 'rgba(255,8,68,0.2)',
              border: '3px solid #FF0844',
              color: '#FF0844',
              boxShadow: '0 0 20px rgba(255,8,68,0.3)'
            }}
          >
            <X size={32} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSuperLike}
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all"
            style={{
              background: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)',
              border: '3px solid #FFB800',
              color: 'white',
              boxShadow: '0 0 30px rgba(255,184,0,0.6)'
            }}
          >
            <Star size={32} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe('right')}
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl transition-all"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              border: '3px solid #FF0844',
              color: 'white',
              boxShadow: '0 0 40px rgba(255,8,68,0.6)'
            }}
          >
            <Heart size={36} />
          </motion.button>
        </div>

        {/* Instructions */}
        <div className="mt-8 flex justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <X size={16} style={{ color: '#FF0844' }} />
            <span>Pasar</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} style={{ color: '#FFB800' }} />
            <span>Super Like</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart size={16} style={{ color: '#FF0844' }} />
            <span>Me Gusta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchView;
