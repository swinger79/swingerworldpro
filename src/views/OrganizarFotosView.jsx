import React, { useState } from 'react';
import { Upload, Trash2, Eye, EyeOff, Users, Lock, Star, GripVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const OrganizarFotosView = () => {
  const [fotos, setFotos] = useState([
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
      privacidad: 'publica',
      esPerfil: true
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400',
      privacidad: 'publica',
      esPerfil: false
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
      privacidad: 'amigos',
      esPerfil: false
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      privacidad: 'publica',
      esPerfil: false
    },
    { 
      id: 5, 
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      privacidad: 'privada',
      esPerfil: false
    },
    { 
      id: 6, 
      url: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400',
      privacidad: 'amigos',
      esPerfil: false
    },
    { 
      id: 7, 
      url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
      privacidad: 'publica',
      esPerfil: false
    },
    { 
      id: 8, 
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      privacidad: 'privada',
      esPerfil: false
    },
    { 
      id: 9, 
      url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400',
      privacidad: 'publica',
      esPerfil: false
    }
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta foto?')) {
      setFotos(fotos.filter(f => f.id !== id));
      showNotification('Foto eliminada correctamente');
    }
  };

  const handleCambiarPrivacidad = (id, nuevaPrivacidad) => {
    setFotos(fotos.map(f => 
      f.id === id ? { ...f, privacidad: nuevaPrivacidad } : f
    ));
    showNotification(`Privacidad cambiada a: ${nuevaPrivacidad}`);
  };

  const handleEstablecerPerfil = (id) => {
    setFotos(fotos.map(f => ({
      ...f,
      esPerfil: f.id === id
    })));
    showNotification('Foto de perfil actualizada');
  };

  const handleAñadirFoto = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const nuevaFoto = {
            id: Date.now() + index,
            url: event.target.result,
            privacidad: 'publica',
            esPerfil: false
          };
          setFotos(prev => [...prev, nuevaFoto]);
        };
        reader.readAsDataURL(file);
      });
      showNotification('Fotos añadidas correctamente');
    };
    input.click();
  };

  const showNotification = (mensaje) => {
    const notification = document.createElement('div');
    notification.textContent = mensaje;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #FF0844 0%, #FFB800 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      z-index: 9999;
      font-weight: bold;
      box-shadow: 0 4px 20px rgba(255,8,68,0.4);
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const handleDragStart = (e, foto) => {
    setDraggedItem(foto);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetFoto) => {
    e.preventDefault();
    if (!draggedItem) return;

    const draggedIndex = fotos.findIndex(f => f.id === draggedItem.id);
    const targetIndex = fotos.findIndex(f => f.id === targetFoto.id);

    const newFotos = [...fotos];
    newFotos.splice(draggedIndex, 1);
    newFotos.splice(targetIndex, 0, draggedItem);

    setFotos(newFotos);
    setDraggedItem(null);
    showNotification('Orden actualizado');
  };

  const getPrivacidadIcon = (privacidad) => {
    switch(privacidad) {
      case 'publica': return <Eye size={16} />;
      case 'amigos': return <Users size={16} />;
      case 'privada': return <Lock size={16} />;
      default: return <Eye size={16} />;
    }
  };

  const getPrivacidadColor = (privacidad) => {
    switch(privacidad) {
      case 'publica': return '#00ff00';
      case 'amigos': return '#FFB800';
      case 'privada': return '#FF0844';
      default: return '#00ff00';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 fire-text">📸 Tus fotos</h2>
          <p className="text-gray-400">
            {fotos.length} fotos • Arrastra para reordenar
          </p>
        </div>

        {/* Botón añadir fotos */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAñadirFoto}
          className="w-full py-4 rounded-xl font-bold text-lg mb-6 flex items-center justify-center gap-3"
          style={{
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            color: 'white',
            boxShadow: '0 4px 20px rgba(255,8,68,0.4)'
          }}
        >
          <Upload size={24} />
          Añadir una nueva foto
        </motion.button>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotos.map((foto) => (
            <motion.div
              key={foto.id}
              draggable
              onDragStart={(e) => handleDragStart(e, foto)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, foto)}
              whileHover={{ scale: 1.02 }}
              className="card-sexy overflow-hidden cursor-move"
            >
              {/* Imagen */}
              <div className="relative aspect-square">
                <img
                  src={foto.url}
                  alt="Foto"
                  className="w-full h-full object-cover"
                />
                
                {/* Badge de perfil */}
                {foto.esPerfil && (
                  <div className="absolute top-2 left-2 px-3 py-1 rounded-full font-bold text-sm flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                      color: 'white'
                    }}
                  >
                    <Star size={16} fill="white" />
                    Tu Perfil
                  </div>
                )}

                {/* Badge de privacidad */}
                <div className="absolute top-2 right-2 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-2"
                  style={{
                    background: 'rgba(0,0,0,0.8)',
                    color: getPrivacidadColor(foto.privacidad)
                  }}
                >
                  {getPrivacidadIcon(foto.privacidad)}
                  {foto.privacidad.charAt(0).toUpperCase() + foto.privacidad.slice(1)}
                </div>

                {/* Icono de arrastrar */}
                <div className="absolute bottom-2 left-2 p-2 rounded-lg"
                  style={{
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white'
                  }}
                >
                  <GripVertical size={20} />
                </div>
              </div>

              {/* Controles */}
              <div className="p-4 space-y-3">
                {/* Botones de privacidad */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleCambiarPrivacidad(foto.id, 'publica')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      foto.privacidad === 'publica' ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: foto.privacidad === 'publica' ? 'rgba(0,255,0,0.2)' : 'rgba(255,255,255,0.1)',
                      color: '#00ff00',
                      border: foto.privacidad === 'publica' ? '2px solid #00ff00' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Eye size={14} />
                    Pública
                  </button>

                  <button
                    onClick={() => handleCambiarPrivacidad(foto.id, 'amigos')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      foto.privacidad === 'amigos' ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: foto.privacidad === 'amigos' ? 'rgba(255,184,0,0.2)' : 'rgba(255,255,255,0.1)',
                      color: '#FFB800',
                      border: foto.privacidad === 'amigos' ? '2px solid #FFB800' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Users size={14} />
                    Amigos
                  </button>

                  <button
                    onClick={() => handleCambiarPrivacidad(foto.id, 'privada')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      foto.privacidad === 'privada' ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: foto.privacidad === 'privada' ? 'rgba(255,8,68,0.2)' : 'rgba(255,255,255,0.1)',
                      color: '#FF0844',
                      border: foto.privacidad === 'privada' ? '2px solid #FF0844' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Lock size={14} />
                    Privada
                  </button>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2">
                  {!foto.esPerfil && (
                    <button
                      onClick={() => handleEstablecerPerfil(foto.id)}
                      className="flex-1 px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                      style={{
                        background: 'rgba(255,184,0,0.2)',
                        color: 'var(--sexy-gold)',
                        border: '1px solid rgba(255,184,0,0.5)'
                      }}
                    >
                      <Star size={16} />
                      Foto de Perfil
                    </button>
                  )}

                  <button
                    onClick={() => handleEliminar(foto.id)}
                    className="px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                    style={{
                      background: 'rgba(255,8,68,0.2)',
                      color: 'var(--sexy-red)',
                      border: '1px solid rgba(255,8,68,0.5)'
                    }}
                  >
                    <Trash2 size={16} />
                    Eliminar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizarFotosView;
