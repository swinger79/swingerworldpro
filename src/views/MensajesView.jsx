import React, { useState } from 'react';
import { AI_MEMBERS_ENHANCED } from '../data/membersAIEnhanced';
import { Send, Video, Phone, MoreVertical, Search, ArrowLeft } from 'lucide-react';

const MensajesView = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [isPremium] = useState(false); // Simular usuario FREE

  const onlineUsers = AI_MEMBERS_ENHANCED.filter(m => m.status === 'online');

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Mensaje enviado a ${selectedChat.name}: ${message}`);
      setMessage('');
    }
  };

  const handleVideoCall = () => {
    if (isPremium) {
      alert(`Iniciando videollamada con ${selectedChat.name}...`);
    } else {
      setShowPremiumModal(true);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 fire-text">💬 Mensajes</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de conversaciones */}
          <div className="lg:col-span-1 rounded-xl overflow-hidden" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            height: '600px'
          }}>
            <div className="p-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar conversaciones..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-white placeholder-gray-500"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid var(--border-subtle)'
                  }}
                />
              </div>
            </div>

            <div className="overflow-y-auto" style={{ height: 'calc(600px - 72px)' }}>
              {onlineUsers.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedChat(user)}
                  className="flex items-center gap-3 p-4 cursor-pointer transition-all"
                  style={{
                    background: selectedChat?.id === user.id ? 'rgba(255,8,68,0.1)' : 'transparent',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  <div className="relative">
                    <img
                      src={user.media?.photos?.[0]}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {user.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">{user.name}</h4>
                    <p className="text-sm text-gray-400 truncate">
                      {user.status === 'online' ? 'Activo ahora' : 'Ausente'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Área de chat */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            height: '600px'
          }}>
            {selectedChat ? (
              <div className="flex flex-col h-full">
                {/* Header del chat */}
                <div className="p-4 flex items-center justify-between" style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  background: 'rgba(255,8,68,0.05)'
                }}>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedChat(null)}
                      className="lg:hidden text-white"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <img
                      src={selectedChat.media?.photos?.[0]}
                      alt={selectedChat.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-bold">{selectedChat.name}</h3>
                      <p className="text-sm" style={{ color: 'var(--sexy-gold)' }}>
                        {selectedChat.status === 'online' ? 'Activo ahora' : 'Ausente'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleVideoCall}
                      className="p-2 rounded-full transition-all"
                      style={{
                        background: 'rgba(255,8,68,0.2)',
                        color: 'var(--sexy-red)'
                      }}
                    >
                      <Video size={20} />
                    </button>
                    <button className="p-2 rounded-full transition-all" style={{
                      background: 'rgba(255,184,0,0.2)',
                      color: 'var(--sexy-gold)'
                    }}>
                      <Phone size={20} />
                    </button>
                    <button className="p-2 text-gray-400">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>

                {/* Mensajes */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="text-center text-gray-400 text-sm mb-4">
                    Inicio de la conversación con {selectedChat.name}
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="max-w-xs px-4 py-2 rounded-2xl" style={{
                        background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                        color: 'white'
                      }}>
                        ¡Hola! ¿Cómo estás?
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-xs px-4 py-2 rounded-2xl" style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: 'white'
                      }}>
                        ¡Hola! Muy bien, ¿y tú? 😊
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input de mensaje */}
                <div className="p-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Escribe un mensaje..."
                      className="flex-1 px-4 py-3 rounded-full text-white placeholder-gray-500"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    />
                    <button
                      onClick={handleVideoCall}
                      className="p-3 rounded-full transition-all"
                      style={{
                        background: 'rgba(255,8,68,0.2)',
                        color: 'var(--sexy-red)'
                      }}
                    >
                      <Video size={20} />
                    </button>
                    <button
                      onClick={handleSendMessage}
                      className="p-3 rounded-full transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                        color: 'white'
                      }}
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <p>Selecciona una conversación para empezar</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Premium */}
      {showPremiumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.9)' }}>
          <div className="p-8 rounded-3xl max-w-md text-center" style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--border-subtle)'
          }}>
            <div className="text-6xl mb-4">🎥</div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--sexy-gold)' }}>
              Función Premium
            </h3>
            <p className="text-gray-300 mb-6">
              Las videollamadas son una característica exclusiva para miembros Premium. 
              Actualiza tu cuenta para disfrutar de esta y otras funciones.
            </p>
            <div className="space-y-3">
              <button
                className="w-full py-3 rounded-lg font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                  color: 'white'
                }}
              >
                Comprar Membresía Premium
              </button>
              <button
                onClick={() => setShowPremiumModal(false)}
                className="w-full py-3 rounded-lg font-bold text-gray-400"
              >
                Más tarde
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MensajesView;
