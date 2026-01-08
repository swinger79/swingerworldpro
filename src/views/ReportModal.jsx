import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ReportModal = ({ isOpen, onClose, reportedUser, reportedType = 'user' }) => {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const reasons = [
    { value: 'inappropriate_content', label: 'Contenido inapropiado' },
    { value: 'harassment', label: 'Acoso o intimidación' },
    { value: 'spam', label: 'Spam o publicidad' },
    { value: 'fake_profile', label: 'Perfil falso' },
    { value: 'underage', label: 'Menor de edad' },
    { value: 'other', label: 'Otro' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reported_type: reportedType,
          reported_id: reportedUser?.id,
          reason,
          description
        })
      });

      if (response.ok) {
        alert('Reporte enviado correctamente. Lo revisaremos pronto.');
        onClose();
      }
    } catch (error) {
      alert('Error al enviar el reporte');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="w-full max-w-lg"
        >
          <div className="card-sexy p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <AlertTriangle size={28} style={{ color: 'var(--sexy-red)' }} />
                <h2 className="text-2xl font-bold text-white">Reportar Usuario</h2>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2">
                  Motivo del reporte *
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(20,20,20,0.9)',
                    border: '2px solid rgba(255,8,68,0.4)',
                    color: 'white'
                  }}
                >
                  <option value="">Selecciona un motivo</option>
                  {reasons.map(r => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-white font-bold mb-2">
                  Descripción (opcional)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Proporciona más detalles sobre el problema..."
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
                  type="button"
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
                  type="submit"
                  disabled={!reason || submitting}
                  className="flex-1 py-3 rounded-lg font-bold"
                  style={{
                    background: submitting || !reason 
                      ? 'rgba(100,100,100,0.3)' 
                      : 'linear-gradient(135deg, #FF0844 0%, #FFB800 100%)',
                    color: 'white',
                    cursor: submitting || !reason ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitting ? 'Enviando...' : 'Enviar Reporte'}
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Los reportes falsos pueden resultar en la suspensión de tu cuenta
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ReportModal;
