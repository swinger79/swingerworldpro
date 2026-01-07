import React from 'react';
import { Image, Video, MapPin, Smile } from 'lucide-react';
import TrustBadge from '../components/TrustBadge';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';

const InicioView = () => {
  const posts = [
    {
      id: 1,
      author: AI_MEMBERS_ENHANCED[0],
      content: '¡Feliz año nuevo! Empezamos el 2026 con muchas ganas de conocer gente nueva 🔥',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600',
      likes: 45,
      comments: 12,
      time: 'hace 2 horas'
    },
    {
      id: 2,
      author: AI_MEMBERS_ENHANCED[1],
      content: 'Este fin de semana vamos a una fiesta privada en Barcelona. ¿Alguien más va? 💃🕺',
      likes: 32,
      comments: 8,
      time: 'hace 5 horas'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Crear publicación */}
      <div className="rounded-xl p-6" style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)'
      }}>
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt="Usuario"
            className="w-12 h-12 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="¿En qué estás pensando?"
            className="flex-1 px-4 py-3 rounded-full text-white placeholder-gray-500"
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid var(--border-subtle)'
            }}
          />
        </div>

        <div className="flex items-center gap-4 pt-4" style={{
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all" style={{
            color: 'var(--sexy-red)'
          }}>
            <Image size={20} />
            <span>Foto</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all" style={{
            color: 'var(--sexy-red)'
          }}>
            <Video size={20} />
            <span>Video</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all" style={{
            color: 'var(--sexy-red)'
          }}>
            <MapPin size={20} />
            <span>Ubicación</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all" style={{
            color: 'var(--sexy-red)'
          }}>
            <Smile size={20} />
            <span>Sentimiento</span>
          </button>
        </div>
      </div>

      {/* Feed de publicaciones */}
      {posts.map(post => (
        <div key={post.id} className="rounded-xl overflow-hidden" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)'
        }}>
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.media?.photos?.[0]}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-white">{post.author.name}</h4>
                  <TrustBadge
                    trustScore={post.author.trustScore}
                    trustLevel={post.author.trustLevel}
                    size="xs"
                  />
                </div>
                <p className="text-sm text-gray-400">{post.time}</p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="px-4 pb-4">
            <p className="text-white mb-4">{post.content}</p>
          </div>

          {/* Imagen */}
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full h-96 object-cover"
            />
          )}

          {/* Acciones */}
          <div className="p-4 flex items-center justify-between" style={{
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
              <span style={{ color: 'var(--sexy-red)' }}>❤️</span>
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span>💬</span>
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span>🔗</span>
              <span>Compartir</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InicioView;
