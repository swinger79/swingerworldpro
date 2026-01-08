import React, { useState } from 'react';
import { Camera, Video, Edit3, MapPin, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PerfilView = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('fotos');

  const userProfile = {
    name: 'Laura & Carlos',
    age: 29,
    location: 'Barcelona, Barcelona, España',
    orientacion: 'Heterosexual',
    desplazarse: 'Todo el mundo',
    invitadoPor: 'federica',
    ultimaVisita: 'hace 3 minutos',
    situacion: 'Soltero',
    lifestyle: 'hace 15 años',
    registrado: 'hace 2 años',
    puedeAlojar: 'Sí',
    fotos: [
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400'
    ],
    videos: [
      { id: 1, thumbnail: 'https://picsum.photos/400/300?random=1', duration: '2:15' },
      { id: 2, thumbnail: 'https://picsum.photos/400/300?random=2', duration: '1:45' },
      { id: 3, thumbnail: 'https://picsum.photos/400/300?random=3', duration: '3:20' },
      { id: 4, thumbnail: 'https://picsum.photos/400/300?random=4', duration: '0:58' }
    ],
    buscan: [
      { nombre: 'Parejas heterosexuales', activo: true },
      { nombre: 'Parejas (ella bisexual)', activo: true },
      { nombre: 'Parejas (él bisexual)', activo: false },
      { nombre: 'Parejas bisexuales', activo: false },
      { nombre: 'Mujeres heterosexuales', activo: true },
      { nombre: 'Mujeres bisexuales', activo: true },
      { nombre: 'Hombres heterosexuales', activo: false },
      { nombre: 'Hombres bisexuales', activo: false },
      { nombre: 'Travestis', activo: false },
      { nombre: 'Transexuales', activo: false }
    ],
    para: [
      { nombre: 'Intercambio completo', activo: true },
      { nombre: 'Intercambio light', activo: true },
      { nombre: 'Sexo en grupo', activo: true },
      { nombre: 'Tríos', activo: true },
      { nombre: 'Sólo ellas', activo: true },
      { nombre: 'Mirar y ser vistos', activo: true },
      { nombre: 'Sexo oral', activo: true },
      { nombre: 'Prácticas BDSM', activo: true },
      { nombre: 'Compartir fetiches', activo: true },
      { nombre: 'Cuckolding', activo: true },
      { nombre: 'Hot Wife', activo: true },
      { nombre: 'Crossdressing', activo: true },
      { nombre: 'Cybersexo', activo: true },
      { nombre: 'Intercambio de fotos', activo: true },
      { nombre: 'Otros', activo: false },
      { nombre: 'Dogging', activo: true }
    ],
    amigos: [
      { id: 1, name: 'Neni76', foto: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 2, name: 'Gatitostraviesos', foto: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { id: 3, name: 'Tentazioni', foto: 'https://randomuser.me/api/portraits/women/3.jpg' },
      { id: 4, name: 'Crisyalex', foto: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { id: 5, name: 'pelirroja', foto: 'https://randomuser.me/api/portraits/women/5.jpg' },
      { id: 6, name: 'gemisma', foto: 'https://randomuser.me/api/portraits/men/6.jpg' }
    ],
    clubes: [
      { id: 1, name: 'Cap Madrid', logo: '🏛️' },
      { id: 2, name: 'Domine_swingers', logo: '🔥' },
      { id: 3, name: 'Limb', logo: '💎' },
      { id: 4, name: 'Oops! Barcelona', logo: '🎭' }
    ]
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="card-sexy p-8 mb-6">
          <div className="flex items-start gap-6">
            <img
              src={userProfile.fotos[0]}
              alt={userProfile.name}
              className="w-32 h-32 rounded-2xl object-cover"
              style={{
                border: '3px solid var(--sexy-gold)',
                boxShadow: 'var(--glow-gold)'
              }}
            />
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{userProfile.name}</h1>
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <MapPin size={18} style={{ color: 'var(--sexy-gold)' }} />
                <span>{userProfile.location}</span>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate('editar-perfil')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white'
                  }}
                >
                  <Edit3 size={20} />
                  Editar Perfil
                </button>
                <button
                  onClick={() => onNavigate('organizar-fotos')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                  style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)',
                    border: '1px solid rgba(255,184,0,0.5)'
                  }}
                >
                  <Camera size={20} />
                  Organizar Fotos
                </button>
                <button
                  onClick={() => onNavigate('organizar-videos')}
                  className="px-6 py-3 rounded-lg font-bold flex items-center gap-2"
                  style={{
                    background: 'rgba(255,184,0,0.2)',
                    color: 'var(--sexy-gold)',
                    border: '1px solid rgba(255,184,0,0.5)'
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
          <div className="lg:col-span-1 space-y-6">
            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">📍 Información</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Viven en:</p>
                  <p className="text-white font-medium">{userProfile.location}</p>
                </div>
                <div>
                  <p className="text-gray-400">Edad:</p>
                  <p className="text-white font-medium">{userProfile.age} años</p>
                </div>
                <div>
                  <p className="text-gray-400">Orientación:</p>
                  <p className="text-white font-medium">{userProfile.orientacion}</p>
                </div>
                <div>
                  <p className="text-gray-400">Capacidad para desplazarse:</p>
                  <p className="text-white font-medium">{userProfile.desplazarse}</p>
                </div>
                <div>
                  <p className="text-gray-400">Invitado por:</p>
                  <p className="text-white font-medium">{userProfile.invitadoPor}</p>
                </div>
                <div>
                  <p className="text-gray-400">Su última visita fue:</p>
                  <p style={{ color: 'var(--sexy-gold)' }} className="font-medium">{userProfile.ultimaVisita}</p>
                </div>
                <div>
                  <p className="text-gray-400">Situación sentimental:</p>
                  <p className="text-white font-medium">{userProfile.situacion}</p>
                </div>
                <div>
                  <p className="text-gray-400">Empezó en el lifestyle:</p>
                  <p className="text-white font-medium">{userProfile.lifestyle}</p>
                </div>
                <div>
                  <p className="text-gray-400">Se registró en Swinger World:</p>
                  <p className="text-white font-medium">{userProfile.registrado}</p>
                </div>
                <div>
                  <p className="text-gray-400">¿Puede alojar visitas?</p>
                  <p className="text-white font-medium">{userProfile.puedeAlojar}</p>
                </div>
              </div>
            </div>

            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">🔍 Buscan</h3>
              <div className="space-y-2">
                {userProfile.buscan.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm"
                    style={{
                      textDecoration: !item.activo ? 'line-through' : 'none',
                      opacity: !item.activo ? 0.4 : 1
                    }}
                  >
                    <span style={{ color: item.activo ? 'var(--sexy-red)' : 'gray' }}>•</span>
                    <span className="text-white">{item.nombre}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4">🔥 Para</h3>
              <div className="space-y-2">
                {userProfile.para.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm"
                    style={{
                      textDecoration: !item.activo ? 'line-through' : 'none',
                      opacity: !item.activo ? 0.4 : 1
                    }}
                  >
                    <span style={{ color: item.activo ? 'var(--sexy-red)' : 'gray' }}>•</span>
                    <span className="text-white">{item.nombre}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="card-sexy">
              <div className="flex gap-4 mb-6" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setActiveTab('fotos')}
                  className="px-4 py-3 font-bold flex items-center gap-2 transition-all"
                  style={{
                    color: activeTab === 'fotos' ? 'var(--sexy-red)' : 'white',
                    borderBottom: activeTab === 'fotos' ? '3px solid var(--sexy-red)' : 'none'
                  }}
                >
                  <Camera size={20} />
                  Fotos
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className="px-4 py-3 font-bold flex items-center gap-2 transition-all"
                  style={{
                    color: activeTab === 'videos' ? 'var(--sexy-red)' : 'white',
                    borderBottom: activeTab === 'videos' ? '3px solid var(--sexy-red)' : 'none'
                  }}
                >
                  <Video size={20} />
                  Videos
                </button>
              </div>

              {activeTab === 'fotos' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {userProfile.fotos.map((foto, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-xl overflow-hidden cursor-pointer"
                      style={{
                        border: '2px solid rgba(255,8,68,0.3)'
                      }}
                    >
                      <img
                        src={foto}
                        alt={`Foto ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'videos' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userProfile.videos.map((video) => (
                    <motion.div
                      key={video.id}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                      style={{
                        border: '2px solid rgba(255,8,68,0.3)'
                      }}
                    >
                      <img
                        src={video.thumbnail}
                        alt={`Video ${video.id}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center fire-pulse"
                          style={{
                            background: 'rgba(255,8,68,0.9)'
                          }}
                        >
                          <span className="text-white text-2xl">▶</span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-3 py-1 rounded-lg font-bold text-sm"
                        style={{
                          background: 'rgba(0,0,0,0.8)',
                          color: 'white'
                        }}
                      >
                        {video.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="card-sexy">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Users size={24} style={{ color: 'var(--sexy-gold)' }} />
                  Ver todos los 246 Amigos
                </h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {userProfile.amigos.map((amigo) => (
                  <div key={amigo.id} className="text-center">
                    <img
                      src={amigo.foto}
                      alt={amigo.name}
                      className="w-full aspect-square rounded-xl object-cover mb-2"
                      style={{
                        border: '2px solid rgba(255,8,68,0.3)'
                      }}
                    />
                    <p className="text-sm text-white font-medium truncate">{amigo.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-sexy">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star size={24} style={{ color: 'var(--sexy-gold)' }} />
                4 Clubs favoritos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {userProfile.clubes.map((club) => (
                  <div
                    key={club.id}
                    className="p-4 rounded-xl text-center cursor-pointer hover-lift"
                    style={{
                      background: 'rgba(255,8,68,0.1)',
                      border: '2px solid rgba(255,8,68,0.3)'
                    }}
                  >
                    <div className="text-4xl mb-2">{club.logo}</div>
                    <p className="text-sm text-white font-medium">{club.name}</p>
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
