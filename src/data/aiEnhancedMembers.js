// src/data/aiEnhancedMembers.js
import { members } from './members';

/**
 * Mejora los perfiles de miembros con datos de IA
 */
export const enhanceMembersWithAI = (membersList) => {
  return membersList.map(member => ({
    ...member,
    
    // Trust Score (simulado para demo)
    trustScore: Math.floor(Math.random() * 30) + 70, // 70-100
    verificationLevel: getTrustLevel(member),
    badges: getTrustBadges(member),
    
    // Personality Traits (extraídos de intereses)
    personalityTraits: extractPersonalityTraits(member.interests),
    
    // Compatibility Score (se calculará dinámicamente)
    compatibilityScore: null,
    
    // Enhanced Profile Data
    profileCompleteness: calculateProfileCompleteness(member),
    authenticityScore: Math.floor(Math.random() * 20) + 80, // 80-100
    
    // AI Insights
    aiInsights: {
      topInterests: member.interests.slice(0, 3),
      communicationStyle: getCommunicationStyle(member),
      activityLevel: getActivityLevel(member)
    }
  }));
};

// Helper functions
const getTrustLevel = (member) => {
  const score = Math.random();
  if (score > 0.7) return 'ELITE';
  if (score > 0.4) return 'VERIFIED';
  return 'BASIC';
};

const getTrustBadges = (member) => {
  const badges = ['verified_identity'];
  
  if (member.verified) badges.push('photo_verified');
  if (member.interests.length >= 5) badges.push('complete_profile');
  if (member.age >= 25) badges.push('experienced');
  
  return badges;
};

const extractPersonalityTraits = (interests) => {
  const traits = [];
  const interestsLower = interests.map(i => i.toLowerCase()).join(' ');
  
  if (interestsLower.includes('aventur') || interestsLower.includes('viajar')) {
    traits.push('Aventurero');
  }
  if (interestsLower.includes('deporte') || interestsLower.includes('gym')) {
    traits.push('Activo');
  }
  if (interestsLower.includes('arte') || interestsLower.includes('música')) {
    traits.push('Creativo');
  }
  if (interestsLower.includes('lectura') || interestsLower.includes('cine')) {
    traits.push('Cultural');
  }
  if (interestsLower.includes('cocina') || interestsLower.includes('gastronomía')) {
    traits.push('Gourmet');
  }
  
  return traits.length > 0 ? traits : ['Sociable'];
};

const calculateProfileCompleteness = (member) => {
  let score = 30; // Base score
  
  if (member.bio && member.bio.length > 50) score += 20;
  if (member.interests.length >= 3) score += 20;
  if (member.photos && member.photos.length >= 2) score += 15;
  if (member.verified) score += 15;
cat > src/components/TrustBadge.jsx << 'EOF'
// src/components/TrustBadge.jsx
import React from 'react';

const TrustBadge = ({ trustScore, verificationLevel, badges = [], size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const levelConfig = {
    ELITE: {
      color: 'from-yellow-500 to-amber-600',
      textColor: 'text-yellow-900',
      icon: '👑',
      label: 'Elite'
    },
    VERIFIED: {
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-900',
      icon: '✓',
      label: 'Verificado'
    },
    BASIC: {
      color: 'from-gray-400 to-gray-500',
      textColor: 'text-gray-900',
      icon: '◆',
      label: 'Básico'
    }
  };

  const config = levelConfig[verificationLevel] || levelConfig.BASIC;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Trust Score Badge */}
      <div
        className={`
          bg-gradient-to-r ${config.color}
          ${sizeClasses[size]}
          rounded-full
          font-semibold
          ${config.textColor}
          shadow-lg
          flex items-center gap-1.5
          backdrop-blur-sm
        `}
      >
        <span className="text-lg">{config.icon}</span>
        <span>{config.label}</span>
        <span className="font-bold">{trustScore}%</span>
      </div>

      {/* Individual Badges */}
      {badges.includes('verified_identity') && (
        <div className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span>🔐</span>
          <span>ID Verificado</span>
        </div>
      )}

      {badges.includes('photo_verified') && (
        <div className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span>📸</span>
          <span>Foto Real</span>
        </div>
      )}

      {badges.includes('complete_profile') && (
        <div className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span>✨</span>
          <span>Perfil Completo</span>
        </div>
      )}

      {badges.includes('elite_trust') && (
        <div className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span>⭐</span>
          <span>Confianza Élite</span>
        </div>
      )}
    </div>
  );
};

export default TrustBadge;
