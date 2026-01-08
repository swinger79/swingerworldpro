import React from 'react';
import { Shield, CheckCircle, Star } from 'lucide-react';

const VerificationBadge = ({ level, size = 'md', showLabel = true }) => {
  const badges = {
    unverified: { icon: Shield, color: '#6c757d', label: 'No verificado', glow: 'none' },
    pending: { icon: Shield, color: '#ffc107', label: 'Pendiente', glow: '0 0 10px rgba(255,193,7,0.5)' },
    verified: { icon: CheckCircle, color: '#28a745', label: 'Verificado', glow: '0 0 10px rgba(40,167,69,0.5)' },
    premium: { icon: Star, color: '#FFB800', label: 'Premium Verificado', glow: '0 0 15px rgba(255,184,0,0.6)' }
  };

  const badge = badges[level] || badges.unverified;
  const Icon = badge.icon;
  
  const sizes = {
    sm: 16,
    md: 24,
    lg: 32
  };

  return (
    <div className="inline-flex items-center gap-2">
      <Icon 
        size={sizes[size]} 
        style={{ 
          color: badge.color,
          filter: `drop-shadow(${badge.glow})`
        }} 
      />
      {showLabel && (
        <span className="text-sm font-bold" style={{ color: badge.color }}>
          {badge.label}
        </span>
      )}
    </div>
  );
};

export default VerificationBadge;
