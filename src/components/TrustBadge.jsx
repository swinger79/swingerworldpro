import React from 'react';
import { Shield, Star, Award } from 'lucide-react';

const TrustBadge = ({ trustScore, trustLevel, size = 'md' }) => {
  const sizes = {
    xs: { icon: 12, padding: 'px-2 py-1', text: 'text-xs' },
    sm: { icon: 14, padding: 'px-2 py-1', text: 'text-xs' },
    md: { icon: 16, padding: 'px-3 py-1', text: 'text-sm' },
    lg: { icon: 20, padding: 'px-4 py-2', text: 'text-base' }
  };

  const config = sizes[size] || sizes.md;

  const getColor = () => {
    if (trustLevel === 'ELITE') return '#FFB800';
    if (trustLevel === 'VERIFIED') return '#4169E1';
    return '#808080';
  };

  const getIcon = () => {
    if (trustLevel === 'ELITE') return Award;
    if (trustLevel === 'VERIFIED') return Shield;
    return Star;
  };

  const Icon = getIcon();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full font-bold ${config.padding} ${config.text}`}
      style={{
        background: 'rgba(0,0,0,0.8)',
        border: `2px solid ${getColor()}`,
        color: getColor()
      }}
    >
      <Icon size={config.icon} />
      <span>{trustScore}%</span>
    </div>
  );
};

export default TrustBadge;
