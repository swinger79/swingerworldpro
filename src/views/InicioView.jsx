import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, Calendar, TrendingUp, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import TODOS_MIEMBROS from '../data/memberGenerator';

const InicioView = ({ onNavigate }) => {
  const posts = [
    {
      id: 1,
      author: TODOS_MIEMBROS[0],
      timestamp: 'hace 2 horas',
      content: '¡Increíble fiesta anoche en Barcelona! Conocimos gente maravillosa 🔥',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600',
      likes: 45,
      comments: 12,
      type: 'evento'
    },
    {
      id: 2,
      author: TODOS_MIEMBROS[1],
      timestamp: 'hace 5 horas',
      content: 'Buscamos pareja para intercambio este fin de semana en Madrid. Solo verificados 💎',
      likes: 28,
      comments: 8,
      type: 'busqueda'
    },
    {
      id: 3,
      author: TODOS_MIEMBROS[2],
      timestamp: 'hace 1 día',
      content: 'Nueva en la plataforma. ¡Deseando conocer gente interesante! 😊',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
      likes: 67,
      comments: 23,
      type: 'presentacion'
    }
  ];

  const eventosProximos = [
    { nombre: 'Fiesta VIP Barcelona', fecha: 'Sáb 11 Ene', asistentes: 45, id: 1 },
    { nombre: 'Pool Party Marbella', fecha: 'Vie 17 Ene', asistentes: 32, id: 2 },
    { nombre: 'Cena Exclusiva Madrid', fecha: 'Sáb 18 Ene', asistentes: 28, id: 3 }
  ];

  const [likedPosts, setLikedPosts] = useState(new Set());

  const handleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="space-y-6">
      {/* Widget de Alertas */}
      <div className="card-sexy p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)'
              }}
            >
              <Bell size={24} color="white" />
            </div>
            <div>
              <p className="text-white font-bold">3 personas visitaron tu perfil</p>
              <p className="text-sm text-gray-400">¿Quieres ver quiénes fueron?</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('premium')}
            className="px-6 py-3 rounded-lg font-bold"
            style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              color: 'white'
            }}
          >
            Ver Premium
          </button>
        </div>
      </div>

      {/* Eventos Próximos */}
      <div className="card-sexy">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar size={24} style={{ color: 'var(--sexy-gold)' }} />
            Próximos Eventos
          </h3>
          <button
            onClick={() => onNavigate('fiestas')}
            className="text-sm font-bold hover:underline"
            style={{ color: 'var(--sexy-red)' }}
          >
            Ver todos
          </button>
        </div>
        <div className="space-y-3">
          {eventosProximos.map((evento) => (
            <div
              key={evento.id}
              className="p-4 rounded-lg cursor-pointer hover:scale-105 transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(255,8,68,0.15) 0%, rgba(255,184,0,0.15) 100%)',
                border: '2px solid rgba(255,8,68,0.4)'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{evento.nombre}</p>
                  <p className="text-sm text-gray-400">{evento.fecha}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm" style={{ color: 'var(--sexy-gold)' }}>
                    {evento.asistentes} asistentes
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feed de Actividad */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <TrendingUp size={28} style={{ color: 'var(--sexy-red)' }} />
          Actividad Reciente
        </h3>

        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-sexy"
          >
            {/* Header del post */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.author.media?.photos?.[0]}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
                onClick={() => onNavigate('perfil-publico', post.author)}
                style={{ border: '2px solid var(--sexy-gold)' }}
              />
              <div className="flex-1">
                <p
                  className="text-white font-bold cursor-pointer hover:underline"
                  onClick={() => onNavigate('perfil-publico', post.author)}
                >
                  {post.author.name}
                </p>
                <p className="text-sm text-gray-400">{post.timestamp}</p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: post.type === 'evento' ? 'rgba(255,8,68,0.2)' : 'rgba(255,184,0,0.2)',
                  color: post.type === 'evento' ? 'var(--sexy-red)' : 'var(--sexy-gold)'
                }}
              >
                {post.type === 'evento' ? '🎉 Evento' : post.type === 'busqueda' ? '🔍 Busca' : '👋 Nuevo'}
              </span>
            </div>

            {/* Contenido */}
            <p className="text-white mb-4">{post.content}</p>

            {/* Imagen si existe */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full rounded-lg mb-4"
                style={{
                  maxHeight: '400px',
                  objectFit: 'cover',
                  border: '2px solid rgba(255,8,68,0.3)'
                }}
              />
            )}

            {/* Acciones */}
            <div className="flex items-center gap-6 pt-4 border-t" style={{ borderColor: 'rgba(255,8,68,0.3)' }}>
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-2 hover:scale-110 transition-all"
              >
                <Heart
                  size={20}
                  fill={likedPosts.has(post.id) ? 'var(--sexy-red)' : 'none'}
                  style={{ color: likedPosts.has(post.id) ? 'var(--sexy-red)' : '#999' }}
                />
                <span className="text-sm font-bold" style={{ color: likedPosts.has(post.id) ? 'var(--sexy-red)' : '#999' }}>
                  {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                </span>
              </button>
              <button className="flex items-center gap-2 hover:scale-110 transition-all">
                <MessageCircle size={20} style={{ color: '#999' }} />
                <span className="text-sm font-bold text-gray-400">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:scale-110 transition-all">
                <Share2 size={20} style={{ color: '#999' }} />
                <span className="text-sm font-bold text-gray-400">Compartir</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InicioView;
