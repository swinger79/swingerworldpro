import React from 'react';
import { UserPlus, Users, Calendar, Cake, Image, Eye, Sparkles } from 'lucide-react';

const Sidebar = () => {
  // Datos de ejemplo para visitantes y nuevos usuarios
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

  return (
    <div className="space-y-4">
      {/* Solicitudes Pendientes */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,8,68,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,8,68,0.3)',
        boxShadow: '0 4px 20px rgba(255,8,68,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <UserPlus size={18} style={{ color: '#FF0844' }} />
          <h3 className="font-bold text-white text-sm">Solicitudes pendientes</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-white/80">
            <span>Amistad:</span>
            <span className="font-bold" style={{ color: '#FF0844' }}>3</span>
          </div>
          <div className="flex justify-between text-white/80">
            <span>Fiestas:</span>
            <span className="font-bold" style={{ color: '#FFB800' }}>2</span>
          </div>
        </div>
      </div>

      {/* Usuarios Online */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,184,0,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,184,0,0.3)',
        boxShadow: '0 4px 20px rgba(255,184,0,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <Users size={18} style={{ color: '#FFB800' }} />
          <h3 className="font-bold text-white text-sm">Usuarios online</h3>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold" style={{ color: '#FFB800' }}>247</div>
          <div className="text-sm text-white/80">conectados ahora</div>
        </div>
      </div>

      {/* ¿Buscas plan? */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,23,68,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,23,68,0.3)',
        boxShadow: '0 4px 20px rgba(255,23,68,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <Calendar size={18} style={{ color: '#FF1744' }} />
          <h3 className="font-bold text-white text-sm">¿Buscas plan?</h3>
        </div>
        <div className="space-y-2">
          {['Fiesta Barcelona - Sáb 11', 'Cena Madrid - Vie 17', 'Pool Party - Sáb 18'].map((event, i) => (
            <div key={i} className="rounded-lg p-2 hover:bg-black/40 cursor-pointer transition-all" style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,8,68,0.2)'
            }}>
              <div className="text-white text-xs">{event}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cumpleaños */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,8,68,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,8,68,0.3)',
        boxShadow: '0 4px 20px rgba(255,8,68,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <Cake size={18} style={{ color: '#FFB800' }} />
          <h3 className="font-bold text-white text-sm">Hoy cumplen años</h3>
        </div>
        <div className="space-y-2">
          {[{ name: 'Carlos & Ana', age: '35' }, { name: 'Maria', age: '28' }].map((person, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)'
              }}>
                🎂
              </div>
              <div className="text-xs">
                <div className="text-white font-medium">{person.name}</div>
                <div className="text-white/60">{person.age} años</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Últimos visitantes de tu perfil */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,184,0,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,184,0,0.3)',
        boxShadow: '0 4px 20px rgba(255,184,0,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <Eye size={18} style={{ color: '#FFB800' }} />
          <h3 className="font-bold text-white text-sm">Visitaron tu perfil</h3>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {recentVisitors.map((user) => (
            <div key={user.id} className="relative group cursor-pointer">
              <img 
                src={user.img} 
                alt={user.name}
                className="w-full aspect-square object-cover rounded-lg transition-transform group-hover:scale-110"
                style={{
                  border: '2px solid rgba(255,184,0,0.3)'
                }}
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nuevos usuarios que pueden gustarte */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,8,68,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,8,68,0.3)',
        boxShadow: '0 4px 20px rgba(255,8,68,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <Sparkles size={18} style={{ color: '#FF0844' }} />
          <h3 className="font-bold text-white text-sm">Nuevos usuarios</h3>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {newUsers.map((user) => (
            <div key={user.id} className="relative group cursor-pointer">
              <img 
                src={user.img} 
                alt={user.name}
                className="w-full aspect-square object-cover rounded-lg transition-transform group-hover:scale-110"
                style={{
                  border: '2px solid rgba(255,8,68,0.3)'
                }}
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{user.name}</span>
                <span className="text-white/80 text-xs">{user.age} años</span>
              </div>
              {/* Badge "NUEVO" */}
              <div className="absolute -top-1 -right-1 rounded-full px-1.5 py-0.5 text-xs font-bold" style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                fontSize: '8px'
              }}>
                NEW
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Últimas fotos y videos */}
      <div className="rounded-xl p-4 border" style={{
        background: 'linear-gradient(145deg, rgba(255,23,68,0.1) 0%, rgba(10,10,10,0.95) 100%)',
        borderColor: 'rgba(255,23,68,0.3)',
        boxShadow: '0 4px 20px rgba(255,23,68,0.2)'
      }}>
        <div className="flex items-center space-x-2 mb-3">
          <Image size={18} style={{ color: '#FF1744' }} />
          <h3 className="font-bold text-white text-sm">Últimas fotos</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square rounded-lg animate-pulse" style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              opacity: 0.3
            }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
