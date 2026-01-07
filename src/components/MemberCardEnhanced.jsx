import React from 'react';
import { motion } from 'framer-motion';

const MemberCardEnhanced = ({ member, onClick }) => {
  // Calcular trust score simulado (en producción vendría del backend)
  const trustScore = member.trustScore || Math.floor(Math.random() * 30) + 70;
  
  const getTrustLevel = (score) => {
    if (score >= 80) return { level: 'ELITE', color: 'from-yellow-500 to-amber-600', icon: '👑' };
    if (score >= 60) return { level: 'VERIFIED', color: 'from-blue-500 to-indigo-600', icon: '✓' };
    return { level: 'BASIC', color: 'from-gray-400 to-gray-500', icon: '◆' };
  };

  const trust = getTrustLevel(trustScore);

  // Extraer traits de personalidad
  const getPersonalityTraits = () => {
    const traits = [];
    const interestsStr = member.interests?.join(' ').toLowerCase() || '';
    
    if (interestsStr.includes('aventur') || interestsStr.includes('viajar')) traits.push('Aventurero');
    if (interestsStr.includes('deporte') || interestsStr.includes('gym')) traits.push('Activo');
    if (interestsStr.includes('arte') || interestsStr.includes('música')) traits.push('Creativo');
    if (interestsStr.includes('lectura') || interestsStr.includes('cine')) traits.push('Cultural');
    
    return traits.length > 0 ? traits : ['Sociable'];
  };

  const traits = getPersonalityTraits();

  return (
    <motion.div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Imagen */}
      <div className="aspect-[3/4] relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Trust Badge - Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <div className={`bg-gradient-to-r ${trust.color} px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm`}>
            <span className="text-lg">{trust.icon}</span>
            <span className="text-white font-bold text-sm">{trustScore}%</span>
          </div>
        </div>

        {/* Verified Badge - Top Left */}
        {member.verified && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-blue-500 rounded-full p-2 shadow-lg">
              <span className="text-white text-lg">✓</span>
            </div>
          </div>
        )}

        {/* Info Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300">
                {member.age} años • {member.distance}
              </p>
            </div>
          </div>

          {/* Personality Traits */}
          {traits.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {traits.map((trait, idx) => (
                <span
                  key={idx}
                  className="bg-purple-500/30 backdrop-blur-sm text-purple-200 text-xs px-2 py-1 rounded-full border border-purple-400/30"
                >
                  {trait}
                </span>
              ))}
            </div>
          )}

          {/* Trust Level Badge */}
          <div className="flex items-center gap-2">
            <div className="bg-black/30 backdrop-blur-sm text-white tex
# Buscar el componente de tarjetas de miembro
cat > src/components/MemberCardEnhanced.jsx << 'EOF'
import React from 'react';
import { motion } from 'framer-motion';

const MemberCardEnhanced = ({ member, onClick }) => {
  // Calcular trust score simulado (en producción vendría del backend)
  const trustScore = member.trustScore || Math.floor(Math.random() * 30) + 70;
  
  const getTrustLevel = (score) => {
    if (score >= 80) return { level: 'ELITE', color: 'from-yellow-500 to-amber-600', icon: '👑' };
    if (score >= 60) return { level: 'VERIFIED', color: 'from-blue-500 to-indigo-600', icon: '✓' };
    return { level: 'BASIC', color: 'from-gray-400 to-gray-500', icon: '◆' };
  };

  const trust = getTrustLevel(trustScore);

  // Extraer traits de personalidad
  const getPersonalityTraits = () => {
    const traits = [];
    const interestsStr = member.interests?.join(' ').toLowerCase() || '';
    
    if (interestsStr.includes('aventur') || interestsStr.includes('viajar')) traits.push('Aventurero');
    if (interestsStr.includes('deporte') || interestsStr.includes('gym')) traits.push('Activo');
    if (interestsStr.includes('arte') || interestsStr.includes('música')) traits.push('Creativo');
    if (interestsStr.includes('lectura') || interestsStr.includes('cine')) traits.push('Cultural');
    
    return traits.length > 0 ? traits : ['Sociable'];
  };

  const traits = getPersonalityTraits();

  return (
    <motion.div
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Imagen */}
      <div className="aspect-[3/4] relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Trust Badge - Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <div className={`bg-gradient-to-r ${trust.color} px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm`}>
            <span className="text-lg">{trust.icon}</span>
            <span className="text-white font-bold text-sm">{trustScore}%</span>
          </div>
        </div>

        {/* Verified Badge - Top Left */}
        {member.verified && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-blue-500 rounded-full p-2 shadow-lg">
              <span className="text-white text-lg">✓</span>
            </div>
          </div>
        )}

        {/* Info Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300">
                {member.age} años • {member.distance}
              </p>
            </div>
          </div>

          {/* Personality Traits */}
          {traits.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {traits.map((trait, idx) => (
                <span
                  key={idx}
                  className="bg-purple-500/30 backdrop-blur-sm text-purple-200 text-xs px-2 py-1 rounded-full border border-purple-400/30"
                >
                  {trait}
                </span>
              ))}
            </div>
          )}

          {/* Trust Level Badge */}
          <div className="flex items-center gap-2">
            <div className="bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
              🛡️ {trust.level}
            </div>
            {member.responseRate && (
              <div className="bg-green-500/30 backdrop-blur-sm text-green-200 text-xs px-2 py-1 rounded-full border border-green-400/30">
                📱 {Math.round(member.responseRate * 100)}% responde
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCardEnhanced;
