import React from 'react';

const TrustBadge = ({ trustScore = 75, trustLevel = 'VERIFIED', size = 'sm' }) => {
  const config = {
    ELITE: { color: 'from-yellow-500 to-amber-600', icon: '👑', label: 'Elite' },
    VERIFIED: { color: 'from-blue-500 to-indigo-600', icon: '✓', label: 'Verificado' },
    BASIC: { color: 'from-gray-400 to-gray-500', icon: '◆', label: 'Básico' }
  };

  const c = config[trustLevel] || config.BASIC;
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';

  return (
    <div className={`bg-gradient-to-r ${c.color} ${sizeClass} rounded-full font-bold text-white shadow-lg flex items-center gap-1 backdrop-blur-sm`}>
      <span>{c.icon}</span>
      <span>{trustScore}%</span>
    </div>
  );
};

export default TrustBadge;
