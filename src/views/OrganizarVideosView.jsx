import React, { useState } from 'react';
import { Upload, Trash2, Eye, Users, Lock, GripVertical, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const OrganizarVideosView = () => {
  const [videos, setVideos] = useState([
    { 
      id: 1, 
      thumbnail: 'https://picsum.photos/400/300?random=1',
      duration: '2:15',
      privacidad: 'publica'
    },
    { 
      id: 2, 
      thumbnail: 'https://picsum.photos/400/300?random=2',
      duration: '1:45',
      privacidad: 'amigos'
    },
    { 
      id: 3, 
      thumbnail: 'https://picsum.photos/400/300?random=3',
      duration: '3:20',
      privacidad: 'publica'
    },
    { 
      id: 4, 
      thumbnail: 'https://picsum.photos/400/300?random=4',
      duration: '0:58',
      privacidad: 'privada'
    }
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleEliminar = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este video?')) {
      setVideos(videos.filter(v => v.id !== id));
      showNotification('Video eliminado correctamente');
    }
  };

  const handleCambiarPrivacidad = (id, nuevaPrivacidad) => {
    setVideos(videos.map(v => 
      v.id === id ? { ...v, privacidad: nuevaPrivacidad } : v
    ));
    showNotification(`Privacidad cambiada a: ${nuevaPrivacidad}`);
  };

  const handleAñadirVideo = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.multiple = true;
    input.onchange = (e) => {
      showNotification('Videos añadidos correctamente (simulación)');
      // En producción aquí irían los videos reales
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

  const handleDragStart = (e, video) => {
    setDraggedItem(video);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetVideo) => {
    e.preventDefault();
    if (!draggedItem) return;

    const draggedIndex = videos.findIndex(v => v.id === draggedItem.id);
    const targetIndex = videos.findIndex(v => v.id === targetVideo.id);

    const newVideos = [...videos];
    newVideos.splice(draggedIndex, 1);
    newVideos.splice(targetIndex, 0, draggedItem);

    setVideos(newVideos);
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
          <h2 className="text-4xl font-bold mb-2 fire-text">🎥 Tus videos</h2>
          <p className="text-gray-400">
            {videos.length} videos • Arrastra para reordenar
          </p>
        </div>

        {/* Botón añadir videos */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAñadirVideo}
          className="w-full py-4 rounded-xl font-bold text-lg mb-6 flex items-center justify-center gap-3"
          style={{
            background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
            color: 'white',
            boxShadow: '0 4px 20px rgba(255,8,68,0.4)'
          }}
        >
          <Upload size={24} />
          Añadir un nuevo video
        </motion.button>

        {/* Grid de videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              draggable
              onDragStart={(e) => handleDragStart(e, video)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, video)}
              whileHover={{ scale: 1.02 }}
              className="card-sexy overflow-hidden cursor-move"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt="Video"
                  className="w-full h-full object-cover"
                />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center fire-pulse"
                    style={{
                      background: 'rgba(255,8,68,0.9)'
                    }}
                  >
                    <Play size={32} fill="white" color="white" />
                  </div>
                </div>

                {/* Duración */}
                <div className="absolute bottom-2 right-2 px-3 py-1 rounded-lg font-bold text-sm"
                  style={{
                    background: 'rgba(0,0,0,0.9)',
                    color: 'white'
                  }}
                >
                  {video.duration}
                </div>

                {/* Badge de privacidad */}
                <div className="absolute top-2 right-2 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-2"
                  style={{
                    background: 'rgba(0,0,0,0.8)',
                    color: getPrivacidadColor(video.privacidad)
                  }}
                >
                  {getPrivacidadIcon(video.privacidad)}
                  {video.privacidad.charAt(0).toUpperCase() + video.privacidad.slice(1)}
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
                    onClick={() => handleCambiarPrivacidad(video.id, 'publica')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      video.privacidad === 'publica' ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: video.privacidad === 'publica' ? 'rgba(0,255,0,0.2)' : 'rgba(255,255,255,0.1)',
                      color: '#00ff00',
                      border: video.privacidad === 'publica' ? '2px solid #00ff00' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Eye size={14} />
                    Pública
                  </button>

                  <button
                    onClick={() => handleCambiarPrivacidad(video.id, 'amigos')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      video.privacidad === 'amigos' ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: video.privacidad === 'amigos' ? 'rgba(255,184,0,0.2)' : 'rgba(255,255,255,0.1)',
                      color: '#FFB800',
                      border: video.privacidad === 'amigos' ? '2px solid #FFB800' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Users size={14} />
                    Amigos
                  </button>

                  <button
                    onClick={() => handleCambiarPrivacidad(video.id, 'privada')}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      video.privacidad === 'privada' ? 'opacity-100' : 'opacity-50'
                    }`}
                    style={{
                      background: video.privacidad === 'privada' ? 'rgba(255,8,68,0.2)' : 'rgba(255,255,255,0.1)',
                      color: '#FF0844',
                      border: video.privacidad === 'privada' ? '2px solid #FF0844' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Lock size={14} />
                    Privada
                  </button>
                </div>

                {/* Botón eliminar */}
                <button
                  onClick={() => handleEliminar(video.id)}
                  className="w-full px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                  style={{
                    background: 'rgba(255,8,68,0.2)',
                    color: 'var(--sexy-red)',
                    border: '1px solid rgba(255,8,68,0.5)'
                  }}
                >
                  <Trash2 size={16} />
                  Eliminar video
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizarVideosView;
