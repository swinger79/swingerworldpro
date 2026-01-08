import React, { useState } from 'react';
import { X, Ban } from 'lucide-react';
import { motion } from 'framer-motion';

const BlockUserModal = ({ isOpen, onClose, user, onBlock }) => {
  const [blockMessages, setBlockMessages] = useState(true);
  const [blockProfile, setBlockProfile] = useState(true);
  const [blockNotifications, setBlockNotifications] = useState(true);
  const [reason, setReason] = useState('');

  const handleBlock = async () => {
    try {
      const response = await fetch('/api/blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocked_id: user.id,
          reason,
          block_messages: blockMessages,
          block_profile_view: blockProfile,
          block_notifications: blockNotifications
        })
      });

      if (response.ok) {
        onBlock && onBlock(user.id);
        alert('Usuario bloqueado correctamente');
        onClose();
      }
    } catch (error) {
      alert('Error al bloquear usuario');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="card-sexy p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Ban size={28} style={{ color: 'var(--sexy-red)' }} />
              <h2 className="text-2xl font-bold text-white">Bloquear Usuario</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-gray-300 mb-4">
              ¿Estás seguro de que quieres bloquear a <strong>{user?.name}</strong>?
            </p>

            <div className="space-y-3 mb-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={blockMessages}
                  onChange={(e) => setBlockMessages(e.target.checked)}
                  className="w-5 h-5"
                  style={{ accentColor: 'var(--sexy-red)' }}
                />
                <span className="text-white">Bloquear mensajes</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={blockProfile}
                  onChange={(e) => setBlockProfile(e.target.checked)}
                  className="w-5 h-5"
                  style={{ accentColor: 'var(--sexy-red)' }}
                />
                <span className="text-white">Ocultar mi perfil</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={blockNotifications}
                  onChange={(e) => setBlockNotifications(e.target.checked)}
                  className="w-5 h-5"
                  style={{ accentColor: 'var(--sexy-red)' }}
                />
                <span className="text-white">Bloquear notificaciones</span>
              </label>
            </div>

            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Razón del bloqueo (opcional)"
              rows={3}
              className="w-full px-4 py-3 rounded-lg"
              style={{
                background: 'rgba(20,20,20,0.9)',
                border: '2px solid rgba(255,8,68,0.4)',
                color: 'white'
              }}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-lg font-bold"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white'
              }}
            >
              Cancelar
            </button>
            <button
              onClick={handleBlock}
              className="flex-1 py-3 rounded-lg font-bold"
              style={{
                background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                color: 'white'
              }}
            >
              Bloquear
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlockUserModal;
