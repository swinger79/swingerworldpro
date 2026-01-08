import React from 'react';
import { Calendar, Users, Image, Video, Flame } from 'lucide-react';
import TODOS_MIEMBROS from '../../data/memberGenerator';

const Sidebar = ({ onNavigate }) => {
  // Obtener 10 visitantes únicos
  const visitantes = TODOS_MIEMBROS.slice(0, 10);

  const handleVerPerfil = (miembro) => {
    if (onNavigate) {
      onNavigate('perfil-publico', miembro);
    }
  };

  return (
    <div className="space-y-6">
      {/* Solicitudes pendientes */}
      <div className="card-sexy">
        <div className="flex items-center gap-2 mb-4">
          <Users size={20} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white text-lg">Solicitudes pendientes</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-lg" style={{
            background: 'rgba(255,8,68,0.1)',
            border: '1px solid rgba(255,8,68,0.3)'
          }}>
            <span className="text-gray-200 font-medium">Amistad:</span>
            <span className="font-bold text-xl px-3 py-1 rounded-full" style={{ 
              color: 'white',
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
              boxShadow: '0 2px 8px rgba(255,8,68,0.4)'
            }}>3</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg" style={{
            background: 'rgba(255,184,0,0.1)',
            border: '1px solid rgba(255,184,0,0.3)'
          }}>
            <span className="text-gray-200 font-medium">Fiestas:</span>
            <span className="font-bold text-xl px-3 py-1 rounded-full" style={{ 
              color: 'white',
              background: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)',
              boxShadow: '0 2px 8px rgba(255,184,0,0.4)'
            }}>2</span>
          </div>
        </div>
      </div>

      {/* Usuarios online */}
      <div className="card-sexy text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame size={24} style={{ color: 'var(--sexy-red)' }} />
          <h3 className="font-bold text-white text-lg">Usuarios online</h3>
        </div>
        <div className="relative">
          <div className="text-6xl font-bold mb-2" style={{ 
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(255,8,68,0.5))'
          }}>
            247
          </div>
          <p className="text-sm font-medium" style={{ color: 'var(--sexy-gold)' }}>
            conectados ahora
          </p>
        </div>
      </div>

      {/* ¿Buscas plan? */}
      <div className="card-sexy">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={20} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white text-lg">¿Buscas plan?</h3>
        </div>
        <div className="space-y-3">
          {[
            { nombre: 'Fiesta Barcelona', fecha: 'Sáb 11' },
            { nombre: 'Cena Madrid', fecha: 'Vie 17' },
            { nombre: 'Pool Party', fecha: 'Sáb 18' }
          ].map((evento, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-lg cursor-pointer transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,8,68,0.15) 0%, rgba(255,184,0,0.15) 100%)',
                border: '2px solid rgba(255,8,68,0.4)',
                borderLeft: '4px solid var(--sexy-red)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              <p className="text-white font-bold text-sm">{evento.nombre}</p>
              <p className="text-xs font-medium mt-1" style={{ color: 'var(--sexy-gold)' }}>
                {evento.fecha}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hoy cumplen años */}
      <div className="card-sexy">
        <h3 className="font-bold mb-4 text-white text-lg">🎂 Hoy cumplen años</h3>
        <div className="space-y-3">
          {[
            { nombre: 'Carlos & Ana', edad: '35 años', gradient: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)' },
            { nombre: 'Maria', edad: '28 años', gradient: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)' }
          ].map((person, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg" style={{
              background: 'rgba(255,8,68,0.1)',
              border: '1px solid rgba(255,8,68,0.3)'
            }}>
              <div className="w-12 h-12 rounded-full flex-shrink-0" style={{
                background: person.gradient,
                boxShadow: '0 4px 12px rgba(255,8,68,0.4)'
              }} />
              <div>
                <p className="text-sm font-bold text-white">{person.nombre}</p>
                <p className="text-xs" style={{ color: 'var(--sexy-gold)' }}>{person.edad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visitaron tu perfil - CON CLICS INDIVIDUALES */}
      <div className="card-sexy">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white text-lg">👁️ Visitaron tu perfil</h3>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {visitantes.map((visitante) => (
            <div 
              key={visitante.id}
              onClick={(e) => {
                e.stopPropagation();
                handleVerPerfil(visitante);
              }}
              className="aspect-square rounded-lg overflow-hidden hover:scale-110 transition-transform cursor-pointer relative group"
              style={{
                border: '2px solid rgba(255,8,68,0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
              }}
            >
              <img 
                src={visitante.media?.photos?.[0]}
                alt={visitante.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-bold text-center px-1">
                  {visitante.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Últimas fotos */}
      <div className="card-sexy">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Image size={20} style={{ color: 'var(--sexy-gold)' }} />
            <h3 className="font-bold text-white text-lg">Últimas fotos</h3>
          </div>
          <button 
            onClick={() => onNavigate && onNavigate('organizar-fotos')}
            className="text-sm font-bold hover:underline" 
            style={{ color: 'var(--sexy-red)' }}
          >
            Ver todas
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6].map((i) => (
            <div 
              key={i} 
              onClick={() => onNavigate && onNavigate('organizar-fotos')}
              className="aspect-square rounded-lg overflow-hidden hover:scale-110 transition-transform cursor-pointer" 
              style={{
                border: '2px solid rgba(255,8,68,0.5)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
              }}
            >
              <img 
                src={`https://picsum.photos/200/200?random=${i}`}
                alt="Photo"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Últimos videos */}
      <div className="card-sexy">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Video size={20} style={{ color: 'var(--sexy-gold)' }} />
            <h3 className="font-bold text-white text-lg">Últimos videos</h3>
          </div>
          <button 
            onClick={() => onNavigate && onNavigate('organizar-videos')}
            className="text-sm font-bold hover:underline" 
            style={{ color: 'var(--sexy-red)' }}
          >
            Ver todos
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1,2,3,4].map((i) => (
            <div 
              key={i} 
              onClick={() => onNavigate && onNavigate('organizar-videos')}
              className="relative aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer" 
              style={{
                border: '2px solid rgba(255,8,68,0.5)',
                background: 'rgba(0,0,0,0.6)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
              }}
            >
              <img 
                src={`https://picsum.photos/300/200?random=${i + 10}`}
                alt="Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center fire-pulse" style={{
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  boxShadow: '0 4px 12px rgba(255,8,68,0.6)'
                }}>
                  <span className="text-white text-lg">▶</span>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 px-2 py-1 rounded text-xs font-bold" style={{
                background: 'rgba(0,0,0,0.9)',
                color: 'white',
                border: '1px solid rgba(255,8,68,0.5)'
              }}>
                {i}:23
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
