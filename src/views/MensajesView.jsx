import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical, ArrowLeft, Image, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TODOS_MIEMBROS from '../data/memberGenerator';

const MensajesView = ({ isPremium = false, onNavigate }) => {
  const onlineUsers = TODOS_MIEMBROS.filter(m => m.status === 'online').slice(0, 20);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! ¿Cómo estás?', sender: 'them', time: '10:30' },
    { id: 2, text: 'Hola! Muy bien, ¿y tú?', sender: 'me', time: '10:32' },
    { id: 3, text: 'Genial! Vi tu perfil y me gustó mucho', sender: 'them', time: '10:33' }
  ]);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, {
      id: Date.now(),
      text: message,
      sender: 'me',
      time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    }]);
    setMessage('');
  };

  const handleVideoCall = () => {
    if (!isPremium) {
      setShowPremiumModal(true);
    } else {
      alert('Iniciando videollamada...');
    }
  };

  return (
    <div className="h-[calc(100vh-200px)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Lista de conversaciones */}
        <div className={`${selectedUser ? 'hidden md:block' : ''} card-sexy overflow-y-auto`}>
          <div className="p-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
            <input
              type="text"
              placeholder="Buscar conversaciones..."
              className="w-full px-4 py-2 rounded-lg text-white"
              style={{
                background: 'rgba(20,20,20,0.9)',
                border: '2px solid rgba(255,8,68,0.4)'
              }}
            />
          </div>

          <div className="space-y-2 p-2">
            {onlineUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedUser?.id === user.id ? 'bg-opacity-20' : ''
                }`}
                style={{
                  background: selectedUser?.id === user.id 
                    ? 'rgba(255,8,68,0.2)' 
                    : 'transparent',
                  border: selectedUser?.id === user.id
                    ? '1px solid rgba(255,8,68,0.5)'
                    : '1px solid transparent'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={user.media?.photos?.[0]}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {user.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500"
                        style={{ border: '2px solid #1A1A1A' }}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white truncate">{user.name}</p>
                    <p className="text-sm text-gray-400 truncate">
                      {user.status === 'online' ? 'Activo ahora' : user.ultimaConexion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Área de chat */}
        <div className="md:col-span-2 card-sexy flex flex-col">
          {selectedUser ? (
            <>
              {/* Header del chat */}
              <div className="p-4 border-b flex items-center justify-between"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="md:hidden"
                  >
                    <ArrowLeft size={24} color="white" />
                  </button>
                  <img
                    src={selectedUser.media?.photos?.[0]}
                    alt={selectedUser.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{selectedUser.name}</p>
                    <p className="text-sm" style={{ color: '#00ff00' }}>Activo ahora</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleVideoCall}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                    style={{
                      background: 'rgba(255,8,68,0.2)',
                      border: '1px solid rgba(255,8,68,0.5)'
                    }}
                  >
                    <Video size={20} style={{ color: 'var(--sexy-red)' }} />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                    style={{
                      background: 'rgba(255,8,68,0.2)',
                      border: '1px solid rgba(255,8,68,0.5)'
                    }}
                  >
                    <Phone size={20} style={{ color: 'var(--sexy-red)' }} />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                    style={{
                      background: 'rgba(255,8,68,0.2)',
                      border: '1px solid rgba(255,8,68,0.5)'
                    }}
                  >
                    <MoreVertical size={20} style={{ color: 'var(--sexy-red)' }} />
                  </button>
                </div>
              </div>

              {/* Mensajes */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className="max-w-[70%] px-4 py-2 rounded-2xl"
                      style={{
                        background: msg.sender === 'me'
                          ? 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)'
                          : 'rgba(255,255,255,0.1)',
                        color: 'white'
                      }}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input de mensaje */}
              <div className="p-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255,8,68,0.2)',
                      border: '1px solid rgba(255,8,68,0.5)'
                    }}
                  >
                    <Image size={20} style={{ color: 'var(--sexy-red)' }} />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255,8,68,0.2)',
                      border: '1px solid rgba(255,8,68,0.5)'
                    }}
                  >
                    <Smile size={20} style={{ color: 'var(--sexy-red)' }} />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 px-4 py-2 rounded-full text-white"
                    style={{
                      background: 'rgba(20,20,20,0.9)',
                      border: '2px solid rgba(255,8,68,0.4)'
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-10 h-10 rounded-full flex items-center justify-center fire-pulse"
                    style={{
                      background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)'
                    }}
                  >
                    <Send size={20} color="white" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-gray-400">
                  Selecciona una conversación para empezar a chatear
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Premium */}
      {showPremiumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.95)' }}
          onClick={() => setShowPremiumModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full p-8 rounded-3xl text-center"
            style={{
              background: 'linear-gradient(135deg, #1E1E1E 0%, #2A1010 100%)',
              border: '2px solid rgba(255,8,68,0.5)'
            }}
          >
            <div className="text-6xl mb-4">👑</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Función Premium
            </h3>
            <p className="text-gray-300 mb-6">
              Las videollamadas son una característica exclusiva para miembros Premium
            </p>
            <button
              onClick={() => {
                setShowPremiumModal(false);
                if (onNavigate) onNavigate('premium');
              }}
              className="w-full py-3 rounded-lg font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                color: 'white'
              }}
            >
              Ver Planes Premium
            </button>
            <button
              onClick={() => setShowPremiumModal(false)}
              className="mt-3 text-gray-400 hover:text-white"
            >
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MensajesView;
