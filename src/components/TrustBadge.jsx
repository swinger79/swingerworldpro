import React from 'react';

const TrustBadge = ({ trustScore = 75, trustLevel = 'VERIFIED', size = 'sm' }) => {
  const config = {
    ELITE: { 
      color: 'from-yellow-500 to-amber-600', 
      icon: '👑', 
      label: 'Elite',
      glow: 'shadow-yellow-500/50'
    },
    VERIFIED: { 
      color: 'from-blue-500 to-indigo-600', 
      icon: '✓', 
      label: 'Verificado',
      glow: 'shadow-blue-500/50'
    },
    BASIC: { 
      color: 'from-gray-400 to-gray-500', 
      icon: '◆', 
      label: 'Básico',
      glow: 'shadow-gray-500/50'
    }
  };

  const c = config[trustLevel] || config.BASIC;
  const sizeClasses = {
    xs: 'text-[10px] px-1.5 py-0.5',
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <div className={`
      bg-gradient-to-r ${c.color} 
      ${sizeClasses[size]} 
      rounded-full font-bold text-white 
      shadow-lg ${c.glow}
      flex items-center gap-1 
      backdrop-blur-sm
      border border-white/20
      animate-pulse-subtle
    `}>
      <span className="text-base">{c.icon}</span>
      <span>{trustScore}%</span>
    </div>
  );
};

export default TrustBadge;
