import React from 'react';
import { Calendar, Users, Image, Video } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Solicitudes pendientes */}
      <div className="card-sexy">
        <div className="flex items-center gap-2 mb-4">
          <Users size={20} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white">Solicitudes pendientes</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Amistad:</span>
            <span className="font-bold" style={{ color: 'var(--sexy-red)' }}>3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Fiestas:</span>
            <span className="font-bold" style={{ color: 'var(--sexy-red)' }}>2</span>
          </div>
        </div>
      </div>

      {/* Usuarios online */}
      <div className="card-sexy">
        <div className="flex items-center gap-2 mb-4">
          <Users size={20} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white">Usuarios online</h3>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2" style={{ 
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            247
          </div>
          <p className="text-sm text-gray-400">conectados ahora</p>
        </div>
      </div>

      {/* ¿Buscas plan? */}
      <div className="card-sexy">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={20} style={{ color: 'var(--sexy-gold)' }} />
          <h3 className="font-bold text-white">¿Buscas plan?</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="p-2 rounded-lg hover:bg-opacity-20 cursor-pointer transition-all" style={{
            background: 'rgba(255,8,68,0.1)',
            borderLeft: '3px solid var(--sexy-red)'
          }}>
            <p className="text-white font-medium">Fiesta Barcelona</p>
            <p className="text-gray-400 text-xs">Sáb 11</p>
          </div>
          <div className="p-2 rounded-lg hover:bg-opacity-20 cursor-pointer transition-all" style={{
            background: 'rgba(255,8,68,0.1)',
            borderLeft: '3px solid var(--sexy-red)'
          }}>
            <p className="text-white font-medium">Cena Madrid</p>
            <p className="text-gray-400 text-xs">Vie 17</p>
          </div>
          <div className="p-2 rounded-lg hover:bg-opacity-20 cursor-pointer transition-all" style={{
            background: 'rgba(255,8,68,0.1)',
            borderLeft: '3px solid var(--sexy-red)'
          }}>
            <p className="text-white font-medium">Pool Party</p>
            <p className="text-gray-400 text-xs">Sáb 18</p>
          </div>
        </div>
      </div>

      {/* Hoy cumplen años */}
      <div className="card-sexy">
        <h3 className="font-bold mb-4 text-white">🎂 Hoy cumplen años</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full" style={{
              background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)'
            }} />
            <div>
              <p className="text-sm font-medium text-white">Carlos & Ana</p>
              <p className="text-xs text-gray-400">35 años</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full" style={{
              background: 'linear-gradient(135deg, #FFB800 0%, #FF0844 100%)'
            }} />
            <div>
              <p className="text-sm font-medium text-white">Maria</p>
              <p className="text-xs text-gray-400">28 años</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visitaron tu perfil */}
      <div className="card-sexy">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">👁️ Visitaron tu perfil</h3>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[1,2,3,4,5,6,7,8,9,10].map((i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(255,8,68,0.2) 0%, rgba(255,184,0,0.2) 100%)',
              border: '2px solid rgba(255,8,68,0.3)'
            }}>
              <img 
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}.jpg`}
                alt="Visitor"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Últimas fotos */}
      <div className="card-sexy">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Image size={20} style={{ color: 'var(--sexy-gold)' }} />
            <h3 className="font-bold text-white">Últimas fotos</h3>
          </div>
          <button className="text-xs" style={{ color: 'var(--sexy-red)' }}>Ver todas</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden" style={{
              border: '2px solid rgba(255,8,68,0.3)'
            }}>
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
            <h3 className="font-bold text-white">Últimos videos</h3>
          </div>
          <button className="text-xs" style={{ color: 'var(--sexy-red)' }}>Ver todos</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="relative aspect-video rounded-lg overflow-hidden" style={{
              border: '2px solid rgba(255,8,68,0.3)',
              background: 'rgba(0,0,0,0.5)'
            }}>
              <img 
                src={`https://picsum.photos/300/200?random=${i + 10}`}
                alt="Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                  background: 'rgba(255,8,68,0.8)'
                }}>
                  ▶
                </div>
              </div>
              <div className="absolute bottom-1 right-1 px-2 py-1 rounded text-xs font-bold" style={{
                background: 'rgba(0,0,0,0.8)',
                color: 'white'
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
