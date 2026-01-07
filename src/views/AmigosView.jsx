import React from 'react';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import TrustBadge from '../components/TrustBadge';
import { MapPin, MessageCircle, Star } from 'lucide-react';

const AmigosView = () => {
  const friends = AI_MEMBERS_ENHANCED.slice(0, 12);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Todos mis amigos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend) => (
          <div key={friend.id} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl overflow-hidden border border-white/10">
            <div className="relative h-48">
              <img src={friend.media?.photos?.[0]} alt={friend.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2">
                <TrustBadge trustScore={friend.trustScore} trustLevel={friend.trustLevel} size="sm" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{friend.name}, {friend.age}</h3>
              <div className="flex items-center text-purple-300 text-sm mb-3">
                <MapPin size={14} className="mr-1" />{friend.location}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                  <MessageCircle size={16} /> Mensaje
                </button>
                <button className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 py-2 px-3 rounded-lg">
                  <Star size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmigosView;
