import React from 'react';
import { Camera, Video, Edit, Users } from 'lucide-react';

const PerfilView = ({ onNavigate }) => {
  // Datos del usuario actual (tu perfil)
  const miPerfil = {
    name: 'Laura & Carlos',
    age: 29,
    location: 'Barcelona, Barcelona, España',
    type: 'pareja',
    orientation: 'Heterosexual',
    canTravel: 'Todo el mundo',
    invitedBy: 'federica',
    lastVisit: 'hace 3 minutos',
    relationshipStatus: 'Soltero',
    lifestyleStart: 'hace 15 años',
    registrationDate: 'hace 2 años',
    canHost: 'Sí',
    photos: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
      'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400',
      'https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=400',
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
    ],
    videos: 4,
    friendsCount: 246,
    favoriteClubs: [
      'Cap Madrid',
      'Domine_swingers',
      'Limb',
      'Oops! Barcelona'
    ],
    lookingFor: [
      'Parejas',
      'Tríos',
      'Intercambio',
      'Fiestas',
      'Diversión',
      'Amistad',
      'Encuentros ocasionales',
      'Relaciones abiertas',
      'Soft swap',
      'Full swap'
    ],
    preferences: [
      'Bisexualidad femenina',
      'Same room',
      'Separate room',
      'Voyeurismo',
      'Exhibicionismo',
      'Juegos de rol',
      'BDSM suave',
      'Orgías',
      'Eventos exclusivos',
      'Discreción',
      'Respeto mutuo',
      'Comunicación abierta',
      'Higiene',
      'Buen ambiente',
      'Sin presiones',
      'Consentimiento'
    ]
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="card-sexy p-6 mb-6">
          <div className="flex items-center gap-6">
            <img
              src={miPerfil.photos[0]}
              alt={miPerfil.name}
              className="w-32 h-32 rounded-2xl object-cover"
              style={{
                border: '3px solid var(--sexy-gold)',
                boxShadow: 'var(--glow-gold)'
              }}
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{miPerfil.name}</h1>
              <p className="text-gray-300 mb-4">{miPerfil.location}</p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate('editar-perfil')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white'
                  }}
                >
                  <Edit size={20} />
                  Editar Perfil
                </button>
                <button
                  onClick={() => onNavigate('organizar-fotos')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all"
                  style={{
                    background: 'rgba(255,8,68,0.2)',
                    color: 'var(--sexy-red)',
                    border: '2px solid rgba(255,8,68,0.5)'
                  }}
                >
                  <Camera size={20} />
                  Organizar Fotos
                </button>
                <button
                  onClick={() => onNavigate('organizar-videos')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-all"
                  style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)',
                    border: '2px solid rgba(255,184,0,0.5)'
                  }}
                >
                  <Video size={20} />
                  Organizar Videos
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda - Info */}
          <div className="space-y-6">
            {/* Información */}
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">📍 Información</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Viven en:</p>
                  <p className="text-white font-medium">{miPerfil.location}</p>
                </div>
                <div>
                  <p className="text-gray-400">Edad:</p>
                  <p className="text-white font-medium">{miPerfil.age} años</p>
                </div>
                <div>
                  <p className="text-gray-400">Orientación:</p>
                  <p className="text-white font-medium">{miPerfil.orientation}</p>
                </div>
                <div>
                  <p className="text-gray-400">Capacidad para desplazarse:</p>
                  <p className="text-white font-medium">{miPerfil.canTravel}</p>
                </div>
                <div>
                  <p className="text-gray-400">Invitado por:</p>
                  <p style={{ color: 'var(--sexy-gold)' }} className="font-medium">{miPerfil.invitedBy}</p>
                </div>
                <div>
                  <p className="text-gray-400">Su última visita fue:</p>
                  <p style={{ color: 'var(--sexy-gold)' }} className="font-medium">{miPerfil.lastVisit}</p>
                </div>
                <div>
                  <p className="text-gray-400">Situación sentimental:</p>
                  <p className="text-white font-medium">{miPerfil.relationshipStatus}</p>
                </div>
                <div>
                  <p className="text-gray-400">Empezó en el lifestyle:</p>
                  <p className="text-white font-medium">{miPerfil.lifestyleStart}</p>
                </div>
                <div>
                  <p className="text-gray-400">Se registró en Swinger World:</p>
                  <p className="text-white font-medium">{miPerfil.registrationDate}</p>
                </div>
                <div>
                  <p className="text-gray-400">¿Puede alojar visitas?</p>
                  <p className="text-white font-medium">{miPerfil.canHost}</p>
                </div>
              </div>
            </div>

            {/* Buscan */}
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">🎯 Buscan</h3>
              <div className="space-y-2">
                {miPerfil.lookingFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Para */}
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">💫 Para</h3>
              <div className="space-y-2">
                {miPerfil.preferences.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Fotos y Videos */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="card-sexy">
              <div className="flex gap-4 mb-6" style={{ borderBottom: '2px solid var(--border-subtle)' }}>
                <button className="px-6 py-3 font-bold flex items-center gap-2" style={{
                  color: 'var(--sexy-red)',
                  borderBottom: '3px solid var(--sexy-red)'
                }}>
                  <Camera size={20} />
                  Fotos ({miPerfil.photos.length})
                </button>
                <button className="px-6 py-3 font-bold flex items-center gap-2 text-gray-400">
                  <Video size={20} />
                  Videos ({miPerfil.videos})
                </button>
              </div>

              {/* Grid de fotos */}
              <div className="grid grid-cols-3 gap-4">
                {miPerfil.photos.map((foto, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all"
                    style={{
                      border: '2px solid rgba(255,8,68,0.3)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}
                  >
                    <img
                      src={foto}
                      alt={`Foto ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Amigos */}
            <div className="card-sexy">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Users size={24} />
                  {miPerfil.friendsCount} Amigos
                </h3>
                <button
                  onClick={() => onNavigate('amigos')}
                  className="text-sm font-bold hover:underline"
                  style={{ color: 'var(--sexy-red)' }}
                >
                  Ver todos
                </button>
              </div>
              <div className="grid grid-cols-6 gap-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden"
                    style={{
                      border: '2px solid rgba(255,8,68,0.3)'
                    }}
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${idx + 20}`}
                      alt={`Amigo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Clubes favoritos */}
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">🎊 Clubes favoritos</h3>
              <div className="grid grid-cols-2 gap-3">
                {miPerfil.favoriteClubs.map((club, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg text-center font-bold"
                    style={{
                      background: 'rgba(255,8,68,0.1)',
                      border: '2px solid rgba(255,8,68,0.3)',
                      color: 'var(--sexy-gold)'
                    }}
                  >
                    {club}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilView;
