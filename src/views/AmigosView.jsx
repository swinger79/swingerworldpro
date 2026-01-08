import React, { useState } from 'react';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import TrustBadge from '../components/TrustBadge';
import PerfilModal from '../components/PerfilModal';

const AmigosView = ({ onNavigate }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSendMessage = (miembro) => {
    if (onNavigate) {
      onNavigate('mensajes');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Todos mis amigos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_MEMBERS_ENHANCED.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="card-sexy overflow-hidden cursor-pointer"
          >
            <div className="relative h-64">
              <img
                src={member.media?.photos?.[0]}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <TrustBadge
                  trustScore={member.trustScore}
                  trustLevel={member.trustLevel}
                  size="sm"
                />
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-1">{member.name}, {member.age}</h3>
              <p className="text-sm text-gray-400 mb-3">{member.location}</p>

              <button
                className="w-full py-2 rounded-lg font-bold"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'white'
                }}
              >
                Ver Perfil
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <PerfilModal
          miembro={selectedMember}
          onClose={() => setSelectedMember(null)}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default AmigosView;
