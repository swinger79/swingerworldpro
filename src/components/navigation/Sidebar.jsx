import React from 'react';
import { UserPlus, Users, Calendar, Cake, Image, Eye, Sparkles, Video, Play } from 'lucide-react';

const Sidebar = () => {
  const cardStyle = {
    background: 'var(--bg-card)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: 'var(--shadow-red)'
  };

  const recentVisitors = [
    { id: 1, name: 'Ana', img: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Carlos', img: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Laura', img: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Mario', img: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Sofia', img: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'David', img: 'https://i.pravatar.cc/150?img=6' },
    { id: 7, name: 'Emma', img: 'https://i.pravatar.cc/150?img=7' },
    { id: 8, name: 'Lucas', img: 'https://i.pravatar.cc/150?img=8' },
    { id: 9, name: 'Mia', img: 'https://i.pravatar.cc/150?img=9' },
    { id: 10, name: 'Alex', img: 'https://i.pravatar.cc/150?img=10' }
  ];

  const newUsers = [
    { id: 11, name: 'Isabella', img: 'https://i.pravatar.cc/150?img=11', age: 28 },
    { id: 12, name: 'Pablo', img: 'https://i.pravatar.cc/150?img=12', age: 32 },
    { id: 13, name: 'Valentina', img: 'https://i.pravatar.cc/150?img=13', age: 25 },
    { id: 14, name: 'Diego', img: 'https://i.pravatar.cc/150?img=14', age: 35 },
    { id: 15, name: 'Camila', img: 'https://i.pravatar.cc/150?img=15', age: 29 },
    { id: 16, name: 'Mateo', img: 'https://i.pravatar.cc/150?img=16', age: 31 },
    { id: 17, name: 'Luna', img: 'https://i.pravatar.cc/150?img=17', age: 26 },
    { id: 18, name: 'Nico', img: 'https://i.pravatar.cc/150?img=18', age: 33 },
    { id: 19, name: 'Abril', img: 'https://i.pravatar.cc/150?img=19', age: 27 },
    { id: 20, name: 'Thiago', img: 'https://i.pravatar.cc/150?img=20', age: 30 }
  ];

  const recentPhotos = [
    { id: 1, user: 'Ana & Carlos', img: 'https://picsum.photos/200/200?random=1', time: '5 min', likes: 12 },
    { id: 2, user: 'Laura', img: 'https://picsum.photos/200/200?random=2', time: '12 min', likes: 8 },
    { id: 3, user: 'Mario', img: 'https://picsum.photos/200/200?random=3', time: '25 min', likes: 15 },
    { id: 4, user: 'Sofia & David', img: 'https://picsum.photos/200/200?random=4', time: '1 h', likes: 23 },
    { id: 5, user: 'Emma', img: 'https://picsum.photos/200/200?random=5', time: '2 h', likes: 19 },
    { id: 6, user: 'Lucas & Mia', img: 'https://picsum.photos/200/200?random=6', time: '3 h', likes: 31 }
  ];

  const recentVideos = [
    { id: 1, user: 'Ana & Carlos', thumbnail: 'https://picsum.photos/200/120?random=7', duration: '0:45', time: '15 min', views: 234 },
    { id: 2, user: 'Laura', thumbnail: 'https://picsum.photos/200/120?random=8', duration: '1:23', time: '30 min', views: 156 },
    { id: 3, user: 'Sofia & David', thumbnail: 'https://picsum.photos/200/120?random=9', duration: '0:38', time: '1 h', views: 412 },
    { id: 4, user: 'Lucas & Mia', thumbnail: 'https://picsum.photos/200/120?random=10', duration: '2:15', time: '2 h', views: 567 }
  ];

  return (
    <div className="space-y-4">
      {/* Solicitudes */}
      <div style={cardStyle}>
        <div className="flex items-center space-x-2 mb-3">
          <UserPlus size={18} style={{ color: 'var(--sexy-red)' }} />
          <h3 className="font-bold text-white text-sm">Solicitudes pendientes</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Amistad:</span>
            <span className="font-bold" style={{ color: 'var(--sexy-red)' }}>3</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Fiestas:</span>
            <span className="font-bold" style={{ color: 'var(--sexy-gold)' }}>2</span>
          </div>
        </div>
      </div>

      {/* Online */}
      <div style={cardStyle}>
        <div className="flex items-center space-x-2 mb-3">
          <Users size={18} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white text-sm">Usuarios online</h3>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold" style={{ color: 'var(--sexy-gold)' }}>247</div>
          <div className="text-sm text-gray-400">conectados ahora</div>
        </div>
      </div>

      {/* Eventos */}
      <div style={cardStyle}>
        <div className="flex items-center space-x-2 mb-3">
          <Calendar size={18} style={{ color: 'var(--sexy-red)' }} />
          <h3 className="font-bold text-white text-sm">¿Buscas plan?</h3>
        </div>
        <div className="space-y-2">
          {['Fiesta Barcelona - Sáb 11', 'Cena Madrid - Vie 17', 'Pool Party - Sáb 18'].map((event, i) => (
            <div key={i} className="rounded-lg p-2 cursor-pointer transition-all text-white text-xs" style={{
              background: 'var(--bg-hover)',
              border: '1px solid var(--border-subtle)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,8,68,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}>
              {event}
            </div>
          ))}
        </div>
      </div>

      {/* Cumpleaños */}
      <div style={cardStyle}>
        <div className="flex items-center space-x-2 mb-3">
          <Cake size={18} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white text-sm">Hoy cumplen años</h3>
        </div>
        <div className="space-y-2">
          {[{ name: 'Carlos & Ana', age: '35' }, { name: 'Maria', age: '28' }].map((person, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{
                background: 'var(--gradient-primary)'
              }}>🎂</div>
              <div className="text-xs">
                <div className="text-white font-medium">{person.name}</div>
                <div className="text-gray-400">{person.age} años</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visitantes */}
      <div style={cardStyle}>
        <div className="flex items-center space-x-2 mb-3">
          <Eye size={18} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white text-sm">Visitaron tu perfil</h3>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {recentVisitors.map((user) => (
            <div key={user.id} className="relative group cursor-pointer">
              <img 
                src={user.img} 
                alt={user.name}
                className="w-full aspect-square object-cover rounded-lg transition-transform group-hover:scale-110"
                style={{ border: '1px solid var(--border-subtle)' }}
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nuevos */}
      <div style={cardStyle}>
        <div className="flex items-center space-x-2 mb-3">
          <Sparkles size={18} style={{ color: 'var(--sexy-red)' }} />
          <h3 className="font-bold text-white text-sm">Nuevos usuarios</h3>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {newUsers.map((user) => (
            <div key={user.id} className="relative group cursor-pointer">
              <img 
                src={user.img} 
                alt={user.name}
                className="w-full aspect-square object-cover rounded-lg transition-transform group-hover:scale-110"
                style={{ border: '1px solid var(--border-subtle)' }}
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{user.name}</span>
                <span className="text-gray-400 text-xs">{user.age} años</span>
              </div>
              <div className="absolute -top-1 -right-1 rounded-full px-1.5 py-0.5 font-bold" style={{
                background: 'var(--gradient-primary)',
                fontSize: '8px',
                color: 'white'
              }}>NEW</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOTOS DE AMIGOS */}
      <div style={cardStyle}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Image size={18} style={{ color: 'var(--sexy-red)' }} />
            <h3 className="font-bold text-white text-sm">Últimas fotos</h3>
          </div>
          <button className="text-xs" style={{ color: 'var(--sexy-gold)' }}>Ver todas</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {recentPhotos.map((photo) => (
            <div key={photo.id} className="relative group cursor-pointer">
              <img 
                src={photo.img} 
                alt={photo.user}
                className="w-full aspect-square object-cover rounded-lg transition-transform group-hover:scale-105"
                style={{ border: '1px solid var(--border-subtle)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="text-white text-xs font-bold truncate">{photo.user}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{photo.time}</span>
                    <span className="text-red-400">❤️ {photo.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEOS DE AMIGOS */}
      <div style={cardStyle}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Video size={18} style={{ color: 'var(--sexy-gold)' }} />
            <h3 className="font-bold text-white text-sm">Últimos videos</h3>
          </div>
          <button className="text-xs" style={{ color: 'var(--sexy-gold)' }}>Ver todos</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {recentVideos.map((video) => (
            <div key={video.id} className="relative group cursor-pointer">
              <img 
                src={video.thumbnail} 
                alt={video.user}
                className="w-full aspect-video object-cover rounded-lg transition-transform group-hover:scale-105"
                style={{ border: '1px solid var(--border-subtle)' }}
              />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{
                  background: 'rgba(255,8,68,0.9)',
                  backdropFilter: 'blur(5px)'
                }}>
                  <Play size={20} className="text-white ml-1" fill="white" />
                </div>
              </div>
              
              {/* Duration */}
              <div className="absolute bottom-1 right-1 text-xs font-bold px-1.5 py-0.5 rounded" style={{
                background: 'rgba(0,0,0,0.8)',
                color: 'white'
              }}>{video.duration}</div>
              
              {/* Info on hover */}
              <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg">
                <div className="text-white text-xs font-bold truncate">{video.user}</div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-gray-400">{video.time}</span>
                  <span className="text-gray-400">👁️ {video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
